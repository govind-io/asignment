import DeveloperSection from "./Components/developer/DeveloperSection";
import Footer from "./Components/Footer";
import LandingSection from "./Components/LandingSection";
import Navbar from "./Components/Navbar";
import ProductsSection from "./Components/products/ProductsSection";
import ServiceSection from "./Components/services/ServiceSection";

function App() {
  return (
    <div className="App" >   
          <Navbar/>
          <LandingSection/>
          <ProductsSection/>
          <ServiceSection/>
          <DeveloperSection/>
          <Footer/>
    </div>
  );
}

export default App;
