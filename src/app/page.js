import Schema from "@/components/Schema";
import LoadingIntro from "@/components/LoadingIntro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Schema />
      <LoadingIntro />
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Fleet />
      <Stats />
      <WhyUs />
      <Gallery />
      <Reservation />
      <Contact />
      <Footer />
      <WhatsappButton />
    </main>
  );
}