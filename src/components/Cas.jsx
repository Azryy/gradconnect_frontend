import React from 'react'
import header from '../assets/Cas/casBuilding.webp'
import police from '../assets/Cas/police.jpg'
import psychologist from '../assets/Cas/psychologist.jpg'
import research from '../assets/Cas/research.jpg'
import relation from '../assets/Cas/relation.jpg'
import content from '../assets/Cas/content.jpg'
import sociologist from '../assets/Cas/sociologist.jpg'
const Cas = () => {
  return (
    <div>
      <header className="bg-green-600 text-white shadow-md ">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-semibold">College of Arts and Sciences</h1>
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
          <h2 className="text-6xl font-bold text-green-600">About CAS</h2>
          <p className="mt-4 text-2xl font-semibold text-black leading-7">
          The College of Arts and Sciences (CAS) is an academic institution dedicated to providing a well-rounded education that blends the humanities, social sciences, natural sciences, and mathematics. CAS offers a broad spectrum of programs that encourage critical thinking, creativity, and an understanding of the world’s diverse cultures, histories, and scientific advancements.


          </p>
        </div>
      </section>
      
      <section id="potential-jobs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-20">
          <h2 className="text-3xl font-bold text-center text-green-600">Potential Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: ' Policeman (Police Officer) ',
                description: 'Police officers maintain law and order by enforcing laws, preventing crimes, and protecting citizens and property. They patrol designated areas, respond to emergencies, conduct investigations, and arrest individuals suspected of committing crimes.',
                image: police,
              },
              {
                title: 'Psychologist',
                description: ' Psychologists study mental processes and human behavior by observing, interpreting, and recording how individuals relate to one another and their environments. They diagnose and treat emotional, mental, and behavioral disorders, often using a variety of therapeutic techniques.',
                image: psychologist,
              },
              {
                title: 'Research Assistant (Social Sciences/Sciences)',
                description: ' Research assistants support faculty and researchers by gathering data, conducting experiments, and analyzing results in various disciplines, such as psychology, sociology, or biology. ',
                image: research,
              },
              {
                title: '  Public Relations Specialist',
                description: 'Public relations specialists work on managing and improving the public image of organizations, including academic institutions, non-profits, or corporations. They create press releases, organize events, and engage with media outlets to promote positive messages.',
                image: relation,
              },
              {
                title: 'Content Writer/Editor',
                description: 'Content writers and editors create, edit, and proofread written material for various platforms, including websites, blogs, books, and academic journals. They are responsible for ensuring clarity, accuracy, and engagement in the content.',
                image: content,
              },
              {
                title: '  Sociologist/Anthropologist',
                description: ' Sociologists and anthropologists study human behavior, culture, and social structures. They conduct field research, analyze social patterns, and contribute to the understanding of societal issues, which can inform policies and social programs.',
                image: sociologist,
              },
            ].map((job, index) => (
              <div key={index} className="bg-white shadow p-6 rounded">
                <img src={job.image} alt={job.title} className="w-full h-40 object-cover rounded" />
                <h3 className="text-xl font-semibold text-green-600 mt-4">{job.title}</h3>
                <p className="mt-4 text-gray-600">{job.description}</p>
              </ div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto text-center px-4 md:px-20">
          <h2 className="text-3xl font-bold text-green-600">Contact Us</h2>
          <p className="mt-4 text-xl font-semibold text-black">
            Interested in joining the College of Arts and Sciences?
            Contact us for more information about our programs and career opportunities.
          </p>
          <a
            href="mailto:cabeihm@gmail.com"
            className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition"
          >
            Send an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 College of Arts and Sciences. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default Cas
