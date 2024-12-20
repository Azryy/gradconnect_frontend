import { setAllEmployerJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetAllEmployerJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllEmployerJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get`, { withCredentials: true });
        if (res.data.success) {
          dispatch(setAllEmployerJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllEmployerJobs();
  }, [dispatch]);

};

export default useGetAllEmployerJobs;
