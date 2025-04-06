import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Hero from "./(landing)/components/hero";
import HowItWorks from "./(landing)/components/how-it-works";
import Features from "./(landing)/components/features";
import BusinessBenefits from "./(landing)/components/business-benefits";
import CTASection from "./(landing)/components/cta-section";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <BusinessBenefits />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
