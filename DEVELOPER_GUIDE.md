# Developer Quick Start Guide - The Coding Science

## 5-Minute Setup

### Prerequisites
- Node.js v14+ (optional, for running dev server)
- Git (for version control)
- Modern web browser

### Setup Steps

```bash
# 1. Clone the repository
git clone https://github.com/thecodingscienceapp/thecodingscienceapp.git
cd thecodinscienceApp

# 2. Install dependencies (optional)
npm install

# 3. Start development server
npm run dev
# OR: python -m http.server 8000 --directory stitch

# 4. Open in browser
# http://localhost:3000 (npm)
# http://localhost:8000 (Python)
```

---

## Project Structure Quick Reference

```
stitch/
├── the_coding_science_home/      # Home/Landing page
├── browse_courses/               # Course catalog
├── course_details/               # Individual course
├── course_quiz_assessment/       # Quiz module
├── internship_opportunities/     # Job listings
├── live_training_sessions/       # Training schedule
├── course_certificate_view/      # Certificate display
├── student_profile_dashboard/    # User profile
├── community_discussion_forum/   # Discussion forum
└── app.js                        # Shared JavaScript

stitch/*/code.html               # Each feature's main file
```

---

## Common Development Tasks

### Adding a New Feature

1. **Create folder under `stitch/`**
   ```bash
   mkdir stitch/my_new_feature
   ```

2. **Copy template from existing page**
   ```bash
   cp stitch/the_coding_science_home/code.html stitch/my_new_feature/code.html
   ```

3. **Update content and styling**
   - Modify HTML content
   - Update Tailwind classes
   - Add unique styles if needed

4. **Update navigation**
   - Add link in all bottom nav bars
   - Update header menu

5. **Test thoroughly**
   - Check responsive design
   - Verify dark mode
   - Test navigation

### Modifying Styles

All styling uses **Tailwind CSS**. To modify:

1. **Change primary color** (edit in `<script>` tag of each file)
   ```javascript
   tailwind.config = {
     theme: {
       extend: {
         colors: {
           primary: "#NEW_COLOR",
         },
       },
     },
   };
   ```

2. **Add responsive styles**
   ```html
   <!-- Small screen (default) -->
   <div class="text-sm">

   <!-- Medium screen and up -->
   <div class="text-sm md:text-base lg:text-lg">
   ```

3. **Dark mode classes**
   ```html
   <div class="bg-white dark:bg-slate-900">
   ```

### Updating Navigation

Find this in each page and update links:
```html
<nav class="fixed bottom-0 ...">
  <a href="../page_folder/code.html">Link</a>
</nav>
```

### Adding JavaScript Functionality

Edit `stitch/app.js` to add:
```javascript
function myNewFunction() {
  // Your code here
}

// Export for global use
window.myNewFunction = myNewFunction;
```

Then use in HTML:
```html
<button onclick="myNewFunction()">Click Me</button>
```

### Adding Images

```html
<!-- External image (recommended) -->
<img src="https://example.com/image.jpg" alt="Description">

<!-- Local image (if you add to stitch folder) -->
<img src="../images/my-image.jpg" alt="Description">
```

### Adding Icons

The app uses **Material Icons**. Browse available icons at:
https://fonts.google.com/icons

```html
<!-- Use any icon name -->
<span class="material-icons">home</span>
<span class="material-icons">person</span>
<span class="material-icons">settings</span>
```

---

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes
# ... edit files ...

# Stage and commit
git add .
git commit -m "Add my feature"

# Push branch
git push origin feature/my-feature

# Create Pull Request on GitHub
```

---

## Testing

### Manual Testing
```bash
# Open in browser and test:
npm run dev
# Then visit http://localhost:3000
```

### Using Lighthouse (Chrome)
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Click "Generate report"
4. Check scores for Performance, Accessibility, etc.

---

## Debugging

### Console Errors
```bash
# Open DevTools: F12 or Right-click > Inspect
# Check Console tab for errors
# Check Network tab for failed requests
```

### Dark Mode Issues
```javascript
// In browser console, test dark mode
localStorage.setItem('theme', 'dark');
document.documentElement.classList.add('dark');
```

### Navigation Issues
```javascript
// Check current URL
console.log(window.location.href);

