'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Clock, Info, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';
import '../../i18n';

export default function Restaurant() {
    const { t } = useTranslation();

    const specialties = [
        { id: 'aligot', image: 'https://image.jimcdn.com/cdn-cgi/image/width=1024,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/if2d810fff414b826/version/1585560665/image.jpg' },
        { id: 'confit', image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=2048x1024:format=jpg:rotate=90/path/s094131847179d8bd/image/ic7734a75bd2c93e3/version/1585560665/image.jpg' },
        { id: 'charcuterie', image: 'https://image.jimcdn.com/cdn-cgi/image/width=656,height=10000,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/i4a3a8fceb42abbfa/version/1747124616/image.jpg' }
    ];

    const galleryImages = [
        "https://image.jimcdn.com/cdn-cgi/image/width=2048,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/ia174abe91727c5d4/version/1679995217/image.jpg",
        "https://image.jimcdn.com/cdn-cgi/image/width=2048,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/if19a7491a0f0dd6a/version/1679995217/image.jpg",
        "https://image.jimcdn.com/cdn-cgi/image/width=1920,height=400,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/ia8a47c7bf9e3fd57/version/1650376519/image.jpg",
        "https://image.jimcdn.com/cdn-cgi/image/width=2048,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/i7bf4b91abed70eab/version/1679995217/image.jpg"
    ];

    return (
        <>
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img src="https://image.jimcdn.com/cdn-cgi/image/width=2048,height=2048,fit=contain,format=jpg/app/cms/storage/image/path/s094131847179d8bd/image/if19a7491a0f0dd6a/version/1679995217/image.jpg" alt="Restaurant Terrace" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-forest-950/60" />
                <div className="relative z-10 text-center px-4">
                    <span className="text-gold-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Gastronomie</span>
                    <h1 className="text-5xl md:text-7xl font-display text-white">{t('restaurant_page.title')}</h1>
                </div>
            </section>

            <section className="py-24 bg-beige-50">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-4xl font-display text-forest-950 mb-8">{t('restaurant_page.intro_title')}</h2>
                    <p className="text-xl text-forest-900/80 leading-relaxed font-light mb-12">
                        {t('restaurant_page.intro')}
                    </p>
                    <div className="w-24 h-[1px] bg-gold-500 mx-auto"></div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <UtensilsCrossed className="w-8 h-8 text-gold-500 mx-auto mb-4" />
                        <h2 className="text-4xl font-display text-forest-950">{t('restaurant_page.specialties.title')}</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {specialties.map((item) => (
                            <div key={item.id} className="group">
                                <div className="h-64 rounded-2xl overflow-hidden mb-6">
                                    <img src={item.image} alt={t(`restaurant_page.specialties.${item.id}.name`)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <h3 className="text-2xl font-display text-forest-950 mb-3">{t(`restaurant_page.specialties.${item.id}.name`)}</h3>
                                <p className="text-forest-900/70">{t(`restaurant_page.specialties.${item.id}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-forest-950 text-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display text-gold-400 mb-6">{t('restaurant_page.menus.title')}</h2>
                        <p className="text-white/70 italic text-lg">{t('restaurant_page.menu_intro')}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-center">
                            <h3 className="text-2xl font-display mb-4">Menu du Terroir</h3>
                            <p className="text-gold-400 text-xl mb-6">{t('restaurant_page.menus.evening')}</p>
                            <ul className="text-white/70 space-y-4 mb-8">
                                <li>Assiette de charcuterie locale ou Salade au Roquefort</li>
                                <li>Aligot traditionnel & Saucisse artisanale ou Truite Meunière</li>
                                <li>Plateau de fromages affinés ou Dessert maison</li>
                            </ul>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm flex flex-col justify-center text-center">
                            <h3 className="text-2xl font-display mb-4">Demi-Pension</h3>
                            <p className="text-lg text-white/70 leading-relaxed mb-6">
                                {t('restaurant_page.menus.half_board')}
                            </p>
                            <p className="text-sm font-light text-white/50 italic">
                                Disponible pour les séjours de 2 nuits ou plus. Réservez lors de la sélection de votre chambre.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {galleryImages.map((src, idx) => (
                            <div key={idx} className={`overflow-hidden rounded-xl ${idx === 0 || idx === 3 ? 'col-span-2 row-span-2 h-[400px]' : 'h-48'}`}>
                                <img src={src} alt={`Restaurant image ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-beige-50 border-t border-beige-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white rounded-3xl p-12 shadow-sm border border-beige-200 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-forest-950/5 rounded-tr-full"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-display text-forest-950 mb-10">Informations Pratiques</h2>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-12">
                                <div className="flex items-center gap-4 text-left">
                                    <Clock className="w-8 h-8 text-gold-500 flex-shrink-0" />
                                    <p className="text-forest-900/80 max-w-[200px] leading-relaxed">
                                        {t('restaurant_page.hours')}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 text-left">
                                    <Info className="w-8 h-8 text-gold-500 flex-shrink-0" />
                                    <p className="text-forest-900/80 max-w-[200px] leading-relaxed">
                                        Sur réservation pour les clients extérieurs.
                                    </p>
                                </div>
                            </div>

                            <Link href="/contact" className="btn-primary inline-block">
                                {t('restaurant_page.cta')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
