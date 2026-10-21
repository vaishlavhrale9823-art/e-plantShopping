
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ProductList from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";

function LandingPage() {
  const [showProductList, setShowProductList] = useState(false);

  if (showProductList) {
    return <ProductList />;
  }

  return (
    <main className="landing">
      <Navbar />

      <section className="hero background-image">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO YOUR GREEN SPACE</p>

          <h1>Welcome to Paradise Nursery</h1>

          <h2>Bring home a little paradise.</h2>

          <p>
            Discover beautiful houseplants to make your home
            fresher, greener, and more welcoming.
          </p>

          <button
            className="buttonlink"
            onClick={() => setShowProductList(true)}
          >
            Get Started
          </button>
        </div>
      </section>

      <AboutUs />

      <footer>
        © {new Date().getFullYear()} Paradise Nursery
      </footer>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}
