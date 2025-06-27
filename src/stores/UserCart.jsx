import React from 'react';
import { useCart } from './context/CartContext';
import Navigation from './components/Navigation';
import { useNavigate } from 'react-router-dom';

const UserCart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate('/payment', { state: { total: totalPrice } }); // pass total as state
  };

  return (
    <>
      <Navigation />
      <div className="cartContainer">
        {cartItems.length === 0 ? (
          <h2 className="emptyCart">Your cart is empty.</h2>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cartCard" key={item.id}>
                <div className="cartImg">
                  <img src={item.image} alt={item.product} />
                </div>
                <div className="cartDetails">
                  <h3>{item.product}</h3>
                  <h4>Model: {item.model}</h4>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${item.price * item.quantity}</p>
                  <button
                    className="removeBtn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove One
                  </button>
                </div>
              </div>
            ))}
            <div className="cartTotal">
              <h2>Grand Total: ${totalPrice.toFixed(2)}</h2>
              <button className="checkoutBtn" onClick={handleCheckout}>
                Check Out
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserCart;
