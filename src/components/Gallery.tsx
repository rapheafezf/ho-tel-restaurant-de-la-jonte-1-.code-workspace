import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const images = [
  { url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200', className: 'md:col-span-2 md:row-span-2' },
  { url: 'https://images.unsplash.com/photo-1551882547-ff43c33f7c45?auto=format&fit=crop&q=80&w=1200', className: '' },
  { url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1200', className: '' },
  { url: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=1200', className: '' },
  { url: 'https://images.unsplash.com/photo-1433086177607-45e073dc4a3d?auto=format&fit=crop&q=80&w=1200', className: '' },
  { url: 'https://images.unsplash.com/photo-1464093515883-ec948246abc7?auto=format&fit=crop&q=80&w=1200', className: 'md:col-span-2' },
];

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="py-24 md:py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-4 block">
            {t('gallery.badge')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-900 mb-6">
            {t('gallery.title').split(' ').slice(0, -1).join(' ')} <span className="italic font-light">{t('gallery.title').split(' ').slice(-1)}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-sm shadow-sm ${img.className}`}
            >
              <img
                src={img.url}
                alt={`${t('gallery.badge')} ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
