// ═══════════════════════════════════════════════════════════
//  3D HELIX CAROUSEL + CARD DATA LOGIC
// ═══════════════════════════════════════════════════════════

const DATA_MAP = {
  profile: [
    {
      title: 'Energie Bruciate',
      metric: 'Kcal',
      cur: 1600,
      goal: 2100,
      u: '',
      color: '#F19E4C' // Macros
    },
    {
      title: 'Attività',
      metric: 'Distanza',
      cur: 4.1,
      goal: 5,
      u: 'km',
      color: '#FFC943' // Daily
    },
    {
      title: 'Il mio corpo',
      metric: 'Peso',
      cur: 75,
      goal: 90,
      u: 'kg',
      type: 'graph',
      color: '#F14C6B' // Workouts
    },
    {
      title: 'Battito',
      metric: 'Fase 1',
      cur: 67,
      goal: 'buono',
      ringGoal: 100,
      u: '',
      color: '#F14C6B' // Workouts
    },
    {
      title: 'Sonno',
      metric: 'Sufficiente',
      cur: 80,
      goal: 100,
      u: '',
      color: '#9D74F5' // Sleep & Oxygenation
    },
    {
      title: 'Ossigenazione',
      metric: 'Buono',
      cur: 96,
      goal: 100,
      u: '',
      type: 'graph',
      color: '#9D74F5' // Sleep & Oxygenation
    },
    {
      title: 'Dispositivo',
      metric: 'Galaxy Ring',
      cur: 67,
      goal: 100,
      u: '',
      color: '#D9D9D9' // Devices
    },
  ],
  diet: [
    {
      title: 'Dieta',
      metric: 'Prossimo',
      cur: 6,
      goal: 'min',
      u: '',
      type: 'segmented',
      color: '#79DA5E'
    },
    {
      title: 'Energie Bruciate',
      metric: 'Kcal',
      cur: 1600,
      goal: 2100,
      u: '',
      color: '#F19E4C'
    },
    {
      title: 'Grassi',
      metric: 'Quantità',
      cur: 41,
      goal: 65,
      u: 'g',
      color: '#F19E4C'
    },
    {
      title: 'Carboidrati',
      metric: 'Quantità',
      cur: 450,
      goal: 665,
      u: 'g',
      color: '#F19E4C'
    },
    {
      title: 'Proteine',
      metric: 'Quantità',
      cur: 110,
      goal: 150,
      u: 'g',
      color: '#F19E4C'
    },
    {
      title: 'Acqua',
      metric: 'Quantità',
      cur: 1.6,
      goal: 2,
      u: 'L',
      color: '#79D9EC'
    }
  ],
  gym: [
    {
      title: 'Allenamento',
      metric: 'Prossimo',
      cur: 'Sabato',
      goal: 'Lunedì',
      u: '',
      type: 'segmented',
      color: '#F14C6B'
    },
    {
      title: 'Battito',
      metric: 'Attuale',
      cur: 67,
      goal: 'buono',
      ringGoal: 100,
      u: '',
      color: '#F14C6B'
    },
    {
      title: 'Minuti Attività',
      metric: 'Tempo',
      cur: 46,
      goal: 90,
      u: 'min',
      color: '#FFC943'
    },
    {
      title: 'Attività',
      metric: 'Distanza',
      cur: 4.1,
      goal: 5,
      u: 'km',
      color: '#FFC943'
    },
    {
      title: 'Energie Bruciate',
      metric: 'Kcal',
      cur: 1600,
      goal: 2100,
      u: '',
      color: '#F19E4C'
    },
    {
      title: 'Il mio corpo',
      metric: 'Peso',
      cur: 75,
      goal: 90,
      u: 'kg',
      type: 'graph',
      color: '#F14C6B'
    }
  ]
};

let DATA = DATA_MAP.profile;

const frameEl = document.getElementById('frame');
const sceneEl = document.getElementById('scene');
const hologram = document.getElementById('hologram');
const glowBg = document.getElementById('glowBg');
const dotsEl = document.getElementById('dots');
const headerLeftEl = document.getElementById('headerLeft');
const coachViewEl = document.getElementById('coachView');
const chatInputBarEl = document.getElementById('chatInputBar');
const settingsViewEl = document.getElementById('settingsView');
const settingsBtnEl = document.getElementById('settingsBtn');
const settingsIconGearEl = document.getElementById('settingsIconGear');
const settingsIconCloseEl = document.getElementById('settingsIconClose');
const chatMessagesEl = document.getElementById('chatMessages');
const chatInputEl = document.getElementById('chatInput');
const chatSendBtn = document.getElementById('chatSendBtn');
const headerTitleEl = document.getElementById('headerTitle');
const headerSubtitleEl = document.getElementById('headerSubtitle');
const bottomNavEl = document.querySelector('.bottom-nav');
const sceneFadeTopEl = document.getElementById('sceneFadeTop');
const sceneFadeBottomEl = document.getElementById('sceneFadeBottom');
const workoutViewEl = document.getElementById('workoutView');
const workoutCalendarBarEl = document.getElementById('workoutCalendarBar');
const workoutCalPrevEl = document.getElementById('workoutCalPrev');
const workoutCalDateEl = document.getElementById('workoutCalDate');
const workoutCalNextEl = document.getElementById('workoutCalNext');
const executionViewEl = document.getElementById('executionView');
const executionButtonBarEl = document.getElementById('executionButtonBar');
const executionContinueBtnEl = document.getElementById('executionContinueBtn');
const dietViewEl = document.getElementById('dietView');
const dietCalendarBarEl = document.getElementById('dietCalendarBar');
const dietCalPrevEl = document.getElementById('dietCalPrev');
const dietCalDateEl = document.getElementById('dietCalDate');
const dietCalNextEl = document.getElementById('dietCalNext');
const sgarroViewEl = document.getElementById('sgarroView');
const sgarroFrameEl = document.getElementById('sgarroFrame');
const sgarroPreviewImageEl = document.getElementById('sgarroPreviewImage');
const sgarroShutterBtnEl = document.getElementById('sgarroShutterBtn');
const sgarroGalleryGridEl = document.getElementById('sgarroGalleryGrid');
const sgarroButtonBarEl = document.getElementById('sgarroButtonBar');
const sgarroTabCameraEl = document.getElementById('sgarroTabCamera');
const sgarroTabGalleryEl = document.getElementById('sgarroTabGallery');
const sgarroCameraInputEl = document.getElementById('sgarroCameraInput');
const sgarroRetakeBtnEl = document.getElementById('sgarroRetakeBtn');
const sgarroSendBtnEl = document.getElementById('sgarroSendBtn');
const photolibViewEl = document.getElementById('photolibView');
const photolibGridEl = document.getElementById('photolibGrid');
const photolibButtonBarEl = document.getElementById('photolibButtonBar');
const photolibDeleteBtnEl = document.getElementById('photolibDeleteBtn');
const leMieFotoBtnEl = document.getElementById('leMieFotoBtn');
const fotoCorpoBtnEl = document.getElementById('fotoCorpoBtn');

// Live clock in status bar
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const el = document.getElementById('statusTime');
  if (el) el.textContent = `${h}:${m}`;
}
updateClock();
setInterval(updateClock, 10000);

// Helper: Convert hex code to rgb digits for CSS custom variables
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '255, 75, 40';
}

// Ring fill ratio: uses ringGoal (a numeric target) when the displayed goal text isn't itself a number
// (e.g. Battito shows "/buono" as text but still fills the ring against ringGoal: 100)
function getRingRatio(d) {
  let goalNum = null;
  if (typeof d.ringGoal === 'number' && d.ringGoal > 0) {
    goalNum = d.ringGoal;
  } else if (d.goal !== '' && !isNaN(Number(d.goal))) {
    goalNum = Number(d.goal);
  }
  if (goalNum === null || goalNum <= 0) return 1;

  // Clamped at 100% — going past the goal (e.g. logging more water than the daily target) keeps
  // the ring fully filled rather than emptying out or overflowing past a full circle.
  return Math.min(1, d.cur / goalNum);
}

// ── Coach Chat Logic ──────────────────────────────
const COACH_MESSAGES = [
  { from: 'coach', text: 'Ciao! Come va con l\'allenamento di questa settimana?' },
  { from: 'user', text: 'Bene, ho completato 3 sessioni su 4 programmate.' },
  { from: 'coach', text: 'Ottimo ritmo. Ho visto anche che hai raggiunto l\'obiettivo di acqua tutti i giorni, complimenti.' },
  { from: 'user', text: 'Sì, i promemoria mi stanno aiutando molto a ricordarmene.' },
  { from: 'coach', text: 'Perfetto. Per l\'allenamento di domani ho aggiunto un po\' di lavoro sulle gambe.' },
  { from: 'user', text: 'Va bene, quanto recupero mi consigli prima della prossima sessione gambe?' },
  { from: 'coach', text: 'Sì, aggiungi 30g nei giorni di gambe. Vediamo come va.' },
  { from: 'user', text: 'Molto bene, ho più energia e il recupero è migliorato' },
  { from: 'coach', text: 'Buongiorno. Vedo che il peso è stabile, quindi oggi carichiamo le calorie.\nHo già aggiornato il tuo piano alimentare.' },
  { from: 'user', text: 'Buongiorno. Ho visto le nuove quantità, farò fatica a finire tutto il pranzo ma cercherò di rispettare i macronutrienti previsti.' },
  { from: 'coach', text: 'Se ti senti troppo sazio, bevi un frullato calorico a metà pomeriggio come alternativa.' },
  { from: 'user', text: 'Va bene grazie coach.' },
  { from: 'coach', text: 'Come va il sonno questa settimana? Vedo che sei sceso a circa 6 ore e mezza a notte.' },
  { from: 'user', text: 'Sì, un paio di serate difficili. Da stasera provo a rimettermi in orario.' },
  { from: 'coach', text: 'Prova a spegnere lo schermo mezz\'ora prima di dormire, aiuta parecchio con la qualità del sonno.' },
  { from: 'user', text: 'Grazie del consiglio, lo provo subito!' }
];

function appendChatBubble(from, text) {
  const el = document.createElement('div');
  el.className = 'chat-bubble ' + (from === 'coach' ? 'coach' : 'user');
  el.textContent = text;
  chatMessagesEl.appendChild(el);
  chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
  return el;
}

// A "Segnala Sgarro" photo (camera or gallery) shows up in the chat as an image bubble instead
// of text — same bubble shell, see .chat-bubble-image's thin padding override in style.css.
function appendChatImageBubble(from, dataUrl) {
  const el = document.createElement('div');
  el.className = 'chat-bubble chat-bubble-image ' + (from === 'coach' ? 'coach' : 'user');
  const img = document.createElement('img');
  img.className = 'chat-bubble-img';
  img.src = dataUrl;
  el.appendChild(img);
  chatMessagesEl.appendChild(el);
  chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
  return el;
}

function renderCoachMessages() {
  if (chatMessagesEl.dataset.rendered) return;
  chatMessagesEl.dataset.rendered = 'true';
  COACH_MESSAGES.forEach(m => appendChatBubble(m.from, m.text));
}

function sendChatMessage() {
  const text = chatInputEl.value.trim();
  if (!text) return;
  appendChatBubble('user', text);
  chatInputEl.value = '';
}

chatSendBtn.addEventListener('click', sendChatMessage);
chatInputEl.addEventListener('keydown', e => {
  if (e.key === 'Enter') sendChatMessage();
});

// ── Card DOM Construction ────────────────────────
function makeCard(d) {
  const circ = 2 * Math.PI * 35.5; // matches Figma's 80x80 chart viewBox exactly (outer r=40, inner r=31)
  const off = circ; // Initialize ring empty for loading animation
  const el = document.createElement('div');
  el.className = 'orbit-card';
  if (d.done) {
    el.classList.add('done');
  }
  el.style.setProperty('--card-theme-rgb', hexToRgb(d.color));

  const goalDisplay = d.goal !== '' ? `<span class="value-sep">/</span><span class="value-goal">${d.goal}</span>` : '';

  let mediaHtml = '';
  if (d.type === 'graph') {
    // Trend line ("tread") inside a filled circle — exact Figma path, clipped to the circle
    const clipId = `tread-clip-${Math.random().toString(36).slice(2, 9)}`;
    mediaHtml = `
      <div class="ring-container graph-container">
        <svg viewBox="0 0 80 80" class="card-graph-svg">
          <defs>
            <clipPath id="${clipId}">
              <circle cx="40" cy="40" r="40" />
            </clipPath>
          </defs>
          <circle cx="40" cy="40" r="40" fill="${d.color}" opacity="0.3" />
          <g clip-path="url(#${clipId})">
            <path d="M-3 69L25.0857 39.6567C27.5566 37.0752 31.8838 38.0257 33.0455 41.405C34.2956 45.0417 39.1136 45.7816 41.3973 42.6875L48.3334 33.2903C50.1331 30.8519 53.484 30.167 56.0962 31.7036C58.4001 33.0589 61.3265 32.7017 63.2369 30.832L83.5 11"
              fill="none" stroke="${d.color}" stroke-width="8" stroke-linecap="round" class="graph-path" />
          </g>
        </svg>
      </div>
    `;
  } else if (d.type === 'segmented') {
    // Weekly ring — 7 rounded segments, one per day (Figma "weekly" chart, exact segment paths)
    const WEEKLY_SEGMENT_PATHS = [
      'M55.1025 76.9395C50.4422 78.8424 45.3442 79.8945 40 79.8945C34.6753 79.8945 29.5947 78.8507 24.9482 76.9609L29.0254 68.8867C32.4372 70.1794 36.1356 70.8887 40 70.8887C43.884 70.8887 47.6002 70.1714 51.0264 68.8662L55.1025 76.9395Z',
      'M10.707 50.041C12.9405 56.4822 17.2348 61.9582 22.8018 65.6797L18.7207 73.7637C10.8184 68.7859 4.77947 61.1197 1.88672 52.0459L10.707 50.041Z',
      'M78.1846 51.8252C75.3256 60.9775 69.2694 68.7143 61.3262 73.7334L57.2441 65.6484C62.8521 61.885 67.164 56.3393 69.3691 49.8203L78.1846 51.8252Z',
      'M13.7422 23.376C10.7383 28.1538 9 33.8087 9 39.8701C9 40.9982 9.06138 42.1121 9.17871 43.209L0.355469 45.2148C0.122275 43.4664 0 41.6824 0 39.8701C2.28928e-06 31.6832 2.45805 24.0714 6.67383 17.7305L13.7422 23.376Z',
      'M73.3857 17.8223C77.5645 24.1449 80 31.7224 80 39.8701C80 41.6028 79.8892 43.3097 79.6758 44.9844L70.8447 42.9766C70.9463 41.9548 71 40.9186 71 39.8701C71 33.8479 69.2826 28.2279 66.3145 23.4697L73.3857 17.8223Z',
      'M43.5 0C53.5274 0.869826 62.4955 5.43916 69.0332 12.3398L61.9668 17.9844C57.1271 13.1209 50.6853 9.85677 43.5 9.04883V0Z',
      'M36.5 9.04883C29.3532 9.85243 22.9412 13.085 18.1104 17.9053L11.041 12.2588C17.5721 5.4026 26.5112 0.866471 36.5 0L36.5 9.04883Z'
    ];
    const activeDays = [2, 3, 4]; // days shown in the full theme color, matching the Figma reference mix
    const segmentPaths = WEEKLY_SEGMENT_PATHS.map((p, i) => {
      const isActive = activeDays.includes(i);
      return `<path d="${p}" fill="${d.color}" opacity="${isActive ? 1 : 0.3}" />`;
    }).join('');
    mediaHtml = `
      <div class="ring-container">
        <svg viewBox="0 0 80 79.8945" style="transform: none;">
          ${segmentPaths}
        </svg>
      </div>
    `;
  } else if (d.isExercise) {
    mediaHtml = `
      <div class="ring-container" style="display: flex; align-items: center; justify-content: center;">
        <div class="exercise-checkbox">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      </div>
    `;
  } else {
    mediaHtml = `
      <div class="ring-container">
        <svg viewBox="0 0 80 80">
          <circle class="ring-bg" cx="40" cy="40" r="35.5" stroke="${d.color}4D"/>
          <circle class="ring-progress" cx="40" cy="40" r="35.5" stroke="${d.color}"
            stroke-dasharray="${circ}" stroke-dashoffset="${off}"/>
        </svg>
      </div>
    `;
  }

  const descHtml = d.desc ? `<div class="card-desc">${d.desc}</div>` : '';
  const valueDisplay = d.isExercise ? d.cur : `${String(d.cur).replace('.', ',')}${goalDisplay}`;

  el.innerHTML = `
    <div class="card-inner">
      <div class="card-section">
        <div class="card-header">
          <span class="card-title">${d.title}</span>
          <button class="card-chevron" style="color: ${d.color};" aria-label="Espandi">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>
        <div class="card-body">
          ${mediaHtml}
          <div class="ring-label" style="flex: 1; min-width: 0;">
            <span class="ring-label-title">${d.metric}</span>
            <span class="ring-label-value" style="color: ${d.color}">${valueDisplay}</span>
            ${descHtml}
          </div>
        </div>
      </div>
    </div>`;
  el.style.height = '203.832px';
  el.style.transition = 'height 0.45s cubic-bezier(0.4, 0, 0.2, 1)';
  el.style.overflow = 'hidden';
  return el;
}

