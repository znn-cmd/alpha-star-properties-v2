import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { HiHome, HiKey, HiCash, HiTrendingUp, HiLightBulb } from 'react-icons/hi';

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('services');
  const tCommon = useTranslations('common');

  const services = [
    { key: 'buy', icon: HiHome },
    { key: 'rent', icon: HiKey },
    { key: 'sell', icon: HiCash },
    { key: 'investment', icon: HiTrendingUp },
    { key: 'consultation', icon: HiLightBulb },
  ];

  return (
    <div className="min-h-screen bg-neutral py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">{t('title')}</h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.key}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">
                  {t(`${service.key}.title`)}
                </h3>
                <p className="text-gray-600 mb-6">{t(`${service.key}.description`)}</p>
                <Link
                  href={`/${locale}/services/${service.key}`}
                  className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-medium"
                >
                  {t('learnMore')}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

