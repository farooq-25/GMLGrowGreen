import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

function Products() {
  return (
    <div className="App">
      <Navbar />
      <main className="page-content">
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default Products;

