import { Quote } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      quote: "The verification process gives me confidence that I'm buying from legitimate sellers. The quality of projects on RYZE is unmatched.",
      author: "Sarah Chen",
      role: "Startup Founder",
      avatar: "SC"
    },
    {
      quote: "As a seller, the partnership program has been game-changing. The visibility and premium buyer access has doubled my sales.",
      author: "Marcus Rodriguez",
      role: "Full-Stack Developer",
      avatar: "MR"
    },
    {
      quote: "The live preview feature saved me from making a costly mistake. Being able to test projects before purchasing is invaluable.",
      author: "Emily Watson",
      role: "Digital Agency Owner",
      avatar: "EW"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Trusted by <span className="text-gradient">Thousands</span> of Users
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our early beta users and partners are saying about the RYZE experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft card-hover relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-8 h-8 text-primary" />
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <p className="text-card-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">2,500+</div>
            <div className="text-muted-foreground">Beta Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">$2.4M+</div>
            <div className="text-muted-foreground">in Transactions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">150+</div>
            <div className="text-muted-foreground">Verified Sellers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;