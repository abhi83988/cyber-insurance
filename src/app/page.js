import CardFees from "./components/CardFees";
import FAQSection from "./components/FAQSection";
import Footer2 from "./components/Footer2";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import StackingBlocks from "./components/StackingBlock";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";
import Thirdpage from "./components/Thirdpage";

export default function Home() {
  return (
   <main className="bg-gray-100 min-h-screen">
      <Hero/>
      <Header />
      <StatsSection/>
      <CardFees />
      <Thirdpage />
      <HowItWorks />
       
      <StackingBlocks />
      
        <Testimonials/>
     
      <FAQSection/>
      <Footer2/>
    </main>
  );
}
