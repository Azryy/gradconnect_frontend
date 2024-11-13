import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../main.css' // Import your custom styles if you created a separate file

const NotUserSection = () => {
    const navigate = useNavigate();

    const handleApplyClick = () => {
        // Show a custom toast notification
        toast.error("You need to login first before applying", {
            position: "top-center",
            autoClose: 3000, // Closes after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: 'Toastify__toast--custom', // Apply custom class
            progressClassName: 'Toastify__progress-bar--custom' // Custom progress bar
        });

        // Redirect after a delay if needed
        setTimeout(() => navigate('/login'), 3000); // Redirects after 3 seconds
    };

    return (
        <div>
            <Button onClick={handleApplyClick} className="bg-red-600 hover:bg-white hover:text-black">Apply Now</Button>
            <ToastContainer />
        </div>
    );
};

export default NotUserSection;
