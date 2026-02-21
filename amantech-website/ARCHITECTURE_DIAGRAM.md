# Component Hierarchy & Data Flow

## 🏗️ Component Hierarchy Tree

```
App Root Component
│
├── Navigation Component
│   └── [Handles menu toggle, smooth scroll]
│
├── Hero Component
│   └── [Inquiry & Learn More buttons]
│
├── About Component
│   └── [Company highlights array]
│
├── Services Component
│   └── [Services array with 3 items]
│
├── Featured Products Component
│   ├── [Products array with 4 items]
│   └── [Why Trust Us section]
│
├── Testimonials Component
│   └── [Testimonials array with 3 items]
│
├── Blog Component
│   └── [Blog posts array with 3 items]
│
├── Call to Action Component
│   └── [Get Started & Contact buttons]
│
└── Footer Component
    ├── [Quick links array]
    ├── [Contact info array]
    └── [Dynamic year]
```

## 📊 Data Flow Architecture

```
app.ts (App Root)
    ↓
[Imports all components]
    ↓
app.html
    ↓
┌─────────────────────────────────────────┐
│ Navigation Component                     │
│ ├─ Input: None                           │
│ ├─ State: mobileMenuOpen signal          │
│ └─ Output: Navigation to sections        │
└─────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────┐
│ Hero Component                           │
│ ├─ Input: None                           │
│ ├─ Data: Static (hardcoded)              │
│ └─ Output: Click handlers (scroll)       │
└─────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────┐
│ About Component                          │
│ ├─ Input: None                           │
│ ├─ Data: highlights array (3 items)      │
│ └─ Output: Rendered highlights           │
└─────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────┐
│ Services Component                       │
│ ├─ Input: None                           │
│ ├─ Data: services array (3 items)        │
│ └─ Output: Rendered service cards        │
└─────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────┐
│ Featured Products Component              │
│ ├─ Input: None                           │
│ ├─ Data: products array (4 items)        │
│ └─ Output: Product grid + trust section  │
└─────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────┐
│ Testimonials Component                   │
│ ├─ Input: None                           │
│ ├─ Data: testimonials array (3 items)    │
│ └─ Output: Testimonial cards             │
└─────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────┐
│ Blog Component                           │
│ ├─ Input: None                           │
│ ├─ Data: blogPosts array (3 items)       │
│ └─ Output: Blog article cards            │
└─────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────┐
│ Call to Action Component                 │
│ ├─ Input: None                           │
│ ├─ Data: Static (hardcoded)              │
│ └─ Output: Click handlers (scroll)       │
└─────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────┐
│ Footer Component                         │
│ ├─ Input: None                           │
│ ├─ Data: quickLinks array + contactInfo  │
│ └─ Output: Rendered footer               │
└─────────────────────────────────────────┘
```

## 🔄 Event Flow

```
User Interaction
    ↓
Navigation.scrollToSection('about')
    ↓
document.querySelector('#about')
    ↓
scrollIntoView({ behavior: 'smooth' })
    ↓
Close mobile menu
    ↓
Section displayed
```

## 💾 Component Data Types

### Navigation Component

```typescript
{
  mobileMenuOpen: Signal<boolean>;
}
```

### Services Component

```typescript
interface Service {
  id: number;
  title: string;
  icon: string;
  description: string;
}

services: Service[] = [...]
```

### Featured Products Component

```typescript
interface Product {
  id: number;
  name: string;
  description: string;
  icon: string;
}

products: Product[] = [...]
```

### Testimonials Component

```typescript
interface Testimonial {
  id: number;
  text: string;
  author: string;
}

testimonials: Testimonial[] = [...]
```

### Blog Component

```typescript
interface BlogPost {
  id: number;
  date: string;
  title: string;
  excerpt: string;
}

blogPosts: BlogPost[] = [...]
```

### Footer Component

```typescript
interface FooterLink {
  label: string;
  href: string;
}

interface ContactInfo {
  label: string;
  value: string;
}

quickLinks: FooterLink[] = [...]
contactInfo: ContactInfo[] = [...]
currentYear: number
```

## 🎯 Component Responsibilities

