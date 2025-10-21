// ========================================
// BLOG POSTS MANAGEMENT SYSTEM
// ========================================

/*
🎯 CÁCH THÊM BLOG POST MỚI:

1. Thêm post vào BLOG_POSTS array bên dưới
2. Tạo file HTML trong blog-posts/ folder
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
    id: "fnaf-1-complete-guide",
    title: "Five Nights at Freddy's 1: Complete Survival Guide",
    slug: "fnaf-1-complete-guide",
    description:
      "Master FNAF 1 with our comprehensive survival guide. Learn all strategies, tips, and tricks to survive all 5 nights at Freddy Fazbear's Pizza.",
    keywords:
      "fnaf 1, five nights at freddy's, survival guide, freddy fazbear, animatronic, horror game, tips, strategies",
    category: "Game Guides",
    tags: ["FNAF 1", "Survival Guide", "Tips", "Strategy", "Horror"],
    publishDate: "2025-01-15",
    modifiedDate: "2025-01-15",
    featuredImage: "../assets/blog/fnaf1-guide-featured.jpg",
    content: `
      <h2>Introduction to FNAF 1</h2>
      <p>Five Nights at Freddy's 1 is the game that started it all. As a night security guard at Freddy Fazbear's Pizza, you must survive 5 nights against animatronic characters that come to life after midnight.</p>
      
      <h2>Basic Mechanics</h2>
      <p>The game is simple in concept but challenging in execution:</p>
      <ul>
        <li><strong>Power Management:</strong> You have limited power each night</li>
        <li><strong>Camera System:</strong> Monitor animatronics through security cameras</li>
        <li><strong>Door Controls:</strong> Close doors to protect yourself</li>
        <li><strong>Light System:</strong> Use lights to check for animatronics</li>
      </ul>
      
      <h2>Animatronic Behavior</h2>
      <h3>Freddy Fazbear</h3>
      <p>Freddy is the main antagonist. He moves slowly but is deadly if he reaches your office.</p>
      
      <h3>Bonnie the Bunny</h3>
      <p>Bonnie moves quickly and can appear at your left door. Keep an eye on the left side.</p>
      
      <h3>Chica the Chicken</h3>
      <p>Chica is similar to Bonnie but appears at your right door. Monitor the right side carefully.</p>
      
      <h3>Foxy the Pirate Fox</h3>
      <p>Foxy is unique - he runs down the hallway when not monitored. Check on him regularly.</p>
      
      <h2>Survival Strategies</h2>
      <h3>Night 1-2: Learning Phase</h3>
      <p>Use these nights to learn animatronic patterns and camera locations.</p>
      
      <h3>Night 3-4: Intermediate</h3>
      <p>Animatronics become more aggressive. Focus on power conservation.</p>
      
      <h3>Night 5: Expert</h3>
      <p>The ultimate challenge. Every move counts.</p>
      
      <h2>Power Management Tips</h2>
      <ul>
        <li>Only use cameras when necessary</li>
        <li>Close doors only when animatronics are nearby</li>
        <li>Use lights sparingly</li>
        <li>Monitor power levels constantly</li>
      </ul>
      
      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Wasting power on unnecessary camera checks</li>
        <li>Not monitoring Foxy regularly</li>
        <li>Panicking when animatronics are at doors</li>
        <li>Ignoring audio cues</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>FNAF 1 is a masterclass in tension and resource management. With practice and these strategies, you can survive all 5 nights and uncover the dark secrets of Freddy Fazbear's Pizza.</p>
    `,
    canonicalUrl:
      "https://fnafofficial.com/blog-posts/fnaf-1-complete-guide.html",
  },

  {
    id: "fnaf-lore-explained",
    title: "FNAF Lore Explained: The Complete Story Timeline",
    slug: "fnaf-lore-explained",
    description:
      "Dive deep into the complex lore of Five Nights at Freddy's. From the Bite of '87 to the Afton family saga, we explain everything.",
    keywords:
      "fnaf lore, five nights at freddy's story, william afton, bite of 87, fnaf timeline, animatronic lore",
    category: "Lore & Story",
    tags: ["FNAF Lore", "Story", "Timeline", "William Afton", "Mystery"],
    publishDate: "2025-01-10",
    modifiedDate: "2025-01-10",
    featuredImage: "../assets/blog/fnaf-lore-featured.jpg",
    content: `
      <h2>The Beginning: Fredbear's Family Diner</h2>
      <p>The FNAF story begins with Fredbear's Family Diner, the original restaurant featuring Fredbear and Spring Bonnie. This is where the tragic events that would shape the entire series began.</p>
      
      <h2>The Afton Family</h2>
      <p>William Afton, the main antagonist, is a brilliant but twisted engineer who created the animatronics. His family includes:</p>
      <ul>
        <li><strong>William Afton:</strong> The Purple Guy, creator of the animatronics</li>
        <li><strong>Michael Afton:</strong> William's son, who becomes the protagonist</li>
        <li><strong>Elizabeth Afton:</strong> William's daughter, who becomes Circus Baby</li>
        <li><strong>CC (Crying Child):</strong> William's youngest son</li>
      </ul>
      
      <h2>Key Events Timeline</h2>
      <h3>1983: The Bite of '83</h3>
      <p>Fredbear bites the Crying Child, leading to his death and the closure of Fredbear's Family Diner.</p>
      
      <h3>1985: The Missing Children Incident</h3>
      <p>William Afton murders 5 children at Freddy Fazbear's Pizza, stuffing their bodies into animatronics.</p>
      
      <h3>1987: The Bite of '87</h3>
      <p>An animatronic bites a security guard during the day, leading to the animatronics being restricted to night movement.</p>
      
      <h3>1993: FNAF 1 Events</h3>
      <p>The events of the first game, where a security guard survives 5 nights at the pizzeria.</p>
      
      <h2>The Animatronics' Souls</h2>
      <p>Each animatronic is possessed by the soul of a murdered child:</p>
      <ul>
        <li><strong>Freddy:</strong> Gabriel</li>
        <li><strong>Bonnie:</strong> Jeremy</li>
        <li><strong>Chica:</strong> Susie</li>
        <li><strong>Foxy:</strong> Fritz</li>
        <li><strong>Golden Freddy:</strong> Cassidy</li>
      </ul>
      
      <h2>William Afton's Downfall</h2>
      <p>After years of murder and experimentation, William Afton meets his end in Spring Bonnie, becoming Springtrap. His soul becomes trapped in the animatronic he created.</p>
      
      <h2>Modern Events</h2>
      <p>The story continues through FNAF 2, 3, 4, Sister Location, Pizzeria Simulator, and Ultimate Custom Night, each revealing more about the Afton family and the animatronics' true nature.</p>
      
      <h2>Conclusion</h2>
      <p>The FNAF lore is a complex web of tragedy, revenge, and supernatural horror. Each game adds new layers to the story, creating one of the most intricate horror game narratives ever created.</p>
    `,
    canonicalUrl:
      "https://fnafofficial.com/blog-posts/fnaf-lore-explained.html",
  },

  {
    id: "fnaf-animatronics-ranked",
    title: "FNAF Animatronics Ranked: From Scariest to Most Dangerous",
    slug: "fnaf-animatronics-ranked",
    description:
      "Ranking all FNAF animatronics by scariness and danger level. From classic Freddy to the terrifying Nightmare animatronics.",
    keywords:
      "fnaf animatronics, scariest animatronics, fnaf ranking, freddy fazbear, nightmare animatronics, horror ranking",
    category: "Rankings",
    tags: ["Animatronics", "Ranking", "Scary", "Horror", "FNAF"],
    publishDate: "2025-01-05",
    modifiedDate: "2025-01-05",
    featuredImage: "../assets/blog/animatronics-ranked-featured.jpg",
    content: `
      <h2>Ranking Criteria</h2>
      <p>We're ranking animatronics based on:</p>
      <ul>
        <li><strong>Scariness Factor:</strong> How terrifying they are</li>
        <li><strong>Danger Level:</strong> How deadly they are in-game</li>
        <li><strong>Design:</strong> Visual horror impact</li>
        <li><strong>Behavior:</strong> Unpredictability and aggression</li>
      </ul>
      
      <h2>Top 10 Scariest Animatronics</h2>
      
      <h3>10. Toy Bonnie (FNAF 2)</h3>
      <p>While less aggressive than others, Toy Bonnie's sudden appearances and wide-eyed stare make him unsettling.</p>
      
      <h3>9. Mangle (FNAF 2)</h3>
      <p>Mangle's broken, twisted form and ability to hang from the ceiling create a unique horror experience.</p>
      
      <h3>8. Springtrap (FNAF 3)</h3>
      <p>The decayed Spring Bonnie suit containing William Afton's corpse is both terrifying and tragic.</p>
      
      <h3>7. Nightmare Freddy (FNAF 4)</h3>
      <p>The Nightmare animatronics represent the peak of FNAF horror, with Nightmare Freddy leading the pack.</p>
      
      <h3>6. Nightmare Bonnie (FNAF 4)</h3>
      <p>His massive size and razor-sharp teeth make him one of the most visually terrifying animatronics.</p>
      
      <h3>5. Nightmare Foxy (FNAF 4)</h3>
      <p>The combination of Foxy's speed with Nightmare design creates an unstoppable force of horror.</p>
      
      <h3>4. Nightmare Fredbear (FNAF 4)</h3>
      <p>The largest and most powerful Nightmare animatronic, representing the ultimate fear.</p>
      
      <h3>3. Nightmare (FNAF 4)</h3>
      <p>The final boss of FNAF 4, Nightmare is the most aggressive and dangerous animatronic in the series.</p>
      
      <h3>2. Golden Freddy (FNAF 1 & 2)</h3>
      <p>Golden Freddy's mysterious nature, teleportation abilities, and connection to the Missing Children Incident make him truly terrifying.</p>
      
      <h3>1. Nightmare (FNAF 4) - Ultimate Terror</h3>
      <p>The most terrifying animatronic in the entire series. His massive size, glowing eyes, and relentless pursuit make him the ultimate horror.</p>
      
      <h2>Honorable Mentions</h2>
      <ul>
        <li><strong>Withered Animatronics:</strong> Their damaged appearance adds to the horror</li>
        <li><strong>Phantom Animatronics:</strong> Their ghostly nature is unsettling</li>
        <li><strong>Circus Baby:</strong> Her human-like behavior is deeply disturbing</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Each animatronic brings something unique to the horror experience. From the classic terror of Freddy to the ultimate nightmare of the Nightmare animatronics, FNAF has created some of the most memorable horror characters in gaming.</p>
    `,
    canonicalUrl:
      "https://fnafofficial.com/blog-posts/fnaf-animatronics-ranked.html",
  },
];

// ========================================
// BLOG POST FUNCTIONS
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
 * @param {string} id - Blog post ID
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
 * Get related blog posts
 * @param {string} currentPostId - Current post ID
 * @param {number} limit - Maximum number of related posts
 * @returns {Array} Array of related blog posts
 */
