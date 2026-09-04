'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MessageSquare, Phone, Mail, Loader2, CheckCircle2 } from 'lucide-react';
import Header from '../../components/Header/page';
import Footer from '../../components/Footer/page';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    practiceName: '',
    email: '',
    phone: '',
    monthlyCollection: '',
    totalAR: '',
    message: '',
    agreedToTerms: true,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          to_email: 'arfaz1865@gmail.com',
          subject: `New Lead Inquiry from ${formData.name} (${formData.practiceName})`,
          ...formData,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({
          name: '',
          practiceName: '',
          email: '',
          phone: '',
          monthlyCollection: '',
          totalAR: '',
          message: '',
          agreedToTerms: true,
        });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <>
      <Header />
      <section className="relative w-full bg-slate-50 min-h-screen py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* LEFT COLUMN: HEADING & DOCTOR ILLUSTRATION */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-4">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-950 leading-[1.1] tracking-tight">
                Thank you for showing your interest in <span className="text-blue-600">SoftbeckMedicare</span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
                We&apos;re keen to know more about your practice! Whether you are a hospital, lab, imaging service or an independent medical provider, you need to deal with insurance claims recovery.
              </p>
            </div>

            {/* DOCTOR IMAGE OVERLAY */}
            <div className="relative mt-10 lg:mt-16 w-full max-w-md mx-auto lg:mx-0">
              {/* Blue backdrop accent ring */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[110%] h-[260px] bg-blue-600 rounded-full -rotate-12 -z-0 opacity-80 blur-[1px]"></div>
              
              <div className="relative z-10 flex justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                  alt="SoftbeckMedicare Medical Professional"
                  width={420}
                  height={550}
                  className="object-cover object-top h-[420px] sm:h-[480px] w-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM CARD */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-blue-50">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2 tracking-tight">
              Let&apos;s get connected
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mb-8 font-normal">
              Please provide the following information so our team can connect with you within 12 hours. Or call us at{' '}
              <a href="tel:800-640-6409" className="text-blue-600 font-semibold hover:underline">
                800-640-6409
              </a>
            </p>

            {status === 'success' ? (
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center space-y-4 my-8">
                <CheckCircle2 className="w-16 h-16 text-blue-600 mx-auto" />
                <h3 className="text-2xl font-bold text-blue-950">Message Received!</h3>
                <p className="text-slate-600 text-sm">
                  Thank you for reaching out. Our medical billing specialists will review your information and get back to you within 12 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                  {/* Name */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full border-b border-slate-200 pt-4 pb-1 text-slate-800 focus:outline-none focus:border-blue-600 transition-colors bg-transparent text-sm"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 top-1 text-slate-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-semibold"
                    >
                      Name
                    </label>
                  </div>

                  {/* Practice Name */}
                  <div className="relative">
                    <input
                      type="text"
                      id="practiceName"
                      name="practiceName"
                      required
                      value={formData.practiceName}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full border-b border-slate-200 pt-4 pb-1 text-slate-800 focus:outline-none focus:border-blue-600 transition-colors bg-transparent text-sm"
                    />
                    <label
                      htmlFor="practiceName"
                      className="absolute left-0 top-1 text-slate-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-semibold"
                    >
                      Practice Name
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full border-b border-slate-200 pt-4 pb-1 text-slate-800 focus:outline-none focus:border-blue-600 transition-colors bg-transparent text-sm"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-1 text-slate-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-semibold"
                    >
                      Email
                    </label>
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full border-b border-slate-200 pt-4 pb-1 text-slate-800 focus:outline-none focus:border-blue-600 transition-colors bg-transparent text-sm"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-0 top-1 text-slate-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-semibold"
                    >
                      Phone
                    </label>
                  </div>

                  {/* Monthly Collection */}
                  <div className="relative">
                    <input
                      type="text"
                      id="monthlyCollection"
                      name="monthlyCollection"
                      value={formData.monthlyCollection}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full border-b border-slate-200 pt-4 pb-1 text-slate-800 focus:outline-none focus:border-blue-600 transition-colors bg-transparent text-sm"
                    />
                    <label
                      htmlFor="monthlyCollection"
                      className="absolute left-0 top-1 text-slate-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-semibold"
                    >
                      Monthly Collection
                    </label>
                  </div>

                  {/* Total AR */}
                  <div className="relative">
                    <input
                      type="text"
                      id="totalAR"
                      name="totalAR"
                      value={formData.totalAR}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full border-b border-slate-200 pt-4 pb-1 text-slate-800 focus:outline-none focus:border-blue-600 transition-colors bg-transparent text-sm"
                    />
                    <label
                      htmlFor="totalAR"
                      className="absolute left-0 top-1 text-slate-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-semibold"
                    >
                      Total AR
                    </label>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative pt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full border-b border-slate-200 pt-4 pb-1 text-slate-800 focus:outline-none focus:border-blue-600 transition-colors bg-transparent text-sm resize-none"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-3 text-slate-400 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-slate-400 peer-focus:top-3 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-semibold"
                  >
                    Your Message
                  </label>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="agreedToTerms"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-600 border-slate-300 rounded cursor-pointer accent-blue-600"
                  />
                  <label htmlFor="agreedToTerms" className="text-[11px] sm:text-xs text-slate-500 leading-tight">
                    By checking this box, you agree to receive SMS messages from SoftbeckMedicare related to Follow-ups, Meeting Notifications, Medical Billing Services. You may reply STOP to opt out at any time. Reply to HELP to{' '}
                    <a href="tel:800-640-6409" className="text-blue-600 hover:underline font-medium">
                      800-640-6409
                    </a>{' '}
                    for assistance. Messages and data rates may apply. Message frequency will vary. Learn more on our{' '}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Privacy Policy
                    </a>{' '}
                    page and{' '}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Terms & Conditions
                    </a>
                    .
                  </label>
                </div>

                {/* Error Display */}
                {status === 'error' && (
                  <div className="text-red-600 text-xs font-semibold bg-red-50 p-3 rounded-lg border border-red-200">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/25 active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Now'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FIXED SIDEBAR QUICK ACTION BAR */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-blue-950 text-white rounded-l-2xl py-4 px-2.5 flex flex-col gap-5 shadow-2xl border-l border-y border-blue-900">
          <button title="Message" className="hover:text-blue-400 transition-colors">
            <MessageSquare className="w-5 h-5" />
          </button>
          <button title="Call Us" className="hover:text-blue-400 transition-colors">
            <Phone className="w-5 h-5" />
          </button>
          <button title="Email Us" className="hover:text-blue-400 transition-colors">
            <Mail className="w-5 h-5" />
          </button>
        </div>

        {/* FLOATING CHAT WIDGET BUTTON */}
        <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
          <div className="hidden sm:block bg-white text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md border border-slate-200">
            Chat With Us!
          </div>
          <button
            aria-label="Open Chat"
            className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all hover:scale-105"
          >
            <MessageSquare className="w-6 h-6 fill-current" />
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}