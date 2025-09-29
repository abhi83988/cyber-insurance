import CardFees from "./components/CardFees";
import CtaSection from "./components/CTASection";
import FAQSection from "./components/FAQSection";
import Footer2 from "./components/Footer2";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import PaymentEvolution from "./components/PaymentEvolution";
import ScrollComponent from "./components/ScrollCards";
import StackingBlocks from "./components/StackingBlock";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";
import Thirdpage from "./components/Thirdpage";
import {ThreeCards} from "./components/ThreeCards";
import UspsSection from "./components/UspsSection";

export default function Home() {
  return (
   <main className="min-h-screen">
      <Hero/>
      <Header />
      {/* <StatsSection/> */}
      <CardFees />
      {/* <UspsSection/> */}
      {/* <Thirdpage /> */}
      {/* <ScrollComponent/> */}
      <HowItWorks />
      <StackingBlocks />
      <PaymentEvolution/>
      <Testimonials/>
      <FAQSection/>
      <CtaSection/>
      <Footer2/>
    </main>
  );
}
