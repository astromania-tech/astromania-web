# AstroMANIA Enterprise

A modern, professional tech company website built with React, TypeScript, and Material-UI (MUI). This project showcases AstroMANIA Enterprise's expertise in AI-powered solutions, DevOps excellence, and scalable software development.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, TypeScript, and Material-UI
- **Responsive Design**: Fully responsive design that works on all devices
- **Material Design**: Clean, minimalistic UI following Material Design principles
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Professional Layout**: Multiple pages showcasing company services and information
- **SEO Ready**: Optimized for search engines
- **TypeScript**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 4.9.5
- **UI Library**: Material-UI (MUI) 7.3.2
- **Styling**: Emotion (CSS-in-JS)
- **Routing**: React Router DOM 7.9.1
- **Animations**: Framer Motion 12.23.16
- **Icons**: Material-UI Icons
- **Fonts**: Roboto (Google Fonts)
- **Build Tool**: Create React App 5.0.1

## 📱 Pages

### Home Page
- Hero section with company introduction
- Services overview
- Call-to-action sections

### About Page
- Company mission and vision
- Core values presentation
- Team member profiles
- Company timeline/milestones

### Services Page
- Detailed service offerings:
  - AI & Machine Learning Solutions
  - DevOps & Cloud Infrastructure
  - Enterprise Architecture
  - Security & Compliance
  - Performance Optimization
  - Data Analytics & BI
- Process workflow
- Technology stacks used

### Contact Page
- Contact form with validation
- Company contact information
- Business hours
- Interactive elements

## 🎨 Design Features

- **Modern Gradient Backgrounds**: Beautiful gradient overlays
- **Card-Based Layout**: Clean card components for content organization
- **Hover Effects**: Smooth hover animations on interactive elements
- **Typography**: Professional typography hierarchy
- **Color Scheme**: Professional blue and purple gradient theme
- **Responsive Grid**: Flexible grid system for all screen sizes

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

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Available Scripts

- `npm start` - Runs the app in development mode
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
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Footer component
│   │   ├── HeroSection.tsx     # Hero section
│   │   └── ServicesSection.tsx # Services overview
│   ├── pages/
│   │   ├── Home.tsx            # Home page
│   │   ├── About.tsx           # About page
│   │   ├── Services.tsx        # Services page
│   │   └── Contact.tsx         # Contact page
│   ├── theme/
│   │   └── theme.ts            # MUI theme configuration
│   ├── App.tsx                 # Main app component
│   ├── index.tsx              # App entry point
│   └── index.css              # Global styles
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Key Components

### Theme Configuration
Custom MUI theme with:
- Professional color palette
- Typography scale
- Component style overrides
- Dark/light mode support

### Header Component
- Responsive navigation
- Mobile drawer menu
- Dark mode toggle
- Smooth scroll navigation

### Hero Section
- Animated gradient background
- Company introduction
- Call-to-action buttons
- Animated icons and elements

### Services Components
- Service cards with hover effects
- Technology tags
- Expandable feature lists
- Pricing information

## 🎨 Customization

### Colors
The primary color scheme can be modified in `src/theme/theme.ts`:
- Primary: Blue (#1976d2)
- Secondary: Purple (#9c27b0)
- Gradients: Various blue-purple combinations

### Typography
Font customization available in the theme configuration:
- Primary font: Roboto
- Font weights: 300, 400, 500, 700
- Responsive font sizes

### Animations
Framer Motion animations can be customized in individual components:
- Fade in/out effects
- Slide animations
- Hover transformations
- Stagger animations

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

## 🔧 Performance Optimizations

- Code splitting with React.lazy()
- Optimized images and assets
- Efficient re-rendering with React.memo()
- Lazy loading for animations
- Minified CSS and JavaScript

## 🧪 Testing

Run tests with:
```bash
npm test
```

The project includes basic component tests using React Testing Library.

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

- Material-UI team for the excellent component library
- Framer Motion for smooth animations
- React team for the amazing framework
- TypeScript team for type safety

---

Built with ❤️ by AstroMANIA Enterprise