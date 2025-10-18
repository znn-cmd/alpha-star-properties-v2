import marketData from '@/data/market.json';

export interface MarketOverview {
  avgPrice: number;
  volume: number;
  growth: number;
  lastUpdated: string;
}

export interface AreaData {
  name: string;
  avgPrice: number;
  volume: number;
  growth: number;
}

export interface DeveloperData {
  name: string;
  properties: number;
  volume: number;
}

export interface PriceTrend {
  month: string;
  [key: string]: number | string; // Динамические ключи для районов
}

export function getMarketOverview(): MarketOverview {
  return marketData.overview;
}

export function getAreaData(): AreaData[] {
  return marketData.areas;
}

export function getDeveloperData(): DeveloperData[] {
  return marketData.developers;
}

export function getPriceTrends(): PriceTrend[] {
  return marketData.priceTrends as PriceTrend[];
}

export function getVolumeData() {
  return marketData.volumeData;
}

