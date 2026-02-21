# 🎨 AMANTECH Theme Guide

## Light Theme - Marley Inspired

**Design Approach**: Clean, professional light theme with white backgrounds, dark text, and red accent colors inspired by Marley's design philosophy

---

## 📋 Official Color Palette

### 🎯 Primary Colors (Backgrounds & Base)

| Color           | Hex Code  | Usage                 | Tailwind Class |
| --------------- | --------- | --------------------- | -------------- |
| **White**       | `#FFFFFF` | Main background       | `white`        |
| **Light Grey**  | `#F3F4F6` | Secondary background  | `neutral-100`  |
| **Medium Grey** | `#6B7280` | Body text             | `neutral-500`  |
| **Dark Grey**   | `#1F2937` | Headings, strong text | `neutral-800`  |

### 🔴 Accent Colors (CTAs & Highlights)

| Color          | Hex Code  | Usage                   | Tailwind Class |
| -------------- | --------- | ----------------------- | -------------- |
| **Red-Orange** | `#C73E1D` | Buttons, hover, accents | `accent-500`   |
| **Dark Red**   | `#8F2910` | Hover states            | `accent-700`   |
| **Light Red**  | `#FDECEA` | Backgrounds             | `accent-100`   |

### 🟠 Supporting Colors

| Color           | Hex Code  | Usage            | Tailwind Class  |
| --------------- | --------- | ---------------- | --------------- |
| **Warm Orange** | `#E8824C` | Secondary CTAs   | `secondary-500` |
| **Teal**        | `#2E8B9E` | Tertiary accents | `tertiary-500`  |

---

## 🎯 Design Philosophy

**Clean & Professional**:

- White/light backgrounds for maximum readability
- Dark grey text for strong contrast
- Red accent for calls-to-action and emphasis
- Similar to Marley's modern, accessible design

**Key Principles:**

- ✅ High contrast for readability
- ✅ Light backgrounds reduce eye strain
- ✅ Red accents create visual hierarchy
- ✅ Professional manufacturing appearance
- ✅ Accessible for all users (WCAG AA)

---

## 🎨 Color Usage Guide

### Navigation Bar (Sticky)

```html
<nav class="bg-white border-b-2 border-accent-500">
  <!-- Navigation content -->
</nav>
```

- **Background**: `white`
- **Text**: `neutral-700` (dark grey)
- **Border**: Red accent
- **Link Hover**: `accent-600` (red)
- **Status**: ✅ Sticky with `sticky top-0 z-50`

### Hero Section

```html
<section class="section-primary">
  <h1 class="text-white">Welcome to AMANTECH</h1>
  <button class="btn-accent">Learn More</button>
</section>
```

- **Background Gradient**: `primary-800` → `primary-700` (dark grey gradient)
- **Text**: `white`
- **CTA Button**: Red accent

### Buttons

#### Primary Button (Dark Grey)

```html
<button class="btn-primary">Primary Action</button>
```

- **Background**: `primary-700` (dark grey)
- **Hover**: `primary-800`
- **Text**: `white`

#### Accent Button (Red)

```html
<button class="btn-accent">CTA Button</button>
```

