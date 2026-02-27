import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const images = [
  { url: 'https://image.jimcdn.com/cdn-cgi/image/width=2048%2Cheight=2048%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s094131847179d8bd/image/ia174abe91727c5d4/version/1679995217/image.jpg', className: 'md:col-span-2 md:row-span-2' },
  { url: 'https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg:rotate=90/path/s094131847179d8bd/image/i5fa3bc2791ddb999/version/1585560665/image.jpg', className: '' },
  { url: 'https://image.jimcdn.com/cdn-cgi/image/width=2048%2Cheight=2048%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s094131847179d8bd/image/id0b7817ce0126528/version/1585560665/image.jpg', className: '' },
  { url: 'https://image.jimcdn.com/cdn-cgi/image/width=1024%2Cheight=2048%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s094131847179d8bd/image/if2d810fff414b826/version/1585560665/image.jpg', className: '' },
  { url: 'https://image.jimcdn.com/cdn-cgi/image/width=1024%2Cheight=2048%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s094131847179d8bd/image/i8b83ffe3d680ef30/version/1585560665/image.jpg', className: '' },
  { url: 'https://image.jimcdn.com/cdn-cgi/image/width=328%2Cheight=10000%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s094131847179d8bd/image/i4a3a8fceb42abbfa/version/1747124616/image.jpg', className: 'md:col-span-2' },
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
