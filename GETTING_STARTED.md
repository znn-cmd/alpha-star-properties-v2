# Getting Started - Alpha Star Properties Website

Welcome! This guide will help you set up and customize your new Alpha Star Properties website.

## 📋 Quick Start (5 minutes)

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages (~2-3 minutes).

### 2. Set Up Environment Variables

Create a `.env.local` file:

```bash
# Copy the example file
cp .env.local.example .env.local
```

Edit `.env.local` with your text editor. For now, just set the site URL:

```env
SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

You can configure AmoCRM and analytics later.

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000/ru](http://localhost:3000/ru) in your browser!

The site will automatically reload as you make changes.

## 🎨 Customization Guide

### 1. Update Contact Information

**File:** `locales/en/common.json` and `locales/ru/common.json`

Replace placeholder contact info:
- Phone numbers
- Email addresses
- Office address
- Social media links

**Files to update:**
- `components/Footer.tsx` - Social media URLs
- `app/[locale]/contact/page.tsx` - Contact details
- `components/Navbar.tsx` - Contact buttons

### 2. Add Real Property Data

**File:** `data/properties.json`

Replace placeholder properties with your real listings:

```json
{
  "id": "unique-id",
  "slug": "property-url-slug",
  "title": {
    "en": "Property Title in English",
    "ru": "Название на русском"
  },
  "price": 2500000,
  "area": 150,
  "bedrooms": 2,
  "location": "Downtown Dubai",
  "images": [
    "https://your-image-url.com/image1.jpg",
    "https://your-image-url.com/image2.jpg"
  ]
}
```

**Image URLs:**
- Upload images to your hosting or CDN
- Use services like Cloudinary, AWS S3, or Vercel Blob
- Or replace Unsplash URLs with your own

### 3. Update Market Analytics

**File:** `data/market.json`

Update with current market data:
- Average prices per area
- Sales volumes
- Developer statistics
- Price trends

This data powers the Analytics Dashboard.

### 4. Customize Team Section

**Files:** 
- `app/[locale]/page.tsx` (Home page team section)
- `app/[locale]/about/page.tsx` (About page team section)

Update team member details:
- Names
- Positions
- Photos
- Contact info
- LinkedIn profiles

### 5. Update Logo and Branding

**Current:** Text logo "Alpha Star Properties"

**To add your logo:**

1. Add logo files to `public/`:
   - `logo.svg` or `logo.png`
   - `logo-white.svg` (for dark backgrounds)

2. Update `components/Navbar.tsx`:
   ```tsx
   <Link href={`/${locale}`}>
     <Image src="/logo.svg" alt="Alpha Star Properties" width={200} height={50} />
   </Link>
   ```

### 6. Configure AmoCRM Integration

**File:** `.env.local`

Add your AmoCRM credentials:

```env
AMOCRM_SUBDOMAIN=your-subdomain
AMOCRM_CLIENT_ID=your-client-id
AMOCRM_CLIENT_SECRET=your-client-secret
AMOCRM_ACCESS_TOKEN=your-access-token
AMOCRM_REFRESH_TOKEN=your-refresh-token
```

**How to get these:**
1. Log in to AmoCRM
2. Go to Settings → Integrations
3. Create a new integration
4. Copy the credentials

Once configured, all form submissions will automatically create leads in AmoCRM.

### 7. Add Analytics Tracking

**File:** `.env.local`

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_YANDEX_METRICA_ID=12345678
NEXT_PUBLIC_META_PIXEL_ID=123456789012345
```

**Implementation:**

Add to `app/[locale]/layout.tsx`:

```tsx
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
      `}
    </Script>
  </>
)}
```

## 🖼️ Managing Images

### Option 1: External CDN (Recommended)

Use services like:
- **Cloudinary** (free tier available)
- **ImgIX**
- **AWS S3 + CloudFront**

Update `next.config.js`:
```js
images: {
  domains: ['your-cdn-domain.com'],
}
```

### Option 2: Vercel Blob Storage

```bash
npm install @vercel/blob
```

Upload images via Vercel dashboard.

### Option 3: Local Images

Place images in `public/images/`:
```
public/
  images/
    properties/
      property-1.jpg
      property-2.jpg
