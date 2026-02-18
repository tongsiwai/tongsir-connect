# 🎨 Background Patterns Guide

新網站已增加了多種背景圖案，使頁面更加生動。以下是可用的樣式及使用方法：

## Available Background Patterns

### 1. **Dot Pattern** - `.bg-pattern-dots`
微妙的點狀圖案，適合用於額外区域
```tsx
<section className="section-padding bg-pattern-dots">
  {/* Content */}
</section>
```

### 2. **Subtle Grid** - `.bg-pattern-subtle-grid`
淡淡的網格背景，給人專業感
```tsx
<section className="section-padding bg-pattern-subtle-grid">
  {/* Content */}
</section>
```

### 3. **Warm Gradient** - `.bg-gradient-warm`
溫暖的漸變背景，適合用於主要区域
```tsx
<section className="section-padding bg-gradient-warm">
  {/* Content */}
</section>
```

### 4. **Radial Gradient** - `.bg-gradient-radial`
從角落發散的光暈效果
```tsx
<section className="section-padding bg-gradient-radial">
  {/* Content */}
</section>
```

### 5. **Hero Pattern** - `.bg-hero-pattern`
多層光暈，適合用於頁面頂部
```tsx
<section className="section-padding bg-hero-pattern">
  {/* Content */}
</section>
```

### 6. **Soft Texture** - `.bg-soft-texture`
細臻的十字紋理，增加視覺興趣
```tsx
<section className="section-padding bg-soft-texture">
  {/* Content */}
</section>
```

## Usage Examples

### Example 1: Hero Section
```tsx
<section className="section-padding bg-hero-pattern">
  <div className="container-wide mx-auto">
    <h1 className="text-5xl font-bold">Welcome</h1>
  </div>
</section>
```

### Example 2: Alternating Sections
```tsx
{/* Section 1 - Plain */}
<section className="section-padding bg-background">
  {/* Content */}
</section>

{/* Section 2 - With Pattern */}
<section className="section-padding bg-gradient-warm bg-pattern-dots">
  {/* Content */}
</section>

{/* Section 3 - Different Pattern */}
<section className="section-padding bg-muted/30 bg-soft-texture">
  {/* Content */}
</section>
```

### Example 3: Combining Patterns
可以同時使用多個 class 來創建獨特效果：
```tsx
<section className="section-padding bg-gradient-warm bg-pattern-dots">
  {/* Warm gradient + dots */}
</section>
```

## Best Practices

1. **交替使用** - 不要每個 section 都用背景，交替使用更有層次感
2. **保持簡潔** - 避免同時使用過多複雜的圖案
3. **注重對比** - 確保文字在背景上清晰可讀
4. **尊重品牌** - 使用溫暖色系 (gold/warm tones) 符合 TongSir 品牌

## Suggested Page Layouts

### Services Page
```tsx
<section className="bg-hero-pattern">Hero</section>
<section className="bg-background">Content</section>
<section className="bg-gradient-warm bg-pattern-dots">Services List</section>
<section className="bg-muted/30 bg-soft-texture">Testimonials</section>
```

### About Page
```tsx
<section className="bg-gradient-radial">Bio</section>
<section className="bg-muted/30 bg-pattern-subtle-grid">Education</section>
<section className="bg-background">Photos</section>
<section className="bg-gradient-warm">Credentials</section>
```

### Blog Page
```tsx
<section className="bg-hero-pattern">Header</section>
<section className="bg-background bg-pattern-dots">Article List</section>
```

## Notes

- 所有圖案都非常微妙，不會喚賓主要內容
- 顏色自動配合主題色 (accent color)
- 支援 dark mode
- 所有圖案都是 CSS 生成，不需要圖片檔案
