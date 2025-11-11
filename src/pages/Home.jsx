// import React, { useState } from "react";
// import { Star } from "lucide-react";

// // Sample reusable component
//  function ProductDetails({ product }) {
//   const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

//   return (
//     <div className="min-h-screen bg-white px-6 lg:px-16 py-10">
//       {/* Breadcrumb */}
//       <div className="text-sm text-gray-500 mb-6">
//         HOME / SHOP / MEN /{" "}
//         <span className="text-gray-800 font-medium">{product.title}</span>
//       </div>

//       {/* Main Product Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//         {/* Left: Images */}
//         <div className="flex flex-col md:flex-row gap-4">
//           {/* Thumbnails */}
//           <div className="flex md:flex-col gap-3 justify-center">
//             {product.images.map((src, i) => (
//               <img
//                 key={i}
//                 src={src}
//                 alt={`Thumbnail ${i + 1}`}
//                 className="w-20 h-24 object-cover rounded-lg cursor-pointer border hover:border-gray-400 transition"
//               />
//             ))}
//           </div>

//           {/* Main Image */}
//           <div className="flex-1">
//             <img
//               src={product.mainImage}
//               alt={product.title}
//               className="w-full rounded-2xl shadow-md"
//             />
//           </div>
//         </div>

//         {/* Right: Product Info */}
//         <div className="flex flex-col justify-center space-y-6">
//           <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug">
//             {product.title}
//           </h1>

//           {/* Price and Discount */}
//           <div className="flex items-center gap-4">
//             <span className="text-gray-500 line-through text-lg">
//               ${product.originalPrice}
//             </span>
//             <span className="text-red-600 text-2xl font-bold">
//               ${product.discountedPrice}
//             </span>
//           </div>

//           {/* Rating */}
//           <div className="flex items-center gap-2">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 size={18}
//                 className={
//                   i < product.rating
//                     ? "text-yellow-500 fill-yellow-500"
//                     : "text-gray-300"
//                 }
//               />
//             ))}
//             <span className="text-gray-600 text-sm ml-2">
//               ({product.reviewsCount})
//             </span>
//           </div>

//           {/* Short Description */}
//           <p className="text-gray-600 leading-relaxed text-sm md:text-base">
//             {product.shortDescription}
//           </p>

//           {/* Size Selection */}
//           <div>
//             <h3 className="text-gray-700 font-semibold mb-2">Select Size</h3>
//             <div className="flex gap-3 flex-wrap">
//               {product.sizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-4 py-2 border rounded-md text-sm font-medium ${
//                     selectedSize === size
//                       ? "bg-gray-900 text-white"
//                       : "bg-white text-gray-700 hover:bg-gray-100"
//                   } transition`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Add to Cart */}
//           <button className="mt-4 bg-red-600 text-white py-3 px-8 rounded-md font-semibold hover:bg-red-700 transition">
//             ADD TO CART
//           </button>

//           {/* Category & Tags */}
//           <div className="pt-4 border-t border-gray-200 text-sm text-gray-600">
//             <p>
//               <span className="font-semibold text-gray-700">Category:</span>{" "}
//               {product.category.join(", ")}
//             </p>
//             <p>
//               <span className="font-semibold text-gray-700">Tags:</span>{" "}
//               {product.tags.join(", ")}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Extended Content Section */}
//       <div className="mt-16 space-y-16">
//         {/* Product Details */}
//         <section>
//           <h2 className="text-xl font-semibold mb-4 text-gray-800">
//             Product Details
//           </h2>
//           <p className="text-gray-600 leading-relaxed">
//             {product.longDescription}
//           </p>
//         </section>

