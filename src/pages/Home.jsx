import React from 'react'
import Hero from '../components/Home/Hero'
import GridSection from '../components/Home/GridSection'
import Navbar from '../components/sharedcomponents/Navbar'
import TransformingSolution from '../components/Home/TransformingSolution'
import Industries from '../components/Home/Industries'
import Main from '../components/Home/Card_components/Main'
import Ourclient from '../components/Home/Card_components/Ourclient'
import Footer from '../components/sharedcomponents/Footer'
import ClientStories from '../components/Home/Card_components/ClientStories'
function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div>
          <Navbar />
          <div className='mt-24 text-md text-center font-questrial bg-gray-100 py-1'>
            <h1>Driving Excellence in MEP Design & Execution for Tomorrow’s</h1>
          </div>
          <Hero />
        </div>
        <GridSection />
        <TransformingSolution />
        <Industries />
        <Main />
        <Ourclient />
      </div>
      <Footer />
    </div>
  );
}

export default Home
