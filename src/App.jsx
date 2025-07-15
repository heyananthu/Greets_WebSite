import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Testimonial from './pages/Testimonial'
import CodeOfEthics from './components/Privacy Policy/CodeOfEthics'
import HealthAndEnvironmental from './components/Privacy Policy/HealthAndEnvironmental'
import QualityPolicy from './components/Privacy Policy/QualityPolicy'
import Services from './pages/Service'
import KeyProject from './components/Project/Project_sub/KeyProject'
import Upcoming from './components/Project/Project_sub/Upcoming'
import Completed from './components/Project/Project_sub/Completed'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* PROJECT */}
          <Route path="/projects" element={<Projects />} />
          <Route path='/key-projects' element={<KeyProject />} />
          <Route path="/upcoming-projects" element={<Upcoming />} />
          <Route path="/completed-projects" element={<Completed />} />

          <Route path="/contact" element={<Contact />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/codeofethics' element={<CodeOfEthics />} />
          <Route path='/health-saftey-environment' element={<HealthAndEnvironmental />} />
          <Route path='/quality-policy' element={<QualityPolicy />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
