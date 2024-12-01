import React from 'react';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const categories = [
    "CAS", // College of Arts and Sciences
    "CICS", // College of Informatics and Computing Sciences
    "CTE", // College of Teacher Education
    "CET", // College of Engineering and Technology
    "CABEIHM" // College of Accountancy, Business, Economics, and International Hospitality Management
];

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate('/browse')
    }
    return (
        <div className='flex items-center justify-center'>
             <Button onClick={()=>navigate("/jobs")} className="bg-red-600 font-bold hover:bg-gray-100 w-72 hover:text-black text-2xl h-14 py-4 px-8 rounded-full my-10">
                    Apply Now
                </Button>
        </div>
    );
};

export default CategoryCarousel;

