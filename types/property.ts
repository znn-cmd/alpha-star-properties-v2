export interface Property {
  id: string;
  slug: string;
  title: {
    en: string;
    ru: string;
  };
  description?: {
    en: string;
    ru: string;
  };
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  location: string;
  developer: string;
  type: string;
  status: string;
  category: 'buy' | 'rent';
  images: string[];
  features: string[];
}

export interface MarketData {
  overview: {
    avgPrice: number;
    volume: number;
    growth: number;
    lastUpdated: string;
  };
  areas: Array<{
    name: string;
    avgPrice: number;
    volume: number;
    growth: number;
  }>;
  developers: Array<{
    name: string;
    properties: number;
    volume: number;
  }>;
  priceTrends: any[];
  volumeData: any[];
}

