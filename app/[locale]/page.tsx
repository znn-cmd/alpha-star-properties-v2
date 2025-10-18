'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PropertyCard from '@/components/PropertyCard';
import LeadForm from '@/components/LeadForm';
import TeamCard from '@/components/TeamCard';
import {
  HiCheckCircle,
  HiUsers,
  HiOfficeBuilding,
  HiGlobe,
  HiTrendingUp,
} from 'react-icons/hi';
import properties from '@/data/properties.json';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');

  const highlightProperties = properties.filter((p) => p.category === 'buy').slice(0, 3);

  const whyUsPoints = [
    { icon: HiTrendingUp, key: 'expertise' },
    { icon: HiUsers, key: 'personal' },
    { icon: HiOfficeBuilding, key: 'exclusive' },
    { icon: HiCheckCircle, key: 'support' },
  ];

  const stats = [
    { value: '500+', label: t('about.properties') },
    { value: '1200+', label: t('about.clients') },
    { value: '10+', label: t('about.years') },
    { value: '25+', label: t('about.countries') },
  ];

  const areas = [
    { name: 'Downtown Dubai', image: '/images/placeholders/area.svg' },
    { name: 'Dubai Marina', image: '/images/placeholders/area.svg' },
    { name: 'Palm Jumeirah', image: '/images/placeholders/area.svg' },
    { name: 'Business Bay', image: '/images/placeholders/area.svg' },
    { name: 'JBR', image: '/images/placeholders/area.svg' },
    { name: 'Dubai Hills', image: '/images/placeholders/area.svg' },
  ];

  const teamMembers = [
    {
      name: 'Alexander Petrov',
      position: 'Managing Director',
      image: '/images/placeholders/team.svg',
      linkedin: '#',
      email: 'alexander@alphastar.ae',
    },
    {
      name: 'Marina Ivanova',
      position: 'Senior Property Consultant',
      image: '/images/placeholders/team.svg',
      linkedin: '#',
      email: 'marina@alphastar.ae',
    },
    {
      name: 'Dmitry Sokolov',
      position: 'Investment Advisor',
      image: '/images/placeholders/team.svg',
      linkedin: '#',
      email: 'dmitry@alphastar.ae',
    },
  ];

  const testimonials = [
    {
      name: 'Sergey K.',
      text: locale === 'ru' 
        ? 'Отличная команда! Помогли купить квартиру в Downtown Dubai. Все прошло быстро и профессионально.'
        : 'Excellent team! Helped me buy an apartment in Downtown Dubai. Everything went quickly and professionally.',
      rating: 5,
    },
    {
      name: 'Elena M.',
      text: locale === 'ru'
        ? 'Благодарю Alpha Star Properties за помощь в поиске виллы на Palm Jumeirah. Очень довольна результатом!'
        : 'Thank you Alpha Star Properties for helping me find a villa on Palm Jumeirah. Very happy with the result!',
      rating: 5,
    },
  ];

  return (
    <div className="bg-neutral">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/placeholders/hero.svg"
            alt="Dubai Skyline"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{t('hero.subtitle')}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block px-8 py-4 bg-accent text-dark rounded-lg hover:bg-accent/90 transition-colors text-lg font-semibold"
          >
            {t('hero.cta')}
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark mb-4">{t('highlights.title')}</h2>
          <p className="text-xl text-gray-600">{t('highlights.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightProperties.map((property) => (
            <PropertyCard key={property.id} property={property} locale={locale} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href={`/${locale}/buy`}
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-semibold"
          >
            {tCommon('viewAll')}
          </Link>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-dark text-center mb-12">{t('whyUs.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={point.key} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">
                    {t(`whyUs.${point.key}.title`)}
                  </h3>
                  <p className="text-gray-600">{t(`whyUs.${point.key}.description`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About & Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">{t('about.title')}</h2>
            <p className="text-xl opacity-90">{t('about.description')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark mb-4">{t('team.title')}</h2>
          <p className="text-xl text-gray-600">{t('team.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-dark text-center mb-12">{t('areas.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {areas.map((area, index) => (
              <Link
                key={index}
                href={`/${locale}/buy?location=${area.name}`}
                className="relative h-48 rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold">{area.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 container-custom">
        <h2 className="text-4xl font-bold text-dark text-center mb-12">{t('testimonials.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-dark">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark mb-4">{t('finalCta.title')}</h2>
            <p className="text-xl text-gray-600">{t('finalCta.subtitle')}</p>
          </div>
          <LeadForm
            title={t('finalCta.title')}
            subtitle={t('finalCta.subtitle')}
          />
        </div>
      </section>
    </div>
  );
}

