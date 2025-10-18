// FNAF Official Cookie Management JavaScript
// Handles cookie consent, preferences, and compliance

class CookieManager {
  constructor() {
    this.cookieConsent = null;
    this.cookiePreferences = {
      essential: true, // Always required
      performance: false,
      functionality: false,
      analytics: false,
    };
    this.init();
  }

  init() {
    this.loadCookieConsent();
    this.setupEventListeners();
    this.checkCookieCompliance();
  }

  // Setup event listeners
  setupEventListeners() {
    // Cookie settings button
    const cookieSettingsBtn = document.getElementById("cookieSettings");
    if (cookieSettingsBtn) {
      cookieSettingsBtn.addEventListener("click", () =>
        this.showCookieSettings()
      );
    }

    // Accept all button
    const acceptAllBtn = document.getElementById("acceptAll");
    if (acceptAllBtn) {
      acceptAllBtn.addEventListener("click", () => this.acceptAllCookies());
    }

    // Reject all button
    const rejectAllBtn = document.getElementById("rejectAll");
    if (rejectAllBtn) {
      rejectAllBtn.addEventListener("click", () => this.rejectAllCookies());
    }
  }

  // Load cookie consent from localStorage
  loadCookieConsent() {
    const savedConsent = localStorage.getItem("fnaf-cookie-consent");
    if (savedConsent) {
      this.cookieConsent = JSON.parse(savedConsent);
      this.applyCookiePreferences();
    } else {
      this.showCookieBanner();
    }
  }

  // Show cookie banner
  showCookieBanner() {
    // Create cookie banner if it doesn't exist
    if (!document.querySelector(".cookie-banner")) {
      const banner = this.createCookieBanner();
      document.body.appendChild(banner);
    }
  }

  // Create cookie banner
  createCookieBanner() {
    const banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.innerHTML = `
      <div class="cookie-banner-content">
        <div class="cookie-banner-text">
          <h3>🍪 We Use Cookies</h3>
          <p>We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.</p>
        </div>
        <div class="cookie-banner-actions">
          <button class="cookie-btn cookie-settings-btn">Cookie Settings</button>
          <button class="cookie-btn cookie-accept-btn">Accept All</button>
          <button class="cookie-btn cookie-reject-btn">Reject All</button>
        </div>
      </div>
    `;

    // Add banner styles
    this.addCookieBannerStyles();

    // Add event listeners
    banner
      .querySelector(".cookie-settings-btn")
      .addEventListener("click", () => this.showCookieSettings());
    banner
      .querySelector(".cookie-accept-btn")
      .addEventListener("click", () => this.acceptAllCookies());
    banner
      .querySelector(".cookie-reject-btn")
      .addEventListener("click", () => this.rejectAllCookies());

    return banner;
  }

  // Add cookie banner styles
  addCookieBannerStyles() {
    if (document.querySelector("#cookie-banner-styles")) return;

    const styles = `
      <style id="cookie-banner-styles">
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--card-bg);
          border-top: 2px solid var(--primary-red);
          padding: 1.5rem;
          z-index: 10000;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.5);
          animation: slideUp 0.3s ease;
        }

        .cookie-banner-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }

        .cookie-banner-text h3 {
          color: var(--accent-gold);
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }

        .cookie-banner-text p {
          color: var(--text-light);
          margin: 0;
          line-height: 1.5;
        }

        .cookie-banner-actions {
          display: flex;
          gap: 1rem;
          flex-shrink: 0;
        }

        .cookie-btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 25px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .cookie-settings-btn {
          background: var(--card-bg);
          color: var(--text-light);
          border: 2px solid var(--primary-red);
        }

        .cookie-settings-btn:hover {
          background: var(--primary-red);
          color: var(--accent-gold);
        }

        .cookie-accept-btn {
          background: var(--accent-gold);
          color: var(--dark-bg);
        }

        .cookie-accept-btn:hover {
          background: #ffed4e;
          transform: translateY(-2px);
        }

        .cookie-reject-btn {
          background: var(--text-gray);
          color: var(--dark-bg);
        }

        .cookie-reject-btn:hover {
          background: #b3b3b3;
          transform: translateY(-2px);
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .cookie-banner-content {
            flex-direction: column;
            text-align: center;
          }

          .cookie-banner-actions {
            flex-direction: column;
            width: 100%;
          }

          .cookie-btn {
            width: 100%;
          }
        }
      </style>
    `;

    document.head.insertAdjacentHTML("beforeend", styles);
  }

  // Show cookie settings modal
  showCookieSettings() {
    // Remove existing modal
    const existingModal = document.querySelector(".cookie-settings-modal");
    if (existingModal) {
      existingModal.remove();
    }

    const modal = this.createCookieSettingsModal();
    document.body.appendChild(modal);
    this.hideCookieBanner();
  }

