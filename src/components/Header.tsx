import logo from "@/assets/logo.png";
import { Phone } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5511913233854?text=Olá! Gostaria de agendar uma higienização.";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="AZClean" className="h-12 object-contain" />
          <span className="sr-only">AZClean</span>
        </a>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide">
          <a
            href="#servicos"
            className="relative text-foreground/80 hover:text-primary transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Serviços
          </a>

          <a
            href="#sobre"
            className="relative text-foreground/80 hover:text-primary transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Sobre
          </a>

          <a
            href="#contato"
            className="relative text-foreground/80 hover:text-primary transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Contato
          </a>
        </nav>

        {/* Botão WhatsApp */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold tracking-wide text-primary-foreground shadow-sm hover:shadow-md hover:opacity-95 transition-all"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Agendar</span>
        </a>

      </div>
    </header>
  );
};

export default Header;