```

Reference as: `/images/properties/property-1.jpg`

## 📝 Content Updates

### Blog Articles

**File:** `app/[locale]/journal/page.tsx`

Add new articles to the `articles` array:

```tsx
{
  slug: 'your-article-slug',
  title: locale === 'ru' ? 'Заголовок' : 'Title',
  excerpt: locale === 'ru' ? 'Описание' : 'Description',
  image: '/images/articles/article.jpg',
  author: 'Author Name',
  publishedAt: '2024-10-18',
}
```

Create article pages in `app/[locale]/journal/[slug]/page.tsx`

### Service Pages

Service pages are automatically generated from:
- `buy`
- `rent`
- `sell`
- `investment`
- `consultation`

Update content in `locales/[en|ru]/common.json` under `services`.

## 🌍 Translations

All text is in `locales/en/common.json` and `locales/ru/common.json`.

**Structure:**
```json
{
  "nav": {
    "buy": "Buy",
    "rent": "Rent"
  },
  "home": {
    "hero": {
      "title": "Welcome"
    }
  }
}
```

**Usage in components:**
```tsx
const t = useTranslations('home.hero');
<h1>{t('title')}</h1>
```

## 🎨 Styling

### Colors

**File:** `tailwind.config.ts`

```ts
colors: {
  primary: '#26648E',    // Main brand color
  secondary: '#4F8FC0',  // Secondary actions
  accent: '#53D2DC',     // Highlights/CTAs
  light: '#FFE3B3',      // Light accents
  neutral: '#F8F9FA',    // Backgrounds
  dark: '#1A1A1A',       // Text
}
```

### Typography

**File:** `app/[locale]/layout.tsx`

Change font:
```tsx
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });
```

## 🚀 Building for Production

```bash
# Build
npm run build

# Test production build locally
npm start

# Deploy to Vercel
vercel --prod
```

## 📱 Testing

### Test Checklist

- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] Images display properly
- [ ] Language switcher works
- [ ] Mobile responsive
- [ ] Contact information is correct
- [ ] Links work (internal and external)
- [ ] Property filters function
- [ ] Analytics dashboard displays data
- [ ] PDF downloads work

### Browser Testing

Test on:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance

```bash
# Run Lighthouse audit
npm run build
npm start
# Open Chrome DevTools → Lighthouse
```

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔧 Common Tasks

### Add a New Page

1. Create `app/[locale]/your-page/page.tsx`
2. Add translations to `locales/[en|ru]/common.json`
3. Add link to navigation in `components/Navbar.tsx`

### Update Footer Links

**File:** `components/Footer.tsx`

### Change Color Scheme

**File:** `tailwind.config.ts`

Update the `colors` object with your brand colors.

### Add a Contact Form Field

**File:** `components/LeadForm.tsx`

Add new input field and update form submission.

## 🆘 Troubleshooting

### Images Not Loading

Check `next.config.js` - add your image domain:
```js
images: {
  domains: ['your-domain.com'],
}
```

### Build Errors

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Forms Not Submitting

1. Check browser console for errors
2. Verify API route: `app/api/lead/route.ts`
3. Check AmoCRM credentials in `.env.local`

### Translations Missing

Ensure all keys exist in both `locales/en/common.json` and `locales/ru/common.json`

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [next-intl (i18n)](https://next-intl-docs.vercel.app/)
- [Framer Motion](https://www.framer.com/motion/)
- [Recharts](https://recharts.org/)

## 💡 Tips

1. **Start Small:** Update contact info and one property first
2. **Test Often:** Run `npm run dev` and check changes
3. **Use Git:** Commit changes frequently
4. **Mobile First:** Always check mobile view
5. **SEO:** Update meta descriptions for each page

## 📞 Support

Need help? 
- Check `README.md` for detailed documentation
- Review `DEPLOYMENT.md` for deployment help
- Email: info@alphastarproperties.ae

---

**You're all set! Start customizing your website. 🎉**

Run `npm run dev` and open http://localhost:3000/ru to see your site!

