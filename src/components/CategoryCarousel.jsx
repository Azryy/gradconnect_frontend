import React from 'react';
import { Button } from './ui/button';

const categories = [
    "CAS", // College of Arts and Sciences
    "CICS", // College of Informatics and Computing Sciences
    "CTE", // College of Teacher Education
    "CET", // College of Engineering and Technology
    "CABEIHM" // College of Accountancy, Business, Economics, and International Hospitality Management
];

const CategoryCarousel = () => {
    return (
        <div>
            <h1 className='my-3 mx-auto text-center text-4xl font-semibold'>Jobs Related to:</h1>
            <div className='flex flex-row flex-wrap justify-center w-full max-w-xl mx-auto my-4'> {/* Adjusted my-20 to my-4 */}
                {
                    categories.map((cat, index) => (
                        <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4 px-2'>
                            <Button
                                variant="outline"
                                className='bg-[#e23434] rounded-full text-white w-full hover:bg-[#9c2626] hover:text-white'
                            >{cat}</Button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryCarousel;

