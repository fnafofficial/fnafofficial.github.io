// FNAF Official Menu Management
// Handles navigation, mobile menu, and page routing

class MenuManager {
  constructor() {
    this.currentPage = this.getCurrentPage();
    this.mobileMenuOpen = false;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupMobileMenu();
    this.updateActiveMenuItem();
    this.setupSmoothScrolling();
  }

  // Get current page from URL
  getCurrentPage() {
    const path = window.location.pathname;
    if (path === "/" || path === "/index.html") return "home";
    if (path.startsWith("/pages/")) {
      return path.replace("/pages/", "").replace(".html", "");
    }
    return path.replace("/", "").replace(".html", "");
  }

  // Setup event listeners
  setupEventListeners() {
    // Mobile menu toggle
    const mobileToggle = document.querySelector(".mobile-menu-toggle");
    if (mobileToggle) {
      mobileToggle.addEventListener("click", () => this.toggleMobileMenu());
    }

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        this.mobileMenuOpen &&
        !e.target.closest(".nav-menu") &&
        !e.target.closest(".mobile-menu-toggle")
      ) {
        this.closeMobileMenu();
      }
    });

    // Close mobile menu on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.mobileMenuOpen) {
        this.closeMobileMenu();
      }
    });
  }

  // Setup mobile menu
  setupMobileMenu() {
    const navMenu = document.querySelector(".nav-menu");
    if (navMenu) {
      // Add mobile menu toggle button if it doesn't exist
      if (!document.querySelector(".mobile-menu-toggle")) {
        const header = document.querySelector("header .header-content");
        const toggleButton = document.createElement("button");
        toggleButton.className = "mobile-menu-toggle";
        toggleButton.innerHTML = "☰";
        toggleButton.setAttribute("aria-label", "Toggle mobile menu");
        header.appendChild(toggleButton);
      }

      // Add mobile menu styles
      this.addMobileMenuStyles();
    }
  }

  // Toggle mobile menu
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    const navMenu = document.querySelector(".nav-menu");
    const toggleButton = document.querySelector(".mobile-menu-toggle");

    if (this.mobileMenuOpen) {
      navMenu.classList.add("active");
      toggleButton.innerHTML = "✕";
      toggleButton.setAttribute("aria-expanded", "true");
    } else {
      navMenu.classList.remove("active");
      toggleButton.innerHTML = "☰";
      toggleButton.setAttribute("aria-expanded", "false");
    }
  }

  // Close mobile menu
  closeMobileMenu() {
    if (this.mobileMenuOpen) {
      this.mobileMenuOpen = false;
      const navMenu = document.querySelector(".nav-menu");
      const toggleButton = document.querySelector(".mobile-menu-toggle");

      navMenu.classList.remove("active");
      toggleButton.innerHTML = "☰";
      toggleButton.setAttribute("aria-expanded", "false");
    }
  }

  // Update active menu item based on current page
  updateActiveMenuItem() {
    const menuItems = document.querySelectorAll(".nav-menu a");
    menuItems.forEach((item) => {
      const href = item.getAttribute("href");
      const isActive = this.isActiveMenuItem(href);

      if (isActive) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  // Check if menu item should be active
  isActiveMenuItem(href) {
    if (href === "#games" && this.currentPage === "home") return true;
    if (href === "/pages/contact.html" && this.currentPage === "contact")
      return true;
    if (href === "/pages/blog.html" && this.currentPage === "blog") return true;
    if (href === "/pages/blog.html" && this.currentPage.startsWith("blog-"))
      return true;
    return false;
  }

  // Setup smooth scrolling for anchor links
  setupSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          const headerHeight = document.querySelector("header").offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  }

  // Add mobile menu styles
  addMobileMenuStyles() {
    if (document.querySelector("#mobile-menu-styles")) return;

    const styles = `
      <style id="mobile-menu-styles">
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-light);
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .mobile-menu-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .mobile-menu-toggle:focus {
          outline: 2px solid var(--accent-gold);
          outline-offset: 2px;
        }

        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block;
          }

          .nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--dark-bg);
            border-top: 2px solid var(--primary-red);
            flex-direction: column;
            padding: 1rem;
            transform: translateY(-100%);
            transition: transform 0.3s ease;
            z-index: 999;
          }

          .nav-menu.active {
            transform: translateY(0);
          }

          .nav-menu li {
            margin: 0.5rem 0;
          }

          .nav-menu a {
            display: block;
            padding: 0.75rem 1rem;
            border-radius: 8px;
            transition: all 0.3s ease;
          }

          .nav-menu a:hover,
          .nav-menu a.active {
            background: var(--primary-red);
            color: var(--accent-gold);
          }
        }
      </style>
    `;

    document.head.insertAdjacentHTML("beforeend", styles);
  }

  // Navigate to page
  navigateToPage(page) {
    if (page === "home") {
      window.location.href = "/";
    } else {
      window.location.href = `/pages/${page}.html`;
    }
  }

  // Get menu configuration
  getMenuConfig() {
    return {
      home: {
        title: "Home",
        href: "/",
        icon: "🏠",
      },
      games: {
        title: "Games",
        href: "/pages/games.html",
        icon: "🎮",
      },
      blog: {
        title: "Blog",
        href: "/pages/blog.html",
        icon: "📝",
      },
      contact: {
        title: "Contact",
        href: "/pages/contact.html",
        icon: "📞",
      },
    };
  }

  // Generate menu HTML
  generateMenuHTML() {
    const config = this.getMenuConfig();
    const menuItems = Object.values(config);

    return menuItems
      .map(
        (item) => `
      <li>
        <a href="${
          item.href
        }" class="menu-item" data-page="${item.title.toLowerCase()}">
          <span class="menu-icon">${item.icon}</span>
          <span class="menu-text">${item.title}</span>
        </a>
      </li>
    `
      )
      .join("");
  }
}

// Initialize menu when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  window.menuManager = new MenuManager();
});

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = MenuManager;
}
