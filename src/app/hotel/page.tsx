'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Camera, CheckCircle2 } from 'lucide-react';
import '../../i18n';

export default function Hotel() {
    const { t } = useTranslation();

    const amenities = [
        { key: 'pool', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
        { key: 'wifi', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0' },
        { key: 'parking', icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' },
        { key: 'pets', icon: 'M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5' },
        { key: 'bar', icon: 'M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4M3 21h18' }
    ];

    const galleryImages = [
        "https://image.jimcdn.com/cdn-cgi/image/width=2048,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/i7bf4b91abed70eab/version/1679995217/image.jpg",
        "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x1024:format=jpg:rotate=90/path/s094131847179d8bd/image/ic7734a75bd2c93e3/version/1585560665/image.jpg",
        "https://image.jimcdn.com/cdn-cgi/image/width=2048,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/if19a7491a0f0dd6a/version/1679995217/image.jpg",
        "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s094131847179d8bd/image/ic81f396ff7af40c1/version/1650376519/image.jpg",
        "https://image.jimcdn.com/cdn-cgi/image/width=1920,height=400,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/ia8a47c7bf9e3fd57/version/1650376519/image.jpg",
        "https://image.jimcdn.com/cdn-cgi/image/width=2048,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/ia174abe91727c5d4/version/1679995217/image.jpg"
    ];

    return (
        <>
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img src="https://image.jimcdn.com/cdn-cgi/image/width=2048,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/i7bf4b91abed70eab/version/1679995217/image.jpg" alt="Hotel Interior" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-forest-950/50 mix-blend-multiply" />
                <div className="relative z-10 text-center px-4">
                    <span className="text-gold-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">{t('about.badge')}</span>
                    <h1 className="text-5xl md:text-7xl font-display text-white">{t('hotel_page.title')}</h1>
                </div>
            </section>

            <section className="py-24 bg-beige-50">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-4xl font-display text-forest-950 mb-8">{t('hotel_page.history_title')}</h2>
                    <p className="text-xl text-forest-900/80 leading-relaxed font-light mb-12">
                        {t('hotel_page.history_text')}
                    </p>
                    <div className="w-24 h-[1px] bg-gold-500 mx-auto"></div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display text-forest-950">{t('hotel_page.amenities_title')}</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        {amenities.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-6 border border-beige-200 rounded-2xl hover:border-gold-300 transition-colors">
                                <div className="w-16 h-16 rounded-full bg-beige-50 flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon}></path>
                                    </svg>
                                </div>
                                <p className="text-forest-950 font-medium text-sm leading-tight">{t(`hotel_page.amenities.${item.key}`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-forest-950 text-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-gold-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">{t('hotel_page.relaxation_badge')}</span>
                            <h2 className="text-4xl md:text-5xl font-display mb-8">{t('hotel_page.pool_area.title')}</h2>
                            <p className="text-xl text-white/70 leading-relaxed">
                                {t('hotel_page.pool_area.text')}
                            </p>
                        </div>
                        <div className="relative">
                            <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s094131847179d8bd/image/ic81f396ff7af40c1/version/1650376519/image.jpg" alt="Swimming Pool" className="rounded-2xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-beige-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display text-forest-950">{t('hotel_page.why_choose_us.title')}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[1, 2, 3, 4].map((num) => (
                            <div key={num} className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm border border-beige-100 hover:border-gold-300 transition-all">
                                <CheckCircle2 className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                                <p className="text-forest-900/80 text-lg">{t(`hotel_page.why_choose_us.p${num}`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <Camera className="w-8 h-8 text-gold-500 mx-auto mb-4" />
                        <h2 className="text-4xl font-display text-forest-950">{t('hotel_page.gallery_title')}</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((src, idx) => (
                            <div key={idx} className="overflow-hidden rounded-xl h-64">
                                <img src={src} alt={`Gallery image ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-pointer" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
