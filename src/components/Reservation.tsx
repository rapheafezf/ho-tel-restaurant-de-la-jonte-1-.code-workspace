import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
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
    <section id="reservation" className="py-24 md:py-32 bg-zinc-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <span className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-4 block">
            {t('reservation.badge')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-900 mb-6">
            {t('reservation.title').split(' ').slice(0, -1).join(' ')} <span className="italic font-light">{t('reservation.title').split(' ').slice(-1)}</span>
          </h2>
          <p className="text-zinc-600 font-light max-w-2xl mx-auto">
            {t('reservation.description')}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 rounded-sm shadow-xl shadow-zinc-200/50 border border-zinc-100"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-gold-500/10 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-zinc-900 mb-2">{t('reservation.success.title')}</h3>
              <p className="text-zinc-600 font-light">
                {t('reservation.success.message')}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">{t('reservation.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all text-zinc-900"
                    placeholder={t('reservation.form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">{t('reservation.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all text-zinc-900"
                    placeholder={t('reservation.form.emailPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-zinc-700 mb-2">{t('reservation.form.date')}</label>
                  <input
                    type="date"
                    id="date"
                    required
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all text-zinc-900"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-zinc-700 mb-2">{t('reservation.form.time')}</label>
                  <select
                    id="time"
                    required
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all text-zinc-900"
                  >
                    <option value="">{t('reservation.form.timeSelect')}</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-zinc-700 mb-2">{t('reservation.form.guests')}</label>
                  <select
                    id="guests"
                    required
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all text-zinc-900"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>
                        {num} {num > 1 ? t('reservation.form.guestsSelectMore') : t('reservation.form.guestsSelectOne')}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">{t('reservation.form.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all text-zinc-900"
                    placeholder={t('reservation.form.phonePlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">{t('reservation.form.message')}</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all text-zinc-900 resize-none"
                  placeholder={t('reservation.form.messagePlaceholder')}
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-zinc-900 text-white font-medium tracking-wide uppercase text-sm hover:bg-gold-500 hover:text-white transition-all duration-300 rounded-sm"
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
