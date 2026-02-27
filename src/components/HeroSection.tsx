import heroImage from "@/assets/hero-church.jpg";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    />
    <div className="absolute inset-0 bg-church-dark/60" />
    <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
      <p className="font-body text-sm uppercase tracking-[0.3em] text-primary-foreground/80 mb-4">
        Welcome to
      </p>
      <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
        Daniel's Church
      </h1>
      <p className="font-body text-lg md:text-xl text-primary-foreground/90 font-light max-w-xl mx-auto mb-8">
        A place of faith, hope, and community. Come as you are — you belong here.
      </p>
      <a
        href="#services"
        className="inline-block bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider px-8 py-3 rounded-sm hover:opacity-90 transition-opacity"
      >
        Join Us This Sunday
      </a>
    </div>
  </section>
);

export default HeroSection;
