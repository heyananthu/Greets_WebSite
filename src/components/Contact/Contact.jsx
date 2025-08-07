import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './PhoneInputFix.css'; // Add this import
import { PiGlobeHemisphereEastLight } from "react-icons/pi";
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        // Add the Web3Forms access key
        formData.append("access_key", "f87ed089-97ea-4b2d-9a7e-e53973dd44fd");

        // Add phone number to form data
        formData.append("phone", phone);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            event.target.reset();
            setPhone(''); // Reset phone input
            setCountry(''); // Reset country

            // Show success toast
            toast.success('Message sent successfully! We\'ll get back to you soon.', {
                duration: 4000,
                position: 'top-center',
                style: {
                    background: '#15803d',
                    color: '#fff',
                    fontWeight: '500',
                    fontSize: '16px',
                    padding: '16px 24px',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(21, 128, 61, 0.3)',
                },
                iconTheme: {
                    primary: '#fff',
                    secondary: '#15803d',
                },
            });
        } else {
            console.log("Error", data);
            setResult(data.message);

            // Show error toast
            toast.error(data.message || 'Something went wrong. Please try again.', {
                duration: 4000,
                position: 'top-center',
                style: {
                    background: '#EF4444',
                    color: '#fff',
                    fontWeight: '500',
                    fontSize: '16px',
                    padding: '16px 24px',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(239, 68, 68, 0.3)',
                },
                iconTheme: {
                    primary: '#fff',
                    secondary: '#EF4444',
                },
            });
        }
    };

    return (
        <div className="min-h-screen  flex items-center px-6 py-10 mt-28 font-questrial">
            {/* Toast Container */}
            <Toaster />
            <div className="w-full max-w-screen flex flex-col lg:flex-row gap-8">
                {/* Left: Contact Form */}
                <div className="bg-gray-100 rounded-[2rem] rounded-tl-none rounded-bl-none p-8 lg:p-5 flex flex-col h-fit md:h-screen w-full lg:w-[55%] overflow-y-auto">
                    <h1 className="text-black text-4xl lg:text-[98px] font-bold lg:mb-20 mb-3">Contact Us</h1>
                    <form onSubmit={onSubmit} className="relative flex flex-col gap-4 lg:w-[70%] lg:space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                {/* <label className="text-gray-400 text-sm mb-1 block">First name</label> */}
                                <input type="text" name="firstName" placeholder='First name' required className="w-full h-[2.75rem] px-4 py-2 bg-white text-black " />
                            </div>
                            <div>
                                {/* <label className="text-gray-400 text-sm mb-1 block">Last name</label> */}
                                <input type="text" name="lastName" placeholder='Last name' required className="w-full h-[2.75rem] px-4 py-2 bg-white text-black " />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                {/* <label className="text-gray-400 text-sm mb-1 block">Email</label> */}
                                <input type="email" name="email" placeholder='Email' required className="w-full h-[2.75rem] px-4 py-2 bg-white text-black " />
                            </div>
                            <div>
                                {/* <label className="text-gray-400 text-sm mb-1 block">Phone</label> */}
                                <div className="relative">
                                    <PhoneInput
                                        value={phone}
                                        onChange={setPhone}
                                        onCountryChange={setCountry}
                                        enableSearch={true}
                                        inputProps={{
                                            name: 'phone',
                                            required: true,
                                            placeholder: 'Phone',
                                        }}
                                        inputClass="!w-full !h-[2.85rem] !py-2 !pl-16 !pr-4 !text-black !bg-white !border-none focus:!outline-none focus:!ring-0 !leading-normal"
                                        buttonClass="!bg-white !border-none !px-3 !h-[2.65rem] !flex !items-center"
                                        dropdownClass="!max-h-[300px] !bg-white !text-black !shadow-lg !z-50"
                                        containerClass="!w-full !h-[2.75rem]"
                                    />
                                    {(!phone || phone.length <= 0) && !country && (
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none flex items-center h-[2.75rem]">
                                            <PiGlobeHemisphereEastLight className="text-black" size={20} />
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div>
                            {/* <label className="text-gray-400 text-sm mb-1 block">Message</label> */}
                            <textarea name="message" placeholder='Message' required className="w-full px-4 py-2 bg-white text-black h-24 resize-none" />
                        </div>

                        <button
                            type="submit"
                            disabled={result === "Sending...."}
                            className="w-full lg:w-[14rem] bg-[#098A36] text-white h-11 mt-2 hover:bg-green-800 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {result === "Sending...." ? "Sending..." : "Submit"}
                        </button>


                    </form>
                </div>

                {/* Right: Contact Info */}
                <div className="bg-[#098A36] rounded-[2rem] flex flex-col justify-center items-start p-8 lg:p-12 text-white text-lg gap-8 w-full h-auto lg:w-[40%] lg:h-[28rem]">
                    <div className="pl-12 space-y-20">
                        <div className='text-[24px]'>
                            384, 9th Main Rd, 7th Sector
                            <br />HSR Layout, Bengalure<br />
                            Karnataka 560102
                        </div>
                        <div className='text-[24px]'>
                            info@greets.co.in<br />
                            {/* 080 4302 7655 */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
