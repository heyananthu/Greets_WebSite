import React, { Suspense, useState, useEffect } from 'react'
import Navbar from '../components/sharedcomponents/Navbar'
import Footer from '../components/sharedcomponents/Footer'
import ContactPage from '../components/Contact/Contact'
import MapSection from '../components/Contact/MapSection'
import ErrorBoundary from '../components/ErrorBoundary'

// Loading component
const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
    </div>
);

// Fallback component for failed loads
const ComponentFallback = ({ componentName, onRetry }) => (
    <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg">
        <div className="text-center">
            <p className="text-gray-600 mb-2">{componentName} temporarily unavailable</p>
            <button
                onClick={onRetry}
                className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
            >
                Try Again
            </button>
        </div>
    </div>
);

function Contact() {
    const [mounted, setMounted] = useState(false);
    const [retryKey, setRetryKey] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleRetry = () => {
        setRetryKey(prev => prev + 1);
    };

    // Ensure component is mounted before rendering
    if (!mounted) {
        return <LoadingSpinner />;
    }

    return (
        <ErrorBoundary>
            <div>
                <ErrorBoundary>
                    <Navbar />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Suspense fallback={<LoadingSpinner />}>
                        <div key={`contact-${retryKey}`}>
                            <ContactPage />
                        </div>
                    </Suspense>
                </ErrorBoundary>

                <ErrorBoundary>
                    <Suspense fallback={<LoadingSpinner />}>
                        <div key={`map-${retryKey}`}>
                            <MapSection />
                        </div>
                    </Suspense>
                </ErrorBoundary>

                <ErrorBoundary>
                    <Footer />
                </ErrorBoundary>
            </div>
        </ErrorBoundary>
    )
}

export default Contact