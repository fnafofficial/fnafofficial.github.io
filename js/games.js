// ========================================
// GAMES PAGE - SIMPLE & CLEAN
// ========================================

/*
🎯 CÁCH THÊM GAME MỚI - CHỈ CẦN THÊM 1 DÒNG VÀO GAMES ARRAY:

1. Thêm game vào GAMES array bên dưới
2. Tạo thư mục game:
   - FNAF games: games/tên-thư-mục/index.html + logo.png
   - Other games: other-games/tên-thư-mục/index.html + logo.png

VÍ DỤ THÊM GAME MỚI:
{ id: "new-game", title: "New Game", folder: "new-game", logo: "../games/new-game/logo.png", type: "fnaf" }
*/

const GAMES = [
  // FNAF Games
  {
    id: "fnaf1",
    title: "FNAF 1",
    folder: "fnaf1",
    logo: "../games/fnaf1/logo.webp",
    type: "fnaf",
  },
  {
    id: "fnaf2",
    title: "FNAF 2",
    folder: "fnaf2",
    logo: "../games/fnaf2/logo.webp",
    type: "fnaf",
  },
  {
    id: "fnaf3",
    title: "FNAF 3",
    folder: "fnaf3",
    logo: "../games/fnaf3/logo.webp",
    type: "fnaf",
  },
  {
    id: "fnaf4",
    title: "FNAF 4",
    folder: "fnaf4",
    logo: "../games/fnaf4/logo.webp",
    type: "fnaf",
  },
  {
    id: "ucn",
    title: "UCN",
    folder: "fnaf-ucn",
    logo: "../games/fnaf-ucn/logo.webp",
    type: "fnaf",
  },
  {
    id: "hack",
    title: "FNAF Hack",
    folder: "fnaf-hack",
    logo: "../games/fnaf-hack/logo.webp",
    type: "fnaf",
  },
  {
    id: "poppy-strike-5",
    title: "Poppy Strike 5",
    folder: "poppy-strike-5",
    logo: "https://champion-island.github.io/game/poppy-strike-5/logo.png",
    type: "other",
    gameUrl: "https://champion-island.github.io/game/poppy-strike-5/index.html",
  },
  {
    id: "fnaf-shooter",
    title: "FNAF Shooter",
    folder: "fnaf-shooter",
    logo: "https://champion-island.github.io/game/fnaf-shooter/logo.png",
    type: "other",
    gameUrl: "https://champion-island.github.io/game/fnaf-shooter/index.html",
  },
  {
    id: "five-nights-at-christmas",
    title: "Five Nights at Christmas",
    folder: "five-nights-at-christmas",
    logo: "https://champion-island.github.io/game/five-nights-at-christmas/logo.png",
    type: "other",
    gameUrl:
      "https://champion-island.github.io/game/five-nights-at-christmas/index.html",
  },
  {
    id: "five-nights-at-old-toy-factory",
    title: "Five Nights at Old Toy Factory",
    folder: "five-nights-at-old-toy-factory",
    logo: "https://champion-island.github.io/game/five-nights-at-old-toy-factory-2020/logo.png",
    type: "other",
    gameUrl:
      "https://champion-island.github.io/game/five-nights-at-old-toy-factory-2020/index.html",
  },
  {
    id: "counter-craft-2-zombies",
    title: "Counter Craft 2 Zombies",
    folder: "counter-craft-2-zombies",
    logo: "https://champion-island.github.io/game/counter-craft-2-zombies/logo.png",
    type: "other",
    gameUrl:
      "https://champion-island.github.io/game/counter-craft-2-zombies/index.html",
  },
  {
    id: "skibidi-toilet-shooting",
    title: "Skibidi Toilet Shooting",
    folder: "skibidi-toilet-shooting",
    logo: "https://champion-island.github.io/game/skibidi-toilet-shooting/logo.png",
    type: "other",
    gameUrl:
      "https://champion-island.github.io/game/skibidi-toilet-shooting/index.html",
  },
];

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  console.log("🎮 Games page loaded");
  loadAllGames();
});

// ========================================
// GAME LOADING
// ========================================

