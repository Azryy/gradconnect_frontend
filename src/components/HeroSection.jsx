import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
const HeroSection = () => {
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-semibold'>From BatStateU to the World: Connecting Talent with Opportunity</span>
                <h1 className='text-5xl font-bold'>Take the Leap, Shape Your Future <br /> <span className='text-[#e23434]'>Start Your Job Application</span></h1>
                <p className='font-semibold'>From Campus to Career – Your Journey Starts with GradConnect</p>
                <div className='flex w-[40%] shadow-lg border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto my-5'>
                    <input type="text" 
                        placeholder='Find your dream job now'
                        className='outline-none border-none w-full text-center'
                    />
                    <Button className='rounded-r-full'>
                        <Search className='h-5 w-5 '/>
                    </Button>
                </div>
            </div>



        </div>
    )
}

export default HeroSection
