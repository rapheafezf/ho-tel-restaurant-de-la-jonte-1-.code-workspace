import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  // Define features array outside the component or memoize it if it's dynamic
  const features = (t('about.features', { returnObjects: true }) as string[]);

  return (
    <section id="hotel" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="https://image.jimcdn.com/cdn-cgi/image/width=1280%2Cheight=1280%2Cfit=cover%2Cformat=jpg%2C/app/cms/storage/image/path/s094131847179d8bd/image/ifa196414fd8a9947/version/1585579973/image.jpg"
                alt="Notre Hôtel"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold-500/10 -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-4 block">
              {t('about.badge')}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 mb-8 leading-tight">
              {t('about.title').split(' ').slice(0, -1).join(' ')} <span className="italic font-light">{t('about.title').split(' ').slice(-1)}</span>
            </h2>

            <div className="space-y-6 text-zinc-600 font-light leading-relaxed">
              <p>
                {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
            </div>

            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3 text-zinc-700">
                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex items-center space-x-12 border-t border-zinc-100 pt-8">
              <div>
                <span className="block text-2xl font-serif text-zinc-900">1954</span>
                <span className="text-xs uppercase tracking-widest text-zinc-400">{t('about.stats.creation')}</span>
              </div>
              <div>
                <span className="block text-2xl font-serif text-zinc-900">25</span>
                <span className="text-xs uppercase tracking-widest text-zinc-400">{t('about.stats.rooms')}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
