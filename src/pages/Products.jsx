

import React, { useState } from 'react';
import Header from "../common/Header";
import Footer from "../common/Footer";
import '../index.css';
import productbanner from "../assets/productbanner.jpg";
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
        className={`px-5 py-2 rounded-full border font-semibold transition-all duration-200
          ${
            selectedCategory === cat
              ? "bg-blue-700 text-white border-blue-700 shadow"
              : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
   
          <div
              className="relative h-96 top-14"
              style={{
              
                  backgroundImage: `url(${productbanner})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
          
         
              }}
            >

            </div>
   

      {/* Content */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center my-6 gap-4">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
  {filteredProducts.map((product) => (
    <div
      key={product.id}
      className="
        group relative rounded-2xl overflow-hidden shadow-md bg-white 
        transition-all duration-500 
        hover:shadow-2xl hover:-translate-y-2 
        border border-gray-200 hover:border-teal-600
      "
    >

      {/* SOFT ORNAMENT BACKDROP */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-teal-50 opacity-70 group-hover:opacity-90 transition"></div>

      {/* PRODUCT IMAGE */}
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="
            relative z-10 w-full h-72 object-cover 
            transition-all duration-500 
            group-hover:scale-110 group-hover:brightness-105
          "
        />
      </Link>

      {/* CONTENT */}
      <div className="relative z-20 p-5 text-center">

        {/* Category */}
        <span
          className="
            inline-block mb-3 px-4 py-1 text-sm 
            rounded-full bg-sage-200 text-slate-700 
            transition-all duration-300 
            group-hover:bg-teal-200 group-hover:text-teal-900
          "
        >
          {product.category}
        </span>

        {/* Title */}
        <Link
          to={`/products/${product.id}`}
          className="
            block text-lg font-semibold text-slate-800 
            group-hover:text-teal-700 transition
          "
        >
          {product.title}
        </Link>

        {/* EXTRA DESCRIPTION */}
        <p className="mt-1 text-sm text-gray-500 leading-relaxed">
          Premium quality · Sustainable material · Limited edition release
        </p>

        {/* PRICE SECTION */}
        <div className="flex items-center justify-center gap-3 mt-3">

          <span className="text-gray-400 line-through text-sm">
            ${product.originalPrice}
          </span>

          <span
            className="
              text-lg font-bold 
              text-yellow-600 group-hover:text-yellow-700 transition
            "
          >
            ${product.discountedPrice}
          </span>
        </div>

        {/* VIEW DETAILS CTA */}
        <Link
          to={`/products/${product.id}`}
          className="
            block mt-5 py-2.5 px-6 rounded-xl font-semibold 
            bg-teal-600 text-white 
            transition-all duration-400
            hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-200 
            hover:-translate-y-1
          "
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
