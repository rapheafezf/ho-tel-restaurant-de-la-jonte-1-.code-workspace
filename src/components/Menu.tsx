import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

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
    <section id="restaurant" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-4 block">
            {t('menu.badge')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-900 mb-6">
            {t('menu.title').split(' ')[0]} <span className="italic font-light">{t('menu.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-zinc-600 font-light max-w-2xl mx-auto">
            {t('menu.description')}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 md:space-x-8 mb-16 border-b border-zinc-100">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-4 text-lg font-serif tracking-wide transition-colors relative ${activeTab === tab.key
                  ? 'text-zinc-900'
                  : 'text-zinc-400 hover:text-zinc-900'
                }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {menuItems[activeTab].map((item, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl md:text-2xl font-serif text-zinc-900 group-hover:text-gold-500 transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex-grow border-b border-dotted border-zinc-200 mx-4" />
                    <span className="text-xl font-medium text-zinc-900">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-zinc-500 font-light italic">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-20 text-center">
          <p className="text-zinc-400 italic mb-4">
            {t('menu.hours')}
          </p>
          <a
            href="#reservation"
            className="inline-flex items-center space-x-2 text-gold-500 hover:text-gold-600 font-medium tracking-wide uppercase text-sm transition-colors"
          >
            <span>{t('menu.cta')}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
