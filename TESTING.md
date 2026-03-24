# Testing Guide - The Coding Science

## Manual Testing Checklist

### 1. Navigation Testing
- [ ] **Home Page**
  - Page loads without errors
  - Header is visible and sticky
  - Bottom navigation shows "Home" as active
  - "Start Learning Now" button is clickable

- [ ] **Courses Page**
  - Browse courses loads all course cards
  - Course carousel is scrollable
  - Links navigate correctly
  - Filters work if implemented

- [ ] **Course Details**
  - Individual course information displays
  - Course preview/image loads
  - Enroll button is functional

- [ ] **Quiz Assessment**
  - Quiz questions display properly
  - Questions can be selected
  - Progress bar updates
  - Submit button works

- [ ] **Student Profile**
  - Profile header displays user info
  - Stats cards display correctly
  - Course progress bars show
  - Certificates gallery displays
  - Profile navigation items are clickable

- [ ] **Community Forum**
  - Forum categories display
  - Discussion threads show
  - Search box is functional
  - Links to discussions work

- [ ] **Other Pages**
  - Internship page loads
  - Training sessions page functional
  - Certificates page displays correctly

### 2. Responsive Design Testing

#### Mobile (320px - 480px)
- [ ] Text is readable
- [ ] Buttons are easily tappable
- [ ] Images scale properly
- [ ] Navigation is accessible
- [ ] Forms are easy to fill
- [ ] Horizontal scrolling is smooth

#### Tablet (481px - 768px)
- [ ] Layout adapts well
- [ ] Content is well-organized
- [ ] Images maintain quality
- [ ] Navigation works smoothly

#### Desktop (769px+)
- [ ] Multi-column layouts display
- [ ] Content is well-distributed
- [ ] Hover effects work
- [ ] All features are visible

### 3. Dark Mode Testing
- [ ] Toggle button works when added
- [ ] Dark mode applies to all pages
- [ ] Text contrast is sufficient (WCAG AA)
- [ ] All colors are readable
- [ ] Images display correctly in dark mode

### 4. Performance Testing

#### Page Load Speed
- [ ] Home page loads in < 2 seconds
- [ ] Images load progressively
- [ ] JavaScript executes without lag
- [ ] No console errors

#### Lighthouse Audit (Chrome DevTools)
Target scores:
- [ ] Performance: > 90
- [ ] Accessibility: > 95
- [ ] Best Practices: > 90
- [ ] SEO: > 90

### 5. Browser Compatibility

#### Chrome/Edge
- [ ] Latest version works
- [ ] Older version (v90+) works

#### Firefox
- [ ] Latest version works
- [ ] Fonts render correctly

#### Safari
- [ ] iOS Safari works
- [ ] Layout displays properly

#### Mobile Browsers
- [ ] Chrome Mobile
- [ ] Safari iOS
- [ ] Firefox Mobile

### 6. Accessibility Testing

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Enter/Space activates buttons
- [ ] Forms can be completed with keyboard only
- [ ] Focus indicators are visible

#### Screen Reader (NVDA/JAWS)
- [ ] Page structure is properly announced
- [ ] Form labels are associated
- [ ] Images have descriptive alt text
- [ ] Navigation is clearly announced

#### Color Contrast
- [ ] Text on background: 4.5:1 minimum
- [ ] Large text: 3:1 minimum
- [ ] Use contrast checker tool

### 7. Content Testing
- [ ] All text is accurate
- [ ] Spelling and grammar are correct
- [ ] Course descriptions are accurate
- [ ] Pricing information is correct
- [ ] Contact information is valid

### 8. Form Testing (When Backend is Added)
- [ ] Empty form submission shows errors
- [ ] Invalid email shows error
- [ ] Password validation works
- [ ] Form submission succeeds
- [ ] Success message displays
- [ ] Redirect works after submission

### 9. Link Testing
- [ ] Internal links navigate correctly
- [ ] External links open in new tab
- [ ] Email links open mail client
- [ ] Phone links open dialer on mobile

### 10. Image Testing
- [ ] All images load
- [ ] Images scale responsively
- [ ] No broken image icons
- [ ] Images are optimized (< 200KB)
- [ ] Image quality is acceptable

## Automated Testing (Optional)

### Using Lighthouse CLI
```bash
npm install -g @lhci/cli@*

# Run audit
lhci autorun --config=lighthouserc.json
```

### Using WebPageTest
1. Visit https://www.webpagetest.org/
2. Enter URL: https://thecodingscience.com
3. Run test
4. Review results and optimize

### Using WAVE (Accessibility)
1. Visit browser extension: WAVE
2. Run on each page
3. Fix identified errors

## Test Report Template

```
Date: [DATE]
Tester: [NAME]
Browser: [BROWSER VERSION]
Device: [DEVICE TYPE]

TESTS RUN: __/__

FAILURES:
- [ ] Issue 1
- [ ] Issue 2

NOTES:
[ADDITIONAL OBSERVATIONS]

STATUS: ☐ PASS ☐ FAIL ☐ NEEDS WORK
```

## Quick Test Commands

### Test all pages exist
```bash
# From project root
ls stitch/*/code.html
# Should list 9 files
```

### Check for broken links
```bash
# Using linkchecker (pip install linkchecker)
linkchecker stitch/the_coding_science_home/code.html
```

### Validate HTML
```bash
# Using validator.nu or online
# https://validator.w3.org/
```

### Check CSS (Tailwind)
```bash
# Tailwind is minified via CDN
# No local CSS validation needed
```

### Run local server test
```bash
python -m http.server 8000 --directory stitch &
# Open http://localhost:8000
# Browser console should show no errors
```

## Performance Metrics Target

| Metric | Target | Current |
|--------|--------|---------|
| First Contentful Paint | < 1.5s |  |
| Largest Contentful Paint | < 2.5s |  |
| Cumulative Layout Shift | < 0.1 |  |
| Total Blocking Time | < 150ms |  |
| Time to Interactive | < 3s |  |

## Known Issues & Limitations

(To be updated as development progresses)

---

**Last Updated**: March 2024  
**Testing Status**: Ready for QA Phase 🧪
