import "./app.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="divider"></div>
      <div className="container mx-auto">
        <Banner />
      </div>
    </>
  );
}

export default App;
