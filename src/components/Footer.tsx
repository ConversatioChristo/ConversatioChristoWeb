import { Church } from "lucide-react";

const Footer = () => (
  <footer className="py-12 bg-foreground">
    <div className="container mx-auto px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Church className="h-5 w-5 text-background/70" />
        <span className="font-display text-lg text-background/90">Daniel's Church</span>
      </div>
      <p className="font-body text-sm text-background/50">
        © 2026 Daniel's Church. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
