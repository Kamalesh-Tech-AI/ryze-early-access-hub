import { Shield, Eye, Handshake } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Sellers for Quality Assurance",
      description: "Every seller goes through our rigorous verification process. We validate identities, check portfolios, and ensure only high-quality projects make it to our marketplace.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Eye,
      title: "Secure Transactions & Live Project Previews",
      description: "Experience projects before you buy with our live preview system. Secure escrow payments protect both buyers and sellers throughout every transaction.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Handshake,
      title: "Exclusive Partnership Programs for Top Sellers",
      description: "Join our elite partnership program for verified sellers. Get priority listing, enhanced visibility, and access to premium buyer networks.",
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Why Choose <span className="text-gradient">RYZE</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've built the most trusted platform for buying and selling digital projects. 
            Here's what sets us apart from the competition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border card-hover"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300"
                     style={{ background: `linear-gradient(135deg, ${feature.gradient.split(' ')[1]}, ${feature.gradient.split(' ')[3]})` }}>
                </div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-medium`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;