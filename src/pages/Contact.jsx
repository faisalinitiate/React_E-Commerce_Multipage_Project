import React, { useState } from "react"; 
import { Mail, Phone, MapPin, Send, Star, Users } from "lucide-react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import contact from "../assets/contact.jpg";
import "../index.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscribeEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setSubscribeEmail("");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header Component */}
      <Header />

      {/* Banner */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
        
            backgroundImage: `url(${contact})`,
    
   
        }}
      >
       
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 flex-grow">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-600"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-600"
              required
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-green-600 font-semibold animate-bounce">
              ✅ Message sent successfully! We’ll reply soon.
            </p>
          )}
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-gray-700">
                <Mail className="text-blue-600" /> support@trendwear.com
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <Phone className="text-blue-600" /> +1 (234) 567-890
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <MapPin className="text-blue-600" /> 123 Fashion Street, New
                York, USA
              </p>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-72">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8332000472676!2d-74.00601528509598!3d40.712776979330316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzQ2LjAiTiA3NMKwMDAnMjAuMCJX!5e0!3m2!1sen!2sus!4v1618290544712!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      

      {/* Newsletter Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Join Our Newsletter</h2>
          <p className="mb-8 text-blue-100">
            Stay updated with the latest news, offers, and fashion trends.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-black bg-white"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className="mt-4 text-green-300 font-semibold animate-bounce">
              🎉 Thanks for subscribing! Check your inbox soon.
            </p>
          )}
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}