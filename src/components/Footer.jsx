import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons'; // Importing the X icon
import logo from '../assets/gradconnect_logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8"> 
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                
            
                <div className="flex flex-col items-start mb-6 md:mb-0">
                    <img src={logo} alt="GradConnect Logo" className="h-16 mb-3" /> {/* Normal logo size */}
                    <h3 className="text-2xl font-semibold mb-2">GradConnect</h3> {/* Normal title size */}
                    <p className="max-w-sm text-gray-400 text-base"> {/* Normal text size */}
                        Inspiring the future: Where graduates meet their dreams and employers find their stars.
                    </p>
                </div>

              
                <div className="flex space-x-6"> 
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-blue-500 transition-colors duration-300" /> {/* Normal icon size */}
                    </a>
                    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faX} className="text-2xl hover:text-black transition-colors duration-300" /> {/* X icon */}
                    </a>
                
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-pink-500 transition-colors duration-300" /> {/* Normal icon size */}
                    </a>
                </div>
            </div>

           
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-300">
                &copy; {new Date().getFullYear()} GradConnect. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
