#!/bin/bash

# Trigent V3 Deployment Script
# This script builds and prepares the project for deployment

echo "🚀 Starting Trigent V3 Build Process..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run the build
echo "🔨 Building production bundle..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo ""
    echo "📂 Build artifacts are in the 'build' directory"
    echo ""
    echo "📋 Next Steps:"
    echo "   1. Upload the 'build' folder to your hosting provider"
    echo "   2. Or deploy using one of these commands:"
    echo "      - Vercel: vercel --prod"
    echo "      - Netlify: netlify deploy --prod --dir=build"
    echo "      - Serve locally: npx serve -s build"
    echo ""
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
