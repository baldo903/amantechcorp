# AMANTECH Website Development Guide

## Overview

This document provides developers with comprehensive information for maintaining, extending, and deploying the AMANTECH Corporation website.

## Project Information

- **Project Name**: AMANTECH Corporation Website
- **Type**: Angular Single Page Application (SPA)
- **Styling**: Tailwind CSS
- **Created**: February 21, 2026
- **Version**: 1.0.0

## Directory Structure

```
amantech-website/
├── src/
│   ├── app/
│   │   ├── app.html                 # Main template (homepage)
│   │   ├── app.ts                   # Component logic with TypeScript
│   │   ├── app.css                  # Component-specific styles
│   │   ├── app.routes.ts            # Routing configuration
│   │   ├── app.config.ts            # App configuration
│   │   ├── contact.component.ts     # Contact page component
│   │   ├── products.component.ts    # Products page component
│   │   ├── app.spec.ts              # Component tests
│   │   └── app-routing.module.ts    # Routing module
│   ├── index.html                   # Main HTML entry point
│   ├── main.ts                      # Angular bootstrapping
│   └── styles.css                   # Global styles with @tailwind directives
├── public/
│   └── favicon.ico                  # Website favicon
├── tailwind.config.js               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration for CSS processing
├── angular.json                     # Angular CLI configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # Project dependencies
├── package-lock.json                # Dependency lock file
└── AMANTECH_README.md              # Project documentation
```

## Development Setup

### Prerequisites

```bash
node -v  # v18 or higher required
npm -v   # v9 or higher recommended
ng version  # Angular CLI version
```

### Installation Steps

1. **Clone/Copy the project**

   ```bash
   cd amantech-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   This installs:
   - Angular framework and CLI
   - Tailwind CSS
   - TypeScript
   - RxJS
   - And other necessary packages

3. **Verify installation**

   ```bash
   ng version
   npm list tailwindcss
   npm list @angular/core
   ```

4. **Start development server**

   ```bash
   ng serve
   ```

   Or with auto-open:

   ```bash
   ng serve --open
   ```

5. **Access the application**
   - Navigate to `http://localhost:4200`
   - Automatic reloading on file changes

## Code Structure & Components

### Main Component (app.ts)

The root component that provides:

- Navigation management
- Mobile menu toggle functionality
- Smooth scroll anchors
- Product data model

**Key Methods:**

- `ngOnInit()` - Initialize component and event listeners
- `scrollToSection(sectionId)` - Smooth scroll to anchor sections
- `toggleMobileMenu()` - Mobile menu open/close

### Template Structure (app.html)

Divided into logical sections:

1. **Navigation** - Sticky header with responsive menu
2. **Hero Section** - Welcome banner with CTAs
3. **About Section** - Company information
4. **Services Section** - 3-column service showcase
5. **Products Section** - 4-column product grid
6. **Trust Section** - Why choose AMANTECH
7. **Testimonials** - 3 client quotes
8. **Blog Section** - 3 featured articles
9. **CTA Section** - Call-to-action with buttons
10. **Footer** - Company details and links

### Contact Component (contact.component.ts)

Standalone component for contact inquiries with:

- Two-column layout (form + info)
- Form validation
- Business hours display
- Multiple contact methods

### Products Component (products.component.ts)

Showcases manufacturing capabilities with:

- Product grid display
- Detailed product information
- Application lists
- Manufacturing capabilities section

## Styling & Theming

### Tailwind Configuration (tailwind.config.js)

```javascript
{
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: '#1a3a52',    // Dark Blue
        secondary: '#d4a574',  // Gold/Bronze
        accent: '#f5a623'      // Orange
      }
    }
  }
}
```

### CSS Classes Explanation

**Spacing Classes:**

- `px-4` - Horizontal padding 1rem
- `py-6` - Vertical padding 1.5rem
- `mb-4` - Margin bottom 1rem
- `gap-8` - Gap between grid items

**Color Classes:**

- `text-primary` - Dark blue text
- `bg-secondary` - Gold background
- `hover:text-secondary` - Hover effect

**Layout Classes:**

- `container` - Max width container
- `grid grid-cols-1 md:grid-cols-2` - Responsive grid
- `flex justify-between` - Flexbox with space-between

**Responsive Classes:**

- `md:` - Medium screens and up (768px+)
- `lg:` - Large screens and up (1024px+)
- `hidden md:flex` - Hidden on mobile, flex on desktop

## Adding New Sections

### Example: Adding a New Page Section

1. **Add HTML in app.html**

```html
<section id="new-section" class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center text-primary mb-12">New Section</h2>
    <!-- Content here -->
  </div>
</section>
```

2. **Add styling in app.css** (if needed)

```css
.new-section {
  /* Custom styles */
}
```

3. **Add navigation link in header**

```html
<li><a href="#new-section" class="hover:text-secondary">New Section</a></li>
```

## Forms & Validation

### Contact Form Structure

