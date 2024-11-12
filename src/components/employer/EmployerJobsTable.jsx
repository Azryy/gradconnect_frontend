import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, Eye, MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const EmployerJobsTable = () => {
    const { companyByText } = useSelector(store => store.company);
    const { allEmployerJobs } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth); // Get user from Redux
    const [filterJobs, setFilterJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?._id) { 
            const filteredJobs = allEmployerJobs.filter((job) => {
              
                if (job?.created_by === user._id) {
                    if (!companyByText) {
                        return true;
                    }
                  
                    return job?.company?.name?.toLowerCase().includes(companyByText.toLowerCase());
                }
                return false; 
            });
            setFilterJobs(filteredJobs); 
        }
    }, [allEmployerJobs, companyByText, user?._id]); 

    return (
        <div>
            <Table>
                <TableCaption>A list of your posted jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filterJobs?.map((job) => (
                        <TableRow key={job._id}>
                            <TableCell>{job?.company?.name || "No company Name"}</TableCell>
                            <TableCell>{job?.title}</TableCell>
                            <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
                            <TableCell className="text-right cursor-pointer">
                                <Popover>
                                    <PopoverTrigger>
                                        <MoreHorizontal />
                                    </PopoverTrigger>
                                    <PopoverContent className='w-32'>
                                        <div 
                                            onClick={() => navigate(`/admin/companies/${job._id}`)} 
                                            className='flex items-center gap-2 w-fit cursor-pointer'
                                        >
                                            <Edit2 className='w-4' />
                                            <span>Edit</span>
                                        </div>
                                        <div onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)} className='flex items-center w-fit gap-2 cursor-pointer mt-2'>
                                            <Eye className='w-4'/>
                                            <span>Applicants</span>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default EmployerJobsTable;
