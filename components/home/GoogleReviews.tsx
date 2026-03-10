import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'mondher boukchena',
    rating: 5,
    text: 'Excellent avocat avec bon accompagnement',
    date: 'Il y a 2 mois'
  },
  {
    name: 'Beyeder',
    rating: 5,
    text: 'Très satisfait du conseil , très bon avocat',
    date: 'Il y a 1 mois'
  },
  {
    name: 'Sofien Hamrouni',
    rating: 5,
    text: "Cabinet très professionnel, à l'écoute et réactif. Je recommande vivement pour toute question juridique.",
    date: 'Il y a 3 semaines'
  }
];

export function GoogleReviews() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Témoignages Clients
          </h2>

          {/* Stars + "Plus que 35 reviews 5/5" */}
          <div className="flex flex-col items-center justify-center space-y-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-700 flex items-center gap-1">
              Plus que 35 reviews 5/5
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              sur Google
            </span>
          </div>

          <p className="text-lg text-gray-600">
            La satisfaction de nos clients est notre priorité
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-yellow-400 mb-2" />
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <div className="flex mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Button after reviews */}
        <div className="text-center">
          <a
            href="https://share.google/oJNm3e3slPoWnbUVp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1E3A8A] hover:bg-[#163271] text-white font-medium px-5 py-2 rounded-lg shadow transition-colors duration-300"
          >
            Voir plus d’avis sur Google
          </a>
        </div>
      </div>
    </section>
  );
}
