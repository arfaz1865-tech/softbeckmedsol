"use client";

import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

export default function FaqAndBottomBanner() {
  const [activeTab, setActiveTab] = useState('Pricing & Plans');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqData = {
    'Pricing & Plans': [
      { q: "What pricing models are available?", a: "We offer flexible subscription plans based on provider count or percentage-of-collections models tailored to practice sizes." },
      { q: "Is there a free trial or free plan?", a: "Yes, we provide a free Practice Management System tier for qualified practices along with live demo walkthroughs." },
      { q: "Can I change plans later?", a: "Absolutely. You can upgrade, downgrade, or adjust your specialty modules at any time from your admin dashboard." },
      { q: "Are there setup or onboarding fees?", a: "Our core onboarding is complimentary with guided team training to ensure zero disruption to your daily workflow." }
    ],
    'Integration & Compatibility': [
      { q: "Does it integrate with existing EHRs?", a: "Yes, our API seamlessly connects with top EHR platforms including Epic, Cerner, AthenaHealth, and ModMed." },
      { q: "How long does data migration take?", a: "Most practice data migrations are completed within 3 to 5 business days without downtime." }
    ],
    'Getting Started': [
      { q: "How fast can my practice go live?", a: "You can start processing claims within 24–48 hours after setup." }
    ],
    'Security & Privacy': [
      { q: "Is SoftbeckMedicare HIPAA compliant?", a: "Yes, we maintain 256-bit encryption, HITRUST CSF certification, and full SOC 2 Type II compliance." }
    ],
    'Support & Assistance': [
      { q: "What support options are available?", a: "We provide 24/7 live chat, dedicated account managers, and phone support for all billing clients." }
    ]
  };

  const categories = Object.keys(faqData);

  return (
    <div className="space-y-16 max-w-7xl mx-auto px-6 py-12 bg-white">
      {/* Category Accordion Section */}
      <section className="bg-sky-50/60 rounded-3xl p-8 lg:p-12 border border-blue-100/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-xs leading-relaxed">
              Whether you're comparing billing platforms or simply need clarity before you decide, this section answers the questions we hear most.
            </p>
            
            {/* Tab Navigation Pill Buttons */}
            <div className="flex flex-col gap-2 pt-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveTab(category);
                    setOpenFaqIndex(0);
                  }}
                  className={`px-5 py-3 rounded-full text-xs font-semibold text-left transition-all ${
                    activeTab === category 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                      : 'bg-white text-slate-700 border border-slate-200/80 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Accordions */}
          <div className="lg:col-span-8 space-y-3">
            {faqData[activeTab].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xs border border-blue-100/80">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full p-4 text-left flex justify-between items-center text-slate-800 font-bold text-sm hover:text-blue-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="p-1 rounded-full bg-blue-50 text-blue-600 flex-shrink-0 ml-2">
                    {openFaqIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="px-4 pb-4 text-slate-600 text-xs leading-relaxed border-t border-slate-100 pt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-blue-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-xl shadow-blue-600/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Medical Billing and Coding Made Effortless</h2>
          </div>
          <div className="space-y-4">
            <p className="text-sky-100 text-xs lg:text-sm leading-relaxed">
              Take a free demo to see how AI medical billing and coding software simplifies what used to be complex. Real-time dashboards visualize your practice performance.
            </p>
            <button className="bg-white text-blue-900 hover:bg-sky-50 font-bold px-6 py-2.5 rounded-full flex items-center gap-2 text-xs transition-colors">
              Book a Demo
              <span className="bg-blue-800 text-white p-1 rounded-full"><ArrowUpRight size={12} /></span>
            </button>
          </div>
        </div>

        {/* Dashboard Perspective Overlay Image */}
        <div className="relative mt-4 rounded-xl overflow-hidden border border-blue-400/30 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80" 
            alt="Dashboard Banner" 
            className="w-full h-[220px] lg:h-[300px] object-cover"
          />
        </div>
      </section>
    </div>
  );
}