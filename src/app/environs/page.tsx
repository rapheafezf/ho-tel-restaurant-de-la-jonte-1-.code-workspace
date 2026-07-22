'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Compass, Bird, Mountain, Map, Activity } from 'lucide-react';
import '../../i18n';

export default function Surroundings() {
    const { t } = useTranslation();

    const activities = [
        {
            id: 'hiking',
            icon: Compass,
            img: 'https://image.jimcdn.com/cdn-cgi/image/width=2048,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/ia7583ada3acd2e54/version/1679995217/image.jpg'
        },
        {
            id: 'vultures',
            icon: Bird,
            img: 'https://image.jimcdn.com/cdn-cgi/image/width=2048,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/i3bc4382610212473/version/1680007077/image.jpg'
        },
        {
            id: 'caves',
            icon: Mountain,
            img: 'https://image.jimcdn.com/cdn-cgi/image/width=656,height=10000,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/i988df0ec8b6f7623/version/1680004091/image.jpg'
        },
        {
            id: 'villages',
            icon: Map,
            img: 'https://image.jimcdn.com/cdn-cgi/image/width=656,height=10000,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/i46cda60786be5c02/version/1680004688/image.jpg'
        },
        {
            id: 'sports',
            icon: Activity,
            img: 'https://image.jimcdn.com/cdn-cgi/image/width=2048,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/ia7583ada3acd2e54/version/1679995217/image.jpg'
        }
    ];

    return (
        <>
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img src="https://image.jimcdn.com/cdn-cgi/image//app/cms/storage/image/path/s094131847179d8bd/image/if78263a65b8da59c/version/1585511025/image.jpg" alt="Jonte Gorges" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-forest-950/40 mix-blend-multiply" />
                <div className="relative z-10 text-center px-4">
                    <span className="text-gold-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">{t('surroundings_page.discovery_badge')}</span>
                    <h1 className="text-5xl md:text-7xl font-display text-white">{t('surroundings_page.title')}</h1>
                </div>
            </section>

            <section className="py-24 bg-beige-50">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-display text-forest-950 leading-relaxed mb-6">
                        {t('surroundings_page.intro')}
                    </h2>
                    <div className="w-24 h-[1px] bg-gold-500 mx-auto"></div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activities.map((activity, index) => {
                            const Icon = activity.icon;
                            return (
                                <motion.div
                                    key={activity.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group rounded-3xl overflow-hidden bg-white border border-beige-200 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="h-64 overflow-hidden relative">
                                        <img src={activity.img} alt={t(`surroundings_page.activities.${activity.id}.title`)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-gold-500">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-display text-forest-950 mb-3">{t(`surroundings_page.activities.${activity.id}.title`)}</h3>
                                        <p className="text-forest-900/70 mb-6 font-light leading-relaxed">
                                            {t(`surroundings_page.activities.${activity.id}.desc`)}
                                        </p>
                                        <div className="flex items-center text-gold-500 text-sm font-medium">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            {t('surroundings_page.distance_label')}{t(`surroundings_page.activities.${activity.id}.dist`)}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
