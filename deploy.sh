#!/bin/bash

# React To-Do List - GitHub Pages Deployment Script
# This script automates the deployment process to GitHub Pages

echo "🚀 Starting deployment to GitHub Pages..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not initialized. Please run 'git init' first."
    exit 1
fi

# Check if remote origin is set
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ Git remote 'origin' not set. Please add your GitHub repository:"
    echo "   git remote add origin https://github.com/dariogeorge21/react-to-do.git"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🏗️  Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🎉 Your app should be available at your GitHub Pages URL in a few minutes."
    echo "📝 Don't forget to enable GitHub Pages in your repository settings if you haven't already."
else
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi
