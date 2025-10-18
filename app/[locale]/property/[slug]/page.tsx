import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import PropertyGallery from '@/components/PropertyGallery';
import PropertyCard from '@/components/PropertyCard';
import LeadForm from '@/components/LeadForm';
import DownloadPDFButton from '@/components/DownloadPDFButton';
import { HiBadgeCheck } from 'react-icons/hi';
import { IoBedOutline, IoResizeOutline, IoLocationOutline } from 'react-icons/io5';
import { formatPrice } from '@/lib/utils';
import properties from '@/data/properties.json';

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export default function PropertyDetailPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations('property');

  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  const title = property.title[locale as 'en' | 'ru'];
  const description = property.description?.[locale as 'en' | 'ru'];
  const relatedProperties = properties
    .filter((p) => p.id !== property.id && p.location === property.location)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-neutral py-12">
      <div className="container-custom">
        <div id={`property-${property.id}`} className="bg-white rounded-xl p-8 mb-8">
          {/* Title & Actions */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2">{title}</h1>
              <div className="flex items-center gap-2 text-gray-600">
                <IoLocationOutline size={20} />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-3xl font-bold text-primary">
                {formatPrice(property.price, locale)}
              </div>
              <DownloadPDFButton
                type="property"
                data={{ id: property.id, locale }}
                label={t('downloadPdf')}
              />
            </div>
          </div>

          {/* Gallery */}
          <PropertyGallery images={property.images} title={title} />

          {/* Key Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8 p-6 bg-neutral rounded-xl">
            <div>
              <div className="text-sm text-gray-600 mb-1">{t('bedrooms')}</div>
              <div className="text-xl font-semibold flex items-center gap-2">
                <IoBedOutline />
                {property.bedrooms > 0 ? property.bedrooms : 'Studio'}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">{t('bathrooms')}</div>
              <div className="text-xl font-semibold">{property.bathrooms}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">{t('area')}</div>
              <div className="text-xl font-semibold flex items-center gap-2">
                <IoResizeOutline />
                {property.area} sqm
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">{t('type')}</div>
              <div className="text-xl font-semibold">{property.type}</div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">{t('description')}</h2>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-bold text-dark mb-3">{t('features')}</h3>
              <ul className="space-y-2">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <HiBadgeCheck className="text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">{t('developer')}:</span>
                <span className="font-semibold">{property.developer}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">{t('status')}:</span>
                <span className="font-semibold">{property.status}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">{t('location')}:</span>
                <span className="font-semibold">{property.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <LeadForm
              title={t('contact')}
              subtitle={`${title} - ${property.location}`}
            />
          </div>
          <div className="bg-primary text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm opacity-80">Phone</div>
                <div className="text-lg font-semibold">+971 XX XXX XXXX</div>
              </div>
              <div>
                <div className="text-sm opacity-80">Email</div>
                <div className="text-lg font-semibold">info@alphastar.ae</div>
              </div>
              <div>
                <div className="text-sm opacity-80">WhatsApp</div>
                <div className="text-lg font-semibold">+971 XX XXX XXXX</div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-dark mb-8">{t('similar')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProperties.map((relatedProp) => (
                <PropertyCard key={relatedProp.id} property={relatedProp} locale={locale} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

