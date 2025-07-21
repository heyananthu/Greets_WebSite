import React, { useEffect, useRef } from 'react';

function MapSection() {
    const mapRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src =
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyCnAIwNIY7AaRjf2bFMIQrctprYkSD4o70&callback=initMap';
        script.async = true;
        document.body.appendChild(script);

        window.initMap = () => {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 20, lng: 10 }, // Global center
                zoom: 2, // ✅ This matches your screenshot
                mapTypeId: 'roadmap',
                disableDefaultUI: false,
                zoomControl: true,
                fullscreenControl: true,
            });
        };
    }, []);

    return (
        <div className="h-fit py-10 gap-12 font-questrial">
            <div className="w-full h-[300px] lg:h-[650px]">
                <div
                    ref={mapRef}
                    className="rounded-lg shadow w-full h-full"
                    style={{ borderRadius: '12px' }}
                />
            </div>
        </div>
    );
}

export default MapSection;
