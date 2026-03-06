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
      image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s094131847179d8bd/image/i661acc03d6d46e1e/version/1679996777/image.jpg',
    },
    {
      title: t('region.activities.vultures.title'),
      description: t('region.activities.vultures.desc'),
      icon: Bird,
      image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s094131847179d8bd/image/i4ac411dd86090bcf/version/1679996778/image.jpg',
    },
    {
      title: t('region.activities.viaduct.title'),
      description: t('region.activities.viaduct.desc'),
      icon: Camera,
      image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x410:format=jpg/path/s01f6e2b109b0b431e/image/i4ac411dd86090bcf/version/1679996778/image.jpg',
    },
    {
      title: t('region.activities.causse.title'),
      description: t('region.activities.causse.desc'),
      icon: Map,
      image: 'https://u.jimcdn.com/cms/o/s1f6e2b109b0b431e/img/i37a9f7e411da7038/1432130097/std/image.jpg',
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
