'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface FilterOptions {
  type: string;
  bedrooms: string;
  location: string;
  priceRange: string;
  areaRange: string;
}

interface PropertyFilterBarProps {
  onFilter: (filters: FilterOptions) => void;
}

export default function PropertyFilterBar({ onFilter }: PropertyFilterBarProps) {
  const t = useTranslations('catalog.filters');

  const [filters, setFilters] = useState<FilterOptions>({
    type: '',
    bedrooms: '',
    location: '',
    priceRange: '',
    areaRange: '',
  });

  const propertyTypes = ['Apartment', 'Villa', 'Penthouse', 'Townhouse', 'Studio'];
  const bedroomOptions = ['Studio', '1', '2', '3', '4', '5+'];
  const locations = [
    'Downtown Dubai',
    'Dubai Marina',
    'Palm Jumeirah',
    'Business Bay',
    'Jumeirah Beach Residence',
    'Dubai Hills Estate',
    'Arabian Ranches',
  ];

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
  };

  const handleApply = () => {
    onFilter(filters);
  };

  const handleReset = () => {
    const resetFilters = {
      type: '',
      bedrooms: '',
      location: '',
      priceRange: '',
      areaRange: '',
    };
    setFilters(resetFilters);
    onFilter(resetFilters);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 mb-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('type')}
          </label>
          <select
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">All Types</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('bedrooms')}
          </label>
          <select
            value={filters.bedrooms}
            onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Any</option>
            {bedroomOptions.map((bed) => (
              <option key={bed} value={bed}>
                {bed}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('location')}
          </label>
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('price')}
          </label>
          <select
            value={filters.priceRange}
            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Any Price</option>
            <option value="0-1000000">Up to 1M AED</option>
            <option value="1000000-3000000">1M - 3M AED</option>
            <option value="3000000-5000000">3M - 5M AED</option>
            <option value="5000000-10000000">5M - 10M AED</option>
            <option value="10000000+">10M+ AED</option>
          </select>
        </div>

        {/* Area Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('area')} (sqm)
          </label>
          <select
            value={filters.areaRange}
            onChange={(e) => handleFilterChange('areaRange', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Any Size</option>
            <option value="0-100">Up to 100 sqm</option>
            <option value="100-200">100 - 200 sqm</option>
            <option value="200-400">200 - 400 sqm</option>
            <option value="400+">400+ sqm</option>
          </select>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleApply}
          className="flex-1 px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-medium"
        >
          {t('apply')}
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-200 text-dark rounded-lg hover:bg-gray-300 transition-colors font-medium"
        >
          {t('reset')}
        </button>
      </div>
    </motion.div>
  );
}

