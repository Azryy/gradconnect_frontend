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
import PostJobs from './components/employer/PostJobs'
import Applicants from './components/employer/Applicants'
import ProtectedRoute from './components/employer/ProtectedRoute'
import MessageApplicant from './components/employer/MessageApplicant'
import Cics from './components/Cics'
import Cabeihm from './components/Cabeihm'
import Cte from './components/Cte'
import Cas from './components/Cas'
import Cet from './components/Cet'

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
    element:<ProtectedRoute><Companies/></ProtectedRoute>
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
  },
  {
    path:'/admin/jobs/create',
    element:<PostJobs/>
  },
  {
    path:'/admin/jobs/:id/applicants',
    element:<Applicants/>
  },
  {
    path:'/admin/jobs/applicants/message',
    element:<MessageApplicant/>
  },
  {
    path:'/colleges/cics',
    element: <Cics/>
  },
  {
    path:'/colleges/cabeihm',
    element: <Cabeihm/>
  },
  {
    path:'/colleges/cte',
    element: <Cte/>
  },
  {
    path:'/colleges/cas',
    element: <Cas/>
  },
  {
    path:'/colleges/cet',
    element:<Cet/>
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

