import Navbar from "@/components/NavBar";
import SubscribeSection from "@/components/SubscribeSection";
import AboutUs from "@/sections/AboutUs";
import HeroBanner from "@/sections/HeroBanner";
import PortfolioSection from "@/sections/PortfolioSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[var(--dark-fill)] overflow-hidden min-h-screen">
      <Navbar />
      <HeroBanner />
      <AboutUs />
      <PortfolioSection />
      <SubscribeSection />
    </div>
  );
}
