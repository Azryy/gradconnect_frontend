import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import bg from '../../assets/auth_bg.png'
import { toast } from 'sonner';
import { USER_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
const Login = () => {

  const [input, setInput] = useState({
    email: '',
    password: '',
    role: ''


  });
  const navigate = useNavigate();

  const changeEventHandler=(e)=>{
    setInput({...input, [e.target.name]: e.target.value})
  }


  const submitHandler = async (e) => {
    e.preventDefault()
    
   
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input,{
        headers:{
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      if(res.data.success){
        navigate('/')
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      const errorMessage = error?.response?.data?.message 
      toast.error(errorMessage)
      
    }
    
   }

  return (
    <div className="h-screen w-full bg-cover bg-center items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} className="w-3/6 border border-gray-200 rounded-md p-4 my-10 bg-gray-100">
          <h1 className="font-bold text-xl mb-5">Login</h1>

          <div className="my-1">
            <Label htmlFor="email">Email Address</Label>
            <Input
            
              type="email"
              value = {input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter your email address"
              required
              
            />
          </div>

          <div className="my-1">
            <Label htmlFor="password">Password</Label>
            <Input
              
              type="password"
              value = {input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your password"
              required
              
            />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="employee"
                  checked={input.role === 'employee'}
                  onChange={changeEventHandler}
                  id="r1"
                  className="cursor-pointer accent-red-500"
                />
                <Label htmlFor="r1">Employee</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="employer"
                  checked={input.role === 'employer'}
                  onChange={changeEventHandler}
                  className="cursor-pointer accent-red-500"
                />
                <Label htmlFor="r2">Employer</Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full my-2">Login</Button>
          <span className="text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="text-red-600 font-semibold">Sign up</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;

