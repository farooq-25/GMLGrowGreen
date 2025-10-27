import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

// Import all your product images
import growbag15x12 from '../assets/images/GROWBAG15X12.jpeg';
import growbag18x18 from '../assets/images/GROWBAG18X18.jpeg';
import rectangularGrowbag from '../assets/images/RECTANGULARGROWBAG24x12x9.jpg';
import growbags from '../assets/images/growbags.jpg';
import spinachGrowbag24x12 from '../assets/images/SPINACHGROWBAG24X12.jpeg';
import spinachGrowbag24x9 from '../assets/images/SPINACHGROWBAG24X9.jpeg';

import '../styles/ProductGrid.css';

const ProductCard = ({ image, title, price }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`product-card ${isVisible ? 'animate-in' : ''}`}
    >
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">{price}</p>
        <div className="product-actions">
          <button className="buy-now-btn">Buy Now</button>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const FilterDropdown = ({ isOpen, title, type, selectedCount, onReset }) => {
  if (!isOpen) return null;

  const renderContent = () => {
    if (type === 'collection') {
      const categories = [
        { name: "Grow Bags", count: 6 },
        { name: "Vegetable Bags", count: 3 },
        { name: "Planting Bags", count: 4 },
        { name: "Garden Bags", count: 2 }
      ];

      return (
        <div className="facets__display">
          <div className="facets__header">
            <div>
              <span className="facets__selected">{selectedCount} selected</span>
            </div>
            <facet-remove>
              <a href="#" className="facets__reset link underlined-link" onClick={onReset} role="button">
                Reset
              </a>
            </facet-remove>
          </div>
          <fieldset className="facets-wrap parent-wrap">
            <legend className="visually-hidden">{title}</legend>
            <ul className="facets-layout facets-layout-list facets-layout-list--text facets__list list-unstyled" role="list">
              {categories.map((category, index) => (
                <li key={index} className="list-menu__item facets__item">
                  <label htmlFor={`Filter-${type}-${index}`} className="facets__label facet-checkbox">
                    <input type="checkbox" name={`filter.${type}`} value={category.name} id={`Filter-${type}-${index}`} />
                    <svg width="1.5rem" height="1.5rem" viewBox="0 0 15 15" aria-hidden="true" focusable="false">
                      <rect width="15" height="15" stroke="currentColor" fill="none" strokeWidth="1"></rect>
                    </svg>
                    <svg aria-hidden="true" className="icon icon-checkmark" width="1.1rem" height="0.7rem" viewBox="0 0 11 7" fill="none">
                      <path d="M1.5 3.5L2.83333 4.75L4.16667 6L9.5 1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span className="facet-checkbox__text" aria-hidden="true">
                      <span className="facet-checkbox__text-label">{category.name}</span> ({category.count})
                    </span>
                    <span className="visually-hidden">{category.name} ({category.count} products)</span>
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
        </div>
      );
    }

    if (type === 'price') {
      return (
        <div className="facets__display">
          <div className="facets__header">
            <span className="facets__selected">The highest price is $49.99</span>
            <facet-remove>
              <a href="#" className="facets__reset link underlined-link" onClick={onReset} role="button">
                Reset
              </a>
            </facet-remove>
          </div>
          <div className="facets__price">
            <span className="field-currency">$</span>
            <div className="field">
              <input className="field__input" name="filter.v.price.gte" id="Filter-Price-GTE" type="text" inputMode="decimal" placeholder="0" />
              <label className="field__label" htmlFor="Filter-Price-GTE">From</label>
            </div>
            <span className="field-currency">$</span>
            <div className="field">
              <input className="field__input" name="filter.v.price.lte" id="Filter-Price-LTE" type="text" inputMode="decimal" placeholder="49.99" />
              <label className="field__label" htmlFor="Filter-Price-LTE">To</label>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="filter-dropdown-container">
      {renderContent()}
    </div>
  );
};

const ProductGrid = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedCounts, setSelectedCounts] = useState({
    collection: 0
  });

  const handleFilterClick = (filterName) => {
    setActiveFilter(activeFilter === filterName ? null : filterName);
  };

  const handleReset = (filterType) => {
    setSelectedCounts(prev => ({
      ...prev,
      [filterType]: 0
    }));
  };

  // Product data with your images
  const products = [
    {
      image: growbag15x12,
      title: "Grow Bag 15x12",
      price: "24.99"
    },
    {
      image: growbag18x18,
      title: "Grow Bag 18x18", 
      price: "29.99"
    },
    {
      image: rectangularGrowbag,
      title: "Rectangular Grow Bag",
      price: "34.99"
    },
    {
      image: growbags,
      title: "Premium Grow Bags Set",
      price: "39.99"
    },
    {
      image: spinachGrowbag24x12,
      title: "Spinach Grow Bag 24x12",
      price: "32.99"
    },
    {
      image: spinachGrowbag24x9,
      title: "Spinach Grow Bag 24x9",
      price: "28.99"
    },
    {
      image: growbag15x12,
      title: "Grow Bag 15x12 - Pack of 3",
      price: "69.99"
    },
    {
      image: growbag18x18,
      title: "Grow Bag 18x18 - Pack of 3",
      price: "79.99"
    },
    {
      image: rectangularGrowbag,
      title: "Rectangular Grow Bag - Set",
      price: "49.99"
    }
  ];

  return (
    <div className="product-grid-container">
      {/* HEADER */}
      <div className="product-grid-header">
        <div className="header-top">
          <p className="breadcrumbs">Home / Shop all</p>
          <div className="sort-group">
            <span className="sort-label">Sort by:</span>
            <button className="filter-dropdown-btn">
              Featured <FiChevronDown />
            </button>
          </div>
        </div>
        <h1>SHOP ALL</h1>
      </div>

      {/* FILTER BAR WITH DROPDOWNS */}
      <div className="facets__wrapper">
        <h2 className="facets__heading caption-large text-body" id="verticalTitle" tabIndex="-1">
          Filter:
        </h2>

        {/* Collection Dropdown */}
        <div className="filter-dropdown-wrapper">
          <button 
            className={`filter-dropdown-btn ${activeFilter === 'collection' ? 'active' : ''}`}
            onClick={() => handleFilterClick('collection')}
          >
            <span>Collection</span>
            {activeFilter === 'collection' ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          <FilterDropdown 
            isOpen={activeFilter === 'collection'}
            title="Collection"
            type="collection"
            selectedCount={selectedCounts.collection}
            onReset={() => handleReset('collection')}
          />
        </div>

        {/* Price Dropdown */}
        <div className="filter-dropdown-wrapper">
          <button 
            className={`filter-dropdown-btn ${activeFilter === 'price' ? 'active' : ''}`}
            onClick={() => handleFilterClick('price')}
          >
            <span>Price</span>
            {activeFilter === 'price' ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          <FilterDropdown 
            isOpen={activeFilter === 'price'}
            title="Price"
            type="price"
            selectedCount={0}
            onReset={() => handleReset('price')}
          />
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;