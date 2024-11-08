import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const EmployerJobsTable = () => {
    const { companies, companyByText } = useSelector(store => store.company);
    const { allEmployerJobs } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allEmployerJobs);
    const navigate = useNavigate();

    useEffect(() => {
        const filteredJobs = allEmployerJobs.filter((job) => {
            if (!companyByText) {
                return true;
            }
            return job?.company?.name?.toLowerCase().includes(companyByText.toLowerCase());
        });
        setFilterJobs(filteredJobs);
    }, [allEmployerJobs, companyByText]);

    return (
        <div>
            <Table>
                <TableCaption>A list of registered jobs</TableCaption>
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