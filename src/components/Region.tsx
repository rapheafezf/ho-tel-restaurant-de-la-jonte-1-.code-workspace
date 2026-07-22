import { motion } from 'framer-motion';
import { Map, Mountain, Bird, Camera } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Region() {
  const { t } = useTranslation();

  const activities = [
    {
      title: t('region.activities.gorges.title'),
      description: t('region.activities.gorges.desc'),
      icon: Mountain,
      image: '/images/region/gorges.jpg',
      mapsQuery: 'Gorges+de+la+Jonte',
    },
    {
      title: t('region.activities.vultures.title'),
      description: t('region.activities.vultures.desc'),
      icon: Bird,
      image: '/images/region/vautours.jpg',
      mapsQuery: 'Maison+des+vautours',
    },
    {
      title: t('region.activities.viaduct.title'),
      description: t('region.activities.viaduct.desc'),
      icon: Camera,
      image: '/images/region/viaduc.jpg',
      mapsQuery: 'Viaduc+de+Millau',
    },
    {
      title: t('region.activities.causse.title'),
      description: t('region.activities.causse.desc'),
      icon: Map,
      image: '/images/region/causse.jpg',
      mapsQuery: 'Causse+Mejean',
    },
  ];

  return (
    <section className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-24">
          <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
            {t('region.badge')}
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-forest-950 mb-8 font-bold tracking-tighter leading-none">
            Explorer <span className="italic font-light text-forest-950/30">les Environs</span>
          </h2>
          <p className="text-forest-900/60 font-light max-w-2xl mx-auto text-xl leading-relaxed italic">
            {t('region.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="relative aspect-[4/6] overflow-hidden rounded-[32px] mb-8 shadow-2xl border border-forest-900/5 bg-beige-50">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <activity.icon className="w-10 h-10 mb-4 text-gold-400" />
                    <h3 className="font-display text-2xl text-white font-bold mb-2 leading-none">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-white/60 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {activity.description}
                    </p>
                    <a 
                      href={`https://www.google.com/maps/dir/?api=1&destination=${activity.mapsQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gold-500/20 hover:bg-gold-500/40 border border-gold-500/30 text-xs font-bold uppercase tracking-wider text-gold-200 hover:text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 backdrop-blur-sm w-fit"
                    >
                      Y aller
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
