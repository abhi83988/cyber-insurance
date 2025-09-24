import CardFees from "./components/CardFees";
import FAQSection from "./components/FAQSection";
import Footer2 from "./components/Footer2";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";
import Thirdpage from "./components/Thirdpage";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Header />
      <StatsSection/>
      <CardFees />
      <Thirdpage />
      <HowItWorks />
      <Testimonials/>
      <FAQSection/>
      <Footer2/>
    </main>
  );
}
