import { useState, useEffect } from "react";

export default function BeforeAfterCarousel() {
  const images = [
    "/sofa.png",
    "/cama.png",
    "/tapete.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-6">

      <h2 className="text-3xl font-bold text-center mb-10">
        2. Resultados de Limpeza
      </h2>

      <div className="relative overflow-hidden rounded-2xl shadow-xl">

        {/* container das imagens */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-full flex-shrink-0"
            />
          ))}
        </div>

        {/* botão esquerda */}
            <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur rounded-full w-10 h-10 shadow-lg flex items-center justify-center hover:scale-110 transition"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            </button>

            {/* botão direita */}
            <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur rounded-full w-10 h-10 shadow-lg flex items-center justify-center hover:scale-110 transition"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </button>

      </div>

    </div>
  );
}