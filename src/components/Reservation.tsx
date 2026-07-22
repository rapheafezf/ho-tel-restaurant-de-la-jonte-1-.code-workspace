import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Reservation() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-24 md:py-40 bg-beige-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-20">
          <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
            {t('reservation.badge')}
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-forest-950 mb-8 font-bold tracking-tighter leading-none">
            Réserver <span className="italic font-light text-forest-950/30">une Table</span>
          </h2>
          <p className="text-forest-900/60 font-light max-w-xl mx-auto text-lg leading-relaxed italic">
            {t('reservation.description')}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white p-8 md:p-20 rounded-[40px] shadow-2xl border border-forest-900/5"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-display font-bold text-forest-950 mb-4">{t('reservation.success.title')}</h3>
              <p className="text-forest-900/50 font-light italic">
                {t('reservation.success.message')}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-bold text-forest-950 uppercase tracking-widest mb-3 ml-2">{t('reservation.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-6 py-5 bg-beige-50/50 border border-forest-900/10 rounded-2xl focus:border-gold-500 outline-none transition-all text-forest-950 font-medium"
                    placeholder={t('reservation.form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[11px] font-bold text-forest-950 uppercase tracking-widest mb-3 ml-2">{t('reservation.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-6 py-5 bg-beige-50/50 border border-forest-900/10 rounded-2xl focus:border-gold-500 outline-none transition-all text-forest-950 font-medium"
                    placeholder={t('reservation.form.emailPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-[11px] font-bold text-forest-950 uppercase tracking-widest mb-3 ml-2">{t('reservation.form.date')}</label>
                  <input
                    type="date"
                    id="date"
                    required
                    className="w-full px-6 py-5 bg-beige-50/50 border border-forest-900/10 rounded-2xl focus:border-gold-500 outline-none transition-all text-forest-950 font-medium"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-[11px] font-bold text-forest-950 uppercase tracking-widest mb-3 ml-2">{t('reservation.form.time')}</label>
                  <select
                    id="time"
                    required
                    className="w-full px-6 py-5 bg-beige-50/50 border border-forest-900/10 rounded-2xl focus:border-gold-500 outline-none transition-all text-forest-950 font-medium appearance-none"
                  >
                    <option value="">{t('reservation.form.timeSelect')}</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-[11px] font-bold text-forest-950 uppercase tracking-widest mb-3 ml-2">{t('reservation.form.guests')}</label>
                  <select
                    id="guests"
                    required
                    className="w-full px-6 py-5 bg-beige-50/50 border border-forest-900/10 rounded-2xl focus:border-gold-500 outline-none transition-all text-forest-950 font-medium appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>
                        {num} {num > 1 ? t('reservation.form.guestsSelectMore') : t('reservation.form.guestsSelectOne')}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[11px] font-bold text-forest-950 uppercase tracking-widest mb-3 ml-2">{t('reservation.form.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-6 py-5 bg-beige-50/50 border border-forest-900/10 rounded-2xl focus:border-gold-500 outline-none transition-all text-forest-950 font-medium"
                    placeholder={t('reservation.form.phonePlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-bold text-forest-950 uppercase tracking-widest mb-3 ml-2">{t('reservation.form.message')}</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-6 py-5 bg-beige-50/50 border border-forest-900/10 rounded-2xl focus:border-gold-500 outline-none transition-all text-forest-950 font-medium resize-none"
                  placeholder={t('reservation.form.messagePlaceholder')}
                ></textarea>
              </div>

              <div className="text-center pt-8">
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto"
                >
                  {t('reservation.form.submit')}
                </button>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
