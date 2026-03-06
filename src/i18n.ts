import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    fr: {
        translation: {
            nav: {
                home: 'Accueil',
                hotel: 'L\'Hôtel',
                rooms: 'Chambres',
                restaurant: 'Restaurant',
                region: 'Région & Activités',
                offers: 'Offres & Tarifs',
                contact: 'Infos Pratiques',
                reserve: 'Réservez',
            },
            hero: {
                title: 'Hôtel Restaurant de la Jonte',
                subtitle: 'Séjournez au cœur des Gorges de la Jonte',
                welcome: 'Découvrez la nature, la détente et les saveurs régionales dans un cadre chaleureux.',
                cta_room: 'Réserver',
                cta_table: 'Découvrir l\'hôtel',
            },
            home: {
                presentation: {
                    title: 'Bienvenue dans votre parenthèse nature',
                    text: 'Depuis 1954, la famille Vergely vous accueille dans un cadre naturel exceptionnel au cœur des Gorges de la Jonte. Que vous soyez amateur de randonnée, passionné de nature ou à la recherche d\'un séjour en famille, l\'Hôtel Restaurant de la Jonte est votre camp de base idéal. Profitez de nos vues panoramiques, de notre piscine extérieure et de notre cuisine régionale authentique.',
                },
                highlights: {
                    pool: 'Piscine panoramique',
                    restaurant: 'Restaurant régional',
                    rooms: 'Chambres confortables',
                    setting: 'Cadre exceptionnel',
                    parking: 'Parking gratuit',
                    wifi: 'Wi-Fi gratuit'
                },
                rooms_preview: {
                    title: 'Repos & Confort',
                    standard: { name: 'Chambre Standard', desc: 'Douillette et essentielle. Parfaite pour un court séjour.' },
                    superior: { name: 'Chambre avec Balcon', desc: 'Réveillez-vous au son de la rivière.' },
                    family: { name: 'Chambre Familiale', desc: 'Confort spacieux pour toute la famille.' },
                    cta: 'Voir toutes les chambres',
                    view_room: 'Voir la chambre'
                },
                restaurant_teaser: {
                    title: 'Goûtez le Terroir',
                    text: 'Découvrez les saveurs authentiques de notre région. Notre chef prépare des plats généreux mettant en valeur les produits locaux, de l\'Aligot traditionnel aux Tripoux. Dégustez votre repas dans notre salle à manger ou sur la terrasse.',
                    cta: 'Découvrir nos menus'
                },
                region_teaser: {
                    title: 'Explorez les Gorges',
                    text: 'Des sentiers de randonnée, des villages pittoresques et des points de vue à couper le souffle vous attendent à quelques pas. Laissez la nature vous inspirer.',
                    cta: 'Explorer les activités'
                },
                reviews: {
                    title: 'Ce que disent nos hôtes',
                    r1: '"Un cadre magnifique et un accueil chaleureux. La piscine après une rando est un rêve !" - Sarah M.',
                    r2: '"Excellente cuisine régionale et des chambres très propres et confortables. Nous reviendrons." - Jean-Luc P.'
                },
                direct_booking: {
                    title: 'Garantie du Meilleur Tarif',
                    text: 'Réservez directement sur notre site pour obtenir les meilleurs prix, des conditions flexibles et un contact direct avec l\'équipe.',
                    cta: 'Réserver maintenant'
                }
            },
            hotel_page: {
                title: 'Notre Hôtel',
                history_title: 'Notre Histoire',
                history_text: 'Depuis 1954, la famille Vergely accueille ses hôtes à bras ouverts. Notre atmosphère familiale permet à chacun de se sentir chez soi au cœur de la nature.',
                amenities_title: 'Nos Prestations',
                amenities: {
                    pool: 'Piscine extérieure en saison & grande terrasse',
                    wifi: 'Accès Wi-Fi gratuit dans tout l\'hôtel',
                    parking: 'Parking privé sur place & garage à vélos',
                    pets: 'Animaux acceptés (nous contacter)',
                    bar: 'Bar cosy et salon de détente'
                },
                pool_area: {
                    title: 'L\'Espace Piscine',
                    text: 'Détendez-vous dans notre piscine extérieure, entourée de chaises longues. Après une journée de découverte, piquez une tête tout en admirant les falaises majestueuses des Gorges de la Jonte.'
                },
                gallery_title: 'Galerie de l\'Hôtel',
                why_choose_us: {
                    title: 'Pourquoi choisir notre hôtel ?',
                    p1: 'Un accueil familial qui vous fait vous sentir chez vous.',
                    p2: 'Un emplacement imbattable dans les Gorges de la Jonte.',
                    p3: 'La commodité du tout-en-un : dormir, manger et s\'amuser.',
                    p4: 'Une expérience culinaire régionale authentique.'
                }
            },
            rooms_page: {
                title: 'Nos Chambres',
                intro: 'Simples, confortables et paisibles. Trouvez la chambre parfaite pour votre séjour dans les Gorges.',
                types: {
                    river: {
                        name: 'Chambre avec Vue Rivière',
                        specs: '🛏️ 1 Grand Lit Double | 👥 2 Personnes | 📐 18 m²',
                        desc: 'Une chambre lumineuse et aérée dotée d\'un balcon privé surplombant la rivière Jonte. Parfaite pour les couples en quête d\'une retraite tranquille.',
                        features: 'Wi-Fi gratuit, TV écran plat, Salle de bain attenante, Bureau, Sèche-cheveux.',
                    },
                    standard: {
                        name: 'Chambre Double Standard',
                        specs: '🛏️ 1 Lit double | 👥 2 Personnes | 📐 15 m²',
                        desc: 'Chambre confortable et bien aménagée donnant sur le village ou la cour.',
                        features: 'Wi-Fi gratuit, TV écran plat, Salle de bain attenante.',
                    },
                    family: {
                        name: 'Chambre Familiale',
                        specs: '🛏️ 1 Lit Double & 1 Lit Simple | 👥 3-4 Personnes | 📐 22 m²',
                        desc: 'Hébergement spacieux idéal pour les parents avec un enfant, offrant confort et tranquillité.',
                        features: 'Wi-Fi gratuit, TV écran plat, Salle de bain attenante, Ambiance calme.',
                    }
                },
                cta: 'Réserver cette chambre',
                faq: {
                    title: 'FAQ Hébergement',
                    q1: 'Quelles sont les heures d\'arrivée et de départ ?',
                    a1: 'L\'arrivée se fait à partir de 15h00, et le départ avant 11h00.',
                    q2: 'Fournissez-vous des lits bébé ?',
                    a2: 'Oui, des lits bébé sont disponibles sur demande.',
                    q3: 'Les animaux de compagnie sont-ils admis ?',
                    a3: 'Oui, les animaux de compagnie sont les bienvenus. Veuillez le mentionner lors de la réservation (un supplément peut s\'appliquer).'
                }
            },
            restaurant_page: {
                title: 'Restaurant & Terroir',
                intro_title: 'Saveurs Régionales',
                intro: 'Notre restaurant célèbre le riche patrimoine culinaire de la région. Dégustez des plats généreux et faits maison à partir d\'ingrédients locaux dans une atmosphère conviviale.',
                menu_intro: 'Nos menus changent au fil des saisons pour vous offrir le meilleur de l\'Aveyron et de la Lozère.',
                specialties: {
                    title: 'Nos Spécialités',
                    aligot: { name: 'Aligot Traditionnel', desc: 'Le plat de l\'Aubrac par excellence, filant à souhait' },
                    confit: { name: 'Confit de Canard', desc: 'Cuisse confite et pommes de terre sarladaises' },
                    charcuterie: { name: 'Charcuterie de Pays', desc: 'Sélection des producteurs partenaires' }
                },
                menus: {
                    title: 'Nos Menus',
                    evening: 'Menu du Soir (Entrée, Plat, Dessert) à partir de 25€',
                    half_board: 'Demi-pension disponible pour les clients de l\'hôtel'
                },
                hours: 'Petit-déjeuner : 7h30 - 10h00 | Dîner : 19h00 - 21h00 | Ouvert aux non-résidents sur réservation',
                cta: 'Réserver une table'
            },
            surroundings_page: {
                title: 'Explorer la Région',
                intro: 'Les Gorges de la Jonte et du Tarn offrent un terrain de jeu spectaculaire pour les amoureux de la nature.',
                activities: {
                    hiking: { title: 'Sentiers de Randonnée', desc: 'De nombreux sentiers au départ direct de l\'hôtel, adaptés à tous les niveaux.', dist: '0 km' },
                    vultures: { title: 'Maison des Vautours', desc: 'Observez ces oiseaux majestueux et leur vol incroyable.', dist: '2 km' },
                    caves: { title: 'Grottes & Géologie', desc: 'Découvrez les superbes formations de l\'Aven Armand et Dargilan.', dist: '15 km' },
                    villages: { title: 'Villages Pittoresques', desc: 'Visitez Meyrueis, Sainte-Enimie et d\'autres joyaux.', dist: '10 km' },
                    sports: { title: 'Sports de Plein Air', desc: 'Canoë sur le Tarn, escalade, et via ferrata pour s\'évader.', dist: '5-20 km' }
                },
            },
            offers_page: {
                title: 'Tarifs & Offres',
                direct_booking_title: 'Pourquoi réserver en direct ?',
                direct_booking_text: 'Nous garantissons les tarifs les plus bas, l\'attribution prioritaire des chambres et des conditions flexibles.',
                rates_title: 'Tarifs à Partir De',
                rates: {
                    double: 'Double à partir de 70€',
                    superior: 'Supérieure à partir de 85€',
                    family: 'Familiale à partir de 105€'
                },
                cta: 'Voir les Disponibilités'
            },
            contact_page: {
                title: 'Contact & Accès',
                form_title: 'Envoyez-nous un message',
                directions: {
                    title: 'Comment Venir',
                    car: 'Voiture : Accès via A75 (sortie 44/47), à 30 min.',
                    train: 'Gare : Millau (25 km)',
                    plane: 'Aéroport : Montpellier ou Rodez'
                },
                parking: 'Parking gratuit sur place. Paiements : Visa, Mastercard, Chèques Vacances.',
            },
            reservation: {
                form: {
                    name: 'Nom complet',
                    email: 'Email',
                    date: 'Date',
                    time: 'Heure',
                    guests: 'Nombre de pers.',
                    phone: 'Téléphone',
                    message: 'Demandes spéciales',
                    submit: 'Envoyer la demande',
                },
            },
            footer: {
                legal: 'Mentions Légales',
                privacy: 'Confidentialité',
                cookies: 'Cookies',
                copyright: '© 2026 Hôtel Restaurant de la Jonte.',
            },
            about: { badge: 'L\'Hôtel' },
            gallery: { badge: 'Galerie', title: 'Aperçu' },
            contact: {
                badge: 'Nous contacter', title: 'Informations Pratiques', info: { address: { title: 'Adresse' }, phone: { title: 'Téléphone' }, email: { title: 'Email' }, hours: { title: 'Horaires', p1: '7j/7', p2: '' } }
            }
        }
    },
    en: {
        translation: {
            nav: {
                home: 'Home',
                hotel: 'The Hotel',
                rooms: 'Rooms',
                restaurant: 'Restaurant',
                region: 'Region & Activities',
                offers: 'Offers & Rates',
                contact: 'Practical Info',
                reserve: 'Book Now',
            },
            hero: {
                title: 'Hôtel Restaurant de la Jonte',
                subtitle: 'Stay in the heart of the Jonte Gorges',
                welcome: 'Experience nature, relaxation, and regional flavors in a warm, family-run setting.',
                cta_room: 'Book Now',
                cta_table: 'Discover the hotel',
            },
            home: {
                presentation: {
                    title: 'Welcome to Your Nature Getaway',
                    text: 'Nestled in an exceptional natural setting in the heart of the Jonte Gorges, our family-run hotel welcomes you for a rejuvenating stay. Whether you are a hiking enthusiast, a nature lover, or simply looking for a peaceful retreat with your family, the Hôtel Restaurant de la Jonte is your ideal base camp. Enjoy our panoramic views, outdoor pool, and authentic regional cuisine.',
                },
                highlights: {
                    pool: 'Panoramic Pool',
                    restaurant: 'Regional Restaurant',
                    rooms: 'Comfortable Rooms',
                    setting: 'Exceptional Setting',
                    parking: 'Free Parking',
                    wifi: 'Free Wi-Fi'
                },
                rooms_preview: {
                    title: 'Rest & Comfort',
                    standard: { name: 'Standard Room', desc: 'Cozy and essential. Perfect for a short stay.' },
                    superior: { name: 'Superior Room', desc: 'Wake up to the sound of the river.' },
                    family: { name: 'Family Room', desc: 'Spacious comfort for the whole family.' },
                    cta: 'See All Rooms',
                    view_room: 'View Room'
                },
                restaurant_teaser: {
                    title: 'Taste the Terroir',
                    text: 'Discover the authentic flavors of our region. Our chef prepares hearty, homemade dishes highlighting local products, from traditional Aligot to Tripoux. Savor your meal in our dining room or on the sunny terrace.',
                    cta: 'Discover Our Menus'
                },
                region_teaser: {
                    title: 'Explore the Jonte Gorges',
                    text: 'Hiking trails, picturesque villages, and breathtaking viewpoints await you just steps from the hotel. Let nature inspire you.',
                    cta: 'Explore Activities'
                },
                reviews: {
                    title: 'What our guests say',
                    r1: '"A magnificent setting and a truly warm welcome. The pool after a hike is a dream!" - Sarah M.',
                    r2: '"Excellent regional food and very clean, comfortable rooms. We will be back." - Jean-Luc P.'
                },
                direct_booking: {
                    title: 'Best Rate Guarantee',
                    text: 'Book directly on our website for the best prices, flexible conditions, and direct contact with our team.',
                    cta: 'Book Now'
                }
            },
            hotel_page: {
                title: 'Our Hotel',
                history_title: 'Our Story',
                history_text: 'Since 1954, the Vergely family has welcomed guests with open arms. We pride ourselves on creating a warm, family-run atmosphere where every guest feels at home in the heart of nature.',
                amenities_title: 'Our Amenities',
                amenities: {
                    pool: 'Seasonal outdoor pool & large terrace',
                    wifi: 'Free Wi-Fi access throughout the hotel',
                    parking: 'Private on-site parking & bike garage',
                    pets: 'Pets welcome (please contact us)',
                    bar: 'Cozy bar and relaxation lounge'
                },
                pool_area: {
                    title: 'The Pool Area',
                    text: 'Relax in our pristine outdoor pool, surrounded by sun loungers. After a day of exploring, take a refreshing dip while marveling at the towering cliffs of the Jonte Gorges.'
                },
                gallery_title: 'Hotel Gallery',
                why_choose_us: {
                    title: 'Why Choose Our Hotel?',
                    p1: 'Family-run hospitality that makes you feel at home.',
                    p2: 'Unbeatable location in the Jonte Gorges.',
                    p3: 'All-in-one convenience: sleep, eat, and swim.',
                    p4: 'Authentic regional dining experience.'
                }
            },
            rooms_page: {
                title: 'Our Rooms',
                intro: 'Simple, comfortable, and peaceful. Find the perfect room for your stay in the Gorges.',
                types: {
                    river: {
                        name: 'Double Room with River View',
                        specs: '🛏️ 1 Large Double Bed | 👥 2 Guests | 📐 18 sqm',
                        desc: 'A bright and airy room featuring a private balcony overlooking the Jonte river. Perfect for couples seeking a tranquil retreat.',
                        features: 'Free Wi-Fi, Flat-screen TV, En-suite bathroom, Desk, Hairdryer.',
                    },
                    standard: {
                        name: 'Standard Double Room',
                        specs: '🛏️ 1 Double Bed | 👥 2 Guests | 📐 15 sqm',
                        desc: 'Comfortable and well-appointed room overlooking the village or courtyard.',
                        features: 'Free Wi-Fi, Flat-screen TV, En-suite bathroom.',
                    },
                    family: {
                        name: 'Family Room',
                        specs: '🛏️ 1 Double & 1 Single Bed | 👥 3-4 Guests | 📐 22 sqm',
                        desc: 'Spacious accommodation ideal for parents with a child, offering comfort and peace.',
                        features: 'Free Wi-Fi, Flat-screen TV, En-suite bathroom, Quiet ambiance.',
                    }
                },
                cta: 'Book This Room',
                faq: {
                    title: 'Accommodation FAQ',
                    q1: 'What time is check-in/check-out?',
                    a1: 'Check-in is from 3:00 PM, and check-out is by 11:00 AM.',
                    q2: 'Do you provide baby cots?',
                    a2: 'Yes, baby cots are available upon request.',
                    q3: 'Are pets allowed?',
                    a3: 'Yes, pets are welcome. Please mention them when booking (a small supplement may apply).'
                }
            },
            restaurant_page: {
                title: 'Restaurant & Terroir',
                intro_title: 'Authentic Regional Flavors',
                intro: 'Our restaurant celebrates the rich culinary heritage of the region. Enjoy generous, homemade dishes crafted from local ingredients in a convivial atmosphere.',
                menu_intro: 'Our menus change with the seasons to offer you the best of the terroir.',
                specialties: {
                    title: 'Our Specialties',
                    aligot: { name: 'Traditional Aligot', desc: 'The traditional dish from Aubrac, perfectly cheesy' },
                    confit: { name: 'Duck Confit', desc: 'Confit leg with Sarladaise-style potatoes' },
                    charcuterie: { name: 'Local Charcuterie', desc: 'Selection of cold meats from our partner producers' }
                },
                menus: {
                    title: 'Our Menus',
                    evening: 'Evening Menu (Starter, Main, Dessert) starting from €25',
                    half_board: 'Half-board available for hotel guests'
                },
                hours: 'Breakfast: 7:30 AM - 10:00 AM | Dinner: 7:00 PM - 9:00 PM | Open to external guests upon reservation',
                cta: 'Book a table'
            },
            surroundings_page: {
                title: 'Explore the Region',
                intro: 'The Jonte Gorges offer a spectacular playground for nature lovers and thrill-seekers alike.',
                activities: {
                    hiking: { title: 'Hiking Trails', desc: 'Numerous trails starting directly from the hotel, suitable for all levels.', dist: '0 km' },
                    vultures: { title: 'The Vultures', desc: 'Observe these majestic birds and their incredible flight over the gorges.', dist: '2 km' },
                    caves: { title: 'Caves & Geology', desc: 'Discover the stunning rock formations of Aven Armand and Dargilan.', dist: '15 km' },
                    villages: { title: 'Picturesque Villages', desc: 'Visit Meyrueis, Sainte-Enimie, and other historic gems of the region.', dist: '10 km' },
                    sports: { title: 'Outdoor Sports', desc: 'Canoeing on the Tarn, climbing, and via ferrata for the adventurous.', dist: '5-20 km' }
                },
            },
            offers_page: {
                title: 'Rates & Special Offers',
                direct_booking_title: 'Why book directly with us?',
                direct_booking_text: 'We guarantee the lowest available rates, priority room allocation, and the most flexible cancellation policies.',
                rates_title: 'Starting Rates',
                rates: {
                    double: 'Double Room from €70',
                    superior: 'Superior Room from €85',
                    family: 'Family Room from €105'
                },
                cta: 'Check Availability & Exact Pricing'
            },
            contact_page: {
                title: 'Contact & Location',
                form_title: 'Send us a message',
                directions: {
                    title: 'How to Get Here',
                    car: 'By Car: Access via A75 (exit 44 or 47), 30 mins away.',
                    train: 'Nearest Station: Millau (25 km)',
                    plane: 'Airport: Montpellier or Rodez'
                },
                parking: 'Free private parking on site. Accepted payments: Visa, Mastercard, Holiday Vouchers.',
            },
            reservation: {
                form: {
                    name: 'Full Name',
                    email: 'Email',
                    date: 'Date',
                    time: 'Time',
                    guests: 'Number of guests',
                    phone: 'Phone',
                    message: 'Special requests (allergies, etc.)',
                    submit: 'Confirm reservation',
                },
            },
            footer: {
                legal: 'Legal Notice',
                privacy: 'Privacy Policy',
                cookies: 'Cookie Policy',
                copyright: '© 2026 Hotel Restaurant de la Jonte.',
            },
            about: { badge: 'The Hotel' },
            gallery: { badge: 'Gallery', title: 'Experience' },
            contact: {
                badge: 'Contact', title: 'Practical Info', info: { address: { title: 'Address' }, phone: { title: 'Phone' }, email: { title: 'Email' }, hours: { title: 'Hours', p1: '7 days a week', p2: '' } }
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
