import React, { useEffect, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'

// Lazy load components to prevent blocking
const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Projects = React.lazy(() => import('./pages/Projects'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Testimonial = React.lazy(() => import('./pages/Testimonial'))
const CodeOfEthics = React.lazy(() => import('./components/Privacy Policy/CodeOfEthics'))
const HealthAndEnvironmental = React.lazy(() => import('./components/Privacy Policy/HealthAndEnvironmental'))
const QualityPolicy = React.lazy(() => import('./components/Privacy Policy/QualityPolicy'))
const Services = React.lazy(() => import('./pages/Service'))
const KeyProject = React.lazy(() => import('./components/Project/Project_sub/KeyProject'))
const Upcoming = React.lazy(() => import('./components/Project/Project_sub/Upcoming'))
const Completed = React.lazy(() => import('./components/Project/Project_sub/Completed'))

// Loading component for lazy loading
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
  </div>
);
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
    <ErrorBoundary>
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/about" element={<About />} />
              <Route path='/testimonial' element={<Testimonial />} />

              <Route path="/services" element={<Services />} />

              {/* PROJECT */}
              <Route path="/projects" element={<Projects />} />
              <Route path='/key-projects' element={<KeyProject />} />
              <Route path="/upcoming-projects" element={<Upcoming />} />
              <Route path="/completed-projects" element={<Completed />} />

              <Route path="/contact" element={<Contact />} />

              {/* PRIVACY POLICY */}
              <Route path='/codeofethics' element={<CodeOfEthics />} />
              <Route path='/health-saftey-environment' element={<HealthAndEnvironmental />} />
              <Route path='/quality-policy' element={<QualityPolicy />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  )
}

export default App
