# AMANTECH CORPORATION - Modern Business Website

## Project Overview

This is a modern, responsive business website for **AMANTECH CORPORATION**, a leading manufacturing company specializing in precision metal parts and tool & die making. The website is built with **Angular** as a Single Page Application (SPA) and styled with **Tailwind CSS** for a professional, modern appearance.

## Features

### 🎯 Key Features

- **Responsive Design** - Fully responsive on desktop, tablet, and mobile devices
- **Modern UI** - Clean, professional design inspired by Robert's AIPMC manufacturing website
- **SPA Architecture** - Fast, smooth navigation using Angular routing
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **Company Information** - Comprehensive about section with company history and values
- **Services Showcase** - Tool & die making, metal fabrication, and engineering solutions
- **Product Gallery** - Featured products with descriptions
- **Testimonials** - Client feedback and success stories
- **Blog Section** - Latest industry insights and company news
- **Contact Information** - Multiple ways to reach the company
- **Mobile Menu** - Touch-friendly navigation for mobile devices

### 📋 Website Sections

1. **Navigation Bar** - Sticky header with logo and navigation links
2. **Hero Section** - Eye-catching banner with company tagline and CTA buttons
3. **About Section** - Company history, vision, mission, and core values
4. **Services Section** - Three main service offerings with descriptions
5. **Products Section** - Featured products in a grid layout
6. **Trust Section** - Why clients choose AMANTECH (quality, delivery, expertise, cost)
7. **Testimonials** - Client success stories and feedback
8. **Blog Section** - Latest articles and industry insights
9. **Call-to-Action** - Prominent section to encourage inquiries
10. **Footer** - Company info, quick links, contact details, and business hours

## Tech Stack

- **Frontend Framework**: Angular (Latest version with signals)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **CSS Processing**: PostCSS, Autoprefixer
- **Development**: Angular CLI

## Project Structure

```
amantech-website/
├── src/
│   ├── app/
│   │   ├── app.html           # Main template (homepage)
│   │   ├── app.ts             # Component logic
│   │   ├── app.css            # Component styles
│   │   ├── app.routes.ts       # Routing configuration
│   │   └── app.config.ts       # App configuration
│   ├── index.html             # Main HTML file
│   ├── main.ts                # Application entry point
│   └── styles.css             # Global styles with Tailwind
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── angular.json               # Angular CLI configuration
├── package.json               # Project dependencies
└── tsconfig.json              # TypeScript configuration
```

## Color Scheme

- **Primary Color**: `#1a3a52` (Dark Blue) - Used for headers and primary elements
- **Secondary Color**: `#d4a574` (Gold/Bronze) - Accent color for highlights
- **Accent Color**: `#f5a623` (Orange) - Call-to-action buttons

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. **Navigate to project directory**

   ```bash
   cd amantech-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   ng serve --open
   ```

4. **Access the website**
   - The app will automatically open in your browser at `http://localhost:4200`
   - The browser will automatically reload when you make changes to any of the source files

### Building for Production

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## Customization

### Adding Products

Edit the `products` array in [app.ts](src/app/app.ts) to add or modify product listings.

### Updating Company Information

- **Contact Info**: Update phone numbers and email in the footer section of [app.html](src/app/app.html)
- **Address**: Modify the address in the footer
- **Business Hours**: Update operating hours in the footer

### Styling

- **Colors**: Modify custom colors in [tailwind.config.js](tailwind.config.js)
- **Fonts**: Add custom fonts in the Tailwind theme configuration
- **Global Styles**: Add styles to [styles.css](src/styles.css)

## Features to Implement

Future enhancements could include:

- Product detail pages with specifications
- Full blog functionality with individual article pages
- Contact form with backend integration
- Product filtering and search functionality
- Image gallery for products and testimonials
- Manufacturing certifications and compliance badges
- Case studies and project portfolio
- Team member profiles
- Sustainability initiatives showcase
- Multi-language support (English/Tagalog)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Fast loading times with optimized CSS
- Responsive images and lazy loading ready
- Smooth scrolling and transitions
- Mobile-first design approach

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Color contrast compliance
- Accessible navigation

## File Size

- Initial chunk: ~41.85 KB (main.js)
- Styles: ~13.70 KB (styles.css)
- **Total: ~55.55 KB** (very lightweight!)

## Deployment

The website can be deployed to:

- **Netlify** - Free static hosting with automatic builds
- **Vercel** - Optimized for Angular applications
- **Firebase Hosting** - Google's hosting platform
- **Traditional Servers** - Apache, Nginx, etc.

### Deployment Steps

1. Build the project: `ng build --configuration production`
2. Deploy the `dist/amantech-website/browser/` folder to your hosting provider

## Development Workflow

### Running Tests

```bash
ng test
```

### Running Linting

```bash
ng lint
```

### Watch Mode

The development server automatically watches for changes and rebuilds the application.

## Company Information

**AMANTECH CORPORATION**

- **Established**: June 16, 1996
- **Location**: Km 16, Republic Steel Tube Compound, Las Piñas City, Philippines
- **Specialization**: Tool & Die Making, Metal Fabrication, Manufacturing Engineering
- **Years in Business**: 30+ years of excellence

## Contact

- **Phone**: (02) 514-2189 | (02) 873-4491
- **Email**: info@amantechcorp.com
- **Address**: Km 16, Republic Steel Tube Compound, Las Piñas City, Philippines

## References

This website was inspired by and designed to match the professional standards of [Roberts AIPMC](https://roberts.com.ph/), a leading automotive parts manufacturer in the Philippines.

## License

This project is proprietary to AMANTECH Corporation. All rights reserved.

## Contributors

- Created with Angular CLI
- Styled with Tailwind CSS
- Optimized for manufacturing industry standards

---

**Last Updated**: February 21, 2026

For questions or support, please contact the development team or reach out to AMANTECH Corporation directly.
