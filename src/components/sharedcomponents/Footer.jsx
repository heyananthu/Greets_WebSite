import React, { useState } from 'react'
import FooterSub from './FooterSub'
import toast, { Toaster } from 'react-hot-toast'

function Footer() {
    const [isLoading, setIsLoading] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

    const onSubmit = async (event) => {
        event.preventDefault()

        // Check if checkbox is checked
        if (!isChecked) {
            toast.error('Please check the newsletter subscription checkbox to continue.', {
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
            })
            return
        }

        setIsLoading(true)

        try {
            const formData = new FormData(event.target)
            const email = formData.get('email')

            // Add the Web3Forms access key
            formData.append("access_key", "536557d0-ed59-4474-9c2f-a66d3edbcb20")

            // Add newsletter subscription info
            formData.append("subject", "Newsletter Subscription")
            formData.append("message", `New newsletter subscription from: ${email}`)

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })

            const data = await response.json()

            if (data.success) {
                event.target.reset()
                setIsChecked(false)

                // Show success toast with email
                toast.success("Successfully Subscribed", {
                    duration: 5000,
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
                })
            } else {
                console.log("Error", data)
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
                })
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error)
            toast.error('Network error. Please check your connection and try again.', {
                duration: 4000,
                position: 'top-center',
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            {/* Toast Container */}
            <Toaster />
            <footer className=" flex flex-wrap flex-col lg:flex-row  items-center justify-between gap-8 px-[5vw] pt-16  w-full font-questrial text-white ">
                {/* Left: Brand */}
                <div className="font-bold  text-green-700 leading-none w-full flex-1 md:text-7xl text-4xl md:-translate-y-10">
                    Stay Ahead with<br className='md:block hidden' /> Industry Insights
                </div>
                {/* Right: Newsletter */}
                <div className="flex-1 max-w-[500px] w-full ml-auto text-black">
                    <div className="flex justify-center items-center  min-h-[60vh] w-full bg-white">
                        <form onSubmit={onSubmit} className="w-full max-w-xl mx-auto">
                            <div className=" mb-5">
                                <div className="font-normal text-xl mb-6">Subscribe to our newsletter for updates, project highlights, and expert perspectives.</div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="footer-email" className="block text-sm mb-2 font-medium text-black text-left">Email *</label>
                                <input
                                    id="footer-email"
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full  py-2 px-24 text-lg border border-black outline-none mb-2 bg-transparent "
                                />
                            </div>
                            <div className="flex items-center mb-6">
                                <input
                                    id="newsletter-checkbox"
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                    className="w-4 h-4 border border-black mr-3"
                                />
                                <label htmlFor="newsletter-checkbox" className="text-base text-black cursor-pointer select-none">
                                    Yes, subscribe me to your newsletter.
                                </label>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full md:w-[22rem] bg-green-700 text-white py-2 text-md font-normal transition-colors duration-200 hover:bg-green-800 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? "Subscribing..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            </footer>
            <FooterSub />
        </>
    )
}

export default Footer
