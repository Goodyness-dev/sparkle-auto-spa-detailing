import React from 'react';
import { Quote, CheckCircle2, Award, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function AboutSection({ onOpenWizard }) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-stone-50 dark:bg-[#0a0e18] transition-colors" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Authentic Business Card & Van Verification */}
          <div className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-neutral-200 dark:border-neutral-800 group">
              <img
                src="/images/business-card.png"
                alt="Sparkle Auto Spa Mobile Detailing Official Business Card"
                loading="lazy"
                decoding="async"
                width="640"
                height="500"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                onError={(e) => { e.target.src = '/images/hero-poster.jpg'; }}
              />
              {/* Floating Verified Badge */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 flex items-center space-x-2 text-white text-xs sm:text-sm font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Local San Jose Business</span>
              </div>
            </div>

            {/* Loyalty Proof Banner */}
            <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 font-black text-xl">
                ★
              </div>
              <div className="text-xs sm:text-sm">
                <div className="font-bold text-gray-900 dark:text-white">Loyalty Points & Return Discounts</div>
                <div className="text-gray-600 dark:text-neutral-400">Earn points with every visit and get exclusive discounts on your next detailing services!</div>
              </div>
            </div>
          </div>

          {/* Right: Founder Profile & Story */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Meet Your Master Detailer</span>
            </div>

            <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-gray-900 dark:text-white tracking-tight leading-tight">
              Driven by Passion, Defined by Precision
            </h2>

            {/* Owner Quote */}
            <div className="border-l-4 border-blue-600 pl-5 sm:pl-6 py-2 bg-white/50 dark:bg-neutral-900/40 rounded-r-2xl">
              <Quote className="w-6 h-6 text-blue-600 mb-2" aria-hidden="true" />
              <p className="text-gray-700 dark:text-neutral-300 text-sm sm:text-lg italic leading-relaxed">
                "{BUSINESS_INFO.owner.quote}"
              </p>
              <div className="mt-3 text-sm sm:text-base font-black text-blue-600 dark:text-blue-400">
                — {BUSINESS_INFO.owner.name}, {BUSINESS_INFO.owner.role}
              </div>
            </div>

            <p className="text-gray-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
              At <strong>{BUSINESS_INFO.name}</strong>, Carlos Cortez provides complete white-glove mobile detailing across San Jose, Campbell, Santa Clara, and Silicon Valley. From daily commuters needing an intensive deep steam sanitization to exotic sportscars requiring surgical clay bar decontamination and ceramic gloss, every car receives the same uncompromising dedication.
            </p>

            {/* Milestones / Service Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800">
                <div className="text-lg sm:text-xl font-black text-blue-600">100% Mobile</div>
                <div className="text-xs text-gray-500 dark:text-neutral-400">Direct doorstep service in your driveway</div>
              </div>
              <div className="p-3.5 bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800">
                <div className="text-lg sm:text-xl font-black text-blue-600">Bilingual</div>
                <div className="text-xs text-gray-500 dark:text-neutral-400">Servicio en Español e Inglés</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-3">
              <button
                onClick={() => onOpenWizard()}
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all shadow-md active:scale-95"
                aria-label="Request a mobile detail quote"
              >
                Book a Detail Online
              </button>
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="px-6 py-4 rounded-xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 hover:border-blue-500 text-gray-900 dark:text-white font-bold text-base transition-all flex items-center space-x-2"
              >
                <Phone className="w-5 h-5 text-blue-600" />
                <span>Call Carlos: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
