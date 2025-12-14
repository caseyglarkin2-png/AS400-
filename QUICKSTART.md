# 🎯 Quick Reference Commands

## Development

```bash
# Install dependencies
npm install

# Start development server (localhost:3000)
npm start

# Build for production
npm run build

# Test production build locally
npx serve -s build
```

## Deployment

```bash
# Build and prepare for deployment
./deploy.sh

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod --dir=build

# Serve locally to test
npx serve -s build -l 8080
```

## File Structure

```
AS400-/
├── build/              # Production build (deploy this)
├── public/             # Static assets
│   └── index.html
├── src/
│   ├── App.js         # Main component
│   ├── index.js       # Entry point
│   └── index.css      # Global styles
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind setup
├── netlify.toml       # Netlify config
├── vercel.json        # Vercel config
├── DEPLOYMENT.md      # Full deployment guide
└── README.md          # Documentation
```

## URLs After Deployment

- **Production:** https://dwtb.dev
- **Local Dev:** http://localhost:3000
- **Local Preview:** http://localhost:8080 (with serve)

## Support Files

- [README.md](README.md) - Full project documentation
- [DEPLOYMENT.md](DEPLOYMENT.md) - Detailed deployment instructions
- [deploy.sh](deploy.sh) - Automated build script

## Key Features

✅ Responsive design (mobile, tablet, desktop)
✅ Interactive components (EDI translator, pricing, logos)
✅ Video player integration
✅ Smooth animations and transitions
✅ Optimized build (~62KB gzipped)
✅ SEO friendly
✅ Fast loading performance

---

**Need help?** Check DEPLOYMENT.md for troubleshooting!
