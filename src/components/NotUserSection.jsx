import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../main.css'
import cics from '../assets/CICS.jpeg'
import cabeihm from '../assets/cabeihmmm.jpeg'
import cte from '../assets/cte.webp'
import cas from '../assets/cas.webp'
import cet from '../assets/cet.webp'

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
            <div className="flex justify-center items-center">
                <Button
                    onClick={handleApplyClick}
                    className="bg-red-600 font-bold hover:bg-gray-100 w-72 hover:text-black text-2xl h-14 py-4 px-8 rounded-full my-10"
                >
                    Apply Now
                </Button>
                <ToastContainer />
            </div>

            <div className='mx-20 my-10'>
                <h1 className='text-4xl font-bold '>Explore Our <span className='text-red-600'>Colleges</span></h1>
                <div className='grid grid-cols-2 gap-10 mx-auto my-10 max-w-8xl'>
                    <div className='border border-gray-300 rounded-lg shadow-md flex h-full p-6'>
                        <img className='rounded-lg h-56 w-56 object-cover mt-4' src={cics} alt="CICS Logo" />
                        <div className='flex flex-col justify-center ml-6'>
                            <h1 className='font-semibold text-2xl mb-2'>College of Informatics and Computing Sciences</h1>
                            <p className='text-gray-500 mb-4'>
                                The College of Informatics and Computing Sciences (CICS) is an academic institution within many universities, specializing in computing, information technology, and related fields.
                            </p>
                            <Button onClick={()=>navigate("/colleges/cics")} className='bg-red-600 text-white font-medium px-4 py-2 rounded-md hover:bg-red-700 transition duration-200 ease-in-out'>
                                View More
                            </Button>
                        </div>
                    </div>


                    <div className='border border-gray-300 rounded-lg shadow-md flex h-full p-6'>
                        <img className='rounded-lg h-56 w-56 object-cover mt-4' src={cabeihm} alt="CABEIHM Logo" />
                        <div className='flex flex-col justify-center ml-6'>
                            <h1 className='font-semibold text-2xl mb-2'>College of Accountancy, Business, Economics and International Hospitality Management</h1>
                            <p className='text-gray-500 mb-4'>
                                CABEIHM offers a comprehensive range of programs aimed at preparing students for successful careers in areas such as accountancy, business administration, economics, international business, and hospitality management. 
                            </p>
                            <Button onClick={()=>navigate('/colleges/cabeihm')} className='bg-red-600 text-white font-medium px-4 py-2 rounded-md hover:bg-red-700 transition duration-200 ease-in-out'>
                                View More
                            </Button>
                        </div>
                    </div>
                    <div className='border border-gray-300 rounded-lg shadow-md flex h-full p-6'>
                        <img className='rounded-lg h-56 w-56 object-cover mt-4' src={cte} alt="CTE Logo" />
                        <div className='flex flex-col justify-center ml-6'>
                            <h1 className='font-semibold text-2xl mb-2'>College of Teachers Education</h1>
                            <p className='text-gray-500 mb-4'>
                                CTE offers a variety of degree programs aimed at training teachers for different educational levels, including elementary, secondary, and special education. 
                            </p>
                            <Button onClick={()=>navigate("/colleges/cte")} className='bg-red-600 text-white font-medium px-4 py-2 rounded-md hover:bg-red-700 transition duration-200 ease-in-out'>
                                View More
                            </Button>
                        </div>
                    </div>
                    <div className='border border-gray-300 rounded-lg shadow-md flex h-full p-6'>
                        <img className='rounded-lg h-56 w-56 object-cover mt-4' src={cas} alt="CAS Logo" />
                        <div className='flex flex-col justify-center ml-6'>
                            <h1 className='font-semibold text-2xl mb-2'>College of Arts and Sciences</h1>
                            <p className='text-gray-500 mb-4'>
                              CAS provides essential liberal arts education, promoting critical thinking, communication skills, and a broad understanding of human culture, society, and the natural world. 
                            </p>
                            <Button onClick={()=>navigate("/colleges/cas")} className='bg-red-600 text-white font-medium px-4 py-2 rounded-md hover:bg-red-700 transition duration-200 ease-in-out'>
                                View More
                            </Button>
                        </div>
                    </div>
                    <div className='border border-gray-300 rounded-lg shadow-md flex h-full p-6'>
                        <img className='rounded-lg h-56 w-56 object-cover mt-4' src={cet} alt="CET Logo" />
                        <div className='flex flex-col justify-center ml-6'>
                            <h1 className='font-semibold text-2xl mb-2'>College of Engineering Techonology</h1>
                            <p className='text-gray-500 mb-4'>
                             CET plays a critical role in developing future engineers and technologists equipped with the skills needed to address contemporary challenges in industries ranging from construction and manufacturing to information technology and energy. 
                            </p>
                            <Button onClick={()=>navigate("/colleges/cet")} className='bg-red-600 text-white font-medium px-4 py-2 rounded-md hover:bg-red-700 transition duration-200 ease-in-out'>
                                View More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default NotUserSection;