function loadAllGames() {
  console.log(`🎮 Loading ${GAMES.length} games...`);

  const gamesGrid = document.getElementById("games-grid");
  if (!gamesGrid) {
    console.error("❌ games-grid element not found!");
    return;
  }

  // Clear and load all games
  gamesGrid.innerHTML = "";

  GAMES.forEach((game) => {
    const gameCard = createGameCard(game);
    gamesGrid.appendChild(gameCard);
  });

  console.log(`✅ Loaded ${GAMES.length} games`);
}

// ========================================
// GAME CARD CREATION
// ========================================

function createGameCard(game) {
  const card = document.createElement("article");
  card.className = "simple-game-card";
  card.dataset.gameId = game.id;
  card.dataset.gameType = game.type;

  card.innerHTML = `
    <div class="simple-game-image">
      <img 
        src="${game.logo}" 
        alt="${game.title} Logo" 
        loading="lazy"
        decoding="async"
        onerror="this.style.display='none';"
      />
    </div>
    <div class="simple-game-content">
      <h3 class="simple-game-title">${game.title}</h3>
    </div>
  `;

  // Add click event
  card.onclick = function () {
    playGame(game.id);
  };

  return card;
}

// ========================================
// GAME PLAYING
// ========================================

function playGame(gameId) {
  const game = GAMES.find((g) => g.id === gameId);
  if (!game) {
    console.error(`❌ Game not found: ${gameId}`);
    return;
  }

  console.log(`🎮 Playing: ${game.title}`);
  showGameIframe(game);
}

function showGameIframe(game) {
  const gamePath = getGamePath(game);

  // ADVANCED IFRAME Solution: Perfect mouse capture with sandbox
  createAdvancedIframe(gamePath, game.title);
}

function createAdvancedIframe(gamePath, gameTitle) {
  // Remove existing iframe if any
  const existingIframe = document.getElementById("game-iframe");
  if (existingIframe) {
    existingIframe.remove();
  }

  // Create iframe container with game title - modal size
  const iframeContainer = document.createElement("div");
  iframeContainer.id = "game-iframe-container";
  iframeContainer.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    height: 80vh;
    max-width: 1200px;
    max-height: 800px;
    background: #000;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `;

  // Create game header with title and controls
  const gameHeader = document.createElement("div");
  gameHeader.id = "game-header";
  gameHeader.style.cssText = `
    background: rgba(0,0,0,0.9);
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #dc143c;
  `;

  // Game title
  const gameTitleElement = document.createElement("h2");
  gameTitleElement.innerHTML = gameTitle;
  gameTitleElement.style.cssText = `
    color: white;
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  `;

  // ESC instruction in header
  const escInstruction = document.createElement("div");
  escInstruction.style.cssText = `
    color: #888;
    font-size: 16px;
    font-style: italic;
  `;
  escInstruction.innerHTML = "Press ESC to show mouse cursor";

  // Control buttons
  const controlButtons = document.createElement("div");
  controlButtons.style.cssText = `
    display: flex;
    gap: 10px;
  `;

  // Fullscreen button
  const fullscreenBtn = document.createElement("button");
  fullscreenBtn.innerHTML = "⛶ Fullscreen";
  fullscreenBtn.style.cssText = `
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  `;
  fullscreenBtn.onclick = () => toggleFullscreen();

  // Close button
  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "✕ Close";
  closeBtn.style.cssText = `
    background: #dc143c;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  `;
  closeBtn.onclick = () => closeGameIframe();

  // Add buttons to control panel
  controlButtons.appendChild(fullscreenBtn);
  controlButtons.appendChild(closeBtn);

  // Add elements to header
  gameHeader.appendChild(gameTitleElement);
  gameHeader.appendChild(escInstruction);
  gameHeader.appendChild(controlButtons);

  // Create iframe
  const iframe = document.createElement("iframe");
  iframe.id = "game-iframe";
  iframe.src = gamePath;
  iframe.style.cssText = `
    flex: 1;
    border: none;
    background: #000;
  `;

  // Advanced iframe attributes for mouse capture
  iframe.setAttribute(
    "sandbox",
    "allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock"
  );
  iframe.setAttribute(
    "allow",
    "fullscreen; pointer-lock; autoplay; microphone; camera"
  );
  iframe.setAttribute("loading", "eager");

  // Add elements to container
  iframeContainer.appendChild(gameHeader);
  iframeContainer.appendChild(iframe);

  // Add container to body
  document.body.appendChild(iframeContainer);

  // Add CSS for fullscreen responsiveness
  const style = document.createElement("style");
  style.textContent = `
    #game-iframe-container:fullscreen {
      width: 100vw !important;
      height: 100vh !important;
      border-radius: 0 !important;
      transform: none !important;
      top: 0 !important;
      left: 0 !important;
    }
  `;
  document.head.appendChild(style);
  container._fullscreenStyle = style;

  // Setup mouse capture system
  setupMouseCapture(iframeContainer, iframe);

  // Focus iframe
  iframe.onload = () => {
    iframe.focus();
    // Try to request pointer lock
    iframe.contentWindow?.requestPointerLock?.();
  };

  // Add keyboard listener for escape
  document.addEventListener("keydown", handleEscapeKey);
}

