'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaFacebookF, 
  FaXTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube,
  FaChevronDown
} from 'react-icons/fa6';

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
}

const AccordionSection = ({ title, children }: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b sm:border-b-0 border-slate-100 pb-4 sm:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-slate-900 font-bold text-base sm:text-lg tracking-wide uppercase sm:pointer-events-none focus:outline-none"
      >
        <span>{title}</span>
        <FaChevronDown
          className={`w-4 h-4 text-slate-500 transition-transform duration-200 sm:hidden ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div className={`mt-3 sm:mt-4 ${isOpen ? 'block' : 'hidden sm:block'}`}>
        {children}
      </div>
    </div>
  );
};

export default function Footer() {
  const [subscribeData, setSubscribeData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSubscribeData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', subscribeData);
  };

  return (
    <footer className="w-full bg-white text-slate-700 font-sans border-t border-slate-100">
      
      {/* UPPER MAIN FOOTER CONTENT */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 sm:gap-10">
          
          {/* COLUMN 1: AI Eco-system */}
          <AccordionSection title="AI Eco-system">
            <ul className="space-y-2.5 text-sm text-slate-600 font-normal">
              <li><Link href="/Products/Medical-Billing" className="hover:text-blue-600 transition-colors">AI Medical Billing Software</Link></li>
              <li><Link href="/Ai-ecosystem/Ai-Scribe" className="hover:text-blue-600 transition-colors">AI Scribe</Link></li>
              <li><Link href="/Ai-ecosystem/Ai-Medical-Coding" className="hover:text-blue-600 transition-colors">AI Medical Coding</Link></li>
              <li><Link href="/Ai-ecosystem/Ai-Rule-Engine" className="hover:text-blue-600 transition-colors">AI Rule Engine</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">AI Receptionist</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">AI Authorization Verification</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">AI Claim Agent</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">AI Patient Scheduling</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">AI Appeals Manager</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">AI Payment Posting</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">AI Patient Statement Agent</Link></li>
            </ul>
            <div className="pt-3">
              <Link href="/Ai-ecosystem" className="text-blue-600 font-medium text-sm hover:underline">
                Learn more
              </Link>
            </div>
          </AccordionSection>

          {/* COLUMN 2: SERVICES */}
          <AccordionSection title="Services">
            <ul className="space-y-2.5 text-sm text-slate-600 font-normal">
              <li><Link href="/services/revenue-cycle-management" className="hover:text-blue-600 transition-colors">Revenue Cycle Management</Link></li>
              <li><Link href="/services/medical-billing" className="hover:text-blue-600 transition-colors">Medical Billing Services</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Medical Billing Consulting</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Medical Billing Small Practices</Link></li>
              <li><Link href="/services/ar-recovery" className="hover:text-blue-600 transition-colors">AR Recovery Services</Link></li>
              <li><Link href="/services/hospital-billing" className="hover:text-blue-600 transition-colors">Hospital Billing Services</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Denial Management Services</Link></li>
              <li><Link href="/services/chronic-care-management" className="hover:text-blue-600 transition-colors">Chronic Care Management</Link></li>
              <li><Link href="/services/remote-patient-monitoring" className="hover:text-blue-600 transition-colors">Remote Patient Monitoring</Link></li>
              <li><Link href="/services/bi-reporting-services" className="hover:text-blue-600 transition-colors">BI Reporting Services</Link></li>
              <li><Link href="/services/healthcare-data-integration-solutions" className="hover:text-blue-600 transition-colors">Healthcare Data Integration</Link></li>
            </ul>
            <div className="pt-3">
              <Link href="#" className="text-blue-600 font-medium text-sm hover:underline">
                View all services
              </Link>
            </div>
          </AccordionSection>

          {/* COLUMN 3: SPECIALTIES */}
        <AccordionSection title="Specialties">
  <ul className="space-y-2.5 text-sm text-slate-600 font-normal">
    <li><Link href="/specialities/orthopedic" className="hover:text-blue-600 transition-colors">Orthopedic</Link></li>
    <li><Link href="/specialities/neurosurgery" className="hover:text-blue-600 transition-colors">Neurosurgery</Link></li>
    <li><Link href="/specialities/ambulatory-surgery" className="hover:text-blue-600 transition-colors">Ambulatory Surgery</Link></li>
    <li><Link href="/specialities/oncology" className="hover:text-blue-600 transition-colors">Oncology</Link></li>
    <li><Link href="/specialities/urgent-care" className="hover:text-blue-600 transition-colors">Urgent Care</Link></li>
    <li><Link href="/specialities/pathology" className="hover:text-blue-600 transition-colors">Pathology</Link></li>
    <li><Link href="/specialities/general-surgery" className="hover:text-blue-600 transition-colors">General Surgery</Link></li>
    <li><Link href="/specialities/dermatology" className="hover:text-blue-600 transition-colors">Dermatology</Link></li>
    <li><Link href="/specialities/radiology" className="hover:text-blue-600 transition-colors">Radiology</Link></li>
    <li><Link href="/specialities/gastroenterology" className="hover:text-blue-600 transition-colors">Gastroenterology</Link></li>
    <li><Link href="/specialities/cardiology" className="hover:text-blue-600 transition-colors">Cardiology</Link></li>
   
    
  </ul>
  <div className="pt-3">
    <Link href="/specialities" className="text-blue-600 font-medium text-sm hover:underline">
      View all specialties
    </Link>
  </div>
</AccordionSection>

          {/* COLUMN 4: QUICK LINKS */}
          <AccordionSection title="Quick Links">
            <ul className="space-y-2.5 text-sm text-slate-600 font-normal">
              <li><Link href="/about-us" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="/webinars" className="hover:text-blue-600 transition-colors">Webinars</Link></li>
              <li><Link href="/blogs" className="hover:text-blue-600 transition-colors">Blogs</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">States</Link></li>
              <li><Link href="/whitepaper" className="hover:text-blue-600 transition-colors">White Papers</Link></li>
              <li><Link href="/case-studies" className="hover:text-blue-600 transition-colors">Case Studies</Link></li>
              <li><Link href="/guides" className="hover:text-blue-600 transition-colors">Guides</Link></li>
              <li><Link href="/comparisons" className="hover:text-blue-600 transition-colors">Comparisons</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Partnership Program</Link></li>
              <li><Link href="/Testimonial" className="hover:text-blue-600 transition-colors">Testimonials</Link></li>
            </ul>
            <div className="pt-3">
              <Link href="/ContactPage" className="text-blue-600 font-medium text-sm hover:underline">
                Contact us
              </Link>
            </div>
          </AccordionSection>

          {/* COLUMN 5: LET'S GET CONNECTED FORM */}
          <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-0">
            <h3 className="text-slate-900 font-bold text-base sm:text-lg tracking-wide uppercase">
              Let&apos;s Get Connected
            </h3>
            
            <form onSubmit={handleSubscribe} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="footer-name"
                  value={subscribeData.name}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
                  className="peer w-full bg-transparent border-b border-slate-300 py-2 text-slate-900 focus:border-blue-600 focus:outline-none transition-colors text-sm"
                />
                <label
                  htmlFor="footer-name"
                  className="absolute left-0 top-2 text-slate-500 text-sm transition-all duration-200 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500"
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="footer-email"
                  value={subscribeData.email}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
                  className="peer w-full bg-transparent border-b border-slate-300 py-2 text-slate-900 focus:border-blue-600 focus:outline-none transition-colors text-sm"
                />
                <label
                  htmlFor="footer-email"
                  className="absolute left-0 top-2 text-slate-500 text-sm transition-all duration-200 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500"
                >
                  Your Email
                </label>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-black hover:bg-slate-800 text-white font-medium text-sm px-8 py-3 rounded-full transition-all duration-200 shadow-sm active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* LOWER COPYRIGHT BAR */}
      <div className="border-t border-slate-200 py-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-xs text-slate-600">
          
          {/* POLICIES & COPYRIGHT */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 text-center md:text-left">
            <Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Return Policy</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Quality Policy</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Sitemap</Link>
            <span className="text-slate-500 w-full sm:w-auto mt-1 sm:mt-0">Copyright © 2026 SoftbeckMedicare </span>
          </div>

          {/* SOCIAL MEDIA ICONS */}
          <div className="flex items-center space-x-6 text-slate-700">
            <Link href="#" className="hover:text-blue-600 transition-colors text-base" aria-label="Facebook">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-blue-600 transition-colors text-base" aria-label="X (Twitter)">
              <FaXTwitter />
            </Link>
            <Link href="#" className="hover:text-blue-600 transition-colors text-base" aria-label="LinkedIn">
              <FaLinkedinIn />
            </Link>
            <Link href="#" className="hover:text-blue-600 transition-colors text-base" aria-label="Instagram">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-blue-600 transition-colors text-base" aria-label="YouTube">
              <FaYoutube />
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}