import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import PremiumTools from "./components/PremiumTools";
import Stats from "./components/Stats";

const fetchProducts = async () => {
  const res = await fetch("/product.json");
  return res.json();
};

function App() {
  const toollist = fetchProducts();
  // const [price, setPrice] = useState([]);
  return (
    <>
      <Navbar />
      <div className="divider"></div>
      <Banner />
      <div className="bg-theme-gradient">
        <Stats />
      </div>
      <PremiumTools toollist={toollist} />
    </>
  );
}

export default App;
