import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import bg from '../../assets/auth_bg.png'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import store from '@/redux/store'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'



const Signup = () => {

  const [input, setInput] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: '',
    file: ''

  });
  const {loading} = useSelector(store=>store.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler=(e)=>{
    setInput({...input, [e.target.name]: e.target.value})
  }

  const changeFileHandler=(e)=>{ 
    setInput({...input, file: e.target.files?.[0]});
   }

   const submitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('fullname', input.fullname); 
    formData.append('email', input.email); 
    formData.append('phoneNumber', input.phoneNumber); 
    formData.append('password', input.password); 
    formData.append('role', input.role); 
    if(input.file){
      formData.append('file', input.file); 
    }
    try {
      dispatch(setLoading(true))
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData,{
        headers:{
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true
      })
      if(res.data.success){
        navigate('/login')
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
      
    } finally {
      dispatch(setLoading(false))
    }
    
   }

  return (
    <div
    className="h-screen w-full bg-cover bg-center items-center justify-center"
    style={{
      backgroundImage: `url(${bg})`,
    }}
  >
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-6 bg-gray-100'>
          <h1 className='font-bold text-xl mb-5'>Sign up</h1>
          <div className='my-1'>
            <Label>Full name</Label>
            <Input
              type='text'
              value = {input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder='Enter your full name'
              required
            />
          </div>
          <div className='my-1'>
            <Label>Email Address</Label>
            <Input
              type='email'
              value = {input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder='Enter your email address'
              required
            />
          </div>
          <div className='my-1'>
            <Label>Phone Number</Label>
            <Input
              type='number'
              value = {input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder='Enter your phone number'
              className="no-spinner"
              required
            />
            <style jsx>{`
        .no-spinner::-webkit-outer-spin-button,
        .no-spinner::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .no-spinner {
          -moz-appearance: textfield; 
        }
      `}</style>
          </div>
          <div className='my-1'>
            <Label>Password</Label>
            <Input
              type='password'
              value = {input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder='Enter your password'
              required
            />
          </div>
          <div className='flex items-center justify-between'>
            <RadioGroup className='flex items-center gap-4 my-5'>
              <div className="flex items-center space-x-2">
                <Input
                  type='radio'
                  name="role"
                  value="employee"
                  checked={input.role === 'employee'}
                  onChange={changeEventHandler}
                  className='cursor-pointer accent-red-500'
                />
                <Label htmlFor="r1">Employee</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type='radio'
                  name="role"
                  value="employer"
                  checked={input.role === 'employer'}
                  onChange={changeEventHandler}
                  className='cursor-pointer accent-red-500'
                />
                <Label htmlFor="r2">Employer</Label>
              </div>

            </RadioGroup>
            <div className='flex items-center gap-2'>
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type='file'
                onChange={changeFileHandler}
                className='cursor-pointer'
              />
            </div>
          </div>
          {
              loading ? <Button className='w-full my-4'><Loader2 className='mr-2 h-4 w-4 animate-spin'/>Please wait for a while</Button>:
              <Button type="submit" className="w-full my-2">Sign up</Button>
          }
          <span className='text-sm'>Already have an account? <Link to='/login' className='text-red-600 font-semibold'>Login</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Signup
