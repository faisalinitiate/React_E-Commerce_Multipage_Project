import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import about from "../assets/about.jpg";
import { Trophy, Award, Globe, Users, Star } from "lucide-react";
import "../index.css";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header Component */}
      <Header />

      <div className="bg-gray-50 min-h-screen">
        {/* Banner */}
        <div
          className="relative h-96 bg-cover bg-center"
          style={{
            backgroundImage: `url(${about})`,
                
          }}
        >
        
        </div>

        {/* Our Story */}
        <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We began as a small, passionate group of designers inspired by the
              blend of urban fashion and eco-conscious living. What started as a
              local movement has grown into a global brand shaping the future of
              sustainable style.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every piece we create tells a story of craftsmanship, creativity,
              and purpose. Our collections reflect not just trends, but timeless
              values — integrity, inclusivity, and inspiration.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80"

            alt="Our Story"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* New Section: Our Achievements */}
        <section className="bg-white py-16 border-t">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-10 flex items-center justify-center gap-2">
              <Trophy className="text-yellow-500" /> Our Achievements
            </h2>

            <p className="text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
              Over the years, we’ve built a legacy of excellence in ethical
              fashion — combining innovation with sustainability. Here are a few
              milestones that define who we are today.
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-center">
              <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
                <Award className="mx-auto text-yellow-500 mb-3" size={36} />
                <h3 className="text-3xl font-bold">25+</h3>
                <p className="text-gray-600">Global Fashion Awards</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
                <Globe className="mx-auto text-green-500 mb-3" size={36} />
                <h3 className="text-3xl font-bold">30+</h3>
                <p className="text-gray-600">Countries Reached</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
                <Users className="mx-auto text-blue-500 mb-3" size={36} />
                <h3 className="text-3xl font-bold">1M+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
                <Star className="mx-auto text-purple-500 mb-3" size={36} />
                <h3 className="text-3xl font-bold">4.9/5</h3>
                <p className="text-gray-600">Customer Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-10">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Emily Carter",
                  review:
                    "Amazing service and quick response. Highly recommend!",
                  rating: 5,
                },
                {
                  name: "Michael Scott",
                  review:
                    "Very professional team. My queries were resolved quickly.",
                  rating: 4,
                },
                {
                  name: "Sophia Lee",
                  review:
                    "Loved the experience! The staff were kind and knowledgeable.",
                  rating: 5,
                },
              ].map((test, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <div className="flex justify-center mb-3">
                    {[...Array(test.rating)].map((_, j) => (
                      <Star key={j} size={18} className="text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{test.review}"</p>
                  <h4 className="font-semibold text-blue-700">{test.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
