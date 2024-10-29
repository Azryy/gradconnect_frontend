import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import bg from '../../assets/auth_bg.png'



const Signup = () => {
  return (
    <div
    className="h-screen w-full bg-cover bg-center items-center justify-center"
    style={{
      backgroundImage: `url(${bg})`,
    }}
  >
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-6 bg-gray-100'>
          <h1 className='font-bold text-xl mb-5'>Sign up</h1>
          <div className='my-1'>
            <Label>Full name</Label>
            <Input
              type='text'
              placeholder='Enter your full name'
            />
          </div>
          <div className='my-1'>
            <Label>Email Address</Label>
            <Input
              type='email'
              placeholder='Enter your email address'
            />
          </div>
          <div className='my-1'>
            <Label>Phone Number</Label>
            <Input
              type='number'
              placeholder='Enter your phone number'
              className="no-spinner"
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
              placeholder='Enter your password'
            />
          </div>
          <div className='flex items-center justify-between'>
            <RadioGroup className='flex items-center gap-4 my-5'>
              <div className="flex items-center space-x-2">
                <Input
                  type='radio'
                  name="role"
                  value="employee"
                  className='cursor-pointer accent-red-500'
                />
                <Label htmlFor="r1">Employee</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type='radio'
                  name="role"
                  value="employer"
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
                className='cursor-pointer'
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4">Sign up</Button>
          <span className='text-sm'>Already have an account? <Link to='/login' className='text-red-600 font-semibold'>Login</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Signup
