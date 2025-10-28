import React from 'react';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';

function Products() {
  return (
    <div className="App">
      <Navbar />
      <main className="page-content">
        <ProductGrid />
      </main>
    </div>
  );
}

export default Products;

