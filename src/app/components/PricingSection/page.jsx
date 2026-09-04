'use client';

import React from 'react';
import { 
  Check, 
  X, 
  ShieldCheck, 
  Lock, 
  Clock, 
  FileText, 
  Globe, 
  Sparkles,
  Layers,
  Zap,
  UserCheck
} from 'lucide-react';

export default function PricingSection() {
  return (
    <div className="bg-white text-slate-800 font-sans py-16 space-y-24">

      {/* ================= SECTION 1: PRICING CARDS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Capture every encounter, your way
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            One scribe, three ways to record — ambient in the room, live dictation, or a file uploaded after the visit. Transcription runs in real time and tracks every speaker.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* BASIC PLAN */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-blue-700">Basic</h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">Individual use</p>

              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-extrabold text-blue-900">$99</span>
                <span className="text-slate-500 font-medium ml-1">/provider/month</span>
              </div>

              <div className="bg-blue-50 text-blue-900 text-xs font-medium p-3 rounded-xl mb-6">
                200 notes · English multi-accent · 1 pre-enrolled speaker
              </div>

              <ul className="space-y-3.5 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Real-time 93% STT transcription</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>SOAP, H&P, Telemed, Procedure & more</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>ICD-10 and SNOMED code suggestions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>HIPAA-compliant PHI redaction + audit trail</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Ambient, dictation & audio upload modes</span>
                </li>
              </ul>
            </div>

            <button className="mt-8 w-full py-3.5 px-4 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
              Get Started
            </button>
          </div>

          {/* PRO PLAN (POPULAR) */}
          <div className="bg-white rounded-3xl border-2 border-blue-600 p-8 shadow-xl relative flex flex-col justify-between">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Popular Plans
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-700">Pro</h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">Small teams · 3–5 providers</p>

              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-extrabold text-blue-900">$199</span>
                <span className="text-slate-500 font-medium ml-1">/provider/month</span>
              </div>

              <div className="bg-blue-50 text-blue-900 text-xs font-medium p-3 rounded-xl mb-6">
                400 notes · 5 languages · Up to 3 enrolled speakers
              </div>

              <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Everything in Basic, plus:</p>

              <ul className="space-y-3.5 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Customizable templates — drag & drop and voice commands</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>ICD-10, SNOMED, LOINC + RxNorm code suggestions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Timestamped transcript linking</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Pre-visit patient summary per encounter</span>
                </li>
              </ul>
            </div>

            <button className="mt-8 w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-md">
              Get Started
            </button>
          </div>

          {/* ULTIMATE PLAN */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-blue-700">Ultimate</h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">Enterprise · multiple providers</p>

              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-extrabold text-blue-900">$249</span>
                <span className="text-slate-500 font-medium ml-1">/provider/month</span>
              </div>

              <div className="bg-blue-50 text-blue-900 text-xs font-medium p-3 rounded-xl mb-6">
                500 notes · 10 languages · Unlimited enrolled speakers
              </div>

              <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Everything in Pro, plus:</p>

              <ul className="space-y-3.5 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Unlimited speaker diarization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Multiple audio uploads per encounter</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Adaptive doctor style learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>CPT + modifier code suggestions</span>
                </li>
              </ul>
            </div>

            <button className="mt-8 w-full py-3.5 px-4 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: COMPARISON TABLE ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Compare every plan</h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Feature-by-feature, so you can see exactly what each tier unlocks.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-5 text-lg font-bold w-1/3">Feature</th>
                  <th className="p-5 text-center w-1/5 border-l border-blue-800">
                    <div className="text-xl font-bold">Basic</div>
                    <div className="text-xs text-blue-200">$99 · Individual</div>
                  </th>
                  <th className="p-5 text-center w-1/5 bg-blue-800 border-l border-blue-700">
                    <div className="text-xl font-bold">Pro</div>
                    <div className="text-xs text-blue-200">$199 · 3–5 providers</div>
                  </th>
                  <th className="p-5 text-center w-1/5 border-l border-blue-800">
                    <div className="text-xl font-bold">Ultimate</div>
                    <div className="text-xs text-blue-200">$249 · Enterprise</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {/* CATEGORY: Plans & limits */}
                <tr className="bg-blue-50/70 text-blue-950 font-bold">
                  <td colSpan={4} className="p-3 px-5">Plans & limits</td>
                </tr>
                <tr>
                  <td className="p-4 px-5">Notes per provider / month</td>
                  <td className="p-4 text-center border-l border-slate-100 font-medium">200</td>
                  <td className="p-4 text-center border-l border-slate-100 font-bold text-blue-900 bg-blue-50/30">400</td>
                  <td className="p-4 text-center border-l border-slate-100 font-medium">500</td>
                </tr>
                <tr>
                  <td className="p-4 px-5">Languages</td>
                  <td className="p-4 text-center border-l border-slate-100">English (multi-accent)</td>
                  <td className="p-4 text-center border-l border-slate-100 font-bold text-blue-900 bg-blue-50/30">5</td>
                  <td className="p-4 text-center border-l border-slate-100">10</td>
                </tr>
                <tr>
                  <td className="p-4 px-5">Pre-enrolled speakers</td>
                  <td className="p-4 text-center border-l border-slate-100 font-medium">1</td>
                  <td className="p-4 text-center border-l border-slate-100 font-bold text-blue-900 bg-blue-50/30">3</td>
                  <td className="p-4 text-center border-l border-slate-100 font-medium">Unlimited</td>
                </tr>

                {/* CATEGORY: Capture & compliance */}
                <tr className="bg-blue-50/70 text-blue-950 font-bold">
                  <td colSpan={4} className="p-3 px-5">Capture & compliance</td>
                </tr>
                <tr>
                  <td className="p-4 px-5">Real-time 93% STT transcription</td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100 bg-blue-50/30"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 px-5">Ambient, dictation & audio upload</td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100 bg-blue-50/30"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 px-5">HIPAA PHI redaction + audit trail</td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100 bg-blue-50/30"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 px-5">Timestamped transcript linking</td>
                  <td className="p-4 text-center border-l border-slate-100"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100 bg-blue-50/30"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 px-5">Multiple audio uploads per encounter</td>
                  <td className="p-4 text-center border-l border-slate-100"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100 bg-blue-50/30"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 px-5">Unlimited speaker diarization</td>
                  <td className="p-4 text-center border-l border-slate-100"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100 bg-blue-50/30"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                </tr>

                {/* CATEGORY: Coding */}
                <tr className="bg-blue-50/70 text-blue-950 font-bold">
                  <td colSpan={4} className="p-3 px-5">Coding</td>
                </tr>
                <tr>
                  <td className="p-4 px-5">ICD-10 + SNOMED suggestions</td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100 bg-blue-50/30"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 px-5">LOINC + RxNorm suggestions</td>
                  <td className="p-4 text-center border-l border-slate-100"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100 bg-blue-50/30"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 px-5">CPT + modifier code suggestions</td>
                  <td className="p-4 text-center border-l border-slate-100"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100 bg-blue-50/30"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                </tr>

                {/* CATEGORY: Encounter Templates */}
                <tr className="bg-blue-50/70 text-blue-950 font-bold">
                  <td colSpan={4} className="p-3 px-5">Encounter Templates</td>
                </tr>
                <tr>
                  <td className="p-4 px-5">Standard clinical notes — SOAP, H&P, Telemed, etc.</td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100 bg-blue-50/30"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 px-5">Dynamic templates — web drag & drop & voice selection</td>
                  <td className="p-4 text-center border-l border-slate-100"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100 bg-blue-50/30"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 px-5">Auto-learning & adaptive doctor style</td>
                  <td className="p-4 text-center border-l border-slate-100"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100 bg-blue-50/30"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 px-5">Dynamic templates — document upload</td>
                  <td className="p-4 text-center border-l border-slate-100"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100 bg-blue-50/30"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                </tr>

                {/* CATEGORY: Patient Profile */}
                <tr className="bg-blue-50/70 text-blue-950 font-bold">
                  <td colSpan={4} className="p-3 px-5">Patient Profile</td>
                </tr>
                <tr>
                  <td className="p-4 px-5">Pre-visit patient summary</td>
                  <td className="p-4 text-center border-l border-slate-100"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100 bg-blue-50/30"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                  <td className="p-4 text-center border-l border-slate-100"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: COMPLIANCE & AUDIT ================= */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-5 space-y-4">
              <span className="text-blue-200 text-sm font-semibold tracking-wider uppercase">Compliance & audit</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                HIPAA-grade by default
              </h2>
              <p className="text-blue-100 text-base leading-relaxed">
                Every note is protected end to end — from PHI redaction to a full audit trail — so nothing lingers longer than it should.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <Check className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-white">English + Spanish today</h4>
                  <p className="text-sm text-blue-100">HIPAA-compliant patient delivery</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Check className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-white">PHI redaction</h4>
                  <p className="text-sm text-blue-100">Protected health information handled automatically</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Check className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-white">Full audit trail</h4>
                  <p className="text-sm text-blue-100">Every action logged and traceable</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Check className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-white">14-day retention</h4>
                  <p className="text-sm text-blue-100">With built-in delete reminder</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 4: BUILT TO KEEP GETTING BETTER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Built to keep getting better
          </h2>
          <p className="mt-2 text-slate-600 text-base">
            Salus ships continuously. Here's what's on the horizon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Box 1 */}
          <div className="bg-white border border-blue-100 rounded-3xl p-8 space-y-6 shadow-sm">
            <h3 className="text-2xl font-bold text-blue-900">Documentation & templates</h3>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Multilingual patient summaries & outputs</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Personal dictionary & custom vocabulary</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Per-section template controls</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>AHP roles in the template library</span>
              </li>
            </ul>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-blue-100 rounded-3xl p-8 space-y-6 shadow-sm">
            <h3 className="text-2xl font-bold text-blue-900">Real-time, speaker-aware transcription</h3>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Inline clinical decision support & Q&A</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>HCC compliance + MEAT validation</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Native mobile app</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Inpatient, ED & pediatric depth</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}