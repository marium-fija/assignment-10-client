import React from 'react';
import footerBg from '../assets/footerBG.jpeg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="relative bg-base-100 text-gray-800 py-12"
      style={{
        backgroundImage: `url(${footerBg})`, 
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "0.95",
      }}>

         <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        
        <div>
          <h2 className="text-2xl font-bold mb-4">
            About the THINK GREEN
          </h2>
          <p className="leading-relaxed text-gray-700 mb-4">
            The Think Green supports community gardening,
            shares knowledge and resources, grows a sustainable framework through
            advocacy and public policy, and cultivates individual and community
            health.
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} THINK GREEN, a 501c3
          </p>
        </div>

        
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="flex gap-4 mb-4">
            <a href="#" className="text-rose-500 hover:text-rose-700 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-900 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-blue-950 hover:text-blue-950 text-2xl">
             <FaLinkedinIn />
            </a>
            <a href="#" className="text-red-600 hover:text-red-800 text-2xl">
             <FaYoutube />
            </a>
          </div>
          <p>EStern Housing , Postogola</p>
          <p>Dhaka-1204 , Bangladesh</p>
          <p className="mt-2">mariumFija@gmail.com</p>
          <p>Mobile : 01609358914</p>
        </div>
      </div>

      {/* Overlay effect for better readability */}
      <div className="absolute inset-0 bg-white opacity-80 -z-10"></div>

            </footer>
        </div>
    );
};

export default Footer;