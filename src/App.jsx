import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import PremiumTools from "./components/PremiumTools";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Navbar />
      <div className="divider"></div>
      <Banner />
      <div className="bg-theme-gradient">
        <Stats />
      </div>
      <PremiumTools />
    </>
  );
}

export default App;
