import { ShieldCheck, Leaf, Clock, Award } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Produtos Seguros", desc: "Utilizamos produtos biodegradáveis e seguros para crianças e pets." },
  { icon: Leaf, title: "Antialérgico", desc: "Eliminação de ácaros, fungos e bactérias dos seus estofados." },
  { icon: Clock, title: "Atendimento Rápido", desc: "Agendamento flexível e atendimento no horário combinado." },
  { icon: Award, title: "Qualidade Garantida", desc: "Anos de experiência em higienização profissional." },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground mb-6">
            Por que escolher a <span className="text-primary">AZ</span><span className="text-secondary">Clean</span>?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Somos especialistas em higienização de estofados, oferecendo um serviço profissional
            que garante a saúde e o bem-estar da sua família.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="bg-muted rounded-2xl p-6 text-center hover:shadow-card transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <feat.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{feat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
