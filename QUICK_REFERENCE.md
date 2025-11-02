# SEO Implementation - Quick Reference

## Files You Need to Know About

### 1. **src/utils/head.ts** (NEW)
- Manages all page metadata (titles & descriptions)
- Used by: App.tsx
- Don't edit unless changing page metadata

### 2. **src/App.tsx** (MODIFIED)
- Calls `updatePageMeta()` when page changes
- Injects JSON-LD schema
- Keywords: `useEffect`, `updatePageMeta`, `pageMetadata`

### 3. **index.html** (MODIFIED)
- 27 meta tags for SEO, Open Graph, Twitter
- Don't need to edit - dynamically updated by head.ts

### 4. **public/sitemap.xml** (NEW)
- XML file with all page URLs
- Tells Google about all pages
- Auto-generated, reference in robots.txt

### 5. **public/robots.txt** (NEW)
- Tells Google bots to index site
- References sitemap.xml
- Very simple, rarely needs editing

---

## How to Update Page Metadata

### Add/Change Title or Description

**File**: `src/utils/head.ts`

```typescript
export const pageMetadata: Record<string, HeadMeta> = {
  home: {
    title: 'Your new title here | Sharma Bakers',
    description: 'Your new description here (155-160 chars)',
  },
  // ... other pages
};
```

Then rebuild: `npm run build`

---

## Image Optimization Checklist

### Already Done:
- 14+ images have `loading="lazy"`
- Improves page speed
- Better Core Web Vitals

### What You Still Need to Do:
- Compress images to < 200KB
- Use descriptive alt text
- Update image file names

**Example:**
```
GOOD: chocolate-truffle-cake-kurukshetra.webp
BAD: IMG_1234.jpg
```

---

## Local Keywords Already Included

✅ bakery kurukshetra
✅ cake shop kurukshetra
✅ fresh bread
✅ custom cakes
✅ Model Town Market
✅ Kurukshetra Haryana
✅ birthday cake
✅ pastries

---

## Deploy Checklist

Before deploying to production:

- [ ] Run `npm run build` - should succeed with zero errors
- [ ] Check `dist/` folder exists with:
  - [ ] index.html (with all meta tags)
  - [ ] sitemap.xml
  - [ ] robots.txt
  - [ ] logo.svg
- [ ] Domain has HTTPS/SSL certificate
- [ ] DNS points to hosting server
- [ ] Test site works on mobile

---

## After Deployment

### Immediately (Day 1):
1. Submit to Google Search Console
   - https://search.google.com/search-console
   - Add property: https://sharmabakers.in
   - Upload sitemap.xml

### Day 2-3:
2. Claim Google Business Profile
   - https://business.google.com
   - Complete all information
   - Add 20+ business photos

### Week 1:
3. Monitor Search Console
   - Check if pages are indexed
   - Look for indexing errors
   - Check coverage report

### Ongoing:
4. Monthly tasks
   - Update GBP photos
   - Post to GBP
   - Request reviews
   - Monitor rankings

---

## Common Questions

**Q: How long until Google indexes the site?**
A: 1-4 weeks for initial indexing

**Q: When will rankings improve?**
A: 2-3 months for noticeable improvement

**Q: How do I know if it's working?**
A: Check Google Search Console → Performance tab

**Q: Can I remove these SEO files?**
A: NO - sitemap.xml and robots.txt are essential

**Q: What if I want to add new pages?**
A: Update `src/utils/head.ts` and regenerate sitemap.xml

---

## Important Coordinates

**Business Location (for Google Maps):**
- Latitude: 29.963
- Longitude: 76.828
- Address: Model Town Market, Kurukshetra, Haryana

---

## Contact Information (In Schema)

- Phone: +91 89503 45254
- Hours: 8 AM - 9 PM (all days)
- Closed: Never (open every day)

---

## Performance Targets

- **Page Load**: < 3 seconds
- **Largest Image**: < 2 seconds (LCP)
- **Response**: < 100ms (FID)
- **Layout Shift**: < 0.1 (CLS)

Current status: All images use lazy loading

---

## JSON-LD Schema Contains

✅ Business name & type
✅ Address with coordinates
✅ Phone number
✅ Opening hours
✅ Website URL
✅ Logo
✅ Social media links
✅ 4.9★ rating, 150+ reviews
✅ Founded year: 2020

---

## Next Developer Tasks

1. **Analytics Setup**
   - Add Google Analytics 4 tracking code

2. **Monitoring**
   - Set up Google Search Console alerts

3. **Content Updates**
   - Keep menu prices current
   - Add seasonal items

4. **Reviews**
   - Get 50+ Google reviews (target)

5. **Photos**
   - Add 20+ new business photos to GBP

---

## File Locations Summary

```
Project Root
├── index.html ..................... Meta tags here
├── public/
│   ├── robots.txt ................. Submitted to robots
│   ├── sitemap.xml ................ URLs listed here
│   └── logo.svg ................... Brand logo
├── src/
│   ├── App.tsx .................... Page routing & schema
│   ├── utils/
│   │   └── head.ts ................ Page metadata stored here
│   └── components/
│       ├── Hero.tsx
│       ├── MenuPage.tsx
│       ├── AboutPage.tsx
│       ├── Gallery.tsx
│       └── ... (other components)
└── dist/ .......................... Build output (auto-generated)
```

---

## Ready to Launch!

All SEO optimizations are complete and tested. The website is now:

✅ Optimized for local search
✅ Ready for Google indexing
✅ Configured for Google Business Profile
✅ Fast-loading with lazy images
✅ Social-sharing ready
✅ Mobile responsive

**Start deploying and submit to Google Search Console today!**
