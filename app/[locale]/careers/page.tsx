'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';

export default function CareersPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('careers');
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const vacancies = [
    {
      title: locale === 'ru' ? 'Консультант по недвижимости' : 'Real Estate Consultant',
      location: 'Dubai, UAE',
      type: locale === 'ru' ? 'Полная занятость' : 'Full-time',
      description: locale === 'ru'
        ? 'Мы ищем опытного консультанта по недвижимости для работы с премиальными объектами в Дубае.'
        : 'We are looking for an experienced real estate consultant to work with premium properties in Dubai.',
    },
    {
      title: locale === 'ru' ? 'Менеджер по продажам' : 'Sales Manager',
      location: 'Dubai, UAE',
      type: locale === 'ru' ? 'Полная занятость' : 'Full-time',
      description: locale === 'ru'
        ? 'Требуется активный менеджер по продажам с опытом работы в сфере недвижимости.'
        : 'We need an active sales manager with experience in real estate.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </div>

        {/* Vacancies */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-dark mb-6">{t('openPositions')}</h2>
          {vacancies.length > 0 ? (
            <div className="space-y-4">
              {vacancies.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-dark mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span>📍 {job.location}</span>
                        <span>⏰ {job.type}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedJob(index)}
                      className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-medium"
                    >
                      {t('apply')}
                    </button>
                  </div>
                  <p className="mt-4 text-gray-600">{job.description}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl">
              <p className="text-xl text-gray-500">{t('noVacancies')}</p>
            </div>
          )}
        </div>

        {/* Application Modal */}
        {selectedJob !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl p-8 max-w-md w-full relative"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
              >
                <HiX size={24} />
              </button>
              <h3 className="text-2xl font-bold text-dark mb-6">
                {vacancies[selectedJob].title}
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={locale === 'ru' ? 'Имя' : 'Name'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="tel"
                  placeholder={locale === 'ru' ? 'Телефон' : 'Phone'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
                <textarea
                  placeholder={locale === 'ru' ? 'Сопроводительное письмо' : 'Cover Letter'}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-medium"
                >
                  {t('apply')}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

