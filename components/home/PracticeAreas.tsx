import { FileText, Building2, Home, Users } from 'lucide-react';

const practiceAreas = [
  {
    title: 'Droit Civil',
    description: 'Accompagnement dans vos litiges civils, responsabilité, contrats et obligations.',
    icon: FileText,
  },
  {
    title: 'Droit Commercial',
    description: 'Conseil aux entreprises, création de sociétés, contrats commerciaux.',
    icon: Building2,
  },
  {
    title: 'Droit Immobilier',
    description: 'Transactions immobilières, baux commerciaux, copropriété.',
    icon: Home,
  },
  {
    title: 'Droit de la Famille',
    description: 'Divorce, succession, adoption, protection des mineurs.',
    icon: Users,
  },
];

export function PracticeAreas() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Domaines d'Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un accompagnement juridique complet dans tous vos projets personnels et professionnels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4 group-hover:bg-yellow-300 transition-colors duration-300">
                <area.icon className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}