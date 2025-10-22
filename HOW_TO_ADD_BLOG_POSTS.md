# 📝 Hướng dẫn thêm bài viết mới vào blog

## 🎯 **Cách thêm bài viết mới (ĐƠN GIẢN):**

### 1. **Tạo bài viết HTML** trong folder `blog/`

### 2. **Thêm bài viết vào `js/blog-posts.js`:**

Mở file `js/blog-posts.js` và thêm bài viết mới vào array `BLOG_POSTS`:

```javascript
{
  id: "fnaf-1-night-5",                    // ID duy nhất
  title: "FNAF 1 Night 5 Guide – Final Boss",  // Tiêu đề bài viết
  slug: "fnaf-1-night-5",                  // URL slug
  description: "Master Night 5 FNAF 1 with expert strategies for the final challenge. Learn how to survive the ultimate horror.",  // Mô tả ngắn
  keywords: "FNAF 1 Night 5, Five Nights at Freddy's 1 Night 5, FNAF 1 Night 5 strategy, FNAF 1 Night 5 guide, FNAF 1 Night 5 tips, FNAF 1 survival guide, FNAF 1 walkthrough",
  category: "Game Guides",                  // Category
  tags: ["FNAF 1", "Night 5", "Final Boss", "Strategy", "Power Management"],  // Tags
  publishDate: "2025-10-22",               // Ngày đăng
  modifiedDate: "2025-10-22",              // Ngày sửa
  featuredImage: "/blog/fnaf-1-night-5/night5-image.webp",  // Ảnh đại diện
  content: "Night 5 FNaF 1 is the final boss where all animatronics reach maximum aggression. This is where legends are made.",  // Nội dung ngắn
  canonicalUrl: "https://fnafofficial.com/blog/fnaf-1-night-5.html"  // URL chính thức
}
```

### 3. **Xong! Tự động hiển thị trên blog page**

## 🚀 **Ví dụ cụ thể:**

### **File: `blog/fnaf-1-night-5.html`**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>FNAF 1 Night 5 Guide – Final Boss - FNAF Official Blog</title>
    <meta
      name="description"
      content="Master Night 5 FNAF 1 with expert strategies for the final challenge. Learn how to survive the ultimate horror."
    />
    <meta
      name="keywords"
      content="FNAF 1 Night 5, Five Nights at Freddy's 1 Night 5, FNAF 1 Night 5 strategy, FNAF 1 Night 5 guide, FNAF 1 Night 5 tips, FNAF 1 survival guide, FNAF 1 walkthrough"
    />
    <!-- ... các meta tags khác ... -->
  </head>
  <body>
    <!-- Nội dung bài viết -->
  </body>
</html>
```

### **Thêm vào `js/blog-posts.js`:**

```javascript
{
  id: "fnaf-1-night-5",
  title: "FNAF 1 Night 5 Guide – Final Boss",
  slug: "fnaf-1-night-5",
  description: "Master Night 5 FNAF 1 with expert strategies for the final challenge. Learn how to survive the ultimate horror.",
  keywords: "FNAF 1 Night 5, Five Nights at Freddy's 1 Night 5, FNAF 1 Night 5 strategy, FNAF 1 Night 5 guide, FNAF 1 Night 5 tips, FNAF 1 survival guide, FNAF 1 walkthrough",
  category: "Game Guides",
  tags: ["FNAF 1", "Night 5", "Final Boss", "Strategy", "Power Management"],
  publishDate: "2025-10-22",
  modifiedDate: "2025-10-22",
  featuredImage: "/blog/fnaf-1-night-5/night5-image.webp",
  content: "Night 5 FNaF 1 is the final boss where all animatronics reach maximum aggression. This is where legends are made.",
  canonicalUrl: "https://fnafofficial.com/blog/fnaf-1-night-5.html"
}
```

## ✅ **Lợi ích:**

- 🚀 **Đơn giản**: Chỉ cần thêm 1 object vào array
- 🔄 **Tự động**: Không cần sửa code khác
- 📝 **Chính xác**: Lấy thông tin từ bài viết thật
- 🎯 **SEO**: Tất cả meta tags đều được sử dụng

## 🎉 **Kết quả:**

**Từ nay chỉ cần:**

1. ✅ Tạo bài viết HTML
2. ✅ Thêm object vào `js/blog-posts.js`
3. ✅ **Xong!** Bài viết tự động xuất hiện trên blog page

**🎯 Đơn giản và hiệu quả!**