| Component         | Responsibility              | Data Size | Complexity |
| ----------------- | --------------------------- | --------- | ---------- |
| Navigation        | Menu, routing               | Small     | Low        |
| Hero              | Welcome, CTAs               | Small     | Low        |
| About             | Company info                | Small     | Low        |
| Services          | Service cards               | Small     | Medium     |
| Featured Products | Product grid, trust section | Medium    | Medium     |
| Testimonials      | Client quotes               | Small     | Low        |
| Blog              | Article grid                | Small     | Medium     |
| Call to Action    | CTA section                 | Small     | Low        |
| Footer            | Links, contact              | Medium    | Low        |

## 🚀 Future Enhancement: Service-Based Architecture

```
app.ts
    ↓
DataService (Shared Service)
    ├─ getServices() → API call
    ├─ getProducts() → API call
    ├─ getTestimonials() → API call
    ├─ getBlogPosts() → API call
    └─ getContactInfo() → API call
    ↓
Services Component (Uses DataService)
    ├─ ngOnInit()
    │   └─ this.dataService.getServices().subscribe()
    ├─ services: Service[] (populated from API)
    └─ Renders service cards
    ↓
Products Component (Uses DataService)
    ├─ ngOnInit()
    │   └─ this.dataService.getProducts().subscribe()
    ├─ products: Product[] (populated from API)
    └─ Renders product grid
```

## 📱 Responsive Behavior

All components are responsive using Tailwind CSS:

- **Mobile** (default): Single column or small grid
- **Tablet** (md:): 2-3 columns
- **Desktop** (lg:): 3-4 columns

Example:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  <!-- Responsive columns -->
</div>
```

## 🔗 Component Communication

### Current Pattern (Standalone)

```
Component 1 (isolated)
Component 2 (isolated)
Component 3 (isolated)

Each manages its own data
```

### Future Pattern (With Services)

```
Component 1 ──┐
              ├──→ Shared Service ←──┐
Component 2 ──┤                      ├──→ API/Backend
              ├──→ State Management ←┘
Component 3 ──┘
```

## 🎨 Styling Strategy

- **Global Styles**: `src/styles.css` (Tailwind directives)
- **Component Styles**: `src/app/components/*/component.css` (Component-specific)
- **Theme**: Tailwind Config (`tailwind.config.js`)
  - Primary: #1a3a52 (dark blue)
  - Secondary: #d4a574 (gold)
  - Accent: #f5a623 (orange)

## 🧪 Testing Structure

Once unit testing is added:

```
src/
├── app/
│   ├── components/
│   │   ├── navigation/
│   │   │   ├── navigation.component.ts
│   │   │   ├── navigation.component.spec.ts ← Test file
│   │   │   └── navigation.component.html
│   │   ├── hero/
│   │   │   ├── hero.component.ts
│   │   │   ├── hero.component.spec.ts ← Test file
│   │   │   └── hero.component.html
│   │   └── [other components with spec files]
│   └── app.ts
└── [other files]
```

## 📊 Performance Optimization Opportunities

### Current

- Standalone components ✅
- Tree-shaking enabled ✅
- CSS purging enabled ✅

### Future (Optional)

- Lazy loading routes
- Code splitting by feature
- Service workers for caching
- Image optimization
- Change detection optimization
- OnPush strategy for stateless components

## 🎯 Summary Diagram

```
┌─────────────────────────────────────┐
│         App Root (30 lines)         │
│     [Just imports & renders]        │
└──────────────┬──────────────────────┘
               │
        ┌──────┴──────┬─────────┬──────────┬──────────────┬──────────────┬──────────┬─────────┐
        │             │         │          │              │              │          │         │
        ▼             ▼         ▼          ▼              ▼              ▼          ▼         ▼
    Navigation     Hero      About    Services    Featured Products  Testimonials Blog   Call to Action
     (30 lines)  (20 lines) (25 lines) (30 lines)   (50 lines)      (25 lines) (30 lines) (20 lines)
        │             │         │          │              │              │          │         │
        └──────────────┴─────────┴──────────┴──────────────┴──────────────┴──────────┴─────────┘
                                    │
                                    ▼
                              Footer Component
                              (35 lines)

Each component:
- Manages its own data
- Handles its own events
- Renders independently
- Can be reused elsewhere
```

---

**Architecture Type**: Enterprise Component-Based
**Pattern**: Standalone Components (Modern Angular)
**State Management**: Signals (Built-in Angular)
**Styling**: Tailwind CSS (Utility-first)
**Data Flow**: Unidirectional (Data → Template)