- **Background**: `accent-500` (#C73E1D)
- **Hover**: `accent-600`
- **Text**: `white`
- **Use for**: Contact, Learn More, Get Started

#### Secondary Button (Orange)

```html
<button class="btn-secondary">Secondary Action</button>
```

- **Background**: `secondary-500` (#E8824C)
- **Hover**: `secondary-600`
- **Text**: `white`

#### Outline Button

```html
<button class="btn-outline">Learn More</button>
```

- **Border**: `2px accent-500` (red)
- **Text**: `accent-600`
- **Hover**: `accent-50` background

### Cards

```html
<div class="card card-default">
  <h3 class="text-neutral-900">Feature Title</h3>
  <p class="text-neutral-600">Description text</p>
</div>
```

- **Background**: `white`
- **Border**: `neutral-200` (light grey)
- **Shadow**: Light shadow on hover
- **Text**: `neutral-900` (dark)

### Badges

#### Primary Badge

```html
<span class="badge-primary">Primary</span>
```

- **Background**: `primary-100`
- **Text**: `primary-800`

#### Accent Badge (Red)

```html
<span class="badge-accent">Hot</span>
```

- **Background**: `accent-100`
- **Text**: `accent-800`

#### Secondary Badge (Orange)

```html
<span class="badge-secondary">Featured</span>
```

- **Background**: `secondary-100`
- **Text**: `secondary-800`

### Sections

#### White Section (Default)

```html
<section class="section section-white">
  <!-- Content -->
</section>
```

- **Background**: `white`
- **Text**: `neutral-900`

#### Light Section

```html
<section class="section section-light">
  <!-- Content -->
</section>
```

- **Background**: `neutral-50` (very light grey)
- **Text**: `neutral-900`

#### Dark Section (Primary Gradient)

```html
<section class="section section-primary">
  <!-- Content -->
</section>
```

- **Background**: Gradient `primary-800` → `primary-700`
- **Text**: `white`

#### Accent Section (Red)

```html
<section class="section section-accent">
  <!-- Content -->
</section>
```

- **Background**: Gradient `accent-600` → `accent-500` (red)
- **Text**: `white`

### Text Styling

#### Headings

```html
<h1 class="text-neutral-900">Main Heading</h1>
<h2 class="text-neutral-800">Section Heading</h2>
<h3 class="text-neutral-700">Subsection</h3>
```

- **Color**: `neutral-900` to `neutral-700` (dark)

#### Body Text

```html
<p class="text-neutral-800">Primary text</p>
<p class="text-neutral-600">Secondary text</p>
<p class="text-neutral-500 text-muted">Muted text</p>
```

- **Primary**: `neutral-800` to `neutral-700`
- **Secondary**: `neutral-600` to `neutral-700`
- **Muted**: `neutral-500`

#### Links

```html
<a href="#" class="text-accent-600 hover:text-accent-700">Link</a>
```

- **Default**: `accent-600` (red)
- **Hover**: `accent-700` (darker red)

### Form Elements

#### Text Inputs

```html
<input type="text" class="focus-primary" placeholder="Enter text" />
```

- **Background**: `white`
- **Border**: `neutral-300`
- **Text**: `neutral-900`
- **Focus**: Ring `accent-500` (red)

#### Text Areas

```html
<textarea class="focus-primary" placeholder="Enter message"></textarea>
```

- Same styling as inputs

---

## 🎨 Advanced Components

### Text Gradients

```html
<h1 class="text-gradient-primary">Gradient Text</h1>
<h2 class="text-gradient-accent">Red Gradient Text</h2>
```

- Primary: Dark grey gradient
- Accent: Red gradient

### Dividers

```html
<div class="divider"></div>
```

- **Style**: Gradient red
- **Height**: 4px
- **Use**: Separating sections

### Shadows

```html
<div class="shadow-sm">Light shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Strong shadow</div>
```

- Subtle shadows on light backgrounds

### Transitions

```html
<button class="transition-smooth hover:bg-accent-600">Smooth Hover</button>
```

- **Duration**: 300ms
- **Easing**: ease-in-out

---

## 📱 Responsive Design

All colors work consistently across breakpoints:

- **Mobile**: `sm:` (640px)
- **Tablet**: `md:` (768px)
- **Desktop**: `lg:` (1024px)
- **Wide**: `xl:` (1280px)

Example:

```html
<div class="text-neutral-700 md:text-neutral-800 lg:text-neutral-900">Responsive text color</div>
```

---

## ✅ Navigation Bar (Already Configured)

The navigation bar is clean, light, and sticky:

```html
<nav class="bg-white text-neutral-900 shadow-md sticky top-0 z-50 border-b-2 border-accent-500">
  <!-- Navigation content -->
</nav>
```

**Features**:

- ✅ **Sticky**: Stays at top while scrolling
- ✅ **Z-index**: 50 (above all content)
- ✅ **Backdrop blur**: 10px for modern effect
- ✅ **White background**: Clean, professional
- ✅ **Red border**: Bottom accent line
- ✅ **Dark text**: High contrast navigation
- ✅ **Logo animation**: Subtle pulse effect
- ✅ **Link hover**: Smooth underline in red

---

## 🚀 Usage Examples

### Hero Banner with Dark Gradient

```html
<section class="section-primary py-20 text-center">
  <div class="container-custom">
    <h1 class="text-white mb-4">Welcome to AMANTECH</h1>
    <p class="text-neutral-100 text-lg mb-8">Manufacturing Excellence</p>
    <button class="btn-accent">Learn More</button>
  </div>
</section>
```

### Feature Cards on Light Background

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="card card-default hover-lift">
    <div class="text-4xl mb-4">⚙️</div>
    <h3 class="text-neutral-900 mb-2">Feature Title</h3>
    <p class="text-neutral-600">Feature description</p>
  </div>
</div>
```

### Red Call-to-Action Section

```html
<section class="section-accent py-16">
  <div class="container-custom text-center">
    <h2 class="text-white mb-6">Ready to Get Started?</h2>
    <button class="btn-outline">Contact Us Today</button>
  </div>
</section>
```

---

## 📚 Tailwind Configuration

Colors configured in `tailwind.config.js`:

- `primary` (neutral) - Greys for backgrounds & base
- `secondary` - Orange for supporting CTAs
- `accent` - Red for main CTAs & emphasis
- `tertiary` - Teal for secondary accents
- `neutral` - Grayscale for text

Use any shade: `bg-white`, `text-neutral-800`, `border-accent-500`, etc.

---

## 🎯 Design Principles (Marley Inspired)

1. **Light & Clean**: White backgrounds with dark text
2. **Professional**: Perfect for manufacturing & enterprise
3. **High Contrast**: Easy readability and accessibility
4. **Red Accents**: Draws attention to CTAs
5. **Modern**: Contemporary, clean design approach
6. **Accessible**: WCAG AA contrast compliance

---

## 📝 Migration Notes

**What Changed**:

- ✅ Light backgrounds (white/light grey)
- ✅ Dark text instead of light
- ✅ Red accent color for CTAs
- ✅ Updated navigation styling
- ✅ New component styling for light theme

**What Stayed**:

- ✅ Navigation sticky
- ✅ Responsive grid system
- ✅ All component structure
- ✅ Smooth animations
- ✅ Same HTML structure

---

**Theme Last Updated**: February 21, 2026
**Design Inspiration**: [Marley (marley.co.uk)](https://www.marley.co.uk/)
**Colors**: Custom palette optimized for manufacturing industry

### Buttons

#### Primary Button

```html
<button class="btn-primary">Primary Action</button>
```

- **Background**: `primary-600`
- **Hover**: `primary-700`
- **Text**: `white`

#### Secondary Button

```html
<button class="btn-secondary">Secondary Action</button>
```

- **Background**: `secondary-500` (#D4A574)
- **Hover**: `secondary-600`
- **Text**: `white`

#### Outline Button

```html
<button class="btn-outline">Outline Action</button>
```

- **Background**: Transparent
- **Border**: `2px primary-600`
- **Text**: `primary-600`
- **Hover**: `primary-50` background

#### Accent Button

```html
<button class="bg-accent-500 text-white hover:bg-accent-600">Accent Action</button>
```

- **Background**: `accent-500` (#F5A623)
- **Hover**: `accent-600`
- **Text**: `white`

### Cards

```html
<div class="card card-default">
  <h3 class="text-primary-800">Card Title</h3>
  <p class="text-neutral-600">Card content</p>
</div>
```

- **Background**: `white`
- **Border**: `neutral-200`
- **Shadow**: Elevation 1-3
- **Title**: `primary-800` or `primary-900`

### Badges

#### Primary Badge

```html
<span class="badge-primary">Primary</span>
```

- **Background**: `primary-100`
- **Text**: `primary-800`

#### Secondary Badge

```html
<span class="badge-secondary">Secondary</span>
```

- **Background**: `secondary-100`
- **Text**: `secondary-800`

#### Accent Badge

```html
<span class="badge-accent">Accent</span>
```

- **Background**: `accent-100`
- **Text**: `accent-800`

### Sections

#### Light Section (default)

```html
<section class="section section-light">
  <!-- Content -->
</section>
```

- **Background**: `neutral-50`

#### White Section

```html
<section class="section section-white">
  <!-- Content -->
</section>
```

- **Background**: `white`

#### Primary Gradient Section

```html
<section class="section section-primary">
  <!-- Content -->
</section>
```

- **Background**: Gradient `primary-500` → `primary-800`
- **Text**: `white`

#### Accent Gradient Section

```html
<section class="section section-accent">
  <!-- Content -->
</section>
```

- **Background**: Gradient `accent-500` → `accent-600`
- **Text**: `white`

### Text Styling

#### Headings

```html
<h1 class="text-primary-950">Main Heading</h1>
<h2 class="text-primary-900">Section Heading</h2>
<h3 class="text-primary-800">Subsection</h3>
```

- Font family: `heading` (Trebuchet MS, Segoe UI, Tahoma)
- Color: `primary-950` to `primary-800`

#### Body Text

```html
<p class="text-neutral-700">Regular paragraph</p>
<p class="text-neutral-600">Muted text</p>
<p class="text-neutral-500">Light text</p>
```

#### Links

```html
<a href="#" class="text-primary-600 hover:text-primary-800">Link</a>
```

- **Default**: `primary-600`
- **Hover**: `primary-800`
- **Transition**: Smooth color change

### Form Elements

#### Text Inputs

```html
<input type="text" class="focus-primary" placeholder="Enter text" />
```

- **Border**: `neutral-300`
- **Focus**: Ring `primary-500`

#### Text Areas

```html
<textarea class="focus-primary" placeholder="Enter message"></textarea>
```

- Same styling as inputs

---

## 🎨 Advanced Components

### Text Gradients

```html
<h1 class="text-gradient-primary">Gradient Text</h1>
<h2 class="text-gradient-secondary">Secondary Gradient</h2>
```

### Dividers

```html
<div class="divider"></div>
```

- **Style**: Gradient primary, height 4px, fully rounded
- **Use**: Separating sections visually

### Shadows

```html
<div class="shadow-elevation-1">Light shadow</div>
<div class="shadow-elevation-2">Medium shadow</div>
<div class="shadow-elevation-3">Strong shadow</div>
<div class="shadow-elevation-4">Very strong shadow</div>
```

### Transitions

```html
<button class="transition-smooth hover:bg-primary-600">Smooth Hover</button>
```

- **Duration**: 300ms
- **Easing**: ease-in-out

---

## 📱 Responsive Design

All colors work consistently across breakpoints:

- **Mobile**: `sm:` (640px)
- **Tablet**: `md:` (768px)
- **Desktop**: `lg:` (1024px)
- **Wide**: `xl:` (1280px)

Example:

```html
<div class="text-primary-900 md:text-primary-800 lg:text-primary-700">Responsive text color</div>
```

---

## ✅ Navigation Bar (Already Configured)

The navigation bar is already sticky and styled:

```html
<nav class="bg-primary text-white shadow-lg sticky top-0 z-50">
  <!-- Navigation content -->
</nav>
```

**Features**:

- ✅ **Sticky**: Stays at top while scrolling
- ✅ **Z-index**: 50 (above all content)
- ✅ **Backdrop blur**: 10px for modern effect
- ✅ **Border**: Subtle orange accent (`secondary-500`)
- ✅ **Logo animation**: Subtle pulse effect
- ✅ **Link hover**: Smooth underline animation in `secondary-500`

---

## 🚀 Usage Examples

### Hero Banner

```html
<section class="section-primary py-20 text-center">
  <div class="container-custom">
    <h1 class="text-white mb-4">Welcome to AMANTECH</h1>
    <p class="text-neutral-100 text-lg mb-8">Manufacturing Excellence Since Day One</p>
    <button class="btn-secondary">Learn More</button>
  </div>
</section>
```

### Feature Cards

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="card card-default">
    <div class="text-4xl mb-4">⚙️</div>
    <h3 class="text-primary-800 mb-2">Feature Title</h3>
    <p class="text-neutral-600">Feature description goes here</p>
  </div>
</div>
```

### Call-to-Action Section

```html
<section class="section-accent py-16">
  <div class="container-custom text-center">
    <h2 class="text-white mb-6">Ready to Get Started?</h2>
    <button class="bg-white text-accent-600 hover:bg-neutral-50 px-8 py-3 rounded-lg font-semibold">
      Contact Us Today
    </button>
  </div>
</section>
```

---

## 📚 Tailwind Configuration

All colors are configured in `tailwind.config.js` with full color scales:

- `primary` (50-950)
- `secondary` (50-950)
- `accent` (50-950)
- `tertiary` (50-950)
- `neutral` (50-950)

Use any shade: `bg-primary-500`, `text-secondary-700`, `border-accent-200`, etc.

---

## 🎯 Design Principles

1. **Professional**: Dark blue primary conveys trust and reliability
2. **Warm Accents**: Tan and orange add approachability and energy
3. **Contrast**: Sufficient contrast for accessibility (WCAG AA compliant)
4. **Consistency**: Same palette across all components
5. **Flexibility**: 50 shades per color for fine-tuning

---

## 📝 Notes

- ✅ Navigation sticky: Implemented with `sticky top-0 z-50`
- ✅ Color palette: From official COLOURlovers source
- ✅ All colors accessible: Meet WCAG AA standards
- ✅ Responsive: Works perfectly on all screen sizes
- ✅ Dark mode ready: Can be extended with dark mode support

---

**Theme Last Updated**: February 21, 2026
**Palette Source**: [COLOURlovers #59867 - Blown Entrepreneur](https://www.colourlovers.com/palette/59867/Blown_Entrepreneur)
