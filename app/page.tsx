import SolarSection from "./components/SolarSection";
import ContactSection from "./components/ContactSection";
import SolarPromtionSection from "./components/SolarPromotionSection";

export default function Home() {
  return (
    <div>
      <SolarSection />
      <SolarPromtionSection/>
      <ContactSection />
    </div>
  );
}
