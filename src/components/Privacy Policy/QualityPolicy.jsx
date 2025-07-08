import React from "react";
import Navbar from "../sharedcomponents/Navbar";
import Footer from "../sharedcomponents/Footer";

export default function QualityPolicy() {
    return (
        <>
            <Navbar />
            <div className="font-questrial px-4 py-10 max-w-5xl mx-auto text-gray-800 mt-28">
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
                    Quality Policy Key Messages
                </h1>

                {/* Key Messages */}
                <section className="mb-10">
                    <p className="mb-4">
                        <strong>At Greets International</strong>, quality is the foundation of our success. We are dedicated to delivering superior MEP
                        solutions that consistently meet client requirements, regulatory standards, and best international practices. Our
                        commitment to continuous improvement, innovation, and technical excellence drives us to exceed expectations and
                        set new industry benchmarks.
                    </p>
                </section>

                {/* Vision & Mission */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Vision</h2>
                    <p className="mb-4">
                        To be recognized as a leading provider of high-quality, sustainable, and innovative MEP solutions across international markets.
                    </p>

                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Mission</h2>
                    <p className="mb-4">
                        To embed a culture of quality at every level of the organization, ensuring that every project is executed with precision,
                        integrity, and a commitment to client satisfaction.
                    </p>
                </section>

                {/* Core Principles */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Core Principles</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Customer Focus:</strong> Understand, meet, and exceed client requirements.</li>
                        <li><strong>Leadership Commitment:</strong> Drive quality values across the organization, led by strong, engaged management.</li>
                        <li><strong>Process Excellence:</strong> Standardize and optimize processes to deliver consistent and efficient outcomes.</li>
                        <li><strong>Risk-Based Thinking:</strong> Identify and mitigate risks proactively at all stages of project delivery.</li>
                        <li><strong>Evidence-Based Decision Making:</strong> Base decisions on verified data, audits, and analytical assessments.</li>
                        <li><strong>People Empowerment:</strong> Train and equip every employee and partner to deliver quality outcomes.</li>
                        <li><strong>Continual Improvement:</strong> Drive systematic innovation and process improvements.</li>
                    </ul>
                </section>

                {/* Quality Objectives */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Objectives</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Achieving client satisfaction across all projects.</li>
                        <li>Reduce non-conformities, defects, and rework through preventive measures.</li>
                        <li>Maintain full compliance with ISO 9001:2015 Quality Management Systems.</li>
                        <li>Ensure the timely delivery of all projects while meeting or exceeding established quality standards and client expectations.</li>
                        <li>Foster a culture where quality ownership is embedded at every organizational level.</li>
                    </ul>
                </section>

                {/* Implementation Strategy */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Implementation Strategy</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Develop and maintain a dynamic Quality Management System (QMS) aligned with ISO standards.</li>
                        <li>Conduct periodic internal and external audits, ensuring transparency and compliance.</li>
                        <li>Integrate quality control into every project phase — design, procurement, installation, testing, and commissioning.</li>
                        <li>Utilize digital tools and smart technologies for quality monitoring and reporting.</li>
                        <li>Foster collaborative relationships with stakeholders, ensuring clear communication on quality expectations.</li>
                        <li>Reward innovation, initiative, and excellence in quality performance.</li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section className="mt-10 border-t pt-6">
                    <p className="text-lg">
                        At Greets International, quality is not a department — it is a mindset that drives every decision,
                        every action, and every project.
                    </p>
                </section>
            </div>
            <Footer />
        </>
    );
}
