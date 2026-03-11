import { useState, useRef } from "react";

export default function BeforeAfter() {
  const [slider, setSlider] = useState(70);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;

    setSlider(Math.max(0, Math.min(100, percent)));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging.current) updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current) return;
    updatePosition(e.touches[0].clientX);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          1. Veja a transformação da limpeza
        </h2>

        <div
          ref={containerRef}
          className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl select-none"
          style={{ touchAction: "none" }}
          onMouseMove={handleMouseMove}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => (dragging.current = false)}
        >

          {/* Depois */}
          <img
            src="/depois.png"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Antes */}
          <img
            src="/antes.png"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: slider / 100 }}
          />

          {/* Linha */}
          <div
            className="absolute top-0 bottom-0 w-[3px] bg-white shadow"
            style={{
              left: `${slider}%`,
              transform: "translateX(-50%)",
            }}
          />

          {/* Handle */}
          <div
            className="absolute cursor-ew-resize"
            style={{
              left: `${slider}%`,
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            onMouseDown={() => (dragging.current = true)}
            onTouchStart={() => (dragging.current = true)}
          >
            <div className="w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition">

              {/* Ícone */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7l-5 5m0 0l5 5m-5-5h18m-3-5l5 5m0 0l-5 5"
                />
              </svg>

            </div>
          </div>

        </div>

        <div className="flex justify-between mt-4 text-sm font-semibold text-gray-500">
          <span>Antes</span>
          <span>Depois</span>
        </div>

      </div>
    </section>
  );
}