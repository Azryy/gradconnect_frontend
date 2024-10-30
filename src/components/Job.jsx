import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

const Job = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-gray-100 border border-gray-300 my-3 mx-3'>
            <div className='flex items-center justify-between'> 
                <p>3 days ago</p>
               <Button variant="outline" className='rounded-full bg-gray-100 border-none' size="icon"><Bookmark /></Button>
            </div>


            <div className='flex items-center gap-2 my-2 '>
                <Button className='p-6' variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src="data:image/png;base64,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" />
                    </Avatar>
                </Button>
                <div>
                    <h1>Company Name</h1>
                    <p>Philippines</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Job Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci quo unde, incidunt atque doloremque tempore delectus. Facilis, quis voluptas?</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">10 positions available</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">Full Time</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">24,000</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button variant="outline">Details</Button>
                <Button className='bg-red-700 hover:bg-red-800'>Save</Button>
            </div>

        </div>
    )
}

export default Job
