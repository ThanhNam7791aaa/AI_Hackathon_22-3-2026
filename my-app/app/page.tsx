import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-32">
        {/* Hero */}
        <HeroSection />

        {/* Asymmetric Bento Grid Features */}
        <FeaturesSection />

        {/* Pricing */}
        <PricingSection />

        {/* Signature Scan CTA */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
