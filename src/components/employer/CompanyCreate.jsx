import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState();
    const dispatch = useDispatch();

    const registerNewCompany = async () => {
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`, { companyName }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            
            if (res?.data?.success) {
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                
                const companyId = res?.data?.company?._id;
                if (companyId) {
                    navigate(`/admin/companies/${companyId}`);
                } else {
                    console.error("Company ID is undefined, navigation canceled.");
                    toast.error("Company ID missing; cannot navigate.");
                }
            }
        } catch (error) {
            console.log("Error registering new company:", error);
            toast.error(error.response?.data?.message || "An unexpected error occurred.");
        }
    };
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto '>
                <div className='my-10'>
                    <h1 className='font-bold text-2xl'>Your Company Name</h1>
                    <p className='text-gray-500'>Please Enter your Company Name.</p>
                </div>


                <Label>Company Name</Label>
                <Input
                    type='text'
                    className='my-2'
                    placeholder='Enter Company Name'
                    onChange={(e)=>setCompanyName(e.target.value)}

                />

                <div className='flex items-center my-10 gap-2'>
                    <Button variant="outline" onClick={()=>navigate("/admin/companies")}>Cancel</Button>
                    <Button onClick={registerNewCompany}>Continue</Button>


                </div>
            </div>
        </div>
    )
}

export default CompanyCreate
