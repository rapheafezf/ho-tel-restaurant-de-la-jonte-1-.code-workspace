import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface LightboxProps {
    images: string[];
    startIndex: number;
    onClose: () => void;
}

export default function Lightbox({ images, startIndex, onClose }: LightboxProps) {
    const [current, setCurrent] = useState(startIndex);

    // Close on Escape key, navigate with arrow keys
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % images.length);
            if (e.key === 'ArrowLeft') setCurrent((c) => (c - 1 + images.length) % images.length);
        };
        window.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [images.length, onClose]);

    const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
    const next = () => setCurrent((c) => (c + 1) % images.length);

    return (
        <AnimatePresence>
            <motion.div
                key="lightbox-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                onClick={onClose}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Counter */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-light tracking-widest">
                    {current + 1} / {images.length}
                </div>

                {/* Prev button */}
                {images.length > 1 && (
                    <button
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                        className="absolute left-4 md:left-8 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                )}

                {/* Image */}
                <motion.img
                    key={current}
                    src={images[current]}
                    alt={`Image ${current + 1}`}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                />

                {/* Next button */}
                {images.length > 1 && (
                    <button
                        onClick={(e) => { e.stopPropagation(); next(); }}
                        className="absolute right-4 md:right-8 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                )}

                {/* Thumbnail strip */}
                {images.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                        {images.map((src, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
                                className={`w-12 h-8 rounded overflow-hidden border-2 transition-all ${idx === current ? 'border-gold-400 opacity-100' : 'border-white/20 opacity-50 hover:opacity-80'}`}
                            >
                                <img src={src} alt="" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}
