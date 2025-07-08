import React from 'react'
import Navbar from '../sharedcomponents/Navbar'
import Footer from '../sharedcomponents/Footer'

function CodeOfEthics() {
    return (
        <>
        <Navbar />
            <div className="font-questrial px-4 py-10 max-w-5xl mx-auto text-gray-800 mt-28">
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
                    Code of Ethics and Anti-Corruption Policy Key Messages
                </h1>

                {/* Key Messages */}
                <section className="mb-10">
                    <p className="mb-4">
                        At <strong>Greets International</strong>, ethical conduct and integrity form the backbone of our operations. This policy affirms our
                        zero-tolerance stance on corruption and unethical practices, reinforcing our commitment to fair, transparent, and
                        responsible business across all international markets.
                    </p>
                </section>

                {/* Our Commitment */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Commitment</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Uphold fairness, honesty, and lawful conduct in all activities.</li>
                        <li>Comply with anti-corruption laws including FCPA and local regulations.</li>
                        <li>Foster a culture where ethical behavior is expected and protected.</li>
                    </ul>
                </section>

                {/* Key Principles */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Key Principles</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Integrity:</strong> Act honestly and in the company's best interest.</li>
                        <li><strong>Transparency:</strong> Ensure clear and traceable business decisions.</li>
                        <li><strong>Accountability:</strong> Take responsibility for ethical conduct.</li>
                        <li><strong>No Conflicts of Interest:</strong> Disclose and avoid personal gains in business decisions.</li>

                    </ul>
                </section>

                {/* Prohibited Actions */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-red-700 mb-4">Prohibited Actions</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Fair Practices:</strong> Compete lawfully and ethically.</li>
                        <li>Bribery, facilitation payments, or kickbacks.</li>
                        <li>Undue gifts or hospitality intended to influence decisions.</li>
                        <li>Falsification of records or manipulation of procurement.</li>
                        <li>Any form of corruption, fraud, or unethical advantage.</li>
                    </ul>
                </section>

                {/* Implementation Strategy */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Implementation Strategy</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Regular ethics training for staff and partners.</li>
                        <li>Confidential reporting via designated channels.</li>
                        <li>Due diligence on third parties and audits for compliance.</li>
                        <li>Protection for whistleblowers from retaliation.</li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section className="mt-10 border-t pt-6">
                    <p className="text-lg">
                        All employees, contractors, and management must comply with this policy. Leadership is
                        expected to lead by example and enforce standards throughout the organization.
                    </p>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default CodeOfEthics

