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
import  heroimgone from "../assets/heroimgone.jpg";
import heroimgtwo from "../assets/heroimgtwo.jpg";
import heroimgthree from "../assets/heroimgthree.jpg";
import headphones from "../assets/headphones.jpg";
import bluebag from "../assets/bluebag.jpg";
import casualJeans from "../assets/casualJeans.jpg";
import pinktop from "../assets/pinktop.jpg";
import { Star } from "lucide-react";
import { FaClock, FaShippingFast, FaHeadset, FaTag } from "react-icons/fa";
import "../index.css";

const Heroslider = [
  {
    id: 1,
    Image:  heroimgone,
    Text1: "Luxury Lifestyle Essentials",
    Text2: "Discover premium products crafted with precision and passion.",
  },
  {
    id: 2,
    Image: heroimgtwo ,
    Text1: "Redefine Everyday Elegance",
    Text2: "From classic wear to tech accessories — elevate your style.",
  },
  {
    id: 3,
    Image: heroimgthree,
    Text1: "Experience the Future of Comfort",
    Text2: "Where innovation meets craftsmanship and timeless design.",
  },
];


const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      image: headphones,
      rating: 5,
      reviewCount: 130,
      price: 120,
      oldPrice: 200,
      badge: "New",
      badgeColor: "bg-green-500",
    },
    {
      id: 2,
      name: "Blue Bag with Lock",
      image: bluebag ,
      rating: 5,
      reviewCount: 120,
      price: 160,
      oldPrice: 190,
      badge: "Sale",
      badgeColor: "bg-yellow-400 text-gray-900",
    },
    {
      id: 3,
      name: "Stylish Pink Top",
      image: pinktop,
      rating: 5,
      reviewCount: 150,
      price: 150,
      oldPrice: 200,
      badge: "New",
      badgeColor: "bg-green-500",
    },
  ];

const deals = [
  {
    id: 1,
    name: "Casual Wear",
    image: casualJeans,
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

<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
      Featured Products
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="
            group
            [perspective:1200px]
            w-full h-[420px]
            hover:scale-[1.03]
            transition-transform duration-500
          "
        >
          {/* Flip Container */}
          <div
            className="
              relative w-full h-full
              transition-transform duration-[900ms]
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]
            "
          >
            {/* FRONT SIDE */}
            <div
              className="
                absolute inset-0
                bg-gray-100
                shadow-lg
                rounded-2xl
                border border-gray-300
                overflow-hidden
                p-6
                flex flex-col justify-between items-center
                [backface-visibility:hidden]
                transition-all duration-500
                group-hover:shadow-xl
              "
            >
              {product.badge && (
                <div
                  className={`text-white text-xs font-semibold px-3 py-1 rounded-md mb-3 animate-pulse ${product.badgeColor}`}
                >
                  {product.badge}
                </div>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="w-44 h-44 object-contain mb-4 transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2"
                loading="lazy"
              />

              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                {product.name}
              </h3>

              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`transition ${
                      i < product.rating
                        ? "text-yellow-400 fill-yellow-400 group-hover:scale-125"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-blue-700 font-bold text-lg tracking-wide">
                  ${product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <button
                className="
                  px-6 py-2
                  bg-slate-700 text-white
                  border border-slate-700
                  rounded-lg
                  font-medium
                  transition-all duration-300
                  hover:bg-white hover:border-black hover:text-black
                  shadow-sm hover:shadow-md
                "
              >
                Shop Now
              </button>
            </div>

            {/* BACK SIDE */}
            <div
              className="
                absolute inset-0
                rounded-2xl
                rotate-y-180
                [backface-visibility:hidden]
                p-6
                flex flex-col items-center justify-center
                text-center
                bg-gradient-to-br from-green-50 via-green-100 to-yellow-50
                text-gray-900
                shadow-xl
              "
            >
              {/* Glow Circle */}
              <div className="absolute w-36 h-36 rounded-full bg-yellow-200/20 blur-2xl top-10"></div>

              <h3 className="text-xl font-semibold mb-4 tracking-wide">{product.name}</h3>

              <p className="text-gray-700 mb-6 text-sm px-4 leading-relaxed">
                {product.description || "Premium quality product designed for style, comfort, and freshness."}
              </p>

              <div className="flex gap-4">
                <button className="bg-green-600 px-6 py-2 rounded-lg text-white font-medium shadow hover:shadow-lg transition-transform duration-300 hover:scale-105">
                  Add to Cart
                </button>

                <button className="border border-green-400 text-green-700 px-6 py-2 rounded-lg hover:bg-green-200/20 transition-all hover:scale-105">
                  View Details
                </button>
              </div>
            </div>
          </div>
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
                className={`relative group rounded-2xl py-3 m-2 shadow-lg transition-all  duration-500 ${
                  index === 0
                    ? " text-white hover:bg-gray-900 bg-slate-800 hover:text-white"
                    : " hover:bg-gray-900 bg-slate-800 hover:shadow-2xl text-white"
                }`}
              >
                <div className="flex justify-center mb-5 ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-40 h-40 relative -top-12 4 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105 border-2 border-black"
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
