import { Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About RYZE
            </h2>
            <p className="text-xl text-muted-foreground">
              Empowering communities through innovative marketplace solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To create seamless connections between buyers and sellers in a trusted marketplace environment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Our Community</h3>
              <p className="text-muted-foreground">
                Building a vibrant ecosystem where trust and quality come first for every transaction.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Our Values</h3>
              <p className="text-muted-foreground">
                Transparency, security, and innovation drive everything we do for our users.
              </p>
            </div>
          </div>

          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="mb-4">
              RYZE is revolutionizing the way people buy and sell online. Our platform combines cutting-edge technology with user-friendly design to create an unparalleled marketplace experience.
            </p>
            <p>
              Founded on principles of trust and community, we're committed to building a platform where every transaction is secure, every user is valued, and every interaction matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
