import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Industries from "@/components/industries";
import Clients from "@/components/clients";
import WhyUs from "@/components/why-us";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Clients />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
