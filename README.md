# Gig Wewu Website

A modern React implementation of the HTML5 UP Spectral theme, built with Vite for optimal performance.

## Features

- ⚡ **Vite** - Fast development and optimized production builds
- ⚛️ **React 18** - Latest React with modern hooks and performance optimizations
- 🧭 **React Router** - Client-side routing for multiple pages
- 🎨 **Original Theme** - Faithful recreation of HTML5 UP Spectral design
- 📱 **Responsive** - Mobile-first responsive design
- 🎯 **Performance** - Optimized with React.memo, useCallback, and lazy loading
- 🎨 **Tailwind Ready** - Tailwind CSS configured for future enhancements

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── sections/
│       ├── Banner.jsx
│       ├── SectionOne.jsx
│       ├── SectionTwo.jsx
│       ├── SectionThree.jsx
│       └── CTA.jsx
├── pages/
│   ├── Home.jsx
│   ├── Generic.jsx
│   └── Elements.jsx
├── hooks/
│   ├── useMenu.js
│   └── useSmoothScroll.js
├── assets/
│   └── css/
└── App.jsx
```

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd gig-wewu-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Content Updates
- Update text content in the respective component files
- Replace placeholder images in `public/images/`
- Modify site title in `index.html`

### Styling
- Original theme styles are in `src/assets/css/main.css`
- Add custom styles using Tailwind CSS classes
- Modify theme colors in `src/assets/css/main.css`

### Adding New Sections
1. Create new component in `src/components/sections/`
2. Import and add to `src/pages/Home.jsx`
3. Style using existing CSS classes or Tailwind

## Performance Optimizations

- **React.memo** - Prevents unnecessary re-renders
- **useCallback** - Memoizes event handlers
- **Lazy Loading** - Route-based code splitting
- **Image Optimization** - Proper alt tags and lazy loading ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect Vite and build

### Other Platforms
Upload the `dist/` folder to any static hosting service.

## Credits

- **Original Theme**: [HTML5 UP Spectral](https://html5up.net/spectral)
- **Built with**: React, Vite, React Router
- **Icons**: FontAwesome

## License

This project is free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
