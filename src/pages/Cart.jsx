import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowLeft,
  X,
  AlertTriangle,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { items: cartItems } = state;
  const navigate = useNavigate();
  const [itemToRemove, setItemToRemove] = useState(null);
  const [showRemoveDialog, setShowRemoveDialog] = useState(false);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity: newQuantity },
    });
  };

  const handleRemoveClick = (item) => {
    setItemToRemove(item);
    setShowRemoveDialog(true);
  };

  const confirmRemove = () => {
    if (itemToRemove) {
      dispatch({ type: "REMOVE_ITEM", payload: { id: itemToRemove.id } });
    }
    setShowRemoveDialog(false);
    setItemToRemove(null);
  };

  const cancelRemove = () => {
    setShowRemoveDialog(false);
    setItemToRemove(null);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 0 ? 5.0 : 0;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="cart-container">
      {/* Remove Confirmation Dialog */}
      {showRemoveDialog && itemToRemove && (
        <div className="remove-dialog-overlay">
          <div className="remove-dialog">
            <div className="dialog-header">
              <div className="warning-icon">
                <AlertTriangle size={24} />
              </div>
              <h3>Remove Item</h3>
              <button onClick={cancelRemove} className="close-dialog-btn">
                <X size={20} />
              </button>
            </div>

            <div className="dialog-content">
              <p>Are you sure you want to remove this item from your cart?</p>
              <div className="item-preview">
                <img src={itemToRemove.image} alt={itemToRemove.name} />
                <div className="item-preview-details">
                  <span className="item-name">{itemToRemove.name}</span>
                  {itemToRemove.size && (
                    <span className="item-size">Size: {itemToRemove.size}</span>
                  )}
                  <span className="item-price">
                    ₹{itemToRemove.price.toFixed(2)} × {itemToRemove.quantity}
                  </span>
                </div>
              </div>
            </div>

            <div className="dialog-actions">
              <button onClick={cancelRemove} className="cancel-btn">
                Keep Item
              </button>
              <button onClick={confirmRemove} className="confirm-remove-btn">
                <Trash2 size={16} />
                Remove Item
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Header */}
      <div className="mobile-cart-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <ArrowLeft size={20} />
        </button>
        <h1 className="cart-title">Cart ({cartItems.length})</h1>
        <div className="header-spacer"></div>
      </div>

      {/* Desktop Header */}
      <div className="desktop-cart-header">
        <h1 className="cart-title">Shopping Cart</h1>
        <span className="cart-count">({cartItems.length} items)</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <ShoppingBag size={64} className="empty-cart-icon" />
          <h2>Your cart is empty</h2>
          <p>Browse our products and add items to your cart</p>
          <Link to="/products" className="shop-button">
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Mobile Summary Bar */}
          <div className="mobile-summary-bar">
            <div className="mobile-total">
              <span>Total: ₹{total.toFixed(2)}</span>
              <small>Incl. shipping</small>
            </div>
            <button onClick={handleCheckout} className="mobile-checkout-btn">
              Checkout
            </button>
          </div>

          <div className="cart-layout">
            <div className="cart-items-section">
              {/* Desktop Header - Hidden on Mobile */}
              <div className="cart-items-header">
                <span>Product</span>
                <span>Quantity</span>
                <span>Total</span>
              </div>

              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-info">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="item-image"
                      />
                      <div className="item-details">
                        <h3 className="item-name">{item.name}</h3>
                        {item.size && (
                          <span className="item-size">Size: {item.size}</span>
                        )}
                        <p className="item-price">₹{item.price.toFixed(2)}</p>

                        {/* Mobile Quantity Controls */}
                        <div className="mobile-quantity-controls">
                          <div className="quantity-controls">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              className="quantity-btn"
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={14} />
                            </button>
                            <span className="quantity-display">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                              className="quantity-btn"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="mobile-item-total">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Quantity Controls */}
                    <div className="quantity-section">
                      <div className="quantity-controls">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          className="quantity-btn"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="quantity-display">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className="quantity-btn"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Desktop Total Section */}
                    <div className="total-section">
                      <span className="item-total">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleRemoveClick(item)}
                        className="remove-btn"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    {/* Mobile Remove Button */}
                    <button
                      onClick={() => handleRemoveClick(item)}
                      className="mobile-remove-btn"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Order Summary */}
            <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="summary-line">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-line">
                <span>Shipping</span>
                <span>{shipping > 0 ? `₹${shipping.toFixed(2)}` : "Free"}</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <button onClick={handleCheckout} className="checkout-btn">
                Proceed to Checkout
              </button>
              <Link to="/products" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
