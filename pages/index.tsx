import Navbar from "@/components/NavBar";
import AboutUs from "@/sections/AboutUs";
import HeroBanner from "@/sections/HeroBanner";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[var(--dark-fill)] overflow-hidden min-h-screen">
      <Navbar />
      <HeroBanner />
      <AboutUs />
    </div>
  );
}
