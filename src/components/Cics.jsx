import React from 'react'
import softwaredev from '../assets/cics/softwaredev.jpeg'
import data_analyst from '../assets/cics/data-analyst.jpeg'
import network_admin from '../assets/cics/network-admin.jpg'
import cybersec from '../assets/cics/cybersec.jpg'
import helpdesk from '../assets/cics/helpdesk.jpg'
import designer from '../assets/cics/ui-uxdesign.jpg'
import header from '../assets/cics/cicsheader.jpg'

const Cics = () => {
  return (
    <div className="mn-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-semibold">College of Informatics and Computing Sciences</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#potential-jobs" className="hover:underline">Potential Jobs</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="py-16 bg-white bg-cover bg-center"
        style={{ backgroundImage: `url(${header})` }}
      >
        <div className="container mx-auto text-center px-4 md:px-20 bg-white/40 backdrop-blur-md rounded-lg py-12">
          <h2 className="text-6xl font-bold text-red-600">About CICS</h2>
          <p className="mt-4 text-2xl font-semibold text-black leading-7">
            The College of Information and Computing Sciences (CICS) is a dynamic
            and innovative academic institution dedicated to empowering students with cutting-edge knowledge
            and practical skills in the fields of Information Technology (IT).
            It focuses on providing a comprehensive education that equips graduates for professional success in a rapidly evolving technological landscape.
          </p>
        </div>
      </section>


      {/* Potential Jobs Section */}
      <section id="potential-jobs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-20">
          <h2 className="text-3xl font-bold text-center text-red-600">Potential Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: 'Software Developer',
                description: 'Develop software applications and systems for businesses and organizations.',
                image: softwaredev,
              },
              {
                title: 'Data Analyst',
                description: 'Analyze data to help organizations make better business decisions.',
                image: data_analyst,
              },
              {
                title: 'Network Administrator',
                description: 'Manage and maintain an organizations computer networks.',
                image: network_admin,
              },
              {
                title: 'Cybersecurity Analyst',
                description: 'Protect an organizations computer systems and networks from cyber threats.',
                image: cybersec,
              },
              {
                title: 'Help Desk Technician',
                description: 'Provide technical support and assistance to computer users.',
                image: helpdesk,
              },
              {
                title: 'UI/UX Designer',
                description: 'Design user-friendly interfaces for software applications and websites.',
                image: designer,
              },
            ].map((job, index) => (
              <div key={index} className="bg-white shadow p-6 rounded">
                <img src={job.image} alt={job.title} className="w-full h-40 object-cover rounded" />
                <h3 className="text-xl font-semibold text-red-600 mt-4">{job.title}</h3>
                <p className="mt-4 text-gray-600">{job.description}</p>
              </ div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto text-center px-4 md:px-20">
          <h2 className="text-3xl font-bold text-red-600">Contact Us</h2>
          <p className="mt-4 text-xl font-semibold text-black">
            Interested in joining the College of Information and Computing Sciences?
            Contact us for more information about our programs and career opportunities.
          </p>
          <a
            href="mailto:cics@gmail.com"
            className="mt-4 inline-block bg-red-600 text-white px-6 py-2 rounded shadow hover:bg-red-700 transition"
          >
            Send an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 College of Informatics and Computing Sciences. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Cics
