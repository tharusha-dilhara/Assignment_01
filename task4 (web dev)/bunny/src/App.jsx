
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Hero from "./components/hero";
import Pricing from "./components/Pricing";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}