"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5668863/pexels-photo-5668863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5668868/pexels-photo-5668868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

export function Biography() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* 🖼 Image Gallery */}
          <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Photo ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* ⬅️ Left Arrow */}
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* ➡️ Right Arrow */}
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* 📄 Biography Text */}
        <div>
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
    Maître Issam Agoubi
  </h2>
  <div className="space-y-4 text-gray-700 leading-relaxed">
    <p>
      Diplômé de la Faculté de Droit de Tunis, Université Tunis El Manar, Maître Issam Agoubi 
      exerce au Barreau de Gabès depuis plusieurs années.
    </p>
    <p>
      Son expertise couvre le conseil aux particuliers ainsi que l'accompagnement des entreprises 
      dans leurs problématiques juridiques. Il privilégie une approche pragmatique, humaine et orientée résultats.
    </p>
    <p>
      Maître Agoubi met l'accent sur l'écoute et la pédagogie afin d'expliquer clairement 
      les enjeux juridiques et permettre à ses clients de prendre les meilleures décisions.
    </p>
  </div>
  <div className="mt-8">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Formation</h3>
    <ul className="space-y-2 text-gray-700">
      <li className="flex items-center">
        <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
        Maîtrise en Droit - Faculté de Droit, Tunis El Manar, 2004
      </li>
      <li className="flex items-center">
        <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
        Diplôme des Études Approfondies - Faculté de Droit, Tunis El Manar, 2006
      </li>
    </ul>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
