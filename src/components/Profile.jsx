import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialogue from './UpdateProfileDialogue'
import { useSelector } from 'react-redux'
import jaymuel from '../assets/Jaymuel.jpg'


const skills = ["Frontend","Backend","Fullstack","Mobile"]
const isResume = true
const Profile = () => {
    const [open,setOpen] = useState(false);
   
    const {user} = useSelector(store=>store.auth)
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between items-start'>
                    <div className='flex items-center space-x-4'>
                        <Avatar className="h-20 w-20">
                            <AvatarImage src={jaymuel} />
                        </Avatar>
                        <div className='flex flex-col'>
                            <h1 className='text-2xl font-semibold'>{user?.fullname}</h1>
                            <p className='text-gray-500'>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} variant="outline" className='mt-4'>
                        <Pen className='w-4 h-4 mr-2' />
                        Edit Profile
                    </Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>

                </div>
                <div>
                    <h1 className='font-semibold text-lg my-2'>Skills</h1>
                    <div className='flex items-center gap-1'>
                    {
                        user?.profile?.skills.length !==0 ? user?.profile?.skills.map((item,index)=><Badge key={index} variant="outline" className='bg-red-600 text-white w-30 cursor-pointer h-8'>{item}</Badge>) : <span>No skills added</span>
                    }
                    </div>                 
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className='text-md font-semibold my-2'>Attached Resume</Label>
                    {
                        isResume ? <a className='text-red-500 w-full hover:underline cursor-pointer' href="https://facebook.com" target='_blank'>Resume</a> : <span>No Resume</span>
                    }
                </div>
               
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                    <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                    <AppliedJobTable/>
                </div>
                <UpdateProfileDialogue open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Profile
