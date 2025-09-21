# Hero Section Background Images

This directory contains background images for the HeroSection component.

## Current Setup

The HeroSection component currently uses external Unsplash URLs for background images. To improve performance and reliability, you can download these images locally.

## Professional Tech Team Images

### Recommended Images (Free from Unsplash)

1. **Team Collaboration** (Current Default)
   - URL: https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80
   - Download as: `team-collaboration.jpg`
   - Description: Modern team working together at laptops

2. **Tech Workspace**
   - URL: https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80
   - Download as: `tech-workspace.jpg`
   - Description: Clean modern office workspace

3. **Software Development**
   - URL: https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2020&q=80
   - Download as: `software-development.jpg`
   - Description: Developer coding on multiple monitors

4. **Modern Office**
   - URL: https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80
   - Download as: `modern-office.jpg`
   - Description: Bright modern office space

5. **Team Meeting**
   - URL: https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80
   - Download as: `team-meeting.jpg`
   - Description: Professional team meeting

6. **Digital Workspace**
   - URL: https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80
   - Download as: `digital-workspace.jpg`
   - Description: Computer screens with analytics

## Using Local Images

### Step 1: Download Images
```bash
# Example using curl (or download manually)
curl -o team-collaboration.jpg "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
```

### Step 2: Update HeroSection Component
```typescript
// In HeroSection.tsx, update HERO_BACKGROUNDS object:
const HERO_BACKGROUNDS = {
  teamCollaboration: "/images/hero/team-collaboration.jpg",
  techWorkspace: "/images/hero/tech-workspace.jpg",
  softwareDev: "/images/hero/software-development.jpg",
  modernOffice: "/images/hero/modern-office.jpg",
  teamMeeting: "/images/hero/team-meeting.jpg",
  digitalWorkspace: "/images/hero/digital-workspace.jpg",
};
```

### Step 3: Optimize Images
For best performance, optimize images:
- **Format**: WebP (with JPG fallback)
- **Resolution**: 1920x1080 or 2560x1440 for high-DPI displays
- **File Size**: Keep under 500KB for web performance
- **Compression**: Use tools like TinyPNG or ImageOptim

## Directory Structure
```
public/
  images/
    hero/
      ├── team-collaboration.jpg
      ├── tech-workspace.jpg
      ├── software-development.jpg
      ├── modern-office.jpg
      ├── team-meeting.jpg
      ├── digital-workspace.jpg
      └── README.md (this file)
```

## Image Requirements

### Technical Specs
- **Aspect Ratio**: 16:9 or wider landscape
- **Minimum Resolution**: 1920x1080px
- **Recommended Resolution**: 2560x1440px
- **Format**: JPG, WebP, or PNG
- **File Size**: < 500KB (optimized for web)

### Content Guidelines
- Professional tech/business environment
- Good lighting and contrast
- Suitable for text overlay
- Avoid busy backgrounds that compete with text
- Consider how the image looks with dark overlay filters

## Usage Examples

```tsx
// Default (team collaboration)
<HeroSection />

// Specific background
<HeroSection backgroundImage="techWorkspace" />

// In different pages
<HeroSection backgroundImage="softwareDev" />  // For services page
<HeroSection backgroundImage="teamMeeting" />  // For about page
```

## License Notes

All recommended Unsplash images are free to use under the Unsplash License:
- Free for commercial and personal use
- No attribution required (but appreciated)
- Cannot be sold as-is or used to compete with Unsplash

Always verify licensing when using other image sources.