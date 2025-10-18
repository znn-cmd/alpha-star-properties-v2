'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { HiTrendingUp, HiCash, HiChartBar } from 'react-icons/hi';
import { formatNumber } from '@/lib/utils';

interface AnalyticsDashboardProps {
  overview: {
    avgPrice: number;
    volume: number;
    growth: number;
  };
  areas: Array<{
    name: string;
    avgPrice: number;
    volume: number;
    growth: number;
  }>;
  developers: Array<{
    name: string;
    properties: number;
    volume: number;
  }>;
  priceTrends: any[];
  volumeData: any[];
}

export default function AnalyticsDashboard({
  overview,
  areas,
  developers,
  priceTrends,
  volumeData,
}: AnalyticsDashboardProps) {
  const t = useTranslations('analytics');
  const tCommon = useTranslations('common');

  return (
    <div id="analytics-dashboard" className="space-y-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <HiCash size={40} className="opacity-80" />
            <div className="text-3xl font-bold">
              {formatNumber(overview.avgPrice)}
            </div>
          </div>
          <h3 className="text-lg font-semibold">{t('avgPrice')}</h3>
          <p className="text-sm opacity-80">{tCommon('aed')}/{tCommon('sqm')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-accent to-secondary rounded-xl p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <HiChartBar size={40} className="opacity-80" />
            <div className="text-3xl font-bold">
              {formatNumber(overview.volume)}
            </div>
          </div>
          <h3 className="text-lg font-semibold">{t('volume')}</h3>
          <p className="text-sm opacity-80">Transactions</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <HiTrendingUp size={40} className="opacity-80" />
            <div className="text-3xl font-bold">+{overview.growth}%</div>
          </div>
          <h3 className="text-lg font-semibold">{t('growth')}</h3>
          <p className="text-sm opacity-80">Year-over-Year</p>
        </motion.div>
      </div>

      {/* Price Trends Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-dark mb-6">{t('priceChart')}</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={priceTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Downtown Dubai"
              stroke="#26648E"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="Dubai Marina"
              stroke="#4F8FC0"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="Palm Jumeirah"
              stroke="#53D2DC"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="Business Bay"
              stroke="#FFE3B3"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Volume Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-dark mb-6">{t('volumeChart')}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={volumeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="volume" fill="#26648E" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Top Areas Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-dark mb-6">{t('topAreas')}</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Area
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Avg Price (AED/sqm)
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Volume
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Growth (%)
                </th>
              </tr>
            </thead>
            <tbody>
              {areas.map((area, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{area.name}</td>
                  <td className="py-3 px-4 text-right">
                    {formatNumber(area.avgPrice)}
                  </td>
                  <td className="py-3 px-4 text-right">
                    {formatNumber(area.volume)}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        area.growth >= 15
                          ? 'bg-green-100 text-green-700'
                          : area.growth >= 10
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      +{area.growth}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Top Developers Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-dark mb-6">{t('topDevelopers')}</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Developer
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Properties
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Sales Volume
                </th>
              </tr>
            </thead>
            <tbody>
              {developers.map((dev, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{dev.name}</td>
                  <td className="py-3 px-4 text-right">
                    {formatNumber(dev.properties)}
                  </td>
                  <td className="py-3 px-4 text-right">
                    {formatNumber(dev.volume)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

