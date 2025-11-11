import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import purchase from "../assets/purchase.jpg";
import "../index.css";


export default function Purchase() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
          {/* Header Component */}
          <Header />
            <div className="bg-gray-50 min-h-screen">
      {/* Banner */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
              
                backgroundImage: `url(${purchase})`,
             
        }}
      >
    
      </div>

      {/* Checkout Form */}
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        {/* Billing Info */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg space-y-6"
        >
          <h2 className="text-2xl font-bold mb-4">Billing Information</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
              required
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            required
          />

          <h2 className="text-2xl font-bold mt-8">Payment Information</h2>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
              required
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={formData.cvc}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Summer Tee</span> <span>$39</span>
            </div>
            <div className="flex justify-between">
              <span>Urban Hoodie</span> <span>$79</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Subtotal</span> <span>$118</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span> <span>$5</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span> <span>$123</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Component */}
         <Footer />
</div>
    
  );
}