import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/gradconnect_logo.png';
import pin from '../assets/pin.png';

// Optional: Install react-modal if you prefer an external library
// import Modal from 'react-modal';

const Footer = () => {
    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                
                {/* Left Section: Logo and Description */}
                <div className="flex flex-col items-start mb-6 md:mb-0">
                    <img src={logo} alt="GradConnect Logo" className="h-16 mb-3" />
                    <h3 className="text-2xl font-semibold mb-2">GradConnect</h3>
                    <p className="max-w-sm text-gray-400 text-base">
                        Inspiring the future: Where graduates meet their dreams and employers find their stars.
                    </p>
                </div>

                {/* Middle Section: Visit Our Campus */}
                <div className="flex flex-col items-center mb-6 md:mb-0">
                    <h1 className="text-lg font-semibold mb-2">Visit Our Campus</h1>
                    <p className="text-gray-400 mb-3">Click here to see the maps</p>
                    <img
                        src={pin}
                        className="w-20 cursor-pointer"
                        alt="location icon"
                        onClick={openModal} // Open modal on click
                    />
                </div>

                {/* Right Section: Social Media Links */}
                <div className="flex space-x-6 items-center">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-blue-500 transition-colors duration-300" />
                    </a>
                    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faX} className="text-2xl hover:text-black transition-colors duration-300" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-pink-500 transition-colors duration-300" />
                    </a>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-300">
                &copy; {new Date().getFullYear()} GradConnect. All rights reserved.
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-semibold">Campus Location</h2>
                            <button
                                className="text-xl font-bold text-gray-500"
                                onClick={closeModal} // Close modal on click
                            >
                                <FontAwesomeIcon icon={faX} />
                            </button>
                        </div>
                        <div className="mt-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.545318512123!2d121.15338363588032!3d14.044944786434867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6ed9735068d7%3A0x97fd25b226e150e7!2sBatangas%20State%20University%20Jose%20P.%20Laurel%20Polytechnic%20College!5e0!3m2!1sfil!2sph!4v1733191555365!5m2!1sfil!2sph"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
