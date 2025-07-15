import Navbar from '../components/sharedcomponents/Navbar'
import Footer from '../components/sharedcomponents/Footer'
import ContactPage from '../components/Contact/Contact'
import MapSection from '../components/Contact/MapSection'

function Contact() {
    return (
        <div>
            <Navbar />
            <div className=''>
                <ContactPage />
                <MapSection />
            </div>
            <Footer />
        </div>
    )
}

export default Contact