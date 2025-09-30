import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-marketplace.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-subtle min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Your Trusted{" "}
                <span className="text-hero-gradient">Marketplace</span> to Buy & Sell 
                Projects, Portfolios, and Websites
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Admin-verified listings and partnerships to help you find quality projects fast. 
                Connect with verified sellers and discover premium digital assets.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="btn-hero text-lg px-8 py-6"
                onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the Waitlist
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="btn-outline-hero text-lg px-8 py-6"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Verified Sellers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Secure Transactions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Partnership Programs</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-2xl blur-3xl opacity-30 animate-float"></div>
              <img
                src={heroImage}
                alt="RYZE Marketplace Platform"
                className="relative w-full h-auto rounded-2xl shadow-large hover:shadow-glow transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;