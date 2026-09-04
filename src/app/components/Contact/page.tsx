'use client';

import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    practiceName: '',
    email: '',
    phone: '',
    monthlyCollection: '',
    totalAR: '',
    message: '',
    consent: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      
      {/* Light Blue Decorative Curved Ring Background */}
      <div className="absolute top-1/4 sm:top-1/2 -left-36 sm:-left-48 -translate-y-1/2 w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px] rounded-full border-[40px] sm:border-[60px] lg:border-[70px] border-[#edf5fd] pointer-events-none -z-0 opacity-80 sm:opacity-100" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start relative z-10">
        
        {/* LEFT COLUMN: Heading & Descriptive Text */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6 lg:space-y-8 lg:pt-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] sm:leading-[1.1]">
            Have <br className="hidden sm:inline" />
            Questions? <br className="hidden sm:inline" />
            <span className="text-slate-950">Let&apos;s discuss</span>
          </h2>

          <p className="text-slate-600 sm:text-slate-700 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-lg">
            Fill out this form, tell us about your practice&apos;s unique needs, and get a tailored solution!
          </p>
        </div>

        {/* RIGHT COLUMN: Minimal Border Form */}
        <div className="lg:col-span-7 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            
            {/* ROW 1: Name & Practice Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="peer w-full bg-transparent border-b border-slate-300 py-2.5 sm:py-3 text-slate-900 focus:border-blue-600 focus:outline-none transition-colors text-sm sm:text-base"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-2.5 sm:top-3 text-slate-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500"
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="practiceName"
                  id="practiceName"
                  value={formData.practiceName}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="peer w-full bg-transparent border-b border-slate-300 py-2.5 sm:py-3 text-slate-900 focus:border-blue-600 focus:outline-none transition-colors text-sm sm:text-base"
                />
                <label
                  htmlFor="practiceName"
                  className="absolute left-0 top-2.5 sm:top-3 text-slate-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500"
                >
                  Practice Name
                </label>
              </div>
            </div>

            {/* ROW 2: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="peer w-full bg-transparent border-b border-slate-300 py-2.5 sm:py-3 text-slate-900 focus:border-blue-600 focus:outline-none transition-colors text-sm sm:text-base"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-2.5 sm:top-3 text-slate-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500"
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="peer w-full bg-transparent border-b border-slate-300 py-2.5 sm:py-3 text-slate-900 focus:border-blue-600 focus:outline-none transition-colors text-sm sm:text-base"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 top-2.5 sm:top-3 text-slate-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500"
                >
                  Phone
                </label>
              </div>
            </div>

            {/* ROW 3: Monthly Collection & Total AR */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="relative">
                <input
                  type="text"
                  name="monthlyCollection"
                  id="monthlyCollection"
                  value={formData.monthlyCollection}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-slate-300 py-2.5 sm:py-3 text-slate-900 focus:border-blue-600 focus:outline-none transition-colors text-sm sm:text-base"
                />
                <label
                  htmlFor="monthlyCollection"
                  className="absolute left-0 top-2.5 sm:top-3 text-slate-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500"
                >
                  Monthly Collection
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="totalAR"
                  id="totalAR"
                  value={formData.totalAR}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-slate-300 py-2.5 sm:py-3 text-slate-900 focus:border-blue-600 focus:outline-none transition-colors text-sm sm:text-base"
                />
                <label
                  htmlFor="totalAR"
                  className="absolute left-0 top-2.5 sm:top-3 text-slate-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500"
                >
                  Total AR
                </label>
              </div>
            </div>

            {/* ROW 4: Your Message Area */}
            <div className="relative pt-1 sm:pt-2">
              <textarea
                name="message"
                id="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-transparent border-b border-slate-300 py-2.5 sm:py-3 text-slate-900 focus:border-blue-600 focus:outline-none transition-colors text-sm sm:text-base resize-none"
              />
              <label
                htmlFor="message"
                className="absolute left-0 top-2.5 sm:top-3 text-slate-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500"
              >
                Your Message
              </label>
            </div>

            {/* CONSENT CHECKBOX & LEGAL NOTICE */}
            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={handleCheckboxChange}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="consent" className="text-[11px] sm:text-xs text-slate-500 leading-normal select-none">
                By checking this box, you agree to receive SMS messages from SoftbeckMedicare related to Follow-ups, Meeting Notifications, Medical Billing Services. You may reply STOP to opt out at any time. Reply to HELP to <a href="tel:8006406409" className="text-blue-600 font-semibold underline hover:text-blue-700">800-640-6409</a> for assistance. Messages and data rates may apply. Learn more on our <a href="#privacy" className="text-blue-600 font-semibold underline hover:text-blue-700">Privacy Policy</a> page and <a href="#terms" className="text-blue-600 font-semibold underline hover:text-blue-700">Terms & Conditions</a>.
              </label>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-semibold text-sm sm:text-base py-3.5 sm:py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit Now
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}