// FNAF Official Blog JavaScript
// Handles blog filtering, pagination, and post interactions

class BlogManager {
  constructor() {
    this.currentCategory = "all";
    this.postsPerPage = 6;
    this.currentPage = 1;
    this.allPosts = [];
    this.filteredPosts = [];
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initializePosts();
    this.setupCategoryFiltering();
    this.setupLoadMore();
  }

  // Setup event listeners
  setupEventListeners() {
    // Category buttons
    const categoryBtns = document.querySelectorAll(".category-btn");
    categoryBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.filterByCategory(e.target.dataset.category);
      });
    });

    // Load more button
    const loadMoreBtn = document.querySelector(".load-more-btn");
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", () => this.loadMorePosts());
    }

    // Search functionality (if implemented)
    const searchInput = document.querySelector(".blog-search");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchPosts(e.target.value);
      });
    }
  }

  // Initialize posts from DOM
  initializePosts() {
    const postElements = document.querySelectorAll(".blog-post");
    this.allPosts = Array.from(postElements).map((post, index) => ({
      element: post,
      category: post.dataset.category,
      title: post.querySelector(".post-title").textContent,
      excerpt: post.querySelector(".post-excerpt").textContent,
      date: post.querySelector(".post-date").textContent,
      visible: true,
    }));

    this.filteredPosts = [...this.allPosts];
  }

  // Setup category filtering
  setupCategoryFiltering() {
    // Check URL parameters for category
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get("category");

    if (categoryParam && categoryParam !== "all") {
      this.filterByCategory(categoryParam);
    }
  }

  // Filter posts by category
  filterByCategory(category) {
    this.currentCategory = category;
    this.currentPage = 1;

    // Update active category button
    document.querySelectorAll(".category-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    document
      .querySelector(`[data-category="${category}"]`)
      .classList.add("active");

    // Filter posts
    this.filteredPosts = this.allPosts.filter((post) => {
      if (category === "all") {
        return true;
      }
      return post.category === category;
    });

    // Show/hide posts
    this.allPosts.forEach((post) => {
      const isVisible = this.filteredPosts.includes(post);
      post.element.style.display = isVisible ? "block" : "none";
      post.visible = isVisible;
    });

    // Update URL without page reload
    const url = new URL(window.location);
    if (category === "all") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", category);
    }
    window.history.pushState({}, "", url);

    // Show/hide load more button
    this.updateLoadMoreButton();
  }

  // Search posts
  searchPosts(query) {
    const searchTerm = query.toLowerCase();

    this.filteredPosts = this.allPosts.filter((post) => {
      const matchesTitle = post.title.toLowerCase().includes(searchTerm);
      const matchesExcerpt = post.excerpt.toLowerCase().includes(searchTerm);
      return matchesTitle || matchesExcerpt;
    });

    // Show/hide posts
    this.allPosts.forEach((post) => {
      const isVisible = this.filteredPosts.includes(post);
      post.element.style.display = isVisible ? "block" : "none";
      post.visible = isVisible;
    });

    this.updateLoadMoreButton();
  }

  // Load more posts
  loadMorePosts() {
    const visiblePosts = this.filteredPosts.filter((post) => post.visible);
    const startIndex = this.currentPage * this.postsPerPage;
    const endIndex = startIndex + this.postsPerPage;

    const postsToShow = visiblePosts.slice(0, endIndex);

    // Show posts
    postsToShow.forEach((post) => {
      post.element.style.display = "block";
      post.visible = true;
    });

    this.currentPage++;

    // Hide load more button if all posts are shown
    this.updateLoadMoreButton();
  }

  // Update load more button visibility
  updateLoadMoreButton() {
    const loadMoreBtn = document.querySelector(".load-more-btn");
    if (!loadMoreBtn) return;

    const visiblePosts = this.filteredPosts.filter((post) => post.visible);
    const totalPosts = this.filteredPosts.length;

    if (visiblePosts.length >= totalPosts) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "inline-block";
    }
  }

  // Setup load more functionality
  setupLoadMore() {
    // Initially hide posts beyond the first page
    const allPostElements = document.querySelectorAll(".blog-post");
    allPostElements.forEach((post, index) => {
      if (index >= this.postsPerPage) {
        post.style.display = "none";
      }
    });

    this.updateLoadMoreButton();
  }

  // Get blog post data
  getBlogPostData(postId) {
    const posts = {
      "welcome-to-fnaf-official": {
        title:
          "Welcome to FNAF Official - The Ultimate Horror Gaming Experience",
        category: "news",
        date: "October 15, 2025",
        author: "FNAF Official Team",
        content: `
          <p>Welcome to FNAF Official, your ultimate destination for Five Nights at Freddy's games and content. We're thrilled to bring you the complete collection of FNAF games, all playable online for free.</p>
          
          <h3>What Makes Us Different?</h3>
          <p>Unlike other gaming sites, FNAF Official is dedicated exclusively to the Five Nights at Freddy's franchise. We understand the horror, the tension, and the excitement that makes these games so compelling.</p>
          
          <h3>Complete Game Collection</h3>
          <p>From the original Five Nights at Freddy's to the latest Ultimate Custom Night, we have every game in the series. Each game is optimized for web play with smooth performance and authentic gameplay.</p>
          
          <h3>Regular Updates</h3>
          <p>We're constantly updating our platform with new features, game improvements, and fresh content. Stay tuned for exciting updates and new additions to our game collection.</p>
        `,
      },
      "ultimate-fnaf-survival-guide": {
        title: "Ultimate FNAF Survival Guide: Tips to Survive the Night",
        category: "guides",
        date: "October 12, 2025",
        author: "FNAF Expert",
        content: `
          <p>Surviving in Five Nights at Freddy's requires strategy, quick reflexes, and nerves of steel. Here's your comprehensive guide to making it through the night.</p>
          
          <h3>Power Management</h3>
          <p>The most crucial aspect of FNAF gameplay is power management. Every action consumes power, and when it runs out, you're defenseless. Here are key strategies:</p>
          <ul>
            <li>Close doors only when necessary</li>
            <li>Use cameras sparingly</li>
            <li>Monitor power levels constantly</li>
            <li>Plan your actions ahead</li>
          </ul>
          
          <h3>Camera Usage</h3>
          <p>Cameras are your eyes into the pizzeria. Use them strategically:</p>
          <ul>
            <li>Check high-traffic areas frequently</li>
            <li>Look for movement patterns</li>
            <li>Don't waste time on empty rooms</li>
            <li>Use audio cues to guide your camera usage</li>
          </ul>
          
          <h3>Animatronic Behavior</h3>
          <p>Each animatronic has unique behavior patterns. Understanding these is key to survival:</p>
          <ul>
            <li><strong>Freddy:</strong> Moves slowly but is persistent</li>
            <li><strong>Bonnie:</strong> Fast and unpredictable</li>
            <li><strong>Chica:</strong> Often found in the kitchen</li>
            <li><strong>Foxy:</strong> Runs when not watched</li>
          </ul>
        `,
      },
    };

    return posts[postId] || null;
  }

  // Track blog interactions
  trackBlogInteraction(action, data) {
    // Analytics tracking
    if (typeof gtag !== "undefined") {
      gtag("event", "blog_interaction", {
        action: action,
        category: data.category,
        post_title: data.title,
      });
    }

    console.log("Blog interaction tracked:", action, data);
  }

  // Share blog post
  sharePost(postTitle, postUrl) {
    if (navigator.share) {
      navigator.share({
        title: postTitle,
        url: postUrl,
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(postUrl).then(() => {
        alert("Post URL copied to clipboard!");
      });
    }
  }
}

// Initialize blog manager when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  window.blogManager = new BlogManager();
});

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = BlogManager;
}
