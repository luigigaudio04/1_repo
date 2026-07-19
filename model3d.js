// ═══════════════════════════════════════════════════════════
//  3D PERSONA MODELS — walking (Profilo/Dieta) and running (Attività), each rotating on its own
//  axis behind the cards, playing whichever single animation clip is already baked into its GLB.
// ═══════════════════════════════════════════════════════════
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const canvas = document.getElementById('personaCanvas');

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
camera.position.set(0, 0, 6.5);

const ambient = new THREE.AmbientLight(0xffffff, 1.1);
scene.add(ambient);

const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
keyLight.position.set(2, 3, 4);
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0xff8a5c, 0.9);
rimLight.position.set(-3, 1, -2);
scene.add(rimLight);

function resize() {
  const rect = canvas.getBoundingClientRect();
  const w = Math.max(1, rect.width);
  const h = Math.max(1, rect.height);
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

new ResizeObserver(resize).observe(canvas);
resize();

// Rather than target a fixed height, this scales each model to use as much of the frame as it
// safely can in *both* dimensions: tall enough to nearly fill the vertical frustum, but never so
// wide (as its limbs swing out mid-animation) that it passes the horizontal edge. Pulling the
// camera back alone doesn't help with the latter — a farther camera needs a proportionally taller
// model to look the same size, and its swing radius grows by that same proportion, so the two
// cancel out. The real lever for a bigger model without clipping is the canvas's own aspect ratio
// (how wide the frame is relative to the character's own limb-swing reach), which is why
// persona-canvas is 360×520 (not square, and wider than the original 200) in style.css.
const SAFETY = 0.93; // use 93% of the available room in each dimension, so a swinging limb never
                      // touches the exact frustum edge (which would still look clipped)

// A SkinnedMesh's *static* geometry bounding box (its raw vertex data, ignoring the skeleton
// entirely) is a poor proxy for how tall this particular GLB actually renders: its mesh sits
// structurally under an ancestor with its own baked-in scale (shrinking the static geometry ~100x
// smaller than real size), while its skin bind data separately amplifies the animated result by a
// near-matching ~100x in the other direction. Those two roughly cancel in practice, but only once
// both are accounted for together — so rather than reason about either one, this measures actual
// *posed* vertex positions (via applyBoneTransform, composed with the mesh's real matrixWorld) to
// get the true rendered size and horizontal reach directly.
function measurePose(model, skinned, sampleCount = 400) {
  model.updateMatrixWorld(true);
  const posAttr = skinned.geometry.attributes.position;
  const count = posAttr.count;
  const step = Math.max(1, Math.floor(count / sampleCount));
  const box = new THREE.Box3();
  let maxRadius = 0;
  const tmp = new THREE.Vector3();
  for (let i = 0; i < count; i += step) {
    tmp.fromBufferAttribute(posAttr, i);
    skinned.applyBoneTransform(i, tmp);
    tmp.applyMatrix4(skinned.matrixWorld);
    box.expandByPoint(tmp);
    const r = Math.hypot(tmp.x, tmp.z); // distance from the vertical spin axis
    if (r > maxRadius) maxRadius = r;
  }
  return { box, maxRadius };
}

// Loads a model and measures, across its whole animation clip, the largest safe uniform scale
// that keeps it fully in frame in both dimensions — but doesn't apply that scale yet. Walking and
// running have different enough poses (a running stride reaches much further from the spin axis
// than a walking one) that each would otherwise end up a different *size* depending on which tab
// it's shown on; the two candidate scales get resolved to a single shared one once both models
// have loaded, in loadPersonas() below, so they always match across Profilo/Dieta and Attività.
function loadPersona(path) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      path,
      gltf => {
        const model = gltf.scene;

        let skinned = null;
        model.traverse(node => { if (node.isSkinnedMesh) skinned = node; });

        const mixer = new THREE.AnimationMixer(model);
        const clip = gltf.animations && gltf.animations[0];
        if (clip) mixer.clipAction(clip).play();

        // Sample the pose at several points across the full clip (a run/walk cycle swings limbs
        // out far more at some phases than others) to find the true worst-case height and radius,
        // rather than just whatever the opening frame happens to show.
        let maxHeight = 1;
        let maxRadius = 0;
        const centerBox = new THREE.Box3();
        const sampleTimes = clip ? 8 : 1;
        for (let i = 0; i < sampleTimes; i++) {
          if (clip) mixer.setTime((clip.duration * i) / sampleTimes);
          const { box, maxRadius: r } = measurePose(model, skinned);
          const size = new THREE.Vector3();
          box.getSize(size);
          maxHeight = Math.max(maxHeight, size.y);
          maxRadius = Math.max(maxRadius, r);
          centerBox.union(box);
        }
        if (clip) mixer.setTime(0);

        // Two independent frustum limits — how tall the model can be before its head/feet cross
        // the top/bottom edge, and how far a swinging limb can reach from the spin axis before it
        // crosses the left/right edge — computed straight from the camera's own FOV/aspect/distance
        // rather than a fixed number, so the model always ends up exactly as large as *this*
        // canvas safely allows, in both dimensions, at once.
        const halfFovY = THREE.MathUtils.degToRad(camera.fov) / 2;
        const cameraZ = camera.position.z;
        const maxHeightAllowed = SAFETY * 2 * cameraZ * Math.tan(halfFovY);
        const maxRadiusAllowed = SAFETY * camera.aspect * cameraZ * Math.tan(halfFovY);
        const candidateScale = Math.min(maxHeightAllowed / maxHeight, maxRadiusAllowed / maxRadius);

        model.traverse(node => { if (node.isMesh) node.frustumCulled = false; });

        resolve({ model, mixer, centerBox, candidateScale });
      },
      undefined,
      err => reject(err)
    );
  });
}

