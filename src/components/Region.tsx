import { motion } from 'motion/react';
import { Map, Mountain, Bird, Camera } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Region() {
  const { t } = useTranslation();

  const activities = [
    {
      title: t('region.activities.gorges.title'),
      description: t('region.activities.gorges.desc'),
      icon: Mountain,
      image: 'https://image.jimcdn.com/cdn-cgi/image/width=1024%2Cheight=1024%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s094131847179d8bd/image/i46cda60786be5c02/version/1680004688/image.jpg',
    },
    {
      title: t('region.activities.vultures.title'),
      description: t('region.activities.vultures.desc'),
      icon: Bird,
      image: 'https://image.jimcdn.com/cdn-cgi/image/width=1024%2Cheight=1024%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s094131847179d8bd/image/i988df0ec8b6f7623/version/1680004091/image.jpg',
    },
    {
      title: t('region.activities.viaduct.title'),
      description: t('region.activities.viaduct.desc'),
      icon: Camera,
      image: 'https://image.jimcdn.com/cdn-cgi/image/width=1024%2Cheight=1024%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s094131847179d8bd/image/ia53299586b226504/version/1680084254/image.jpg',
    },
    {
      title: t('region.activities.causse.title'),
      description: t('region.activities.causse.desc'),
      icon: Map,
      image: 'https://image.jimcdn.com/cdn-cgi/image/width=1920%2Cheight=1080%2Cfit=cover%2Cformat=jpg%2C/app/cms/storage/image/path/s094131847179d8bd/image/if78263a65b8da59c/version/1585511025/image.jpg',
    },
  ];

  return (
    <section id="region" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-4 block">
            {t('region.badge')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-900 mb-6">
            {t('region.title').split(' ').slice(0, -1).join(' ')} <span className="italic font-light">{t('region.title').split(' ').slice(-1)}</span>
          </h2>
          <p className="text-zinc-600 font-light max-w-2xl mx-auto line-clamp-2 md:line-clamp-none">
            {t('region.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6 shadow-sm border border-zinc-100">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-serif text-2xl text-zinc-900 mb-2 group-hover:text-gold-500 transition-colors">
                {activity.title}
              </h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
