import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import Contact from "@/components/Contact";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Features />
      <EarlyAccessForm />
      <Contact />
      <SocialProof />
      <Footer />
    </div>
  );
};

export default Index;
