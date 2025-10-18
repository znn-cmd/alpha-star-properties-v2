import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import DownloadPDFButton from '@/components/DownloadPDFButton';
import {
  getMarketOverview,
  getAreaData,
  getDeveloperData,
  getPriceTrends,
  getVolumeData,
} from '@/lib/analytics/loadMarketData';

export default function AnalyticsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('analytics');

  const overview = getMarketOverview();
  const areas = getAreaData();
  const developers = getDeveloperData();
  const priceTrends = getPriceTrends();
  const volumeData = getVolumeData();

  return (
    <div className="min-h-screen bg-neutral py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">{t('title')}</h1>
            <p className="text-xl text-gray-600">{t('description')}</p>
          </div>
          <DownloadPDFButton type="analytics" label={t('downloadReport')} />
        </div>

        {/* Dashboard */}
        <AnalyticsDashboard
          overview={overview}
          areas={areas}
          developers={developers}
          priceTrends={priceTrends}
          volumeData={volumeData}
        />
      </div>
    </div>
  );
}

