# Homeo 📱✨

Benvenuto in **Homeo**, un'applicazione web mobile premium progettata per il monitoraggio e la visualizzazione delle metriche quotidiane di fitness, dieta e benessere. L'applicazione si distingue per un'interfaccia utente immersiva ispirata ai moderni canoni di design (come il *glassmorphism*, micro-animazioni e grain texture), unita a un carosello 3D ad elica e a un modello tridimensionale interattivo al centro della scena realizzato in **Three.js**.

Tutte le sezioni dell'applicazione (**Profilo**, **Dieta**, **Attività** e **Coach**) sono state progettate per condividere una raffinata esperienza utente basata sul carosello 3D e sulla transizione fluida verso la visualizzazione in lista piatta.

---

## 🌟 Caratteristiche Principali

### 1. Interfaccia Immersiva & Mobile Emulator
* **Premium Bezel & Status Bar**: L'applicazione è racchiusa all'interno di un mockup di smartphone premium, completo di barra di stato in stile iOS (ora, icone di rete/5G, livello batteria) per simulare l'esperienza mobile reale.
* **Grain Overlay & Glassmorphism**: Un sottile effetto di rumore visivo (grain texture) e un diffuso stile "frosted glass" donano un aspetto lussuoso e moderno alla UI.

### 2. Modelli 3D Interattivi (Three.js)
* **Visualizzazione Dinamica dei Modelli**: A seconda della scheda attiva, viene renderizzato un modello tridimensionale specifico animato:
  * **Modello Walking** (`persona-walking.glb`): Mostrato nelle sezioni *Profilo*, *Dieta* e *Coach*.
  * **Modello Running** (`persona-running.glb`): Mostrato nella sezione *Attività* (Palestra) per richiamare lo sforzo fisico.
* **Calcolo della Scala di Sicurezza**: La logica in `model3d.js` misura dinamicamente le posizioni reali dei vertici animati (skinned mesh) per scalare uniformemente i modelli in base all'aspect ratio della finestra, evitando compenetrazioni o tagli visivi al limite dello schermo (*frustum clipping*).
* **Rotazione Continua**: I modelli ruotano in modo fluido sul proprio asse verticale.

### 3. Carosello Elicoidale 3D (Helix)
* **Rotazione Geometrica 3D**: Le schede delle metriche sono disposte nello spazio tridimensionale lungo un'elica. L'utente può ruotarle trascinando orizzontalmente (drag/swipe) o cliccando direttamente su una scheda per centrarla.
* **Transizione 3D a Flat List**: Scorrendo verticalmente (tramite drag verticale o rotella del mouse), il carosello ad elica si allinea e si trasforma fluidamente in una lista verticale bidimensionale classica.

### 4. Sezioni dell'Applicazione & Dataset Dedicati

* **👤 Profilo**:
  * Visualizzazione delle metriche generali: *Energie Bruciate*, *Attività*, *Il mio corpo* (peso), *Battito*, *Sonno*, *Ossigenazione* e *Dispositivo* (Galaxy Ring).
  * **Grafici Lineari SVG Dinamici**: Tracciati sinusoidali personalizzati per mostrare fluttuazioni storiche (es. peso, ossigenazione).
* **🍎 Dieta**:
  * Tracciamento dei pasti e dei macronutrienti (*Dieta*, *Energie Bruciate*, *Grassi*, *Carboidrati*, *Proteine*, *Acqua*) con anelli progressivi segmentati e standard.
  * **Visualizza Dieta**: Sezione di dettaglio che mostra i pasti del giorno.
  * **Calendario Storico**: Barra di navigazione per scorrere i giorni precedenti. Il pulsante "Avanti" si disabilita per il giorno corrente trattandosi di uno storico.
  * **Segnala Sgarro**: Flusso di cattura/caricamento di foto per segnalare pasti extra.
* **🏋️ Attività**:
  * Schede dedicate all'allenamento: *Allenamento* (prossimo giorno), *Battito*, *Minuti Attività*, *Distanza*, *Energie Bruciate*, *Il mio corpo*.
  * **Visualizza Scheda**: Dettaglio dell'allenamento del giorno.
  * **Calendario Settimanale**: Consente di navigare tra i giorni della settimana in entrambe le direzioni (programma ricorrente).
  * **Visualizza Esecuzione**: Dettaglio dell'esercizio con foto dimostrativa.
* **💬 Coach**:
  * Chat interattiva in tempo reale con il coach virtuale, con supporto all'invio dei messaggi e visualizzazione a scorrimento completo dietro la barra di stato e la barra di navigazione.

### 5. Flusso di Cattura Foto & Galleria Corpo
* **Fotocamera e Galleria**: Flusso integrato per scattare foto in tempo reale (tramite fotocamera del dispositivo) o caricarle dalla galleria.
* **Conferma dell'Invio**: Anteprima dell'immagine scattata con passaggi di conferma prima del salvataggio.
* **Libreria Foto**: Griglia integrata ("Le mie foto" / "Vedi foto") con supporto alla selezione multipla ed eliminazione delle immagini archiviate.

---

## 📂 Struttura del Progetto

```
Homeo/
├── index.html            – Struttura scheletro dell'applicazione (HTML5 semantico, emulator status bar e viste modali).
├── style.css             – Stili dell'applicazione: variabili CSS, layout responsive, animazioni hardware-accelerated, stili glassmorphism e overlay grain.
├── app.js                – Logica applicativa principale: gestione touch/drag, rotazione della spirale, transizione 3D-to-Flat, gestione dei tab e dei relativi dataset.
├── model3d.js            – Modulo Three.js per il caricamento, la calibrazione dinamica, l'animazione e la visualizzazione dei modelli 3D GLTF.
├── persona-walking.glb   – Modello 3D animato del personaggio che cammina.
├── persona-running.glb   – Modello 3D animato del personaggio che corre.
├── assets/
│   ├── img/              – Asset grafici, icone e immagini dimostrative per gli esercizi e gli avatar.
│   └── figma/            – Risorse relative al design originale.
└── README.md             – Documentazione del progetto (questo file).
```

---

## 🚀 Guida all'Uso

### Requisiti
Non è richiesta alcuna compilazione o dipendenza esterna complessa. È sufficiente un browser web moderno (Chrome, Edge, Safari, Firefox).

### Avvio Locale
1. Apri la cartella del progetto.
2. Apri il file `index.html` con un browser web, oppure utilizza un server locale (es. estensione *Live Server* di VS Code) per caricare correttamente i modelli 3D in locale senza restrizioni di CORS del browser.

---

## 🔧 Personalizzazione e Sviluppo

### Modifica dei Dataset
Le informazioni visualizzate nei caroselli sono configurate all'interno di `DATA_MAP` in `app.js`:
```javascript
const DATA_MAP = {
  profile: [ /* schede profilo */ ],
  diet: [ /* schede dieta */ ],
  gym: [ /* schede palestra/attività */ ]
};
```

#### Struttura della Scheda Metrica:
```javascript
{
  title: 'Titolo Scheda',
  metric: 'Sottotitolo/Unità',
  cur: 75,               // Valore corrente
  goal: 90,              // Obiettivo
  u: 'kg',               // Unità di misura
  color: '#F14C6B',      // Colore tema per glow e indicatori
  type: 'graph',         // Opzionale: 'graph', 'segmented' o cerchio progressivo (default)
  ringGoal: 100          // Opzionale: obiettivo alternativo per il progress ring
}
```

### Modifica degli Stili
Tutti gli elementi visivi, le variabili CSS, i font (`Satoshi`, `Poppins` e `Inter`) e le animazioni sono modificabili all'interno di `style.css`.
