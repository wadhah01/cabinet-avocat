import Link from 'next/link';
import { ArrowRight, Scale } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Scale className="w-16 h-16 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Maître Issam Agoubi
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Avocat au Barreau de Tunisie
          </p>
          <p className="text-lg md:text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
            Expert en droit pénal , civil, commercial et immobilier. 
            Plus de 15 ans d'expérience au service de vos droits.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contactez-nous
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}