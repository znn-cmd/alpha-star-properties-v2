# Deployment Guide - Alpha Star Properties

## Quick Deploy to Vercel

### Option 1: Vercel Dashboard (Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Alpha Star Properties website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables:**
   Add these in Vercel dashboard under Settings → Environment Variables:
   ```
   SITE_URL=https://your-domain.com
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   AMOCRM_SUBDOMAIN=your-subdomain
   AMOCRM_CLIENT_ID=your-client-id
   AMOCRM_CLIENT_SECRET=your-client-secret
   AMOCRM_ACCESS_TOKEN=your-access-token
   AMOCRM_REFRESH_TOKEN=your-refresh-token
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Your site is live!

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts to configure project

# Production deploy
vercel --prod
```

## Custom Domain Setup

1. **Add Domain in Vercel:**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update DNS Records:**
   Add these records at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Update Environment Variables:**
   Change `SITE_URL` to your custom domain

## Other Deployment Options

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod
```

### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t alpha-star .
docker run -p 3000:3000 alpha-star
```

## Pre-Deployment Checklist

- [ ] Update `.env.local` with production values
- [ ] Test all forms and integrations
- [ ] Verify AmoCRM connection
- [ ] Check all images load correctly
- [ ] Test both languages (RU/EN)
- [ ] Verify all pages are accessible
- [ ] Test mobile responsiveness
- [ ] Run `npm run build` locally to check for errors
- [ ] Update contact information (phone, email, address)
- [ ] Replace placeholder images
- [ ] Add real property data
- [ ] Configure analytics (GA, Yandex Metrica)
- [ ] Set up custom domain
- [ ] Configure SSL certificate
- [ ] Test SEO with Google Search Console
- [ ] Submit sitemap to search engines

## Post-Deployment

1. **Verify Deployment:**
   - Check all pages load
   - Test forms submission
   - Verify images display
   - Test language switching
   - Check mobile version

2. **SEO Setup:**
   ```bash
   # Sitemap is auto-generated at /sitemap.xml
   # Submit to Google Search Console
   # Submit to Yandex Webmaster
   ```

3. **Analytics:**
   - Add Google Analytics ID to `.env`
   - Add Yandex Metrica ID
   - Add Meta Pixel ID if needed

4. **Monitoring:**
   - Set up Vercel Analytics
   - Configure error tracking (Sentry)
   - Monitor performance with Lighthouse

## Environment Variables Reference

### Required
```env
SITE_URL=https://alphastarproperties.ae
NEXT_PUBLIC_SITE_URL=https://alphastarproperties.ae
```

### AmoCRM Integration
```env
AMOCRM_SUBDOMAIN=your-subdomain
AMOCRM_CLIENT_ID=your-client-id
AMOCRM_CLIENT_SECRET=your-client-secret
AMOCRM_REDIRECT_URI=https://alphastarproperties.ae/api/amo/callback
AMOCRM_ACCESS_TOKEN=your-access-token
AMOCRM_REFRESH_TOKEN=your-refresh-token
```

### Optional Analytics
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_YANDEX_METRICA_ID=12345678
NEXT_PUBLIC_META_PIXEL_ID=123456789012345
```

## Troubleshooting

### Build Errors

**Issue:** Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**Issue:** TypeScript errors
```bash
# Check types
npx tsc --noEmit

# Fix linting
npm run lint
```

### Runtime Errors

**Issue:** Images not loading
- Check image URLs in `data/properties.json`
- Verify domains in `next.config.js`

**Issue:** Forms not submitting
- Check AmoCRM credentials in environment variables
- Verify API endpoint is accessible

**Issue:** Translations missing
- Check `locales/en/common.json` and `locales/ru/common.json`
- Ensure all translation keys are defined

## Performance Optimization

1. **Image Optimization:**
   - Use Next.js Image component (already implemented)
   - Compress images before upload
   - Use WebP format when possible

2. **Code Splitting:**
   - Already optimized with Next.js 14
   - Dynamic imports for heavy components

3. **Caching:**
   - Vercel automatically handles caching
   - Static pages are cached at CDN edge

4. **Analytics:**
   - Monitor Core Web Vitals
   - Keep Lighthouse score > 95

## Support

For deployment issues:
- Check [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- Visit [Vercel Documentation](https://vercel.com/docs)
- Contact: info@alphastarproperties.ae

---

**Happy Deploying! 🚀**

