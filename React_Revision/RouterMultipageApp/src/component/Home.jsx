import React from 'react'
import About from './About'
import Contact from './Contact'
import Login from './Login'

function Home() {
  return (
    <>
      {/* <About />
      <Contact />
      <Login /> */}
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-500 text-white py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Welcome to Our Platform</h1>
            <p className="mt-2 text-lg">Empowering your journey with technology</p>
          </div>
        </header>

        <main className="container mx-auto py-12 px-4">
          <section className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Our Services</h2>
            <p className="mt-4 text-gray-600">
              We provide top-notch services to help you achieve your goals.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Service One</h3>
              <p className="mt-2 text-gray-600">
                Comprehensive solutions for your business needs.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Service Two</h3>
              <p className="mt-2 text-gray-600">
                Innovative strategies to help you grow.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Service Three</h3>
              <p className="mt-2 text-gray-600">
                Reliable and efficient support tailored for you.
              </p>
            </div>
          </section>
        </main>

        
      </div>
      
    </>
  )
}

export default Home