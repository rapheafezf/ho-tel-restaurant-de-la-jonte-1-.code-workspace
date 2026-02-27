import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-4 block">
            {t('contact.badge')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-900 mb-6">
            {t('contact.title').split(' ')[0]} <span className="italic font-light">{t('contact.title').split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-zinc-50 rounded-full text-gold-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-zinc-900 mb-2">{t('contact.info.address.title')}</h4>
                  <p className="text-zinc-600 font-light">
                    Lieudit Les Douzes<br />
                    48150 HURES-LA-PARADE
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-zinc-50 rounded-full text-gold-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-zinc-900 mb-2">{t('contact.info.phone.title')}</h4>
                  <p className="text-zinc-600 font-light">
                    Hôtel : 05.65.62.60.52<br />
                    Restaurant : 05.65.62.67.82
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-zinc-50 rounded-full text-gold-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-zinc-900 mb-2">{t('contact.info.email.title')}</h4>
                  <p className="text-zinc-600 font-light">
                    hotelrestaurantlesdouzes@hotmail.fr
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-zinc-50 rounded-full text-gold-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-zinc-900 mb-2">{t('contact.info.hours.title')}</h4>
                  <p className="text-zinc-600 font-light">
                    {t('contact.info.hours.p1')}<br />
                    {t('contact.info.hours.p2')}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-100">
              <h4 className="font-serif text-xl text-zinc-900 mb-6">{t('contact.follow')}</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/hotelrestaurantlesdouzes" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-50 rounded-full text-zinc-600 hover:text-gold-500 transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full min-h-[400px] rounded-sm overflow-hidden border border-zinc-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2859.900483863481!2d3.295927315522789!3d44.20701497910609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b3a0b3b3b3b3b3%3A0x12b3a0b3b3b3b3b3!2sLes%20Douzes%2C%2048150%20Hures-la-Parade!5e0!3m2!1sfr!2sfr!4v1650000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }}
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
