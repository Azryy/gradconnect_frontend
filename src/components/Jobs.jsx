import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'

import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import {motion} from 'framer-motion';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Search } from 'lucide-react';


const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);

    useEffect(() => {
        if (searchedQuery) {
            const filterJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchedQuery.toLowerCase())
            })
            setFilterJobs(filterJobs)
        } else {
            setFilterJobs(allJobs)
        }
    }, [allJobs, searchedQuery])
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate('/browse')
    }

    return (
        <div>
            <Navbar />
            <div className='flex w-[40%] shadow-lg border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto my-5'>
                    <input type="text" 
                        placeholder='Find your dream job now'
                        onChange = {(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full text-center'
                    />
                    <Button onClick={searchJobHandler} className='rounded-r-full'>
                        <Search className='h-5 w-5 '/>
                    </Button>
                </div>
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex gap-5'>
                    <div className='w-20%'>
                       
                    </div>

                    {

                        filterJobs.length <= 0 ? <span>Job not found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5 scrollbar-hidden'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        filterJobs.map((job) => (
                                            <motion.div
                                            initial={{opacity:0,x:100}}
                                            animate={{opacity:1,x:0}}
                                            exit={{opacity:0,x:-100}}
                                            transition={{duration:0.5}}
                                            key={job?._id}>
                                                <Job job={job} />
                                            </motion.div>
                                        ))
                                    }
                                </div>

                            </div>
                        )

                    }
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Jobs
