import React from 'react'
import Footer from '../sharedcomponents/Footer'
import Navbar from '../sharedcomponents/Navbar'

function HealthAndEnvironmental() {
    return (
        <>
        <Navbar />
            <div className="font-questrial px-4 py-10 max-w-5xl mx-auto text-gray-800 mt-28">
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
                    Health, Safety & Environmental Policy Key Messages
                </h1>

                {/* Key Messages */}
                <section className="mb-10">
                    <p className="mb-4">
                        <strong>Greets International</strong> is committed to operating in a manner that protects the health and safety of its employees,
                        clients, subcontractors, and the public, while minimizing the environmental impact of its activities. Our HSE policy
                        underlines our vision of zero harm and sustainable operations across all international projects.
                    </p>
                </section>

                {/* Our Commitment */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Commitment</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>To ensure safe and healthy working environments at all operational levels.</li>
                        <li>To comply with all applicable legal, regulatory, and international HSE standards, including ISO 45001:2018 and ISO 14001:2015.</li>
                        <li>To prevent workplace injuries, occupational illnesses, and environmental incidents through proactive management.</li>
                        <li>To foster a safety-first culture by engaging employees, contractors, and stakeholders.</li>
                        <li>To continuously improve our HSE performance through training, audits, reviews, and innovation.</li>
                    </ul>
                </section>

                {/* Objectives */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Objectives</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Maintain an accident-free workplace.</li>
                        <li>Reduce the carbon footprint and manage waste responsibly.</li>
                        <li>Conduct monthly HSE audits on all projects.</li>
                        <li>Provide continuous HSE training to all staff and subcontractors.</li>
                        <li>Incorporate sustainability practices into our project lifecycle.</li>
                    </ul>
                </section>

                {/* Responsibilities */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Responsibilities</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Top Management:</strong> Leadership and commitment to HSE excellence.</li>
                        <li><strong>HSE Department:</strong> Develop and enforce HSE policies, training, and audit programs.</li>
                        <li><strong>Site Managers & Engineers:</strong> Ensure day-to-day implementation of safety practices.</li>
                        <li><strong>All Employees:</strong> Comply with safety procedures and report hazards or incidents.</li>
                    </ul>
                </section>

                {/* Implementation Strategy */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Implementation Strategy</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Conduct site-specific risk assessments.</li>
                        <li>Provide job-specific training and personal protective equipment (PPE).</li>
                        <li>Implement a real-time incident reporting and tracking system.</li>
                        <li>Maintain a transparent communication channel for all HSE issues.</li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section className="mt-10 border-t pt-6">
                    <p className="text-lg">
                        Every employee is expected to contribute to these initiatives, with leadership at all levels
                        demonstrating clear commitment. Sustainability and HSE are strategic priorities,
                        mandated by the Board and Executive Committee.
                    </p>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default HealthAndEnvironmental
