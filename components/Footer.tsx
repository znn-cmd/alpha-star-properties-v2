'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaTelegram } from 'react-icons/fa';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const footerLinks = [
    { href: `/${locale}/buy`, label: tNav('buy') },
    { href: `/${locale}/rent`, label: tNav('rent') },
    { href: `/${locale}/services`, label: tNav('services') },
    { href: `/${locale}/journal`, label: tNav('journal') },
    { href: `/${locale}/analytics`, label: tNav('analytics') },
    { href: `/${locale}/about`, label: tNav('about') },
    { href: `/${locale}/careers`, label: tNav('careers') },
    { href: `/${locale}/contact`, label: tNav('contact') },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: FaWhatsapp, href: 'https://wa.me/', label: 'WhatsApp' },
    { icon: FaTelegram, href: 'https://t.me/', label: 'Telegram' },
  ];

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Alpha Star <span className="text-accent">Properties</span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium real estate agency in Dubai
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 opacity-0">Links</h3>
            <ul className="space-y-2">
              {footerLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('newsletter.title')}</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('newsletter.placeholder')}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-accent"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-accent text-dark rounded-lg hover:bg-accent/90 transition-colors font-medium"
              >
                {t('newsletter.button')}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">{t('copyright')}</p>
            <div className="flex gap-6">
              <Link
                href={`/${locale}/privacy-policy`}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('privacy')}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

