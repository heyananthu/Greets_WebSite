import React from 'react'
import Hero from '../components/Service/Hero'
import Navbar from '../components/sharedcomponents/Navbar'
import Mep from '../components/Service/Card_Components/Mep'
import Mep2 from '../components/Service/Card_Components/Mep2'
import Main from '../components/Service/Card_Components/Main'
import MepExpertise from '../components/Service/MepExpertise'
import Footer from '../components/sharedcomponents/Footer'
function Service() {
    return (
        <div>
            <Navbar />
            <div className='bg-gray-100 '>
                <Hero />
                <h1 className='text-center text-[43px] mt-12 font-questrial font-semibold'>MEP (Mechanical, Electrical, and Plumbing) Services</h1>

            <Main />
            </div>
            <MepExpertise />
            <Footer />

        </div>
    )
}

export default Service
