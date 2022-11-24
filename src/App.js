import "./App.css";
import Bottom from "./components/Bottom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <Bottom />
    </div>
  );
};

export default App;
