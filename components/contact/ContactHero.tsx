import { MapPin, Phone, Mail } from 'lucide-react';

export function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contactez-Nous
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous pour une consultation personnalisée. 
            Nous sommes à votre disposition pour répondre à vos questions juridiques.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4">
                <Phone className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
              <p className="text-blue-100">+216 98 567 372</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4">
                <Mail className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-blue-100">maitre.agoubiissam@gmail.com</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Adresse</h3>
              <p className="text-blue-100">Rue Imroo el kaïs jara Gabes n 1 <br />Gabes, 6000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}