- Email validation (type="email")
- Required fields (required attribute)
- Form submission handler
- Form reset on success

### Best Practices

- Always validate on client-side with HTML5
- Use [(ngModel)] for two-way data binding
- Provide clear error messages
- Show success feedback

## Routing & Navigation

### Current Route Setup (app.routes.ts)

```typescript
export const routes: Routes = [
  { path: '', component: App },
  // Add more routes as needed
];
```

### Implementing New Routes

```typescript
{
  path: 'products',
  component: ProductsComponent
}
```

### Updating Navigation

Update the header navigation links to include new routes:

```html
<li><a routerLink="/products">Products</a></li>
```

## Performance Optimization

### Bundle Sizes (Current)

- **main.js**: 41.85 kB
- **styles.css**: 13.70 kB
- **Total**: ~55.55 kB

### Optimization Techniques

1. **Lazy Loading Routes**

```typescript
{
  path: 'products',
  loadComponent: () => import('./products.component').then(m => m.ProductsComponent)
}
```

2. **Image Optimization**

- Use WebP format when possible
- Implement lazy loading for images
- Compress images before deployment

3. **CSS Purging**

- Tailwind automatically removes unused CSS
- Only custom CSS is included

## Testing

### Running Unit Tests

```bash
ng test
```

### Running E2E Tests

```bash
ng e2e
```

### Test Structure

```typescript
describe('App Component', () => {
  it('should create the app', () => {
    // Test implementation
  });
});
```

## Building for Production

### Production Build

```bash
ng build --configuration production
```

### Build Output

- Optimized JavaScript bundles
- Minified CSS
- Source maps (optional)
- Output in `dist/amantech-website/browser/`

### Build Options

```bash
ng build --configuration production --aot
ng build --prod --stats-json  # Generate stats for analysis
```

## Deployment

### Deploy to Netlify

1. Connect GitHub repository
2. Build command: `ng build --configuration production`
3. Publish directory: `dist/amantech-website/browser`
4. Environment variables (if any)

### Deploy to Firebase

```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

### Deploy to Traditional Server

1. Build: `ng build --configuration production`
2. Copy contents of `dist/amantech-website/browser/` to server
3. Configure server for SPA (rewrite to index.html)

## Common Tasks

### Update Company Contact Information

**Files to Update:**

- `app.html` - Footer contact section
- `contact.component.ts` - Contact page information

### Add New Blog Post

1. Add entry to blog array in component
2. Create new blog component or update template
3. Link from blog section

### Change Color Scheme

1. Update `tailwind.config.js` - colors section
2. Update `app.html` - class names if needed
3. Or update `app.css` for custom colors

### Update Product Listings

1. Edit `products` array in `app.ts`
2. Or modify `products.component.ts` for dedicated products page

### Add New Navigation Item

1. Add link in header nav in `app.html`
2. Create corresponding route in `app.routes.ts`
3. Create component if needed

## Environment Variables

### Development

```
NODE_ENV=development
NG_APP_API_URL=http://localhost:3000
```

### Production

```
NODE_ENV=production
NG_APP_API_URL=https://api.amantechcorp.com
```

## Troubleshooting

### Common Issues & Solutions

**Issue: Styles not loading**

```bash
# Solution: Rebuild Tailwind CSS
npm run build
# Or clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: Port 4200 already in use**

```bash
ng serve --port 4300
```

**Issue: TypeScript errors**

```bash
npx tsc --noEmit  # Check compilation errors
```

**Issue: Build fails**

```bash
ng build --verbose  # Get detailed error messages
npm cache clean --force
npm install
```

## Browser DevTools Tips

### Angular DevTools

- Install Angular DevTools extension
- View component tree
- Inspect property bindings
- Debug change detection

### Lighthouse Audit

1. Open DevTools → Lighthouse
2. Run audit on performance, accessibility, SEO
3. Fix reported issues

## Version Control

### Git Workflow

```bash
git clone <repository-url>
git checkout -b feature/new-feature
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
```

### Commit Message Format

- `feat: add new feature`
- `fix: fix bug`
- `docs: update documentation`
- `style: CSS/Tailwind changes`
- `refactor: code reorganization`

## Dependencies Management

### Adding New Package

```bash
npm install package-name
npm install --save-dev dev-package-name
```

### Updating Dependencies

```bash
npm update
npm outdated  # Check for outdated packages
```

### Security

```bash
npm audit  # Check for vulnerabilities
npm audit fix  # Auto-fix vulnerabilities
```

## Resources

### Documentation

- [Angular Docs](https://angular.io/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

### Learning Resources

- Angular Official Tutorial
- Tailwind CSS Component Libraries
- TypeScript Handbook

### Community

- Stack Overflow
- Angular Discord/Community
- GitHub Issues

## Support & Contact

For development questions or issues:

- Review this guide first
- Check Angular documentation
- Contact project maintainers

## Last Updated

February 21, 2026

---

**Happy Coding!** 🚀
