# 🚀 Trigent V3 - Deployment Guide

## Quick Start for dwtb.dev Deployment

### Prerequisites
- ✅ Build completed successfully (build folder ready)
- ✅ Access to your dwtb.dev hosting account
- ✅ FTP/SFTP client or hosting control panel access

---

## 📦 What's in the Build

Your `build/` folder contains:
```
build/
├── static/
│   ├── css/         # Compiled stylesheets
│   └── js/          # Compiled JavaScript bundles
├── index.html       # Main entry point
└── asset-manifest.json
```

**Total Size:** ~62KB (gzipped)

---

## 🌐 Deployment Methods

### Method 1: Direct Upload to dwtb.dev (Recommended)

1. **Connect to your hosting via FTP/SFTP:**
   - Host: `dwtb.dev` (or your hosting provider's server)
   - Use your credentials

2. **Upload files:**
   - Navigate to your web root (usually `public_html`, `www`, or `htdocs`)
   - Upload ALL contents from the `build/` folder
   - **Important:** Upload the contents, not the folder itself

3. **Configure your web server:**
   
   **For Apache (.htaccess):**
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteCond %{REQUEST_FILENAME} !-l
     RewriteRule . /index.html [L]
   </IfModule>

   # Enable compression
   <IfModule mod_deflate.c>
     AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
   </IfModule>

   # Browser caching
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
     ExpiresByType image/gif "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType application/javascript "access plus 1 month"
     ExpiresByType text/javascript "access plus 1 month"
   </IfModule>
   ```

   **For Nginx:**
   ```nginx
   server {
     listen 80;
     server_name dwtb.dev www.dwtb.dev;
     root /var/www/trigent-v3;
     index index.html;

     location / {
       try_files $uri $uri/ /index.html;
     }

     # Gzip compression
     gzip on;
     gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
     
     # Cache static assets
     location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
       expires 1y;
       add_header Cache-Control "public, immutable";
     }
   }
   ```

4. **Verify deployment:**
   - Visit `https://dwtb.dev`
   - The Trigent V3 boot sequence should appear
   - Test all navigation tabs
   - Verify video player in dispatch radio

---

### Method 2: Using cPanel File Manager

1. Log into your cPanel at `dwtb.dev/cpanel`
2. Open "File Manager"
3. Navigate to `public_html` or your domain's root
4. Click "Upload"
5. Zip your `build` folder contents first: `cd /workspaces/AS400- && cd build && zip -r ../trigent-v3.zip .`
6. Upload `trigent-v3.zip`
7. Extract it in the file manager
8. Create `.htaccess` file (see Apache config above)

---

### Method 3: Using Git + Hosting Hooks

If your host supports Git deployment:

```bash
# Initialize git if not already done
git add .
git commit -m "Production build for dwtb.dev"

# Add your hosting remote
git remote add production ssh://user@dwtb.dev/~/repository.git

# Push
git push production main
```

Configure your host's post-receive hook to copy build files.

---

### Method 4: Using Vercel (Alternative Cloud Hosting)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Custom domain
vercel domains add dwtb.dev
```

---

### Method 5: Using Netlify (Alternative Cloud Hosting)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=build

# Custom domain
netlify domains:add dwtb.dev
```

---

## 🔧 Post-Deployment Checklist

- [ ] Site loads at `https://dwtb.dev`
- [ ] All tabs navigate correctly (Vision, Gap, Tech, Identity, Proposal)
- [ ] Mobile responsive design works
- [ ] Dispatch radio video player opens
- [ ] CRT overlay effects visible
- [ ] Boot sequence animation plays
- [ ] All fonts load (IBM Plex Mono, Inter)
- [ ] No console errors in browser DevTools
- [ ] SSL certificate is active

---

## 🐛 Troubleshooting

### Issue: Page refreshes show 404
**Solution:** Configure your server for SPA routing (see .htaccess/nginx configs above)

### Issue: Fonts not loading
**Solution:** Check CORS headers, ensure Google Fonts CDN is accessible

### Issue: Styles not applying
**Solution:** 
- Clear browser cache
- Check CSS files are uploaded to `/static/css/`
- Verify content-type headers: `text/css`

### Issue: JavaScript errors
**Solution:**
- Check browser console
- Ensure all files from `/static/js/` uploaded
- Verify file permissions (644 for files, 755 for directories)

---

## 📊 Performance Tips

1. **Enable Gzip/Brotli compression** on your server
2. **Use CDN** for static assets (Cloudflare, etc.)
3. **Enable browser caching** (see configs above)
4. **Monitor with:**
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

---

## 🔒 Security Recommendations

1. **SSL Certificate:** Ensure HTTPS is enabled
2. **Headers:** Add security headers
   ```apache
   Header set X-Content-Type-Options "nosniff"
   Header set X-Frame-Options "SAMEORIGIN"
   Header set X-XSS-Protection "1; mode=block"
   ```
3. **Regular updates:** Keep dependencies updated
4. **Firewall:** Configure WAF if available

---

## 📱 Testing URLs

After deployment, test on:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Android)
- Different screen sizes

Test URLs:
- `https://dwtb.dev` - Homepage
- `https://dwtb.dev/?tab=gap` - Should work with routing
- Direct navigation between all tabs

---

## 🆘 Support

For deployment issues:
1. Check server error logs
2. Review browser console
3. Verify all build files uploaded
4. Test with `npx serve -s build` locally first

---

## 📈 Analytics (Optional)

Add Google Analytics or similar by editing `public/index.html` before build:

```html
<head>
  <!-- ... existing head content ... -->
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>
</head>
```

Then rebuild: `npm run build`

---

## ✅ Deployment Complete!

Your Trigent V3 site should now be live at **https://dwtb.dev**

🎉 Congratulations on your successful deployment!
