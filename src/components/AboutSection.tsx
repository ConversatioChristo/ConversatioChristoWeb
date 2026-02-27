import { Heart } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary mb-3">About Us</p>
          <h2 className="font-display text-4xl font-semibold text-foreground mb-6">
            Rooted in Faith,{" "}
            <span className="italic text-primary">Growing Together</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Daniel's Church has been a cornerstone of our community for over 50 years. 
            We believe in the transformative power of God's love and strive to create a 
            welcoming space for everyone.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Whether you're new to faith or have walked with God for decades, you'll find 
            a home here. Our doors are always open.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-muted rounded-lg p-12 text-center">
            <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
            <blockquote className="font-display text-xl italic text-foreground leading-relaxed mb-4">
              "For where two or three gather in my name, there am I with them."
            </blockquote>
            <cite className="font-body text-sm text-muted-foreground">— Matthew 18:20</cite>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
