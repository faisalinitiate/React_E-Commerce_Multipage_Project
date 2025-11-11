

import React, { useState } from 'react';
import Header from "../common/Header";
import Footer from "../common/Footer";
import '../index.css';

import { Link } from "react-router-dom";


export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Newest");

  const categories = ["All", "Hoodies", "T-Shirts", "Jackets", "Shoes"];

  // Sample products with offers
  const products = [
    {
      id: 1,
      name: "Urban Hoodie",
      price: 79,
      category: "Hoodies",
     image: "https://placehold.co/600x800?text=T-Shirt",
    offer: true,
      upcomingOffer: false,
    },
    {
      id: 2,
      name: "Summer Tee",
      price: 39,
      category: "T-Shirts",
    image: "https://placehold.co/600x800?text=Hoodie",
    offer: false,
      upcomingOffer: true,
    },
    {
      id: 3,
      name: "Denim Jacket",
      price: 119,
      category: "Jackets",
      image: "https://placehold.co/600x800?text=T-Shirt",
    offer: false,
      upcomingOffer: false,
    },
    {
      id: 4,
      name: "Street Sneakers",
      price: 149,
      category: "Shoes",
      image: "https://placehold.co/1600x500?text=Shop+Collection",
    offer: true,
      upcomingOffer: false,
    },
        {
      id: 5,
      name: "Urban Hoodie",
      price: 79,
      category: "Hoodies",
    image:"https://placehold.co/600x800?text=T-Shirt",
    offer: false,
      upcomingOffer: false,
    },
    {
      id: 6,
      name: "Summer Tee",
      price: 39,
      category: "T-Shirts",
   image: "https://placehold.co/600x800?text=T-Shirt",
    offer: true,
      upcomingOffer: true,
    },
    {
      id: 7,
      name: "Denim Jacket",
      price: 119,
      category: "Jackets",
    image: "https://placehold.co/600x800?text=T-Shirt",
    offer: false,
      upcomingOffer: false,
    },
     {
      id: 8,
      name: "Street Sneakers",
      price: 149,
      category: "Shoes",
      image: "https://placehold.co/600x800?text=T-Shirt",
    offer: true,
      upcomingOffer: false,
    },
  ];

  // Filter by category
  let filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Sort based on dropdown
  if (sortOption === "Newest") {
filteredProducts = filteredProducts.filter((p) => p.id);
     
    
  } else if (sortOption === "Offer") {
    filteredProducts = filteredProducts.filter((p) => p.offer);
  } else if (sortOption === "Upcoming Offer") {
    filteredProducts = filteredProducts.filter((p) => p.upcomingOffer);
  }

  // Inline CategoryFilter component
  const CategoryFilter = ({ categories, onSelect }) => (
    <div className="flex flex-wrap gap-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === cat
              ? "bg-blue-600 text-white"
              : "bg-purple-700 text-gray-800 border-gray-300"
          } hover:bg-blue-500 hover:text-white transition`}
        >
          {cat}
        </button>
      ))}
    </div>
  );

  // Inline ProductCard component
  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow hover:shadow-amber-900 transition overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-blue-600 font-bold">${product.price}</p>
        <p className="text-gray-500 text-sm">{product.category}</p>
      
        {product.offer && <span className="text-green-600 text-sm font-semibold">On Offer!</span>}
        {product.upcomingOffer && <span className="text-orange-500 text-sm font-semibold">Upcoming Offer</span>}
      </div>
    </div>



  );

  return (

      <div className="bg-gray-50 min-h-screen flex flex-col">
          {/* Header Component */}
          <Header />
          <div className="bg-gray-50 min-h-screen">
      {/* Banner */}
      <div className="relative h-64 bg-cover bg-center"
      style={{     backgroundImage:
    "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80')",
}}>

   
       <div className="inset-0 absolute bg-black flex items-center justify-center">
        <h1 className="text-white text-5xl font-">Shop Collection</h1>
       </div>
      </div>


   

      {/* Content */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6 gap-4">
          <CategoryFilter categories={categories} onSelect={setSelectedCategory} />

          <div>
            <label className="mr-2 font-semibold">Sort By:</label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-4 py-2 border rounded"
            >
              <option value="Newest">Newest</option>
              <option value="Offer">Offer</option>
              <option value="Upcoming Offer">Upcoming Offer</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
       

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
          >
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-72 object-cover"
              />
            </Link>
            <div className="p-4 text-center">
              <Link
                to={`/products/${product.id}`}
                className="text-lg font-medium text-gray-800 hover:text-red-600 transition"
              >
                {product.title}
              </Link>
              <div className="flex items-center justify-center gap-3 mt-2">
                <span className="text-gray-400 line-through text-sm">
                  ${product.originalPrice}
                </span>
                <span className="text-red-600 font-semibold text-lg">
                  ${product.discountedPrice}
                </span>
              </div>
              <Link
                to={`/products/${product.id}`}
                className="block mt-4 bg-red-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-red-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
       {/* Footer Component */}
          <Footer />
  </div>
    
  );
}
