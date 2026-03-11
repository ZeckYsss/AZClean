import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <img
          src={logo}
          alt="AZClean"
          className="h-10 object-contain brightness-0 invert"
        />

        <p className="text-background/60 text-sm font-body">
          © {new Date().getFullYear()} AZClean. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;