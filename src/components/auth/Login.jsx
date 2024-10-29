import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import bg from '../../assets/auth_bg.png'
const Login = () => {
  return (
    <div className="h-screen w-full bg-cover bg-center items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form className="w-3/6 border border-gray-200 rounded-md p-4 my-10 bg-gray-100">
          <h1 className="font-bold text-xl mb-5">Login</h1>

          <div className="my-1">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              
            />
          </div>

          <div className="my-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              
            />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="employee"
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
                  id="r2"
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

