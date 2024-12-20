import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'
import logo from '../../assets/gradconnect_logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'

const Navbar = () => {

    const { user } = useSelector(store => store.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true })
            if (res.data.success) {
                dispatch(setUser(null))
                navigate('/')
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }

    return (
        <div className='bg-transparent'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 mt-2'>
                <div className='flex items-center justify-center gap-x-1'>
                    <Link to='/'><img src={logo} className='w-32 h-24' alt="" /></Link>
                    <h1 className='text-2xl font-bold'>Grad<span className='text-[#F83002]'>Connect</span></h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5 cursor-pointer'>
                        {user ? (
                            user.role === 'employer' ? (
                                <>
                                    <Link to='/admin/companies'><li>Companies</li></Link>
                                    <Link to='/admin/jobs'><li>Jobs</li></Link>
                                </>
                            ) : (
                                <>
                                    <Link to='/'><li>Home</li></Link>
                                    <Link to='/jobs'><li>Jobs</li></Link>
                                </>
                            )
                        ) : (
                            <></>
                        )}
                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to='/login'><Button variant="outline" className="bg-black text-white hover:text-black ">Login</Button></Link>
                                <Link to='/signup'><Button className="bg-[#F83002] hover:bg-[#eeeaea] hover:text-[#F83002]">Sign up</Button></Link>
                            </div>
                        ) : (
                            <>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                        </Avatar>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80">
                                        <div className='flex gap-4 space-y-2'>
                                            <Avatar className="cursor-pointer">
                                                <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium'>{user?.fullname}</h4>
                                                <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col my-2 text-gray-700'>
                                            {user?.role === 'employee' && (
                                                <div className='flex w-fit items-center cursor-pointer'>
                                                    <User2 />
                                                    <Button variant="link"><Link to='/profile'>View Profile</Link></Button>
                                                </div>
                                            )}

                                            <div className='flex w-fit items-center cursor-pointer'>
                                                <LogOut />
                                                <Button onClick={logoutHandler} variant="link">Logout</Button>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
