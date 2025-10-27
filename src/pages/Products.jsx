import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

function Products() {
  return (
    <div className="App">
      <Navbar />
      <br/>
      <main className="page-content">
        <ProductGrid />
      </main>
      <br/><br/>
      <Footer />
    </div>
  );
}

export default Products;

