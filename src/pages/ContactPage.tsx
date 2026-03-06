import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Mail, Clock, Car, Train, Plane, Info } from 'lucide-react';

export default function ContactPage() {
    const { t } = useTranslation();

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="pt-32 pb-24 bg-beige-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <header className="text-center mb-16">
                    <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Infos Pratiques</span>
                    <h1 className="text-5xl md:text-7xl font-display text-forest-950">{t('contact_page.title')}</h1>
                </header>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info & Form */}
                    <div className="space-y-12">
                        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-beige-200">
                            <h2 className="text-3xl font-display text-forest-950 mb-8">{t('contact_page.form_title')}</h2>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-forest-900/60 uppercase">{t('reservation.form.name')}</label>
                                        <input type="text" className="w-full bg-beige-50 border border-beige-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-forest-950" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-forest-900/60 uppercase">{t('reservation.form.email')}</label>
                                        <input type="email" className="w-full bg-beige-50 border border-beige-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-forest-950" required />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-forest-900/60 uppercase">{t('reservation.form.phone')}</label>
                                        <input type="tel" className="w-full bg-beige-50 border border-beige-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-forest-950" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-forest-900/60 uppercase">Sujet</label>
                                        <select className="w-full bg-beige-50 border border-beige-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-forest-950">
                                            <option>Demande de réservation</option>
                                            <option>Information générale</option>
                                            <option>Restaurant</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-forest-900/60 uppercase">Message</label>
                                    <textarea rows={4} className="w-full bg-beige-50 border border-beige-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-forest-950" required></textarea>
                                </div>
                                <button type="submit" className="btn-primary w-full cursor-pointer">
                                    Envoyer le message
                                </button>
                            </form>
                        </section>

                        {/* Directions */}
                        <section className="bg-forest-950 text-white p-8 md:p-12 rounded-3xl shadow-sm">
                            <h2 className="text-3xl font-display mb-8 text-gold-400">{t('contact_page.directions.title')}</h2>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <Car className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                                    <p className="opacity-80 leading-relaxed font-light">{t('contact_page.directions.car')}</p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <Train className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                                    <p className="opacity-80 leading-relaxed font-light">{t('contact_page.directions.train')}</p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <Plane className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                                    <p className="opacity-80 leading-relaxed font-light">{t('contact_page.directions.plane')}</p>
                                </li>
                            </ul>
                        </section>
                    </div>

                    {/* Contact Details & Map */}
                    <div className="space-y-12">
                        <section className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-beige-200 text-center flex flex-col items-center">
                                <Phone className="w-8 h-8 text-gold-500 mb-4" />
                                <h3 className="font-bold text-forest-950 mb-1">Téléphone</h3>
                                <a href="tel:+33565626072" className="text-forest-900/70 hover:text-gold-500 transition-colors">+33 (0)5 65 62 60 72</a>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-beige-200 text-center flex flex-col items-center">
                                <Mail className="w-8 h-8 text-gold-500 mb-4" />
                                <h3 className="font-bold text-forest-950 mb-1">Email</h3>
                                <a href="mailto:hotel-la-jonte@orange.fr" className="text-forest-900/70 hover:text-gold-500 transition-colors text-sm lg:text-base break-all">hotel-la-jonte@orange.fr</a>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-beige-200 text-center flex flex-col items-center">
                                <MapPin className="w-8 h-8 text-gold-500 mb-4" />
                                <h3 className="font-bold text-forest-950 mb-1">Adresse</h3>
                                <p className="text-forest-900/70">Les Douzes<br />12150 Peyreleau</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-beige-200 text-center flex flex-col items-center bg-beige-100">
                                <Clock className="w-8 h-8 text-gold-500 mb-4" />
                                <h3 className="font-bold text-forest-950 mb-1">Check-in / out</h3>
                                <p className="text-forest-900/70 text-sm md:text-base">Arrivée : 15h00<br />Départ : 11h00</p>
                            </div>
                        </section>

                        {/* Interactive Map */}
                        <section className="h-[400px] bg-beige-200 rounded-3xl overflow-hidden shadow-sm border border-beige-200 relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.783456!2d3.2687!3d44.1878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDExJzE2LjEiTiAzwrAxNicwNy4zIkU!5e0!3m2!1sfr!2sfr!4v1620000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Google Maps"
                                className="grayscale group-hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </section>

                        <section className="bg-white p-8 rounded-3xl shadow-sm border border-beige-200">
                            <div className="flex items-start gap-4">
                                <Info className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                                <p className="text-forest-900/70 leading-relaxed font-light">
                                    {t('contact_page.parking')} Animaux acceptés sur demande (supplément possible selon le gabarit).
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
