import React from "react";

const industries = [
  {
    title: "Energy",
    description:
      "Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust.",
    green: false,
    className: "col-span-1 flex flex-col justify-center"
  },
  {
    title: "Technology",
    description:
      "Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust.",
    green: true,
    className: "col-span-1 row-span-1 bg-green-700 rounded-[60px] p-10 flex flex-col justify-center text-black"
  },
  {
    title: "Infrastructure",
    description:
      "Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust.",
    green: false,
    className: "col-span-1 flex flex-col justify-center"
  },
  {
    title: "Building & Architecture",
    description:
      "Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust.",
    green: false,
    className: "col-span-2 flex flex-col justify-center mt-20"
  },
  {
    title: "Logistics",
    description:
      "Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust.",
    green: true,
    className: "col-span-1 bg-green-700 rounded-[60px] p-10 flex flex-col justify-center text-black mt-20"
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center py-12">
      <div className="w-full max-w-7xl px-8">
        <div className="grid grid-cols-3 grid-rows-2 gap-12">
          {industries.map((industry, idx) => (
            <div key={industry.title} className={industry.className}>
              <h2 className="text-6xl font-light mb-4">{industry.title}</h2>
              <p className="text-xl font-normal">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 