// Mouse trapping removed - using simple iframe like Champion Island

function setupMouseCapture(container, iframe) {
  let isMouseCaptured = false;

  // Hide cursor when mouse is captured
  const hideCursor = () => {
    container.style.cursor = "none";
    document.body.style.cursor = "none";
    isMouseCaptured = true;
  };

  // Show cursor when mouse is released
  const showCursor = () => {
    container.style.cursor = "default";
    document.body.style.cursor = "default";
    isMouseCaptured = false;
  };

  // Mouse down handler - capture mouse
  const handleMouseDown = (e) => {
    if (e.target === iframe || iframe.contains(e.target)) {
      hideCursor();
      iframe.focus();
      // Try to request pointer lock
      iframe.contentWindow?.requestPointerLock?.();
    }
  };

  // Escape key handler - release mouse
  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      if (isMouseCaptured) {
        showCursor();
        // Try to exit pointer lock
        iframe.contentWindow?.exitPointerLock?.();
      } else {
        closeGameIframe();
      }
    }
  };

  // Add event listeners
  container.addEventListener("mousedown", handleMouseDown);
  document.addEventListener("keydown", handleEscapeKey);

  // Store handlers for cleanup
  container._mouseHandlers = {
    handleMouseDown,
    handleEscapeKey,
  };
}

function closeGameIframe() {
  const container = document.getElementById("game-iframe-container");
  if (container) {
    // Cleanup mouse handlers
    if (container._mouseHandlers) {
      container.removeEventListener(
        "mousedown",
        container._mouseHandlers.handleMouseDown
      );
      document.removeEventListener(
        "keydown",
        container._mouseHandlers.handleEscapeKey
      );
    }

    // Remove fullscreen CSS
    if (container._fullscreenStyle) {
      container._fullscreenStyle.remove();
    }

    // Restore cursor
    document.body.style.cursor = "default";

    container.remove();
  }
  document.removeEventListener("keydown", handleEscapeKey);
}

function toggleFullscreen() {
  const container = document.getElementById("game-iframe-container");
  const fullscreenBtn = document.querySelector("#game-header button");

  if (container) {
    if (document.fullscreenElement) {
      // Exit fullscreen
      document.exitFullscreen();
      fullscreenBtn.innerHTML = "⛶ Fullscreen";
    } else {
      // Enter fullscreen
      container.requestFullscreen();
      fullscreenBtn.innerHTML = "⛶ Exit Fullscreen";
    }
  }
}

function handleEscapeKey(event) {
  if (event.key === "Escape") {
    closeGameIframe();
  }
}

// Function removed - using advanced iframe solution

// Function removed - using direct redirect

function getGamePath(game) {
  // Nếu có gameUrl (external link), sử dụng nó
  if (game.gameUrl) {
    return game.gameUrl;
  }

  // Nếu không có gameUrl, sử dụng local path
  if (game.type === "fnaf") {
    return `../games/${game.folder}/index.html`;
  } else {
    return `../other-games/${game.folder}/index.html`;
  }
}

// ========================================
// MODAL CONTROLS
// ========================================

// Function removed - using direct redirect

// Function removed - using direct redirect

// Function removed - using direct redirect

// ========================================
// FUNCTIONS REMOVED - USING DIRECT REDIRECT
// ========================================

// ========================================
// EXPORT FUNCTIONS
// ========================================

window.playGame = playGame;
window.closeGameIframe = closeGameIframe;
window.toggleFullscreen = toggleFullscreen;

console.log("🎮 Games.js loaded successfully!");
console.log(`📊 Total games: ${GAMES.length}`);
console.log("🎯 To add new game: Just add 1 line to GAMES array!");