// Applies a shared scale to a measured model, centers it on its own pivot (using the union box
// across the whole clip, so it doesn't drift off-center as it animates), and wraps it in a
// separate spinner group — the continuous "rotate on its own axis" animation lives there rather
// than on `model` itself, keeping sizing and spinning as two independent concerns.
function finalizePersona({ model, mixer, centerBox }, sharedScale) {
  model.scale.setScalar(sharedScale);

  // `centerBox` was measured while model.scale was still 1, so its center needs the same scale
  // factor applied before it can be used to offset `model.position` (position is applied in the
  // *parent's* space, after the object's own scale).
  const center = new THREE.Vector3();
  centerBox.getCenter(center);
  model.position.copy(center).multiplyScalar(-sharedScale);
  model.updateMatrixWorld(true);

  const spinner = new THREE.Group();
  spinner.add(model);
  scene.add(spinner);

  return { spinner, mixer };
}

let walking = null;
let running = null;

Promise.all([loadPersona('persona-walking.glb'), loadPersona('persona-running.glb')])
  .then(([walkingMeasured, runningMeasured]) => {
    const sharedScale = Math.min(walkingMeasured.candidateScale, runningMeasured.candidateScale);
    walking = finalizePersona(walkingMeasured, sharedScale);
    running = finalizePersona(runningMeasured, sharedScale);
  })
  .catch(err => console.error('Errore nel caricamento dei modelli 3D:', err));

// "Attività" shows the running model; every other tab (Profilo, Dieta, and Coach — hidden behind
// its own opacity fade regardless) shows the walking one.
function updateActiveModel() {
  const showRunning = window.currentTab === 'gym';
  if (walking) walking.spinner.visible = !showRunning;
  if (running) running.spinner.visible = showRunning;
}

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

  updateActiveModel();

  // Only the currently-visible model needs its mixer/rotation advanced each frame — updating the
  // hidden one too would double the skeletal-animation cost for no visible benefit.
  const active = window.currentTab === 'gym' ? running : walking;
  if (active) {
    active.mixer.update(delta);
    active.spinner.rotation.y += 0.008;
  }

  renderer.render(scene, camera);
}
animate();
