'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { HiBadgeCheck } from 'react-icons/hi';
import { IoBedOutline, IoResizeOutline } from 'react-icons/io5';
import { formatPrice } from '@/lib/utils';

interface PropertyCardProps {
  property: {
    id: string;
    slug: string;
    title: { en: string; ru: string };
    description?: { en: string; ru: string };
    price: number;
    area: number;
    bedrooms: number;
    location: string;
    type: string;
    images: string[];
    category: string;
  };
  locale: string;
}

export default function PropertyCard({ property, locale }: PropertyCardProps) {
  const t = useTranslations('property');
  const tCommon = useTranslations('common');

  const title = property.title[locale as 'en' | 'ru'];
  const isPricePerYear = property.category === 'rent';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <Link href={`/${locale}/property/${property.slug}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={property.images[0]}
            alt={title}
            fill
            className="object-cover hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            {property.type}
          </div>
          {property.category === 'rent' && (
            <div className="absolute top-4 left-4 bg-accent text-dark px-3 py-1 rounded-full text-sm font-medium">
              For Rent
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/${locale}/property/${property.slug}`}>
          <h3 className="text-xl font-semibold text-dark mb-2 hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>

        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <HiBadgeCheck className="text-accent" size={18} />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <IoBedOutline size={20} />
            <span>{property.bedrooms > 0 ? `${property.bedrooms} ${t('bedrooms')}` : 'Studio'}</span>
          </div>
          <div className="flex items-center gap-1">
            <IoResizeOutline size={20} />
            <span>{property.area} {tCommon('sqm')}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <div className="text-2xl font-bold text-primary">
              {formatPrice(property.price, locale)}
            </div>
            {isPricePerYear && (
              <div className="text-xs text-gray-500">per year</div>
            )}
          </div>
          <Link
            href={`/${locale}/property/${property.slug}`}
            className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-primary transition-colors text-sm font-medium"
          >
            {t('viewDetails')}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

