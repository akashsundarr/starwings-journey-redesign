import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Vehicles from "@/components/Vehicles";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Vehicles />
        <About />
        <WhyChooseUs />      
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
