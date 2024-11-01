
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'
import logo from '../../assets/gradconnect_logo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import store from '@/redux/store'





const Navbar = () => {
   
    const {user} = useSelector(store=>store.auth) 

    return (
        <div className='bg-transparent'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 mt-2'>
                <div className='flex items-center justify-center gap-x-1'>
                    <Link to='/'><img src={logo} className='w-32 h-24' alt="" /></Link>
                    <h1 className='text-2xl font-bold'>Grad<span className='text-[#F83002]'>Connect</span></h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5 cursor-pointer'>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/jobs'><li>Jobs</li></Link>
                        <Link to='/browse'><li>Browse</li></Link>
                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to='/login'><Button variant="outline" className="bg-black text-white hover:text-black ">Login</Button></Link>
                                <Link to='/signup'><Button className="bg-[#F83002] hover:bg-[#eeeaea] hover:text-[#F83002]">Sign up</Button></Link>       
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://i.pinimg.com/736x/24/54/77/2454772ec1cbc3ea0447c176bfc3764c.jpg" alt="@shadcn" />

                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div className='flex gap-4 space-y-2'>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src="https://i.pinimg.com/736x/24/54/77/2454772ec1cbc3ea0447c176bfc3764c.jpg" alt="@shadcn" />

                                        </Avatar>
                                        <div>
                                            <h4 className='font-medium'>Kurt Dorado</h4>
                                            <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                                        </div>

                                    </div>
                                    <div className='flex flex-col my-2 text-gray-700'>
                                        <div className='flex w-fit items-center cursor-pointer'>
                                            <User2 />
                                            <Button variant="link"><Link to='/profile'>View Profile</Link></Button>
                                        </div>
                                        <div className='flex w-fit items-center cursor-pointer'>
                                            <LogOut />
                                            <Button variant="link">Logout</Button>
                                        </div>


                                    </div>

                                </PopoverContent>
                            </Popover>
                        )
                    }


                </div>
            </div>


        </div>
    )
}

export default Navbar