// ── Instantiate DOM elements ─────────────────────
const cards = [];

function buildDots() {
  dotsEl.innerHTML = '';
  DATA.forEach(() => {
    const dot = document.createElement('div');
    dot.className = 'indicator-dot';
    dotsEl.appendChild(dot);
  });
}

function initCards() {
  cards.length = 0;
  DATA.forEach((d, i) => {
    const el = makeCard(d);
    sceneEl.appendChild(el);
    cards.push(el);

    if (d.isExercise) {
      el.addEventListener('click', () => toggleExercise(i));
    } else {
      // An expanded card closes on a tap anywhere on its body (not just the chevron) — except
      // inside its own .week-section, which stops propagation on every click so day-picking
      // there never accidentally collapses the card.
      el.addEventListener('click', e => {
        toggleCardExpand(el, d, i);
      });
    }
  });

  buildDots();

  // Animate progress rings into view on load
  setTimeout(() => {
    DATA.forEach((d, i) => {
      const progressRing = cards[i].querySelector('.ring-progress');
      if (progressRing) {
        const circ = 2 * Math.PI * 35.5;
        const ratio = getRingRatio(d);
        const finalOffset = circ * (1 - ratio);
        progressRing.style.strokeDashoffset = finalOffset;
      }
    });
  }, 200);
}

