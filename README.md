# Alpha Star Properties - Premium Real Estate Website

A modern, production-ready bilingual (Russian/English) website for Alpha Star Properties, a premium real estate agency in Dubai.

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router and Server Components
- **TypeScript** - Type-safe development
- **TailwindCSS** - Modern utility-first CSS framework
- **Framer Motion** - Smooth animations
- **next-intl** - Internationalization (i18n)
- **Recharts** - Data visualization for analytics
- **jsPDF** - PDF export functionality
- **AmoCRM Integration** - Lead management

## 📁 Project Structure

```
alpha-star-properties/
├── app/
│   ├── [locale]/          # Internationalized routes
│   │   ├── page.tsx       # Home page
│   │   ├── buy/           # Property catalog (buy)
│   │   ├── rent/          # Property catalog (rent)
│   │   ├── sell/          # Sell page
│   │   ├── property/      # Property details
│   │   ├── analytics/     # Market analytics dashboard
│   │   ├── about/         # About page
│   │   ├── services/      # Services pages
│   │   ├── journal/       # Blog/articles
│   │   ├── careers/       # Careers page
│   │   ├── contact/       # Contact page
│   │   └── ...
│   ├── api/               # API routes
│   │   └── lead/          # Form submission endpoint
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── PropertyCard.tsx
│   ├── AnalyticsDashboard.tsx
│   ├── ImagePlaceholder.tsx
│   └── ...
├── lib/                   # Utilities and helpers
│   ├── utils.ts
│   ├── placeholders.ts    # Image placeholder helpers
│   ├── seo/
│   ├── crm/
│   ├── pdf/
│   └── analytics/
├── data/                  # Static data
│   ├── properties.json
│   └── market.json
├── locales/               # Translation files
│   ├── en/
│   └── ru/
├── public/                # Static assets
│   └── images/
│       └── placeholders/  # SVG image placeholders
└── Documentation files
```

## 🎨 Design System

### Color Palette (Sea Side Theme)
- **Primary**: #26648E
- **Secondary**: #4F8FC0
- **Accent**: #53D2DC
- **Light**: #FFE3B3
- **Neutral**: #F8F9FA
- **Text Dark**: #1A1A1A

### Typography
- Font: Inter (variable)
- Headings: Semibold
- Body: Regular

## 🌐 Features

### Pages
- ✅ Home (Hero, highlights, why us, stats, team, areas, testimonials)
- ✅ Buy/Rent/Sell Catalog (Filters, property grid, pagination)
- ✅ Property Details (Gallery, features, contact form, related properties)
- ✅ Market Analytics (Charts, tables, downloadable reports)
- ✅ About (Mission, values, team)
- ✅ Services (Individual service pages)
- ✅ Journal/Blog (Article listing and detail pages)
- ✅ Careers (Job listings)
- ✅ Contact (Form, map, contact info)
- ✅ Privacy Policy & Terms

### Functionality
- ✅ Bilingual support (Russian/English)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Property filtering and search
- ✅ Lead form with AmoCRM integration
- ✅ PDF export for properties and analytics
- ✅ SEO optimization with structured data
- ✅ Analytics dashboard with charts
- ✅ Image galleries with lightbox
- ✅ Smooth animations
- ✅ **SVG Image Placeholders** - Ready to replace with real photos

## 🖼️ Image Placeholders

All images are currently **SVG placeholders** for easy replacement:

### Available Placeholders
- **Property Images** (`/images/placeholders/property.svg`) - 800x600px
- **Team Photos** (`/images/placeholders/team.svg`) - 400x500px
- **Article Covers** (`/images/placeholders/article.svg`) - 800x400px
- **Area Images** (`/images/placeholders/area.svg`) - 600x400px
- **Hero Images** (`/images/placeholders/hero.svg`) - 1920x600px

### How to Replace
See detailed guide in **`IMAGES_GUIDE.md`**

Quick steps:
1. Add your images to `/public/images/`
2. Update paths in `data/properties.json` and page files
3. Or use a CDN (Cloudinary, AWS S3, etc.)

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Navigate to project:**
   ```bash
   cd "c:\Users\zaice\Desktop\alpha v2"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local` with your values.

4. **Run development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000/ru](http://localhost:3000/ru) in your browser.

5. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

See **`DEPLOYMENT.md`** for detailed deployment guide.

## 📝 Content Management

### Adding Properties

Edit `data/properties.json`:

```json
{
  "id": "7",
  "slug": "new-property",
  "title": {
    "en": "Property Title",
    "ru": "Название"
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
    "/images/placeholders/property.svg",
    "/images/placeholders/property.svg"
  ],
  "features": ["Pool", "Gym", "Parking"]
}
```

### Updating Market Data

Edit `data/market.json` to update analytics dashboard.

### Translations

Add/edit in:
- `locales/en/common.json` (English)
- `locales/ru/common.json` (Russian)

## 🔧 AmoCRM Integration

1. Get credentials from AmoCRM
2. Add to `.env.local`
3. Forms automatically submit to AmoCRM

## 📊 Analytics Dashboard

Reads from `data/market.json`. Includes:
- Price trends by area
- Sales volume charts
- Top developers table
- Top performing areas

## 🎯 SEO

- Meta tags and OG images on all pages
- Structured data (schema.org)
- Auto-generated sitemap
- Robots.txt configured

## 📱 Mobile Optimization

- Fully responsive
- Touch-friendly interfaces
- Optimized images
- Fast loading

## 📄 Documentation

- **README.md** - This file (overview)
- **GETTING_STARTED.md** - Quick start guide
- **DEPLOYMENT.md** - Deployment instructions
- **PROJECT_SUMMARY.md** - Complete project overview
- **QUICK_REFERENCE.md** - Common commands and tasks
- **IMAGES_GUIDE.md** - 📸 **Image replacement guide**

## 🎉 Ready to Use!

The website is **production-ready** with placeholder images. Simply replace the SVG placeholders with your real photos and deploy!

### Quick Checklist

- ✅ Install dependencies: `npm install`
- ✅ Configure `.env.local`
- ✅ Run dev server: `npm run dev`
- 🔲 Replace placeholder images (see `IMAGES_GUIDE.md`)
- 🔲 Update contact information
- 🔲 Add real property data
- 🔲 Configure AmoCRM
- 🔲 Deploy to Vercel

## 🌟 Что нового - Заглушки изображений!

**Все изображения заменены на профессиональные SVG-заглушки!**

✅ Сайт работает без внешних зависимостей  
✅ Быстрая загрузка  
✅ Визуально понятно где какие изображения  
✅ Легко заменить на реальные фото  

**Подробнее:**
- 🇷🇺 **`ЗАГЛУШКИ_ИЗОБРАЖЕНИЙ.md`** - на русском языке
- 🇬🇧 **`IMAGES_GUIDE.md`** - in English

**Быстрый старт:** См. **`СТАРТ.md`**

## 🆘 Support

For questions:
- Check documentation files
- Review `QUICK_REFERENCE.md` for common tasks
- See `IMAGES_GUIDE.md` for image replacement
- Email: info@alphastarproperties.ae

## 📞 Files Overview

| File | Purpose |
|------|---------|
| `README.md` | Project overview |
| `GETTING_STARTED.md` | Setup guide |
| `DEPLOYMENT.md` | Deploy instructions |
| `PROJECT_SUMMARY.md` | Complete feature list |
| `QUICK_REFERENCE.md` | Quick commands |
| `IMAGES_GUIDE.md` | **Image placeholder guide** |

---

**Built for Alpha Star Properties** 🏢✨

All images are SVG placeholders - ready for your real photos!
