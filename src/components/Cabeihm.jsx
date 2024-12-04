import React from 'react'
import header from '../assets/cabeihm/cabeihmheader.jpg'
import cpa from '../assets/cabeihm/cpa.jpg'
import business from '../assets/cabeihm/business.jpg'
import economic from '../assets/cabeihm/economic.jpg'
import hotelm from '../assets/cabeihm/hotelm.jpg'
import bank from  '../assets/cabeihm/bank.jpg'
import chef from '../assets/cabeihm/chef.jpg'

const Cabeihm = () => {
  return (
    <div>
        <header className="bg-yellow-400 text-white shadow-md ">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-semibold">College of Accountancy, Business, Economics, International Hospitality Management</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#potential-jobs" className="hover:underline">Potential Jobs</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section
        id="about"
        className="py-16 bg-white bg-cover bg-center my-10"
        style={{ backgroundImage: `url(${header})` }}
      >
        <div className="container mx-auto text-center px-4 md:px-20 bg-white/40 backdrop-blur-md rounded-lg py-12">
          <h2 className="text-6xl font-bold text-yellow-400">About CABEIHM</h2>
          <p className="mt-4 text-2xl font-semibold text-black leading-7">
          The College of Accountancy, Business, Economics, and International Hospitality Management (CABEIHM) is an institution dedicated to developing globally competitive professionals 
          in fields crucial to business, finance, and hospitality industries. 
          CABEIHM focuses on cultivating both theoretical knowledge and practical skills, preparing students for leadership roles and dynamic careers in their chosen disciplines.
          </p>
        </div>
      </section>

      <section id="potential-jobs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-20">
          <h2 className="text-3xl font-bold text-center text-yellow-400">Potential Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: 'Certified Public Accountant (CPA)',
                description: 'CPAs provide financial services such as auditing, taxation, and financial analysis for businesses and individuals.',
                image: cpa,
              },
              {
                title: 'Business Development Manager',
                description: 'Identifies growth opportunities, builds partnerships, and develops strategies to enhance a company’s market presence.',
                image: business
              },
              {
                title: 'Economic Analyst',
                description: 'Analyzes economic trends, prepares reports, and provides insights to help businesses or governments make informed decisions.',
                image: economic
              },
              {
                title: 'Hotel Manager',
                description: 'Oversees daily hotel operations, ensuring guest satisfaction and efficient management of staff and resources.',
                image: hotelm
              },
              {
                title: 'Bank Teller',
                description: 'The frontline representative of a bank, responsible for assisting customers with financial transactions such as deposits, withdrawals, and account inquiries.',
                image: bank
              },
              {
                title: 'Chef',
                description: 'Culinary professional who oversees the preparation, cooking, and presentation of meals in restaurants, hotels, or catering services.',
                image: chef
              },
            ].map((job, index) => (
              <div key={index} className="bg-white shadow p-6 rounded">
                <img src={job.image} alt={job.title} className="w-full h-40 object-cover rounded" />
                <h3 className="text-xl font-semibold text-yellow-400 mt-4">{job.title}</h3>
                <p className="mt-4 text-gray-600">{job.description}</p>
              </ div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto text-center px-4 md:px-20">
          <h2 className="text-3xl font-bold text-yellow-400">Contact Us</h2>
          <p className="mt-4 text-xl font-semibold text-black">
            Interested in joining the College of Accountancy, Business, Economics, International Hospitality Management?
            Contact us for more information about our programs and career opportunities.
          </p>
          <a
            href="mailto:cabeihm@gmail.com"
            className="mt-4 inline-block bg-yellow-400 text-white px-6 py-2 rounded shadow hover:bg-yellow-500 transition"
          >
            Send an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-400 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 College of Accountancy, Business, Economics, International Hospitality Management. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Cabeihm
