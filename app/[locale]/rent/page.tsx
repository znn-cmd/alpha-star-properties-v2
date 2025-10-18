'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import PropertyCard from '@/components/PropertyCard';
import PropertyFilterBar from '@/components/PropertyFilterBar';
import properties from '@/data/properties.json';

export default function RentPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('catalog.rent');
  const tFilters = useTranslations('catalog');
  const [filteredProperties, setFilteredProperties] = useState(
    properties.filter((p) => p.category === 'rent')
  );

  const handleFilter = (filters: any) => {
    let filtered = properties.filter((p) => p.category === 'rent');

    if (filters.type) {
      filtered = filtered.filter((p) => p.type === filters.type);
    }
    if (filters.bedrooms) {
      const beds = filters.bedrooms === 'Studio' ? 0 : parseInt(filters.bedrooms);
      filtered = filtered.filter((p) => p.bedrooms === beds);
    }
    if (filters.location) {
      filtered = filtered.filter((p) => p.location === filters.location);
    }

    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen bg-neutral py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600">{t('description')}</p>
        </div>

        {/* Filters */}
        <PropertyFilterBar onFilter={handleFilter} />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {tFilters('results')}: {filteredProperties.length}
          </p>
        </div>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} locale={locale} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">{tFilters('noResults')}</p>
          </div>
        )}
      </div>
    </div>
  );
}

