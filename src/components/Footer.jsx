import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/c1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-black z-10 text-gray-300 px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
          
          {/* Brand Column */}
          <div className="flex-1">
            <div className="mb-6">
              <Link to="/">
                <img src={logo} className="w-[14rem]" alt="Axstar agency logo representing custom MVP and app development in Colombo Sri Lanka" loading="lazy" />
              </Link>
              
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs italic">
              "Let’s create something extraordinary together!"
            </p>
          </div>

          {/* Links Group */}
          <div className="flex-[2] grid grid-cols-1 sm:grid-cols-3 gap-10">
            
            {/* Main Links */}
            <div>
              <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em] border-gray-800 pb-2">
                Main
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">Works</li>
                <li className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">Services</li>
                <li className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">About</li>
                <li className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">Pricing</li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]  border-gray-800 pb-2">
                Support
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">Contact Us</li>
                <li className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">Terms & Condition</li>
                <li className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">Privacy Policy</li>
                <li className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">Disclosures</li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]  border-gray-800 pb-2">
                Follow Us On
              </h3>
              <div className="flex flex-wrap gap-5">
                <FaFacebook size={20} className="text-[var(--primary-color)] hover:text-white cursor-pointer transition-transform hover:-translate-y-1" />
                <FaInstagram size={20} className="text-[var(--primary-color)] hover:text-white cursor-pointer transition-transform hover:-translate-y-1" />
                <FaWhatsapp size={20} className="text-[var(--primary-color)] hover:text-white cursor-pointer transition-transform hover:-translate-y-1" />
                <FaLinkedin size={20} className="text-[var(--primary-color)] hover:text-white cursor-pointer transition-transform hover:-translate-y-1" />
                <FaXTwitter size={20} className="text-[var(--primary-color)] hover:text-white cursor-pointer transition-transform hover:-translate-y-1" />
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 tracking-wide">
            © 2026 AXSTAR. ALL RIGHTS RESERVED.
          </p>
          
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;