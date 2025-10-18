// Генератор заглушек для изображений
export const placeholders = {
  property: (id: number) => `/images/placeholders/property-${id}.svg`,
  team: (id: number) => `/images/placeholders/team-${id}.svg`,
  article: (id: number) => `/images/placeholders/article-${id}.svg`,
  area: (name: string) => `/images/placeholders/area-${name.toLowerCase().replace(/\s+/g, '-')}.svg`,
  hero: (page: string) => `/images/placeholders/hero-${page}.svg`,
  general: '/images/placeholders/general.svg',
};

// Функция для создания data URL заглушки
export function createPlaceholderDataUrl(
  type: 'property' | 'team' | 'article' | 'area' | 'hero' | 'general',
  text?: string
): string {
  const colors = {
    property: '#26648E',
    team: '#4F8FC0',
    article: '#53D2DC',
    area: '#26648E',
    hero: '#1A1A1A',
    general: '#E5E7EB',
  };

  const color = colors[type];
  const displayText = text || 'Изображение';

  const svg = `
    <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="${color}"/>
      <text x="400" y="300" font-family="Arial" font-size="24" fill="white" text-anchor="middle" opacity="0.7">
        ${displayText}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

