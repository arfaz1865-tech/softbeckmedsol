'use client';

import Header from '../components/Header/page';
import Footer from '../components/Footer/page';

import React, { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  tag: string;
  content: string;
  fullDetails?: string;
  authorName: string;
  role?: string;
  company?: string;
  avatarUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    tag: 'Professional',
    content:
      'I am writing on behalf of ODAT Services to express our strong satisfaction with SoftbeckMedicare , and in particular the support and professionalism provided by James Archer.',
    fullDetails:
      'I am writing on behalf of ODAT Services to express our strong satisfaction with SoftbeckMedicare , and in particular the support and professionalism provided by James Archer. Their attention to detail and consistent followup made a massive difference in our operational workflows.',
    authorName: 'Travis Gannon',
    role: 'Operations Director',
    company: 'ODAT Services',
    avatarUrl: '/avatars/travis.jpg',
  },
  {
    id: '2',
    tag: 'Recommended',
    content:
      'I highly recommend SoftbeckMedicare if you are looking for help with your billing and gain some freedom to see more patients or manage your business.',
    fullDetails:
      'I highly recommend SoftbeckMedicare if you are looking for help with your billing and gain some freedom to see more patients or manage your business. Their service allowed our practice to streamline all claim submissions with zero hassle.',
    authorName: 'Dr. Jose',
    role: 'Physician',
    avatarUrl: '/avatars/jose.jpg',
  },
  {
    id: '3',
    tag: 'Outstanding',
    content:
      'SoftbeckMedicare has been an excellent organization to work with, I highly recommend them for their quality of service and commitment to excellence.',
    fullDetails:
      'SoftbeckMedicare has been an excellent organization to work with, I highly recommend them for their quality of service and commitment to excellence.',
    authorName: 'Shaunna Mock',
    role: 'Practice Manager',
    avatarUrl: '/avatars/shaunna.jpg',
  },
  {
    id: '4',
    tag: 'Talented',
    content:
      "We are definitely impressed by the Team's performance. I worked with a lot of different folks from all over the world on different business transactions, and Mark is truly a top notch talent!",
    fullDetails:
      "We are definitely impressed by the Team's performance. I worked with a lot of different folks from all over the world on different business transactions, and Mark is truly a top notch talent!",
    authorName: 'Max Owens',
    role: 'Business Analyst',
    avatarUrl: '/avatars/max.jpg',
  },
  {
    id: '5',
    tag: 'Exceptional',
    content:
      "SoftbeckMedicare 's exceptional communication and expertise elevated our SoftbeckMedicare experience and my bank accounts!",
    fullDetails:
      'SoftbeckMedicare ’s exceptional communication and expertise elevated our SoftbeckMedicare experience and my bank accounts!\n\nMost helpful is the open/responsive communication of their team with my office and each other, along with the specialty levels of expertise amongst my team for each aspect of SoftbeckMedicare.',
    authorName: 'Kelly Ballou',
    role: 'Owner',
    company: 'R.D.',
    avatarUrl: '/avatars/kelly.jpg',
  },
  {
    id: '6',
    tag: 'Communicative',
    content:
      'SoftbeckMedicare did a great job with our billing and helping clean up old AR. Regular updates and good communication were very appreciated.',
    fullDetails:
      'SoftbeckMedicare did a great job with our billing and helping clean up old AR. Regular updates and good communication were very appreciated.',
    authorName: 'Bret',
    role: 'Clinic Director',
    avatarUrl: '/avatars/bret.jpg',
  },
];

export default function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  return (
    <>
      <Header />
      <section className="relative w-full bg-white font-sans text-blue-950">
        
        {/* White-Blue Gradient Hero Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-100/60 px-6 py-16 md:px-12 md:py-24 border-b border-blue-100">
          {/* Subtle Background Glows */}
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />
          <div className="absolute left-10 bottom-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />

          <div className="mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div className="max-w-xl">
                <span className="text-blue-600 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-blue-100/80 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block mb-4">
                  Client Success
                </span>
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
                  Customer Testimonials
                </h1>
                <p className="mb-8 text-base text-blue-900/80 md:text-lg leading-relaxed">
                  SoftbeckMedicare strives to provide the best customer support and continuous
                  improvement of its products and services.
                </p>
                <button
                  type="button"
                  className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-all shadow-md shadow-blue-600/25 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 active:scale-95"
                >
                  Schedule Demo
                </button>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div className="relative h-[320px] w-full max-w-md sm:h-[420px]">
                  <Image
                    src="https://images.pexels.com/photos/8460371/pexels-photo-8460371.jpeg"
                    alt="Doctor Thumbs Up"
                    fill
                    className="object-contain object-right-bottom drop-shadow-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Section Header */}
        <div className="px-6 pt-16 pb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl md:text-4xl">
            What Our Clients Say About Working With Us
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-blue-100 bg-blue-50/40 p-8 shadow-xs transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/5 hover:bg-blue-50/80 hover:border-blue-200"
              >
                {/* Decorative Soft Radial Backdrop */}
                <div
                  className="pointer-events-none absolute -top-12 -left-12 h-40 w-40 rounded-full bg-blue-100/60 blur-xl"
                  aria-hidden="true"
                />

                <div className="relative z-10 mb-8">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-2xl font-extrabold text-blue-600 tracking-tight">{item.tag}</h3>
                    <span className="select-none text-3xl font-serif font-extrabold text-blue-300">
                      &rdquo;
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-blue-950/80">{item.content}</p>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-blue-100/80">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-blue-500/20 bg-blue-100">
                      <Image
                        src={item.avatarUrl}
                        alt={item.authorName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-bold tracking-wider text-blue-950 uppercase">
                      {item.authorName}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedTestimonial(item)}
                    className="rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white transition-all shadow-xs hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Popup Overlay */}
        {selectedTestimonial && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/40 p-4 backdrop-blur-xs"
            onClick={() => setSelectedTestimonial(null)}
          >
            <div
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white p-8 md:p-12 shadow-2xl border border-blue-100 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top-Right Blue Close Button */}
              <button
                type="button"
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-0 right-0 flex h-12 w-12 items-center justify-center bg-blue-600 text-white rounded-bl-2xl transition-colors hover:bg-blue-700 focus:outline-none"
                aria-label="Close modal"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Author Header */}
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-blue-500/30 bg-blue-100">
                  <Image
                    src={selectedTestimonial.avatarUrl}
                    alt={selectedTestimonial.authorName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-950">
                    {selectedTestimonial.authorName}
                  </h4>
                  {selectedTestimonial.company && (
                    <p className="text-sm font-medium text-blue-600">
                      {selectedTestimonial.company}
                    </p>
                  )}
                </div>
              </div>

              {/* Testimonial Detailed Content */}
              <div className="mb-8 whitespace-pre-line text-sm leading-relaxed text-blue-950/85 md:text-base">
                {selectedTestimonial.fullDetails || selectedTestimonial.content}
              </div>

              {/* Modal Footer Signature Block */}
              <div className="space-y-0.5 text-sm font-medium border-l-2 border-blue-600 pl-4 text-blue-950">
                <p className="font-bold">{selectedTestimonial.authorName}</p>
                {selectedTestimonial.role && <p className="text-blue-600">{selectedTestimonial.role}</p>}
                {selectedTestimonial.company && <p className="text-blue-900">{selectedTestimonial.company}</p>}
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}