  // Create cookie settings modal
  createCookieSettingsModal() {
    const modal = document.createElement("div");
    modal.className = "cookie-settings-modal";
    modal.innerHTML = `
      <div class="cookie-modal-overlay">
        <div class="cookie-modal">
          <div class="cookie-modal-header">
            <h3>Cookie Settings</h3>
            <button class="cookie-modal-close">&times;</button>
          </div>
          <div class="cookie-modal-content">
            <p>Choose which cookies you want to allow. You can change these settings at any time.</p>
            
            <div class="cookie-category">
              <div class="cookie-category-header">
                <h4>Essential Cookies</h4>
                <label class="cookie-toggle">
                  <input type="checkbox" checked disabled>
                  <span class="cookie-toggle-slider"></span>
                </label>
              </div>
              <p>These cookies are necessary for the website to function and cannot be switched off.</p>
            </div>

            <div class="cookie-category">
              <div class="cookie-category-header">
                <h4>Performance Cookies</h4>
                <label class="cookie-toggle">
                  <input type="checkbox" id="performance-cookies" ${
                    this.cookiePreferences.performance ? "checked" : ""
                  }>
                  <span class="cookie-toggle-slider"></span>
                </label>
              </div>
              <p>These cookies help us understand how visitors interact with our website.</p>
            </div>

            <div class="cookie-category">
              <div class="cookie-category-header">
                <h4>Functionality Cookies</h4>
                <label class="cookie-toggle">
                  <input type="checkbox" id="functionality-cookies" ${
                    this.cookiePreferences.functionality ? "checked" : ""
                  }>
                  <span class="cookie-toggle-slider"></span>
                </label>
              </div>
              <p>These cookies enable enhanced functionality and personalization.</p>
            </div>

            <div class="cookie-category">
              <div class="cookie-category-header">
                <h4>Analytics Cookies</h4>
                <label class="cookie-toggle">
                  <input type="checkbox" id="analytics-cookies" ${
                    this.cookiePreferences.analytics ? "checked" : ""
                  }>
                  <span class="cookie-toggle-slider"></span>
                </label>
              </div>
              <p>These cookies help us analyze website traffic and user behavior.</p>
            </div>

            <div class="cookie-modal-actions">
              <button class="cookie-btn cookie-save-btn">Save Preferences</button>
              <button class="cookie-btn cookie-accept-all-btn">Accept All</button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Add modal styles
    this.addCookieModalStyles();

    // Add event listeners
    modal
      .querySelector(".cookie-modal-close")
      .addEventListener("click", () => this.hideCookieSettings());
    modal
      .querySelector(".cookie-modal-overlay")
      .addEventListener("click", (e) => {
        if (e.target === e.currentTarget) this.hideCookieSettings();
      });
    modal
      .querySelector(".cookie-save-btn")
      .addEventListener("click", () => this.saveCookiePreferences());
    modal
      .querySelector(".cookie-accept-all-btn")
      .addEventListener("click", () => this.acceptAllCookies());

    return modal;
  }

  // Add cookie modal styles
  addCookieModalStyles() {
    if (document.querySelector("#cookie-modal-styles")) return;

    const styles = `
      <style id="cookie-modal-styles">
        .cookie-settings-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 10001;
        }

