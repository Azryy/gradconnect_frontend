import React from 'react'

const Cabeihm = () => {
  return (
    <div>
        <header className="bg-yellow-400 text-white shadow-md">
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
        className="py-16 bg-white bg-cover bg-center"
        
      >
        <div className="container mx-auto text-center px-4 md:px-20 bg-white/40 backdrop-blur-md rounded-lg py-12">
          <h2 className="text-6xl font-bold text-yellow-300">About CABEIHM</h2>
          <p className="mt-4 text-2xl font-semibold text-black leading-7">
            The College of Information and Computing Sciences (CICS) is a dynamic
            and innovative academic institution dedicated to empowering students with cutting-edge knowledge
            and practical skills in the fields of Information Technology (IT).
            It focuses on providing a comprehensive education that equips graduates for professional success in a rapidly evolving technological landscape.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Cabeihm
