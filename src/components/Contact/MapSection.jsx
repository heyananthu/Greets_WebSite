import React, { useEffect, useRef, useState } from 'react';

function MapSection() {
    const containerRef = useRef(null);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [mapError, setMapError] = useState(false);

    useEffect(() => {
        const loadMap = async () => {
            try {
                if (!window.customElements.get('gmp-map')) {
                    const script = document.createElement('script');
                    script.setAttribute('type', 'module');
                    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCnAIwNIY7AaRjf2bFMIQrctprYkSD4o70&libraries=maps,marker&v=beta';
                    
                    script.onload = () => {
                        setMapLoaded(true);
                    };
                    
                    script.onerror = () => {
                        setMapError(true);
                    };
                    
                    document.body.appendChild(script);
                } else {
                    setMapLoaded(true);
                }
            } catch (error) {
                console.error('Error loading map:', error);
                setMapError(true);
            }
        };

        loadMap();
    }, []);

    if (mapError) {
        return (
            <div className="h-fit py-10 px-4 md:px-0 font-questrial">
                <div className="w-full h-[300px] lg:h-[600px] shadow rounded-lg flex items-center justify-center bg-gray-100">
                    <div className="text-center">
                        <p className="text-gray-600 mb-2">Map temporarily unavailable</p>
                        <p className="text-sm text-gray-500">Please try refreshing the page</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="h-fit py-10 px-4 md:px-0 font-questrial">
            <div className="w-full h-[300px] lg:h-[600px] shadow rounded-lg">
                {!mapLoaded && (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-700"></div>
                    </div>
                )}
                <gmp-map
                    center="-0.034,88.200"
                    zoom="2"
                    map-id="DEMO_MAP_ID"
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '12px',
                        display: mapLoaded ? 'block' : 'none',
                    }}
                >
                    <gmp-advanced-marker position="12.908289848211583, 77.63523147521352" title="Greets" />
                    {/* <gmp-advanced-marker position="0,20" title="AFRICA" />
                    <gmp-advanced-marker position="12.5,-70" title="CARIBBEAN" />
                    <gmp-advanced-marker position="4.6,55.5" title="SEYCHELLES" />
                    <gmp-advanced-marker position="1.9,73.5" title="MALDIVES" />
                    <gmp-advanced-marker position="-20,57.5" title="MAURITIUS" /> */}
                </gmp-map>
            </div>
        </div>
    );
}

export default MapSection;
