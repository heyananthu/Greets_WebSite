import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './PhoneInputFix.css'; // Add this import

function Contact() {
    const [phone, setPhone] = useState('');

    return (
        <div className="min-h-screen  flex items-center px-6 py-10 mt-28 font-questrial">
            <div className="w-full max-w-screen flex flex-col lg:flex-row gap-8">
                {/* Left: Contact Form */}
                <div className="bg-black rounded-[2rem] rounded-tl-none rounded-bl-none p-8 lg:p-5 flex flex-col h-screen w-full lg:w-[55%] overflow-y-auto">
                    <h1 className="text-white text-4xl lg:text-[98px] font-bold lg:mb-20 mb-3">Contact Us</h1>
                    <form className="flex flex-col gap-4 lg:w-[70%]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <label className="text-gray-400 text-sm mb-1 block">First name</label>
                                <input type="text" className="w-full px-4 py-2 bg-white text-black " />
                            </div>
                            <div>
                                <label className="text-gray-400 text-sm mb-1 block">Last name</label>
                                <input type="text" className="w-full px-4 py-2 bg-white text-black " />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <label className="text-gray-400 text-sm mb-1 block">Email</label>
                                <input type="email" className="w-full px-4 py-2 bg-white text-black " />
                            </div>
                            <div>
                                <label className="text-gray-400 text-sm mb-1 block">Phone</label>
                                <PhoneInput
                                    country={'in'}
                                    value={phone}
                                    onChange={setPhone}
                                    enableSearch={true}
                                    inputProps={{
                                        name: 'phone',
                                        required: true,
                                        placeholder: 'Phone',
                                    }}
                                    inputClass="!w-full !py-5 !pl-16 !pr-4 !text-black !bg-white !border !border-gray-300 focus:!outline-none focus:!ring-1 focus:!ring-black placeholder:!text-black"
                                    buttonClass="!bg-white !border-none  !px-3"
                                    dropdownClass="!max-h-[300px] !bg-white !text-black !shadow-lg !z-50 "
                                    // searchClass="!w-full !px-3 !py-2 !mb-2  !rounded-md focus:!outline-none !pl-2 !bg-white"
                                    containerClass="!w-full"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-gray-400 text-sm mb-1 block">Message</label>
                            <textarea className="w-full px-4 py-2 bg-white text-black h-24 resize-none" />
                        </div>

                        <button type="submit" className="bg-[#098A36] text-white px-8 py-2 mt-2 w-full lg:w-[17rem] hover:bg-green-800 transition ">
                            Submit
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
                            info@gmail.com<br />
                            080 4302 7655
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
