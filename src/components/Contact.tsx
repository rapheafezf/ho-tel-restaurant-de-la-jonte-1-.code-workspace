import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-24">
          <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
            {t('contact.badge')}
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-forest-950 mb-8 font-bold tracking-tighter leading-none">
            Nous <span className="italic font-light text-forest-950/30">Contacter</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col items-start p-10 bg-beige-50 rounded-[32px] border border-forest-900/5 group hover:bg-forest-950 transition-colors duration-500">
                <div className="p-4 bg-white rounded-2xl text-gold-500 mb-8 shadow-sm group-hover:bg-white/10 group-hover:text-gold-400">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-display text-xl text-forest-950 font-bold mb-4 group-hover:text-white transition-colors">{t('contact.info.address.title')}</h4>
                  <p className="text-forest-950/60 font-medium group-hover:text-white/60 transition-colors leading-relaxed">
                    Lieudit Les Douzes<br />
                    48150 HURES-LA-PARADE
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start p-10 bg-beige-50 rounded-[32px] border border-forest-900/5 group hover:bg-forest-950 transition-colors duration-500">
                <div className="p-4 bg-white rounded-2xl text-gold-500 mb-8 shadow-sm group-hover:bg-white/10 group-hover:text-gold-400">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-display text-xl text-forest-950 font-bold mb-4 group-hover:text-white transition-colors">{t('contact.info.phone.title')}</h4>
                  <p className="text-forest-950/60 font-medium group-hover:text-white/60 transition-colors leading-relaxed">
                    Hôtel : 05.65.62.60.52<br />
                    Restaurant : 05.65.62.67.82
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start p-10 bg-beige-50 rounded-[32px] border border-forest-900/5 group hover:bg-forest-950 transition-colors duration-500">
                <div className="p-4 bg-white rounded-2xl text-gold-500 mb-8 shadow-sm group-hover:bg-white/10 group-hover:text-gold-400">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-display text-xl text-forest-950 font-bold mb-4 group-hover:text-white transition-colors">{t('contact.info.email.title')}</h4>
                  <p className="text-forest-950/60 font-medium group-hover:text-white/60 transition-colors leading-relaxed break-all">
                    hotellesdouzes@hotmail.fr
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start p-10 bg-beige-50 rounded-[32px] border border-forest-900/5 group hover:bg-forest-950 transition-colors duration-500">
                <div className="p-4 bg-white rounded-2xl text-gold-500 mb-8 shadow-sm group-hover:bg-white/10 group-hover:text-gold-400">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-display text-xl text-forest-950 font-bold mb-4 group-hover:text-white transition-colors">{t('contact.info.hours.title')}</h4>
                  <p className="text-forest-950/60 font-medium group-hover:text-white/60 transition-colors leading-relaxed">
                    {t('contact.info.hours.p1')}<br />
                    {t('contact.info.hours.p2')}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center justify-between">
              <h4 className="font-display text-lg text-forest-950 font-bold uppercase tracking-widest">{t('contact.follow')}</h4>
              <a href="https://www.facebook.com/hotelrestaurantlesdouzes" target="_blank" rel="noopener noreferrer" className="p-4 bg-beige-50 rounded-2xl text-forest-950 hover:bg-gold-500 hover:text-white transition-all shadow-sm">
                <Facebook size={24} />
              </a>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-full min-h-[500px] rounded-[48px] overflow-hidden border border-forest-900/5 shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2859.900483863481!2d3.295927315522789!3d44.20701497910609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b3a0b3b3b3b3b3%3A0x12b3a0b3b3b3b3b3!2sLes%20Douzes%2C%2048150%20Hures-la-Parade!5e0!3m2!1sfr!2sfr!4v1650000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) brightness(0.9) invert(0)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
