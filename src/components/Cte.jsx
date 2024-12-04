import React from 'react'
import header from '../assets/Cte/CTEHeader.jpg'
import classroom_teacher from '../assets/Cte/classroomteacher.jpg'
import school_admin from '../assets/Cte/SchoolAdmin.jpg'
import special from '../assets/Cte/special.webp'
import consultant from '../assets/Cte/consultant.jpg'
import curriculum from '../assets/Cte/curriculum.jpg'
import policy from '../assets/Cte/policy.webp'
const Cte = () => {
  return (
    <div>
       <header className="bg-blue-600 text-white shadow-md ">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-semibold">College of Teachers Education</h1>
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
          <h2 className="text-6xl font-bold text-blue-600">About CTE</h2>
          <p className="mt-4 text-2xl font-semibold text-black leading-7">
          The College of Technical Education (CTE) is an educational institution focused on providing students with practical, hands-on training and knowledge in a variety of technical fields. CTE aims to equip students with the necessary skills and expertise to excel in the workforce by offering programs that blend technical proficiency with real-world applications.


          </p>
        </div>
      </section>

      <section id="potential-jobs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-20">
          <h2 className="text-3xl font-bold text-center text-blue-600">Potential Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: ' Classroom Teacher ',
                description: ' Teachers are responsible for planning lessons, teaching various subjects, assessing student progress, and creating a supportive learning environment. They work with students at different grade levels, from primary school to high school.',
                image: classroom_teacher,
              },
              {
                title: 'School Administrator',
                description: 'School administrators oversee the daily operations of schools, manage staff, create policies, and ensure students have a safe and effective learning environment. ',
                image: school_admin,
              },
              {
                title: 'Special Education Teacher',
                description: ' Special education teachers work with students who have physical, emotional, or learning disabilities. They create tailored lesson plans and provide individualized support to help students succeed academically and socially.',
                image: special,
              },
              {
                title: ' Educational Consultant',
                description: 'Educational consultants work with schools, educational institutions, or parents to improve teaching methods, develop curricula, and provide guidance on educational best practices.',
                image: consultant,
              },
              {
                title: ' Curriculum Developer',
                description: 'Curriculum developers create educational content, lesson plans, and materials for schools or educational programs. They design curricula that align with academic standards and meet the needs of students at various levels.',
                image: curriculum,
              },
              {
                title: ' Education Policy Analyst',
                description: 'Education policy analysts research and analyze policies related to education systems. ',
                image: policy,
              },
            ].map((job, index) => (
              <div key={index} className="bg-white shadow p-6 rounded">
                <img src={job.image} alt={job.title} className="w-full h-40 object-cover rounded" />
                <h3 className="text-xl font-semibold text-blue-600 mt-4">{job.title}</h3>
                <p className="mt-4 text-gray-600">{job.description}</p>
              </ div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto text-center px-4 md:px-20">
          <h2 className="text-3xl font-bold text-blue-600">Contact Us</h2>
          <p className="mt-4 text-xl font-semibold text-black">
            Interested in joining the College of Teachers Education?
            Contact us for more information about our programs and career opportunities.
          </p>
          <a
            href="mailto:cabeihm@gmail.com"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
          >
            Send an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 College of Teachers Education. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default Cte
