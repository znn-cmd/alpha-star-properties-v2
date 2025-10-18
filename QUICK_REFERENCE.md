# Alpha Star Properties - Quick Reference

## 🚀 Common Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build           # Build for production
npm start               # Run production build locally
npm run lint            # Check code quality

# Deployment
vercel                  # Deploy to Vercel
vercel --prod           # Deploy to production

# Clean & Reinstall
rm -rf .next node_modules
npm install
```

## 🖼️ Image Placeholders

**Все изображения сейчас - SVG заглушки!**

Расположение: `/public/images/placeholders/`
- `property.svg` - недвижимость
- `team.svg` - команда
- `article.svg` - статьи
- `area.svg` - районы
- `hero.svg` - главные экраны

**Подробнее:** см. `IMAGES_GUIDE.md`

## 📂 Key Files to Edit

### 1. Contact Information
- `locales/en/common.json` - English text
- `locales/ru/common.json` - Russian text
- `app/[locale]/contact/page.tsx` - Contact page
- `components/Footer.tsx` - Footer links

### 2. Property Listings
- `data/properties.json` - All properties

### 3. Market Analytics
- `data/market.json` - Analytics data

### 4. Team Members
- `app/[locale]/page.tsx` - Home page team
- `app/[locale]/about/page.tsx` - About page team

### 5. Branding
- `tailwind.config.ts` - Colors
- `public/logo.svg` - Logo
- `public/og-image.jpg` - Social share image

### 6. Configuration
- `.env.local` - Environment variables
- `next.config.js` - Next.js settings

## 🎨 Color Palette

```css
Primary:   #26648E  /* Main brand color */
Secondary: #4F8FC0  /* Buttons, links */
Accent:    #53D2DC  /* CTAs, highlights */
Light:     #FFE3B3  /* Light accents */
Neutral:   #F8F9FA  /* Backgrounds */
Dark:      #1A1A1A  /* Text */
```

## 🌐 URLs Structure

```
/ru                          → Home (Russian)
/en                          → Home (English)
/ru/buy                      → Buy catalog
/ru/rent                     → Rent catalog
/ru/property/[slug]          → Property details
/ru/analytics                → Analytics dashboard
/ru/about                    → About page
/ru/services                 → Services overview
/ru/services/[slug]          → Service detail
/ru/journal                  → Blog listing
/ru/journal/[slug]           → Blog article
/ru/careers                  → Careers
/ru/contact                  → Contact
/ru/privacy-policy           → Privacy
/ru/terms                    → Terms
```

## 📝 Adding a New Property

Edit `data/properties.json`:

```json
{
  "id": "7",
  "slug": "new-property",
  "title": {
    "en": "Property Title",
    "ru": "Название"
  },
  "description": {
    "en": "Description",
    "ru": "Описание"
  },
  "price": 2500000,
  "area": 150,
  "bedrooms": 2,
  "bathrooms": 2,
  "location": "Downtown Dubai",
  "developer": "Emaar",
  "type": "Apartment",
  "status": "Ready",
  "category": "buy",
  "images": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg"
  ],
  "features": [
    "Pool",
    "Gym",
    "Parking"
  ]
}
```

## 🔧 Environment Variables

```env
# Required
SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# AmoCRM (Optional)
AMOCRM_SUBDOMAIN=your-subdomain
AMOCRM_CLIENT_ID=xxx
AMOCRM_CLIENT_SECRET=xxx
AMOCRM_ACCESS_TOKEN=xxx
AMOCRM_REFRESH_TOKEN=xxx

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_YANDEX_METRICA_ID=12345678
NEXT_PUBLIC_META_PIXEL_ID=xxx
```

## 📊 Translation Keys

Access translations in components:

```tsx
const t = useTranslations('section');
<h1>{t('key')}</h1>

// Examples:
const t = useTranslations('nav');        // Navigation
const t = useTranslations('home');       // Home page
const t = useTranslations('property');   // Property pages
const t = useTranslations('contact');    // Contact form
```

## 🎯 Common Tasks

### Update Phone Number
1. Edit `locales/en/common.json`
2. Edit `locales/ru/common.json`
3. Search for "+971" and replace

### Change Primary Color
1. Edit `tailwind.config.ts`
2. Change `primary: '#26648E'`
3. Restart dev server

### Add Team Member
1. Edit `app/[locale]/about/page.tsx`
2. Add to `teamMembers` array
3. Include: name, position, image, email, linkedin

### Update Logo
1. Replace `public/logo.svg`
2. Update `components/Navbar.tsx` if needed
3. Keep aspect ratio ~4:1 (width:height)

### Add Blog Article
1. Edit `app/[locale]/journal/page.tsx`
2. Add to `articles` array
3. Create page in `app/[locale]/journal/[slug]/page.tsx`

### Update Market Data
1. Edit `data/market.json`
2. Update: overview, areas, developers, priceTrends
3. Changes appear immediately in Analytics

## 🐛 Troubleshooting

### Build Errors
```bash
rm -rf .next
npm run build
```

### Module Not Found
```bash
npm install
```

### Images Not Loading
Check `next.config.js`:
```js
images: {
  domains: ['your-image-host.com'],
}
```

### Translations Missing
Ensure key exists in both:
- `locales/en/common.json`
- `locales/ru/common.json`

### Forms Not Submitting
1. Check browser console
2. Verify `.env.local` has AmoCRM credentials
3. Check `app/api/lead/route.ts`

## 📱 Testing URLs

```
http://localhost:3000/ru        - Home (Russian)
http://localhost:3000/en        - Home (English)
http://localhost:3000/ru/buy    - Buy catalog
```

## 🚢 Quick Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

## 📏 Component Sizes

```tsx
// Containers
max-w-7xl          // 1280px - Main content
max-w-4xl          // 896px - Narrow content
max-w-3xl          // 768px - Article width

// Spacing
py-20              // Section padding
gap-8              // Grid gaps
mb-12              // Section margins

// Rounded corners
rounded-xl         // 12px - Cards
rounded-lg         // 8px - Buttons
rounded-full       // Pills/avatars
```

## 🎨 Common Classes

```tsx
// Buttons
"px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary"

// Cards
"bg-white rounded-xl p-8 shadow-lg"

// Headings
"text-4xl font-bold text-dark mb-6"

// Text
"text-xl text-gray-600 leading-relaxed"

// Grid
"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
```

## 🔗 Useful Links

- **Local Dev:** http://localhost:3000
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **AmoCRM Docs:** https://www.amocrm.com/developers/

## 📞 Support

- **Documentation:** README.md
- **Getting Started:** GETTING_STARTED.md
- **Deployment:** DEPLOYMENT.md
- **Summary:** PROJECT_SUMMARY.md

---

## ⚡ Quick Start

```bash
# 1. Install
npm install

# 2. Configure
cp .env.local.example .env.local

# 3. Run
npm run dev

# 4. Open
http://localhost:3000/ru
```

**That's it! You're ready to go! 🚀**

