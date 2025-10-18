'use client';

import { useState } from 'react';
import { HiDownload } from 'react-icons/hi';
import { exportPropertyToPDF, exportAnalyticsToPDF, exportArticleToPDF } from '@/lib/pdf/export';

interface DownloadPDFButtonProps {
  type: 'property' | 'analytics' | 'article';
  data?: any;
  label: string;
  className?: string;
}

export default function DownloadPDFButton({
  type,
  data,
  label,
  className = '',
}: DownloadPDFButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      if (type === 'property' && data) {
        await exportPropertyToPDF(data.id, data.locale);
      } else if (type === 'analytics') {
        await exportAnalyticsToPDF();
      } else if (type === 'article' && data) {
        exportArticleToPDF(data);
      }
    } catch (error) {
      console.error('PDF export error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className={`inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-dark rounded-lg hover:bg-accent/90 transition-colors font-medium disabled:opacity-50 ${className}`}
    >
      <HiDownload size={20} />
      {loading ? 'Generating...' : label}
    </button>
  );
}

