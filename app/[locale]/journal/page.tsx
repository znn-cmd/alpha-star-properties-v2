import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';

export default function JournalPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('journal');

  const articles = [
    {
      slug: 'dubai-real-estate-trends-2024',
      title: locale === 'ru' ? 'Тренды рынка недвижимости Дубая 2024' : 'Dubai Real Estate Trends 2024',
      excerpt: locale === 'ru' 
        ? 'Анализ текущих тенденций и прогнозы развития рынка недвижимости в Дубае'
        : 'Analysis of current trends and forecasts for the Dubai real estate market',
      image: '/images/placeholders/article.svg',
      author: 'Alexander Petrov',
      publishedAt: '2024-10-15',
    },
    {
      slug: 'investing-in-dubai-property',
      title: locale === 'ru' ? 'Инвестиции в недвижимость Дубая' : 'Investing in Dubai Property',
      excerpt: locale === 'ru'
        ? 'Почему Дубай привлекает инвесторов со всего мира и как выбрать объект'
        : 'Why Dubai attracts investors worldwide and how to choose the right property',
      image: '/images/placeholders/article.svg',
      author: 'Dmitry Sokolov',
      publishedAt: '2024-10-10',
    },
    {
      slug: 'downtown-dubai-guide',
      title: locale === 'ru' ? 'Гид по Downtown Dubai' : 'Downtown Dubai Guide',
      excerpt: locale === 'ru'
        ? 'Все что нужно знать о самом престижном районе Дубая'
        : 'Everything you need to know about Dubai\'s most prestigious area',
      image: '/images/placeholders/article.svg',
      author: 'Marina Ivanova',
      publishedAt: '2024-10-05',
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${locale}/journal/${article.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-3 hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.author}</span>
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

