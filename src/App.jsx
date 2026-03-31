import { useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PremiumTools from "./components/PremiumTools";
import Pricing from "./components/Pricing";
import Promotion from "./components/Promotion";
import Stats from "./components/Stats";

const fetchProducts = async () => {
  const res = await fetch("/product.json");
  return res.json();
};

const fetchPricingData = async () => {
  const res = await fetch("/pricing.json");
  return res.json();
};
function App() {
  const toollist = fetchProducts();
  const pricingData = fetchPricingData();
  // const [price, setPrice] = useState([]);
  const [selectedPacklist, setSelectedPacklist] = useState([]);

  return (
    <>
      <Navbar selectedPacklist={selectedPacklist} />
      {/* <div className="divider"></div> */}
      <Banner />
      <div className="bg-theme-gradient">
        <Stats />
      </div>
      <PremiumTools
        toollist={toollist}
        selectedPacklist={selectedPacklist}
        setSelectedPacklist={setSelectedPacklist}
      />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <Pricing pricingData={pricingData} />
      <div className="bg-theme-gradient ">
        <Promotion />
      </div>

      <Footer />
    </>
  );
}

export default App;
