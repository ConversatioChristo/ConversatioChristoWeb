import { Church, Clock, MapPin, Phone, Mail, Heart, Users, BookOpen } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Church className="h-6 w-6 text-primary" />
        <span className="font-display text-xl font-semibold text-foreground">Daniel's Church</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide uppercase">Services</a>
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide uppercase">About</a>
        <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide uppercase">Contact</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
