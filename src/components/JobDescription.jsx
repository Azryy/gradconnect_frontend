import React, { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Navbar from './Navbar/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

const JobDescription = () => {
    const params = useParams();
    const jobId = params.id;
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);
   
    const dispatch = useDispatch();
    const [isApplied, setIsApplied] = useState(false);

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
            if (res.data.success) {
                setIsApplied(true);
                const updateSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] };
                dispatch(setSingleJob(updateSingleJob));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Error applying for the job");
        }
    };

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });

                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    // Check if the user has already applied for this job
                    const hasApplied = res.data.job.applications.some(application => application.applicant === user?._id) || false;
                    setIsApplied(hasApplied);
                }
            } catch (error) {
                console.log(error);
            }
        };

        // Fetch job details when the component mounts or when user changes
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]); // Watch for changes in jobId or user ID

    // Reset applied state when user changes (i.e., after logout)
    useEffect(() => {
        if (user) {
            // User logged in; re-check application status
            const checkApplicationStatus = async () => {
                try {
                    const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                    if (res.data.success) {
                        const hasApplied = res.data.job.applications.some(application => application.applicant === user?._id) || false;
                        setIsApplied(hasApplied);
                    }
                } catch (error) {
                    console.log(error);
                }
            };
            checkApplicationStatus();
        } else {
            setIsApplied(false); // Reset applied status if user is logged out
        }
    }, [user]); // Run this effect whenever the user changes

    return (
        <div className='max-w-7xl mx-auto my-10'>
            
            <div className='flex items-center justify-between '>
                <div>
                    <h1 className='font-bold text-2xl my-16'>{singleJob?.title}</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className={'text-blue-700 font-bold'} variant="ghost">{singleJob?.position} positions available</Badge>
                        <Badge className={'text-[#F83002] font-bold'} variant="ghost">{singleJob?.jobType}</Badge>
                        <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{singleJob?.salary}</Badge>
                    </div>
                </div>

                <Button onClick={isApplied ? null : applyJobHandler}
                    disabled={isApplied} className={`rounded-lg ${isApplied ? 'cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}`}>{isApplied ? 'You Already Applied' : 'Apply Now'}</Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div className='my-4'>
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience}</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>₱{singleJob?.salary}</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications?.length}</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split("T")[0]}</span></h1>
            </div>
        </div>
    );
};

export default JobDescription;