function getRelatedBlogPosts(currentPostId, limit = 3) {
  const currentPost = getBlogPostById(currentPostId);
  if (!currentPost) return [];

  // Find posts with similar tags or category
  const relatedPosts = BLOG_POSTS.filter(
    (post) =>
      post.id !== currentPostId &&
      (post.category === currentPost.category ||
        post.tags.some((tag) => currentPost.tags.includes(tag)))
  );

  // Shuffle and limit
  return shuffleArray(relatedPosts).slice(0, limit);
}

/**
 * Shuffle array
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Format date for display
 * @param {string} dateString - Date string
 * @returns {string} Formatted date
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Generate tags HTML
 * @param {Array} tags - Array of tags
 * @returns {string} HTML string
 */
function generateTagsHTML(tags) {
  return tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

/**
 * Load related posts into a container
 * @param {string} currentPostId - Current post ID
 * @param {string} containerId - Container element ID
 */
function loadRelatedPosts(currentPostId, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const relatedPosts = getRelatedBlogPosts(currentPostId, 3);

  if (relatedPosts.length === 0) {
    container.innerHTML = "<p>No related posts found.</p>";
    return;
  }

  const postsHTML = relatedPosts
    .map(
      (post) => `
    <article class="related-post-card">
      <div class="related-post-image">
        <img src="${post.featuredImage}" alt="${post.title}" loading="lazy">
      </div>
      <div class="related-post-content">
        <h3><a href="${post.slug}.html">${post.title}</a></h3>
        <p>${post.description.substring(0, 100)}...</p>
        <div class="related-post-meta">
          <span class="post-category">${post.category}</span>
          <time datetime="${post.publishDate}">${formatDate(
        post.publishDate
      )}</time>
        </div>
      </div>
    </article>
  `
    )
    .join("");

  container.innerHTML = postsHTML;
}

// ========================================
// EXPORT FUNCTIONS
// ========================================

window.getAllBlogPosts = getAllBlogPosts;
window.getBlogPostById = getBlogPostById;
window.getBlogPostsByCategory = getBlogPostsByCategory;
window.getRelatedBlogPosts = getRelatedBlogPosts;
window.loadRelatedPosts = loadRelatedPosts;
window.formatDate = formatDate;
window.generateTagsHTML = generateTagsHTML;

console.log("📝 Blog posts system loaded successfully!");
console.log(`📊 Total blog posts: ${BLOG_POSTS.length}`);
console.log("🎯 Available functions:");
console.log("  - getAllBlogPosts()");
console.log("  - getBlogPostById(id)");
console.log("  - getBlogPostsByCategory(category)");
console.log("  - loadRelatedPosts(currentPostId, containerId)");
