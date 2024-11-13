import React, { useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import getAllJobs from '@/hooks/getAllJobs'
import { useSelector } from 'react-redux'
import store from '@/redux/store'
import { useNavigate } from 'react-router-dom'
import NotUserSection from './NotUserSection'

const Home = () => {
  getAllJobs();
  const { user } = useSelector(store => store.auth)
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'employer') {
      navigate("/admin/companies");
    }
  }, [])
  return (
    <div>

      <Navbar />
      <HeroSection />
      {
        !user ? (
          <>
            <NotUserSection/>
          </>

        )
          : (
            <>
              <CategoryCarousel />
              <LatestJobs />
              
            </>
          )

      }
      <Footer />
    </div>
  )
}

export default Home
