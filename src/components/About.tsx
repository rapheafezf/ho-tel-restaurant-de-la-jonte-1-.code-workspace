'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-beige-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://u.jimcdn.com/cms/o/s094131847179d8bd/img/ia9cb8df10e5d0891/1431679093/std/image.jpg"
                alt="Chambre de l'Hôtel Restaurant de la Jonte"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Decorative Label */}
            <div className="absolute top-12 -left-8 bg-gold-500 p-8 rounded-2xl shadow-xl hidden md:block">
              <span className="block text-4xl font-display font-bold text-white leading-none tracking-tighter">25</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-bold">Chambres</span>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
              Une Maison de Famille
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-forest-950 mb-10 leading-[0.9] tracking-tighter font-bold">
              Bienvenue <span className="italic font-light block mt-4 text-forest-950/40">aux Douzes</span>
            </h2>

            <div className="space-y-8 text-forest-900/70 font-light leading-relaxed text-xl">
              <p>
                Depuis 1954, la famille Vergely vous accueille dans un cadre naturel préservé, au bord de la Jonte.
              </p>
              <p>
                Notre établissement allie confort moderne et authenticité régionale pour vous offrir une parenthèse de calme absolu.
              </p>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center gap-8 border-t border-forest-900/10 pt-10">
              <div className="flex items-center gap-4">
                <span className="block text-4xl font-display font-bold text-gold-500 tracking-tighter leading-none">1954</span>
                <span className="text-[9px] w-20 leading-tight uppercase tracking-widest text-forest-950/40 font-bold">Année de Fondation</span>
              </div>
              <Link
                href="/chambres"
                className="btn-primary py-4 px-10"
              >
                Découvrir l'Hôtel
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
