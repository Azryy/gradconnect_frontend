import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { searchCompanyByText } from '@/redux/companySlice'

const Companies = () => {
  useGetAllCompanies();
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
      
          <Button onClick={()=>navigate("/admin/companies/create")} className='text-right my-10'>New Company</Button>
        
        <CompaniesTable/>

      </div>
    </div>
  )
}

export default Companies
