'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Facebook } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-forest-950 text-white/60 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand & Bio */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-8 w-40 h-20 transition-transform duration-300 hover:scale-105">
              <img
                src="/images/logo.png"
                alt="Hôtel Restaurant de la Jonte Logo"
                className="w-full h-full object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6 font-light">
              Depuis 1954, notre famille vous accueille au cœur des Gorges de la Jonte pour une expérience authentique et naturelle.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/hotelrestaurantlesdouzes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-8 font-display">Navigation</h4>
            <div className="flex flex-col space-y-4 text-sm font-light">
              <Link href="/" className="hover:text-gold-400 transition-colors">{t('nav.home')}</Link>
              <Link href="/hotel" className="hover:text-gold-400 transition-colors">{t('nav.hotel')}</Link>
              <Link href="/chambres" className="hover:text-gold-400 transition-colors">{t('nav.rooms')}</Link>
              <Link href="/restaurant" className="hover:text-gold-400 transition-colors">{t('nav.restaurant')}</Link>
              <Link href="/environs" className="hover:text-gold-400 transition-colors">{t('nav.region')}</Link>
              <Link href="/offres" className="hover:text-gold-400 transition-colors">{t('nav.offers')}</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-8 font-display">Contact</h4>
            <div className="flex flex-col space-y-4 text-sm font-light">
              <p>Les Douzes<br />12150 Peyreleau, France</p>
              <a href="tel:+33565626072" className="hover:text-gold-400 transition-colors">+33 (0)5 65 62 60 72</a>
              <a href="mailto:hotel-la-jonte@orange.fr" className="hover:text-gold-400 transition-colors">hotel-la-jonte@orange.fr</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-8 font-display">Légal</h4>
            <div className="flex flex-col space-y-4 text-sm font-light">
              <Link href="/legal" className="hover:text-gold-400 transition-colors">{t('footer.legal')}</Link>
              <Link href="/legal" className="hover:text-gold-400 transition-colors">{t('footer.privacy')}</Link>
              <Link href="/legal" className="hover:text-gold-400 transition-colors">{t('footer.cookies')}</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light tracking-[0.1em] uppercase">
          <p>{t('footer.copyright')}</p>
          <p>Designed with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
