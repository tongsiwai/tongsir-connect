# 🎉 背景圖案已應用到所有頁面

以下是每個頁面現在使用的背景圖案：

## ✅ Services 頁面 (`/services`)

1. **Hero Section**: `.bg-hero-pattern`  
   → 多層光暈效果，適合頁面頂部

2. **Services Grid**: `.bg-background .bg-pattern-dots`  
   → 微妙點狀圖案

3. **Session Formats**: `.bg-gradient-warm .bg-soft-texture`  
   → 溫暖漸變 + 細臻紋理

4. **Languages**: `.bg-background .bg-pattern-subtle-grid`  
   → 淡淡的網格背景

5. **Professional Registrations**: `.bg-muted/30`  
   → 柔和的深色背景

6. **CTA Section**: `.bg-gradient-radial`  
   → 從角落發散的光暈

---

## ✅ Blog 頁面 (`/blog`)

1. **Header**: `.bg-hero-pattern`  
   → 多層光暈效果

2. **Article List**: `.bg-background .bg-pattern-dots`  
   → 微妙點狀圖案

---

## ✅ Courses 頁面 (`/courses`)

1. **Page Header**: `.bg-hero-pattern`  
   → 多層光暈效果

2. **Courses Section**: `.bg-gradient-warm .bg-pattern-subtle-grid`  
   → 溫暖漸變 + 網格背景

3. **Publications Section**: (由 PublicationsSection component 控制)

---

## ✅ Contact 頁面 (`/contact`)

1. **Main Section**: `.bg-gradient-radial`  
   → 從角落發散的光暈效果

---

## ✅ About 頁面 (`/about`)

1. **Hero Section**: `.bg-gradient-to-b .from-accent/10 .to-background`  
   → 自定義漸變

2. **Academic Degrees**: `.bg-muted/30`  
   → 柔和的深色背景

3. **Ministry Photos**: `.bg-background`  
   → 白色背景

4. **Specializations**: `.bg-muted/30`  
   → 柔和的深色背景

5. **Credentials**: `.bg-background`  
   → 白色背景

6. **Philosophy**: `.bg-gradient-to-b .from-background .to-accent/5`  
   → 自定義漸變

---

## 💡 設計原則

### 1. **交替使用**
每個頁面的 sections 交替使用背景，避免視覺疲勞

### 2. **層次分明**
- **Hero sections**: 使用 `.bg-hero-pattern` 吸引注意
- **Content sections**: 使用 `.bg-pattern-dots` 或 `.bg-pattern-subtle-grid`
- **Feature sections**: 使用 `.bg-gradient-warm` + 紋理
- **CTA sections**: 使用 `.bg-gradient-radial` 強調

### 3. **顏色調和**
所有圖案都使用主題色(accent color)，保持一致性

### 4. **微妙美感**
所有背景都非常微妙，不會影響阅讀體驗

---

## 🎯 建議更改（可選）

如果想要調整某個頁面的背景，可以直接修改 section 的 className：

```tsx
// 原本
const<section className="section-padding bg-background">

// 改為
<section className="section-padding bg-gradient-warm bg-pattern-dots">
```

可用的 class:
- `.bg-pattern-dots`
- `.bg-pattern-subtle-grid`
- `.bg-gradient-warm`
- `.bg-gradient-radial`
- `.bg-hero-pattern`
- `.bg-soft-texture`

---

## ✨ 成果

現在網站的每個頁面都有：

✅ 優雅的背景圖案  
✅ 良好的視覺層次  
✅ 一致的設計語言  
✅ 提升的用戶體驗  

🎉 **網站現在更加生動、專業、有吸引力！**
