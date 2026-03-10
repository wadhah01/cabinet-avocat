import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Informations de Contact
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-900 rounded-full">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
              <p className="text-gray-700">+216 98 567 372</p>
              <p className="text-sm text-gray-500">Appel direct au cabinet</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-900 rounded-full">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <p className="text-gray-700">maitre.agoubiissam@gmail.com</p>
              <p className="text-sm text-gray-500">Réponse sous 24h ouvrées</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-900 rounded-full">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
              <p className="text-gray-700">
                Rue Imroo el kaïs jara Gabes n 1 <br />
                Gabes, 6000
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-900 rounded-full">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
              <p className="text-gray-700">
                Lundi - Vendredi: 09h00 - 18h00<br />
                Samedi: Sur rendez-vous
              </p>
              <p className="text-sm text-gray-500">Urgences: 24h/24</p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Contact Rapide
          </h3>
          <p className="text-gray-600 mb-4">
            Pour une consultation urgente, contactez-nous directement via WhatsApp.
          </p>
          <Button 
            asChild
            className="bg-green-500 hover:bg-green-600 text-white font-semibold"
          >
            <a 
              href="https://wa.me/21698567372" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}