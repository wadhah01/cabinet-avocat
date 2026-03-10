import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-cyan-500 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Besoin d'un Conseil Juridique ?
        </h2>
        <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
          Prenez rendez-vous pour une consultation personnalisée. 
          Première consultation d'évaluation gratuite.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Prendre Rendez-vous
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:+33142345678"
            className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Appeler Maintenant
          </a>
        </div>
      </div>
    </section>
  );
}