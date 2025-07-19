import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-orange-400 mb-4">WorldPlate</div>
            <p className="text-gray-300 text-sm mb-4">
              Experience diverse cuisines from around the world, delivered fresh to your doorstep.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Twitter size={20} className="text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Instagram size={20} className="text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Youtube size={20} className="text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Menu</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Online Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Table Booking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Catering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Delivery</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for latest offers and updates.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
              />
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 WorldPlate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;