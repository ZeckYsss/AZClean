export default function BeforeAfterSimple() {

  return (
    <div className="max-w-4xl mx-auto px-6">

      <h2 className="text-3xl font-bold text-center mb-10">
        3. Comparação Simples
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <img
            src="/antes.png"
            className="rounded-xl shadow-lg"
          />
          <p className="text-center mt-2 text-gray-500">
            Antes
          </p>
        </div>

        <div>
          <img
            src="/depois.png"
            className="rounded-xl shadow-lg"
          />
          <p className="text-center mt-2 text-gray-500">
            Depois
          </p>
        </div>

      </div>

    </div>
  );
}