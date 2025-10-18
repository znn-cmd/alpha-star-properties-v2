import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import LeadForm from '@/components/LeadForm';
import { HiCheckCircle } from 'react-icons/hi';

const serviceKeys = ['buy', 'rent', 'sell', 'investment', 'consultation'];

export async function generateStaticParams() {
  return serviceKeys.map((slug) => ({ slug }));
}

export default function ServiceDetailPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations('services');

  if (!serviceKeys.includes(slug)) {
    notFound();
  }

  const benefits = [
    locale === 'ru' ? 'Профессиональная консультация' : 'Professional consultation',
    locale === 'ru' ? 'Индивидуальный подход' : 'Individual approach',
    locale === 'ru' ? 'Полное юридическое сопровождение' : 'Full legal support',
    locale === 'ru' ? 'Помощь с финансированием' : 'Financing assistance',
    locale === 'ru' ? 'Поддержка 24/7' : '24/7 support',
  ];

  return (
    <div className="min-h-screen bg-neutral py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h1 className="text-4xl font-bold text-dark mb-6">{t(`${slug}.title`)}</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {t(`${slug}.description`)}
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4">
              {locale === 'ru' ? 'Преимущества' : 'Benefits'}
            </h2>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <HiCheckCircle className="text-accent flex-shrink-0" size={24} />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">
                {locale === 'ru' ? 'Готовы начать?' : 'Ready to Start?'}
              </h3>
              <p className="text-lg opacity-90">
                {locale === 'ru'
                  ? 'Свяжитесь с нами для бесплатной консультации'
                  : 'Contact us for a free consultation'}
              </p>
            </div>
          </div>

          <LeadForm
            title={locale === 'ru' ? 'Получить консультацию' : 'Get Consultation'}
            subtitle={t(`${slug}.title`)}
          />
        </div>
      </div>
    </div>
  );
}

