import { MapPin, Phone, Mail, Church } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 bg-muted">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="font-body text-sm uppercase tracking-[0.25em] text-primary mb-3">Get In Touch</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
          Visit Us
        </h2>
      </div>
      <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">Address</h3>
          <p className="font-body text-muted-foreground text-sm leading-relaxed">
            123 Faith Avenue<br />
            Springfield, IL 62701
          </p>
        </div>
        <div>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">Phone</h3>
          <p className="font-body text-muted-foreground text-sm">(555) 123-4567</p>
        </div>
        <div>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">Email</h3>
          <p className="font-body text-muted-foreground text-sm">hello@danielschurch.org</p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
