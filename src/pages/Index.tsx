import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <EarlyAccessForm />
      <SocialProof />
      <Footer />
    </div>
  );
};

export default Index;
