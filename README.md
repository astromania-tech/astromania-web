# AstroMANIA Enterprise

A premium, matte-design tech company website built with React, TypeScript, and Material-UI (MUI). This project showcases AstroMANIA Enterprise's expertise in AI-powered solutions, DevOps excellence, and scalable software development with a sophisticated, logo-inspired design system.

## 🚀 Features

- **Premium Matte Design**: Sophisticated matte finish inspired by company logo
- **Logo-Inspired Colors**: Deep navy blues, silver metallics, and accent blues from brand identity
- **Modern Tech Stack**: Built with React 19, TypeScript, and Material-UI v2 Grid
- **Responsive Design**: Fully responsive design that works on all devices
- **Context-Driven Theme**: Advanced theme system using React Context for DRY principles
- **Open Sauce Typography**: Professional typography using Open Sauce One & Sans fonts
- **Dark/Light Mode**: Seamless theme switching with matte design consistency
- **Smooth Animations**: Subtle animations powered by Framer Motion
- **Component Library**: Reusable themed components with consistent styling
- **TypeScript**: Full TypeScript support with proper type definitions

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 4.9.5
- **UI Library**: Material-UI (MUI) 7.3.2 with Grid v2
- **Styling**: Emotion (CSS-in-JS) + Custom CSS Design System
- **Routing**: React Router DOM 7.9.1
- **Animations**: Framer Motion 12.23.16
- **Icons**: Material-UI Icons
- **Fonts**: Open Sauce One & Open Sauce Sans
- **Build Tool**: Create React App 5.0.1
- **State Management**: React Context API

## 📱 Pages

### Home Page
- Hero section with company introduction and logo-inspired animations
- Services overview with matte card design
- Call-to-action sections with brand colors

### About Page
- Company mission and vision with themed layouts
- Core values presentation using matte design cards
- Team member profiles with consistent branding
- Company timeline/milestones with logo color accents

### Services Page
- Detailed service offerings with premium matte cards:
  - AI & Machine Learning Solutions
  - DevOps & Cloud Infrastructure
  - Enterprise Architecture
  - Security & Compliance
  - Performance Optimization
  - Data Analytics & BI
- Process workflow with brand-consistent styling
- Technology stacks with themed chips

### Contact Page
- Contact form with matte design validation
- Company contact information in branded cards
- Business hours with consistent typography
- Interactive elements using theme context

## 🎨 Design Features

- **Premium Matte Finish**: Sophisticated non-gradient surfaces inspired by logo
- **Logo Color Palette**: Deep navy (#1a237e), accent blue (#2563eb), metallic silver
- **Card-Based Layout**: Elevated matte cards with subtle shadows
- **Hover Effects**: Refined micro-interactions without gradients
- **Open Sauce Typography**: Professional font hierarchy with brand consistency
- **Consistent Theme System**: Context-driven design tokens for DRY principles
- **Responsive Grid v2**: Latest MUI Grid system with size props

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd astromania
```

2. Install dependencies:
```bash
npm install
```

3. Start the production server:
```bash
npm start
```

4. For development mode:
```bash
npm run dev
```

The application will open in your browser at `http://localhost:3000`.

### Available Scripts

- `npm start` - Builds and serves the app with serve (production mode)
- `npm run dev` - Runs the app in development mode with react-scripts
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
astromania/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with theme context
│   │   ├── Footer.tsx          # Footer component with matte design
│   │   ├── HeroSection.tsx     # Hero section with logo animations
│   │   ├── ServicesSection.tsx # Services overview with matte cards
│   │   └── Logo.tsx            # Reusable logo component
│   ├── contexts/
│   │   └── ThemeContext.tsx    # Advanced theme context with utilities
│   ├── hooks/
│   │   └── (custom hooks)      # Theme and utility hooks
│   ├── pages/
│   │   ├── Home.tsx            # Home page with branded design
│   │   ├── About.tsx           # About page with theme consistency
│   │   ├── Services.tsx        # Services page with matte cards
│   │   └── Contact.tsx         # Contact page with form validation
│   ├── theme/
│   │   └── theme.ts            # Logo-inspired MUI theme configuration
│   ├── App.tsx                 # Main app with theme provider
│   ├── index.tsx              # App entry point
│   └── index.css              # Global matte design styles
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Key Components

### Theme Context System
Advanced React Context with utilities:
- Logo-inspired color palette (deep navy, accent blue, metallic silver)
- Open Sauce typography system
- Matte design component styles
- Theme-aware utility functions
- DRY principle implementation

### Logo Component
- Scalable brand logo with diamond icon
- Consistent brand colors
- Multiple size variants
- Interactive states

### Header Component
- Logo integration with theme context
- Responsive navigation with matte design
- Theme toggle with branded styling
- Mobile drawer with consistent theming

### Matte Design System
- Premium non-gradient surfaces
- Subtle elevation and shadows
- Logo color consistency
- Theme-aware component styling

### Context-Driven Components
All components use theme context for:
- Color consistency
- Typography scaling
- Surface styling
- Border and shadow management

## 🎨 Customization

### Logo Colors
The brand color scheme in `src/theme/theme.ts`:
- Deep Blue: #1a237e (primary brand)
- Navy Blue: #1e2442 (secondary)
- Accent Blue: #2563eb (interactive elements)
- Silver/Platinum: #cbd5e1, #e2e8f0 (surfaces)

### Typography System
Open Sauce font configuration:
- Display font: Open Sauce One (headings)
- Body font: Open Sauce Sans (content)
- Font weights: 400, 500, 600, 700
- Responsive scaling with brand consistency

### Matte Design Tokens
Theme context provides utilities for:
- Surface backgrounds (matte finishes)
- Border colors (brand-consistent)
- Shadow systems (subtle elevations)
- Text color variants (accessible contrast)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 600px
- Tablet: 600px - 960px
- Desktop: > 960px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deployment Options

- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your Git repository
- **AWS S3**: Upload build files to S3 bucket
- **GitHub Pages**: Use gh-pages package

### Production Server

The project uses `serve` for production mode:
```bash
npm start  # Builds and serves production version
```

## 🔧 Performance Optimizations

- Code splitting with React.lazy()
- Optimized matte design assets
- Efficient re-rendering with React.memo()
- Context-based state management
- Theme-aware component rendering
- Grid v2 for improved layout performance
- Minimal JavaScript with focused animations

## 🧪 Testing

Run tests with:
```bash
npm test
```

The project includes component tests with:
- React Testing Library
- Theme context testing
- Component integration tests
- TypeScript type checking

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support and questions:
- Email: contact@astromania.com
- Phone: +1 (555) 123-4567

## 🌟 Acknowledgments

- Material-UI team for the excellent component library and Grid v2
- Open Sauce fonts for professional typography
- Framer Motion for subtle, premium animations
- React team for the amazing framework and Context API
- TypeScript team for enhanced development experience

## 🔄 Recent Updates

### v2.0 - Premium Matte Design System
- **Logo Integration**: Brand-consistent color palette and design tokens
- **Context Architecture**: Advanced theme system with DRY principles
- **Grid v2 Migration**: Updated to latest MUI Grid system with size props
- **Matte Design**: Removed gradients in favor of premium matte finishes
- **Open Sauce Fonts**: Professional typography system integration
- **Component Library**: Reusable, theme-aware components

### Technical Improvements
- Enhanced TypeScript definitions
- Context-driven styling system
- Improved accessibility
- Performance optimizations
- Modern React patterns

---

Built with ❤️ by AstroMANIA Enterprise