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
                reserve: 'Réserver',
            },
            hero: {
                title: 'Hôtel Restaurant de la Jonte',
                subtitle: 'Séjournez au cœur des Gorges de la Jonte',
                welcome: 'Authenticité & Nature',
                cta_room: 'Nos Chambres',
                cta_table: 'Notre Table'
            },
            home: {
                presentation: {
                    title: 'Bienvenue dans votre parenthèse nature',
                    text: 'Depuis 1954, la famille Vergely vous accueille dans un cadre naturel exceptionnel au cœur des Gorges de la Jonte. Que vous soyez amateur de randonnée, passionné de nature ou à la recherche d\'un séjour en famille, l\'Hôtel Restaurant de la Jonte est votre camp de base idéal. Profitez de nos vues panoramiques, de notre piscine extérieure et de notre cuisine régionale authentique.',
                    badge: 'Nature Chic'
                },
                about: {
                    badge: 'Une Maison de Famille',
                    title_welcome: 'Bienvenue',
                    title_at: 'aux Douzes',
                    p1: 'Depuis 1954, la famille Vergely vous accueille dans un cadre naturel préservé, au bord de la Jonte.',
                    p2: 'Notre établissement allie confort moderne et authenticité régionale pour vous offrir une parenthèse de calme absolu.',
                    rooms_label: 'Chambres',
                    foundation_label: 'Année de Fondation',
                    cta: "Découvrir l'Hôtel"
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
                    cta: 'Découvrir nos menus',
                    floating_label: 'Gastronomie Locale'
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
                title: 'Notre Maison',
                history_title: 'Un héritage familial depuis 1954',
                history_text: 'Situé au confluent de la Jonte et du Tarn, notre établissement est une escale incontournable pour les voyageurs en quête de déconnexion. Depuis trois générations, nous cultivons l\'art de recevoir avec simplicité et passion.',
                amenities_title: 'Pour un séjour parfait',
                amenities: {
                    pool: 'Piscine Extérieure (Saison)',
                    wifi: 'Wi-Fi Gratuit',
                    parking: 'Parking Privé',
                    pets: 'Animaux Bienvenus',
                    bar: 'Bar & Salon'
                },
                pool_area: {
                    title: 'La Piscine Panoramique',
                    text: 'Surplombant la vallée, notre piscine est l\'endroit idéal pour vous détendre après une journée de découverte. Calme et fraîcheur au rendez-vous.'
                },
                gallery_title: 'Galerie de l\'Hôtel',
                why_choose_us: {
                    title: 'Pourquoi choisir notre hôtel ?',
                    p1: 'Un accueil familial qui vous fait vous sentir chez vous.',
                    p2: 'Un emplacement imbattable dans les Gorges de la Jonte.',
                    p3: 'La commodité du tout-en-un : dormir, manger et s\'amuser.',
                    p4: 'Une expérience culinaire régionale authentique.'
                },
                relaxation_badge: 'Relaxation',
                amenities_badge: 'Prestations & Services'
            },
            rooms_page: {
                title: 'Nos Chambres',
                intro: 'Chaque chambre a été pensée pour vous offrir un repos bien mérité, bercé par le son de la rivière ou le calme de la vallée.',
                types: {
                    standard: {
                        name: 'Chambre Standard',
                        specs: '15m² • Vue Village • Lit Double',
                        desc: 'Le confort essentiel pour les randonneurs et les séjours de courte durée.',
                        features: ['Wi-Fi Gratuit', 'TV Écran Plat', 'Bureau', 'Salle d\'eau privative']
                    },
                    river: {
                        name: 'Chambre avec Balcon',
                        specs: '18m² • Vue Rivière & Gorges • Lit Queen Size',
                        desc: 'Profitez de votre propre balcon privatif surplombant la rivière.',
                        features: ['Balcon Privatif', 'Vue Panoramique', 'Plateau de courtoisie', 'Salle d\'eau moderne']
                    },
                    family: {
                        name: 'Chambre Familiale',
                        specs: '25m² • Espace & Détente • Lit Double + Lits Jumeaux',
                        desc: 'Un espace généreux pour les familles jusqu\'à 4 personnes.',
                        features: ['Couchages Séparés', 'Espace Salon', 'Idéal Famille', 'Vue Calme']
                    }
                },
                features_title: 'Équipements & Vue',
                cta: 'Consulter les Tarifs',
                faq: {
                    title: 'Questions Fréquentes',
                    q1: 'Quelles sont les heures de check-in et check-out ?',
                    a1: 'Les arrivées se font de 15h à 20h. Les départs doivent être effectués avant 11h.',
                    q2: 'Le petit-déjeuner est-il inclus ?',
                    a2: 'Nous proposons un petit-déjeuner buffet continental au tarif de 12€ par personne.',
                    q3: 'Acceptez-vous les animaux ?',
                    a3: 'Oui, nous acceptons les animaux de compagnie avec plaisir (un petit supplément peut s\'appliquer).'
                }
            },
            restaurant_page: {
                title: 'Restaurant & Terroir',
                intro_title: 'Saveurs Authentiques du Terroir',
                intro: 'Notre restaurant célèbre la richesse du patrimoine culinaire local. Profitez de plats généreux et "fait maison" dans une ambiance conviviale.',
                menu_intro: 'Nos menus changent selon les saisons pour vous offrir le meilleur de notre terroir.',
                specialties: {
                    title: 'Nos Spécialités',
                    aligot: { name: 'L\'Aligot Traditionnel', desc: 'La spécialité incontournable de l\'Aubrac à base de tomme fraîche' },
                    confit: { name: 'Confit de Canard', desc: 'Cuisse confite accompagnée de ses pommes de terre sarladaises' },
                    charcuterie: { name: 'Planche de Charcuterie', desc: 'Sélection d\'artisans producteurs de nos montagnes' }
                },
                menus: {
                    title: 'Nos Cartes',
                    evening: 'Menu du Soir (Entrée, Plat, Dessert) à partir de 25€',
                    half_board: 'La demi-pension est disponible pour les clients de l\'hôtel'
                },
                hours: 'Petit-déjeuner : 7h30 - 10h00 | Dîner : 19h00 - 21h00 | Ouvert aux non-résidents sur réservation',
                cta: 'Réserver une table',
                gastronomy_badge: 'Gastronomie',
                practical_info: 'Informations Pratiques',
                external_guests_note: 'Sur réservation pour les clients extérieurs.',
                menu_terroir: {
                    title: 'Menu du Terroir',
                    starter: 'Assiette de charcuterie locale ou Salade au Roquefort',
                    main: 'Aligot traditionnel & Saucisse artisanale ou Truite Meunière',
                    dessert: 'Plateau de fromages affinés ou Dessert maison'
                },
                half_board: {
                    title: 'Demi-Pension',
                    conditions: 'Disponible pour les séjours de 2 nuits ou plus. Réservez lors de la sélection de votre chambre.'
                }
            },
            surroundings_page: {
                title: 'Explorer la Région',
                intro: 'Les Gorges de la Jonte et du Tarn offrent un terrain de jeu spectaculaire pour les amoureux de la nature.',
                discovery_badge: 'Découverte',
                distance_label: 'Distance : ',
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
                booking_badge: 'Réservation',
                advantages_list: {
                    best_rate: { title: 'Meilleur Tarif', desc: 'Nous vous garantissons le prix le plus bas en direct.' },
                    availability: { title: 'Disponibilité', desc: 'Toutes nos chambres sont accessibles en temps réel.' },
                    exclusive: { title: 'Offres Exclusives', desc: 'Accédez à nos forfaits demi-pension et offres spéciales.' }
                },
                rates_info: 'Tarifs à titre indicatif, variant selon la saison.',
                table: {
                    type: 'Type de Chambre',
                    low_season: 'Basse Saison',
                    high_season: 'Haute Saison',
                    starting_at: 'À partir de'
                },
                cta: 'Voir les Disponibilités'
            },
            contact_page: {
                title: 'Contact & Accès',
                form_title: 'Envoyez-nous un message',
                form: {
                    subject: 'Sujet',
                    options: {
                        booking: 'Demande de réservation',
                        info: 'Information générale',
                        restaurant: 'Restaurant'
                    },
                    message: 'Message',
                    submit: 'Envoyer le message'
                },
                directions: {
                    title: 'Comment Venir',
                    car: 'Voiture : Accès via A75 (sortie 44/47), à 30 min.',
                    train: 'Gare : Millau (25 km)',
                    plane: 'Aéroport : Montpellier ou Rodez'
                },
                parking: 'Parking gratuit sur place. Paiements : Visa, Mastercard, Chèques Vacances.',
                pets_info: 'Animaux acceptés sur demande (supplément possible selon le gabarit).'
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
                bio: 'Depuis 1954, notre famille vous accueille au cœur des Gorges de la Jonte pour une expérience authentique et naturelle.',
                sections: {
                    navigation: 'Navigation',
                    contact: 'Contact',
                    legal: 'Légal'
                },
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
                title: 'Hotel Restaurant de la Jonte',
                subtitle: 'Stay in the heart of the Jonte Gorges',
                welcome: 'Authenticity & Nature',
                cta_room: 'Our Rooms',
                cta_table: 'Our Restaurant'
            },
            home: {
                presentation: {
                    title: 'Welcome to your nature getaway',
                    text: 'Since 1954, the Vergely family has welcomed you to an exceptional natural setting in the heart of the Jonte Gorges. Whether you are a hiking enthusiast, a nature lover, or looking for a family stay, Hotel Restaurant de la Jonte is your ideal base. Enjoy our panoramic views, outdoor pool, and authentic regional cuisine.',
                    badge: 'Nature Chic'
                },
                about: {
                    badge: 'A Family House',
                    title_welcome: 'Welcome',
                    title_at: 'to Les Douzes',
                    p1: 'Since 1954, the Vergely family has welcomed you to a preserved natural setting on the banks of the Jonte.',
                    p2: 'Our establishment combines modern comfort with regional authenticity to offer you a break of absolute calm.',
                    rooms_label: 'Rooms',
                    foundation_label: 'Founding Year',
                    cta: 'Discover the Hotel'
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
                    cta: 'View all rooms',
                    view_room: 'View room'
                },
                restaurant_teaser: {
                    title: 'Taste the Terroir',
                    text: 'Discover the authentic flavors of our region. Our chef prepares generous dishes highlighting local products, from traditional Aligot to Tripoux. Enjoy your meal in our dining room or on the terrace.',
                    cta: 'Discover our menus',
                    floating_label: 'Local Gastronomy'
                },
                region_teaser: {
                    title: 'Explore the Gorges',
                    text: 'Hiking trails, picturesque villages, and breathtaking viewpoints await you just steps away. Let nature inspire you.',
                    cta: 'Explore activities'
                },
                reviews: {
                    title: 'What our guests say',
                    r1: '"A beautiful setting and a warm welcome. The pool after a hike is a dream!" - Sarah M.',
                    r2: '"Excellent regional cuisine and very clean, comfortable rooms. We will be back." - Jean-Luc P.'
                },
                direct_booking: {
                    title: 'Best Rate Guarantee',
                    text: 'Book directly on our website for the best prices, flexible conditions, and direct contact with the team.',
                    cta: 'Book Now'
                }
            },
            hotel_page: {
                title: 'Our House',
                history_title: 'A family legacy since 1954',
                history_text: 'Located at the confluence of the Jonte and the Tarn, our establishment is an essential stop for travelers looking to disconnect. For three generations, we have cultivated the art of hosting with simplicity and passion.',
                amenities_title: 'For a perfect stay',
                amenities: {
                    pool: 'Outdoor Pool (Seasonal)',
                    wifi: 'Free Wi-Fi',
                    parking: 'Private Parking',
                    pets: 'Pets Welcome',
                    bar: 'Bar & Lounge'
                },
                pool_area: {
                    title: 'The Panoramic Pool',
                    text: 'Overlooking the valley, our pool is the perfect place to relax after a day of discovery. Peace and freshness await.'
                },
                gallery_title: 'Hotel Gallery',
                why_choose_us: {
                    title: 'Why choose our hotel?',
                    p1: 'A family welcome that makes you feel at home.',
                    p2: 'An unbeatable location in the Jonte Gorges.',
                    p3: 'The convenience of everything in one place: sleep, eat, and play.',
                    p4: 'An authentic regional culinary experience.'
                },
                relaxation_badge: 'Relaxation',
                amenities_badge: 'Facilities & Services'
            },
            rooms_page: {
                title: 'Our Rooms',
                intro: 'Each room has been designed to offer you a well-deserved rest, lulled by the sound of the river or the calm of the valley.',
                types: {
                    standard: {
                        name: 'Standard Room',
                        specs: '15m² • Village View • Double Bed',
                        desc: 'Essential comfort for hikers and short stays.',
                        features: ['Free Wi-Fi', 'Flat-screen TV', 'Desk', 'Private bathroom']
                    },
                    river: {
                        name: 'Superior Room',
                        specs: '18m² • River & Gorges View • Queen Size Bed',
                        desc: 'Enjoy your own private balcony overlooking the river.',
                        features: ['Private Balcony', 'Panoramic View', 'Courtesy tray', 'Modern bathroom']
                    },
                    family: {
                        name: 'Family Room',
                        specs: '25m² • Space & Relaxation • Double Bed + Twin Beds',
                        desc: 'A generous space for families of up to 4 people.',
                        features: ['Separate Beds', 'Lounge Area', 'Ideal for Families', 'Quiet View']
                    }
                },
                features_title: 'Amenities & View',
                cta: 'Check Rates & Availability',
                faq: {
                    title: 'Frequently Asked Questions',
                    q1: 'What are the check-in and check-out times?',
                    a1: 'Arrivals are from 3:00 PM to 8:00 PM. Departures must be made before 11:00 AM.',
                    q2: 'Is breakfast included?',
                    a2: 'We offer a continental buffet breakfast at the rate of €12 per person.',
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
                cta: 'Book a table',
                gastronomy_badge: 'Gastronomy',
                practical_info: 'Practical Information',
                external_guests_note: 'Reservations required for non-guests.',
                menu_terroir: {
                    title: 'Terroir Menu',
                    starter: 'Local cold cuts or Roquefort Salad',
                    main: 'Traditional Aligot & Artisanal Sausage or Rainbow Trout',
                    dessert: 'Cheese platter or Homemade dessert'
                },
                half_board: {
                    title: 'Half-Board',
                    conditions: 'Available for stays of 2 nights or more. Book during room selection.'
                }
            },
            surroundings_page: {
                title: 'Explore the Region',
                intro: 'The Jonte Gorges offer a spectacular playground for nature lovers and thrill-seekers alike.',
                discovery_badge: 'Discovery',
                distance_label: 'Distance: ',
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
                booking_badge: 'Booking',
                advantages_list: {
                    best_rate: { title: 'Best Rate', desc: 'We guarantee the lowest price when booking directly.' },
                    availability: { title: 'Availability', desc: 'All our rooms are available in real time.' },
                    exclusive: { title: 'Exclusive Offers', desc: 'Access our half-board packages and special offers.' }
                },
                rates_info: 'Rates are indicative and vary according to the season.',
                table: {
                    type: 'Room Type',
                    low_season: 'Low Season',
                    high_season: 'High Season',
                    starting_at: 'From'
                },
                cta: 'Check Availability & Exact Pricing'
            },
            contact_page: {
                title: 'Contact & Location',
                form_title: 'Send us a message',
                form: {
                    subject: 'Subject',
                    options: {
                        booking: 'Booking enquiry',
                        info: 'General information',
                        restaurant: 'Restaurant'
                    },
                    message: 'Message',
                    submit: 'Send message'
                },
                directions: {
                    title: 'How to Get Here',
                    car: 'By Car: Access via A75 (exit 44 or 47), 30 mins away.',
                    train: 'Nearest Station: Millau (25 km)',
                    plane: 'Airport: Montpellier or Rodez'
                },
                parking: 'Free private parking on site. Accepted payments: Visa, Mastercard, Holiday Vouchers.',
                pets_info: 'Pets accepted on request (supplement possible depending on size).'
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
                bio: 'Since 1954, our family has welcomed you to the heart of the Jonte Gorges for an authentic and natural experience.',
                sections: {
                    navigation: 'Navigation',
                    contact: 'Contact',
                    legal: 'Legal'
                },
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
    },
    es: {
        translation: {
            nav: {
                home: 'Inicio',
                hotel: 'El Hotel',
                rooms: 'Habitaciones',
                restaurant: 'Restaurante',
                region: 'Región & Actividades',
                offers: 'Ofertas & Tarifas',
                contact: 'Info Práctica',
                reserve: 'Reservar',
            },
            hero: {
                title: 'Hôtel Restaurant de la Jonte',
                subtitle: 'Estancia en el corazón de las Gargantas de la Jonte',
                welcome: 'Autenticidad & Naturaleza',
                cta_room: 'Habitaciones',
                cta_table: 'Nuestro Restaurante'
            },
            home: {
                presentation: {
                    title: 'Bienvenido a su escapada natural',
                    text: 'Desde 1954, la familia Vergely le da la bienvenida a un entorno natural excepcional en el corazón de las Gargantas de la Jonte. Ya sea un entusiasta del senderismo, un amante de la naturaleza o busque una estancia familiar, el Hotel Restaurante de la Jonte es su base ideal. Disfrute de nuestras vistas panorámicas, nuestra piscina al aire libre y nuestra auténtica cocina regional.',
                    badge: 'Nature Chic'
                },
                about: {
                    badge: 'Una Casa de Familia',
                    title_welcome: 'Bienvenido',
                    title_at: 'a Les Douzes',
                    p1: 'Desde 1954, la familia Vergely le da la bienvenida a un entorno natural preservado a orillas del Jonte.',
                    p2: 'Nuestro establecimiento combina el confort moderno con la autenticidad regional para ofrecerle un descanso de calma absoluta.',
                    rooms_label: 'Habitaciones',
                    foundation_label: 'Año de Fundación',
                    cta: 'Descubrir el Hotel'
                },
                highlights: {
                    pool: 'Piscina Panorámica',
                    restaurant: 'Restaurante Regional',
                    rooms: 'Habitaciones Cómodas',
                    setting: 'Entorno Excepcional',
                    parking: 'Parking Gratuito',
                    wifi: 'Wi-Fi Gratis'
                },
                rooms_preview: {
                    title: 'Descanso & Confort',
                    standard: { name: 'Habitación Estándar', desc: 'Acogedora y esencial. Perfecta para una estancia corta.' },
                    superior: { name: 'Habitación con Balcón', desc: 'Despiértese con el sonido del río.' },
                    family: { name: 'Habitación Familiar', desc: 'Confort espacioso para toda la familia.' },
                    cta: 'Ver habitaciones',
                    view_room: 'Ver habitación'
                },
                restaurant_teaser: {
                    title: 'Saboree el Terruño',
                    text: 'Descubra los sabores auténticos de nuestra región. Nuestro chef prepara platos generosos con productos locales, desde el Aligot tradicional hasta los Tripoux. Disfrute de su comida en nuestro comedor o en la terraza.',
                    cta: 'Ver menús',
                    floating_label: 'Gastronomía Local'
                },
                region_teaser: {
                    title: 'Explore las Gargantas',
                    text: 'Rutas de senderismo, pueblos pintorescos y miradores impresionantes le esperan a pocos pasos. Deje que la naturaleza le inspire.',
                    cta: 'Ver actividades'
                },
                reviews: {
                    title: 'Lo que dicen nuestros huéspedes',
                    r1: '"Un entorno magnífico y una acogida calurosa. ¡La piscina después de una caminata es un sueño!" - Sarah M.',
                    r2: '"Excelente cocina regional y habitaciones muy limpias y cómodas. Volveremos." - Jean-Luc P.'
                },
                direct_booking: {
                    title: 'Mejor Tarifa Garantizada',
                    text: 'Reserve directamente en nuestro sitio para obtener los mejores precios, condiciones flexibles y contacto directo con el equipo.',
                    cta: 'Reservar ahora'
                }
            },
            hotel_page: {
                title: 'Nuestra Casa',
                history_title: 'Un legado familiar desde 1954',
                history_text: 'Situado en la confluencia de la Jonte y el Tarn, nuestro establecimiento es una parada esencial para los viajeros que buscan desconectar. Durante tres generaciones, hemos cultivado el arte de recibir con sencillez y pasión.',
                amenities_title: 'Para una estancia perfecta',
                amenities: {
                    pool: 'Piscina Exterior (Temporada)',
                    wifi: 'Wi-Fi Gratis',
                    parking: 'Parking Privado',
                    pets: 'Mascotas Bienvenidas',
                    bar: 'Bar & Salón'
                },
                pool_area: {
                    title: 'La Piscina Panorámica',
                    text: 'Con vistas al valle, nuestra piscina es el lugar perfecto para relajarse después de un día de descubrimiento. Paz y frescura le esperan.'
                },
                gallery_title: 'Galería del Hotel',
                why_choose_us: {
                    title: '¿Por qué elegir nuestro hotel?',
                    p1: 'Una acogida familiar que le hace sentir como en casa.',
                    p2: 'Una ubicación inmejorable en las Gargantas de la Jonte.',
                    p3: 'La comodidad de todo en un solo lugar: dormir, comer y disfrutar.',
                    p4: 'Una experiencia culinaria regional auténtica.'
                },
                relaxation_badge: 'Relax',
                amenities_badge: 'Servicios & Instalaciones'
            },
            rooms_page: {
                title: 'Habitaciones',
                intro: 'Cada habitación ha sido diseñada para ofrecerle un descanso merecido, arrullado por el sonido del río o la calma del valle.',
                types: {
                    standard: {
                        name: 'Habitación Estándar',
                        specs: '15m² • Vista Pueblo • Cama Doble',
                        desc: 'Confort esencial para senderistas y estancias cortas.',
                        features: ['Wi-Fi Gratis', 'TV Pantalla Plana', 'Escritorio', 'Baño privado']
                    },
                    river: {
                        name: 'Habitación con Balcón',
                        specs: '18m² • Vista Río & Gargantas • Cama Queen Size',
                        desc: 'Disfrute de su propio balcón privado con vistas al río.',
                        features: ['Balcón Privado', 'Vista Panorámica', 'Bandeja de cortesía', 'Baño moderno']
                    },
                    family: {
                        name: 'Habitación Familiar',
                        specs: '25m² • Espacio & Relax • Cama Doble + Camas Individuales',
                        desc: 'Un espacio generoso para familias de hasta 4 personas.',
                        features: ['Camas Separadas', 'Zona de Estar', 'Ideal para Familias', 'Vista Tranquila']
                    }
                },
                features_title: 'Equipamiento & Vista',
                cta: 'Consultar Tarifas',
                faq: {
                    title: 'Preguntas Frecuentes',
                    q1: '¿Cuáles son las horas de check-in y check-out?',
                    a1: 'Las llegadas son de 15:00 a 20:00. Las salidas deben realizarse antes de las 11:00.',
                    q2: '¿El desayuno está incluido?',
                    a2: 'Ofrecemos un desayuno buffet continental por 12€ por persona.',
                    q3: '¿Se aceptan mascotas?',
                    a3: 'Sí, las mascotas son bienvenidas. Por favor reporte su llegada al reservar (puede aplicar un pequeño suplemento).'
                }
            },
            restaurant_page: {
                title: 'Restaurante & Terruño',
                intro_title: 'Sabores Auténticos del Terruño',
                intro: 'Nuestro restaurante celebra el rico patrimonio culinario de la región. Disfrute de platos generosos y caseros elaborados con productos locales.',
                menu_intro: 'Nuestros menús cambian con las estaciones para ofrecerle lo mejor del terruño.',
                specialties: {
                    title: 'Nuestras Especialidades',
                    aligot: { name: 'Aligot Tradicional', desc: 'El plato típico del Aubrac a base de tomme fraîche' },
                    confit: { name: 'Confit de Pato', desc: 'Muslo confitado acompañado de patatas sarladaises' },
                    charcuterie: { name: 'Embutidos Locales', desc: 'Selección de artesanos productores de nuestras montañas' }
                },
                menus: {
                    title: 'Nuestros Menús',
                    evening: 'Menú de Noche (Entrante, Plato, Postre) desde 25€',
                    half_board: 'La media pensión está disponible para los clientes del hotel'
                },
                hours: 'Desayuno: 7:30 - 10:00 | Cena: 19:00 - 21:00 | Abierto a clientes externos bajo reserva',
                cta: 'Reservar mesa',
                gastronomy_badge: 'Gastronomía',
                practical_info: 'Información Práctica',
                external_guests_note: 'Con reserva para clientes externos.',
                menu_terroir: {
                    title: 'Menú del Terruño',
                    starter: 'Embutidos locales o Ensalada de Roquefort',
                    main: 'Aligot tradicional & Salchicha artesanal o Trucha a la molinera',
                    dessert: 'Tabla de quesos o Postre casero'
                },
                half_board: {
                    title: 'Media Pensión',
                    conditions: 'Disponible para estancias de 2 noches o más. Reserve al seleccionar su habitación.'
                }
            },
            surroundings_page: {
                title: 'Explorar la Región',
                intro: 'Las Gargantas de la Jonte y del Tarn ofrecen un escenario espectacular para los amantes de la naturaleza.',
                discovery_badge: 'Descubrimiento',
                distance_label: 'Distancia: ',
                activities: {
                    hiking: { title: 'Rutas de Senderismo', desc: 'Numerosas rutas que parten directamente del hotel, aptas para todos los niveles.', dist: '0 km' },
                    vultures: { title: 'Casa de los Buitres', desc: 'Observe estas majestuosas aves y su vuelo increíble sobre las gargantas.', dist: '2 km' },
                    caves: { title: 'Cuevas & Geología', desc: 'Descubra las espectaculares formaciones de Aven Armand y Dargilan.', dist: '15 km' },
                    villages: { title: 'Pueblos Pintorescos', desc: 'Visite Meyrueis, Sainte-Énimie y otras joyas históricas de la región.', dist: '10 km' },
                    sports: { title: 'Deportes al Aire Libre', desc: 'Piragüismo en el Tarn, escalada y vía ferrata para los más aventureros.', dist: '5-20 km' }
                },
            },
            offers_page: {
                title: 'Tarifas & Ofertas',
                direct_booking_title: '¿Por qué reservar directamente?',
                direct_booking_text: 'Garantizamos las tarifas más bajas, asignación prioritaria de habitaciones y condiciones flexibles de cancelación.',
                rates_title: 'Tarifas Desde',
                rates: {
                    double: 'Doble desde 70€',
                    superior: 'Superior desde 85€',
                    family: 'Familiar desde 105€'
                },
                booking_badge: 'Reserva',
                advantages_list: {
                    best_rate: { title: 'Mejor Tarifa', desc: 'Garantizamos el precio más bajo reservando directamente.' },
                    availability: { title: 'Disponibilidad', desc: 'Todas nuestras habitaciones están disponibles en tiempo real.' },
                    exclusive: { title: 'Ofertas Exclusivas', desc: 'Acceda a nuestros paquetes de media pensión y ofertas especiales.' }
                },
                rates_info: 'Tarifas orientativas, varían según la temporada.',
                table: {
                    type: 'Tipo de Habitación',
                    low_season: 'Temporada Baja',
                    high_season: 'Temporada Alta',
                    starting_at: 'Desde'
                },
                cta: 'Ver Disponibilidad'
            },
            contact_page: {
                title: 'Contacto & Ubicación',
                form_title: 'Envíenos un mensaje',
                form: {
                    subject: 'Asunto',
                    options: {
                        booking: 'Solicitud de reserva',
                        info: 'Información general',
                        restaurant: 'Restaurante'
                    },
                    message: 'Mensaje',
                    submit: 'Enviar el mensaje'
                },
                directions: {
                    title: 'Cómo Llegar',
                    car: 'En coche: Acceso por A75 (salida 44 o 47), a 30 min.',
                    train: 'Estación más cercana: Millau (25 km)',
                    plane: 'Aeropuerto: Montpellier o Rodez'
                },
                parking: 'Parking privado gratuito. Pagos aceptados: Visa, Mastercard, Cheques Vacaciones.',
                pets_info: 'Se aceptan animales bajo petición (posible suplemento según el tamaño).'
            },
            reservation: {
                form: {
                    name: 'Nombre completo',
                    email: 'Email',
                    date: 'Fecha',
                    time: 'Hora',
                    guests: 'Número de personas',
                    phone: 'Teléfono',
                    message: 'Peticiones especiales',
                    submit: 'Enviar la solicitud',
                },
            },
            footer: {
                bio: 'Desde 1954, nuestra familia le da la bienvenida al corazón de las Gargantas de la Jonte para una experiencia auténtica y natural.',
                sections: {
                    navigation: 'Navegación',
                    contact: 'Contacto',
                    legal: 'Legal'
                },
                legal: 'Aviso Legal',
                privacy: 'Privacidad',
                cookies: 'Cookies',
                copyright: '© 2026 Hôtel Restaurant de la Jonte.',
            },
            about: { badge: 'El Hotel' },
            gallery: { badge: 'Galería', title: 'Descubrir' },
            contact: {
                badge: 'Contacto', title: 'Info Práctica', info: { address: { title: 'Dirección' }, phone: { title: 'Teléfono' }, email: { title: 'Email' }, hours: { title: 'Horarios', p1: '7 días / semana', p2: '' } }
            }
        }
    },
    de: {
        translation: {
            nav: {
                home: 'Startseite',
                hotel: 'Das Hotel',
                rooms: 'Zimmer',
                restaurant: 'Restaurant',
                region: 'Region & Aktivitäten',
                offers: 'Angebote & Preise',
                contact: 'Praktische Infos',
                reserve: 'Jetzt buchen',
            },
            hero: {
                title: 'Hôtel Restaurant de la Jonte',
                subtitle: 'Übernachten im Herzen der Gorges de la Jonte',
                welcome: 'Authentizität & Natur',
                cta_room: 'Unsere Zimmer',
                cta_table: 'Unser Restaurant'
            },
            home: {
                presentation: {
                    title: 'Willkommen in Ihrer Natur-Auszeit',
                    text: 'Seit 1954 begrüßt Sie die Familie Vergely in einer außergewöhnlichen natürlichen Umgebung im Herzen der Gorges de la Jonte. Ob Wanderer, Naturliebhaber oder auf der Suche nach einem Familienurlaub, das Hotel Restaurant de la Jonte ist Ihr idealer Ausgangspunkt. Genießen Sie Panoramablicke, unseren Außenpool und authentische regionale Küche.',
                    badge: 'Nature Chic'
                },
                about: {
                    badge: 'Ein Familienhaus',
                    title_welcome: 'Willkommen',
                    title_at: 'in Les Douzes',
                    p1: 'Seit 1954 begrüßt Sie die Familie Vergely in einer geschützten natürlichen Umgebung am Ufer der Jonte.',
                    p2: 'Unser Haus verbindet modernen Komfort mit regionaler Authentizität, um Ihnen eine Auszeit absoluter Ruhe zu bieten.',
                    rooms_label: 'Zimmer',
                    foundation_label: 'Gründungsjahr',
                    cta: 'Das Hotel entdecken'
                },
                highlights: {
                    pool: 'Panorama-Pool',
                    restaurant: 'Regionales Restaurant',
                    rooms: 'Komfortable Zimmer',
                    setting: 'Einzigartige Lage',
                    parking: 'Gratis Parkplatz',
                    wifi: 'Kostenloses WLAN'
                },
                rooms_preview: {
                    title: 'Ruhe & Komfort',
                    standard: { name: 'Standardzimmer', desc: 'Gemütlich und essentiell. Perfekt für Kurzaufenthalte.' },
                    superior: { name: 'Zimmer mit Balkon', desc: 'Wachen Sie mit dem Rauschen des Wassers auf.' },
                    family: { name: 'Familienzimmer', desc: 'Viel Platz für die ganze Familie.' },
                    cta: 'Alle Zimmer ansehen',
                    view_room: 'Zimmer ansehen'
                },
                restaurant_teaser: {
                    title: 'Heimat genießen',
                    text: 'Entdecken Sie die authentischen Aromen unserer Region. Unser Chef bereitet großzügige Gerichte mit lokalen Produkten zu, vom traditionellen Aligot bis zu Tripoux. Genießen Sie Ihr Essen im Speisesaal oder auf der Terrasse.',
                    cta: 'Unsere Menüs',
                    floating_label: 'Lokale Gastronomie'
                },
                region_teaser: {
                    title: 'Die Schluchten erkunden',
                    text: 'Wanderwege, malerische Dörfer und atemberaubende Aussichtspunkte erwarten Sie nur wenige Schritte entfernt. Lassen Sie sich von der Natur inspirieren.',
                    cta: 'Aktivitäten entdecken'
                },
                reviews: {
                    title: 'Gästestimmen',
                    r1: '"Traumhafte Lage und herzlicher Empfang. Der Pool nach einer Wanderung ist ein Genuss!" - Sarah M.',
                    r2: '"Exzellente regionale Küche und sehr saubere, komfortable Zimmer. Wir kommen wieder." - Jean-Luc P.'
                },
                direct_booking: {
                    title: 'Bester-Preis-Garantie',
                    text: 'Buchen Sie direkt auf unserer Website für die besten Preise, flexible Bedingungen und direkten Kontakt.',
                    cta: 'Jetzt buchen'
                }
            },
            hotel_page: {
                title: 'Unser Haus',
                history_title: 'Ein Familienerbe seit 1954',
                history_text: 'Am Zusammenfluss von Jonte und Tarn gelegen, ist unser Haus ein idealer Ort für Reisende, die abschalten wollen. Seit drei Generationen pflegen wir die Kunst der Gastfreundschaft mit Leidenschaft.',
                amenities_title: 'Für einen perfekten Aufenthalt',
                amenities: {
                    pool: 'Außenpool (Saisonal)',
                    wifi: 'Kostenloses WLAN',
                    parking: 'Privater Parkplatz',
                    pets: 'Haustiere willkommen',
                    bar: 'Bar & Lounge'
                },
                pool_area: {
                    title: 'Der Panorama-Pool',
                    text: 'Mit Blick auf das Tal ist unser Pool der perfekte Ort, um nach einem Tag voller Entdeckungen zu entspannen. Ruhe und Frische erwarten Sie.'
                },
                gallery_title: 'Hotelgalerie',
                why_choose_us: {
                    title: 'Warum unser Hotel wählen?',
                    p1: 'Ein herzlicher Empfang, bei dem Sie sich wie zu Hause fühlen.',
                    p2: 'Unschlagbare Lage in den Gorges de la Jonte.',
                    p3: 'Alles an einem Ort: schlafen, essen und genießen.',
                    p4: 'Authentische regionale kulinarische Erlebnisse.'
                },
                relaxation_badge: 'Entspannung',
                amenities_badge: 'Raum & Relax'
            },
            rooms_page: {
                title: 'Zimmer',
                intro: 'Jedes Zimmer wurde entworfen, um Ihnen eine wohlverdiente Ruhe zu bieten, untermalt vom Rauschen des Flusses oder der Stille des Tals.',
                types: {
                    standard: {
                        name: 'Standardzimmer',
                        specs: '15m² • Dorfblick • Doppelbett',
                        desc: 'Essentieller Komfort für Wanderer und Kurzaufenthalte.',
                        features: ['Gratis WLAN', 'Flachbild-TV', 'Schreibtisch', 'Eigenes Bad']
                    },
                    river: {
                        name: 'Superior-Zimmer',
                        specs: '18m² • Fluss- & Schluchtenblick • Queen-Size-Bett',
                        desc: 'Genießen Sie Ihren eigenen privaten Balkon mit Blick auf den Fluss.',
                        features: ['Privater Balkon', 'Panoramablick', 'Willkommenstablett', 'Modernes Bad']
                    },
                    family: {
                        name: 'Familienzimmer',
                        specs: '25m² • Raum & Entspannung • Doppelbett + Einzelbetten',
                        desc: 'Viel Platz für Familien mit bis zu 4 Personen.',
                        features: ['Getrennte Betten', 'Sitzecke', 'Ideal für Familien', 'Ruhige Lage']
                    }
                },
                features_title: 'Ausstattung & Ansicht',
                cta: 'Preise prüfen',
                faq: {
                    title: 'Häufig gestellte Fragen',
                    q1: 'Wie sind die Check-in und Check-out Zeiten?',
                    a1: 'Anreisen sind von 15:00 bis 20:00 Uhr möglich. Abreisen müssen bis 11:00 Uhr erfolgen.',
                    q2: 'Ist das Frühstück inbegriffen?',
                    a2: 'Wir bieten ein kontinentales Frühstücksbuffet für 12€ pro Person an.',
                    q3: 'Sind Haustiere erlaubt?',
                    a3: 'Ja, Haustiere sind willkommen. Bitte bei der Buchung angeben (kleiner Aufpreis möglich).'
                }
            },
            restaurant_page: {
                title: 'Restaurant & Heimat',
                intro_title: 'Authentische regionale Aromen',
                intro: 'Unser Restaurant feiert das reiche kulinarische Erbe der Region. Genießen Sie großzügige, hausgemachte Gerichte in geselliger Atmosphäre.',
                menu_intro: 'Unsere Karten ändern sich mit den Jahreszeiten, um Ihnen das Beste der Region zu bieten.',
                specialties: {
                    title: 'Unsere Spezialitäten',
                    aligot: { name: 'Traditionelles Aligot', desc: 'Das typische Gericht aus dem Aubrac mit frischem Käse' },
                    confit: { name: 'Enten-Confit', desc: 'Konfierte Keule mit Sarladaise-Kartoffeln' },
                    charcuterie: { name: 'Lokale Wurstwaren', desc: 'Auswahl von Bergbauern aus unserer Region' }
                },
                menus: {
                    title: 'Unsere Menüs',
                    evening: 'Abendmenü (Vorspeise, Hauptgang, Dessert) ab 25€',
                    half_board: 'Halbpension für Hotelgäste verfügbar'
                },
                hours: 'Frühstück: 7:30 – 10:00 Uhr | Abendessen: 19:00 – 21:00 Uhr | Auch für externe Gäste auf Reservierung',
                cta: 'Tisch reservieren',
                gastronomy_badge: 'Gastronomie',
                practical_info: 'Praktische Informationen',
                external_guests_note: 'Reservierung für externe Gäste erforderlich.',
                menu_terroir: {
                    title: 'Terroir-Menü',
                    starter: 'Lokaler Aufschnitt oder Roquefort-Salat',
                    main: 'Traditionelles Aligot & handwerkliche Wurst oder Forelle Müllerin Art',
                    dessert: 'Käseplatte oder Hausgemachtes Dessert'
                },
                half_board: {
                    title: 'Halbpension',
                    conditions: 'Verfügbar für Aufenthalte ab 2 Nächten. Bei der Zimmerauswahl buchen.'
                }
            },
            surroundings_page: {
                title: 'Die Region erkunden',
                intro: 'Die Jonte- und Tarn-Schluchten bieten ein spektakuläres Spielfeld für Naturliebhaber und Abenteuerlustige.',
                discovery_badge: 'Entdeckung',
                distance_label: 'Entfernung: ',
                activities: {
                    hiking: { title: 'Wanderwege', desc: 'Zahlreiche Wege starten direkt am Hotel, für alle Schwierigkeitsgrade geeignet.', dist: '0 km' },
                    vultures: { title: 'Geierhäuschen', desc: 'Beobachten Sie diese majestäusern Vögel im Flug über die Schluchten.', dist: '2 km' },
                    caves: { title: 'Höhlen & Geologie', desc: 'Entdecken Sie die beeindruckenden Formationen von Aven Armand und Dargilan.', dist: '15 km' },
                    villages: { title: 'Malerische Dörfer', desc: 'Besuchen Sie Meyrueis, Sainte-Énimie und andere historische Kleinode der Region.', dist: '10 km' },
                    sports: { title: 'Outdoor-Sport', desc: 'Kanufahren auf dem Tarn, Klettern und Klettersteige für Abenteuerlustige.', dist: '5-20 km' }
                },
            },
            offers_page: {
                title: 'Preise & Angebote',
                direct_booking_title: 'Warum direkt buchen?',
                direct_booking_text: 'Wir garantieren die günstigsten Preise, bevorzugte Zimmerzuweisung und flexible Stornobedingungen.',
                rates_title: 'Preise ab',
                rates: {
                    double: 'Doppelzimmer ab 70€',
                    superior: 'Superior ab 85€',
                    family: 'Familienzimmer ab 105€'
                },
                booking_badge: 'Reservierung',
                advantages_list: {
                    best_rate: { title: 'Bester Preis', desc: 'Wir garantieren den niedrigsten Preis bei Direktbuchung.' },
                    availability: { title: 'Verfügbarkeit', desc: 'Alle unsere Zimmer sind in Echtzeit verfügbar.' },
                    exclusive: { title: 'Exklusive Angebote', desc: 'Nutzen Sie unsere Halbpensionspakete und Sonderangebote.' }
                },
                rates_info: 'Die Preise sind Richtwerte und variieren je nach Saison.',
                table: {
                    type: 'Zimmertyp',
                    low_season: 'Nebensaison',
                    high_season: 'Hauptsaison',
                    starting_at: 'Ab'
                },
                cta: 'Verfügbarkeit prüfen'
            },
            contact_page: {
                title: 'Kontakt & Anfahrt',
                form_title: 'Schreiben Sie uns',
                form: {
                    subject: 'Betreff',
                    options: {
                        booking: 'Reservierungsanfrage',
                        info: 'Allgemeine Informationen',
                        restaurant: 'Restaurant'
                    },
                    message: 'Nachricht',
                    submit: 'Nachricht senden'
                },
                directions: {
                    title: 'Anfahrt',
                    car: 'Mit dem Auto: Über die A75 (Ausfahrt 44/47), ca. 30 Min.',
                    train: 'Bahnhof: Millau (25 km)',
                    plane: 'Flughafen: Montpellier oder Rodez'
                },
                parking: 'Kostenloser Parkplatz vor Ort. Zahlungsmittel: Visa, Mastercard, Urlaubsschecks.',
                pets_info: 'Haustiere auf Anfrage erlaubt (Aufpreis je nach Größe möglich).'
            },
            reservation: {
                form: {
                    name: 'Vollständiger Name',
                    email: 'E-Mail',
                    date: 'Datum',
                    time: 'Uhrzeit',
                    guests: 'Personenanzahl',
                    phone: 'Telefon',
                    message: 'Besondere Wünsche',
                    submit: 'Anfrage senden',
                },
            },
            footer: {
                bio: 'Seit 1954 begrüßt Sie unsere Familie im Herzen der Jonte-Schluchten zu einem authentischen Naturerlebnis.',
                sections: {
                    navigation: 'Navigation',
                    contact: 'Kontakt',
                    legal: 'Rechtliches'
                },
                legal: 'Impressum',
                privacy: 'Datenschutz',
                cookies: 'Cookies',
                copyright: '© 2026 Hôtel Restaurant de la Jonte.',
            },
            about: { badge: 'Das Hotel' },
            gallery: { badge: 'Galerie', title: 'Entdecken' },
            contact: {
                badge: 'Kontakt', title: 'Praktische Infos', info: { address: { title: 'Adresse' }, phone: { title: 'Telefon' }, email: { title: 'E-Mail' }, hours: { title: 'Öffnungszeiten', p1: '7 Tage / Woche', p2: '' } }
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
