import serviceSofa from "@/assets/service-sofa.jpg";
import serviceColchao from "@/assets/service-colchao.jpg";
import serviceCadeira from "@/assets/service-cadeira.jpg";
import { Sparkles } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511913233854?text=Olá! Gostaria de agendar uma higienização.";

const services = [
  {
    title: "Sofás",
    description: "Higienização profunda que remove sujeira, ácaros e bactérias, devolvendo a vitalidade do seu sofá.",
    image: serviceSofa,
  },
  {
    title: "Colchões",
    description: "Elimine ácaros e alérgenos do seu colchão para noites de sono mais saudáveis.",
    image: serviceColchao,
  },
  {
    title: "Cadeiras e Poltronas",
    description: "Limpeza especializada para cadeiras de escritório, poltronas e estofados em geral.",
    image: serviceCadeira,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-heading text-sm font-semibold tracking-widest uppercase text-primary">
              O que fazemos
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground">
            Nossos Serviços
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <a
              key={service.title}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hero transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-block mt-4 text-primary font-heading font-bold text-sm group-hover:underline">
                  Solicitar orçamento →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