//         {/* Specifications */}
//         <section>
//           <h2 className="text-xl font-semibold mb-4 text-gray-800">
//             Specifications
//           </h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             {product.specs.map((spec, i) => (
//               <div key={i} className="flex justify-between border-b pb-2">
//                 <span className="text-gray-700 font-medium">{spec.label}</span>
//                 <span className="text-gray-600">{spec.value}</span>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Customer Reviews */}
//         <section>
//           <h2 className="text-xl font-semibold mb-4 text-gray-800">
//             Customer Reviews
//           </h2>
//           <div className="space-y-6">
//             {product.reviews.map((review, i) => (
//               <div key={i} className="border-b pb-4">
//                 <div className="flex items-center justify-between">
//                   <h3 className="font-semibold text-gray-700">{review.user}</h3>
//                   <div className="flex gap-1">
//                     {[...Array(5)].map((_, j) => (
//                       <Star
//                         key={j}
//                         size={15}
//                         className={
//                           j < review.rating
//                             ? "text-yellow-500 fill-yellow-500"
//                             : "text-gray-300"
//                         }
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <p className="text-gray-600 mt-2">{review.comment}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Related Products */}
//         <section>
//           <h2 className="text-xl font-semibold mb-4 text-gray-800">
//             Related Products
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {product.relatedProducts.map((item, i) => (
//               <div
//                 key={i}
//                 className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-56 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-medium text-gray-800 truncate">
//                     {item.name}
//                   </h3>
//                   <p className="text-red-600 font-semibold">${item.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Bottom Large Image Section */}
//         <div className="mt-10">
//           <img
//             src={product.bottomBanner}
//             alt="Product showcase banner"
//             className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }





// const sampleProduct = {
//   title: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//   originalPrice: 120,
//   discountedPrice: 82,
//   rating: 4,
//   reviewsCount: 122,
//   shortDescription:
//     "A lightweight, usually knitted pullover shirt, close-fitting with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//   longDescription:
//     "Crafted from high-quality cotton blend fabric, this bomber jacket combines comfort with style. The slim fit ensures a modern silhouette, while the zippered closure and elastic cuffs provide practicality. Ideal for layering during spring and autumn, it pairs perfectly with jeans or joggers.",
//   category: ["Men", "T-Shirt", "Crop Top"],
//   tags: ["Modern", "Latest"],
//   sizes: ["S", "M", "L", "XL", "XXL"],
//   images: [
//     "/images/jacket1.png",
//     "/images/jacket2.png",
//     "/images/jacket3.png",
//     "/images/jacket4.png",
//   ],
//   mainImage: "/images/jacket-main.png",
//   bottomBanner: "/images/jacket-bottom-banner.png",
//   specs: [
//     { label: "Material", value: "Cotton Blend" },
//     { label: "Fit", value: "Slim Fit" },
//     { label: "Closure", value: "Zipper" },
//     { label: "Occasion", value: "Casual Wear" },
//     { label: "Wash Care", value: "Machine Wash" },
//   ],
//   reviews: [
//     {
//       user: "John Doe",
//       rating: 5,
//       comment: "Great quality and fits perfectly!",
//     },
//     {
//       user: "Alex R.",
//       rating: 4,
//       comment: "Color is slightly different but overall nice jacket.",
//     },
//   ],
//   relatedProducts: [
//     {
//       name: "Men Black Bomber Jacket",
//       image: "/images/jacket-black.png",
//       price: 95,
//     },
//     {
//       name: "Men Navy Blue Hoodie",
//       image: "/images/hoodie-blue.png",
//       price: 72,
//     },
//     {
//       name: "Men Grey Sweatshirt",
//       image: "/images/sweatshirt-grey.png",
//       price: 60,
//     },
//     {
//       name: "Men Olive Windbreaker",
//       image: "/images/jacket-olive.png",
//       price: 88,
//     },
//   ],
// };

// export default function Home() {
//   return <ProductDetails product={sampleProduct} />;
// }




import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import slidertwo from "../assets/slidertwo.jpg";
import sliderthree from "../assets/sliderthree.jpg";
import featureproduct from "../assets/featureproduct.jpg";
import { FaClock, FaShippingFast, FaHeadset, FaTag } from "react-icons/fa";
import "../index.css";

const Heroslider = [
  {
    id: 1,
    Image: slidertwo,
    Text1: "Luxury Lifestyle Essentials",
    Text2: "Discover premium products crafted with precision and passion.",
  },
  {
    id: 2,
    Image: sliderthree,
    Text1: "Redefine Everyday Elegance",
    Text2: "From classic wear to tech accessories — elevate your style.",
  },
  {
    id: 3,
    Image: slidertwo,
    Text1: "Experience the Future of Comfort",
    Text2: "Where innovation meets craftsmanship and timeless design.",
  },
];

const products = [
  {
    id: 1,
    name: "AuroraPulse Wireless Headphones",
    price: "$59.99",
    rating: 4.8,
    description: "Immersive sound quality with comfort for all-day listening.",
    Image: featureproduct,
  },
  {
    id: 2,
    name: "VelvetStorm Men's Leather Jacket",
    price: "$89.99",
    rating: 4.6,
    description: "Premium crafted leather offering timeless style and warmth.",
    Image: featureproduct,
  },
  {
    id: 3,
    name: "ChronoEdge Smart Watch X1",
    price: "$129.99",
    rating: 4.9,
    description: "Track your fitness, health, and lifestyle with smart precision.",
    Image: featureproduct,
  },
  {
    id: 4,
    name: "LuxeCrest Signature Handbag",
    price: "$79.99",
    rating: 4.7,
    description: "Elegant handcrafted leather with modern design sophistication.",
    Image: featureproduct,
  },
];

const deals = [
  {
    id: 1,
    name: "Casual Wear",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    rating: 4.8,
    description: "Soft, breathable fabric for everyday casual comfort.",
  },
  {
id: 2,
    name: "Casual Wear",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    rating: 4.8,
    description: "Soft, breathable fabric for everyday casual comfort.",
  },
  {
id: 3,
    name: "Casual Wear",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    rating: 4.8,
    description: "Soft, breathable fabric for everyday casual comfort.",
  },
];

const choice = [
  {
    icon: <FaShippingFast />,
    title: "Fast Delivery",
    desc: "Get your orders delivered quickly and safely.",
    color: "from-teal-400 to-cyan-500",
  },
  {
    icon: <FaTag />,
    title: "Best Prices",
    desc: "Unbeatable discounts and offers every week.",
    color: "from-teal-400 to-cyan-500",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "We’re always here to help you anytime.",
    color: "from-teal-400 to-cyan-500",
  },
  {
    icon: <FaClock />,
    title: "Easy Returns",
    desc: "Hassle-free return policy for peace of mind.",
    color: "from-teal-400 to-cyan-500",
  },
];

// Optimized Hero Slider component
const HeroSlider = memo(({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    cssEase: "ease-in-out",
    lazyLoad: "ondemand",
    arrows: false,
  };

  return (
    <div className="slider-container mt-8">
      <div className="w-full h-[510px] mx-auto mt-16">
        <Slider {...settings}>
          {slides.map((data, index) => (
            <div key={index}>
              <div className="w-full h-[490px] mx-auto relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={data.Image}
                  alt={data.Text1 || "Hero Slide"}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[490px] object-cover transform-gpu transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="absolute top-1/3 left-10 sm:left-20 bg-black/40 backdrop-blur-sm p-6 rounded-xl max-w-md animate-fade-in">
                  <h1 className="text-3xl sm:text-4xl text-white font-bold drop-shadow-lg">
                    {data.Text1}
                  </h1>
                  <p className="text-gray-200 mt-3 leading-relaxed text-sm sm:text-base">
                    {data.Text2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
});

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />

      {/* ===== Optimized HERO SLIDER ===== */}
      <HeroSlider slides={Heroslider} />

      {/* ===== FEATURED PRODUCTS (Exclusive Design) ===== */}
<section className="relative py-24 bg-gradient-to-b from-amber-50 via-white to-gray-50 overflow-hidden">
  {/* Background Accent Circles */}
  <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-40"></div>
  <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-40"></div>

  <div className="container mx-auto px-6 relative z-10">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight drop-shadow-sm">
         Featured Products
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Discover our most loved and top-rated picks — handpicked for you.
      </p>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {products.map((item) => (
        <div
          key={item.id}
          className="group relative bg-white/80 backdrop-blur-md border border-amber-100 shadow-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-3"
        >
          {/* Image Section */}
          <div className="overflow-hidden relative">
            <img
              src={item.Image}
              alt={item.name}
              className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
              {item.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-yellow-500 ${
                    i < Math.round(item.rating) ? "opacity-100" : "opacity-30"
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="ml-2 text-sm text-gray-600 font-medium">
                {item.rating.toFixed(1)}
              </span>
            </div>

            {/* Divider */}
            <div className="w-14 h-[3px] bg-amber-600 rounded-full my-3"></div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed min-h-[60px]">
              {item.description}
            </p>

            {/* Price & Button */}
            <div className="mt-5 flex items-center justify-between">
              <p className="text-2xl font-bold text-amber-700">
                ${item.price}
              </p>
              <a
                href="#"
                className="px-4 py-2 text-sm font-semibold rounded-full border border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white transition-all duration-300"
              >
                View Details
              </a>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-amber-100/60 via-transparent to-white blur-2xl"></div>

          {/* Floating Shadow Accent */}
          <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ===== DEALS OF THE DAY ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-wide text-amber-600 font-semibold">
              Trending Products
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-3">
              Top Rated Products
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Discover our most popular picks, rated highly by our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {deals.map((item, index) => (
              <div
                key={item.id}
                className={`relative group rounded-2xl py-3 m-2 shadow-lg transition-all duration-500 ${
                  index === 0
                    ? " text-white hover:bg-gray-900 bg-slate-800 hover:text-white"
                    : " hover:bg-gray-900 bg-slate-800 hover:shadow-2xl text-white"
                }`}
              >
                <div className="flex justify-center mb-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-40 h-40 relative -top-12 4 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-1 relative -top-5">{item.name}</h3>

                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`${
                        i < Math.round(item.rating)
                          ? "text-yellow-400"
                          : "text-gray-400"
                      } text-lg`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p
                  className={`text-sm mb-5 ${
                    index === 0
                      ? "text-gray-300 group-hover:text-gray-600"
                      : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>

                <button
                  className={`px-6 py-2 font-semibold rounded-full transition-colors duration-300 ${
                    index === 0
                      ? "bg-amber-500 text-gray-900 hover:bg-amber-600"
                      : "bg-amber-500 text-white hover:bg-amber-600"
                  }`}
                >
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="relative py-24 bg-gradient-to-b from-cyan-100 via-white to-sky-100 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[700px] h-[700px] bg-amber-300/20 rounded-full blur-[150px]  -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-12 text-gray-900 tracking-tight">
            Why Choose <span className="text-amber-600">Us?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {choice.map((item, index) => (
              <div
                key={index}
                className={`group relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border-2 border-solid border-slate-500 hover:border-none hover:bg-gradient-to-br ${item.color}`}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-700"></div>

                <div
                  className={`text-6xl mb-6 mx-auto text-amber-700 transition-transform duration-500 group-hover:scale-110 group-hover:text-white`}
                >
                  {item.icon}
                </div>

                <h3
                  className={`font-semibold text-xl transition-colors duration-500 ${
                    index % 2 === 0
                      ? "group-hover:text-white"
                      : "group-hover:text-gray-100"
                  }`}
                >
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 group-hover:text-white/90 transition-colors duration-500">
                  {item.desc}
                </p>

                <span className="absolute bottom-6 left-1/2 -translate-x-1/2 w-0 group-hover:w-2/3 h-[3px] bg-white rounded-full transition-all duration-500"></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
