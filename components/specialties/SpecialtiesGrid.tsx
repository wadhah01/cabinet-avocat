import { FileText, Building2, Home, Users, Briefcase, Shield } from 'lucide-react';

const specialties = [
  {
    title: 'Droit Pénal',
    description: 'Défense pénale, assistance lors des garde-à-vue, représentation devant les tribunaux correctionnels.',
    details: [
      'Défense pénale',
      'Assistance garde-à-vue',
      'Tribunal correctionnel',
      'Droit pénal des affaires'
    ],
    icon: Shield,
  },
  {
    title: 'Droit Civil',
    description: 'Accompagnement dans vos litiges civils, responsabilité civile, contrats et obligations. Représentation devant toutes juridictions.',
    details: [
      'Responsabilité civile',
      'Contrats et obligations',
      'Dommages et intérêts',
      'Litiges entre particuliers'
    ],
    icon: FileText,
  },
  {
    title: 'Droit Commercial',
    description: 'Conseil aux entreprises, création de sociétés, contrats commerciaux, recouvrement et contentieux commercial.',
    details: [
      'Création d\'entreprises',
      'Contrats commerciaux',
      'Recouvrement de créances',
      'Contentieux commercial'
    ],
    icon: Building2,
  },
  {
    title: 'Droit Immobilier',
    description: 'Transactions immobilières, baux commerciaux, copropriété, urbanisme et construction.',
    details: [
      'Vente et acquisition',
      'Baux commerciaux et d\'habitation',
      'Copropriété',
      'Urbanisme et construction'
    ],
    icon: Home,
  },
  {
    title: 'Droit de la Famille',
    description: 'Divorce, succession, adoption, protection des mineurs, régimes matrimoniaux.',
    details: [
      'Divorce et séparation',
      'Succession et testament',
      'Garde d\'enfants',
      'Régimes matrimoniaux'
    ],
    icon: Users,
  },
  {
    title: 'Droit des Affaires',
    description: 'Structuration juridique, fusions-acquisitions, gouvernance d\'entreprise, compliance.',
    details: [
      'Structuration juridique',
      'Fusions-acquisitions',
      'Gouvernance d\'entreprise',
      'Compliance et réglementation'
    ],
    icon: Briefcase,
  },
  
];

export function SpecialtiesGrid() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-6 mx-auto">
                <specialty.icon className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {specialty.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {specialty.description}
              </p>
              <ul className="space-y-2">
                {specialty.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}