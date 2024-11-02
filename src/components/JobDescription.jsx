import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import Navbar from './Navbar/Navbar'

const JobDescription = () => {
    const isApplied = true
    return (
        
        
        <div className='max-w-7xl mx-auto my-10'>
           <Navbar/>
            <div className='flex items-center justify-between '>
                <div>
                    <h1 className='font-bold text-2xl my-16'>Backend Developer</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className={'text-blue-700 font-bold'} variant="ghost">10 positions available</Badge>
                        <Badge className={'text-[#F83002] font-bold'} variant="ghost">Full Time</Badge>
                        <Badge className={'text-[#7209b7] font-bold'} variant="ghost">24,000</Badge>
                    </div>
                </div>

                <Button disabled={isApplied} className={`rounded-lg ${isApplied?' cursor-not-allowed':'bg-red-600 hover:bg-red-700'}`}>{isApplied?'You Already Applied':'Apply Now'}</Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div className='my-4'>
                
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>Backend Developer</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>Lipa City, Batangas</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, at?</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>At least 1yr (Internship is accepted)</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>24,000</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>7</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>10-28-2024</span></h1>
            </div>


        </div>
    )
}

export default JobDescription
