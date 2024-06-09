import Home from "./components/pages/Home.jsx";
import Navbar from "./components/layout/navbar/Navbar.jsx";
import Footer from "./components/layout/footer/Footer.jsx";

function App() {
  return (
    // min-h-screen
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
