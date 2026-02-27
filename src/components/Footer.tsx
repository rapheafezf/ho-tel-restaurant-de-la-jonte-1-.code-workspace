import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white text-zinc-500 py-16 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#home" className="font-serif text-2xl font-bold tracking-wider text-zinc-900">
              LA JONTE
            </a>
          </div>

          <div className="flex space-x-8 text-sm font-medium tracking-wide uppercase">
            <a href="#" className="hover:text-gold-500 transition-colors">{t('footer.legal')}</a>
            <a href="#" className="hover:text-gold-500 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-gold-500 transition-colors">{t('footer.cgv')}</a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-50 text-center text-xs font-light tracking-widest text-zinc-400">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
