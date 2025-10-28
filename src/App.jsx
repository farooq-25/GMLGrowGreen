import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import RazorpayMockup from "./pages/RazorpayMockup";
import Landing from "./pages/Landing";
import SuccessPage from "./pages/Success";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <main
          className="page-content"
          style={{ paddingTop: "0.90rem", paddingBottom: "4rem" }}
        >
          {" "}
          {/* Example padding */}
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
