import { useEffect, useState } from "react";

const pairs = [
  {
    before: "/sofap1.jpeg",
    after: "/sofap2.jpeg",
  },
  {
    before: "/sofag1.jpeg",
    after: "/sofag2.jpeg",
  },
];

export default function BeforeAfterSimple() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // começa fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % pairs.length);
        setFade(true); // fade in
      }, 400); // tempo do fade
    }, 5000); // troca a cada 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Veja a transformação
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* ANTES */}
        <div
          className={`transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={pairs[index].before}
            className="rounded-xl shadow-lg w-full"
          />
          <p className="text-center mt-2 text-gray-500">Antes</p>
        </div>

        {/* DEPOIS */}
        <div
          className={`transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={pairs[index].after}
            className="rounded-xl shadow-lg w-full"
          />
          <p className="text-center mt-2 text-gray-500">Depois</p>
        </div>
      </div>
    </div>
  );
}