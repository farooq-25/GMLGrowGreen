import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Truck, Undo2, ShieldCheck } from "lucide-react";
import {
  FiArrowLeft,
  FiShoppingCart,
  FiHeart,
  FiShare2,
  FiCheck,
} from "react-icons/fi";
import { useCart } from "../context/CartContext"; // <-- 1. IMPORT useCart

import "../styles/ProductDetails.css";

import growbag15x12 from "../assets/images/GROWBAG15X12.jpeg";
import growbag18x18 from "../assets/images/GROWBAG18X18.jpeg";
import rectangularGrowbag from "../assets/images/RECTANGULARGROWBAG24x12x9.jpg";
import growbags from "../assets/images/growbags.jpg";
import spinachGrowbag24x12 from "../assets/images/SPINACHGROWBAG24X12.jpeg";
import spinachGrowbag24x9 from "../assets/images/SPINACHGROWBAG24X9.jpeg";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const { dispatch } = useCart();

  const products = [
    {
      id: 1,
      name: "Grow Bag 15x12",
      price: "24.99",
      originalPrice: "29.99",
      images: [growbag15x12],
      description:
        "Premium 15x12 inch grow bag perfect for small to medium plants. Made from durable, breathable fabric that promotes healthy root growth and prevents root circling.",
      features: [
        "Durable fabric construction",
        "Excellent drainage system",
        "Promotes air pruning",
        "Reusable and foldable",
        "UV protected material",
        "Reinforced handles",
      ],
      specifications: {
        Material: "Reinforced Fabric",
        Dimensions: "15x12 inches",
        Capacity: "5 gallons",
        Color: "Black",
        Weight: "0.5 lbs",
        Drainage: "Excellent",
        Reusable: "Yes",
        "UV Protection": "Yes",
      },
      sizes: ["15x12", "18x18", "24x12"],
      inStock: true,
      rating: 4.5,
      reviews: 128,
      sku: "GB-1512-BLK",
    },
    {
      id: 2,
      name: "Grow Bag 18x18",
      price: "29.99",
      originalPrice: "34.99",
      images: [growbag18x18],
      description:
        "Large 18x18 inch grow bag ideal for vegetables and larger plants. Features reinforced handles for easy moving and extra durability.",
      features: [
        "Reinforced handles",
        "Extra durable fabric",
        "Optimal root aeration",
        "Foldable for storage",
        "Weather resistant",
        "Prevents root binding",
      ],
      specifications: {
        Material: "Heavy-duty Fabric",
        Dimensions: "18x18 inches",
        Capacity: "10 gallons",
        Color: "Black",
        Weight: "0.8 lbs",
        Drainage: "Excellent",
        Reusable: "Yes",
        "UV Protection": "Yes",
      },
      sizes: ["15x12", "18x18", "24x12"],
      inStock: true,
      rating: 4.7,
      reviews: 89,
      sku: "GB-1818-BLK",
    },
    {
      id: 3,
      name: "Rectangular Grow Bag",
      price: "34.99",
      originalPrice: "39.99",
      images: [rectangularGrowbag],
      description:
        "Versatile rectangular grow bag perfect for balcony gardening and space-efficient planting. Ideal for herbs and vegetables.",
      features: [
        "Space-efficient design",
        "Perfect for balconies",
        "Enhanced drainage",
        "Durable construction",
        "Easy to move",
        "Multiple planting options",
      ],
      specifications: {
        Material: "Premium Fabric",
        Dimensions: "24x12x9 inches",
        Capacity: "7 gallons",
        Color: "Black",
        Weight: "0.6 lbs",
        Drainage: "Excellent",
        Reusable: "Yes",
        "UV Protection": "Yes",
      },
      sizes: ["24x12x9"],
      inStock: true,
      rating: 4.3,
      reviews: 67,
      sku: "GB-REC-2412",
    },
    {
      id: 4,
      name: "Premium Grow Bags Set",
      price: "39.99",
      originalPrice: "49.99",
      images: [growbags],
      description:
        "Complete set of premium grow bags in various sizes. Perfect for starting your garden with all essential sizes included.",
      features: [
        "Complete set included",
        "Multiple sizes",
        "Premium quality fabric",
        "Perfect for beginners",
        "Cost-effective bundle",
        "All essential sizes",
      ],
      specifications: {
        Material: "Premium Fabric",
        "Set Includes": "3 different sizes",
        Sizes: "15x12, 18x18, 24x12",
        Color: "Black",
        "Total Capacity": "22 gallons",
        Drainage: "Excellent",
        Reusable: "Yes",
        "UV Protection": "Yes",
      },
      sizes: ["Set of 3"],
      inStock: true,
      rating: 4.8,
      reviews: 156,
      sku: "GB-SET-3PK",
    },
    {
      id: 5,
      name: "Spinach Grow Bag 24x12",
      price: "32.99",
      originalPrice: "37.99",
      images: [spinachGrowbag24x12],
      description:
        "Specialized grow bag designed specifically for spinach and leafy greens. Optimal dimensions for maximum yield.",
      features: [
        "Specialized for spinach",
        "Optimal dimensions",
        "Enhanced drainage",
        "Durable material",
        "Easy harvesting",
        "Space efficient",
      ],
      specifications: {
        Material: "Specialty Fabric",
        Dimensions: "24x12 inches",
        Capacity: "8 gallons",
        Color: "Green",
        Weight: "0.7 lbs",
        Drainage: "Excellent",
        Reusable: "Yes",
        "UV Protection": "Yes",
      },
      sizes: ["24x12"],
      inStock: true,
      rating: 4.6,
      reviews: 42,
      sku: "GB-SPN-2412",
    },
    {
      id: 6,
      name: "Spinach Grow Bag 24x9",
      price: "28.99",
      originalPrice: "32.99",
      images: [spinachGrowbag24x9],
      description:
        "Compact spinach grow bag perfect for smaller spaces. Designed specifically for optimal spinach growth.",
      features: [
        "Compact design",
        "Perfect for small spaces",
        "Specialized for spinach",
        "Excellent drainage",
        "Durable construction",
        "Easy to maintain",
      ],
      specifications: {
        Material: "Specialty Fabric",
        Dimensions: "24x9 inches",
        Capacity: "6 gallons",
        Color: "Green",
        Weight: "0.5 lbs",
        Drainage: "Excellent",
        Reusable: "Yes",
        "UV Protection": "Yes",
      },
      sizes: ["24x9"],
      inStock: true,
      rating: 4.4,
      reviews: 38,
      sku: "GB-SPN-2409",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  useState(() => {
    if (product && product.sizes && product.sizes.length > 0 && !selectedSize) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product, selectedSize]);

  const handleAddToCart = () => {
    if (!product) return;

    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: parseFloat(product.price),
      image: product.images[0],
      quantity: quantity,

      ...(product.sizes && product.sizes.length > 0 && { size: selectedSize }),
    };

    dispatch({ type: "ADD_ITEM", payload: itemToAdd });

    console.log("Dispatched ADD_ITEM from Details:", itemToAdd);
  };

  const handleBuyNow = () => {
    navigate("/checkout");
  };

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate("/")} className="back-button">
          <FiArrowLeft /> Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <button onClick={() => navigate("/")} className="back-button">
          <FiArrowLeft /> Back to Shop
        </button>
        <span> / {product.name}</span>
      </div>

      <div className="product-details-content">
        {/* Product Images */}
        <div className="product-images">
          <div className="main-image">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="product-detail-image"
            />
          </div>
          <div className="image-thumbnails">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} view ${index + 1}`}
                className={`thumbnail ${
                  selectedImage === index ? "active" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info">
          <div className="product-header">
            <h1 className="product-title">{product.name}</h1>
            <div className="product-rating">
              <span className="stars">★★★★★</span>{" "}
              {/* Consider replacing with dynamic stars */}
              <span className="rating-text">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <div className="product-sku">SKU: {product.sku}</div>
          </div>

          <div className="price-section">
            <p className="product-price">₹{product.price}</p>
            <p className="original-price">₹{product.originalPrice}</p>
            <span className="discount-badge">
              Save ₹
              {(
                parseFloat(product.originalPrice) - parseFloat(product.price)
              ).toFixed(2)}
            </span>
          </div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>

          {/* Size Selector */}
          {product.sizes &&
            product.sizes.length > 0 && ( // Conditionally render if sizes exist
              <div className="size-selector">
                <label>Size:</label>
                <div className="size-options">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-option ${
                        selectedSize === size ? "active" : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

          {/* Quantity Selector */}
          <div className="quantity-selector">
            <label>Quantity:</label>
            <div className="quantity-controls">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="quantity-btn"
              >
                -
              </button>
              <span className="quantity-display">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="quantity-btn"
              >
                +
              </button>
            </div>
          </div>

          {/* Stock Status */}
          <div className="stock-status">
            {/* Could make this dynamic based on product.inStock */}
            <FiCheck className="in-stock-icon" />
            <span>
              {product.inStock ? "In Stock - Ready to Ship" : "Out of Stock"}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="buy-now-btn" onClick={handleBuyNow}>
              <FiShoppingCart /> Buy Now
            </button>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="wishlist-btn" title="Add to Wishlist">
              <FiHeart />
            </button>
            <button className="share-btn" title="Share Product">
              <FiShare2 />
            </button>
          </div>

          {/* Features */}
          <div className="product-features">
            <h3>Key Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>
                  <FiCheck className="feature-icon" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="specifications-section">
        <h3>Product Specifications</h3>
        <div className="specs-grid">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} className="spec-item">
              <span className="spec-label">{key}:</span>
              <span className="spec-value">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping & Returns */}
      <div className="shipping-info">
        <h3>Shipping & Returns</h3>
        <div className="shipping-features">
          <div className="shipping-item">
            <Truck className="shipping-icon" />
            <div>
              <strong>Free Shipping</strong>
              <p>On orders over ₹5000</p>
            </div>
          </div>
          <div className="shipping-item">
            <Undo2 className="shipping-icon" />
            <div>
              <strong>30-Day Returns</strong>
              <p>Hassle-free returns</p>
            </div>
          </div>
          <div className="shipping-item">
            <ShieldCheck className="shipping-icon" />
            <div>
              <strong>1-Year Warranty</strong>
              <p>Quality guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
