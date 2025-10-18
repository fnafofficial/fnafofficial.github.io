// FNAF Official Website JavaScript
// Optimized for performance and user experience

// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", function () {
  initializeWebsite();
});

// Initialize all website functionality
function initializeWebsite() {
  setupSmoothScrolling();
  setupGameCards();
  setupLoadingAnimation();
  setupIntersectionObserver();
  setupNavigation();
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Update URL without triggering scroll
        history.pushState(null, null, targetId);
      }
    });
  });
}

// Setup game cards with animation
function setupGameCards() {
  const gameCards = document.querySelectorAll(".game-card");

  gameCards.forEach((card) => {
    card.classList.add("fade-in");
  });
}

// Loading animation for better UX
function setupLoadingAnimation() {
  // Add loading class to body
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease-in-out";

  // Show content after load
  window.addEventListener("load", function () {
    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 100);
  });
}

// Intersection Observer for scroll animations
function setupIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe game cards for animation
  document.querySelectorAll(".game-card").forEach((card) => {
    observer.observe(card);
  });

  // Observe feature cards
  document.querySelectorAll(".feature-card").forEach((card) => {
    card.classList.add("fade-in");
    observer.observe(card);
  });
}

// Navigation functionality
function setupNavigation() {
  const header = document.querySelector("header");
  let lastScrollTop = 0;

  // Header scroll behavior
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
  });

  // Mobile menu toggle (if needed in future)
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function () {
      const navMenu = document.querySelector(".nav-menu");
      navMenu.classList.toggle("active");
    });
  }
}

// Game play functionality
function playGame(gameId) {
  // Show loading state
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = "Loading...";
  button.disabled = true;

  // Map game IDs to folder names
  const gameFolders = {
    fnaf1: "fnaf1",
    fnaf2: "fnaf2",
    fnaf3: "fnaf3",
    fnaf4: "fnaf4",
    ucn: "fnaf-ucn",
    "fnaf-hack": "fnaf-hack",
  };

  const gameFolder = gameFolders[gameId];

  if (gameFolder) {
    // Show game in iframe modal
    setTimeout(() => {
      showGameIframe(gameId, gameFolder);

      // Reset button
      button.textContent = originalText;
      button.disabled = false;
    }, 500);
  } else {
    // Fallback to modal for unknown games
    setTimeout(() => {
      showGameModal(gameId);

      // Reset button
      button.textContent = originalText;
      button.disabled = false;
    }, 1000);
  }
}

// Game iframe functionality
function showGameIframe(gameId, gameFolder) {
  const gameData = getGameData(gameId);

  // Create modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "game-modal-overlay";
  modalOverlay.innerHTML = `
    <div class="game-modal-container">
      <div class="game-modal-header">
        <h2 class="game-modal-title">${gameData.title}</h2>
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
          src="games/${gameFolder}/index.html" 
          class="game-iframe"
          frameborder="0"
          allowfullscreen
          title="${gameData.title}">
        </iframe>
      </div>
    </div>
  `;

  document.body.appendChild(modalOverlay);
  document.body.style.overflow = "hidden";

  // Add escape key listener
  document.addEventListener("keydown", handleEscapeKey);
}

