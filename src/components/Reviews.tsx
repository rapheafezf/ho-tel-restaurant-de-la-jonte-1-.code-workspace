import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sophie L.',
    text: 'Une expérience culinaire hors du commun. Le service est impeccable et chaque plat est une œuvre d\'art.',
    rating: 5,
  },
  {
    name: 'Marc D.',
    text: 'L\'atmosphère est élégante sans être guindée. Le menu dégustation est un voyage de saveurs incroyable.',
    rating: 5,
  },
  {
    name: 'Élodie M.',
    text: 'Parfait pour célébrer une occasion spéciale. La carte des vins est exceptionnelle et les conseils du sommelier précieux.',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-4 block">
            Témoignages
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-900 mb-6">
            Ce que disent nos <span className="italic font-light">clients</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-zinc-50 p-8 rounded-sm shadow-sm border border-zinc-100"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                ))}
              </div>
              <p className="text-zinc-600 font-light italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <p className="font-medium text-zinc-900 tracking-wide">
                — {review.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
