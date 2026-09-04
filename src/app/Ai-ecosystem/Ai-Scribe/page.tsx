'use client';

import React from 'react';
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';
import { 
  CheckCircle2, 
  Mic, 
  FileText, 
  Settings, 
  Code, 
  Clock, 
  Sparkles
} from 'lucide-react';
import PricingSection from '@/app/components/PricingSection/page';

export default function AIScribePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col justify-between">
      {/* Shared Header Component */}
      <Header />

      <main className="flex-grow">
        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column: Hero Content */}
              <div className="lg:col-span-6 space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                  The <span className="text-blue-600">AI scribe</span> that captures the encounter, structures the note, and suggests the <span className="text-blue-600">codes</span>.
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Salus turns the spoken visit into a signed, coding-ready note — 93% speech-to-text accuracy, coding built in, and templates that adapt to how you already work.
                </p>

                {/* Call to Actions */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <button className="px-6 py-3.5 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition">
                    Request a Demo
                  </button>
                  <button className="px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                    See how Salus Works
                  </button>
                </div>

                {/* Badges / Logos */}
                <div className="pt-6 border-t border-gray-100 grid grid-cols-4 gap-4 items-center">
                  <div className="p-2 border border-gray-200 rounded text-center text-xs font-bold text-gray-600">HITRUST CSF Certified</div>
                  <div className="p-2 border border-blue-200 rounded text-center text-xs font-bold text-blue-700 bg-blue-50">HIPAA Compliant</div>
                  <div className="p-2 border border-gray-200 rounded text-center text-xs font-bold text-gray-600">AICPA SOC</div>
                  <div className="p-2 border border-gray-200 rounded text-center text-xs font-bold text-gray-600">PCI DSS</div>
                </div>

                {/* Key Points */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm font-medium text-gray-700 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>93% STT accuracy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>HIPAA compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>English + Spanish</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Interface Mockup */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
                  {/* Top Live Waveform Header */}
                  <div className="bg-blue-600 text-white p-6 relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-500/50 rounded-full">
                        <Mic className="w-5 h-5 animate-pulse text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-blue-100 uppercase tracking-wider font-semibold">Listening</p>
                        <p className="font-semibold text-lg">Provider is speaking</p>
                      </div>
                    </div>
                    {/* Visualizer bars */}
                    <div className="flex items-center justify-between gap-1 h-12 pt-2">
                      {[40, 65, 30, 85, 95, 45, 60, 100, 75, 50, 80, 90, 35, 60, 85, 40, 70, 95, 50, 30].map((height, i) => (
                        <div 
                          key={i} 
                          className="w-1.5 bg-white/80 rounded-full transition-all duration-300" 
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Note Body Mockup */}
                  <div className="p-6 space-y-5 bg-white">
                    <div className="flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1.5 rounded-md">
                      <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                      AI processing speech to structured note
                    </div>

                    {/* Section: HPI */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 text-xs font-bold rounded">HPI</span>
                        <span className="text-sm font-semibold text-gray-800">Auto-generated</span>
                      </div>
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100 leading-relaxed">
                        Patient presents with acute onset of chest pain radiating to left arm, lasting approximately 2 hours...
                      </p>
                    </div>

                    {/* Section: ROS */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 text-xs font-bold rounded">ROS</span>
                        <span className="text-sm font-semibold text-gray-800">Structured</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-blue-50/50 border border-blue-100 p-2.5 rounded-lg">
                          <span className="text-gray-500">Cardiovascular:</span> <span className="font-semibold text-gray-800">Positive</span>
                        </div>
                        <div className="bg-blue-50/50 border border-blue-100 p-2.5 rounded-lg">
                          <span className="text-gray-500">Respiratory:</span> <span className="font-semibold text-gray-800">Negative</span>
                        </div>
                      </div>
                    </div>

                    {/* Section: Coding */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 text-xs font-bold rounded">Coding</span>
                        <span className="text-sm font-semibold text-gray-800">Suggested</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['CPT: 99214', 'ICD-10: I20.9', 'HCPCS: G0438'].map((code, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white border border-blue-200 text-blue-900 text-xs font-medium rounded-full shadow-sm">
                            {code}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer Stats */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
                      <div className="flex items-center gap-1.5 text-blue-700 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        <span>Accuracy: 98.5%</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>Time Saved: 12 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= BLUE BANNER SECTION ================= */}
        <section className="bg-blue-600 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" />
                <span className="font-medium text-base">English + Spanish today</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" />
                <span className="font-medium text-base">10 languages supported</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" />
                <span className="font-medium text-base">Real-time transcription</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" />
                <span className="font-medium text-base">Ambient · Dictation · Upload</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS SECTION ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">How Salus works</h2>
              <p className="mt-3 text-gray-600 text-base">Here's what happens in the background, in seconds.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { step: '01', title: 'Audio captured', desc: 'Ambient, dictation, or audio upload — multi-speaker, PHI-redacted, HIPAA-compliant.', icon: Mic },
                { step: '02', title: 'Converted to text', desc: 'Clinical speech recognition at 93% accuracy — speaker-aware from the first word.', icon: FileText },
                { step: '03', title: 'Structured into a note', desc: 'Problems, medications, allergies & procedures tagged; HPI, ROS & Plan.', icon: Settings },
                { step: '04', title: 'Adapted to your style', desc: 'Formatted to your template and refined from the edits you make.', icon: Sparkles },
                { step: '05', title: 'Coded & checked', desc: 'Codes suggested across ICD-10, CPT, SNOMED, RxNorm & LOINC — review and sign.', icon: Code }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="relative flex flex-col items-center text-center group">
                    <span className="text-6xl font-black text-blue-100 select-none mb-2">{item.step}</span>
                    <div className="w-14 h-14 rounded-full bg-white border border-blue-200 shadow-sm flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= ACTION BAR CALLOUT ================= */}
        <section className="bg-gray-50 pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-900 rounded-2xl p-6 sm:p-8 shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-blue-400 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold">Your note is ready.</h3>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg text-sm transition">
                  Push to EHR / HealUS
                </button>
                <button className="px-5 py-2.5 bg-transparent border border-blue-400 hover:bg-blue-800 text-white font-semibold rounded-lg text-sm transition">
                  Export PDF
                </button>
                <button className="px-5 py-2.5 bg-transparent border border-blue-400 hover:bg-blue-800 text-white font-semibold rounded-lg text-sm transition">
                  Secure Send
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES GRID ================= */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">A finished note, not a transcript to clean up</h2>
              <p className="mt-3 text-gray-600">
                Salus generates structured, template-fit notes with problems, medications, and procedures tagged — ready to review, sign, and send.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature Box 1 */}
              <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-blue-100 text-blue-700 rounded-xl">
                    <Settings className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">Available</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Structured note generation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Clinical terminology mapping with automatic tagging, inline edits, sign-off, and one-click PDF export.
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  {['Problem, medication, allergy & procedure tagging', 'Clinical terminology mapping', 'Inline edit + clinician review & sign-off', 'PDF export + AI summary highlights'].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature Box 2 */}
              <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-blue-100 text-blue-700 rounded-xl">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">Available</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Templates that fit your workflow</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Standard library plus drag-and-drop and voice-based templates that learn from your edits.
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  {['Standard template library & note structures', 'Web drag-and-drop + voice-based selection', 'Auto-titled & auto-learning templates', 'Build templates from uploaded documents'].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STATS SECTION ================= */}
        <section className="bg-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold">Built to measure up</h2>
              <p className="mt-3 text-blue-200">Real, verifiable capabilities — no inflated claims.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { stat: '93%', label: 'Speech-to-text accuracy' },
                { stat: '5', label: 'Coding systems supported', sub: 'ICD-10 · CPT · SNOMED · RxNorm · LOINC' },
                { stat: '10', label: 'Languages supported' },
                { stat: '14-day', label: 'Note retention + delete reminder' }
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-800/60 border border-blue-700 rounded-2xl p-8 text-center flex flex-col justify-between">
                  <div className="text-4xl font-extrabold text-white mb-2">{item.stat}</div>
                  <div className="text-sm font-medium text-blue-100">{item.label}</div>
                  {item.sub && <div className="text-xs text-blue-300 mt-2">{item.sub}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PRICING SECTION ================= */}
        <PricingSection />
      </main>

      {/* Shared Footer Component */}
      <Footer />
    </div>
  );
}