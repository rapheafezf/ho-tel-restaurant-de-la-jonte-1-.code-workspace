'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

type MenuTab = 'specialties' | 'traditional';

export default function Menu() {
  const { t } = useTranslation();

  const menuItems: Record<MenuTab, any[]> = {
    specialties: [
      {
        name: t('menu.items.charcuterie.name'),
        description: t('menu.items.charcuterie.desc'),
        price: '18€',
      },
      {
        name: t('menu.items.muffin.name'),
        description: t('menu.items.muffin.desc'),
        price: '14€',
      },
      {
        name: t('menu.items.aligot.name'),
        description: t('menu.items.aligot.desc'),
        price: '22€',
      },
    ],
    traditional: [
      {
        name: t('menu.items.truite.name'),
        description: t('menu.items.truite.desc'),
        price: '24€',
      },
      {
        name: t('menu.items.omelette.name'),
        description: t('menu.items.omelette.desc'),
        price: '19€',
      },
      {
        name: t('menu.items.confit.name'),
        description: t('menu.items.confit.desc'),
        price: '26€',
      },
      {
        name: t('menu.items.veal.name'),
        description: t('menu.items.veal.desc'),
        price: '25€',
      },
      {
        name: t('menu.items.tongue.name'),
        description: t('menu.items.tongue.desc'),
        price: '23€',
      },
    ],
  };

  const [activeTab, setActiveTab] = useState<MenuTab>('specialties');

  const tabs: { key: MenuTab; label: string }[] = [
    { key: 'specialties', label: t('menu.tabs.specialties') },
    { key: 'traditional', label: t('menu.tabs.traditional') },
  ];

  return (
    <section className="py-32 bg-forest-950 text-beige-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-24">
          <div>
            <span className="text-gold-400 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
              Terroir & Saveurs
            </span>
            <h2 className="font-display text-5xl md:text-7xl mb-8 leading-[0.9] tracking-tighter font-bold">
              Le <span className="italic font-light block mt-4 text-white/20">Restaurant</span>
            </h2>
            <p className="text-white/60 font-light max-w-xl text-xl leading-relaxed italic">
              "Maxime, Gilles, Cyril et leur équipe sont garants d'une tradition de terroir généreuse."
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden border-[1px] border-white/10 p-8 shadow-2xl bg-white/5 backdrop-blur-3xl">
              <img
                src="https://image.jimcdn.com/app/cms/image/transf/none/path/s094131847179d8bd/image/idf25100b870494be/version/1747125750/image.jpg"
                alt="Plat gastronomique de la Jonte"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex justify-start space-x-12 mb-16 border-b border-white/5">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-8 text-sm font-bold tracking-[0.2em] uppercase transition-all relative ${activeTab === tab.key
                ? 'text-gold-400'
                : 'text-white/30 hover:text-white'
                }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <motion.div
                  layoutId="activeTabMenu"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16"
            >
              {menuItems[activeTab].map((item, index) => (
                <div key={index} className="group cursor-default border-b border-white/5 pb-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-display font-medium text-white group-hover:text-gold-400 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xl font-display font-bold text-gold-400">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-white/40 font-light italic leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-24 text-center">
          <Link
            href="/restaurant"
            className="btn-primary"
          >
            Découvrir le Restaurant
          </Link>
        </div>
      </div>
    </section>
  );
}
