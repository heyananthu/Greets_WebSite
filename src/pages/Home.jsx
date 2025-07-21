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
                <div className='bg-gray-100'>
                    <Navbar />
                    <Hero />
                    <GridSection />
                </div>
                <TransformingSolution />
                <Industries />
                <Main />
                {/* <ClientStories /> */}
            </div>
            <Ourclient />
            <Footer />
        </div>
    )
}

export default Home
