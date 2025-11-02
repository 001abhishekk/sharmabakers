export interface HeadMeta {
  title: string;
  description: string;
}

const defaultMeta: HeadMeta = {
  title: 'Sharma Bakers | Fresh Baked Goods in Kurukshetra Since 2020',
  description: 'Sharma Bakers - Kurukshetra\'s favorite bakery since 2020. Custom cakes, fresh breads, pastries, and more. Visit us at Model Town Market.',
};

export const pageMetadata: Record<string, HeadMeta> = {
  home: {
    title: 'Sharma Bakers | Fresh Cakes, Breads & Pastries in Kurukshetra Since 2020',
    description: 'Order custom birthday cakes, fresh breads, pastries & snacks from Sharma Bakers in Model Town, Kurukshetra. Call +91 89503 45254. Open daily 8 AM–9 PM.',
  },
  menu: {
    title: 'Our Menu | Fresh Cakes, Pastries & Breads | Sharma Bakers Kurukshetra',
    description: 'Browse our full menu of chocolate cakes, black forest, pineapple cakes, pastries, breads, puffs & snacks. Fresh baked daily at Sharma Bakers, Model Town Market.',
  },
  about: {
    title: 'About Sharma Bakers | Family Bakery in Kurukshetra Since 2020',
    description: 'Learn about our family-run bakery serving Kurukshetra since 2020. Quality ingredients, no preservatives, handmade with love. Visit us at Model Town Market.',
  },
  contact: {
    title: 'Contact Sharma Bakers | Order Fresh Cakes in Kurukshetra | Call Now',
    description: 'Order cakes & baked goods from Sharma Bakers, Model Town Market, Kurukshetra. Call +91 89503 45254 or WhatsApp. Open daily 8 AM–9 PM. Get directions.',
  },
  gallery: {
    title: 'Photo Gallery | Custom Cakes & Fresh Bakes | Sharma Bakers Kurukshetra',
    description: 'View our custom cake designs, birthday cakes, wedding cakes, pastries & fresh breads. Get inspired for your next order at Sharma Bakers, Kurukshetra.',
  },
};

export const updatePageMeta = (page: string): void => {
  const meta = pageMetadata[page] || defaultMeta;

  document.title = meta.title;

  let descriptionTag = document.querySelector('meta[name="description"]');
  if (!descriptionTag) {
    descriptionTag = document.createElement('meta');
    descriptionTag.setAttribute('name', 'description');
    document.head.appendChild(descriptionTag);
  }
  descriptionTag.setAttribute('content', meta.description);

  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', meta.title);

  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (!ogDescription) {
    ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    document.head.appendChild(ogDescription);
  }
  ogDescription.setAttribute('content', meta.description);

  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (!ogUrl) {
    ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    document.head.appendChild(ogUrl);
  }
  ogUrl.setAttribute('content', window.location.href);
};
