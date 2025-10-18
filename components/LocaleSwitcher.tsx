'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locales } from '@/i18n';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${currentPath}`);
  };

  return (
    <div className="flex items-center gap-2 bg-neutral rounded-full p-1">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
            locale === loc
              ? 'bg-primary text-white'
              : 'text-dark hover:bg-gray-200'
          }`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