// Test link paths
console.log(document.querySelectorAll('a'));
```

---

## File Size Guide

### Optimal Sizes
- **HTML files**: < 50KB each
- **Images**: < 200KB each
- **CSS (via CDN)**: < 50KB
- **JavaScript**: < 30KB

### Current Sizes
| File | Size |
|------|------|
| Home page | ~25KB |
| Courses page | ~22KB |
| Profile page | ~18KB |
| Forum page | ~20KB |
| app.js | ~12KB |

---

## Performance Checklist

- [ ] Page loads in < 2 seconds
- [ ] No console errors
- [ ] Images are optimized
- [ ] CSS loads from CDN
- [ ] JavaScript is deferred
- [ ] No render-blocking resources
- [ ] Fonts load efficiently
- [ ] Mobile responsive works

---

## Browser DevTools Tips

### Check Performance
1. Open DevTools
2. Go to Network tab
3. Reload page
4. See load time for each resource

### Test Mobile View
1. Press **F12** or Cmd+J
2. Click device toggle (mobile icon)
3. Select device (iPhone, Android, Tablet)

### Debug JavaScript
```javascript
// Add breakpoints by clicking line numbers
// Add watch expressions
// Check console for errors
debugger; // Pauses execution
```

---

## Common Errors & Solutions

| Error | Solution |
|-------|----------|
| `404 not found` | Check file paths are relative |
| `Styles not applying` | Clear cache (Ctrl+Shift+Delete) |
| `Images broken` | Verify image URLs are correct/accessible |
| `Dark mode not working` | Check localStorage is accessible |
| `Navigation broken` | Verify href paths are correct |

---

## Useful Links

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Material Icons**: https://fonts.google.com/icons
- **Color Picker**: https://www.color-hex.com
- **Accessibility Checker**: https://www.wave.webaim.org
- **Performance Test**: https://www.webpagetest.org

---

## Code Style Guidelines

### File Naming
- Use lowercase
- Use underscores for spaces
- Example: `my_feature_name`

### Folder Structure
```
feature_name/
└── code.html         # Main feature file
```

### HTML Class Naming
```html
<!-- Use descriptive, semantic names -->
<div class="feature-section">
<button class="btn-primary">
<p class="text-muted">
```

### Tailwind Class Order
```html
<!-- Layout, Sizing, Spacing, Text, Effects, Hover -->
<button class="flex items-center gap-2 px-4 py-2 text-white bg-primary rounded-lg hover:bg-secondary">
```

### Comments
```html
<!-- Use meaningful comments -->
<!-- Profile section with stats -->
<section class="profile-stats">
```

```javascript
// Explain complex logic
// Toggle dark mode and save preference
function toggleDarkMode() {
```

---

## Performance Optimization Tips

### Images
```html
<!-- Use responsive images -->
<img 
  src="image.jpg" 
  srcset="image-small.jpg 480w, image-medium.jpg 1024w, image-large.jpg 1920w"
  sizes="(max-width: 480px) 480px, (max-width: 1024px) 1024px, 1920px"
  alt="Description"
>
```

### Fonts
```html
<!-- Preload fonts for faster load -->
<link rel="preload" href="..." as="font" type="font/woff2" crossorigin>
```

### CSS
```html
<!-- Critical CSS inline, defer non-critical -->
<style>
  /* Critical styles */
</style>
<link rel="stylesheet" href="non-critical.css" media="print" onload="this.media='all'">
```

---

## Deployment Commands

```bash
# Build (if needed)
npm run build

# Test before deploy
npm run test

# Deploy to Netlify
netlify deploy --prod --dir=stitch

# Deploy to Vercel
vercel --prod

# Deploy to GitHub Pages
git add .
git commit -m "Deploy to production"
git push origin main
```

---

## Getting Help

- **Documentation**: Read README.md, FEATURES.md
- **Issues**: Check GitHub Issues
- **Community**: Use discussion forum
- **Email**: academy@thecodingscience.com

---

**Last Updated**: March 2024  
**Version**: 1.0.0  
**Status**: Production Ready 🚀

Happy coding! 💻
