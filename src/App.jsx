
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ProductList from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";

function LandingPage() {
  return (
    <main className="landing">
      <Navbar />


      <section className="hero background-image">

        <div className="hero-content">
          <p className="eyebrow">WELCOME TO YOUR GREEN SPACE</p>

          <h1>Paradise Nursery</h1>

          <h2>Bring home a little paradise.</h2>

          <p>
            Discover beautiful houseplants to make your home
            fresher, greener, and more welcoming.
          </p>

          <Link className="buttonlink" to="/plants">
            Get Started
          </Link>
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
