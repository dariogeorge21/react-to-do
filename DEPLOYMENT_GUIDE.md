# 🚀 GitHub Pages Deployment Guide

This guide will walk you through deploying your React To-Do List application to GitHub Pages step by step.

## 📋 Prerequisites

Before you begin, make sure you have:

- ✅ A GitHub account
- ✅ Git installed on your computer
- ✅ Node.js and npm installed
- ✅ Your React To-Do List project ready

## 🎯 Quick Deployment (Recommended)

### Option 1: Using the Automated Script

1. **Run the deployment script**
   ```bash
   ./deploy.sh
   ```
   
   This script will automatically:
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages

### Option 2: Manual Deployment

Follow the detailed steps below if you prefer manual control.

## 📝 Detailed Step-by-Step Instructions

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the repository details:
   - **Repository name**: `react-to-do` (or your preferred name)
   - **Description**: "A beautiful React To-Do List application"
   - **Visibility**: Public (required for free GitHub Pages)
   - **Initialize**: Leave unchecked (we already have files)
5. Click "Create repository"

### Step 2: Update Configuration Files

#### Update Vite Configuration
Edit `vite.config.js` and replace `react-to-do` with your actual repository name:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-actual-repository-name/', // ← Change this
  build: {
    outDir: 'dist',
  },
})
```

#### Update Package.json
Edit `package.json` and update the homepage URL:

```json
{
  "homepage": "https://your-github-username.github.io/your-actual-repository-name"
}
```

### Step 3: Initialize Git and Push to GitHub

1. **Initialize git repository** (if not already done)
   ```bash
   git init
   ```

2. **Add all files**
   ```bash
   git add .
   ```

3. **Create initial commit**
   ```bash
   git commit -m "Initial commit: React To-Do List application"
   ```

4. **Set main branch**
   ```bash
   git branch -M main
   ```

5. **Add remote origin** (replace with your actual repository URL)
   ```bash
   git remote add origin https://github.com/your-username/your-repository-name.git
   ```

6. **Push to GitHub**
   ```bash
   git push -u origin main
   ```

### Step 4: Deploy to GitHub Pages

1. **Build and deploy**
   ```bash
   npm run deploy
   ```

   This command will:
   - Build your React app for production
   - Create a `gh-pages` branch
   - Push the built files to the `gh-pages` branch

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on the "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose the `gh-pages` branch
6. Leave the folder as `/ (root)`
7. Click "Save"

### Step 6: Access Your Deployed App

Your app will be available at:
```
https://your-github-username.github.io/your-repository-name
```

**Note**: It may take a few minutes for the site to become available after the first deployment.

## 🔄 Updating Your Deployed App

Whenever you make changes to your app:

1. **Commit your changes**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Redeploy**
   ```bash
   npm run deploy
   ```

## 🛠️ Troubleshooting

### Common Issues and Solutions

#### Issue: "Permission denied" error
**Solution**: Make sure your repository is public and you have push access.

#### Issue: App shows blank page
**Solution**: Check that the `base` path in `vite.config.js` matches your repository name exactly.

#### Issue: CSS/JS files not loading
**Solution**: Verify the `homepage` URL in `package.json` is correct.

#### Issue: 404 error on refresh
**Solution**: This is normal for SPAs on GitHub Pages. Consider adding a 404.html that redirects to index.html.

### Checking Deployment Status

1. Go to your repository on GitHub
2. Click on the "Actions" tab to see deployment progress
3. Check the "Pages" section in Settings to see the current status

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)

## 🎉 Success!

Once deployed, your React To-Do List will be live on the internet and accessible to anyone with the URL. You can share it with friends, add it to your portfolio, or use it for your daily task management!

---

**Need help?** Open an issue in your repository or check the troubleshooting section above.
