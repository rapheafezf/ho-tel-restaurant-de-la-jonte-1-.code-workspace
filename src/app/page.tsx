'use client';

import Hero from '../components/Hero';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import '../i18n';

export default function Home() {
    const { t } = useTranslation();

    const highlights = [
        { key: 'pool', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
        { key: 'restaurant', icon: 'M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' },
        { key: 'rooms', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { key: 'setting', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
        { key: 'parking', icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' },
        { key: 'wifi', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0' },
    ];

    return (
        <>
            <Hero />

            <section className="py-24 bg-beige-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">{t('home.presentation.badge')}</span>
                            <h2 className="text-4xl md:text-5xl font-display text-forest-950 mb-8">{t('home.presentation.title')}</h2>
                            <p className="text-lg text-forest-900/70 leading-relaxed mb-8">
                                {t('home.presentation.text')}
                            </p>
                            <Link href="/hotel" className="btn-primary">
                                {t('nav.hotel')}
                            </Link>
                        </div>
                        <div className="order-1 md:order-2">
                            <img src="https://image.jimcdn.com/cdn-cgi/image/width=2048,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/ia174abe91727c5d4/version/1679995217/image.jpg" alt="Hotel Terrace" className="rounded-2xl shadow-xl w-full h-[500px] object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center bg-white">
                        {highlights.map((item, index) => (
                            <div key={index} className="flex flex-col items-center p-6 border border-beige-200 rounded-2xl hover:border-gold-300 hover:shadow-lg transition-all duration-300">
                                <div className="w-16 h-16 rounded-full bg-beige-100 flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon}></path>
                                    </svg>
                                </div>
                                <h3 className="font-display text-forest-950 font-bold mb-2 text-lg">{t(`home.highlights.${item.key}`).split('(')[0]}</h3>
                                {t(`home.highlights.${item.key}`).includes('(') && (
                                    <p className="text-sm text-forest-900/60 leading-relaxed">{t(`home.highlights.${item.key}`).split('(')[1].replace(')', '')}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-forest-950 text-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-gold-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">{t('nav.rooms')}</span>
                        <h2 className="text-4xl md:text-5xl font-display mb-6">{t('home.rooms_preview.title')}</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                type: 'standard',
                                image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s094131847179d8bd/image/i85fa10438ae911c2/version/1650376519/image.jpg'
                            },
                            {
                                type: 'superior',
                                image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s094131847179d8bd/image/idd8f0fe43c8f816d/version/1650376519/image.jpg'
                            },
                            {
                                type: 'family',
                                image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s094131847179d8bd/image/i3a8ee678d8dac99f/version/1650376519/image.jpg'
                            }
                        ].map(({ type, image }) => (
                            <div key={type} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors">
                                <div className="h-64 overflow-hidden relative">
                                    <img src={image} alt={type} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8 text-center">
                                    <h3 className="text-2xl font-display mb-4 text-gold-50">{t(`home.rooms_preview.${type}.name`)}</h3>
                                    <p className="text-white/60 mb-6">{t(`home.rooms_preview.${type}.desc`)}</p>
                                    <Link href="/chambres" className="text-gold-400 font-bold hover:text-white uppercase tracking-wider text-sm transition-colors cursor-pointer">
                                        {t('home.rooms_preview.view_room')} &rarr;
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <Link href="/chambres" className="btn-primary !bg-gold-500 !text-forest-950 hover:!bg-white">
                            {t('home.rooms_preview.cta')}
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-beige-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <img src="https://image.jimcdn.com/cdn-cgi/image/width=2048,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/if19a7491a0f0dd6a/version/1679995217/image.jpg" alt="Restaurant Dish" className="rounded-2xl shadow-xl w-full h-[600px] object-cover" />
                            <div className="absolute -bottom-8 -right-8 bg-gold-500 p-8 rounded-2xl hidden lg:block text-white font-display text-4xl italic shadow-2xl">
                                {t('home.restaurant_teaser.floating_label')}
                            </div>
                        </div>
                        <div>
                            <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">{t('nav.restaurant')}</span>
                            <h2 className="text-4xl md:text-5xl font-display text-forest-950 mb-8">{t('home.restaurant_teaser.title')}</h2>
                            <p className="text-lg text-forest-900/70 leading-relaxed mb-10">
                                {t('home.restaurant_teaser.text')}
                            </p>
                            <Link href="/restaurant" className="btn-primary">
                                {t('home.restaurant_teaser.cta')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">{t('nav.region')}</span>
                    <h2 className="text-4xl md:text-5xl font-display text-forest-950 mb-8">{t('home.region_teaser.title')}</h2>
                    <p className="text-lg text-forest-900/70 leading-relaxed max-w-2xl mx-auto mb-16">
                        {t('home.region_teaser.text')}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl h-[400px]">
                            <img src="https://image.jimcdn.com/cdn-cgi/image/width=2048,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/ia7583ada3acd2e54/version/1679995217/image.jpg" alt="Mountain" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="overflow-hidden rounded-2xl h-[192px]">
                            <img src="https://image.jimcdn.com/cdn-cgi/image/width=2048,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/i3bc4382610212473/version/1680007077/image.jpg" alt="Canyon" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="overflow-hidden rounded-2xl h-[192px]">
                            <img src="https://image.jimcdn.com/cdn-cgi/image/width=656,height=10000,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/i988df0ec8b6f7623/version/1680004091/image.jpg" alt="Lake" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="col-span-2 overflow-hidden rounded-2xl h-[192px]">
                            <img src="https://image.jimcdn.com/cdn-cgi/image/width=656,height=10000,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/i46cda60786be5c02/version/1680004688/image.jpg" alt="Forest" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>

                    <Link href="/environs" className="btn-secondary border border-forest-950 text-forest-950 hover:bg-forest-950 hover:text-white">
                        {t('home.region_teaser.cta')}
                    </Link>
                </div>
            </section>

            <section className="py-20 bg-forest-900 text-white">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl font-display mb-12 text-gold-400">{t('home.reviews.title')}</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 transition-transform hover:-translate-y-1">
                            <div className="text-gold-400 mb-4 text-2xl tracking-widest">★★★★★</div>
                            <p className="italic text-lg text-white/90 leading-relaxed font-light">{t('home.reviews.r1')}</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 transition-transform hover:-translate-y-1">
                            <div className="text-gold-400 mb-4 text-2xl tracking-widest">★★★★★</div>
                            <p className="italic text-lg text-white/90 leading-relaxed font-light">{t('home.reviews.r2')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gold-500">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-display text-forest-950 mb-6 font-bold">{t('home.direct_booking.title')}</h2>
                    <p className="text-xl text-forest-950/80 mb-10 max-w-2xl mx-auto leading-relaxed">{t('home.direct_booking.text')}</p>
                    <Link href="/contact" className="btn-primary !bg-forest-950 !text-white hover:!bg-white hover:!text-forest-950 border border-transparent !px-8 !py-4 !text-sm">
                        {t('home.direct_booking.cta')}
                    </Link>
                </div>
            </section>
        </>
    );
}
