import Link from 'next/link';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-8 h-8 text-yellow-400" />
              <span className="text-xl font-bold">Cabinet Agoubi Issam</span>
            </div>
            <p className="text-blue-100 mb-4 max-w-md">
              Cabinet d'avocat de référence en Tunisie , spécialisé dans le conseil juridique 
              et l'accompagnement de particuliers et entreprises.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact</h3>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+216 98 567 372</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>maitreagoubiissam@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Rue Imroo el kaïs jara Gabes n 1 <br />Gabes, 6000</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Navigation</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-blue-100 hover:text-white transition-colors">
                Accueil
              </Link>
              <Link href="/nos-specialites" className="block text-blue-100 hover:text-white transition-colors">
                Nos Spécialités
              </Link>
              <Link href="/notre-cabinet" className="block text-blue-100 hover:text-white transition-colors">
                Notre Cabinet
              </Link>
              <Link href="/contact" className="block text-blue-100 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; 2025 Cabinet Agoubi Issam. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}