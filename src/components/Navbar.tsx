import { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, i18n } = useTranslation();

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
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.hotel'), href: '#hotel' },
    { name: t('nav.restaurant'), href: '#restaurant' },
    { name: t('nav.region'), href: '#region' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className={`font-serif text-2xl font-bold tracking-wider ${isScrolled ? 'text-zinc-900' : 'text-white'
                }`}
            >
              LA JONTE
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide hover:text-gold-500 transition-colors ${isScrolled ? 'text-zinc-600' : 'text-zinc-200'
                  }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservation"
              className={`px-6 py-2.5 rounded-sm text-sm font-medium tracking-wider uppercase transition-all ${isScrolled
                  ? 'bg-zinc-900 text-white hover:bg-gold-500'
                  : 'bg-white text-zinc-900 hover:bg-gold-500 hover:text-white'
                }`}
            >
              {t('nav.reserve')}
            </a>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`p-2 rounded-full flex items-center space-x-1 transition-colors ${isScrolled
                    ? 'text-zinc-600 hover:bg-zinc-50'
                    : 'text-white hover:bg-white/10'
                  }`}
              >
                <Globe size={18} />
                <span className="text-xs uppercase font-bold">{i18n.language.substring(0, 2)}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-40 bg-white shadow-xl rounded-sm border border-zinc-100 py-2"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${i18n.language === lang.code
                            ? 'text-gold-500 font-bold bg-zinc-50'
                            : 'text-zinc-600 hover:bg-zinc-50'
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
              className={`p-2 ${isScrolled ? 'text-zinc-900' : 'text-white'}`}
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-zinc-900 text-lg font-medium py-2 border-b border-zinc-50"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Language Selector */}
            <div className="flex space-x-4 py-2 border-b border-zinc-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-sm uppercase font-bold p-2 ${i18n.language === lang.code ? 'text-gold-500' : 'text-zinc-400'
                    }`}
                >
                  {lang.code}
                </button>
              ))}
            </div>

            <a
              href="#reservation"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-zinc-900 text-white text-center py-4 rounded-sm font-medium tracking-wider uppercase text-sm mt-4"
            >
              {t('nav.reserve')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
