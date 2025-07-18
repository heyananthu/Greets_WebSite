import React from 'react';
import worldmap from '../../assets/about-map-new.png'
function MapSection() {
    return (
        <div className="min-h-screen py-10 gap-12 font-questrial ">
            {/* Left - Business Info */}
            {/* <div className="w-full lg:w-1/2 space-y-10">
                <h1 className="text-[32px] lg:text-[38px] font-bold text-black">Business Info</h1>

                <div>
                    <h2 className="text-xl lg:text-2xl mb-2 text-black">Location</h2>
                    <p className="text-black leading-relaxed text-base lg:text-lg">
                        384, 9th Main Rd, 7th Sector
                        <br />HSR Layout, Bengalure<br />
                        Karnataka 560102
                    </p>
                </div>

                <div>
                    <h2 className="text-xl lg:text-2xl mb-2 text-black">Hours</h2>
                    <p className="text-black text-base lg:text-lg">Mon–Fri 9:00 am – 5:00 pm</p>
                    <p className="text-black text-base lg:text-lg">Saturday 9:00 am – 2:00 pm</p>
                    <p className="text-black text-base lg:text-lg">Sunday 9:00 am – 2:00 pm</p>
                </div>
            </div> */}

            {/* Right - Google Map */}
            <div className="w-full h-[300px] lg:h-[500px]">
                <iframe title="Greets Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55698785.718229!2d57.12591626172316!3d31.56302699528719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1493c0000001%3A0x4ae0e875b3818a1f!2sGreets%20Building%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1752830056824!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow"></iframe>
            </div>
        </div>
    );
}

export default MapSection;
