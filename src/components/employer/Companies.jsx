import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'

const Companies = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className=' max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
          <Input
            className='w-fit'
            placeholder='Search Companies'
          />
          <Button onClick={()=>navigate("/admin/companies/create")} className=''>New Company</Button>
        </div>
        <CompaniesTable/>

      </div>
    </div>
  )
}

export default Companies
