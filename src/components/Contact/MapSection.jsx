import React, { useEffect, useRef } from 'react';

function MapSection() {
    const containerRef = useRef(null);

    useEffect(() => {
        const loadMap = async () => {
            if (!window.customElements.get('gmp-map')) {
                const script = document.createElement('script');
                script.setAttribute('type', 'module');
                script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCnAIwNIY7AaRjf2bFMIQrctprYkSD4o70&libraries=maps,marker&v=beta';
                document.body.appendChild(script);
            }
        };

        loadMap();
    }, []);

    return (
        <div className="h-fit py-10 px-4 md:px-0 font-questrial">
            <div className="w-full h-[300px] lg:h-[600px] shadow rounded-lg">
                <gmp-map
                    center="-0.034,88.200"
                    zoom="2"
                    map-id="DEMO_MAP_ID"
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '12px',
                        display: 'block',
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
