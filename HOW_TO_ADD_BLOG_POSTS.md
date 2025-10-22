# 📝 Hướng dẫn thêm bài viết mới vào blog

## 🎯 **Cách thêm bài viết mới (TỰ ĐỘNG ĐĂNG BÀI):**

### 1. **Mở file `js/blog-posts.js`**

### 2. **Lấy thông tin từ bài viết thật:**

- **Title**: Lấy từ `<title>` tag trong bài viết
- **Description**: Lấy từ `meta name="description"`
- **Keywords**: Lấy từ `meta name="keywords"`
- **Publish Date**: Lấy từ `time datetime` trong bài viết

### 3. **Thêm bài viết mới vào array `BLOG_POSTS`:**

```javascript
{
  id: "fnaf-1-night-4",                    // ID duy nhất
  title: "FNAF 1 Night 4 Guide – Ultimate Challenge",  // Lấy từ <title> tag
  slug: "fnaf-1-night-4",                  // URL slug
  description: "Master Night 4 FNAF 1 with expert strategies for maximum difficulty. Learn how to survive the ultimate challenge.",  // Lấy từ meta description
  keywords: "FNAF 1 Night 4, Five Nights at Freddy's 1 Night 4, FNAF 1 Night 4 strategy, FNAF 1 Night 4 guide, FNAF 1 Night 4 tips, FNAF 1 survival guide, FNAF 1 walkthrough",  // Lấy từ meta keywords
  category: "Game Guides",                  // Category
  tags: ["FNAF 1", "Night 4", "Ultimate Challenge", "Strategy", "Power Management"],  // Tags
  publishDate: "2025-01-15",               // Lấy từ time datetime
  modifiedDate: "2025-01-15",              // Ngày sửa
  featuredImage: "/blog/fnaf-1-night-4/night4-image.webp",  // Ảnh đại diện
  content: "Night 4 FNaF 1 is the ultimate challenge where all animatronics reach maximum aggression. This is where your skills are truly tested.",  // Nội dung ngắn
  canonicalUrl: "https://fnafofficial.com/blog/fnaf-1-night-4.html"  // URL chính thức
}
```

### 4. **Lưu file và refresh trang blog**

## 📋 **Ví dụ cụ thể - Lấy thông tin từ bài viết thật:**

### **Từ file `blog/fnaf-1-night-1.html`:**

```html
<!-- Title -->
<title>
  FNAF 1 Guide – Complete Night 1 Walkthrough & Strategies - FNAF Official Blog
</title>

<!-- Description -->
<meta
  name="description"
  content="Learn how to survive Night 1 in FNAF 1 with simple strategies, power management tips, and animatronic behavior explained. Master Five Nights at Freddy's 1 and prepare for the horrors ahead."
/>

<!-- Keywords -->
<meta
  name="keywords"
  content="FNAF 1, Five Nights at Freddy's 1, Night 1 FNAF, FNAF 1 guide, FNAF 1 tips, FNAF 1 walkthrough, FNAF 1 strategy, FNAF 1 animatronics, FNAF 1 survival"
/>

<!-- Publish Date -->
<time datetime="2025-01-15" itemprop="datePublished">October 15, 2025</time>
```

### **Kết quả trong `js/blog-posts.js`:**

```javascript
{
  id: "fnaf-1-night-1",
  title: "FNAF 1 Guide – Complete Night 1 Walkthrough & Strategies",  // Từ <title>
  description: "Learn how to survive Night 1 in FNAF 1 with simple strategies, power management tips, and animatronic behavior explained. Master Five Nights at Freddy's 1 and prepare for the horrors ahead.",  // Từ meta description
  keywords: "FNAF 1, Five Nights at Freddy's 1, Night 1 FNAF, FNAF 1 guide, FNAF 1 tips, FNAF 1 walkthrough, FNAF 1 strategy, FNAF 1 animatronics, FNAF 1 survival",  // Từ meta keywords
  publishDate: "2025-01-15",  // Từ time datetime
  // ... các thông tin khác
}
```

## 🎨 **Tips để viết description hay:**

### ✅ **Tốt:**

- 🎮 **Có emoji** để thu hút
- 📝 **Mô tả ngắn gọn** (1-2 câu)
- 🔥 **Có từ khóa chính** (FNAF 1 Night 4)
- 💡 **Tạo sự tò mò** ("ultimate challenge", "maximum aggression")

### ❌ **Tránh:**

- Mô tả quá dài
- Không có emoji
- Không có từ khóa chính
- Mô tả giống nhau

## 📊 **Ví dụ các description khác nhau:**

```javascript
// Night 1 - Beginner friendly
"🎮 Master Night 1 FNAF 1 with expert strategies, power management tips, and animatronic behavior patterns. Learn how to survive your first night at Freddy Fazbear's Pizza with our complete guide.";

// Night 2 - Foxy introduction
"🦊 Night 2 FNaF 1 marks the real beginning of tension! Foxy finally joins the game, and power management starts to matter more than ever. Learn expert strategies to survive the second night.";

// Night 3 - Freddy activation
"🐻 Night 3 FNaF 1 marks a major difficulty spike! Freddy Fazbear himself becomes active and the tension skyrockets. Master expert strategies for four active animatronics.";

// Night 4 - Ultimate challenge
"🔥 Night 4 FNaF 1 is the ultimate challenge! All animatronics are at maximum aggression. Master the final strategies to survive the most difficult night.";

// Night 5 - Final boss
"💀 Night 5 FNaF 1 is the final boss! This is where legends are made. Survive the ultimate horror with our expert strategies and become a FNAF master.";
```

## 🚀 **Sau khi thêm bài viết:**

1. **Tự động hiển thị** trên blog page
2. **Tự động có filter** theo category và tags
3. **Tự động có search** theo title và description
4. **Tự động responsive** trên mobile
5. **Tự động SEO optimized**

## 🎯 **Lưu ý quan trọng:**

- ✅ **Mỗi bài viết phải có `id` duy nhất**
- ✅ **Description phải khác nhau** để tránh trùng lặp
- ✅ **Featured image** phải tồn tại
- ✅ **Tags** phải phù hợp với nội dung
- ✅ **Category** phải đúng với loại bài viết

**🎉 Vậy là từ nay chỉ cần thêm vào `js/blog-posts.js` là bài viết sẽ tự động xuất hiện trên blog page!**
