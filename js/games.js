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
    logo: "../games/fnaf1/logo.png",
    type: "fnaf",
  },
  {
    id: "fnaf2",
    title: "FNAF 2",
    folder: "fnaf2",
    logo: "../games/fnaf2/logo.png",
    type: "fnaf",
  },
  {
    id: "fnaf3",
    title: "FNAF 3",
    folder: "fnaf3",
    logo: "../games/fnaf3/logo.png",
    type: "fnaf",
  },
  {
    id: "fnaf4",
    title: "FNAF 4",
    folder: "fnaf4",
    logo: "../games/fnaf4/logo.png",
    type: "fnaf",
  },
  {
    id: "ucn",
    title: "UCN",
    folder: "fnaf-ucn",
    logo: "../games/fnaf-ucn/logo.png",
    type: "fnaf",
  },
  {
    id: "hack",
    title: "FNAF Hack",
    folder: "fnaf-hack",
    logo: "../games/fnaf-hack/logo.png",
    type: "fnaf",
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
  // Remove existing modal if any
  const existingModal = document.querySelector(".game-modal-overlay");
  if (existingModal) {
    existingModal.remove();
  }

  // Get game path
  const gamePath = getGamePath(game);

  // Create modal
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "game-modal-overlay";
  modalOverlay.innerHTML = `
    <div class="game-modal-container">
      <div class="game-modal-header">
        <h2 class="game-modal-title">${game.title}</h2>
        <div class="game-modal-controls">
          <button class="fullscreen-btn" onclick="toggleFullscreen()" title="Toggle Fullscreen">
            <span class="fullscreen-icon">⛶</span>
          </button>
          <button class="close-btn" onclick="closeGameModal()" title="Close Game">
            <span class="close-icon">✕</span>
          </button>
        </div>
      </div>
      <div class="game-modal-content">
        <iframe 
          src="${gamePath}" 
          class="game-iframe"
          frameborder="0"
          allowfullscreen
          title="${game.title}">
        </iframe>
      </div>
    </div>
  `;

  document.body.appendChild(modalOverlay);
  document.body.style.overflow = "hidden";

  // Add escape key listener
  document.addEventListener("keydown", handleEscapeKey);
}

function getGamePath(game) {
  if (game.type === "fnaf") {
    return `../games/${game.folder}/index.html`;
  } else {
    return `../other-games/${game.folder}/index.html`;
  }
}

// ========================================
// MODAL CONTROLS
// ========================================

function closeGameModal() {
  const modal = document.querySelector(".game-modal-overlay");
  if (modal) {
    modal.remove();
    document.body.style.overflow = "";
    document.removeEventListener("keydown", handleEscapeKey);
  }
}

function toggleFullscreen() {
  const modal = document.querySelector(".game-modal-container");
  if (modal) {
    if (!document.fullscreenElement) {
      modal.requestFullscreen().catch((err) => {
        console.log("Error attempting to enable fullscreen:", err);
      });
    } else {
      document.exitFullscreen();
    }
  }
}

function handleEscapeKey(event) {
  if (event.key === "Escape") {
    closeGameModal();
  }
}

// ========================================
// EXPORT FUNCTIONS
// ========================================

window.playGame = playGame;
window.closeGameModal = closeGameModal;
window.toggleFullscreen = toggleFullscreen;
window.handleEscapeKey = handleEscapeKey;

console.log("🎮 Games.js loaded successfully!");
console.log(`📊 Total games: ${GAMES.length}`);
console.log("🎯 To add new game: Just add 1 line to GAMES array!");
