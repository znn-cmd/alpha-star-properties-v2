const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Разрешенные домены для изображений
    // Сейчас используются локальные SVG-заглушки из /public/images/placeholders/
    // Добавьте сюда ваш CDN когда замените заглушки
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // для примеров (можно удалить)
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', // для примеров (можно удалить)
      },
      // Добавьте ваш CDN:
      // {
      //   protocol: 'https',
      //   hostname: 'your-cdn.cloudinary.com',
      // },
    ],
  },
  // Отключено для избежания TypeScript ошибок при деплое
  // experimental: {
  //   typedRoutes: true,
  // },
};

module.exports = withNextIntl(nextConfig);
