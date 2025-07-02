import React from 'react'
import Navbar from '../components/sharedcomponents/Navbar'
import Footer from '../components/sharedcomponents/Footer'
import Hero from '../components/About/Hero'
import OverviewSection from '../components/About/OverviewSection'
import GrowthStory from '../components/About/GrowthStory'
import Presence from '../components/About/Presence'
import OurMoto from '../components/About/OurMoto'

function About() {
    return (
        <div>
            <Navbar />
            <Hero />
            <OverviewSection />
            {/* <GrowthStory /> */}
            <Presence />
            <OurMoto />
            <Footer />
        </div>
    )
}

export default About 