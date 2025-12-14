# Trigent V3 - Velocity Protocol

A sophisticated landing page showcasing the Trigent Velocity 3.0 platform - bridging legacy systems with modern technology.

## Features

- 🎨 Modern, retro-futuristic design with CRT effects
- 📱 Fully responsive layout
- 🎬 Interactive video player integration
- 📊 Dynamic EDI-to-API translator demo
- 💰 Interactive pricing calculator
- 🎯 Visual identity selector
- ⚡ Smooth animations and transitions

## Tech Stack

- **React 18.2** - UI framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icon library
- **Google Fonts** - IBM Plex Mono & Inter

## Local Development

### Prerequisites
- Node.js 14+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
# Create optimized production build
npm run build
```

The build artifacts will be in the `build/` directory.

## Deployment

### Option 1: Deploy to dwtb.dev (Static Hosting)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload the `build/` folder to your hosting provider**

3. **Configure your web server:**
   - Serve `index.html` for all routes
   - Enable gzip compression
   - Set proper cache headers

### Option 2: Using Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Option 3: Using Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

Or use Netlify CLI:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=build
```

### Option 4: Using GitHub Pages

1. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repository-name"
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Customization

### Colors
The color scheme can be modified in the component styles:
- Primary: `#00FF41` (Phosphor Green)
- Secondary: `#FFD600` (Amber)
- Accent: `#00F0FF` (Cyan)
- Background: `#121212` (Dark)

### Content
Edit the component sections in `src/App.js`:
- `activeTab === 'vision'` - Executive vision content
- `activeTab === 'gap'` - Statistics and gap analysis
- `activeTab === 'tech'` - EDI translator demo
- `activeTab === 'identity'` - Logo options
- `activeTab === 'proposal'` - Pricing information

## File Structure

```
AS400-/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main application component
│   ├── index.js        # React entry point
│   └── index.css       # Global styles
├── build/              # Production build (generated)
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size with code splitting
- Lazy loading of components
- Image optimization
- Minified CSS and JS

## License

Proprietary - Trigent Software

## Support

For questions or support, contact the development team.
