import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Brands from "./components/Brands";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#FAF4EC] min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Brands />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;