// ── Exercise Toggle Handler ────────────────────────
function toggleExercise(i) {
  const d = DATA[i];
  if (!d.isExercise) return;

  d.done = !d.done;
  d.color = d.done ? '#4CD964' : '#FF3B30';
  d.cur = d.done ? 'Completato' : 'Da fare';

  // Replace current card in DOM
  const newEl = makeCard(d);
  sceneEl.replaceChild(newEl, cards[i]);
  cards[i] = newEl;

  // Re-attach listeners
  newEl.addEventListener('click', () => {
    toggleExercise(i);
  });

  // Update progress card (always at index 0 in DATA_GYM)
  const progressCard = DATA[0];
  const doneCount = DATA.filter(x => x.isExercise && x.done).length;
  progressCard.cur = doneCount;

  const newProgressEl = makeCard(progressCard);
  sceneEl.replaceChild(newProgressEl, cards[0]);
  cards[0] = newProgressEl;

  newProgressEl.addEventListener('click', () => {
    cards[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  syncCardHeights();

  // Animate progress ring on summary card
  setTimeout(() => {
    const progressRing = cards[0].querySelector('.ring-progress');
    if (progressRing) {
      const circ = 2 * Math.PI * 35.5;
      const finalOffset = circ * (1 - (progressCard.cur / progressCard.goal));
      progressRing.style.strokeDashoffset = finalOffset;
    }
  }, 50);
}

// ── Detail Expansion (built card by card from exact Figma specs) ──
// Settimana bar chart — container max height 67px (Figma "Frame 15" asset)
const WEEK_BAR_MAX = 67;

// Deterministic pseudo-random generator so a given (card, date) always yields the same
// provisional value across re-renders/navigation, instead of re-rolling every time.
function hashStr(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (Math.imul(h, 31) + str.charCodeAt(i)) | 0;
  return h >>> 0;
}
function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function dateKey(d) { return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; }
// Exact "5/7/2026" format from the Calendar bar spec (node 628:1424): no zero-padding.
function formatCalendarDate(d) { return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`; }
// Whole-day index (ignores time-of-day) so two dates can be compared as simply before/after.
function dayOrdinal(d) { return Math.floor(new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime() / 86400000); }

// Per-metric tuning for the provisional day-to-day values (keyed by seedKey, i.e. the card
// title): how far a day can swing from today's real value, an absolute floor, and whether the
// value is allowed to exceed its own goal (percentage/score metrics never should).
const DAY_VALUE_RULES = {
  'Energie Bruciate': { minAbs: 1800 },
  'Battito': { factorRange: [0.94, 1.06] },
  'Sonno': { maxRatio: 1 },
  'Ossigenazione': { maxRatio: 1 },
  'Acqua': { minAbs: 1.5 },
};

function makeWeekSection(color, dayLabel, value, goal, seedKey) {
  // Shell only — setupWeekSection() below fills in bars/dates/labels so the same render
  // logic can be re-run when the user drags between weeks (no duplicated markup to drift).
  return `
    <div class="modal-section week-section" data-color="${color}" data-day-label="${dayLabel}" data-value="${value}" data-goal="${goal}" data-seed-key="${seedKey || dayLabel}">
      <span class="modal-section-title">Settimana</span>
      <div class="week-viewport">
        <div class="bar-group">
          <div class="bar-chart"></div>
          <div class="date-row"></div>
        </div>
      </div>
      <div class="modal-bottom-row">
        <span class="ring-label-title"></span>
        <span class="ring-label-value"></span>
      </div>
    </div>
  `;
}

// Wires up one rendered .week-section: real calendar day-of-month labels, a left/right
// drag-to-page gesture between weeks (never past the current week), and per-day provisional
// values (at least a month back) so clicking a day updates the card's own numbers. Independent
// per card instance — called after each card's expand-content innerHTML is set. `cardEl`/`cardData`
// are optional — when the card's own top-of-card ring shows the exact same metric as this week
// section (same "cur" value at setup time), it's kept in sync with whichever day is selected too,
// so the change isn't only visible in the small Settimana row.
function setupWeekSection(section, cardEl, cardData) {
  const color = section.dataset.color;
  const dayLabel = section.dataset.dayLabel;
  let value = section.dataset.value; // "today"'s value — mutable, e.g. via Acqua's +/- buttons
  const baseValue = section.dataset.value; // frozen at setup: the reference scale every OTHER
  // day's provisional number is generated from, so editing today's value never retroactively
  // shifts them too
  const goal = section.dataset.goal;
  const seedKey = section.dataset.seedKey;
  const goalNum = parseFloat(goal);
  const valueDecimals = value.includes('.') ? value.split('.')[1].length : 0;

  const topTitleEl = section.querySelector('.modal-section-title');
  const viewportEl = section.querySelector('.week-viewport');
  const barGroupEl = section.querySelector('.bar-group');
  const barChartEl = section.querySelector('.bar-chart');
  const dateRowEl = section.querySelector('.date-row');
  const bottomTitleEl = section.querySelector('.ring-label-title');
  const valueEl = section.querySelector('.ring-label-value');

  // Only sync the base card ring when it's demonstrably the same metric (matching "cur" at
  // setup time) — some cards (Dieta, Allenamento, "Il mio corpo") reuse a placeholder value/goal
  // in their week section that's unrelated to the base ring's own metric, and must be left alone.
  const baseMatches = cardEl && cardData && Math.abs(parseFloat(cardData.cur) - parseFloat(value)) < 0.001;
  const baseValueEl = baseMatches ? cardEl.querySelector('.card-section .ring-label-value') : null;
  const baseRingEl = baseMatches ? cardEl.querySelector('.card-section .ring-progress') : null;
  const baseCirc = 2 * Math.PI * 35.5;

  const today = new Date();
  const todayIndex = (today.getDay() + 6) % 7; // Monday = 0 .. Sunday = 6
  const currentMonday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - todayIndex);
  const MAX_WEEKS_BACK = 52;
  const TOTAL_DAYS = (MAX_WEEKS_BACK + 1) * 7; // every day this section will ever show, oldest first
  const TODAY_GLOBAL = MAX_WEEKS_BACK * 7 + todayIndex; // today's fixed slot in that range
  const DAY_PITCH = 42; // 7px bar/label width + 35px gap — the existing per-day spacing, unchanged

  const oldestMonday = new Date(currentMonday);
  oldestMonday.setDate(oldestMonday.getDate() - MAX_WEEKS_BACK * 7);
  // The full library of days this section can ever show, computed once. Paging never adds,
  // removes, or regenerates a single day — it only slides which 7-day window of this fixed strip
  // sits inside .week-viewport (updateStripPosition) and toggles which one day is marked selected
  // (updateSelectionUI). Nothing is ever built from scratch or faded in/out again after this.
  const allDates = Array.from({ length: TOTAL_DAYS }, (_, g) => {
    const d = new Date(oldestMonday);
    d.setDate(d.getDate() + g);
    return d;
  });

  let weekOffset = 0; // 0 = current week; higher = further in the past. Never negative (no future weeks).
  let selectedGlobalIndex = TODAY_GLOBAL;

  // Every day gets its own provisional value (so "yesterday" never just repeats "today"'s
  // number) — except the real current day, which keeps the authentic value passed into the card.
  // Two different cards sharing the same seedKey (e.g. Dieta ↔ Energie Bruciate) always land on
  // the exact same number for the same date, since they hash the same (seedKey, date) pair.
  function getDayValue(d, isRealToday) {
    if (isRealToday) return value;
    const rule = DAY_VALUE_RULES[seedKey] || {};
    const [minF, maxF] = rule.factorRange || [0.6, 1.3];
    const maxRatio = rule.maxRatio != null ? rule.maxRatio : 1.15;
    const rand = mulberry32(hashStr(seedKey + '|' + dateKey(d)))();
    const factor = minF + rand * (maxF - minF);
    let num = parseFloat(baseValue) * factor;

    // The floor/ceiling below shouldn't pin multiple different days to the exact same number —
    // add a small deterministic jitter so clamped days still read as distinct from one another.
    const floor = rule.minAbs || 0;
    const ceil = goalNum * maxRatio;
    const jitter = goalNum * 0.02;
    if (num < floor) num = floor + rand * jitter;
    if (num > ceil) num = ceil - rand * jitter;

    return Math.max(0, num).toFixed(valueDecimals);
  }

  // Builds every day's bar/date-label ONCE, for the section's entire lifetime — this is the
  // "library" that already exists; pageWeek()/selectDay() below only ever slide it or toggle a
  // class/halo on it, never touch innerHTML again.
  function buildStrip() {
    const stripWidth = DAY_PITCH * TOTAL_DAYS - 35;
    barChartEl.style.width = `${stripWidth}px`;
    dateRowEl.style.width = `${stripWidth}px`;

    barChartEl.innerHTML = allDates.map((d, g) => {
      const isFuture = g > TODAY_GLOBAL;
      const isRealToday = g === TODAY_GLOBAL;
      const dayValue = isFuture ? 0 : parseFloat(getDayValue(d, isRealToday));
      const heightPct = isFuture ? 6 : Math.max(6, Math.min(100, (dayValue / goalNum) * 100));
      return `<div class="bar-col" data-global-index="${g}" data-height-pct="${heightPct}"><div class="bar-fill" style="height: ${heightPct}%; background: ${color}; opacity: ${isFuture ? 0.3 : 1};"></div></div>`;
    }).join('');

    dateRowEl.innerHTML = allDates.map(d => {
      return `<span class="date-label"><span class="date-label-text">${d.getDate()}</span></span>`;
    }).join('');
    // data-global-index set separately (can't easily inline it in the template above without
    // losing the map's own index — but map already gives us g via the same array order, so just
    // re-tag right after building instead of a second pass over allDates):
    dateRowEl.querySelectorAll('.date-label').forEach((label, g) => { label.dataset.globalIndex = g; });
  }

  // Surgical refresh after a selection or page change — toggles the halo/active date and updates
  // the title/bottom value, but (unlike the old per-week render()) never rebuilds a day's markup,
  // since buildStrip() above already created every day that will ever be needed.
  function updateSelectionUI() {
    barChartEl.querySelectorAll('.bar-col').forEach(col => {
      const g = parseInt(col.dataset.globalIndex, 10);
      let halo = col.querySelector('.bar-halo');
      if (g === selectedGlobalIndex) {
        if (!halo) {
          halo = document.createElement('div');
          halo.className = 'bar-halo';
          col.insertBefore(halo, col.firstChild);
        }
        halo.style.color = color;
        halo.style.height = `${(parseFloat(col.dataset.heightPct) / 100) * WEEK_BAR_MAX + 20}px`;
      } else if (halo) {
        halo.remove();
      }
    });
    dateRowEl.querySelectorAll('.date-label').forEach(label => {
      label.classList.toggle('active', parseInt(label.dataset.globalIndex, 10) === selectedGlobalIndex);
    });

    // Top title shows which week is being viewed; the bottom row keeps its own original
    // label but its value now reflects whichever day is currently selected.
    topTitleEl.textContent = weekOffset === 0 ? 'Settimana' : (weekOffset === 1 ? 'Settimana scorsa' : `${weekOffset} settimane fa`);

    const selectedDate = allDates[selectedGlobalIndex];
    const isSelectedRealToday = selectedGlobalIndex === TODAY_GLOBAL;
    const selectedValue = getDayValue(selectedDate, isSelectedRealToday);
    bottomTitleEl.textContent = dayLabel;
    valueEl.style.color = color;
    valueEl.innerHTML = `${selectedValue}<span class="value-sep">/</span><span class="value-goal">${goal}</span>`;

    // Mirror the selected day's value onto the card's own top-of-card ring/label, so the whole
    // card reflects the chosen day — not just this Settimana row. On the real "today", use the
    // base card's own authentic string (String(cardData.cur)) rather than this week section's own
    // value string — they can be the same number formatted differently (e.g. base "4.1" vs this
    // section's "4.10"), which would otherwise reformat the base ring the instant the card opens.
    if (baseValueEl && baseValueEl.firstChild) {
      const baseDisplayValue = isSelectedRealToday ? String(cardData.cur) : selectedValue;
      baseValueEl.firstChild.textContent = baseDisplayValue.replace('.', ',');
    }
    if (baseRingEl) {
      const ratio = getRingRatio({ ...cardData, cur: parseFloat(selectedValue) });
      baseRingEl.style.strokeDashoffset = baseCirc * (1 - ratio);
    }
  }

  // Shifts the strip so weekOffset's 7 days sit exactly inside .week-viewport's window — a plain
  // translateX over the always-present strip. No content ever appears out of nowhere or fades
  // out; the same library of days is just repositioned under the (masking) viewport.
  function updateStripPosition(animate) {
    const mondayGlobal = (MAX_WEEKS_BACK - weekOffset) * 7;
    const targetPx = -mondayGlobal * DAY_PITCH;
    barGroupEl.style.transition = animate ? 'transform 260ms ease' : 'none';
    barGroupEl.style.transform = `translateX(${targetPx}px)`;
  }

  buildStrip();
  updateStripPosition(false);
  updateSelectionUI();

  // Lets an external action (e.g. Acqua's quick +/- buttons) push a new "today" value in after
  // setup, so the Settimana row reflects it immediately without re-running the whole setup.
  section._updateTodayValue = newValue => {
    value = newValue;
    if (selectedGlobalIndex === TODAY_GLOBAL) updateSelectionUI();
  };

  // Swipe right → older week, swipe left → back toward the current week. stopPropagation on
  // mousedown/touchstart keeps this from also triggering the outer 3D-carousel drag; the click
  // guard keeps a drag gesture from also collapsing the card afterward.
  const THRESHOLD = 40;
  let startX = 0, isDragging = false, moved = false;

  function pageWeek(dx) {
    const goingOlder = dx > 0;
    const newOffset = goingOlder ? Math.min(MAX_WEEKS_BACK, weekOffset + 1) : Math.max(0, weekOffset - 1);
    if (newOffset === weekOffset) return; // already at the boundary — nothing to page to
    weekOffset = newOffset;
    updateStripPosition(true);
    updateSelectionUI(); // only the title text actually changes here — cheap, no rebuild
  }

  function selectDay(g) {
    if (g > TODAY_GLOBAL) return;
    selectedGlobalIndex = g;
    updateSelectionUI();
  }

  function onMouseMove(e) {
    if (!isDragging) return;
    if (Math.abs(e.clientX - startX) > 5) moved = true;
  }
  function onMouseUp(e) {
    if (!isDragging) return;
    isDragging = false;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    const dx = e.clientX - startX;
    if (Math.abs(dx) > THRESHOLD) pageWeek(dx);
  }

  section.addEventListener('mousedown', e => {
    e.stopPropagation();
    startX = e.clientX;
    isDragging = true;
    moved = false;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  });

  section.addEventListener('touchstart', e => {
    e.stopPropagation();
    startX = e.touches[0].clientX;
    isDragging = true;
    moved = false;
  }, { passive: true });
  section.addEventListener('touchmove', e => {
    if (!isDragging) return;
    if (Math.abs(e.touches[0].clientX - startX) > 5) moved = true;
  }, { passive: true });
  section.addEventListener('touchend', e => {
    if (!isDragging) return;
    isDragging = false;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > THRESHOLD) pageWeek(dx);
  }, { passive: true });

  // Tapping (not dragging) a specific day selects it instead of paging the week.
  barChartEl.addEventListener('click', e => {
    const col = e.target.closest('.bar-col');
    if (!col) return;
    e.stopPropagation();
    if (!moved) selectDay(parseInt(col.dataset.globalIndex, 10));
  });
  dateRowEl.addEventListener('click', e => {
    const label = e.target.closest('.date-label');
    if (!label) return;
    e.stopPropagation();
    if (!moved) selectDay(parseInt(label.dataset.globalIndex, 10));
  });

  // Now that tapping anywhere on an expanded card collapses it, every click inside the week
  // section — not just day-picking taps on a bar/date, or the tail end of a drag gesture — must
  // stop here so browsing/paging the week never accidentally closes the card around it.
  section.addEventListener('click', e => e.stopPropagation());
}

// "Media" section reuses the closed card's own .card-body/.ring-container/.ring-label pattern —
// the chart itself is just the trend-line wave on a static tinted circle (no progress ring/bar).
function makeMediaSection(color, sectionTitle, label, value, unit) {
  return `
    <div class="modal-section">
      <span class="modal-section-title">${sectionTitle}</span>
      <div class="card-body">
        <div class="ring-container">
          <svg viewBox="0 0 80 80" class="card-graph-svg">
            <defs><clipPath id="mediaWaveClip-${label}"><circle cx="40" cy="40" r="40" /></clipPath></defs>
            <circle cx="40" cy="40" r="40" fill="${color}" opacity="0.3" />
            <g clip-path="url(#mediaWaveClip-${label})">
              <path d="M-3 69L25.0857 39.6567C27.5566 37.0752 31.8838 38.0257 33.0455 41.405C34.2956 45.0417 39.1136 45.7816 41.3973 42.6875L48.3334 33.2903C50.1331 30.8519 53.484 30.167 56.0962 31.7036C58.4001 33.0589 61.3265 32.7017 63.2369 30.832L83.5 11"
                fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round" />
            </g>
          </svg>
        </div>
        <div class="ring-label">
          <span class="ring-label-title">${label}</span>
          <span class="ring-label-value" style="color: ${color};">${value}<span class="value-sep">/</span><span class="value-goal">${unit}</span></span>
        </div>
      </div>
    </div>
  `;
}

// Full-width action button (e.g. "Vedi foto", "Disconnetti") — exact Figma 300x40 pill, bg = theme color at 30% alpha
function makeButtonSection(color, label) {
  return `
    <div class="modal-button-row">
      <button class="modal-button" style="background: ${color}4D;">${label}</button>
    </div>
  `;
}

// Row of small +/- quick-action pill buttons (Acqua's "Aggiungi" row) — exact Figma 88x30 pills,
// node 396:617.
function makeAddSection(color, title, labels) {
  const buttons = labels.map(l => {
    const [, sign, value] = l.match(/^([+-])\s*(.+)$/) || [null, '', l];
    return `<button class="modal-small-button" style="background: ${color}4D;"><span class="btn-sign">${sign}</span><span class="btn-value">${value}</span></button>`;
  }).join('');
  return `
    <div class="modal-section">
      <span class="modal-section-title">${title}</span>
      <div class="modal-small-button-row">${buttons}</div>
    </div>
  `;
}

// Acqua's quick +/- buttons actually edit the card's own water total (in liters): "- 100"/"+ 100"
// (ml) change it by 0.1 L, "+ 250" ml by 0.25 L — kept in sync with both the top-of-card ring and
// the Settimana row's "today" value, matching the fixed button order from the Acqua branch above.
function setupAcquaButtons(content, cardEl, d) {
  const deltas = [-0.1, 0.1, 0.25];
  content.querySelectorAll('.modal-small-button').forEach((btn, i) => {
    if (deltas[i] === undefined) return;
    btn.addEventListener('click', e => {
      e.stopPropagation();
      d.cur = Math.max(0, +(d.cur + deltas[i]).toFixed(2));
      syncCardBaseRing(cardEl, d);
      const weekSection = content.querySelector('.week-section');
      if (weekSection && weekSection._updateTodayValue) {
        weekSection._updateTodayValue(d.cur.toFixed(2));
      }
    });
  });
}

// ── Workout Detail View (Allenamento card → "Visualizza Scheda") ──────────
// Exact Figma exercise list, node 702:6684: each exercise reuses the same widget parts already
// used elsewhere (card-header/chevron, graph-type ring, CARICO's small +/- pills, "Visualizza
// esecuzione" full-width button) — just in a plain scrolling list instead of the 3D carousel.
let workoutViewOpen = false;
let workoutExecutionOpen = false;

// recovery: average rest in minutes between sets — exact Figma node 656:4230 ("Recupero" ring,
// shown between the exercise header and Carico). No visible goal alongside it, so the ring fills
// against an implicit 3-minute reference (a realistic max rest between sets).
// A 3-day rotating split (Gambe+Spalle / Petto+Dorso / Braccia+Gambe, 3 exercises per muscle
// group) — NOT tied to weekdays at all. It just loops forever by elapsed days from a fixed
// reference date (see getWorkoutPlanForDate), so paging through any date, forward or backward,
// always lands on one of these three, repeating endlessly — no rest days, nothing else added.
// Every exercise name is kept as short as possible (well under the single-line width, not just
// barely fitting) so nothing crowds the ring value below it or risks wrapping.
const WORKOUT_ROTATION = [
  { label: 'Gambe & Spalle', exercises: [
    { group: 'GAMBE', name: 'Squat', sets: '4x8', weight: 70, recovery: 2.5, color: '#F14C6B' },
    { group: 'GAMBE', name: 'Leg press', sets: '4x10', weight: 120, recovery: 2, color: '#F14C6B' },
    { group: 'GAMBE', name: 'Affondi', sets: '3x12', weight: 16, recovery: 1.5, color: '#F14C6B' },
    { group: 'SPALLE', name: 'Military', sets: '4x8', weight: 40, recovery: 2, color: '#F14C6B' },
    { group: 'SPALLE', name: 'Laterali', sets: '4x12', weight: 10, recovery: 1, color: '#F14C6B' },
    { group: 'SPALLE', name: 'Frontali', sets: '3x12', weight: 8, recovery: 1, color: '#F14C6B' },
  ] },
  { label: 'Petto & Dorso', exercises: [
    { group: 'PETTO', name: 'Panca', sets: '4x6', weight: 95, recovery: 2, color: '#F14C6B' },
    { group: 'PETTO', name: 'Spinte 45°', sets: '4x8', weight: 45, recovery: 1.5, color: '#F14C6B' },
    { group: 'PETTO', name: 'Croci', sets: '3x12', weight: 15, recovery: 1, color: '#F14C6B' },
    { group: 'DORSO', name: 'Lat machine', sets: '4x8', weight: 60, recovery: 1.5, color: '#F14C6B' },
    { group: 'DORSO', name: 'Rematore', sets: '4x8', weight: 50, recovery: 2, color: '#F14C6B' },
    { group: 'DORSO', name: 'Trazioni', sets: '3x12', weight: 45, recovery: 1, color: '#F14C6B' },
  ] },
  { label: 'Braccia & Gambe', exercises: [
    { group: 'BRACCIA', name: 'Curl', sets: '4x10', weight: 14, recovery: 1, color: '#F14C6B' },
    { group: 'BRACCIA', name: 'Push down', sets: '3x12', weight: 25, recovery: 1, color: '#F14C6B' },
    { group: 'BRACCIA', name: 'Hammer curl', sets: '3x12', weight: 12, recovery: 1, color: '#F14C6B' },
    { group: 'GAMBE', name: 'Stacco', sets: '4x6', weight: 100, recovery: 2.5, color: '#F14C6B' },
    { group: 'GAMBE', name: 'Leg ext', sets: '3x12', weight: 35, recovery: 1, color: '#F14C6B' },
    { group: 'GAMBE', name: 'Polpacci', sets: '4x15', weight: 60, recovery: 1, color: '#F14C6B' },
  ] },
];

// Fixed arbitrary anchor so the 3-day rotation is deterministic across reloads — which of the
// three plans a given date shows depends only on its distance (in whole days) from this point.
const WORKOUT_ROTATION_EPOCH = new Date(2026, 0, 1);
function getWorkoutPlanForDate(date) {
  const diff = dayOrdinal(date) - dayOrdinal(WORKOUT_ROTATION_EPOCH);
  const idx = ((diff % WORKOUT_ROTATION.length) + WORKOUT_ROTATION.length) % WORKOUT_ROTATION.length;
  return WORKOUT_ROTATION[idx];
}

// Which real calendar day the workout view is currently showing — starts on today, but the
// Calendar bar (node 628:1424) can page it to any other date; getWorkoutPlanForDate resolves
// whichever date this holds to one of the 3 endlessly-rotating plans.
let workoutViewDate = new Date();

function makeWorkoutCard(ex, index) {
  const clipId = `workout-tread-clip-${index}`;
  return `
    <div class="workout-card" data-exercise-index="${index}">
      <div class="card-section">
        <div class="card-header">
          <span class="card-title">${ex.group}</span>
          <button class="card-chevron" style="color: ${ex.color};" aria-label="Espandi">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>
        <div class="card-body">
          <div class="ring-container graph-container">
            <svg viewBox="0 0 80 80" class="card-graph-svg">
              <defs><clipPath id="${clipId}"><circle cx="40" cy="40" r="40" /></clipPath></defs>
              <circle cx="40" cy="40" r="40" fill="${ex.color}" opacity="0.3" />
              <g clip-path="url(#${clipId})">
                <path d="M-3 69L25.0857 39.6567C27.5566 37.0752 31.8838 38.0257 33.0455 41.405C34.2956 45.0417 39.1136 45.7816 41.3973 42.6875L48.3334 33.2903C50.1331 30.8519 53.484 30.167 56.0962 31.7036C58.4001 33.0589 61.3265 32.7017 63.2369 30.832L83.5 11"
                  fill="none" stroke="${ex.color}" stroke-width="8" stroke-linecap="round" class="graph-path" />
              </g>
            </svg>
          </div>
          <div class="ring-label" style="flex: 1; min-width: 0;">
            <span class="ring-label-title">${ex.name}</span>
            <span class="ring-label-value" style="color: ${ex.color}">${ex.sets}<span class="value-sep">/</span><span class="value-goal" data-weight-display>${ex.weight}</span></span>
          </div>
        </div>
      </div>
      <div class="card-expanded-content">
        <div class="modal-section">
          <span class="modal-section-title">Recupero</span>
          <div class="card-body">
            <div class="ring-container">
              <svg viewBox="0 0 80 80">
                <circle class="ring-bg" cx="40" cy="40" r="35.5" stroke="${ex.color}4D"/>
                <circle class="ring-progress" cx="40" cy="40" r="35.5" stroke="${ex.color}" stroke-dasharray="${2 * Math.PI * 35.5}" stroke-dashoffset="${2 * Math.PI * 35.5 * (1 - Math.min(1, ex.recovery / 3))}"/>
              </svg>
            </div>
            <div class="ring-label" style="flex: 1; min-width: 0;">
              <span class="ring-label-title">Medio</span>
              <span class="ring-label-value" style="color: ${ex.color}">${ex.recovery}<span class="value-sep">/</span><span class="value-goal">min</span></span>
            </div>
          </div>
        </div>
        <div class="modal-section">
          <span class="modal-section-title">Carico</span>
          <div class="modal-small-button-row">
            <button class="modal-small-button" data-delta="-2.5" style="background: ${ex.color}4D;"><span class="btn-sign">-</span><span class="btn-value">2.50</span></button>
            <button class="modal-small-button" data-delta="2.5" style="background: ${ex.color}4D;"><span class="btn-sign">+</span><span class="btn-value">2.50</span></button>
            <button class="modal-small-button" data-delta="5" style="background: ${ex.color}4D;"><span class="btn-sign">+</span><span class="btn-value">5</span></button>
          </div>
        </div>
        <div class="modal-button-row">
          <button class="modal-button workout-exec-btn" style="background: ${ex.color}4D;">Visualizza esecuzione</button>
        </div>
      </div>
    </div>
  `;
}

// Scrolls workoutViewEl (never any ancestor) just enough to reveal the whole card — same fix as
// the diet view's scrollDietCardIntoView, for the same reason (the last exercise could otherwise
// expand clipped under the nav bar's own slot with nothing bringing it into view).
function scrollWorkoutCardIntoView(cardEl) {
  const cardTop = cardEl.offsetTop;
  const cardBottom = cardTop + cardEl.offsetHeight;
  const viewTop = workoutViewEl.scrollTop;
  const viewBottom = viewTop + workoutViewEl.clientHeight;
  if (cardBottom > viewBottom) {
    workoutViewEl.scrollTop = cardBottom - workoutViewEl.clientHeight;
  } else if (cardTop < viewTop) {
    workoutViewEl.scrollTop = cardTop;
  }
}

function toggleWorkoutCardExpand(cardEl) {
  const isExpanded = cardEl.classList.contains('expanded');
  document.querySelectorAll('.workout-card.expanded').forEach(c => {
    if (c !== cardEl) collapseWorkoutCard(c);
  });
  if (isExpanded) {
    collapseWorkoutCard(cardEl);
    return;
  }
  cardEl.classList.add('expanded');
  const content = cardEl.querySelector('.card-expanded-content');
  content.style.display = 'flex';
  scrollWorkoutCardIntoView(cardEl);
  requestAnimationFrame(() => { content.style.opacity = '1'; });
}

function collapseWorkoutCard(cardEl) {
  cardEl.classList.remove('expanded');
  const content = cardEl.querySelector('.card-expanded-content');
  content.style.opacity = '0';
  content.style.display = 'none';
}

function renderWorkoutExercises() {
  const plan = getWorkoutPlanForDate(workoutViewDate);

  workoutViewEl.innerHTML = plan.exercises.map(makeWorkoutCard).join('');
  headerSubtitleEl.textContent = plan.label;
  workoutCalDateEl.textContent = formatCalendarDate(workoutViewDate);

  [...workoutViewEl.querySelectorAll('.workout-card')].forEach((cardEl, i) => {
    const ex = plan.exercises[i];

    // Same rule as the orbit-cards: an expanded card only closes via its own chevron, not by
    // clicking the header again — opening a different card still collapses this one too.
    cardEl.querySelector('.card-header').addEventListener('click', e => {
      const isExpanded = cardEl.classList.contains('expanded');
      if (isExpanded && !e.target.closest('.card-chevron')) return;
      toggleWorkoutCardExpand(cardEl);
    });

    cardEl.querySelectorAll('.modal-small-button').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        ex.weight = Math.max(0, +(ex.weight + parseFloat(btn.dataset.delta)).toFixed(2));
        cardEl.querySelector('[data-weight-display]').textContent = ex.weight;
      });
    });

    cardEl.querySelector('.workout-exec-btn').addEventListener('click', e => {
      e.stopPropagation();
      openWorkoutExecution(ex.name);
    });
  });
}

// "andare avanti negli altri giorni" — pages the view by one real calendar day. Not clamped,
// unlike the diet Calendar bar: this previews an endlessly-repeating 3-day rotation, not a
// historical log, so future days are just as browsable as past ones — the arrows must never
// become disabled.
function changeWorkoutDate(deltaDays) {
  workoutViewDate = new Date(workoutViewDate);
  workoutViewDate.setDate(workoutViewDate.getDate() + deltaDays);
  renderWorkoutExercises();
}
workoutCalPrevEl.addEventListener('click', () => changeWorkoutDate(-1));
workoutCalNextEl.addEventListener('click', () => changeWorkoutDate(1));

function openWorkoutView() {
  workoutViewOpen = true;

  // Same sequenced fade the nav tabs use: the scene fades out first, then (once it's actually
  // gone) the workout view fades in — not a simultaneous crossfade.
  sceneEl.style.transition = 'opacity 0.25s ease';
  sceneEl.style.opacity = '0';
  sceneEl.style.pointerEvents = 'none';
  // Immediately, not after the fade: in this 3D perspective scene, a card's own transform/opacity
  // apparently doesn't reliably composite through .scene's opacity, so cards could stay visibly
  // on screen (specifically the ones nearest the top/bottom edge, previously masked by the veil)
  // for the whole fade instead of just flashing briefly — visibility:hidden has no such quirk and
  // hides every descendant unconditionally, the instant it's set.
  sceneEl.style.visibility = 'hidden';

  setTimeout(() => {
    // Swapped here (not instantly at the top) so the close icon appears at the same moment as
    // the rest of the incoming content, instead of jumping ahead of it.
    settingsIconGearEl.style.display = 'none';
    settingsIconCloseEl.style.display = 'block';

    workoutViewEl.classList.add('active');
    workoutCalendarBarEl.classList.add('active');

    // Unlike Settings (which isn't tied to any tab), this view is still "inside" Attività — its
    // own nav-tab icon should stay lit, so it's deliberately left untouched here.

    headerTitleEl.textContent = 'Attività';
    headerTitleEl.style.color = '#F14C6B';

    workoutViewDate = new Date(); // always reopens on today, even if last closed elsewhere
    renderWorkoutExercises(); // also sets headerSubtitleEl to today's plan label
  }, 250);
}

function closeWorkoutView() {
  workoutViewOpen = false;
  workoutViewEl.classList.remove('active');
  workoutCalendarBarEl.classList.remove('active');

  // Same sequenced fade as opening: the view fades out first (its own 0.4s CSS transition), then
  // the scene reveals — not a simultaneous crossfade. The icon swap waits here too, alongside
  // the scene, instead of jumping ahead of it.
  setTimeout(() => {
    settingsIconGearEl.style.display = 'block';
    settingsIconCloseEl.style.display = 'none';

    document.querySelectorAll('.nav-tab').forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-tab') === currentTab);
    });

    headerTitleEl.textContent = 'Homeo';
    headerSubtitleEl.textContent = TAB_SUBTITLE_MAP[currentTab];
    headerTitleEl.style.color = DATA[0].color;
    sceneEl.style.pointerEvents = 'auto';
    sceneEl.style.opacity = '1';

    // Mirrors the open side, where cards vanish (visibility:hidden) before anything else even
    // starts fading out. Here they're the last thing to reappear — only once .scene's own 0.25s
    // opacity fade-in has actually finished — instead of popping to full brightness instantly.
    setTimeout(() => { sceneEl.style.visibility = 'visible'; }, 250);
  }, 400);
}

function openWorkoutExecution(exerciseName) {
  workoutExecutionOpen = true;
  // Same sequenced fade as everywhere else: the workout view fades out first (its own 0.4s
  // opacity transition), then the execution view appears — not a simultaneous crossfade.
  workoutViewEl.classList.remove('active');
  workoutCalendarBarEl.classList.remove('active');
  // This screen replaces the nav bar's own slot, per Figma — hidden right away, alongside the
  // workout view above, instead of lagging 400ms behind it.
  bottomNavEl.style.opacity = '0';
  bottomNavEl.style.pointerEvents = 'none';

  setTimeout(() => {
    executionViewEl.classList.add('active');
    executionButtonBarEl.classList.add('active');
    headerTitleEl.textContent = 'Esecuzione';
    headerSubtitleEl.textContent = exerciseName;
  }, 400);
}

function closeWorkoutExecution() {
  workoutExecutionOpen = false;
  executionViewEl.classList.remove('active');
  executionButtonBarEl.classList.remove('active');

  // Same sequenced fade as opening: Esecuzione fades out first (its own 0.4s CSS transition),
  // then the workout view/nav bar reveal — not a simultaneous crossfade.
  setTimeout(() => {
    bottomNavEl.style.opacity = '1';
    bottomNavEl.style.pointerEvents = 'auto';
    workoutViewEl.classList.add('active');
    workoutCalendarBarEl.classList.add('active');
    headerTitleEl.textContent = 'Attività';
    headerSubtitleEl.textContent = getWorkoutPlanForDate(workoutViewDate).label;
  }, 400);
}

executionContinueBtnEl.addEventListener('click', closeWorkoutExecution);

// "Visualizza Scheda"/"Segnala Problema" inside the Allenamento card's own expanded content —
// matched by label text since makeButtonSection's markup is otherwise generic across every card.
function setupAllenamentoButtons(content) {
  content.querySelectorAll('.modal-button').forEach(btn => {
    const label = btn.textContent.trim();
    if (label === 'Visualizza Scheda') {
      btn.addEventListener('click', e => { e.stopPropagation(); openWorkoutView(); });
    } else if (label === 'Segnala Problema') {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        document.querySelector('.nav-tab[data-tab="coach"]').click();
      });
    }
  });
}

// ── Diet Detail View (Dieta/Grassi/Carboidrati/Proteine → "Visualizza Dieta") ─────────────
// Exact Figma meal list, node 702:7937: same widget parts as the workout list (card-header/
// chevron, ring, "PASTO" description + a "fatto" button instead of CARICO/esecuzione) in a plain
// scrolling list. Chronological order matters: "done" (already-eaten) meals stay dim/opaque, the
// first not-done meal is the "current" one — bright and auto-expanded whenever the view opens —
// and every meal after it is upcoming (bright, but collapsed until you tap it yourself).
let dietViewOpen = false;

const DIET_MEALS = [
  { name: 'Colazione', kcal: 420, desc: '50g fiocchi d\'avena, 200ml latte parzialmente scremato, 1 banana.', done: true, untilMin: 0 },
  { name: 'Pranzo', kcal: 650, desc: '150g petto di pollo, 80g riso basmati, verdure miste.', done: true, untilMin: 0 },
  { name: 'Merenda', kcal: 490, desc: '80g avena, banana, 20g mandorle.', done: false, untilMin: 45 },
  { name: 'Cena', kcal: 540, desc: '200g salmone, 100g quinoa, insalata verde.', done: false, untilMin: 225 },
]; // kcal sums to exactly 2100 (420+650+490+540), matching the day's total goal
const DIET_COLOR = '#79DA5E';
const DIET_DAY_GOAL = 2100; // day's total calorie goal (matches Energie Bruciate's own 2100 goal)

// Read-only meal templates for the Calendar bar (node 628:1424), keyed by JS Date.getDay()
// weekday. Today always uses the live, editable DIET_MEALS above instead — paging to any OTHER
// day (past or, since it's blocked, never future) shows this as a fully-eaten historical log, with
// no Fatto/Non fatto buttons since there's nothing left to toggle.
const WEEKLY_DIET_PLAN = {
  0: [ { name: 'Colazione', kcal: 420, desc: 'Yogurt greco, granola, mirtilli.' },
       { name: 'Pranzo', kcal: 650, desc: 'Lasagne al forno, insalata verde.' },
       { name: 'Merenda', kcal: 490, desc: 'Frutta secca mista, una mela.' },
       { name: 'Cena', kcal: 540, desc: 'Arrosto di manzo, patate al forno.' } ],
  1: [ { name: 'Colazione', kcal: 420, desc: '50g fiocchi d\'avena, 200ml latte parzialmente scremato, 1 banana.' },
       { name: 'Pranzo', kcal: 650, desc: '150g petto di pollo, 80g riso basmati, verdure miste.' },
       { name: 'Merenda', kcal: 490, desc: '80g avena, banana, 20g mandorle.' },
       { name: 'Cena', kcal: 540, desc: '200g salmone, 100g quinoa, insalata verde.' } ],
  2: [ { name: 'Colazione', kcal: 420, desc: 'Pane integrale, uova strapazzate, spremuta d\'arancia.' },
       { name: 'Pranzo', kcal: 650, desc: 'Pasta integrale al tonno, pomodorini.' },
       { name: 'Merenda', kcal: 490, desc: 'Yogurt bianco, noci, miele.' },
       { name: 'Cena', kcal: 540, desc: 'Petto di tacchino, verdure grigliate.' } ],
  3: [ { name: 'Colazione', kcal: 420, desc: 'Porridge d\'avena, semi di chia, frutti di bosco.' },
       { name: 'Pranzo', kcal: 650, desc: 'Riso basmati, ceci, verdure saltate.' },
       { name: 'Merenda', kcal: 490, desc: 'Smoothie proteico, banana.' },
       { name: 'Cena', kcal: 540, desc: 'Frittata di verdure, insalata mista.' } ],
  4: [ { name: 'Colazione', kcal: 420, desc: '50g fiocchi d\'avena, 200ml latte parzialmente scremato, 1 banana.' },
       { name: 'Pranzo', kcal: 650, desc: '150g petto di pollo, 80g riso basmati, verdure miste.' },
       { name: 'Merenda', kcal: 490, desc: '80g avena, banana, 20g mandorle.' },
       { name: 'Cena', kcal: 540, desc: '200g salmone, 100g quinoa, insalata verde.' } ],
  5: [ { name: 'Colazione', kcal: 420, desc: 'Toast integrale, avocado, pomodoro.' },
       { name: 'Pranzo', kcal: 650, desc: 'Poke di salmone, riso, edamame.' },
       { name: 'Merenda', kcal: 490, desc: 'Barretta proteica, un frutto.' },
       { name: 'Cena', kcal: 540, desc: 'Bistecca alla griglia, verdure di stagione.' } ],
  6: [ { name: 'Colazione', kcal: 420, desc: 'Pancake integrali, sciroppo d\'acero, frutta fresca.' },
       { name: 'Pranzo', kcal: 650, desc: 'Risotto ai funghi, insalata verde.' },
       { name: 'Merenda', kcal: 490, desc: 'Hummus, bastoncini di verdure.' },
       { name: 'Cena', kcal: 540, desc: 'Pesce al forno, patate al vapore.' } ],
};

// Which real calendar day the diet view is currently showing — starts on today, but the Calendar
// bar (node 628:1424) can page it back through other days (never forward, see changeDietDate).
let dietViewDate = new Date();

function currentDietMeal() {
  return DIET_MEALS.find(m => !m.done);
}

// Only the most recently completed meal can be undone — if Colazione and Pranzo are both done,
// Pranzo (the later one) is the only one offering "Non fatto"; Colazione is locked until
// Pranzo itself is undone first, keeping the done-streak always a clean chronological prefix.
function lastDoneMeal() {
  const idx = DIET_MEALS.findIndex(m => !m.done);
  const lastIdx = idx === -1 ? DIET_MEALS.length - 1 : idx - 1;
  return lastIdx >= 0 ? DIET_MEALS[lastIdx] : null;
}

// The base "Dieta" card (in the main list) shows "Prossimo: N min" — keep it synced to whichever
// meal is currently next, both in the data model and in the live DOM if that card is rendered.
function syncDietaCountdown() {
  const dietaData = DATA_MAP.diet.find(x => x.title === 'Dieta');
  const meal = currentDietMeal();
  if (dietaData) dietaData.cur = meal ? meal.untilMin : 0;
  const dietaCardEl = [...document.querySelectorAll('.orbit-card')].find(c => c.querySelector('.card-title')?.textContent === 'Dieta');
  if (dietaCardEl) {
    const valueEl = dietaCardEl.querySelector('.card-section .ring-label-value');
    if (valueEl && valueEl.firstChild) valueEl.firstChild.textContent = String(dietaData.cur);
  }
}

function makeDietCard(meal, cumulativeKcal, readOnly) {
  const circ = 2 * Math.PI * 35.5;
  const ratio = Math.min(1, cumulativeKcal / DIET_DAY_GOAL);
  const offset = circ * (1 - ratio);
  const dimColor = 'rgba(255, 255, 255, 0.4)';
  // Not done: "Fatto" marks it done. Done AND the most recent one: "Non fatto" undoes that —
  // same green style as "Fatto" (not dimmed, even though the rest of the card is). Done but an
  // earlier meal in the streak: no button at all — it's locked until the later ones are undone.
  // A past day viewed via the Calendar bar is a read-only historical log: no buttons at all.
  const actionBtn = readOnly ? '' : (!meal.done
    ? `<button class="modal-small-button diet-done-btn" style="background: ${DIET_COLOR}4D; width: auto; padding: 0 22px;">Fatto</button>`
    : (meal === lastDoneMeal()
        ? `<button class="modal-small-button diet-back-btn" style="background: ${DIET_COLOR}4D; width: auto; padding: 0 22px;">Non fatto</button>`
        : ''));
  return `
    <div class="diet-card${meal.done ? ' done' : ''}" data-meal-name="${meal.name}">
      <div class="card-section">
        <div class="card-header">
          <span class="card-title">${meal.name.toUpperCase()}</span>
          <button class="card-chevron" style="color: ${DIET_COLOR};" aria-label="Espandi">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>
        <div class="card-body">
          <div class="ring-container">
            <svg viewBox="0 0 80 80">
              <circle class="ring-bg" cx="40" cy="40" r="35.5" stroke="${DIET_COLOR}4D"/>
              <circle class="ring-progress" cx="40" cy="40" r="35.5" stroke="${DIET_COLOR}" stroke-dasharray="${circ}" stroke-dashoffset="${offset}"/>
            </svg>
          </div>
          <div class="ring-label" style="flex: 1; min-width: 0;">
            <span class="ring-label-title">Carico</span>
            <span class="ring-label-value" style="color: ${meal.done ? dimColor : DIET_COLOR}" data-diet-value>${meal.kcal}<span class="value-sep">/</span><span class="value-goal">kcal</span></span>
          </div>
        </div>
      </div>
      <div class="card-expanded-content">
        <div class="modal-section">
          <span class="modal-section-title">Pasto</span>
          <p class="diet-meal-desc">${meal.desc}</p>
          <div class="modal-small-button-row" style="justify-content: flex-start;">${actionBtn}</div>
        </div>
      </div>
    </div>
  `;
}

// Scrolls dietViewEl (never any ancestor — see the .mobile-frame note elsewhere) just enough to
// reveal the whole card, top or bottom, whichever is currently clipped. Applies to every expand,
// not just the auto-focused "current" meal — the last meal (Cena) previously stayed clipped under
// the nav bar's own slot when expanded without this, the exact bug already fixed for orbit-cards.
function scrollDietCardIntoView(cardEl) {
  const cardTop = cardEl.offsetTop;
  const cardBottom = cardTop + cardEl.offsetHeight;
  const viewTop = dietViewEl.scrollTop;
  const viewBottom = viewTop + dietViewEl.clientHeight;
  if (cardBottom > viewBottom) {
    dietViewEl.scrollTop = cardBottom - dietViewEl.clientHeight;
  } else if (cardTop < viewTop) {
    dietViewEl.scrollTop = cardTop;
  }
}

function toggleDietCardExpand(cardEl) {
  const isExpanded = cardEl.classList.contains('expanded');
  document.querySelectorAll('.diet-card.expanded').forEach(c => {
    if (c !== cardEl) collapseDietCard(c);
  });
  if (isExpanded) {
    collapseDietCard(cardEl);
    return;
  }
  cardEl.classList.add('expanded');
  const content = cardEl.querySelector('.card-expanded-content');
  content.style.display = 'flex';
  scrollDietCardIntoView(cardEl);
  requestAnimationFrame(() => { content.style.opacity = '1'; });
}

function collapseDietCard(cardEl) {
  cardEl.classList.remove('expanded');
  const content = cardEl.querySelector('.card-expanded-content');
  content.style.opacity = '0';
  content.style.display = 'none';
}

function isDietViewingToday() {
  return dateKey(dietViewDate) === dateKey(new Date());
}

function renderDietMeals() {
  const todayView = isDietViewingToday();
  dietCalDateEl.textContent = formatCalendarDate(dietViewDate);
  // The arrows must always work in both directions — never disabled, in this section or any other.

  if (todayView) {
    syncDietaCountdown();
    if (dietViewOpen) headerSubtitleEl.textContent = currentDietMeal()?.name || 'Dieta';
  } else if (dietViewOpen) {
    headerSubtitleEl.textContent = 'Dieta';
  }

  // Today: the live, editable DIET_MEALS. Any other day: a read-only log built from that weekday's
  // template — past days show as already eaten (dimmed), future days as not-yet-happened (bright).
  const isPast = dayOrdinal(dietViewDate) < dayOrdinal(new Date());
  const meals = todayView ? DIET_MEALS : WEEKLY_DIET_PLAN[dietViewDate.getDay()].map(m => ({ ...m, done: isPast }));

  let cumulativeKcal = 0;
  dietViewEl.innerHTML = meals.map(meal => {
    cumulativeKcal += meal.kcal;
    return makeDietCard(meal, cumulativeKcal, !todayView);
  }).join('');

  [...dietViewEl.querySelectorAll('.diet-card')].forEach((cardEl, i) => {
    const meal = meals[i];
    // Same rule as the orbit-cards: an expanded card only closes via its own chevron, not by
    // clicking the header again — opening a different meal still collapses this one too.
    cardEl.querySelector('.card-header').addEventListener('click', e => {
      const isExpanded = cardEl.classList.contains('expanded');
      if (isExpanded && !e.target.closest('.card-chevron')) return;
      toggleDietCardExpand(cardEl);
    });

    if (!todayView) return; // read-only: no Fatto/Non fatto wiring, nothing to auto-expand below

    const doneBtn = cardEl.querySelector('.diet-done-btn');
    if (doneBtn) {
      doneBtn.addEventListener('click', e => {
        e.stopPropagation();
        meal.done = true;
        syncDietaCountdown();
        renderDietMeals(); // rebuild so the newly-current meal opens expanded, matching the initial-open behavior
      });
    }
    const backBtn = cardEl.querySelector('.diet-back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', e => {
        e.stopPropagation();
        meal.done = false;
        syncDietaCountdown();
        renderDietMeals(); // rebuild so this meal reopens bright/expanded as the current one again
      });
    }
  });

  if (!todayView) return;

  // The current (first not-done) meal is always the one shown expanded — the screen opens
  // "precisely" on it, matching the Figma reference (Merenda, before any meal was marked done).
  const meal = currentDietMeal();
  if (meal) {
    const cardEl = dietViewEl.querySelector(`.diet-card[data-meal-name="${meal.name}"]`);
    if (cardEl) {
      toggleDietCardExpand(cardEl); // also scrolls it fully into view, see scrollDietCardIntoView
    }
  }
}

// "andare avanti negli altri giorni" — pages the diet Calendar bar by one real day. Clamped so
// the future is never reachable (dietCalNextEl is disabled once todayView is true, same rule as
// the Settimana chart elsewhere in the app).
function changeDietDate(deltaDays) {
  dietViewDate = new Date(dietViewDate);
  dietViewDate.setDate(dietViewDate.getDate() + deltaDays);
  renderDietMeals();
}
dietCalPrevEl.addEventListener('click', () => changeDietDate(-1));
dietCalNextEl.addEventListener('click', () => changeDietDate(1));

function openDietView() {
  dietViewOpen = true;

  // Same sequenced fade the nav tabs use: the scene fades out first, then (once it's actually
  // gone) the diet view fades in — not a simultaneous crossfade.
  sceneEl.style.transition = 'opacity 0.25s ease';
  sceneEl.style.opacity = '0';
  sceneEl.style.pointerEvents = 'none';
  // Immediately, not after the fade: in this 3D perspective scene, a card's own transform/opacity
  // apparently doesn't reliably composite through .scene's opacity, so cards could stay visibly
  // on screen (specifically the ones nearest the top/bottom edge, previously masked by the veil)
  // for the whole fade instead of just flashing briefly — visibility:hidden has no such quirk and
  // hides every descendant unconditionally, the instant it's set.
  sceneEl.style.visibility = 'hidden';

  setTimeout(() => {
    // Swapped here (not instantly at the top) so the close icon appears at the same moment as
    // the rest of the incoming content, instead of jumping ahead of it.
    settingsIconGearEl.style.display = 'none';
    settingsIconCloseEl.style.display = 'block';

    dietViewEl.classList.add('active');
    dietCalendarBarEl.classList.add('active');

    // Unlike Settings (which isn't tied to any tab), this view is still "inside" Diet — its own
    // nav-tab icon should stay lit, so it's deliberately left untouched here.

    headerTitleEl.textContent = 'Dieta';
    headerTitleEl.style.color = DIET_COLOR;

    dietViewDate = new Date(); // always reopens on today, even if last closed elsewhere
    renderDietMeals();
  }, 250);
}

function closeDietView() {
  dietViewOpen = false;
  dietViewEl.classList.remove('active');
  dietCalendarBarEl.classList.remove('active');

  // Same sequenced fade as opening: the view fades out first (its own 0.4s CSS transition), then
  // the scene reveals — not a simultaneous crossfade. The icon swap waits here too, alongside
  // the scene, instead of jumping ahead of it.
  setTimeout(() => {
    settingsIconGearEl.style.display = 'block';
    settingsIconCloseEl.style.display = 'none';

    document.querySelectorAll('.nav-tab').forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-tab') === currentTab);
    });

    headerTitleEl.textContent = 'Homeo';
    headerSubtitleEl.textContent = TAB_SUBTITLE_MAP[currentTab];
    headerTitleEl.style.color = DATA[0].color;
    sceneEl.style.pointerEvents = 'auto';
    sceneEl.style.opacity = '1';

    // Mirrors the open side, where cards vanish (visibility:hidden) before anything else even
    // starts fading out. Here they're the last thing to reappear — only once .scene's own 0.25s
    // opacity fade-in has actually finished — instead of popping to full brightness instantly.
    setTimeout(() => { sceneEl.style.visibility = 'visible'; }, 250);
  }, 400);
}

// "Visualizza Dieta" appears on several cards (Dieta, Grassi, Carboidrati, Proteine) — matched
// by label text like setupAllenamentoButtons, safe to call unconditionally on every card.
function setupVisualizzaDietaButton(content) {
  content.querySelectorAll('.modal-button').forEach(btn => {
    if (btn.textContent.trim() === 'Visualizza Dieta') {
      btn.addEventListener('click', e => { e.stopPropagation(); openDietView(); });
    }
  });
}

// ── Photo Capture Flow (Dieta card → "Segnala Sgarro", nodes 745:10783/745:10664/927:4707/
// 927:4675; "Il mio corpo" card → "Carica foto", nodes 926:4357/925:4316/926:4525/926:4559) ──
// Camera-style screen: "Scatta foto" (live shutter) vs "Carica foto" (gallery grid) toggle, now
// followed by a confirm step ("Foto scattata"/"Foto Caricata" + Invia foto) before the photo is
// actually sent — shared between both contexts, themed and routed differently at the end:
// 'sgarro' sends to the Coach chat, 'body' saves into the private "Il mio corpo" photo library.
let sgarroViewOpen = false;
let sgarroTab = 'camera';
let sgarroStep = 'capture'; // 'capture' (live picker) | 'confirm' (review before sending)
let sgarroContext = 'sgarro';
let sgarroPendingDataUrl = null;
let sgarroPendingOrigin = 'camera'; // which tab the pending photo came from — drives the retake button's label

const SGARRO_CONTEXT_META = {
  sgarro: { color: '#79DA5E', subtitle: 'Dieta' },
  body: { color: '#F14C6B', subtitle: 'Il mio corpo' },
};

// Exact photo order from Figma node 728:9578 (row-major, 3 cols x 4 rows).
const SGARRO_GALLERY_IMAGES = [
  'assets/img/sgarro-placeholder.png', 'assets/img/sgarro-gallery-1.png', 'assets/img/sgarro-gallery-2.png',
  'assets/img/sgarro-gallery-3.png', 'assets/img/sgarro-gallery-4.png', 'assets/img/sgarro-gallery-5.png',
  'assets/img/sgarro-gallery-6.png', 'assets/img/sgarro-gallery-7.png', 'assets/img/sgarro-gallery-8.png',
  'assets/img/sgarro-gallery-9.png', 'assets/img/sgarro-gallery-10.png', 'assets/img/sgarro-gallery-11.png',
];

// Seeded with the same placeholder photos as the gallery picker, so "Vedi foto" isn't empty on
// first load — makes the multi-select/delete flow testable without needing a real upload first.
let bodyPhotos = [...SGARRO_GALLERY_IMAGES]; // confirmed via "Il mio corpo" → "Carica foto", shown in its own "Vedi foto" library
let sgarroPhotos = []; // confirmed via "Segnala Sgarro", shown in Impostazioni → "Le mie foto"

function renderSgarroGallery() {
  if (sgarroGalleryGridEl.dataset.rendered) return;
  sgarroGalleryGridEl.dataset.rendered = 'true';
  sgarroGalleryGridEl.innerHTML = SGARRO_GALLERY_IMAGES.map(src =>
    `<button class="sgarro-gallery-thumb" aria-label="Seleziona foto"><img src="${src}" alt=""></button>`
  ).join('');
  sgarroGalleryGridEl.querySelectorAll('.sgarro-gallery-thumb').forEach(btn => {
    // These previews stand in for the phone's own gallery (a static site can't read the real
    // one) — tapping a thumbnail selects that photo directly, same as picking it on a real device,
    // instead of opening the actual native file picker.
    btn.addEventListener('click', () => selectSgarroGalleryPhoto(btn.querySelector('img').src));
  });
}

// Colors every button in the bar to match the current context (Dieta green vs "Il mio corpo"
// pink) — inline, since this single bar is reused for two different theme colors.
function applySgarroTheme() {
  const color = SGARRO_CONTEXT_META[sgarroContext].color;
  [sgarroTabCameraEl, sgarroTabGalleryEl, sgarroRetakeBtnEl].forEach(btn => {
    btn.style.background = btn.classList.contains('active') ? color : `${color}4D`;
  });
  sgarroSendBtnEl.style.background = color;
}

// Shows either the Scatta/Carica tab toggle (capture step) or the retake/Invia foto pair (confirm
// step) — the two are mutually exclusive, never both visible at once.
function renderSgarroButtonBar() {
  const isConfirm = sgarroStep === 'confirm';
  sgarroTabCameraEl.style.display = isConfirm ? 'none' : '';
  sgarroTabGalleryEl.style.display = isConfirm ? 'none' : '';
  sgarroRetakeBtnEl.style.display = isConfirm ? '' : 'none';
  sgarroSendBtnEl.style.display = isConfirm ? '' : 'none';
  if (isConfirm) {
    sgarroRetakeBtnEl.textContent = sgarroPendingOrigin === 'camera' ? 'Scatta foto' : 'Carica foto';
  }
  applySgarroTheme();
}

function updateSgarroHeader() {
  const meta = SGARRO_CONTEXT_META[sgarroContext];
  headerTitleEl.textContent = sgarroStep === 'confirm'
    ? (sgarroPendingOrigin === 'camera' ? 'Foto scattata' : 'Foto Caricata')
    : (sgarroTab === 'camera' ? 'Scatta foto' : 'Carica foto');
  headerTitleEl.style.color = meta.color;
  headerSubtitleEl.textContent = meta.subtitle;
}

// Shows the right thing inside the frame for the current step: the live camera placeholder, the
// gallery grid, or (in confirm) a static preview of the pending photo.
function renderSgarroCaptureArea() {
  if (sgarroStep === 'confirm') {
    sgarroPreviewImageEl.src = sgarroPendingDataUrl;
    sgarroPreviewImageEl.style.display = 'block';
    sgarroShutterBtnEl.style.display = 'none';
    sgarroGalleryGridEl.classList.remove('active');
  } else if (sgarroTab === 'camera') {
    sgarroPreviewImageEl.src = 'assets/img/sgarro-placeholder.png';
    sgarroPreviewImageEl.style.display = 'block';
    sgarroShutterBtnEl.style.display = 'block';
    sgarroGalleryGridEl.classList.remove('active');
  } else {
    sgarroPreviewImageEl.style.display = 'none';
    sgarroShutterBtnEl.style.display = 'none';
    sgarroGalleryGridEl.classList.add('active');
    renderSgarroGallery();
  }
}

// Applies a tab's content instantly, no fade — the shared core of switchSgarroTab (below, which
// wraps this in its own fade for a tab tap on an already-visible view) and of openSgarroView's
// initial tab, where .sgarro-view's own entrance fade already covers the frame's first appearance
// and layering a second fade on top of it just produced a visible double-flash.
function applySgarroTab(tab) {
  sgarroTabCameraEl.classList.toggle('active', tab === 'camera');
  sgarroTabGalleryEl.classList.toggle('active', tab === 'gallery');
  sgarroTab = tab;
  sgarroStep = 'capture';
  renderSgarroButtonBar();
  renderSgarroCaptureArea();
  updateSgarroHeader();
}

function switchSgarroTab(tab) {
  // Same sequenced fade the main nav tabs use (Profilo ↔ Dieta): fade out, swap content, fade in.
  sgarroFrameEl.style.transition = 'opacity 0.25s ease';
  sgarroFrameEl.style.opacity = '0';
  setTimeout(() => {
    applySgarroTab(tab);
    requestAnimationFrame(() => { sgarroFrameEl.style.opacity = '1'; });
  }, 250);
}

// context: 'sgarro' (Dieta card) | 'body' ("Il mio corpo" card). initialTab lets "Carica foto"
// open straight into the gallery tab instead of always defaulting to the camera.
function openSgarroView(context, initialTab) {
  sgarroContext = context;
  sgarroViewOpen = true;

  // Same sequenced fade the nav tabs use: the scene fades out first, then (once it's actually
  // gone) the camera view fades in — not a simultaneous crossfade.
  sceneEl.style.transition = 'opacity 0.25s ease';
  sceneEl.style.opacity = '0';
  sceneEl.style.pointerEvents = 'none';
  // Immediately, not after the fade: in this 3D perspective scene, a card's own transform/opacity
  // apparently doesn't reliably composite through .scene's opacity, so cards could stay visibly
  // on screen (specifically the ones nearest the top/bottom edge, previously masked by the veil)
  // for the whole fade instead of just flashing briefly — visibility:hidden has no such quirk and
  // hides every descendant unconditionally, the instant it's set.
  sceneEl.style.visibility = 'hidden';

  // Unlike every other section, the camera/gallery frame fills edge-to-edge in Figma — no dark
  // veil clipping into the photo at the top or bottom, so this view suppresses it. Hidden right
  // away (not inside the setTimeout below) so its own 0.25s fade-out finishes before the frame
  // starts fading in — otherwise the two fades overlap and the veil briefly darkens the frame's
  // top/bottom edge while it's still appearing.
  sceneFadeTopEl.style.opacity = '0';
  sceneFadeBottomEl.style.opacity = '0';

  // This screen replaces the nav bar's own slot, per Figma — hidden right away, alongside the
  // scene/veil above, so all three fade out in lockstep instead of the bar lagging 250ms behind.
  bottomNavEl.style.opacity = '0';
  bottomNavEl.style.pointerEvents = 'none';

  setTimeout(() => {
    // Swapped here (not instantly at the top) so the close icon appears at the same moment as
    // the rest of the incoming content, instead of jumping ahead of it.
    settingsIconGearEl.style.display = 'none';
    settingsIconCloseEl.style.display = 'block';

    sgarroViewEl.classList.add('active');
    sgarroButtonBarEl.classList.add('active');

    applySgarroTab(initialTab || 'camera');
  }, 250);
}

function closeSgarroView() {
  sgarroViewOpen = false;
  sgarroViewEl.classList.remove('active');
  sgarroButtonBarEl.classList.remove('active');

  // Same sequenced fade as opening: the frame fades out first (its own 0.4s CSS transition), then
  // the scene/veil/nav bar reveal — not a simultaneous crossfade. The icon swap waits here too,
  // alongside them, instead of jumping ahead.
  setTimeout(() => {
    settingsIconGearEl.style.display = 'block';
    settingsIconCloseEl.style.display = 'none';
    bottomNavEl.style.opacity = '1';
    bottomNavEl.style.pointerEvents = 'auto';
    sceneFadeTopEl.style.opacity = '1';
    sceneFadeBottomEl.style.opacity = '1';

    document.querySelectorAll('.nav-tab').forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-tab') === currentTab);
    });

    headerTitleEl.textContent = 'Homeo';
    headerSubtitleEl.textContent = TAB_SUBTITLE_MAP[currentTab];
    headerTitleEl.style.color = DATA[0].color;
    sceneEl.style.pointerEvents = 'auto';
    sceneEl.style.opacity = '1';

    // Mirrors the open side, where cards vanish (visibility:hidden) before anything else even
    // starts fading out. Here they're the last thing to reappear — only once the veil/nav bar
    // above have actually finished their own 0.25s fade-in — instead of popping to full
    // brightness instantly while those are still barely visible.
    setTimeout(() => { sceneEl.style.visibility = 'visible'; }, 250);
  }, 400);
}

// A photo was just taken or picked — hold it and move to the confirm step instead of sending it
// straight away.
function handleSgarroFile(file, origin) {
  const reader = new FileReader();
  reader.onload = () => {
    sgarroPendingDataUrl = reader.result;
    sgarroPendingOrigin = origin;
    sgarroStep = 'confirm';
    renderSgarroButtonBar();
    renderSgarroCaptureArea();
    updateSgarroHeader();
  };
  reader.readAsDataURL(file);
}

// Same as handleSgarroFile, but for a gallery thumbnail: its src is already a usable image
// reference, so there's no File/FileReader step — it goes to the confirm step directly.
function selectSgarroGalleryPhoto(src) {
  sgarroPendingDataUrl = src;
  sgarroPendingOrigin = 'gallery';
  sgarroStep = 'confirm';
  renderSgarroButtonBar();
  renderSgarroCaptureArea();
  updateSgarroHeader();
}

// "Invia foto" on the confirm step — actually commits the pending photo: to the Coach chat for
// 'sgarro', into the private body-photo library for 'body'.
function confirmSgarroPhoto() {
  const dataUrl = sgarroPendingDataUrl;
  const context = sgarroContext;
  closeSgarroView();
  if (context === 'sgarro') {
    sgarroPhotos.push(dataUrl);
    document.querySelector('.nav-tab[data-tab="coach"]').click();
    appendChatImageBubble('user', dataUrl);
    setTimeout(() => {
      appendChatBubble('coach', 'Ricevuto, grazie per la trasparenza! Vediamo insieme come recuperare nei prossimi pasti.');
    }, 700);
  } else {
    bodyPhotos.push(dataUrl);
  }
}

sgarroTabCameraEl.addEventListener('click', () => switchSgarroTab('camera'));
sgarroTabGalleryEl.addEventListener('click', () => switchSgarroTab('gallery'));
sgarroRetakeBtnEl.addEventListener('click', () => switchSgarroTab(sgarroPendingOrigin));
sgarroSendBtnEl.addEventListener('click', confirmSgarroPhoto);
sgarroShutterBtnEl.addEventListener('click', () => sgarroCameraInputEl.click());
sgarroCameraInputEl.addEventListener('change', () => {
  const file = sgarroCameraInputEl.files[0];
  if (file) handleSgarroFile(file, 'camera');
  sgarroCameraInputEl.value = '';
});
// "Segnala Sgarro" appears only on the Dieta card's own expanded content, matched by label text
// like setupAllenamentoButtons.
function setupSegnalaSgarroButton(content) {
  content.querySelectorAll('.modal-button').forEach(btn => {
    if (btn.textContent.trim() === 'Segnala Sgarro') {
      btn.addEventListener('click', e => { e.stopPropagation(); openSgarroView('sgarro'); });
    }
  });
}

// ── Photo Library View (Il mio corpo → "Vedi foto", node 926:4389; Impostazioni → "Le mie foto",
// node 927:4590) — archive of previously confirmed photos. Tap to select any number of them; every
// unselected thumbnail dims once at least one is selected, and "Elimina foto" only lights up (and
// only works) once the selection is non-empty.
let photolibOpen = false;
let photolibContext = 'body';
let photolibSelected = new Set();

const PHOTOLIB_CONTEXT_META = {
  body: { color: '#F14C6B', subtitle: 'Il mio corpo' },
  sgarro: { color: '#D9D9D9', subtitle: 'Impostazioni' },
};

function getPhotolibPhotos() {
  return photolibContext === 'body' ? bodyPhotos : sgarroPhotos;
}

function renderPhotolibGrid() {
  const photos = getPhotolibPhotos();
  const anySelected = photolibSelected.size > 0;
  photolibGridEl.innerHTML = photos.map((src, i) => {
    const isSelected = photolibSelected.has(i);
    const classes = ['photolib-thumb'];
    if (isSelected) classes.push('selected');
    else if (anySelected) classes.push('dimmed');
    return `<button class="${classes.join(' ')}" data-index="${i}" aria-label="Seleziona foto"><img src="${src}" alt=""></button>`;
  }).join('');
  photolibGridEl.querySelectorAll('.photolib-thumb').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.dataset.index, 10);
      if (photolibSelected.has(i)) photolibSelected.delete(i);
      else photolibSelected.add(i);
      renderPhotolibGrid();
      updatePhotolibDeleteBtn();
    });
  });
}

function updatePhotolibDeleteBtn() {
  const color = PHOTOLIB_CONTEXT_META[photolibContext].color;
  const enabled = photolibSelected.size > 0;
  photolibDeleteBtnEl.disabled = !enabled;
  photolibDeleteBtnEl.style.background = enabled ? color : `${color}4D`;
}

photolibDeleteBtnEl.addEventListener('click', () => {
  if (photolibSelected.size === 0) return;
  const kept = getPhotolibPhotos().filter((_, i) => !photolibSelected.has(i));
  if (photolibContext === 'body') bodyPhotos = kept; else sgarroPhotos = kept;
  photolibSelected = new Set();
  renderPhotolibGrid();
  updatePhotolibDeleteBtn();
});

function openPhotolibView(context) {
  const photos = context === 'body' ? bodyPhotos : sgarroPhotos;
  if (photos.length === 0) return; // nothing left to view/delete once every photo's been removed

  photolibContext = context;
  photolibSelected = new Set();
  photolibOpen = true;

  sceneEl.style.transition = 'opacity 0.25s ease';
  sceneEl.style.opacity = '0';
  sceneEl.style.pointerEvents = 'none';
  // Immediately, not after the fade: in this 3D perspective scene, a card's own transform/opacity
  // apparently doesn't reliably composite through .scene's opacity, so cards could stay visibly
  // on screen (specifically the ones nearest the top/bottom edge, previously masked by the veil)
  // for the whole fade instead of just flashing briefly — visibility:hidden has no such quirk and
  // hides every descendant unconditionally, the instant it's set.
  sceneEl.style.visibility = 'hidden';

  // Hidden right away (not inside the setTimeout below): the grid's top row sits inside the
  // veil's own 174px band, so if the veil only started fading out once the grid appeared, the two
  // fades would overlap and the top row would look darkened by a passing black band as it opened.
  sceneFadeTopEl.style.opacity = '0';
  sceneFadeBottomEl.style.opacity = '0';

  // This screen replaces the nav bar's own slot, per Figma — hidden right away, alongside the
  // scene/veil above, so all three fade out in lockstep instead of the bar lagging 250ms behind.
  bottomNavEl.style.opacity = '0';
  bottomNavEl.style.pointerEvents = 'none';

  setTimeout(() => {

    // Swapped here (not instantly at the top) so the close icon appears at the same moment as
    // the rest of the incoming content, instead of jumping ahead of it.
    settingsIconGearEl.style.display = 'none';
    settingsIconCloseEl.style.display = 'block';

    const meta = PHOTOLIB_CONTEXT_META[context];
    photolibViewEl.classList.add('active');
    photolibButtonBarEl.classList.add('active');

    headerTitleEl.textContent = 'Foto';
    headerTitleEl.style.color = meta.color;
    headerSubtitleEl.textContent = meta.subtitle;

    renderPhotolibGrid();
    updatePhotolibDeleteBtn();
  }, 250);
}

function closePhotolibView() {
  photolibOpen = false;
  photolibViewEl.classList.remove('active');
  photolibButtonBarEl.classList.remove('active');

  // Same sequenced fade as opening: the grid fades out first (its own 0.4s CSS transition), then
  // the scene/veil/nav bar reveal — not a simultaneous crossfade. The icon swap waits here too,
  // alongside them, instead of jumping ahead.
  setTimeout(() => {
    settingsIconGearEl.style.display = 'block';
    settingsIconCloseEl.style.display = 'none';
    bottomNavEl.style.opacity = '1';
    bottomNavEl.style.pointerEvents = 'auto';
    sceneFadeTopEl.style.opacity = '1';
    sceneFadeBottomEl.style.opacity = '1';

    document.querySelectorAll('.nav-tab').forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-tab') === currentTab);
    });

    headerTitleEl.textContent = 'Homeo';
    headerSubtitleEl.textContent = TAB_SUBTITLE_MAP[currentTab];
    headerTitleEl.style.color = DATA[0].color;
    sceneEl.style.pointerEvents = 'auto';
    sceneEl.style.opacity = '1';

    // Mirrors the open side, where cards vanish (visibility:hidden) before anything else even
    // starts fading out. Here they're the last thing to reappear — only once the veil/nav bar
    // above have actually finished their own 0.25s fade-in — instead of popping to full
    // brightness instantly while those are still barely visible.
    setTimeout(() => { sceneEl.style.visibility = 'visible'; }, 250);
  }, 400);
}

leMieFotoBtnEl.addEventListener('click', () => openPhotolibView('sgarro'));
fotoCorpoBtnEl.addEventListener('click', () => openPhotolibView('body'));

// "Vedi foto"/"Carica foto" on the Profile-tab "Il mio corpo" card only (the Gym-tab variant has
// its own unrelated "Carica Peso" button).
function setupIlMioCorpoButtons(content) {
  content.querySelectorAll('.modal-button').forEach(btn => {
    const label = btn.textContent.trim();
    if (label === 'Vedi foto') {
      btn.addEventListener('click', e => { e.stopPropagation(); openPhotolibView('body'); });
    } else if (label === 'Carica foto') {
      btn.addEventListener('click', e => { e.stopPropagation(); openSgarroView('body', 'gallery'); });
    }
  });
}

function toggleCardExpand(el, d, index) {
  const isExpanded = el.classList.contains('expanded');

  document.querySelectorAll('.orbit-card.expanded').forEach(card => {
    if (card !== el) collapseCard(card, DATA[cards.indexOf(card)]);
  });

  if (isExpanded) {
    collapseCard(el, d);
    return;
  }

  // Clicking a card while still in the 3D rotation view (not yet scrolled to the flat list)
  // auto-scrolls down into flat mode so the expansion doesn't happen on a tilted/rotated card
  if (vScroll < 150) {
    scrollToFlatForCard(index);
  }

  let html = '';

  // Built card by card from exact Figma specs (nodes 656:3178 → 656:4248). Cards that share the
  // same title across tabs (Energie Bruciate, Attività, Battito) share identical expand content —
  // "Il mio corpo" is the one exception, which differs between the Profile and Gym tabs.
  if (d.title === 'Energie Bruciate') {
    html = makeMediaSection(d.color, 'Media', 'Giornata', '1982', 'kcal') + makeWeekSection(d.color, 'Venerdì', '1600', '2100', d.title);
  } else if (d.title === 'Attività') {
    html = makeMediaSection(d.color, 'Media', 'Giornata', '7.20', 'km') + makeWeekSection(d.color, 'Venerdì', '4.10', '5', d.title);
  } else if (d.title === 'Il mio corpo' && currentTab === 'gym') {
    // Weight has no meaningful daily Settimana chart — no per-day dataset for it.
    html = makeButtonSection(d.color, 'Carica Peso')
      + makeMediaSection(d.color, 'Massa', 'Muscoli', '30', '42')
      + makeMediaSection(d.color, 'Massa', 'Grasso', '31', '21');
  } else if (d.title === 'Il mio corpo') {
    html = makeButtonSection(d.color, 'Vedi foto') + makeButtonSection(d.color, 'Carica foto');
  } else if (d.title === 'Battito') {
    html = makeMediaSection(d.color, 'Media', 'Oggi', '77', 'buono') + makeWeekSection(d.color, 'Venerdì', '67', '77', d.title);
  } else if (d.title === 'Sonno') {
    html = makeMediaSection(d.color, 'Qualità', 'Profondo', '6.50', 'h') + makeWeekSection(d.color, 'Venerdì', '80', '100', d.title);
  } else if (d.title === 'Ossigenazione') {
    html = makeWeekSection(d.color, 'Venerdì', '96', '100', d.title);
  } else if (d.title === 'Dispositivo') {
    html = makeButtonSection(d.color, 'Disconnetti');
  } else if (d.title === 'Dieta') {
    // Same seed as "Energie Bruciate" so a given day reports identical calories burned in both cards.
    html = makeButtonSection(d.color, 'Visualizza Dieta') + makeButtonSection(d.color, 'Segnala Sgarro') + makeWeekSection(d.color, 'Venerdì', '1600', '2100', 'Energie Bruciate');
  } else if (d.title === 'Grassi') {
    html = makeButtonSection(d.color, 'Visualizza Dieta') + makeWeekSection(d.color, 'Venerdì', '41', '65', d.title);
  } else if (d.title === 'Carboidrati') {
    html = makeButtonSection(d.color, 'Visualizza Dieta') + makeWeekSection(d.color, 'Venerdì', '450', '665', d.title);
  } else if (d.title === 'Proteine') {
    html = makeButtonSection(d.color, 'Visualizza Dieta') + makeWeekSection(d.color, 'Venerdì', '110', '150', d.title);
  } else if (d.title === 'Acqua') {
    // value/goal read live from d.cur/d.goal (not hardcoded) so the quick +/- buttons' edits
    // still show correctly if the card is collapsed and re-expanded.
    html = makeAddSection(d.color, 'Aggiungi', ['- 100', '+ 100', '+ 250']) + makeWeekSection(d.color, 'Venerdì', d.cur.toFixed(2), String(d.goal), d.title);
  } else if (d.title === 'Allenamento') {
    // The 3-day rotation never has a rest day, so "Visualizza Scheda" always has a scheda to show.
    html = makeMediaSection(d.color, 'Progressi', 'Massa', '30', '42')
      + makeButtonSection(d.color, 'Visualizza Scheda') + makeButtonSection(d.color, 'Segnala Problema')
      + makeWeekSection(d.color, 'Durata', '46', '106', d.title);
  } else if (d.title === 'Minuti Attività') {
    html = makeMediaSection(d.color, 'Media', 'Giornata', '106', '90') + makeWeekSection(d.color, 'Venerdì', '46', '106', d.title);
  }

  if (!html) return; // no Figma spec received yet for this card

  const inner = el.querySelector('.card-inner');
  let content = el.querySelector('.card-expanded-content');
  if (!content) {
    content = document.createElement('div');
    content.className = 'card-expanded-content';
    inner.appendChild(content);
  }
  content.style.display = 'flex';
  content.innerHTML = html;
  content.querySelectorAll('.week-section').forEach(sectionEl => setupWeekSection(sectionEl, el, d));
  if (d.title === 'Acqua') setupAcquaButtons(content, el, d);
  if (d.title === 'Allenamento') setupAllenamentoButtons(content);
  if (d.title === 'Dieta') setupSegnalaSgarroButton(content);
  if (d.title === 'Il mio corpo' && currentTab !== 'gym') setupIlMioCorpoButtons(content);
  setupVisualizzaDietaButton(content);

  // Measure the real rendered height instead of a hardcoded constant, so this works for any future card's content
  el.classList.add('expanded');
  el._layoutHeight = inner.scrollHeight; // scroll math uses this target immediately, not the mid-transition offsetHeight
  el.style.height = inner.scrollHeight + 'px';
  ensureCardVisible(index); // runs in step with the height transition, not after it, for one smooth motion

  requestAnimationFrame(() => { content.style.opacity = '1'; });
}

// Syncs a card's own top-of-card ring/value to its current d.cur/d.goal — used both to restore
// the authentic "today" figure on collapse (undoing any Settimana-day exploration) and to reflect
// a live edit (e.g. Acqua's quick +/- buttons) immediately on the always-visible collapsed pill.
function syncCardBaseRing(card, d) {
  const ringLabelValueEl = card.querySelector('.card-section .ring-label-value');
  const ringProgressEl = card.querySelector('.card-section .ring-progress');
  if (ringLabelValueEl && ringLabelValueEl.firstChild) {
    ringLabelValueEl.firstChild.textContent = String(d.cur).replace('.', ',');
  }
  if (ringProgressEl) {
    const circ = 2 * Math.PI * 35.5;
    ringProgressEl.style.strokeDashoffset = circ * (1 - getRingRatio(d));
  }
}

function collapseCard(card, d) {
  card.classList.remove('expanded');
  const content = card.querySelector('.card-expanded-content');
  if (content) {
    content.style.opacity = '0';
    content.style.display = 'none';
  }
  card._layoutHeight = 203.832; // scroll math uses this target immediately, not the mid-transition offsetHeight
  card.style.height = '203.832px'; // exact Figma "widget closed" height, node 656:3177

  // Whatever day was explored in the Settimana chart while expanded must not leak into the
  // always-visible collapsed pill — restore the card's own authentic "today" ring/value.
  if (d) syncCardBaseRing(card, d);
}

// ── 3D Helix Carousel Engine ──────────────────────
const TAU = Math.PI * 2;
let N = DATA.length;
let SLOT = TAU / N;

const LERP = 0.1;
const FRIC = 0.94;
const AUTO_V = 0.0015;
const RX = 150;
const RZ = 190;
const CARD_SPACING = 213.832; // must match the flat-scroll card height + gap (203.832 + 10)
let RY = CARD_SPACING * N / 2;

let angle = 0;
let target = 0;
let vel = 0;
let dragging = false;
let autoOn = true;

let vScroll = 0;
let targetVScroll = 0;
let frozenFrontIndex = 0;
let lastActiveIndex = -1;
let sceneOpacity = 1;

let dragStartX = 0, dragStartY = 0, dAngle0 = 0, dVScroll0 = 0;
let lastDragX = 0, lastDragTime = 0;

function wrapAngle(a) {
  a = a % TAU;
  if (a > Math.PI) a -= TAU;
  if (a < -Math.PI) a += TAU;
  return a;
}

function frontIndex() {
  let idx = Math.round(-angle / SLOT) % N;
  if (idx < 0) idx += N;
  return idx;
}

// The height to use for scroll math — a card's *target* height (set the instant it starts
// expanding/collapsing), not its live offsetHeight, which mid-transition only reflects wherever
// the 0.4s CSS height animation currently is. Using the target lets the scroll adjustment and
// the card's own grow/shrink animation run at the same time instead of one waiting on the other.
function cardLayoutHeight(i) {
  const el = cards[i];
  if (!el) return 203.832;
  return el._layoutHeight != null ? el._layoutHeight : el.offsetHeight;
}

function getMaxScroll() {
  const gap = 10;
  let lastBottom = 0;
  for (let i = 0; i < N; i++) {
    lastBottom += cardLayoutHeight(i) + gap;
  }
  const desiredBottomY = Math.min(window.innerHeight, 874) - 448; // last card rests 20px above the nav bar
  return Math.max(0, lastBottom + 130 - desiredBottomY);
}

// Scrolls the flat list so the given card index lands just below the header, then lets it expand
function scrollToFlatForCard(index) {
  const gap = 10;
  let y = 0;
  for (let j = 0; j < index; j++) {
    y += cardLayoutHeight(j) + gap;
  }
  targetVScroll = Math.min(getMaxScroll(), Math.max(150, y + 110));
  autoOn = false;
}

// After a card's expanded height is applied, scroll down just enough (if needed) so its whole
// body clears the nav bar — cards further down the list previously expanded "underneath" the nav
// bar and stayed hidden there. Never scrolls past getMaxScroll(), so the list stays anchored at
// the bottom exactly as it already was.
function ensureCardVisible(index) {
  const gap = 10;
  let cumulativeBottom = 130;
  for (let j = 0; j <= index; j++) {
    cumulativeBottom += cardLayoutHeight(j) + gap;
  }
  const desiredBottomY = Math.min(window.innerHeight, 874) - 448;
  const projectedBottomY = cumulativeBottom - targetVScroll;
  if (projectedBottomY > desiredBottomY) {
    targetVScroll = Math.min(getMaxScroll(), targetVScroll + (projectedBottomY - desiredBottomY));
  }
}

// ── Drag / Touch / Wheel Input ────────────────────
function down(x, y) {
  dragging = true;
  autoOn = false;
  dragStartX = x;
  dragStartY = y;
  dAngle0 = angle;
  dVScroll0 = vScroll;
  vel = 0;
  lastDragX = x;
  lastDragTime = performance.now();
}

function move(x, y) {
  if (!dragging) return;
  const dx = x - dragStartX;
  const dy = y - dragStartY;

  if (vScroll > 0 || Math.abs(dy) > Math.abs(dx) * 1.2) {
    vScroll = dVScroll0 - dy * 1.5;
    if (vScroll < 0) vScroll = 0;
    const maxScroll = getMaxScroll();
    if (vScroll > maxScroll) vScroll = maxScroll;
    targetVScroll = vScroll;
  } else {
    angle = dAngle0 + dx * 0.008;
    target = angle;
  }

  const now = performance.now();
  const dt = now - lastDragTime;
  if (dt > 0) {
    vel = (x - lastDragX) / dt;
  }
  lastDragX = x;
  lastDragTime = now;
}

function up() {
  dragging = false;
  if (vScroll > 0) {
    targetVScroll = vScroll + vel * 7.5;
    const maxScroll = getMaxScroll();
    if (targetVScroll < 0) targetVScroll = 0;
    if (targetVScroll > maxScroll) targetVScroll = maxScroll;
  } else {
    target += vel * 7.5 * 0.008;
    target = Math.round(target / (SLOT / 2)) * (SLOT / 2);
  }
  autoOn = true;
}

sceneEl.addEventListener('mousedown', e => down(e.clientX, e.clientY));
window.addEventListener('mousemove', e => { if (dragging) move(e.clientX, e.clientY); });
window.addEventListener('mouseup', () => { if (dragging) up(); });

sceneEl.addEventListener('touchstart', e => down(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
sceneEl.addEventListener('touchmove', e => move(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
sceneEl.addEventListener('touchend', up, { passive: true });

// Mouse Wheel rotation support
sceneEl.addEventListener('wheel', e => {
  e.preventDefault();
  if (vScroll > 0) {
    targetVScroll += e.deltaY * 0.8;
    const maxScroll = getMaxScroll();
    if (targetVScroll < 0) targetVScroll = 0;
    if (targetVScroll > maxScroll) targetVScroll = maxScroll;
  } else {
    target -= e.deltaY * 0.0008;
    target = Math.round(target / (SLOT / 2)) * (SLOT / 2);
  }
  autoOn = true;
}, { passive: false });

// ── Navigation Tabs ──────────────────────────────
// Also mirrored onto window.currentTab — a plain top-level `let` never becomes a window property,
// but model3d.js (a separate module script) needs to read this to pick the walking/running model.
let currentTab = 'profile';
window.currentTab = currentTab;
// "Homeo" itself never changes — only its color, to match the active section. The subtitle shows
// "Benvenuto" once on first load, then switches to the current section's own name from here on.
const TAB_SUBTITLE_MAP = { profile: 'Profilo', diet: 'Dieta', gym: 'Attività' };

document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const selected = tab.getAttribute('data-tab');
    if (workoutExecutionOpen) closeWorkoutExecution();
    if (workoutViewOpen) closeWorkoutView();
    if (dietViewOpen) closeDietView();
    if (sgarroViewOpen) closeSgarroView();
    if (photolibOpen) closePhotolibView();
    if (settingsOpen) closeSettingsPanel();
    if (selected === currentTab) {
      // Tapping the already-active tab (like tapping a tab bar icon again in most apps) scrolls
      // back up to the 3D spiral view instead of doing nothing — coach has no spiral to return to.
      if (selected !== 'coach') {
        targetVScroll = 0;
        autoOn = true;
      }
      return;
    }

    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    if (selected === 'coach') {
      currentTab = 'coach';
      window.currentTab = currentTab;
      sceneEl.style.transition = 'opacity 0.25s ease';
      sceneEl.style.opacity = '0';
      sceneEl.style.pointerEvents = 'none';
      // render() skips updating individual cards while on the coach tab, so each card's own
      // opacity/pointer-events would otherwise stay frozen at its pre-switch value and briefly
      // show through (composited with the fading .scene) behind the chat during the transition
      cards.forEach(el => {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
      });
      dotsEl.style.opacity = '0';

      // Same sequenced fade every other tab switch uses: the scene fades out first, then (once
      // it's actually gone) Coach fades in — not a simultaneous crossfade.
      setTimeout(() => {
        // scene-fade-top/bottom stay active here too — same header/nav-edge veil the cards get
        coachViewEl.classList.add('active');
        chatInputBarEl.classList.add('active');
        headerLeftEl.classList.add('is-coach');
        headerTitleEl.textContent = 'Coach';
        headerTitleEl.style.color = '#fff';
        headerSubtitleEl.textContent = 'Guido Rizzo';
        renderCoachMessages();
      }, 250);
      return;
    }

    // Leaving Coach or switching between data tabs
    coachViewEl.classList.remove('active');
    chatInputBarEl.classList.remove('active');
    headerLeftEl.classList.remove('is-coach');
    sceneEl.style.pointerEvents = 'auto';

    // Smooth transition between datasets
    sceneEl.style.transition = 'opacity 0.25s ease';
    sceneEl.style.opacity = '0';
    dotsEl.style.opacity = '0';

    setTimeout(() => {
      // Remove old cards from DOM
      cards.forEach(el => el.remove());

      currentTab = selected;
      window.currentTab = currentTab;
      DATA = DATA_MAP[selected];

      // Reset carousel geometry for the new dataset
      N = DATA.length;
      SLOT = TAU / N;
      RY = CARD_SPACING * N / 2;
      angle = 0;
      target = 0;
      vel = 0;
      vScroll = 0;
      targetVScroll = 0;
      frozenFrontIndex = 0;
      lastActiveIndex = -1;

      // Re-initialize cards
      initCards();

      // Update header subtitle and accent color per tab (Figma style) — the "Homeo" title text itself never changes
      headerTitleEl.textContent = 'Homeo';
      headerSubtitleEl.textContent = TAB_SUBTITLE_MAP[selected];

      const accentColor = DATA[0].color;
      headerTitleEl.style.color = accentColor;
      frameEl.style.setProperty('--theme-color', accentColor);
      frameEl.style.setProperty('--theme-color-rgb', hexToRgb(accentColor));

      sceneEl.style.opacity = '1';
    }, 250);
  });
});

// ── Settings Panel ────────────────────────────────
let settingsOpen = false;

function openSettingsPanel() {
  settingsOpen = true;

  // Deactivate every nav tab while settings is open — it isn't tied to any of them
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));

  // Hidden right away (not inside the setTimeout below) so its own 0.25s fade-out finishes before
  // Settings starts fading in — otherwise the two fades overlap and the veil briefly darkens the
  // top of the list while it's still appearing.
  sceneFadeTopEl.style.opacity = '0';
  sceneFadeBottomEl.style.opacity = '0';

  const wasCoach = currentTab === 'coach';
  if (wasCoach) {
    coachViewEl.classList.remove('active');
    chatInputBarEl.classList.remove('active');
  } else {
    sceneEl.style.transition = 'opacity 0.25s ease';
    sceneEl.style.opacity = '0';
    sceneEl.style.pointerEvents = 'none';
    // Immediately, not after the fade: in this 3D perspective scene, a card's own transform/
    // opacity apparently doesn't reliably composite through .scene's opacity, so cards could
    // stay visibly on screen (specifically the ones nearest the top/bottom edge, previously
    // masked by the veil) for the whole fade instead of just flashing briefly —
    // visibility:hidden has no such quirk and hides every descendant unconditionally, the
    // instant it's set.
    sceneEl.style.visibility = 'hidden';
  }

  // Same sequenced fade every other section uses: whatever was showing fades out first, then
  // Settings fades in — not a simultaneous crossfade. Coming from Coach waits for its own 0.4s
  // fade (matching .coach-view's CSS transition); coming from a data tab waits for the scene's 0.25s.
  setTimeout(() => {
    // Swapped here (not instantly at the top) so the close icon appears at the same moment as
    // the rest of the incoming content, instead of jumping ahead of it.
    settingsIconGearEl.style.display = 'none';
    settingsIconCloseEl.style.display = 'block';

    settingsViewEl.classList.add('active');
    headerLeftEl.classList.remove('is-coach');
    headerTitleEl.textContent = 'Homeo';
    headerTitleEl.style.color = '#ffffff';
    headerSubtitleEl.textContent = 'Impostazioni';
  }, wasCoach ? 400 : 250);
}

function closeSettingsPanel() {
  settingsOpen = false;
  settingsViewEl.classList.remove('active');

  const goingToCoach = currentTab === 'coach';

  // Settings fades out first (its own 0.4s CSS transition), then whichever destination fades in —
  // the veil restore and icon swap also wait here so neither jumps ahead of Settings while it's
  // still visible and fading out.
  setTimeout(() => {
    settingsIconGearEl.style.display = 'block';
    settingsIconCloseEl.style.display = 'none';
    sceneFadeTopEl.style.opacity = '1';
    sceneFadeBottomEl.style.opacity = '1';

    // Re-activate whichever nav tab matches the tab we're returning to
    document.querySelectorAll('.nav-tab').forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-tab') === currentTab);
    });

    if (goingToCoach) {
      headerLeftEl.classList.add('is-coach');
      headerTitleEl.textContent = 'Coach';
      headerTitleEl.style.color = '#fff';
      headerSubtitleEl.textContent = 'Guido Rizzo';
      coachViewEl.classList.add('active');
      chatInputBarEl.classList.add('active');
    } else {
      headerTitleEl.textContent = 'Homeo';
      headerSubtitleEl.textContent = TAB_SUBTITLE_MAP[currentTab];
      headerTitleEl.style.color = DATA[0].color;
      sceneEl.style.pointerEvents = 'auto';
      sceneEl.style.opacity = '1';

      // Mirrors the open side, where cards vanish (visibility:hidden) before anything else even
      // starts fading out. Here they're the last thing to reappear — only once .scene's own
      // 0.25s opacity fade-in has actually finished — instead of popping to full brightness
      // instantly. (Not needed on the goingToCoach branch — .scene never fades back in there.)
      setTimeout(() => { sceneEl.style.visibility = 'visible'; }, 250);
    }
  }, 400);
}

settingsBtnEl.addEventListener('click', () => {
  if (workoutExecutionOpen) { closeWorkoutExecution(); return; }
  if (workoutViewOpen) { closeWorkoutView(); return; }
  if (dietViewOpen) { closeDietView(); return; }
  if (sgarroViewOpen) { closeSgarroView(); return; }
  if (photolibOpen) { closePhotolibView(); return; }
  if (settingsOpen) closeSettingsPanel();
  else openSettingsPanel();
});

// ── Animation Loop ───────────────────────────────
function render() {
  requestAnimationFrame(render);

  // Every one of these views fades .scene out and covers it entirely — without pausing here too,
  // the cards kept auto-rotating/repositioning the whole time underneath, invisible, so whatever
  // cards were on screen when the view closed again were never the ones left where the user saw
  // them, just whatever the carousel had silently drifted to in the meantime.
  if (currentTab === 'coach' || settingsOpen || sgarroViewOpen || photolibOpen || workoutViewOpen || dietViewOpen) {
    hologram.style.opacity = 0;
    glowBg.style.opacity = 0;
    dotsEl.style.opacity = 0;
    dotsEl.style.pointerEvents = 'none';
    return;
  }

  // Always keep 3D scene opacity at 1
  const targetSceneOpacity = 1;
  sceneOpacity += (targetSceneOpacity - sceneOpacity) * 0.12;

  // LERP vertical scroll
  // Re-clamp target every frame: expanding/collapsing a card changes total content height (and
  // therefore getMaxScroll()) without any drag happening, so a stale target from before the
  // change could otherwise sit past the new max and leave a gap below the last card. Only the
  // target snaps down — vScroll itself is left to the lerp below, so collapsing a card scrolls
  // back down smoothly (mirroring the smooth scroll-up on expand) instead of jumping instantly.
  const liveMaxScroll = getMaxScroll();
  if (targetVScroll > liveMaxScroll) targetVScroll = liveMaxScroll;

  vScroll += (targetVScroll - vScroll) * 0.12;
  const t = Math.min(vScroll / 150, 1); // 3D -> Flat transition progression factor

  // Scrolling back up toward the 3D/rotational section above auto-closes whatever card is
  // still expanded, since it's about to be swept back into the rotating carousel anyway.
  // Both vScroll AND its target must be low — checking vScroll alone would also fire during
  // the auto-scroll-into-view animation right after expanding a card (vScroll starts low and
  // takes a few frames to catch up to a much higher targetVScroll), collapsing it instantly.
  if (vScroll < 150 && targetVScroll < 150) {
    const expandedCard = document.querySelector('.orbit-card.expanded');
    if (expandedCard) collapseCard(expandedCard, DATA[cards.indexOf(expandedCard)]);
  }

  // Apply opacity changes to 3D scene elements — the model stays visible behind the cards at any scroll position
  const holoOpacity = sceneOpacity;
  hologram.style.opacity = holoOpacity;
  hologram.style.pointerEvents = 'none'; // Always let scroll events pass through
  glowBg.style.opacity = holoOpacity;

  // Hide dots when not in Profile
  dotsEl.style.opacity = holoOpacity;
  dotsEl.style.pointerEvents = (holoOpacity > 0.5) ? 'auto' : 'none';

  // Apply automatic rotation only in 3D Helix mode (< 5 allows it to kick in as it returns to top)
  if (autoOn && !dragging && vScroll < 5) {
    target += AUTO_V;
  }

  // Smoothly LERP angle rotation in 3D mode
  if (!dragging) {
    angle += (target - angle) * LERP;
  }

  // Apply velocity decay
  vel *= FRIC;

  // Track the front index at the start of vertical transition
  if (vScroll < 1) {
    frozenFrontIndex = frontIndex();
  }
  const fi = frozenFrontIndex;

  // ── During scroll transition, simultaneously rotate spiral so card 0 arrives at front ──
  const angleForCard0 = Math.round(angle / TAU) * TAU;
  const displayAngle = angle + (angleForCard0 - angle) * t;

  // ── Calculate flat list positions strictly by index order ──
  // Uses each card's live rendered height so expanded cards push siblings down (and animate smoothly with the height transition)
  const gap = 10;
  const flatPositions = [];
  let cumY = 0;
  for (let i = 0; i < N; i++) {
    flatPositions[i] = cumY;
    cumY += (cards[i] ? cards[i].offsetHeight : 203.832) + gap;
  }

  // Positioning
  for (let i = 0; i < N; i++) {
    const nominalAngle = i * SLOT + displayAngle;
    const localAngle = wrapAngle(nominalAngle);

    const cosA = Math.cos(localAngle);
    const sinA = Math.sin(localAngle);

    // ── Vertical-axis carousel + spiral: cards orbit around the 3D model while climbing the helix ──
    const x_3d = sinA * RX;
    const y_3d = (localAngle / Math.PI) * RY;
    const z_3d = cosA * RZ;
    const rotY_3d = localAngle * 0.55;
    const opacity_3d = 0.4 + 0.6 * Math.pow((cosA + 1) / 2, 1.2);
    const scale_3d = 1;

    // ── Flat Vertical Scroll coordinates ──
    const x_flat = 0;
    const y_flat = flatPositions[i] - vScroll + 130;
    const z_flat = 0; // no depth offset once flat, so perspective doesn't magnify the card beyond its real 361px width
    const rotY_flat = 0;
    const scale_flat = 1;

    // Fade out flat cards only once they scroll past the bottom nav — no fade while scrolling up
    const fadeBottomY = Math.min(window.innerHeight, 874) * 0.52 - 30;
    let opacity_flat = 1.0;
    if (y_flat > fadeBottomY) {
      opacity_flat = Math.max(0, 1 - (y_flat - fadeBottomY) / 100);
    }

    // ── Interpolate layouts based on vertical scroll transition factor t ──
    const x = x_3d * (1 - t) + x_flat * t;
    const y = y_3d * (1 - t) + y_flat * t;
    const z = z_3d * (1 - t) + z_flat * t;
    const rotY = rotY_3d * (1 - t) + rotY_flat * t;
    const opacity = opacity_3d * (1 - t) + opacity_flat * t;
    const scale = scale_3d * (1 - t) + scale_flat * t;

    const el = cards[i];
    if (el) {
      el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotY}rad) scale(${scale})`;
      el.style.opacity = opacity * sceneOpacity;
      el.style.zIndex = Math.round(z + 1000);
      el.style.pointerEvents = (t > 0.5 || opacity > 0.2) ? 'auto' : 'none';
    }
  }

  // Active theme updates
  const currentFi = (vScroll > 0) ? fi : frontIndex();
  if (currentFi !== lastActiveIndex && DATA[currentFi]) {
    lastActiveIndex = currentFi;
    const activeColor = DATA[currentFi].color;
    const rgbStr = hexToRgb(activeColor);

    // Update CSS theme variables
    frameEl.style.setProperty('--theme-color', activeColor);
    frameEl.style.setProperty('--theme-color-rgb', rgbStr);

    // Update dot indicators
    for (let i = 0; i < dotsEl.children.length; i++) {
      const dot = dotsEl.children[i];
      const isActive = i === currentFi;
      dot.classList.toggle('active', isActive);
    }
  }
}

// ── Start ─────────────────────────────────────────
initCards();
frameEl.style.setProperty('--theme-color', DATA[0].color);
frameEl.style.setProperty('--theme-color-rgb', hexToRgb(DATA[0].color));
headerTitleEl.style.color = DATA[0].color;
render();
