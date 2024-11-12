import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, Eye, MoreHorizontal, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { JOB_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import axios from 'axios';
import { setAllAppliedJobs } from '@/redux/jobSlice';


const EmployerJobsTable = () => {
    const dispatch = useDispatch();
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

    const deleteJob = async (jobId) => {
        try {
            const res = await axios.delete(`${JOB_API_END_POINT}/delete/${jobId}`, { withCredentials: true });
            if (res.data.success) {
                toast.success("Job deleted successfully.");
                // Remove the job from applied jobs in Redux store
                dispatch(setAllAppliedJobs((prevAppliedJobs) =>
                    prevAppliedJobs.filter((appliedJob) => appliedJob.job._id !== jobId)
                ));
                // Also remove it from the jobs state
                setFilterJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
            } else {
                toast.error(res.data.message || "Failed to delete job.");
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
                                            onClick={() => deleteJob(job._id)}
                                             className="flex items-center gap-2 w-fit cursor-pointer text-red-500"
                                        >
                                            <Trash2 className='w-4' />
                                            <span>Delete</span>
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
