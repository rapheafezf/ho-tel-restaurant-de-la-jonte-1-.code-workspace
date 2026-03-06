'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, CalendarCheck, Tag } from 'lucide-react';
import Link from 'next/link';
import '../../i18n';

export default function Offers() {
    const { t } = useTranslation();

    const advantages = [
        { icon: ShieldCheck, title: t('offers_page.advantages_list.best_rate.title'), desc: t('offers_page.advantages_list.best_rate.desc') },
        { icon: CalendarCheck, title: t('offers_page.advantages_list.availability.title'), desc: t('offers_page.advantages_list.availability.desc') },
        { icon: Tag, title: t('offers_page.advantages_list.exclusive.title'), desc: t('offers_page.advantages_list.exclusive.desc') }
    ];

    return (
        <>
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img src="https://image.jimcdn.com/cdn-cgi/image/width=2048,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/ia174abe91727c5d4/version/1679995217/image.jpg" alt="Resort" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-forest-950/60 mix-blend-multiply" />
                <div className="relative z-10 text-center px-4">
                    <span className="text-gold-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">{t('offers_page.booking_badge')}</span>
                    <h1 className="text-5xl md:text-7xl font-display text-white">{t('offers_page.title')}</h1>
                </div>
            </section>

            <section className="py-24 bg-gold-500 text-forest-950">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display mb-6 font-bold">{t('offers_page.direct_booking_title')}</h2>
                        <p className="text-xl max-w-2xl mx-auto leading-relaxed opacity-90">
                            {t('offers_page.direct_booking_text')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {advantages.map((adv, index) => (
                            <div key={index} className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/30 hover:bg-white/30 transition-colors">
                                <adv.icon className="w-12 h-12 mx-auto mb-6 opacity-80" />
                                <h3 className="text-xl font-bold mb-3">{adv.title}</h3>
                                <p className="opacity-80">{adv.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display text-forest-950">{t('offers_page.rates_title')}</h2>
                        <p className="text-forest-900/60 mt-4 italic">{t('offers_page.rates_info')}</p>
                    </div>

                    <div className="bg-beige-50 rounded-3xl overflow-hidden border border-beige-200">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-forest-950 text-white font-display text-lg">
                                    <th className="p-6 border-b border-forest-900/10">{t('offers_page.table.type')}</th>
                                    <th className="p-6 border-b border-forest-900/10">{t('offers_page.table.low_season')}</th>
                                    <th className="p-6 border-b border-forest-900/10">{t('offers_page.table.high_season')}</th>
                                </tr>
                            </thead>
                            <tbody className="text-forest-900/80">
                                <tr className="border-b border-beige-200 hover:bg-beige-100 transition-colors">
                                    <td className="p-6 font-bold text-forest-950">{t('rooms_page.types.standard.name')}</td>
                                    <td className="p-6">{t('offers_page.table.starting_at')} 70€</td>
                                    <td className="p-6">{t('offers_page.table.starting_at')} 90€</td>
                                </tr>
                                <tr className="border-b border-beige-200 hover:bg-beige-100 transition-colors">
                                    <td className="p-6 font-bold text-forest-950">{t('rooms_page.types.river.name')}</td>
                                    <td className="p-6">{t('offers_page.table.starting_at')} 85€</td>
                                    <td className="p-6">{t('offers_page.table.starting_at')} 110€</td>
                                </tr>
                                <tr className="hover:bg-beige-100 transition-colors">
                                    <td className="p-6 font-bold text-forest-950">{t('rooms_page.types.family.name')}</td>
                                    <td className="p-6">{t('offers_page.table.starting_at')} 105€</td>
                                    <td className="p-6">{t('offers_page.table.starting_at')} 135€</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/contact" className="btn-primary inline-block">
                            {t('offers_page.cta')}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
