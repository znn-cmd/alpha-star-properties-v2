'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaCheckCircle,
  FaChartBar,
  FaCamera,
  FaVideo,
  FaCube,
  FaLightbulb,
  FaShieldAlt,
  FaBolt,
  FaUsers,
  FaClipboardCheck,
  FaBuilding,
  FaTrophy,
} from 'react-icons/fa';
import marketData from '@/data/market.json';

export default function SellPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('sell');

  const scrollToValuation = () => {
    document.getElementById('valuation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToQuickConsult = () => {
    document.getElementById('quick-consult')?.scrollIntoView({ behavior: 'smooth' });
  };

  const principlesIcons = [FaShieldAlt, FaTrophy, FaBolt];
  const advantagesIcons = [
    FaUsers,
    FaChartBar,
    FaLightbulb,
    FaBuilding,
    FaClipboardCheck,
  ];
  const marketingIcons = [FaVideo, FaCamera, FaCube];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[600px] md:h-[700px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(38, 100, 142, 0.7), rgba(79, 143, 192, 0.5)), url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070)',
        }}
      >
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">{t('hero.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToValuation}
                className="px-8 py-4 bg-[#53D2DC] text-dark font-semibold rounded-lg hover:bg-[#FFE3B3] transition-colors"
              >
                {t('hero.cta_valuation')}
              </button>
              <button
                onClick={scrollToQuickConsult}
                className="px-8 py-4 bg-white text-[#26648E] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t('hero.cta_contact')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
              {t('principles.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((index) => {
              const Icon = principlesIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                >
                  <Icon className="h-16 w-16 text-[#26648E] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-dark mb-4">
                    {t(`principles.items.${index}.title`)}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {t(`principles.items.${index}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
              {t('advantages.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2, 3, 4].map((index) => {
              const Icon = advantagesIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <Icon className="h-12 w-12 text-[#4F8FC0] mb-4" />
                  <h3 className="text-xl font-bold text-dark mb-3">
                    {t(`advantages.items.${index}.title`)}
                  </h3>
                  <p className="text-gray-600">{t(`advantages.items.${index}.description`)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#26648E] to-[#4F8FC0] text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('marketing.title')}</h2>
            <p className="text-xl text-gray-100">{t('marketing.subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((index) => {
              const Icon = marketingIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all"
                >
                  <Icon className="h-14 w-14 text-[#53D2DC] mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    {t(`marketing.items.${index}.title`)}
                  </h3>
                  <p className="text-gray-100 mb-6">
                    {t(`marketing.items.${index}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Valuation Form Section */}
      <section id="valuation-form" className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
              {t('valuation.title')}
            </h2>
            <p className="text-xl text-gray-600">{t('valuation.subtitle')}</p>
          </motion.div>

          <ValuationForm locale={locale} />
        </div>
      </section>

      {/* Quick Consult Section */}
      <section id="quick-consult" className="py-20 md:py-28 bg-gradient-to-r from-[#53D2DC] to-[#FFE3B3]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                {t('quickConsult.title')}
              </h2>
              <p className="text-lg text-gray-700">{t('quickConsult.subtitle')}</p>
            </motion.div>

            <QuickConsult locale={locale} />
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
              {t('showcase.title')}
            </h2>
            <p className="text-xl text-gray-600">{t('showcase.subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-${
                      index === 0
                        ? '1574167611186-bc946dcd8949'
                        : index === 1
                        ? '1600607687939-ce8a6c25118c'
                        : '1600607687644-c7171b42498b'
                    }?q=80&w=800)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {t(`showcase.items.${index}.title`)}
                  </h3>
                  <p className="text-gray-200 mb-4">
                    {t(`showcase.items.${index}.description`)}
                  </p>
                  <span className="text-[#53D2DC] font-medium hover:underline">
                    {t('showcase.cta')} →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Steps Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">{t('steps.title')}</h2>
            <p className="text-xl text-gray-600">{t('steps.subtitle')}</p>
          </motion.div>

          <InteractiveStepsSection />
        </div>
      </section>

      {/* Analytics Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
              {t('analytics.title')}
            </h2>
            <p className="text-xl text-gray-600">{t('analytics.subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {marketData.areas.slice(0, 3).map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-dark mb-2">{area.name}</h3>
                <div className="text-3xl font-bold text-[#26648E] mb-1">
                  {area.avgPrice.toLocaleString()} AED
                </div>
                <p className="text-sm text-gray-600">{t('analytics.avgPrice')}</p>
                <div className="mt-4 text-sm">
                  <span
                    className={`font-medium ${
                      area.growth >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {area.growth >= 0 ? '+' : ''}
                    {area.growth}%
                  </span>
                  <span className="text-gray-500 ml-2">YoY</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={`/${locale}/analytics`}
              className="inline-block px-8 py-4 bg-[#26648E] text-white font-semibold rounded-lg hover:bg-[#4F8FC0] transition-colors"
            >
              {t('analytics.cta')}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">{t('faq.title')}</h2>
          </motion.div>

          <div className="space-y-4">
            {[0, 1, 2, 3, 4].map((index) => (
              <FAQItem key={index} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#26648E] via-[#4F8FC0] to-[#53D2DC] text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('finalCta.title')}</h2>
            <p className="text-xl md:text-2xl mb-10 text-gray-100">{t('finalCta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToValuation}
                className="px-8 py-4 bg-[#FFE3B3] text-dark font-semibold rounded-lg hover:bg-white transition-colors"
              >
                {t('finalCta.cta_valuation')}
              </button>
              <button
                onClick={scrollToQuickConsult}
                className="px-8 py-4 bg-white text-[#26648E] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t('finalCta.cta_contact')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Valuation Form Component
function ValuationForm({ locale }: { locale: string }) {
  const t = useTranslations('sell.valuation');
  const [formData, setFormData] = useState({
    propertyType: '',
    location: '',
    area: '',
    name: '',
    phone: '',
    email: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Property Type: ${formData.propertyType}, Location: ${formData.location}, Area: ${formData.area} sqm`,
          page_url: window.location.href,
          source: 'Sell Page - Valuation Form',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          propertyType: '',
          location: '',
          area: '',
          name: '',
          phone: '',
          email: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl p-8 md:p-12"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('form.propertyType')}
            </label>
            <select
              value={formData.propertyType}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26648E] focus:border-transparent"
              required
            >
              <option value="">{t('form.propertyTypePlaceholder')}</option>
              {[0, 1, 2, 3, 4].map((index) => (
                <option key={index} value={t(`types.${index}`)}>
                  {t(`types.${index}`)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('form.location')}
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder={t('form.locationPlaceholder')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26648E] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('form.area')}
            </label>
            <input
              type="number"
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              placeholder={t('form.areaPlaceholder')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26648E] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('form.name')}
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t('form.namePlaceholder')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26648E] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('form.phone')}
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={t('form.phonePlaceholder')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26648E] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('form.email')}
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t('form.emailPlaceholder')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26648E] focus:border-transparent"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-6 py-4 bg-gradient-to-r from-[#26648E] to-[#4F8FC0] text-white rounded-lg hover:shadow-lg transition-all font-semibold text-lg disabled:opacity-50"
        >
          {status === 'loading' ? t('form.submitting') : t('form.submit')}
        </button>

        {status === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
            {t('form.success')}
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {t('form.error')}
          </div>
        )}
      </form>
    </motion.div>
  );
}

// Quick Consult Component
function QuickConsult({ locale }: { locale: string }) {
  const t = useTranslations('sell.quickConsult');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: `${formData.phone}@quickconsult.placeholder`,
          phone: formData.phone,
          message: 'Quick consultation request from Sell page',
          page_url: window.location.href,
          source: 'Sell Page - Quick Consult',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('form.name')}
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={t('form.namePlaceholder')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26648E] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('form.phone')}
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder={t('form.phonePlaceholder')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26648E] focus:border-transparent"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-6 py-4 bg-gradient-to-r from-[#26648E] to-[#4F8FC0] text-white rounded-lg hover:shadow-lg transition-all font-semibold disabled:opacity-50"
        >
          {status === 'loading' ? t('form.submitting') : t('form.submit')}
        </button>

        {status === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
            {t('form.success')}
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {t('form.error')}
          </div>
        )}
      </form>
    </motion.div>
  );
}

// Interactive Steps Section Component
function InteractiveStepsSection() {
  const t = useTranslations('sell.steps');
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: FaUsers,
      title: t('items.0.title'),
      description: t('items.0.description'),
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1000',
      content: {
        title: t('items.0.contentTitle'),
        text: t('items.0.contentText')
      }
    },
    {
      icon: FaChartBar,
      title: t('items.1.title'),
      description: t('items.1.description'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000',
      content: {
        title: t('items.1.contentTitle'),
        text: t('items.1.contentText')
      }
    },
    {
      icon: FaCamera,
      title: t('items.2.title'),
      description: t('items.2.description'),
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000',
      content: {
        title: t('items.2.contentTitle'),
        text: t('items.2.contentText')
      }
    },
    {
      icon: FaLightbulb,
      title: t('items.3.title'),
      description: t('items.3.description'),
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000',
      content: {
        title: t('items.3.contentTitle'),
        text: t('items.3.contentText')
      }
    },
    {
      icon: FaBuilding,
      title: t('items.4.title'),
      description: t('items.4.description'),
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1000',
      content: {
        title: t('items.4.contentTitle'),
        text: t('items.4.contentText')
      }
    },
    {
      icon: FaClipboardCheck,
      title: t('items.5.title'),
      description: t('items.5.description'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000',
      content: {
        title: t('items.5.contentTitle'),
        text: t('items.5.contentText')
      }
    },
    {
      icon: FaTrophy,
      title: t('items.6.title'),
      description: t('items.6.description'),
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1000',
      content: {
        title: t('items.6.contentTitle'),
        text: t('items.6.contentText')
      }
    },
    {
      icon: FaUsers,
      title: t('items.7.title'),
      description: t('items.7.description'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000',
      content: {
        title: t('items.7.contentTitle'),
        text: t('items.7.contentText')
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Steps Navigation */}
      <div className="mb-12">
        <div className="flex items-center justify-center overflow-x-auto pb-4">
          <div className="flex items-center space-x-8 min-w-max">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="flex flex-col items-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all ${
                    isActive 
                      ? 'bg-[#26648E] text-white' 
                      : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
                  }`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className={`text-sm font-medium transition-colors ${
                    isActive ? 'text-[#26648E]' : 'text-gray-600 group-hover:text-gray-800'
                  }`}>
                    {step.title}
                  </span>
                  {isActive && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      className="h-0.5 bg-[#26648E] mt-2"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-96 lg:h-[500px]">
            <div 
              style={{
                backgroundImage: `url(${steps[activeStep].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="w-full h-full"
              role="img"
              aria-label={steps[activeStep].title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Text Section */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
              {steps[activeStep].content.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {steps[activeStep].content.text}
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#26648E] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{activeStep + 1}</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">{t('stepCounter', { current: activeStep + 1, total: steps.length })}</p>
                <p className="font-medium text-dark">{steps[activeStep].title}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Controls */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-[#26648E] hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex items-center space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeStep === index ? 'bg-[#26648E]' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
          disabled={activeStep === steps.length - 1}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-[#26648E] hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// FAQ Item Component
function FAQItem({ index }: { index: number }) {
  const t = useTranslations('sell.faq');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-dark pr-8">
          {t(`items.${index}.question`)}
        </span>
        <span className="text-2xl text-[#26648E] flex-shrink-0">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-6 pb-5"
        >
          <p className="text-gray-600 leading-relaxed">{t(`items.${index}.answer`)}</p>
        </motion.div>
      )}
    </motion.div>
  );
}