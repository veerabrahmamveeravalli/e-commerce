import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';


const Payment = () => {
  const location = useLocation();
  const totalAmount = location.state?.total ?? 0;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You would handle real payment processing here
    alert(`Payment of $${totalAmount.toFixed(2)} submitted successfully!`);
  };

  return (
    <>
    <Navigation />
    <div className="paymentContainer" >
      <div className="paymentPage">
        <h2>Payment Page</h2>
        <p>Total amount to pay: <strong>${totalAmount.toFixed(2)}</strong></p>

        <form className="paymentForm" onSubmit={handleSubmit}>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              required
              maxLength="16"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div>
            <label>Expiry Date</label>
            <input
              type="text"
              name="expiry"
              required
              maxLength="5"
              value={formData.expiry}
              onChange={handleChange}
              placeholder="MM/YY"
            />
          </div>

          <div>
            <label>CVV</label>
            <input
              type="text"
              name="cvv"
              required
              maxLength="4"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="123"
            />
          </div>

          <div>
            <label>Billing Address</label>
            <textarea
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Main St, City, Country"
            />
          </div>

          <button type="submit" className="submitPaymentBtn">Pay ${totalAmount.toFixed(2)}</button>
        </form>
      </div>

    </div>
    </>

  );
};

export default Payment;
