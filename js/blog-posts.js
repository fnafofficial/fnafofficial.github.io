// ========================================
// BLOG POSTS MANAGEMENT SYSTEM
// ========================================

/*
🎯 CÁCH THÊM BLOG POST MỚI:

1. Thêm post vào BLOG_POSTS array bên dưới
2. Tạo file HTML trong blog/ folder
3. Sử dụng template.html làm base và thay thế các {{VARIABLES}}

VÍ DỤ THÊM BLOG POST MỚI:
{
  id: "new-post",
  title: "New Post Title",
  slug: "new-post-title",
  description: "Post description for SEO",
  keywords: "fnaf, horror, games",
  category: "Game Reviews",
  tags: ["FNAF", "Horror", "Review"],
  publishDate: "2025-01-15",
  modifiedDate: "2025-01-15",
  featuredImage: "../assets/blog/new-post-featured.jpg",
  content: "Post content here...",
  canonicalUrl: "https://fnafofficial.com/blog-posts/new-post.html"
}
*/

const BLOG_POSTS = [
  {
    id: "fnaf-1-night-1",
    title: "FNAF 1 Guide – Complete Night 1 Walkthrough & Strategies",
    slug: "fnaf-1-night-1",
    description:
      "Learn how to survive Night 1 in FNAF 1 with simple strategies, power management tips, and animatronic behavior explained. Master Five Nights at Freddy's 1 and prepare for the horrors ahead.",
    keywords:
      "FNAF 1, Five Nights at Freddy's 1, Night 1 FNAF, FNAF 1 guide, FNAF 1 tips, FNAF 1 walkthrough, FNAF 1 strategy, FNAF 1 animatronics, FNAF 1 survival",
    category: "Game Guides",
    tags: ["FNAF 1", "Night 1", "Strategy", "Survival Guide", "Tips"],
    publishDate: "2025-10-22",
    modifiedDate: "2025-10-22",
    featuredImage: "/blog/fnaf-1-night-1/FNaF1-Night1Screen.webp",
    content:
      "Night 1 in FNAF 1 is your introduction to the horror that awaits. While it's the easiest night, it's crucial to learn the basic mechanics and animatronic behavior patterns.",
    canonicalUrl: "https://fnafofficial.com/blog/fnaf-1-night-1.html",
  },

  {
    id: "fnaf-1-night-2",
    title: "FNAF 1 Night 2 Guide – Complete Walkthrough & Survival Strategies",
    slug: "fnaf-1-night-2",
    description:
      "Master Night 2 FNAF 1 with expert strategies, Foxy management tips, and power conservation techniques. Learn how to survive the second night at Freddy Fazbear's Pizza.",
    keywords:
      "FNAF 1 Night 2, Five Nights at Freddy's 1 Night 2, FNAF 1 Night 2 strategy, FNAF 1 Night 2 guide, FNAF 1 Night 2 tips, Foxy FNAF 1, FNAF 1 survival guide, FNAF 1 walkthrough",
    category: "Game Guides",
    tags: ["FNAF 1", "Night 2", "Foxy", "Strategy", "Power Management"],
    publishDate: "2025-10-22",
    modifiedDate: "2025-10-22",
    featuredImage: "/blog/fnaf-1-night-2/Golden_Freddy_Death.webp",
    content:
      "Night 2 FNaF 1 marks the real beginning of tension in Five Nights at Freddy's. The animatronics become faster, Foxy finally joins the game, and power management starts to matter more than ever.",
    canonicalUrl: "https://fnafofficial.com/blog/fnaf-1-night-2.html",
  },

  {
    id: "fnaf-1-night-3",
    title: "FNAF 1 Night 3 Guide – Freddy Joins the Hunt & Survival Strategies",
    slug: "fnaf-1-night-3",
    description:
      "Master Night 3 FNAF 1 with expert strategies for Freddy Fazbear, power management, and four active animatronics. Learn how to survive the most challenging night yet.",
    keywords:
      "FNAF 1 Night 3, Five Nights at Freddy's 1 Night 3, FNAF 1 Night 3 strategy, FNAF 1 Night 3 guide, Freddy Fazbear Night 3, FNAF 1 Night 3 tips, FNAF 1 survival guide, FNAF 1 walkthrough",
    category: "Game Guides",
    tags: [
      "FNAF 1",
      "Night 3",
      "Freddy Fazbear",
      "Strategy",
      "Power Management",
    ],
    publishDate: "2025-10-22",
    modifiedDate: "2025-10-22",
    featuredImage: "/blog/fnaf-1-night-3/590.webp",
    content:
      "Night 3 FNaF 1 marks a major difficulty spike in Five Nights at Freddy's. This is the night Freddy Fazbear himself becomes active — and once he starts moving, the tension skyrockets.",
    canonicalUrl: "https://fnafofficial.com/blog/fnaf-1-night-3.html",
  },
];

// ========================================
// BLOG POSTS UTILITY FUNCTIONS
// ========================================

/**
 * Get all blog posts
 * @returns {Array} Array of blog posts
 */
function getAllBlogPosts() {
  return BLOG_POSTS;
}

/**
 * Get blog post by ID
 * @param {string} id - Post ID
 * @returns {Object|null} Blog post object or null if not found
 */
function getBlogPostById(id) {
  return BLOG_POSTS.find((post) => post.id === id) || null;
}

/**
 * Get blog posts by category
 * @param {string} category - Category name
 * @returns {Array} Array of blog posts in category
 */
function getBlogPostsByCategory(category) {
  return BLOG_POSTS.filter((post) => post.category === category);
}

/**
 * Get blog posts by tag
 * @param {string} tag - Tag name
 * @returns {Array} Array of blog posts with tag
 */
