import Image from "next/image";
import SolarSection from "./components/SolarSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div>
      <SolarSection />
      <ContactSection />
    </div>
  );
}
