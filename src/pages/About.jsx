import React from 'react'
import Navbar from '../components/sharedcomponents/Navbar'
import Footer from '../components/sharedcomponents/Footer'
import Hero from '../components/About/Hero'
import OverviewSection from '../components/About/OverviewSection'
import GrowthStory from '../components/About/GrowthStory'
import Presence from '../components/About/Presence'
import OurMoto from '../components/About/OurMoto'
import Approach from '../components/About/Approach'
import UsInNumber from '../components/About/UsInNumber'
import Covered from '../components/About/Covered'

function About() {
    return (
        <div>
            <Navbar />
            <Hero />
            <OverviewSection />
            <GrowthStory />
            {/* <Approach /> */}
            <Presence />
            {/* <OurMoto /> */}
            <UsInNumber />
            {/* <Covered /> */}
            <Footer />
        </div>
    )
}

export default About 