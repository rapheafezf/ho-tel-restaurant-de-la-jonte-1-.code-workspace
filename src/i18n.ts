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
                subtitle: 'Alójese en el corazón de las Gargantas de la Jonte',
                welcome: 'Descubra la naturaleza, el relax y los sabores regionales en un ambiente cálido y familiar.',
                cta_room: 'Reservar',
                cta_table: 'Descubrir el hotel',
            },
            home: {
                presentation: {
                    title: 'Bienvenido a su escapada natural',
                    text: 'Desde 1954, la familia Vergely le acoge en un entorno natural excepcional en el corazón de las Gargantas de la Jonte. Tanto si es amante del senderismo, de la naturaleza o busca unas vacaciones en familia, el Hôtel Restaurant de la Jonte es su campamento base ideal. Disfrute de nuestras vistas panorámicas, piscina al aire libre y auténtica cocina regional.',
                },
                highlights: {
                    pool: 'Piscina panorámica',
                    restaurant: 'Restaurante regional',
                    rooms: 'Habitaciones confortables',
                    setting: 'Entorno excepcional',
                    parking: 'Aparcamiento gratuito',
                    wifi: 'Wi-Fi gratuito'
                },
                rooms_preview: {
                    title: 'Descanso & Confort',
                    standard: { name: 'Habitación Estándar', desc: 'Acogedora y esencial. Perfecta para una estancia corta.' },
                    superior: { name: 'Habitación con Balcón', desc: 'Despierte con el sonido del río.' },
                    family: { name: 'Habitación Familiar', desc: 'Amplio confort para toda la familia.' },
                    cta: 'Ver todas las habitaciones',
                    view_room: 'Ver la habitación'
                },
                restaurant_teaser: {
                    title: 'Saboree el Territorio',
                    text: 'Descubra los auténticos sabores de nuestra región. Nuestro chef prepara platos generosos con productos locales, desde el tradicional Aligot hasta los Tripoux. Saboree su comida en nuestro comedor o en la terraza.',
                    cta: 'Descubrir nuestros menús'
                },
                region_teaser: {
                    title: 'Explore las Gargantas',
                    text: 'Rutas de senderismo, pueblos pintorescos y miradores espectaculares le esperan a pocos pasos. Deje que la naturaleza le inspire.',
                    cta: 'Explorar las actividades'
                },
                reviews: {
                    title: 'Lo que dicen nuestros huéspedes',
                    r1: '"Un entorno magnífico y una acogida muy cálida. ¡La piscina tras una caminata es un sueño!" - Sarah M.',
                    r2: '"Excelente cocina regional y habitaciones muy limpias y confortables. Volveremos." - Jean-Luc P.'
                },
                direct_booking: {
                    title: 'Garantía del Mejor Precio',
                    text: 'Reserve directamente en nuestra web para obtener los mejores precios, condiciones flexibles y contacto directo con el equipo.',
                    cta: 'Reservar ahora'
                }
            },
            hotel_page: {
                title: 'Nuestro Hotel',
                history_title: 'Nuestra Historia',
                history_text: 'Desde 1954, la familia Vergely recibe a sus huéspedes con los brazos abiertos. Nuestro ambiente familiar hace que cada uno se sienta como en casa en plena naturaleza.',
                amenities_title: 'Nuestras Prestaciones',
                amenities: {
                    pool: 'Piscina exterior de temporada & gran terraza',
                    wifi: 'Acceso Wi-Fi gratuito en todo el hotel',
                    parking: 'Aparcamiento privado & garaje para bicicletas',
                    pets: 'Animales admitidos (contactarnos)',
                    bar: 'Bar acogedor y salón de descanso'
                },
                pool_area: {
                    title: 'La Zona de Piscina',
                    text: 'Relájese en nuestra piscina exterior rodeada de tumbonas. Después de un día de descubrimientos, dése un chapuzón admirando los imponentes acantilados de las Gargantas de la Jonte.'
                },
                gallery_title: 'Galería del Hotel',
                why_choose_us: {
                    title: '¿Por qué elegir nuestro hotel?',
                    p1: 'Hospitalidad familiar que le hace sentir como en casa.',
                    p2: 'Ubicación inmejorable en las Gargantas de la Jonte.',
                    p3: 'Todo en uno: dormir, comer y disfrutar.',
                    p4: 'Una experiencia gastronómica regional auténtica.'
                }
            },
            rooms_page: {
                title: 'Nuestras Habitaciones',
                intro: 'Sencillas, confortables y tranquilas. Encuentre la habitación perfecta para su estancia en las Gargantas.',
                types: {
                    river: {
                        name: 'Habitación con Vista al Río',
                        specs: '🛏️ 1 Cama Doble Grande | 👥 2 Personas | 📐 18 m²',
                        desc: 'Habitación luminosa y ventilada con balcón privado con vistas al río Jonte. Perfecta para parejas que buscan tranquilidad.',
                        features: 'Wi-Fi gratuito, TV pantalla plana, Baño privado, Escritorio, Secador de pelo.',
                    },
                    standard: {
                        name: 'Habitación Doble Estándar',
                        specs: '🛏️ 1 Cama Doble | 👥 2 Personas | 📐 15 m²',
                        desc: 'Habitación confortable y bien equipada con vistas al pueblo o al patio.',
                        features: 'Wi-Fi gratuito, TV pantalla plana, Baño privado.',
                    },
                    family: {
                        name: 'Habitación Familiar',
                        specs: '🛏️ 1 Cama Doble & 1 Individual | 👥 3-4 Personas | 📐 22 m²',
                        desc: 'Alojamiento espacioso ideal para familias, que ofrece confort y tranquilidad.',
                        features: 'Wi-Fi gratuito, TV pantalla plana, Baño privado, Ambiente tranquilo.',
                    }
                },
                cta: 'Reservar esta habitación',
                faq: {
                    title: 'Preguntas Frecuentes',
                    q1: '¿Cuáles son los horarios de entrada y salida?',
                    a1: 'La entrada es a partir de las 15:00 h y la salida antes de las 11:00 h.',
                    q2: '¿Disponéis de cunas para bebés?',
                    a2: 'Sí, las cunas están disponibles bajo petición.',
                    q3: '¿Se admiten mascotas?',
                    a3: 'Sí, las mascotas son bienvenidas. Por favor, indíquelo al reservar (puede aplicarse un suplemento).'
                }
            },
            restaurant_page: {
                title: 'Restaurante & Territorio',
                intro_title: 'Sabores Regionales Auténticos',
                intro: 'Nuestro restaurante celebra el rico patrimonio culinario de la región. Disfrute de platos generosos y caseros elaborados con ingredientes locales en un ambiente acogedor.',
                menu_intro: 'Nuestros menús cambian con las estaciones para ofrecerle lo mejor del terruño.',
                specialties: {
                    title: 'Nuestras Especialidades',
                    aligot: { name: 'Aligot Tradicional', desc: 'El plato típico de Aubrac, con queso fundido al punto' },
                    confit: { name: 'Confit de Pato', desc: 'Muslo confitado con patatas a la sarladaise' },
                    charcuterie: { name: 'Embutidos Locales', desc: 'Selección de productores artesanales asociados' }
                },
                menus: {
                    title: 'Nuestros Menús',
                    evening: 'Menú de noche (Entrante, Principal, Postre) desde 25€',
                    half_board: 'Media pensión disponible para clientes del hotel'
                },
                hours: 'Desayuno: 7:30 - 10:00 | Cena: 19:00 - 21:00 | Abierto a clientes externos con reserva previa',
                cta: 'Reservar una mesa'
            },
            surroundings_page: {
                title: 'Explorar la Región',
                intro: 'Las Gargantas de la Jonte y del Tarn ofrecen un escenario espectacular para los amantes de la naturaleza.',
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
                cta: 'Ver Disponibilidad'
            },
            contact_page: {
                title: 'Contacto & Acceso',
                form_title: 'Envíenos un mensaje',
                directions: {
                    title: 'Cómo Llegar',
                    car: 'En coche: Acceso por la A75 (salida 44/47), a 30 min.',
                    train: 'Estación: Millau (25 km)',
                    plane: 'Aeropuerto: Montpellier o Rodez'
                },
                parking: 'Aparcamiento gratuito en el lugar. Pagos: Visa, Mastercard, Cheques Vacaciones.',
            },
            reservation: {
                form: {
                    name: 'Nombre completo',
                    email: 'Correo electrónico',
                    date: 'Fecha',
                    time: 'Hora',
                    guests: 'Número de personas',
                    phone: 'Teléfono',
                    message: 'Peticiones especiales',
                    submit: 'Enviar la solicitud',
                },
            },
            footer: {
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
                subtitle: 'Übernachten Sie im Herzen der Jonte-Schluchten',
                welcome: 'Entdecken Sie Natur, Entspannung und regionale Aromen in einem herzlichen, familiengeführten Ambiente.',
                cta_room: 'Jetzt buchen',
                cta_table: 'Das Hotel entdecken',
            },
            home: {
                presentation: {
                    title: 'Willkommen in Ihrer Naturauszeit',
                    text: 'Seit 1954 empfängt die Familie Vergely ihre Gäste in einer außergewöhnlichen Naturumgebung im Herzen der Jonte-Schluchten. Ob Wanderbegeisterter, Naturliebhaber oder Familienurlauber – das Hôtel Restaurant de la Jonte ist Ihre ideale Ausgangsbasis. Genießen Sie unsere Panoramablicke, den Außenpool und die authentische regionale Küche.',
                },
                highlights: {
                    pool: 'Panorama-Pool',
                    restaurant: 'Regionales Restaurant',
                    rooms: 'Komfortable Zimmer',
                    setting: 'Außergewöhnliche Lage',
                    parking: 'Kostenloser Parkplatz',
                    wifi: 'Kostenloses WLAN'
                },
                rooms_preview: {
                    title: 'Ruhe & Komfort',
                    standard: { name: 'Standardzimmer', desc: 'Gemütlich und komfortabel. Ideal für einen Kurzaufenthalt.' },
                    superior: { name: 'Zimmer mit Balkon', desc: 'Wachen Sie beim Rauschen des Flusses auf.' },
                    family: { name: 'Familienzimmer', desc: 'Geräumiger Komfort für die ganze Familie.' },
                    cta: 'Alle Zimmer ansehen',
                    view_room: 'Zimmer ansehen'
                },
                restaurant_teaser: {
                    title: 'Genießen Sie das Terroir',
                    text: 'Entdecken Sie die authentischen Aromen unserer Region. Unser Koch bereitet herzhafte Hausmannskost mit lokalen Produkten zu – vom traditionellen Aligot bis zu Tripoux. Genießen Sie Ihr Essen im Speisesaal oder auf der Terrasse.',
                    cta: 'Unsere Menüs entdecken'
                },
                region_teaser: {
                    title: 'Die Schluchten erkunden',
                    text: 'Wanderwege, malerische Dörfer und atemberaubende Aussichtspunkte warten direkt vor der Hoteltür. Lassen Sie sich von der Natur inspirieren.',
                    cta: 'Aktivitäten erkunden'
                },
                reviews: {
                    title: 'Was unsere Gäste sagen',
                    r1: '"Eine wunderschöne Umgebung und eine herzliche Gastfreundschaft. Der Pool nach einer Wanderung ist ein Traum!" - Sarah M.',
                    r2: '"Ausgezeichnete regionale Küche und sehr saubere, komfortable Zimmer. Wir kommen wieder." - Jean-Luc P.'
                },
                direct_booking: {
                    title: 'Bestpreisgarantie',
                    text: 'Buchen Sie direkt auf unserer Website für die besten Preise, flexible Stornobedingungen und direkten Kontakt mit unserem Team.',
                    cta: 'Jetzt buchen'
                }
            },
            hotel_page: {
                title: 'Unser Hotel',
                history_title: 'Unsere Geschichte',
                history_text: 'Seit 1954 empfängt die Familie Vergely ihre Gäste mit offenen Armen. Unsere familiäre Atmosphäre sorgt dafür, dass sich jeder Gast wie zu Hause fühlt – mitten in der Natur.',
                amenities_title: 'Unsere Ausstattung',
                amenities: {
                    pool: 'Saisonaler Außenpool & große Terrasse',
                    wifi: 'Kostenloser WLAN-Zugang im gesamten Hotel',
                    parking: 'Privater Parkplatz & Fahrradgarage',
                    pets: 'Haustiere willkommen (bitte kontaktieren)',
                    bar: 'Gemütliche Bar und Aufenthaltsbereich'
                },
                pool_area: {
                    title: 'Der Poolbereich',
                    text: 'Entspannen Sie in unserem Außenpool, umgeben von Liegestühlen. Nach einem Erkundungstag erfrischen Sie sich im kühlen Wasser und bewundern die imposanten Felsen der Jonte-Schluchten.'
                },
                gallery_title: 'Hotel-Galerie',
                why_choose_us: {
                    title: 'Warum unser Hotel wählen?',
                    p1: 'Familiäre Gastfreundschaft, die Sie sich wie zu Hause fühlen lässt.',
                    p2: 'Unschlagbare Lage in den Jonte-Schluchten.',
                    p3: 'Alles-in-einem: Schlafen, Essen und Schwimmen.',
                    p4: 'Authentisches regionales Kulinarik-Erlebnis.'
                }
            },
            rooms_page: {
                title: 'Unsere Zimmer',
                intro: 'Einfach, komfortabel und ruhig. Finden Sie das perfekte Zimmer für Ihren Aufenthalt in den Schluchten.',
                types: {
                    river: {
                        name: 'Zimmer mit Flussblick',
                        specs: '🛏️ 1 Großes Doppelbett | 👥 2 Personen | 📐 18 m²',
                        desc: 'Ein helles, luftiges Zimmer mit privatem Balkon und Blick auf den Fluss Jonte. Perfekt für Paare, die eine ruhige Auszeit suchen.',
                        features: 'Kostenloses WLAN, Flachbild-TV, Eigenes Bad, Schreibtisch, Haartrockner.',
                    },
                    standard: {
                        name: 'Standard-Doppelzimmer',
                        specs: '🛏️ 1 Doppelbett | 👥 2 Personen | 📐 15 m²',
                        desc: 'Komfortables, gut ausgestattetes Zimmer mit Blick auf das Dorf oder den Innenhof.',
                        features: 'Kostenloses WLAN, Flachbild-TV, Eigenes Bad.',
                    },
                    family: {
                        name: 'Familienzimmer',
                        specs: '🛏️ 1 Doppel- & 1 Einzelbett | 👥 3-4 Personen | 📐 22 m²',
                        desc: 'Geräumige Unterkunft ideal für Eltern mit einem Kind – komfortabel und ruhig.',
                        features: 'Kostenloses WLAN, Flachbild-TV, Eigenes Bad, Ruhige Atmosphäre.',
                    }
                },
                cta: 'Dieses Zimmer buchen',
                faq: {
                    title: 'Häufige Fragen',
                    q1: 'Wann ist Check-in und Check-out?',
                    a1: 'Check-in ab 15:00 Uhr, Check-out bis 11:00 Uhr.',
                    q2: 'Stellen Sie Babybetten zur Verfügung?',
                    a2: 'Ja, Babybetten sind auf Anfrage erhältlich.',
                    q3: 'Sind Haustiere erlaubt?',
                    a3: 'Ja, Haustiere sind willkommen. Bitte erwähnen Sie dies bei der Buchung (ggf. Aufpreis).'
                }
            },
            restaurant_page: {
                title: 'Restaurant & Terroir',
                intro_title: 'Authentische Regionalküche',
                intro: 'Unser Restaurant feiert das reiche kulinarische Erbe der Region. Genießen Sie herzhafte Hausmannskost aus lokalen Zutaten in gemütlicher Atmosphäre.',
                menu_intro: 'Unsere Menüs wechseln mit den Jahreszeiten, um Ihnen das Beste des Terroir zu bieten.',
                specialties: {
                    title: 'Unsere Spezialitäten',
                    aligot: { name: 'Traditionelles Aligot', desc: 'Das typische Gericht aus dem Aubrac – perfekt cremig und käsig' },
                    confit: { name: 'Entenconfit', desc: 'Konfierte Keule mit Sarladaise-Kartoffeln' },
                    charcuterie: { name: 'Lokale Wurstwaren', desc: 'Auswahl unserer handwerklichen Partnererzeuger' }
                },
                menus: {
                    title: 'Unsere Menüs',
                    evening: 'Abendmenü (Vorspeise, Hauptgang, Dessert) ab 25€',
                    half_board: 'Halbpension für Hotelgäste verfügbar'
                },
                hours: 'Frühstück: 7:30 – 10:00 Uhr | Abendessen: 19:00 – 21:00 Uhr | Auch für externe Gäste auf Reservierung',
                cta: 'Tisch reservieren'
            },
            surroundings_page: {
                title: 'Die Region erkunden',
                intro: 'Die Jonte- und Tarn-Schluchten bieten ein spektakuläres Spielfeld für Naturliebhaber und Abenteuerlustige.',
                activities: {
                    hiking: { title: 'Wanderwege', desc: 'Zahlreiche Wege starten direkt am Hotel, für alle Schwierigkeitsgrade geeignet.', dist: '0 km' },
                    vultures: { title: 'Geierhäuschen', desc: 'Beobachten Sie diese majestätischen Vögel im Flug über die Schluchten.', dist: '2 km' },
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
                cta: 'Verfügbarkeit prüfen'
            },
            contact_page: {
                title: 'Kontakt & Anfahrt',
                form_title: 'Schreiben Sie uns',
                directions: {
                    title: 'Anfahrt',
                    car: 'Mit dem Auto: Über die A75 (Ausfahrt 44/47), ca. 30 Min.',
                    train: 'Bahnhof: Millau (25 km)',
                    plane: 'Flughafen: Montpellier oder Rodez'
                },
                parking: 'Kostenloser Parkplatz vor Ort. Zahlungsmittel: Visa, Mastercard, Urlaubsschecks.',
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
