import { Clock, BookOpen, Users } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "Sunday Worship",
    time: "9:00 AM & 11:00 AM",
    description: "Join us for praise, worship, and an inspiring message.",
  },
  {
    icon: BookOpen,
    title: "Bible Study",
    time: "Wednesday 7:00 PM",
    description: "Dive deeper into God's word in a welcoming small group setting.",
  },
  {
    icon: Users,
    title: "Youth Group",
    time: "Friday 6:30 PM",
    description: "A vibrant community for teens to grow in faith and friendship.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-muted">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="font-body text-sm uppercase tracking-[0.25em] text-primary mb-3">Our Services</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
          Gather With Us
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-card rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
              <service.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
              {service.title}
            </h3>
            <p className="font-body text-sm text-primary font-medium mb-3">{service.time}</p>
            <p className="font-body text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
