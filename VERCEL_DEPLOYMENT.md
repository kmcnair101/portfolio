# Vercel Deployment Guide

This application has been optimized for deployment on Vercel.

## Deployment Steps

### 1. Automatic Deployment (Recommended)

1. **Connect your repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub/GitLab/Bitbucket
   - Click "New Project"
   - Import your repository

2. **Configure deployment settings:**
   - Build Command: `npm run build:client`
   - Output Directory: `dist/spa`
   - Install Command: `npm install`
   - The `vercel.json` file will handle the rest automatically

3. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically build and deploy your application

### 2. Manual Deployment via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Configuration

The application includes:

- **vercel.json**: Deployment configuration with SPA routing support
- **Optimized build**: Code splitting and minification
- **Caching headers**: Static assets cached for 1 year, HTML for immediate updates
- **SPA routing**: All routes redirect to index.html for client-side routing

## Environment Variables

If you need environment variables in production:

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add your variables
4. Redeploy

## Performance Optimizations

- Code splitting for vendor libraries
- Minified bundles
- Optimized cache headers
- Static asset optimization

## Domain Configuration

After deployment:
1. Go to your Vercel project dashboard
2. Navigate to Settings > Domains
3. Add your custom domain
4. Follow the DNS configuration instructions

Your application will be available at:
- `https://your-project-name.vercel.app`
- Your custom domain (once configured)
