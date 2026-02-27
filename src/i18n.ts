import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    fr: {
        translation: {
            nav: {
                home: 'Accueil',
                hotel: "L'Hôtel",
                restaurant: 'Le Restaurant',
                region: 'La Région',
                contact: 'Contact',
                reserve: 'Réserver',
            },
            hero: {
                title: 'Hôtel Restaurant',
                subtitle: 'de la Jonte',
                welcome: 'Bienvenue aux Douzes. Depuis 1954, la famille Vergely vous accueille en plein cœur des Gorges de la Jonte.',
                cta: 'Réserver une table',
                discover: 'Découvrir',
            },
            about: {
                badge: 'Séjournez aux Douzes',
                title: 'Notre Hôtel',
                p1: 'Bénéficiant d\'un accès direct à la rivière "La Jonte", notre hôtel vous offre un cadre exceptionnel pour vous ressourcer au cœur du Parc National des Cévennes.',
                p2: 'Nous disposons de 25 chambres équipées (téléphone, télévision écran plat, coffre-fort, salle de bains privative et balcon privé). L\'établissement est accessible aux personnes à mobilité réduite (PMR) et les animaux de compagnie sont admis.',
                features: [
                    'Piscine extérieure en saison & Grande terrasse',
                    'Espace détente (salon, billard)',
                    'Wifi gratuit',
                    'Parking privé & Garage à vélos',
                ],
                stats: {
                    creation: 'Création',
                    rooms: 'Chambres',
                },
            },
            gallery: {
                badge: 'Galerie',
                title: 'L\'expérience en images',
            },
            menu: {
                badge: 'Gastronomie Locale',
                title: 'Notre Restaurant',
                description: 'Maxime, Gilles, Cyril et leur équipe sont garants d\'une tradition de terroir. Nous servons une cuisine typiquement régionale où vous pourrez apprécier les mets les plus connus de la gastronomie locale.',
                tabs: {
                    specialties: 'Spécialités',
                    traditional: 'Plats Traditionnels',
                },
                items: {
                    charcuterie: { name: 'Charcuterie Locale', desc: 'Sélection de charcuteries de nos producteurs partenaires' },
                    muffin: { name: 'Muffin au Roquefort', desc: 'Spécialité maison au célèbre fromage de la région' },
                    aligot: { name: 'Aligot', desc: 'Le traditionnel plat de l\'Aubrac, filant à souhait' },
                    truite: { name: 'Truite Meunière', desc: 'Pêchée localement, préparée au beurre noisette' },
                    omelette: { name: 'Omelette aux Cèpes', desc: 'Œufs frais et cèpes de nos forêts' },
                    confit: { name: 'Confit de Canard', desc: 'Cuisse confite, pommes de terre sarladaises' },
                    veal: { name: 'Tête de Veau', desc: 'Sauce gribiche, légumes du pot-au-feu' },
                    tongue: { name: 'Langue de Bœuf', desc: 'Sauce piquante et petits légumes' },
                },
                hours: 'Ouverture du restaurant : 7 jours sur 7 - Fermeture les lundis midis',
                cta: 'Réserver une table',
            },
            region: {
                badge: 'Découvertes',
                title: 'Notre Région',
                description: 'Situé dans le Parc National des Cévennes, notre hôtel est le point de départ idéal pour explorer des sites touristiques incontournables et profiter de nombreuses randonnées.',
                activities: {
                    gorges: { title: 'Les Gorges de la Jonte', desc: 'Des paysages vertigineux et sauvages, parfaits pour la randonnée et l\'escalade.' },
                    vultures: { title: 'La Maison des Vautours', desc: 'Observez ces oiseaux majestueux et découvrez leur fabuleuse histoire dans leur milieu naturel.' },
                    viaduct: { title: 'Le Viaduc de Millau', desc: 'À seulement 29 km, admirez cette prouesse architecturale surplombant la vallée du Tarn.' },
                    causse: { title: 'Le Causse Méjean', desc: 'Un vaste plateau calcaire offrant des panoramas exceptionnels et des sites comme l\'Aven Armand.' },
                },
            },
            reservation: {
                badge: 'Réservation',
                title: 'Réservez votre table',
                description: 'Pour toute réservation de plus de 6 personnes, veuillez nous contacter directement par téléphone.',
                form: {
                    name: 'Nom complet',
                    namePlaceholder: 'Jean Dupont',
                    email: 'Email',
                    emailPlaceholder: 'jean@exemple.com',
                    date: 'Date',
                    time: 'Heure',
                    timeSelect: 'Sélectionner une heure',
                    guests: 'Nombre de personnes',
                    guestsSelectOne: 'personne',
                    guestsSelectMore: 'personnes',
                    phone: 'Téléphone',
                    phonePlaceholder: '06 12 34 56 78',
                    message: 'Demandes spéciales (allergies, etc.)',
                    messagePlaceholder: 'Avez-vous des allergies ou des demandes particulières ?',
                    submit: 'Confirmer la réservation',
                },
                success: {
                    title: 'Réservation confirmée',
                    message: 'Nous avons bien reçu votre demande. Un email de confirmation vous a été envoyé.',
                },
            },
            contact: {
                badge: 'Contact',
                title: 'Nous trouver',
                info: {
                    address: { title: 'Adresse' },
                    phone: { title: 'Téléphone' },
                    email: { title: 'Email' },
                    hours: {
                        title: 'Horaires',
                        p1: 'Ouvert 7j/7',
                        p2: 'Fermé le lundi midi',
                    },
                },
                follow: 'Suivez-nous',
            },
            footer: {
                legal: 'Mentions légales',
                privacy: 'Politique de confidentialité',
                cgv: 'CGV',
                copyright: 'Hôtel Restaurant de la Jonte. Tous droits réservés.',
            },
        },
    },
    en: {
        translation: {
            nav: {
                home: 'Home',
                hotel: 'Hotel',
                restaurant: 'Restaurant',
                region: 'Region',
                contact: 'Contact',
                reserve: 'Book',
            },
            hero: {
                title: 'Hotel Restaurant',
                subtitle: 'de la Jonte',
                welcome: 'Welcome to Les Douzes. Since 1954, the Vergely family has welcomed you to the heart of the Jonte Gorges.',
                cta: 'Book a table',
                discover: 'Discover',
            },
            about: {
                badge: 'Stay at Les Douzes',
                title: 'Our Hotel',
                p1: 'With direct access to the "Jonte" river, our hotel offers an exceptional setting to recharge your batteries in the heart of the Cévennes National Park.',
                p2: 'We have 25 equipped rooms (telephone, flat-screen TV, safe, private bathroom, and private balcony). The establishment is accessible to people with reduced mobility (PRM) and pets are allowed.',
                features: [
                    'Seasonal outdoor pool & large terrace',
                    'Relaxation area (lounge, billiards)',
                    'Free Wi-Fi',
                    'Private parking & bike garage',
                ],
                stats: {
                    creation: 'Established',
                    rooms: 'Rooms',
                },
            },
            gallery: {
                badge: 'Gallery',
                title: 'Experience in pictures',
            },
            menu: {
                badge: 'Local Gastronomy',
                title: 'Our Restaurant',
                description: 'Maxime, Gilles, Cyril, and their team are keepers of a local tradition. We serve typical regional cuisine where you can enjoy the most famous dishes of local gastronomy.',
                tabs: {
                    specialties: 'Specialties',
                    traditional: 'Traditional Dishes',
                },
                items: {
                    charcuterie: { name: 'Local Charcuterie', desc: 'Selection of cold meats from our partner producers' },
                    muffin: { name: 'Roquefort Muffin', desc: 'House specialty with the region\'s famous cheese' },
                    aligot: { name: 'Aligot', desc: 'The traditional dish from Aubrac, perfectly cheesy' },
                    truite: { name: 'Trout Meunière', desc: 'Locally caught, prepared with brown butter' },
                    omelette: { name: 'Porcini Mushroom Omelette', desc: 'Fresh eggs and porcini from our forests' },
                    confit: { name: 'Duck Confit', desc: 'Confit leg with Sarladaise-style potatoes' },
                    veal: { name: 'Calf\'s Head', desc: 'Gribiche sauce, pot-au-feu vegetables' },
                    tongue: { name: 'Beef Tongue', desc: 'Spicy sauce and baby vegetables' },
                },
                hours: 'Restaurant hours: 7 days a week - Closed Monday lunch',
                cta: 'Book a table',
            },
            region: {
                badge: 'Discoveries',
                title: 'Our Region',
                description: 'Located in the Cévennes National Park, our hotel is the ideal starting point to explore must-see tourist sites and enjoy numerous hikes.',
                activities: {
                    gorges: { title: 'The Jonte Gorges', desc: 'Veriginous and wild landscapes, perfect for hiking and climbing.' },
                    vultures: { title: 'The Vulture House', desc: 'Observe these majestic birds and discover their fabulous history in their natural environment.' },
                    viaduct: { title: 'The Millau Viaduct', desc: 'Just 29 km away, admire this architectural feat overlooking the Tarn valley.' },
                    causse: { title: 'Causse Méjean', desc: 'A vast limestone plateau offering exceptional panoramas and sites like Aven Armand.' },
                },
            },
            reservation: {
                badge: 'Reservation',
                title: 'Book your table',
                description: 'For any reservation of more than 6 people, please contact us directly by phone.',
                form: {
                    name: 'Full Name',
                    namePlaceholder: 'John Doe',
                    email: 'Email',
                    emailPlaceholder: 'john@example.com',
                    date: 'Date',
                    time: 'Time',
                    timeSelect: 'Select a time',
                    guests: 'Number of guests',
                    guestsSelectOne: 'person',
                    guestsSelectMore: 'people',
                    phone: 'Phone',
                    phonePlaceholder: '06 12 34 56 78',
                    message: 'Special requests (allergies, etc.)',
                    messagePlaceholder: 'Do you have any allergies or special requests?',
                    submit: 'Confirm reservation',
                },
                success: {
                    title: 'Reservation confirmed',
                    message: 'We have received your request. A confirmation email has been sent to you.',
                },
            },
            contact: {
                badge: 'Contact',
                title: 'Find us',
                info: {
                    address: { title: 'Address' },
                    phone: { title: 'Phone' },
                    email: { title: 'Email' },
                    hours: {
                        title: 'Hours',
                        p1: 'Open 7/7',
                        p2: 'Closed Monday lunch',
                    },
                },
                follow: 'Follow us',
            },
            footer: {
                legal: 'Legal Notice',
                privacy: 'Privacy Policy',
                cgv: 'Terms of Sale',
                copyright: 'Hotel Restaurant de la Jonte. All rights reserved.',
            },
        },
    },
    es: {
        translation: {
            nav: {
                home: 'Inicio',
                hotel: 'Hotel',
                restaurant: 'Restaurante',
                region: 'Región',
                contact: 'Contacto',
                reserve: 'Reservar',
            },
            hero: {
                title: 'Hotel Restaurante',
                subtitle: 'de la Jonte',
                welcome: 'Bienvenido a Les Douzes. Desde 1954, la familia Vergely le da la bienvenida al corazón de las Gargantas del Jonte.',
                cta: 'Reservar una mesa',
                discover: 'Descubrir',
            },
            about: {
                badge: 'Alójese en Les Douzes',
                title: 'Nuestro Hotel',
                p1: 'Con acceso directo al río "Jonte", nuestro hotel ofrece un entorno excepcional para recargar pilas en el corazón del Parque Nacional de las Cevenas.',
                p2: 'Disponemos de 25 habitaciones equipadas (teléfono, TV de pantalla plana, caja fuerte, baño privado y balcón privado). El establecimiento es accesible para personas con movilidad reducida (PMR) y se admiten mascotas.',
                features: [
                    'Piscina exterior de temporada y gran terraza',
                    'Zona de relax (salón, billard)',
                    'Wifi gratuito',
                    'Aparcamiento privado y garaje para bicicletas',
                ],
                stats: {
                    creation: 'Creación',
                    rooms: 'Habitaciones',
                },
            },
            gallery: {
                badge: 'Galería',
                title: 'La experiencia en imágenes',
            },
            menu: {
                badge: 'Gastronomía Local',
                title: 'Nuestro Restaurante',
                description: 'Maxime, Gilles, Cyril y su equipo son garantes de una tradición local. Servimos cocina típica regional donde podrá disfrutar de los platos más conocidos de la gastronomía local.',
                tabs: {
                    specialties: 'Especialidades',
                    traditional: 'Platos Tradicionales',
                },
                items: {
                    charcuterie: { name: 'Charcuteria Local', desc: 'Selección de embutidos de nuestros productores asociados' },
                    muffin: { name: 'Muffin de Roquefort', desc: 'Especialidad de la casa con el famoso queso de la región' },
                    aligot: { name: 'Aligot', desc: 'El plato tradicional de Aubrac, perfectamente hilado' },
                    truite: { name: 'Trucha Meunière', desc: 'Pescada localmente, preparada con mantequilla avellana' },
                    omelette: { name: 'Tortilla con Boletos', desc: 'Huevos frescos y boletos de nuestros bosques' },
                    confit: { name: 'Confit de Pato', desc: 'Muslo confitado con patatas estilo Sarladaise' },
                    veal: { name: 'Cabeza de Ternera', desc: 'Salsa gribiche, verduras de pot-au-feu' },
                    tongue: { name: 'Lengua de Vaca', desc: 'Salsa picante y verduritas' },
                },
                hours: 'Horario del restaurante: 7 días a la semana - Cerrado lunes mediodía',
                cta: 'Reservar una mesa',
            },
            region: {
                badge: 'Descubrimientos',
                title: 'Nuestra Región',
                description: 'Situado en el Parque Nacional de las Cevenas, nuestro hotel es el punto de partida ideal para explorar lugares turísticos imprescindibles y disfrutar de numerosas excursiones.',
                activities: {
                    gorges: { title: 'Las Gargantas del Jonte', desc: 'Paisajes vertiginosos y salvajes, perfectos para el senderismo y la escalada.' },
                    vultures: { title: 'La Casa de los Buitres', desc: 'Observe estas majestuosas aves y descubra su fabulosa historia en su entorno natural.' },
                    viaduct: { title: 'El Viaducto de Millau', desc: 'A solo 29 km, admire esta proeza arquitectónica con vistas al valle del Tarn.' },
                    causse: { title: 'Causse Méjean', desc: 'Una vasta meseta caliza que ofrece panoramas excepcionales y lugares como Aven Armand.' },
                },
            },
            reservation: {
                badge: 'Reserva',
                title: 'Reserve su mesa',
                description: 'Para cualquier reserva de más de 6 personas, póngase en contacto con nosotros directamente por teléfono.',
                form: {
                    name: 'Nombre completo',
                    namePlaceholder: 'Juan Pérez',
                    email: 'Correo electrónico',
                    emailPlaceholder: 'juan@ejemplo.com',
                    date: 'Fecha',
                    time: 'Hora',
                    timeSelect: 'Seleccionar hora',
                    guests: 'Número de personas',
                    guestsSelectOne: 'persona',
                    guestsSelectMore: 'personas',
                    phone: 'Teléfono',
                    phonePlaceholder: '06 12 34 56 78',
                    message: 'Peticiones especiales (alergias, etc.)',
                    messagePlaceholder: '¿Tiene alguna alergia o petición especial?',
                    submit: 'Confirmar reserva',
                },
                success: {
                    title: 'Reserva confirmada',
                    message: 'Hemos recibido su solicitud. Se le ha enviado un correo electrónico de confirmación.',
                },
            },
            contact: {
                badge: 'Contacto',
                title: 'Encuéntrenos',
                info: {
                    address: { title: 'Dirección' },
                    phone: { title: 'Teléfono' },
                    email: { title: 'Correo electrónico' },
                    hours: {
                        title: 'Horario',
                        p1: 'Abierto 7/7',
                        p2: 'Cerrado lunes mediodía',
                    },
                },
                follow: 'Síguenos',
            },
            footer: {
                legal: 'Aviso legal',
                privacy: 'Política de privacidad',
                cgv: 'Condiciones generales de venta',
                copyright: 'Hotel Restaurant de la Jonte. Todos los derechos reservados.',
            },
        },
    },
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
