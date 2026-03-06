import { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.hotel'), href: '/hotel' },
    { name: t('nav.rooms'), href: '/chambres' },
    { name: t('nav.restaurant'), href: '/restaurant' },
    { name: t('nav.region'), href: '/environs' },
    { name: t('nav.offers'), href: '/offres' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const languages = [
    { code: 'fr', name: '🇫🇷 Français' },
    { code: 'en', name: '🇬🇧 English' },
    { code: 'es', name: '🇪🇸 Español' },
    { code: 'de', name: '🇩🇪 Deutsch' },
  ];

  const isTransparentPage = location.pathname === '/' || location.pathname === '/chambres';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
        ? 'bg-beige-50/90 backdrop-blur-xl shadow-sm py-3'
        : isTransparentPage ? 'bg-transparent py-8' : 'bg-beige-100 py-3 shadow-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex-1">
            <Link
              to="/"
              className={`font-display text-2xl font-bold tracking-[0.1em] transition-colors duration-500 uppercase ${isScrolled || !isTransparentPage ? 'text-forest-950' : 'text-white'
                }`}
            >
              La Jonte
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) => `text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${isActive ? 'text-gold-500' : (isScrolled || !isTransparentPage ? 'text-forest-900/60 hover:text-forest-900' : 'text-white/70 hover:text-white')
                  }`}
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="btn-primary py-3 px-6 text-[10px]"
            >
              {t('nav.reserve')}
            </Link>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`p-2 rounded-full flex items-center space-x-2 transition-all duration-300 group ${isScrolled || !isTransparentPage
                  ? 'text-forest-950/60 hover:bg-forest-950/5'
                  : 'text-white/60 hover:bg-white/10'
                  }`}
              >
                <Globe size={16} />
                <span className="text-[10px] uppercase font-bold tracking-tighter">{i18n.language.substring(0, 2)}</span>
                <ChevronDown size={12} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-4 w-48 bg-white shadow-2xl rounded-2xl border border-beige-200 py-3 overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-5 py-3 text-xs tracking-wider transition-colors ${i18n.language === lang.code
                          ? 'text-gold-500 font-bold bg-beige-100'
                          : 'text-forest-950/70 hover:bg-beige-50'
                          }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-300 ${isScrolled || !isTransparentPage ? 'text-forest-950' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-beige-50 shadow-2xl py-12 px-8 flex flex-col space-y-8 overflow-hidden"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `text-forest-950 text-2xl font-display tracking-tight border-b border-forest-950/5 pb-4 ${isActive ? 'text-gold-500' : ''}`}
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary text-center py-6"
            >
              {t('nav.reserve')}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