        .cookie-modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }

        .cookie-modal {
          background: var(--card-bg);
          border-radius: 15px;
          max-width: 600px;
          width: 100%;
          max-height: 80vh;
          overflow-y: auto;
          animation: modalSlideIn 0.3s ease;
        }

        .cookie-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 2px solid var(--primary-red);
        }

        .cookie-modal-header h3 {
          color: var(--accent-gold);
          margin: 0;
        }

        .cookie-modal-close {
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

        .cookie-modal-close:hover {
          color: var(--secondary-red);
        }

        .cookie-modal-content {
          padding: 1.5rem;
        }

        .cookie-category {
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .cookie-category-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .cookie-category-header h4 {
          color: var(--accent-gold);
          margin: 0;
        }

        .cookie-toggle {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 24px;
        }

        .cookie-toggle input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .cookie-toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--text-gray);
          transition: 0.3s;
          border-radius: 24px;
        }

        .cookie-toggle-slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.3s;
          border-radius: 50%;
        }

        .cookie-toggle input:checked + .cookie-toggle-slider {
          background-color: var(--accent-gold);
        }

        .cookie-toggle input:checked + .cookie-toggle-slider:before {
          transform: translateX(26px);
        }

        .cookie-category p {
          color: var(--text-gray);
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .cookie-modal-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .cookie-save-btn {
          background: var(--primary-red);
          color: var(--text-light);
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cookie-save-btn:hover {
          background: var(--secondary-red);
          transform: translateY(-2px);
        }

        .cookie-accept-all-btn {
          background: var(--accent-gold);
          color: var(--dark-bg);
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cookie-accept-all-btn:hover {
          background: #ffed4e;
          transform: translateY(-2px);
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .cookie-modal {
            margin: 1rem;
            max-height: 90vh;
          }

          .cookie-modal-actions {
            flex-direction: column;
          }

          .cookie-btn {
            width: 100%;
          }
        }
      </style>
    `;

    document.head.insertAdjacentHTML("beforeend", styles);
  }

  // Accept all cookies
  acceptAllCookies() {
    this.cookiePreferences = {
      essential: true,
      performance: true,
      functionality: true,
      analytics: true,
    };

    this.saveCookieConsent();
    this.applyCookiePreferences();
    this.hideCookieBanner();
    this.hideCookieSettings();
  }

  // Reject all cookies
  rejectAllCookies() {
    this.cookiePreferences = {
      essential: true,
      performance: false,
      functionality: false,
      analytics: false,
    };

    this.saveCookieConsent();
    this.applyCookiePreferences();
    this.hideCookieBanner();
    this.hideCookieSettings();
  }

  // Save cookie preferences
  saveCookiePreferences() {
    const performanceCheckbox = document.getElementById("performance-cookies");
    const functionalityCheckbox = document.getElementById(
      "functionality-cookies"
    );
    const analyticsCheckbox = document.getElementById("analytics-cookies");

    this.cookiePreferences = {
      essential: true,
      performance: performanceCheckbox ? performanceCheckbox.checked : false,
      functionality: functionalityCheckbox
        ? functionalityCheckbox.checked
        : false,
      analytics: analyticsCheckbox ? analyticsCheckbox.checked : false,
    };

    this.saveCookieConsent();
    this.applyCookiePreferences();
    this.hideCookieSettings();
  }

  // Save cookie consent
  saveCookieConsent() {
    const consent = {
      preferences: this.cookiePreferences,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem("fnaf-cookie-consent", JSON.stringify(consent));
    this.cookieConsent = consent;
  }

  // Apply cookie preferences
  applyCookiePreferences() {
    // Enable/disable Google Analytics based on analytics preference
    if (this.cookiePreferences.analytics) {
      this.enableAnalytics();
    } else {
      this.disableAnalytics();
    }

    // Enable/disable performance tracking
    if (this.cookiePreferences.performance) {
      this.enablePerformanceTracking();
    } else {
      this.disablePerformanceTracking();
    }

    // Enable/disable functionality cookies
    if (this.cookiePreferences.functionality) {
      this.enableFunctionalityCookies();
    } else {
      this.disableFunctionalityCookies();
    }
  }

  // Enable analytics
  enableAnalytics() {
    // Enable Google Analytics or other analytics tools
    console.log("Analytics enabled");
  }

  // Disable analytics
  disableAnalytics() {
    // Disable Google Analytics or other analytics tools
    console.log("Analytics disabled");
  }

  // Enable performance tracking
  enablePerformanceTracking() {
    console.log("Performance tracking enabled");
  }

  // Disable performance tracking
  disablePerformanceTracking() {
    console.log("Performance tracking disabled");
  }

  // Enable functionality cookies
  enableFunctionalityCookies() {
    console.log("Functionality cookies enabled");
  }

  // Disable functionality cookies
  disableFunctionalityCookies() {
    console.log("Functionality cookies disabled");
  }

  // Hide cookie banner
  hideCookieBanner() {
    const banner = document.querySelector(".cookie-banner");
    if (banner) {
      banner.remove();
    }
  }

  // Hide cookie settings
  hideCookieSettings() {
    const modal = document.querySelector(".cookie-settings-modal");
    if (modal) {
      modal.remove();
    }
  }

  // Check cookie compliance
  checkCookieCompliance() {
    // Check if we need to show cookie banner based on compliance requirements
    const lastShown = localStorage.getItem("fnaf-cookie-banner-last-shown");
    const now = new Date().getTime();
    const oneMonth = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

    if (!lastShown || now - parseInt(lastShown) > oneMonth) {
      // Show banner if it's been more than a month or never shown
      this.showCookieBanner();
      localStorage.setItem("fnaf-cookie-banner-last-shown", now.toString());
    }
  }

  // Get cookie preferences
  getCookiePreferences() {
    return this.cookiePreferences;
  }

  // Check if specific cookie type is allowed
  isCookieAllowed(type) {
    return this.cookiePreferences[type] || false;
  }
}

// Initialize cookie manager when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  window.cookieManager = new CookieManager();
});

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = CookieManager;
}