// Game modal functionality
function showGameModal(gameId) {
  const gameData = getGameData(gameId);

  // Create modal HTML
  const modalHTML = `
        <div class="game-modal-overlay" onclick="closeGameModal()">
            <div class="game-modal" onclick="event.stopPropagation()">
                <div class="game-modal-header">
                    <h3>${gameData.title}</h3>
                    <button class="close-modal" onclick="closeGameModal()" aria-label="Close game modal">&times;</button>
                </div>
                <div class="game-modal-content">
                    <div class="game-preview">
                        <div class="game-placeholder">
                            <h4>🎮 ${gameData.title}</h4>
                            <p>Game is loading...</p>
                            <div class="loading-spinner"></div>
                        </div>
                    </div>
                    <div class="game-info">
                        <h4>Game Features:</h4>
                        <ul>
                            ${gameData.features
                              .map((feature) => `<li>${feature}</li>`)
                              .join("")}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

  // Add modal to page
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  // Add modal styles
  addModalStyles();

  // Prevent body scroll
  document.body.style.overflow = "hidden";
}

// Close game modal
function closeGameModal() {
  const modal = document.querySelector(".game-modal-overlay");
  if (modal) {
    modal.remove();
    document.body.style.overflow = "";
    document.removeEventListener("keydown", handleEscapeKey);
  }
}

// Toggle fullscreen
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

// Handle escape key
function handleEscapeKey(event) {
  if (event.key === "Escape") {
    closeGameModal();
  }
}

// Get game data
function getGameData(gameId) {
  const games = {
    fnaf1: {
      title: "Five Nights at Freddy's",
      features: [
        "Monitor security cameras",
        "Conserve power to survive",
        "Face Freddy, Bonnie, Chica, and Foxy",
        "Classic survival horror gameplay",
      ],
    },
    fnaf2: {
      title: "Five Nights at Freddy's 2",
      features: [
        "New animatronic characters",
        "Freddy Fazbear head mechanic",
        "Music box for the Puppet",
        "More challenging gameplay",
      ],
    },
    fnaf3: {
      title: "Five Nights at Freddy's 3",
      features: [
        "Phantom animatronics",
        "Audio system mechanics",
        "Springtrap as main antagonist",
        "Atmospheric horror experience",
      ],
    },
    fnaf4: {
      title: "Five Nights at Freddy's 4",
      features: [
        "Audio-based gameplay",
        "Nightmare animatronics",
        "Child's bedroom setting",
        "Intense listening mechanics",
      ],
    },
    ucn: {
      title: "Ultimate Custom Night",
      features: [
        "50+ animatronic characters",
        "Custom difficulty settings",
        "Multiple office layouts",
        "Ultimate challenge mode",
      ],
    },
    "fnaf-hack": {
      title: "FNAF Hack Edition",
      features: [
        "Cheat codes and special abilities",
        "Custom animatronics",
        "Modified gameplay mechanics",
        "Debug mode and developer tools",
      ],
    },
  };

  return games[gameId] || games["fnaf1"];
}

// Add modal styles dynamically
function addModalStyles() {
  if (document.querySelector("#modal-styles")) return;

  const styles = `
        <style id="modal-styles">
        .game-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .game-modal {
            background: var(--card-bg);
            border-radius: 15px;
            max-width: 90vw;
            max-height: 90vh;
            width: 600px;
            overflow: hidden;
            animation: slideIn 0.3s ease;
        }
        
        .game-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 1.5rem;
            border-bottom: 2px solid var(--primary-red);
            background: var(--dark-bg);
        }
        
        .game-modal-header h3 {
            color: var(--accent-gold);
            margin: 0;
        }
        
        .close-modal {
            background: none;
            border: none;
            color: var(--text-light);
            font-size: 2rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .close-modal:hover {
            color: var(--secondary-red);
        }
        
        .game-modal-content {
            padding: 1.5rem;
            max-height: 70vh;
            overflow-y: auto;
        }
        
        .game-preview {
            margin-bottom: 1.5rem;
        }
        
        .game-placeholder {
            background: var(--dark-bg);
            border-radius: 10px;
            padding: 2rem;
            text-align: center;
            border: 2px dashed var(--primary-red);
        }
        
        .loading-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid var(--primary-red);
            border-top: 4px solid var(--accent-gold);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 1rem auto;
        }
        
        .game-info h4 {
            color: var(--accent-gold);
            margin-bottom: 1rem;
        }
        
        .game-info ul {
            list-style: none;
            padding: 0;
        }
        
        .game-info li {
            color: var(--text-light);
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
            position: relative;
        }
        
        .game-info li::before {
            content: '🎮';
            position: absolute;
            left: 0;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        </style>
    `;

  document.head.insertAdjacentHTML("beforeend", styles);
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Analytics tracking (placeholder for future implementation)
function trackEvent(eventName, eventData) {
  // Google Analytics 4 tracking
  if (typeof gtag !== "undefined") {
    gtag("event", eventName, eventData);
  }

  // Console log for development
  console.log("Event tracked:", eventName, eventData);
}

// Track game play events
function trackGamePlay(gameId) {
  trackEvent("game_play", {
    game_id: gameId,
    game_name: getGameData(gameId).title,
  });
}

// Update playGame function to include tracking
const originalPlayGame = playGame;
playGame = function (gameId) {
  trackGamePlay(gameId);
  originalPlayGame(gameId);
};

// Keyboard navigation support
document.addEventListener("keydown", function (e) {
  // Close modal with Escape key
  if (e.key === "Escape") {
    closeGameModal();
  }
});

// Service Worker registration for PWA (future implementation)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/sw.js")
      .then(function (registration) {
        console.log("ServiceWorker registration successful");
      })
      .catch(function (err) {
        console.log("ServiceWorker registration failed");
      });
  });
}
