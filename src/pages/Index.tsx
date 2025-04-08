
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Materials from "@/components/Materials";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Materials />
        <Gallery />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
