'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-forest-900">
        <img
          src="https://image.jimcdn.com/app/cms/image/transf/dimension=2560x1440:format=jpg/path/s094131847179d8bd/image/if78263a65b8da59c/version/1585511025/image.jpg"
          alt="Gorges de la Jonte Panorama"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-forest-950/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-beige-100" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 tracking-tight leading-tight">
            {t('hero.title')}
            <span className="block italic font-light text-white/80 mt-4 text-2xl md:text-4xl">{t('hero.subtitle')}</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 mb-16 max-w-2xl mx-auto leading-relaxed font-light"
        >
          {t('hero.welcome')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/chambres"
            className="btn-primary"
          >
            {t('hero.cta_room')}
          </Link>
          <Link
            href="/hotel"
            className="btn-secondary !bg-white/10 !text-white !border-white/20 backdrop-blur-md hover:!bg-white hover:!text-forest-950"
          >
            {t('hero.cta_table')}
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-[1px] h-20 bg-white/20 overflow-hidden relative">
          <motion.div
            animate={{ y: [0, 80] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-full h-1/2 bg-gold-400 absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
