'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Plus, Minus, ZoomIn } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Lightbox from '../../components/Lightbox';
import '../../i18n';

export default function Rooms() {
    const { t } = useTranslation();
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

    const rooms = [
        {
            id: 'river',
            type: t('rooms_page.types.river.name'),
            specs: t('rooms_page.types.river.specs'),
            desc: t('rooms_page.types.river.desc'),
            features: t('rooms_page.types.river.features'),
            images: [
                'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s094131847179d8bd/image/idd8f0fe43c8f816d/version/1650376519/image.jpg',
                'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s094131847179d8bd/image/id7ee0e9484ce2523/version/1650376519/image.jpg'
            ]
        },
        {
            id: 'standard',
            type: t('rooms_page.types.standard.name'),
            specs: t('rooms_page.types.standard.specs'),
            desc: t('rooms_page.types.standard.desc'),
            features: t('rooms_page.types.standard.features'),
            images: [
                'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s094131847179d8bd/image/i85fa10438ae911c2/version/1650376519/image.jpg',
                'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s094131847179d8bd/image/idd8f0fe43c8f816d/version/1650376519/image.jpg'
            ]
        },
        {
            id: 'family',
            type: t('rooms_page.types.family.name'),
            specs: t('rooms_page.types.family.specs'),
            desc: t('rooms_page.types.family.desc'),
            features: t('rooms_page.types.family.features'),
            images: [
                'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s094131847179d8bd/image/i3a8ee678d8dac99f/version/1650376519/image.jpg',
                'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s094131847179d8bd/image/i85fa10438ae911c2/version/1650376519/image.jpg'
            ]
        }
    ];

    const faqs = [
        { q: t('rooms_page.faq.q1'), a: t('rooms_page.faq.a1') },
        { q: t('rooms_page.faq.q2'), a: t('rooms_page.faq.a2') },
        { q: t('rooms_page.faq.q3'), a: t('rooms_page.faq.a3') },
    ];

    return (
        <>
            {lightbox && (
                <Lightbox
                    images={lightbox.images}
                    startIndex={lightbox.index}
                    onClose={() => setLightbox(null)}
                />
            )}

            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <img
                    src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s094131847179d8bd/image/ia8a47c7bf9e3fd57/version/1650376519/image.jpg"
                    alt="Chambres"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-forest-950/40" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-display text-white mb-6">{t('rooms_page.title')}</h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
                        {t('rooms_page.intro')}
                    </p>
                </div>
            </section>

            <section className="py-24 bg-beige-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid gap-24">
                        {rooms.map((room, index) => (
                            <motion.div
                                key={room.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
                            >
                                <div className="flex-1 w-full grid grid-cols-2 gap-4">
                                    <div
                                        className="col-span-2 h-80 rounded-2xl overflow-hidden relative group cursor-zoom-in"
                                        onClick={() => setLightbox({ images: room.images, index: 0 })}
                                    >
                                        <img
                                            src={room.images[0]}
                                            alt={room.type}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                            <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-xl" />
                                        </div>
                                    </div>

                                    <div
                                        className="col-span-2 md:col-span-1 h-48 rounded-2xl overflow-hidden hidden md:block relative group cursor-zoom-in"
                                        onClick={() => setLightbox({ images: room.images, index: 1 })}
                                    >
                                        <img
                                            src={room.images[1]}
                                            alt={`${room.type} details`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                            <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-xl" />
                                        </div>
                                    </div>

                                    <div className="col-span-2 md:col-span-1 h-48 rounded-2xl overflow-hidden hidden md:flex bg-forest-900 items-center justify-center p-6 text-center">
                                        <p className="text-gold-400 font-display text-lg italic leading-relaxed">{room.specs}</p>
                                    </div>
                                </div>

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

                                    <Link href="/contact" className="btn-primary w-full md:w-auto text-center block">
                                        {t('rooms_page.cta')}
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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
        </>
    );
}
