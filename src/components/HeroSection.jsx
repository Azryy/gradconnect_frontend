import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
   

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-semibold'>From BatStateU to the World: Connecting Talent with Opportunity</span>
                <h1 className='text-5xl font-bold'>Take the Leap, Shape Your Future <br /> <span className='text-[#e23434]'>Start Your Job Application</span></h1>
                <p className='font-semibold'>From Campus to Career – Your Journey Starts with GradConnect</p>
               
            </div>



        </div>
    )
}

export default HeroSection
