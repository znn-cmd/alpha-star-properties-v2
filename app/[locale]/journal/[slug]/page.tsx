import { notFound } from 'next/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import DownloadPDFButton from '@/components/DownloadPDFButton';

const articles = [
  { slug: 'dubai-real-estate-trends-2024' },
  { slug: 'investing-in-dubai-property' },
  { slug: 'downtown-dubai-guide' },
];

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default function ArticlePage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const t = useTranslations('journal');

  if (!articles.find((a) => a.slug === slug)) {
    notFound();
  }

  const article = {
    slug,
    title:
      locale === 'ru'
        ? 'Тренды рынка недвижимости Дубая 2024'
        : 'Dubai Real Estate Trends 2024',
    content:
      locale === 'ru'
        ? `Рынок недвижимости Дубая продолжает демонстрировать впечатляющий рост в 2024 году. 
        
        Основные тренды включают увеличение спроса на премиальную недвижимость, рост цен в ключевых районах и растущий интерес инвесторов со всего мира.
        
        Downtown Dubai остается одним из самых привлекательных районов для инвестиций, с средней ценой за квадратный метр, превышающей 22,500 AED. Dubai Marina и Palm Jumeirah также показывают стабильный рост.
        
        Эксперты прогнозируют дальнейший рост рынка благодаря стабильной экономике ОАЭ, благоприятному налоговому климату и развитой инфраструктуре.`
        : `Dubai's real estate market continues to demonstrate impressive growth in 2024.
        
        Key trends include increased demand for premium real estate, price growth in key areas, and growing interest from investors worldwide.
        
        Downtown Dubai remains one of the most attractive areas for investment, with an average price per square meter exceeding AED 22,500. Dubai Marina and Palm Jumeirah also show stable growth.
        
        Experts predict further market growth thanks to the UAE's stable economy, favorable tax climate, and developed infrastructure.`,
    image: '/images/placeholders/article.svg',
    author: 'Alexander Petrov',
    publishedAt: '2024-10-15',
  };

  return (
    <div className="min-h-screen bg-neutral py-12">
      <div className="container-custom max-w-4xl">
        <article className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-96">
            <Image src={article.image} alt={article.title} fill className="object-cover" />
          </div>

          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>
                  {t('author')}: {article.author}
                </span>
                <span>•</span>
                <span>
                  {t('published')}: {new Date(article.publishedAt).toLocaleDateString()}
                </span>
              </div>
              <DownloadPDFButton
                type="article"
                data={article}
                label={t('downloadArticle')}
              />
            </div>

            <h1 className="text-4xl font-bold text-dark mb-8">{article.title}</h1>

            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

