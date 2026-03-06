import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RoomsPage() {
    const { t } = useTranslation();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const rooms = [
        {
            id: 'river',
            type: t('rooms_page.types.river.name'),
            specs: t('rooms_page.types.river.specs'),
            desc: t('rooms_page.types.river.desc'),
            features: t('rooms_page.types.river.features'),
            images: [
                'https://image.jimcdn.com/cdn-cgi/image/width=1920,height=400,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/ia8a47c7bf9e3fd57/version/1650376519/image.jpg',
                'https://image.jimcdn.com/cdn-cgi/image/width=2048,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/if19a7491a0f0dd6a/version/1679995217/image.jpg'
            ]
        },
        {
            id: 'standard',
            type: t('rooms_page.types.standard.name'),
            specs: t('rooms_page.types.standard.specs'),
            desc: t('rooms_page.types.standard.desc'),
            features: t('rooms_page.types.standard.features'),
            images: [
                'https://image.jimcdn.com/cdn-cgi/image/width=1024,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/if2d810fff414b826/version/1585560665/image.jpg',
                'https://image.jimcdn.com/cdn-cgi/image/width=2048,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/i7bf4b91abed70eab/version/1679995217/image.jpg'
            ]
        },
        {
            id: 'family',
            type: t('rooms_page.types.family.name'),
            specs: t('rooms_page.types.family.specs'),
            desc: t('rooms_page.types.family.desc'),
            features: t('rooms_page.types.family.features'),
            images: [
                'https://image.jimcdn.com/app/cms/image/transf/dimension=2048x1024:format=jpg:rotate=90/path/s094131847179d8bd/image/ic7734a75bd2c93e3/version/1585560665/image.jpg',
                'https://image.jimcdn.com/cdn-cgi/image/width=656,height=10000,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/i4a3a8fceb42abbfa/version/1747124616/image.jpg'
            ]
        }
    ];

    const faqs = [
        { q: t('rooms_page.faq.q1'), a: t('rooms_page.faq.a1') },
        { q: t('rooms_page.faq.q2'), a: t('rooms_page.faq.a2') },
        { q: t('rooms_page.faq.q3'), a: t('rooms_page.faq.a3') },
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <img src="https://image.jimcdn.com/cdn-cgi/image/width=1920,height=400,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/ia8a47c7bf9e3fd57/version/1650376519/image.jpg" alt="Comfortable Bed" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-forest-950/40" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-display text-white mb-6">{t('rooms_page.title')}</h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
                        {t('rooms_page.intro')}
                    </p>
                </div>
            </section>

            {/* Rooms List */}
            <section className="py-24 bg-beige-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid gap-24">
                        {rooms.map((room, index) => (
                            <div key={room.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                                {/* Images */}
                                <div className="flex-1 w-full grid grid-cols-2 gap-4">
                                    <div className="col-span-2 h-80 rounded-2xl overflow-hidden">
                                        <img src={room.images[0]} alt={room.type} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="col-span-2 md:col-span-1 h-48 rounded-2xl overflow-hidden hidden md:block">
                                        <img src={room.images[1]} alt={`${room.type} details`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="col-span-2 md:col-span-1 h-48 rounded-2xl overflow-hidden hidden md:block bg-forest-900 flex items-center justify-center p-6 text-center">
                                        <p className="text-gold-400 font-display text-lg italic leading-relaxed">{room.specs}</p>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex-1 max-w-xl">
                                    <h2 className="text-4xl font-display text-forest-950 mb-6">{room.type}</h2>
                                    <p className="text-lg text-forest-900/80 mb-8 leading-relaxed font-light">
                                        {room.desc}
                                    </p>

                                    <div className="bg-white p-6 rounded-2xl mb-8 border border-beige-200">
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-forest-950 mb-4">Équipements & Vue</h3>
                                        <ul className="space-y-3">
                                            {room.features.split(', ').map((feat, i) => (
                                                <li key={i} className="flex items-center text-forest-900/70">
                                                    <div className="w-2 h-2 rounded-full bg-gold-500 mr-3"></div>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link to="/contact" className="btn-primary w-full md:w-auto text-center block">
                                        {t('rooms_page.cta')}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white border-t border-beige-200">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display text-forest-950">{t('rooms_page.faq.title')}</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-beige-200 rounded-2xl overflow-hidden bg-beige-50 transition-colors hover:border-gold-300">
                                <button
                                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <span className="font-bold text-forest-950 text-lg">{faq.q}</span>
                                    {openFaq === index ? (
                                        <Minus className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5 pt-0 text-forest-900/70 font-light leading-relaxed">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
