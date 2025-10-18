import { Metadata } from 'next';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  const title = locale === 'ru' 
    ? 'Alpha Star Properties - Премиальная недвижимость в Дубае'
    : 'Alpha Star Properties - Premium Real Estate in Dubai';
  
  const description = locale === 'ru'
    ? 'Alpha Star Properties - ведущее агентство по недвижимости в Дубае. Эксклюзивные предложения премиальной недвижимости с персональным сопровождением.'
    : 'Alpha Star Properties - leading real estate agency in Dubai. Exclusive premium property offers with personal support.';

  return {
    title,
    description,
    keywords: locale === 'ru'
      ? 'недвижимость Дубай, купить квартиру Дубай, аренда Дубай, элитная недвижимость'
      : 'Dubai real estate, property Dubai, Dubai apartments, luxury real estate',
    openGraph: {
      title,
      description,
      url: `https://alphastarproperties.ae/${locale}`,
      siteName: 'Alpha Star Properties',
      images: [
        {
          url: 'https://alphastarproperties.ae/og-image.jpg',
          width: 1200,
          height: 630,
        },
      ],
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://alphastarproperties.ae/og-image.jpg'],
    },
  };
}

