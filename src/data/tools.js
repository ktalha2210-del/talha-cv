export const TOOLS_DATA = {
  'quick-notes': {
    id: 'quick-notes',
    title: 'Quick Notes',
    tagline: 'A keyboard-first scratchpad that lives on top of any page',
    cardDescription: 'Browser extension for capturing and organizing quick thoughts',
    color: '#3B82F6',
    glowColor: 'rgba(59, 130, 246, 0.25)',
    borderColor: 'rgba(59, 130, 246, 0.35)',
    logo: '/images/quicknotes-logo.svg',

    problem: "Jotting down a fleeting thought usually means breaking your flow — opening a separate notes app, switching tabs, hunting for where you left off. By the time the app loads, the thought is half-gone.",
    whatItIs: "Quick Notes is a minimal, keyboard-first scratchpad that lives directly on top of whatever page you're browsing. Hit a hotkey, type your note, and get back to what you were doing — the panel disappears and your note is saved. Everything lives in local browser storage: no account, no sync, no cloud, no analytics.",

    features: [
      { title: 'Instant capture', desc: 'A shortcut opens the editor with the cursor already active — just start typing.' },
      { title: 'Peek without breaking focus', desc: 'Hold a hotkey to glance at your notes read-only; release to dismiss instantly.' },
      { title: 'Pin it open', desc: 'Double-tap the peek shortcut to keep the panel open, scroll, edit, or create new notes.' },
      { title: 'Autosave, always', desc: 'Saves ~300ms after you stop typing, and immediately when the editor loses focus.' },
      { title: '100% local & private', desc: 'Notes are stored only in chrome.storage.local — no servers, no tracking, ever.' },
      { title: 'Fully rebindable', desc: 'Every shortcut can be changed from the toolbar popup settings.' },
    ],

    shortcuts: [
      { keys: 'Ctrl/Cmd + N', action: 'New note — opens editor, cursor ready' },
      { keys: 'Hold Ctrl/Cmd + Q', action: 'Peek at notes (read-only); release to dismiss' },
      { keys: 'Ctrl/Cmd + Q, twice', action: 'Pin the panel open (sticky mode)' },
      { keys: 'Enter', action: 'Save & close (Shift+Enter for new line)' },
      { keys: 'Esc', action: 'Close panel / discard empty note' },
    ],

    installSteps: [
      'Download the ZIP below and unzip it anywhere on your computer.',
      'Open Chrome and go to chrome://extensions in the address bar.',
      'Turn on "Developer mode" using the toggle in the top-right corner.',
      'Click "Load unpacked" and select the unzipped quick-notes-extension folder (the one containing manifest.json).',
      'The blue "N" icon appears in your toolbar — click the puzzle-piece icon and pin it for quick access.',
      'Try it: on any webpage, press Ctrl+N (⌘+N on Mac) to create your first note.',
    ],

    downloadUrl: '/downloads/quick-notes-extension.zip',
    downloadLabel: 'Download Quick Notes',
    downloadSize: '~50 KB',
    privacy: 'No account, no sync, no network requests, no analytics. Notes never leave your device.',
  },

  'textlens': {
    id: 'textlens',
    title: 'TextLens',
    tagline: 'Copy text out of any image, right in the browser',
    cardDescription: 'Extract, transform, and analyze text on the web effortlessly',
    color: '#A78BFA',
    glowColor: 'rgba(167, 139, 250, 0.25)',
    borderColor: 'rgba(167, 139, 250, 0.35)',
    logo: '/images/textlens-logo-256.png',

    problem: "Text trapped inside an image — a screenshot, a scanned document, a meme, a chart label — is usually a dead end. You either retype it by hand or upload it to some third-party OCR website and hope it treats your data responsibly.",
    whatItIs: "TextLens brings iOS-style \"Live Text\" to the desktop browser. Press a shortcut while looking at an image, and the text inside it becomes real, selectable, copyable text — drag to select, double-click for a word, triple-click for a line. All OCR runs 100% on-device using a bundled offline Tesseract.js (WASM) engine, so nothing is ever uploaded anywhere.",

    features: [
      { title: 'One shortcut, any image', desc: 'Press the hotkey and TextLens scans the image on screen automatically.' },
      { title: '100% local OCR', desc: 'Runs entirely on-device via bundled WASM Tesseract — zero network requests at scan time.' },
      { title: 'Real text selection', desc: 'Character-accurate drag select, double-click for word, triple-click for line — feels like native text.' },
      { title: 'Smart copy', desc: 'Ctrl/Cmd+C preserves line and paragraph breaks, reconstructed from the OCR model.' },
      { title: 'Multi-image picker', desc: "If a page has several images, click to pick the one you want scanned." },
      { title: 'Cross-origin fallback', desc: 'Images that block canvas access are handled via a tab-capture fallback automatically.' },
    ],

    shortcuts: [
      { keys: 'Ctrl/Cmd + Shift + O', action: 'Scan the image on the current page' },
      { keys: 'Drag', action: 'Select recognized text' },
      { keys: 'Double-click', action: 'Select a word' },
      { keys: 'Triple-click', action: 'Select a line' },
      { keys: 'Ctrl/Cmd + A / C', action: 'Select all / copy recognized text' },
      { keys: 'Esc', action: 'Exit scan mode' },
    ],

    installSteps: [
      'Download the ZIP below and unzip it anywhere on your computer.',
      'Open Chrome and go to chrome://extensions in the address bar.',
      'Turn on "Developer mode" using the toggle in the top-right corner.',
      'Click "Load unpacked" and select the unzipped textlens-extension folder (the one containing manifest.json).',
      'The TextLens icon appears in your toolbar.',
      'Open any page with an image and press Ctrl+Shift+O (⌘+Shift+O on Mac), then drag to select and copy the text.',
    ],

    downloadUrl: '/downloads/textlens-extension.zip',
    downloadLabel: 'Download TextLens',
    downloadSize: '~4.5 MB',
    privacy: 'All OCR happens on-device. No image data, extracted text, or browsing history is ever transmitted or logged.',
  },
};

export const TOOLS_LIST = Object.values(TOOLS_DATA);
