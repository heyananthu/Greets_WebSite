import React from 'react'
import Hero from '../components/Home/Hero'
import GridSection from '../components/Home/GridSection'
import Navbar from '../components/sharedcomponents/Navbar'
import TransformingSolution from '../components/Home/TransformingSolution'
import Industries from '../components/Home/Industries'
import Main from '../components/Home/Card_components/Main'
import Ourclient from '../components/Home/Card_components/Ourclient'
import Footer from '../components/sharedcomponents/Footer'
function Home() {
    return (
        <div>
            <div className='bg-gray-100 pb-12'>
                <Navbar />
                <Hero />
                <GridSection />
            </div>
            <TransformingSolution />
            <Industries />
            <Main />
            <Ourclient />
            <Footer />
        </div>
    )
}

export default Home
