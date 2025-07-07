import React from 'react'
import Navbar from '../components/sharedcomponents/Navbar';
import Footer from '../components/sharedcomponents/Footer';
import Section1 from '../components/Testimonial/Section1';
import Section2 from '../components/Testimonial/Section2';


function Testimonial() {
    return (
        <>
            <Navbar />
            <Section1 />
            <Section2 />
            <Footer />
        </>
    )
}

export default Testimonial
