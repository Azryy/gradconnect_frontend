import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import './styles.css';
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/employer/Companies'
import CompanyCreate from './components/employer/CompanyCreate'
import CompanySetup from './components/employer/CompanySetup'
import Login from './components/auth/Login'
import EmployerJobs from './components/employer/EmployerJobs'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },{
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/description/:id',
    element:<JobDescription/>
  },

  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },


  {
    path:'/admin/companies',
    element:<Companies/>
  },

  {
    path:'/admin/companies/create',
    element:<CompanyCreate/>
  },

  {
    path:'/admin/companies/:id',
    element:<CompanySetup/>
  },
  {
    path:'/admin/jobs',
    element:<EmployerJobs/>
  }

  
])

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App

