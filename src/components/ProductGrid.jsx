// src/components/ProductGrid.jsx
import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import growbag15x12 from "../assets/images/GROWBAG15X12.jpeg";
import growbag18x18 from "../assets/images/GROWBAG18X18.jpeg";
import rectangularGrowbag from "../assets/images/RECTANGULARGROWBAG24x12x9.jpg";
import growbags from "../assets/images/growbags.jpg";
import spinachGrowbag24x12 from "../assets/images/SPINACHGROWBAG24X12.jpeg";
import spinachGrowbag24x9 from "../assets/images/SPINACHGROWBAG24X9.jpeg";
import styles from "../styles/ProductGrid.module.css";

const ProductCard = ({ image, title, price, productId }) => {
  const cardRef = useRef(null);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const { dispatch } = useCart();

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
        rootMargin: "0px 0px -50px 0px",
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

  const handleProductClick = () => {
    navigate(`/product/${productId}`);
  };

  const handleBuyNowClick = (e) => {
    e.stopPropagation();
    navigate("/checkout");
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation();

    const itemToAdd = {
      id: productId,
      name: title,
      price: parseFloat(price),
      image: image,
      quantity: 1,
    };

    dispatch({ type: "ADD_ITEM", payload: itemToAdd });
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.productCard} ${isVisible ? styles.animateIn : ""}`}
    >
      <div
        className={styles.productImageContainer}
        onClick={handleProductClick}
      >
        <img src={image} alt={title} className={styles.productImage} />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle} onClick={handleProductClick}>
          {title}
        </h3>
        <p className={styles.productPrice}>{price}</p>
      </div>
      <div className={styles.productActions}>
        <button className={styles.buyNowBtn} onClick={handleBuyNowClick}>
          Buy Now
        </button>
        <button className={styles.addToCartBtn} onClick={handleAddToCartClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const FilterDropdown = ({ isOpen, title, type, selectedCount, onReset }) => {
  if (!isOpen) return null;

  const renderContent = () => {
    if (type === "collection") {
      const categories = [
        { name: "Grow Bags", count: 6 },
        { name: "Vegetable Bags", count: 3 },
        { name: "Planting Bags", count: 4 },
        { name: "Garden Bags", count: 2 },
      ];

      return (
        <div className={styles.facetsDisplay}>
          <div className={styles.facetsHeader}>
            <div>
              <span className={styles.facetsSelected}>
                {selectedCount} selected
              </span>
            </div>
            <div className={styles.facetsResetContainer}>
              <a
                href="#"
                className={styles.facetsReset}
                onClick={(e) => {
                  e.preventDefault();
                  onReset();
                }}
                role="button"
              >
                Reset
              </a>
            </div>
          </div>
          <fieldset className={styles.facetsWrap}>
            <legend className={styles.visuallyHidden}>{title}</legend>
            <ul className={styles.facetsList} role="list">
              {categories.map((category, index) => (
                <li key={index} className={styles.facetsItem}>
                  <label
                    htmlFor={`Filter-${type}-${index}`}
                    className={styles.facetCheckbox}
                  >
                    <input
                      type="checkbox"
                      name={`filter.${type}`}
                      value={category.name}
                      id={`Filter-${type}-${index}`}
                    />
                    <svg
                      width="1.5rem"
                      height="1.5rem"
                      viewBox="0 0 15 15"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <rect
                        width="15"
                        height="15"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="1"
                      ></rect>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className={styles.iconCheckmark}
                      width="1.1rem"
                      height="0.7rem"
                      viewBox="0 0 11 7"
                      fill="none"
                    >
                      <path
                        d="M1.5 3.5L2.83333 4.75L4.16667 6L9.5 1"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span
                      className={styles.facetCheckboxText}
                      aria-hidden="true"
                    >
                      <span className={styles.facetCheckboxTextLabel}>
                        {category.name}
                      </span>{" "}
                      ({category.count})
                    </span>
                    <span className={styles.visuallyHidden}>
                      {category.name} ({category.count} products)
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
        </div>
      );
    }

    if (type === "price") {
      const highestPrice = 49.99;
      return (
        <div className={styles.facetsDisplay}>
          <div className={styles.facetsHeader}>
            <span className={styles.facetsSelected}>
              The highest price is {highestPrice.toFixed(2)}
            </span>
            <div className={styles.facetsResetContainer}>
              <a
                href="#"
                className={styles.facetsReset}
                onClick={(e) => {
                  e.preventDefault();
                  onReset();
                }}
                role="button"
              >
                Reset
              </a>
            </div>
          </div>
          <div className={styles.facetsPrice}>
            <span className={styles.fieldCurrency}></span>
            <div className={styles.field}>
              <input
                className={styles.fieldInput}
                name="filter.v.price.gte"
                id="Filter-Price-GTE"
                type="number"
                inputMode="decimal"
                placeholder="0"
              />
              <label className={styles.fieldLabel} htmlFor="Filter-Price-GTE">
                From
              </label>
            </div>
            <span className={styles.fieldCurrency}></span>
            <div className={styles.field}>
              <input
                className={styles.fieldInput}
                name="filter.v.price.lte"
                id="Filter-Price-LTE"
                type="number"
                inputMode="decimal"
                placeholder={highestPrice.toFixed(2)}
              />
              <label className={styles.fieldLabel} htmlFor="Filter-Price-LTE">
                To
              </label>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={styles.filterDropdownContainer}>{renderContent()}</div>
  );
};

const ProductGrid = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedCounts, setSelectedCounts] = useState({
    collection: 0,
  });

  const handleFilterClick = (filterName) => {
    setActiveFilter(activeFilter === filterName ? null : filterName);
  };

  const handleReset = (filterType) => {
    console.log(`Resetting ${filterType} filters`);
    setSelectedCounts((prev) => ({
      ...prev,
      [filterType]: 0,
    }));
    setActiveFilter(null);
  };

  const products = [
    { id: 1, image: growbag15x12, title: "Grow Bag 15x12", price: "24.99" },
    { id: 2, image: growbag18x18, title: "Grow Bag 18x18", price: "29.99" },
    {
      id: 3,
      image: rectangularGrowbag,
      title: "Rectangular Grow Bag",
      price: "34.99",
    },
    { id: 4, image: growbags, title: "Premium Grow Bags Set", price: "39.99" },
    {
      id: 5,
      image: spinachGrowbag24x12,
      title: "Spinach Grow Bag 24x12",
      price: "32.99",
    },
    {
      id: 6,
      image: spinachGrowbag24x9,
      title: "Spinach Grow Bag 24x9",
      price: "28.99",
    },
    {
      id: 7,
      image: growbag15x12,
      title: "Grow Bag 15x12 - Pack of 3",
      price: "69.99",
    },
    {
      id: 8,
      image: growbag18x18,
      title: "Grow Bag 18x18 - Pack of 3",
      price: "79.99",
    },
    {
      id: 9,
      image: rectangularGrowbag,
      title: "Rectangular Grow Bag - Set",
      price: "49.99",
    },
  ];

  return (
    <div className={styles.productGridContainer}>
      {/* HEADER */}
      <div className={styles.productGridHeader}>
        <div className={styles.headerTop}>
          <p className={styles.breadcrumbs}>Home / Shop all</p>
          <div className={styles.sortGroup}>
            <span className={styles.sortLabel}>Sort by:</span>
            <button className={styles.filterDropdownBtn}>
              Featured <FiChevronDown />
            </button>
          </div>
        </div>
        <h1>SHOP ALL</h1>
      </div>

      {/* FILTER BAR WITH DROPDOWNS */}
      <div className={styles.facetsWrapper}>
        <h2 className={styles.facetsHeading} id="verticalTitle" tabIndex={-1}>
          Filter:
        </h2>

        {/* Collection Dropdown */}
        <div className={styles.filterDropdownWrapper}>
          <button
            className={`${styles.filterDropdownBtn} ${
              activeFilter === "collection" ? styles.active : ""
            }`}
            onClick={() => handleFilterClick("collection")}
            aria-expanded={activeFilter === "collection"}
          >
            <span>Collection</span>
            {activeFilter === "collection" ? (
              <FiChevronUp />
            ) : (
              <FiChevronDown />
            )}
          </button>
          <FilterDropdown
            isOpen={activeFilter === "collection"}
            title="Collection"
            type="collection"
            selectedCount={selectedCounts.collection}
            onReset={() => handleReset("collection")}
          />
        </div>

        {/* Price Dropdown */}
        <div className={styles.filterDropdownWrapper}>
          <button
            className={`${styles.filterDropdownBtn} ${
              activeFilter === "price" ? styles.active : ""
            }`}
            onClick={() => handleFilterClick("price")}
            aria-expanded={activeFilter === "price"}
          >
            <span>Price</span>
            {activeFilter === "price" ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          <FilterDropdown
            isOpen={activeFilter === "price"}
            title="Price"
            type="price"
            selectedCount={0}
            onReset={() => handleReset("price")}
          />
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productId={product.id}
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
