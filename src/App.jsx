import React from "react";
// Remove BrowserRouter alias if not needed elsewhere:
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Keep the direct import:
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Import ProductGrid from components if it's the main listing page, or Products from pages
// import ProductGrid from "./components/ProductGrid";
import Products from "./pages/Products"; // Assuming Products.jsx is the main shop page
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import RazorpayMockup from "./pages/RazorpayMockup";
import Landing from "./pages/Landing";
import SuccessPage from './pages/Success'; // Assuming you renamed Success.jsx
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart'; // Import Cart
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    // Use only one Router component
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <main className="page-content" style={{ paddingTop: '0.90rem', paddingBottom: '4rem' }}> {/* Example padding */}
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* Make sure the path matches your Navbar link */}
            <Route path="/products" element={<Products />} /> 
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<RazorpayMockup />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} /> {/* Added Cart route */}
          </Routes>
        </main>
        {/* Removed <br/> tags */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;