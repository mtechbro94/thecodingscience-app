# Deployment Guide - The Coding Science

## Quick Deploy

### Local Development
```bash
# Option 1: Using Python
python -m http.server 8000 --directory stitch

# Option 2: Using Node.js
npm run dev

# Option 3: Direct browser access
Open: stitch/the_coding_science_home/code.html
```

### Production Deployment Checklist

- [ ] All 9 screens are complete and functional
- [ ] Dark mode toggle works correctly
- [ ] Navigation between all pages works
- [ ] Forms submit without errors
- [ ] No console errors in DevTools
- [ ] Responsive on mobile (320px wide)
- [ ] Responsive on tablet (768px wide)
- [ ] Responsive on desktop (1024px+ wide)
- [ ] All images load correctly
- [ ] All fonts (Inter, Lexend) load correctly
- [ ] Icons display properly
- [ ] All links redirect correctly

### Deploy to Netlify

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Initialize and deploy
netlify init
# Select "stitch" as publish directory
netlify deploy --prod
```

### Deploy to Vercel

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy
vercel --prod

# 3. Configure build
# Vercel automatically detects this is a static site
```

### Deploy to GitHub Pages

1. Push to GitHub:
```bash
git add .
git commit -m "Production ready app"
git push origin main
```

2. In GitHub repository settings:
   - Go to Settings → Pages
   - Select `main` branch
   - Select `stitch` folder
   - Choose a custom domain (optional)

### Environment-Specific URLs

| Environment | URL |
|-------------|-----|
| Localhost | http://localhost:8000 |
| Development | https://dev.thecodingscience.com |
| Staging | https://staging.thecodingscience.com |
| Production | https://thecodingscience.com |

## Performance Optimization

### Already Optimized
- ✅ Tailwind CSS via CDN (minified)
- ✅ Google Fonts with optimal loading
- ✅ Lazy loading for images
- ✅ Minified inline CSS
- ✅ Deferred JavaScript loading

### Optional Enhancements
```bash
# Install image optimizer
npm install -g imagemin-cli

# Compress images
imagemin stitch/**/*.{jpg,png} --out-dir stitch/images
```

## Security Headers (Add to Server)

```apache
# .htaccess or equivalent
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Content-Security-Policy "default-src 'self' https: data: 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com cdn.tailwindcss.com material-icons;"
</IfModule>
```

## Monitoring & Analytics

### Essential Metrics to Track
- Page Load Time
- bounce Rate
- User Engagement
- Error Rates
- Mobile vs Desktop Traffic

### Add Google Analytics (Optional)
```html
<!-- Add to <head> in each page -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## Troubleshooting

### Issue: JavaScript not loading
- **Solution**: Verify `app.js` path is correct relative to HTML folder
- Check console for 404 errors

### Issue: Styles not applying
- **Solution**: Ensure Tailwind CDN is accessible
- Clear browser cache (Ctrl+Shift+Delete)

### Issue: Images not showing
- **Solution**: Use HTTPS URLs for images
- Check image URLs are accessible

### Issue: Navigation not working
- **Solution**: Verify href paths are correct
- Test links in different browsers

## SSL Certificate (Important!)

For production, always use HTTPS:

```bash
# Free SSL via Let's Encrypt
certbot certonly --webroot -w stitch -d thecodingscience.com
```

## Backup & Recovery

```bash
# Regular backups
tar -czf thecodingscience-backup-$(date +%Y%m%d).tar.gz stitch/

# Store in multiple locations:
# 1. Local machine
# 2. GitHub repository
# 3. Cloud storage (Google Drive, Dropbox, AWS S3)
```

## Auto-Deploy from GitHub

### GitHub Actions (.github/workflows/deploy.yml)
```yaml
name: Deploy to Netlify

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Netlify
        env:
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        run: |
          npm install -g netlify-cli
          netlify deploy --prod --dir=stitch
```

## Support & Maintenance

- Monitor error logs daily
- Respond to user feedback
- Update content regularly
- Keep dependencies updated
- Run security audits monthly

---

**Last Updated**: March 2024  
**Deployment Status**: Ready for Production 🚀
