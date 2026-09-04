'use client';

import React from 'react';

interface Association {
  id: string;
  name: string;
  label: string;
  subtext: string;
}

const associations: Association[] = [
  {
    id: 'asrm',
    name: 'ASRM - American Society for Reproductive Medicine',
    label: 'ASRM',
    subtext: 'American Society for Reproductive Medicine',
  },
  {
    id: 'nila',
    name: 'NILA - National Independent Laboratory Association',
    label: 'NILA',
    subtext: 'NATIONAL INDEPENDENT LABORATORY ASSOCIATION',
  },
  {
    id: 'hipaa',
    name: 'HIPAA Compliant',
    label: 'HIPAA',
    subtext: 'COMPLIANT',
  },
  {
    id: 'iso',
    name: 'ISO 9001:2015',
    label: 'ISO',
    subtext: '9001:2015',
  },
  {
    id: 'aapc',
    name: 'AAPC Education Provider',
    label: 'AAPC',
    subtext: 'EDUCATION PROVIDER',
  },
];

export default function AssociationLogosSection() {
  return (
    <section className="w-full bg-[#f0f7fd] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 text-center">
        
        {/* SECTION HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          In Association With
        </h2>

        {/* LOGO CARDS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5 md:gap-6 items-center justify-center">
          {associations.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center min-h-[140px] sm:min-h-[160px] md:min-h-[180px] shadow-[0_6px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] transition-all duration-300 border border-slate-100/80 group ${
                index === 4 ? 'col-span-2 sm:col-span-1' : 'col-span-1'
              }`}
            >
              <div className="flex flex-col items-center justify-center text-center text-zinc-700 grayscale group-hover:grayscale-0 transition-all duration-300 w-full">
                
                {/* Shield / Compliance Icon */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 mb-1.5 sm:mb-2 flex items-center justify-center">
                  <svg
                    className="w-full h-full text-zinc-800 group-hover:text-blue-600 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>

                {/* Primary Brand Label */}
                <span className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-zinc-900 leading-none">
                  {item.label}
                </span>
                
                {/* Subtext Detail */}
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold tracking-wider text-zinc-500 uppercase mt-1 leading-tight max-w-[110px] sm:max-w-[130px] line-clamp-2">
                  {item.subtext}
                </span>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}