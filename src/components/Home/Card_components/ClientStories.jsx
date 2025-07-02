import React from 'react';

const testimonials = [
  {
    text: `I recently worked with Green Transforming Solutions and had a great experience. Their team was responsive, attentive, and took the time to understand my needs, making the entire process smooth and comfortable.`,
    author: 'Jeffrey Cohen, CEO',
    company: 'Nato Productions',
  },
  {
    text: `What stood out was their strong commitment to sustainability. Their passion was clear and inspiring, and they offered practical solutions that reduced waste, saved energy, and fit easily into my daily routine.`,
    author: 'Michael Soveign',
    company: 'Seven Energy',
  },
  {
    text: `I had a great experience with Green Transforming Solutions. Their responsive, knowledgeable team truly understood my needs and delivered practical, eco-friendly solutions. Their strong commitment to sustainability sets them apart. Highly recommended!`,
    author: 'Maria Goncavales, CFO',
    company: 'Laderafe',
  },
];

function ClientStories() {
  return (
    <section className="px-4 sm:px-6 pt-28 pb-12 bg-white font-questrial rounded-t-[3rem] h-screen">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-gray-900 mb-4">
            It's all about a<br />dialogue
          </h2>
          <p className="text-green-600 text-lg sm:text-xl">
            A few words from our clients. See<br />client stories for more.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12  lg:flex lg:justify-end lg:gap-2">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-stone-300 rounded-[3rem] p-8 sm:p-10 w-full h-full md:h-[23rem] flex flex-col justify-between lg:w-[25rem] lg:h-[23rem] "
            >
              <p className="text-green-700 text-base sm:text-md mb-6 md:py-5">
                <span className='font-bold'>Dummy : </span> {testimonial.text}
              </p>
              <div className="text-white italic text-right mt-auto md:pb-16">
                {testimonial.author}<br />
                <span className="not-italic">{testimonial.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientStories;