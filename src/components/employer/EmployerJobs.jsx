import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { searchCompanyByText } from '@/redux/companySlice'
import EmployerJobsTable from './EmployerJobsTable'
import useGetAllEmployerJobs from '@/hooks/useGetAllEmployerJobs'

const EmployerJobs = () => {
  useGetAllEmployerJobs();
  const [input,setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(searchCompanyByText(input));
  },[input])
  return (
    <div>
      <Navbar />
      <div className=' max-w-6xl mx-auto my-10'>
      
          <Button onClick={()=>navigate("/admin/jobs/create")} className='text-right my-10'>Post Job</Button>
        
        <EmployerJobsTable/>

      </div>
    </div>
  )
}

export default EmployerJobs