function getBlogPostsByTag(tag) {
  return BLOG_POSTS.filter((post) => post.tags.includes(tag));
}

/**
 * Search blog posts by title, description, or content
 * @param {string} query - Search query
 * @returns {Array} Array of matching blog posts
 */
function searchBlogPosts(query) {
  const lowercaseQuery = query.toLowerCase();
  return BLOG_POSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.description.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}

/**
 * Get related posts based on tags
 * @param {string} currentPostId - Current post ID
 * @param {number} limit - Maximum number of related posts
 * @returns {Array} Array of related posts
 */
function getRelatedPosts(currentPostId, limit = 3) {
  const currentPost = getBlogPostById(currentPostId);
  if (!currentPost) return [];

  const relatedPosts = BLOG_POSTS.filter((post) => post.id !== currentPostId)
    .filter((post) => post.tags.some((tag) => currentPost.tags.includes(tag)))
    .sort((a, b) => {
      const aCommonTags = a.tags.filter((tag) =>
        currentPost.tags.includes(tag)
      ).length;
      const bCommonTags = b.tags.filter((tag) =>
        currentPost.tags.includes(tag)
      ).length;
      return bCommonTags - aCommonTags;
    })
    .slice(0, limit);

  return relatedPosts;
}

/**
 * Get all unique categories
 * @returns {Array} Array of unique categories
 */
function getAllCategories() {
  return [...new Set(BLOG_POSTS.map((post) => post.category))];
}

/**
 * Get all unique tags
 * @returns {Array} Array of unique tags
 */
function getAllTags() {
  const allTags = BLOG_POSTS.flatMap((post) => post.tags);
  return [...new Set(allTags)];
}

/**
 * Get recent posts
 * @param {number} limit - Maximum number of recent posts
 * @returns {Array} Array of recent posts
 */
function getRecentPosts(limit = 5) {
  return BLOG_POSTS.sort(
    (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
  ).slice(0, limit);
}

// ========================================
// BLOG POSTS DISPLAY FUNCTIONS
// ========================================

/**
 * Create blog post card HTML
 * @param {Object} post - Blog post object
 * @returns {string} HTML string for blog post card
 */
function createBlogPostCard(post) {
  return `
    <article class="blog-post-card" data-category="${
      post.category
    }" data-tags="${post.tags.join(",")}">
      <div class="blog-post-image">
        <img src="${post.featuredImage}" alt="${post.title}" loading="lazy" />
        <div class="blog-post-category">${post.category}</div>
      </div>
      <div class="blog-post-content">
        <h3 class="blog-post-title">
          <a href="/blog/${post.slug}.html">${post.title}</a>
        </h3>
        <p class="blog-post-description">${post.description}</p>
        <div class="blog-post-meta">
          <time datetime="${post.publishDate}">${new Date(
    post.publishDate
  ).toLocaleDateString()}</time>
          <div class="blog-post-tags">
            ${post.tags
              .map((tag) => `<span class="tag">${tag}</span>`)
              .join("")}
          </div>
        </div>
        <a href="/blog/${post.slug}.html" class="read-more-link">Read More</a>
      </div>
    </article>
  `;
}

/**
 * Load blog posts into grid
 * @param {Array} posts - Array of blog posts
 * @param {string} containerId - Container element ID
 */
function loadBlogPosts(posts, containerId = "blog-posts-grid") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = posts.map((post) => createBlogPostCard(post)).join("");
}

/**
 * Load related posts
 * @param {string} currentPostId - Current post ID
 * @param {string} containerId - Container element ID
 */
function loadRelatedPosts(currentPostId, containerId = "related-posts") {
  const relatedPosts = getRelatedPosts(currentPostId);
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = relatedPosts
    .map((post) => createBlogPostCard(post))
    .join("");
}

// ========================================
// BLOG POSTS FILTER FUNCTIONS
// ========================================

/**
 * Filter blog posts by category
 * @param {string} category - Category to filter by
 * @param {string} containerId - Container element ID
 */
function filterPostsByCategory(category, containerId = "blog-posts-grid") {
  const posts =
    category === "all" ? getAllBlogPosts() : getBlogPostsByCategory(category);
  loadBlogPosts(posts, containerId);
}

/**
 * Filter blog posts by search query
 * @param {string} query - Search query
 * @param {string} containerId - Container element ID
 */
function filterPostsBySearch(query, containerId = "blog-posts-grid") {
  const posts = query ? searchBlogPosts(query) : getAllBlogPosts();
  loadBlogPosts(posts, containerId);
}

// ========================================
// BLOG POSTS INITIALIZATION
// ========================================

/**
 * Initialize blog posts functionality
 */
function initializeBlogPosts() {
  // Load all posts by default
  loadBlogPosts(getAllBlogPosts());

  // Setup category filters
  const categoryButtons = document.querySelectorAll(".category-btn");
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");
      // Filter posts
      const category = button.dataset.category;
      filterPostsByCategory(category);
    });
  });

  // Setup search functionality
  const searchInput = document.getElementById("blog-search-input");
  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        filterPostsBySearch(e.target.value);
      }, 300);
    });
  }
}

// ========================================
// EXPORT FUNCTIONS (if using modules)
// ========================================

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getAllBlogPosts,
    getBlogPostById,
    getBlogPostsByCategory,
    getBlogPostsByTag,
    searchBlogPosts,
    getRelatedPosts,
    getAllCategories,
    getAllTags,
    getRecentPosts,
    createBlogPostCard,
    loadBlogPosts,
    loadRelatedPosts,
    filterPostsByCategory,
    filterPostsBySearch,
    initializeBlogPosts,
  };
}
