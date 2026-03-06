import { motion } from 'framer-motion';

export default function LegalPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-32 pb-24"
        >
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl mb-12">Mentions Légales</h1>
                <div className="prose prose-lg text-forest-900/70">
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-forest-950 mb-4">Éditeur du site</h2>
                        <p>Hôtel Restaurant de la Jonte<br />Les Douzes - 12150 Peyreleau<br />Tél : 05 65 62 60 72<br />Email : hotel-la-jonte@orange.fr</p>
                    </section>
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-forest-950 mb-4">Hébergement</h2>
                        <p>Le site est hébergé par Vercel Inc.<br />340 S Lemon Ave #1192<br />Walnut, CA 91789, USA</p>
                    </section>
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-forest-950 mb-4">Protection des données</h2>
                        <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et d'opposition aux données vous concernant.</p>
                    </section>
                </div>
            </div>
        </motion.div>
    );
}
