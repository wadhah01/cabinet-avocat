import { Scale } from 'lucide-react';

export function CabinetHero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Scale className="w-12 h-12 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Agoubi Issam – Avocat à Gabès
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Un avocat engagé à Gabès, offrant un accompagnement juridique
            personnalisé, alliant expertise et innovation pour défendre vos droits.
          </p>
        </div>
      </div>
    </section>
  );
}
