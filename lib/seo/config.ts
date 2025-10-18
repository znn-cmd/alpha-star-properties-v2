import { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | Alpha Star Properties',
  defaultTitle: 'Alpha Star Properties - Premium Real Estate in Dubai',
  description:
    'Alpha Star Properties - leading real estate agency in Dubai. Exclusive offers of premium properties with personal support.',
  canonical: 'https://alphastarproperties.ae',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alphastarproperties.ae',
    siteName: 'Alpha Star Properties',
    images: [
      {
        url: 'https://alphastarproperties.ae/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alpha Star Properties',
      },
    ],
  },
  twitter: {
    handle: '@alphastarprops',
    site: '@alphastarprops',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#26648E',
    },
  ],
};

export function getPropertySchema(property: any, locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.title,
    description: property.description,
    image: property.images,
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'AED',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: property.location,
      addressCountry: 'AE',
    },
  };
}

export function getArticleSchema(article: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    image: article.image,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Alpha Star Properties',
      logo: {
        '@type': 'ImageObject',
        url: 'https://alphastarproperties.ae/logo.png',
      },
    },
  };
}

