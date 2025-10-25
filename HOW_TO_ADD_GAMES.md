# 🎮 Hướng dẫn thêm game mới vào FNAF Unblocked Games

## 🎯 **Cách thêm game mới (ĐƠN GIẢN):**

### **Trường hợp 1: Có link game và link logo**

#### 1. **Thêm game vào `js/games.js`:**

Mở file `js/games.js` và thêm game mới vào array `GAMES`:

```javascript
{
  id: "new-game",                    // ID duy nhất (không trùng)
  title: "Tên Game",                 // Tên hiển thị
  folder: "new-game",                // Tên thư mục (không quan trọng nếu dùng link)
  logo: "https://example.com/logo.png",  // Link logo
  type: "fnaf",                      // "fnaf" hoặc "other"
  gameUrl: "https://example.com/game.html"  // Link game (tùy chọn)
}
```

#### 2. **Ví dụ cụ thể:**

```javascript
// Thêm vào cuối array GAMES, trước dấu ];
{
  id: "fnaf-sister-location",
  title: "FNAF Sister Location",
  folder: "sister-location",
  logo: "https://example.com/sister-location-logo.png",
  type: "fnaf",
  gameUrl: "https://example.com/sister-location-game.html"
}
```

### **Trường hợp 2: Có file game local**

#### 1. **Tạo thư mục game:**

```
games/tên-game/
├── index.html
└── logo.png (hoặc logo.webp)
```

#### 2. **Thêm vào `js/games.js`:**

```javascript
{
  id: "local-game",
  title: "Local Game",
  folder: "local-game",
  logo: "../games/local-game/logo.png",
  type: "fnaf"
}
```

## 🚀 **Ví dụ thực tế:**

### **Thêm FNAF Sister Location:**

```javascript
{
  id: "sister-location",
  title: "FNAF Sister Location",
  folder: "sister-location",
  logo: "https://example.com/sister-location-logo.png",
  type: "fnaf",
  gameUrl: "https://example.com/sister-location.html"
}
```

### **Thêm Other Game:**

```javascript
{
  id: "granny",
  title: "Granny",
  folder: "granny",
  logo: "https://example.com/granny-logo.png",
  type: "other",
  gameUrl: "https://example.com/granny-game.html"
}
```

## 📋 **Các bước chi tiết:**

### **Bước 1: Mở file `js/games.js`**

### **Bước 2: Tìm array `GAMES`**

### **Bước 3: Thêm game mới trước dấu `];`**

```javascript
const GAMES = [
  // ... các game cũ ...

  // Game mới
  {
    id: "unique-id",
    title: "Tên Game",
    folder: "folder-name",
    logo: "https://link-to-logo.png",
    type: "fnaf", // hoặc "other"
    gameUrl: "https://link-to-game.html", // tùy chọn
  },
];
```

### **Bước 4: Lưu file và refresh trang**

## ✅ **Lưu ý quan trọng:**

- ✅ **ID phải duy nhất** - không trùng với game khác
- ✅ **Logo link** - phải là link trực tiếp đến ảnh
- ✅ **Game link** - phải là link trực tiếp đến game
- ✅ **Type**: "fnaf" cho FNAF games, "other" cho games khác
- ✅ **Folder**: Tên thư mục (không quan trọng nếu dùng link)

## 🎉 **Kết quả:**

**Từ nay chỉ cần:**

1. ✅ Thêm object vào `js/games.js`
2. ✅ **Xong!** Game tự động xuất hiện trên trang

**🎯 Đơn giản và hiệu quả!**
