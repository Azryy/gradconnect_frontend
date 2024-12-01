import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal, Trash2 } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import store from '@/redux/store'
import axios from 'axios'
import { COMPANY_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'



const CompaniesTable = () => {
    const { companies, companyByText } = useSelector(store => store.company);
    const [filterCompany, setFilterCompany] = useState(companies);
    const navigate = useNavigate();

    useEffect(() => {
        const filteredCompany = companies.length >= 0 && companies.filter((company) => {
            if (!companyByText) {
                return true;
            }
            return company?.name?.toLowerCase().includes(companyByText.toLowerCase());
        });
        setFilterCompany(filteredCompany);
    }, [companies, companyByText]);

   

    const deleteCompany = async (companyId) => {
        try {
            const res = await axios.delete(`${COMPANY_API_END_POINT}/delete/${companyId}`, { withCredentials: true });
            if (res.data.success) {
                toast.success("Company deleted successfully.");
                // Remove the company from the local state
                setFilterCompany((prevCompanies) =>
                    prevCompanies.filter((company) => company._id !== companyId)
                );
            } else {
                toast.error(res.data.message || "Failed to delete company.");
            }
        } catch (error) {
          
            console.log(error);
            if (error.response) {
                
                toast.error(error.response.data.message || "Something went wrong.");
            } else {
              
                toast.error("Network error, please try again.");
            }
        }
    };
    

    return (
        <div>
            <Table>
                <TableCaption>A list of your company</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filterCompany?.map((company) => (
                            <TableRow key={company._id}>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage src={company.logo} />
                                    </Avatar>
                                </TableCell>
                                <TableCell>{company.name}</TableCell>
                                <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div
                                                onClick={() => navigate(`/admin/companies/${company._id}`)}
                                                className="flex items-center gap-2 w-fit cursor-pointer"
                                            >
                                                <Edit2 className="w-4" />
                                                <span>Edit</span>
                                            </div>
                                            <div
                                                onClick={() => deleteCompany(company._id)} // Call delete function with company ID
                                                className="flex items-center gap-2 w-fit cursor-pointer text-red-500"
                                            >
                                                <Trash2 className="w-4" /> {/* Assuming Trash2 is the delete icon */}
                                                <span>Delete</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>

                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable;