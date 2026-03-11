import heroBg from "@/assets/hero-bg.jpg";
import { Sparkles, ShieldCheck } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511913233854?text=Olá! Gostaria de agendar uma higienização.";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-in">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="font-heading text-sm font-semibold tracking-widest uppercase text-accent">
              Higienização Profissional
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-background animate-fade-in-up">
            Seu estofado <br />
            <span className="text-primary">limpo</span> e{" "}
            <span className="text-accent">sem ácaros</span>
          </h1>

          <p className="text-lg md:text-xl text-background/80 mb-8 max-w-lg font-body leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Higienização especializada de sofás, colchões, cadeiras e poltronas. 
            Ambiente mais saudável para sua família.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-heading font-bold text-lg hover:opacity-90 transition-all shadow-hero"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border-2 border-background/30 text-background px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-background/10 transition-all"
            >
              <ShieldCheck className="w-5 h-5" />
              Nossos Serviços
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2 text-background/70">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-heading font-medium">Produtos seguros</span>
            </div>
            <div className="flex items-center gap-2 text-background/70">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-heading font-medium">Resultado garantido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
