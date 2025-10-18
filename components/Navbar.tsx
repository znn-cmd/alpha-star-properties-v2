'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import LocaleSwitcher from './LocaleSwitcher';

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations('nav');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}/buy`, label: t('buy') },
    { href: `/${locale}/rent`, label: t('rent') },
    { href: `/${locale}/sell`, label: t('sell') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/journal`, label: t('journal') },
    { href: `/${locale}/analytics`, label: t('analytics') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/careers`, label: t('careers') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              Alpha Star <span className="text-accent">Properties</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            <LocaleSwitcher />
            <Link
              href={`/${locale}/contact`}
              className="px-5 py-2 bg-secondary text-white rounded-lg hover:bg-primary transition-colors font-medium"
            >
              {t('writeUs')}
            </Link>
            <button className="px-5 py-2 bg-accent text-dark rounded-lg hover:bg-accent/90 transition-colors font-medium">
              {t('requestCall')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-dark"
          >
            {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-dark hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <LocaleSwitcher />
                <Link
                  href={`/${locale}/contact`}
                  className="block w-full text-center px-5 py-2 bg-secondary text-white rounded-lg hover:bg-primary transition-colors font-medium"
                >
                  {t('writeUs')}
                </Link>
                <button className="w-full px-5 py-2 bg-accent text-dark rounded-lg hover:bg-accent/90 transition-colors font-medium">
                  {t('requestCall')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

