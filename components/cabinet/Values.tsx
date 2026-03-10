import { Heart, Shield, Users, Clock } from 'lucide-react';

const values = [
  {
    title: 'Écoute & Proximité',
    description: 'Une relation de confiance basée sur l\'écoute et la compréhension de vos besoins spécifiques.',
    icon: Heart,
  },
  {
    title: 'Expertise & Rigueur',
    description: 'Une connaissance approfondie du droit et une rigueur absolue dans le traitement de vos dossiers.',
    icon: Shield,
  },
  {
    title: 'Accompagnement Personnalisé',
    description: 'Un suivi individualisé et des conseils adaptés à votre situation particulière.',
    icon: Users,
  },
  {
    title: 'Réactivité',
    description: 'Des délais de réponse courts et une disponibilité constante pour vos urgences.',
    icon: Clock,
  },
];

export function Values() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Valeurs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            L'excellence juridique au service de votre sérénité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 rounded-full mb-4 group-hover:bg-teal-500 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}