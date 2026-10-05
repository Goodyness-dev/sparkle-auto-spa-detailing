import React from 'react';
import { 
  Truck, 
  Wind, 
  Droplets, 
  Award,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

const FEATURES = [
  {
    num: 1,
    title: "100% Mobile Doorstep Rig",
    description: "We travel directly to your home or office driveway across San Jose & Silicon Valley. Zero hassle or waiting in lines.",
    icon: Truck,
  },
  {
    num: 2,
    title: "Commercial Steam Sanitization",
    description: "Heated 220°F antibacterial steam lifts ground-in dirt, eliminates bacteria, and deodorizes cabin fabrics.",
    icon: Wind,
  },
  {
    num: 3,
    title: "Scratch-Safe Snow Foam Wash",
    description: "pH-neutral active foam bath, two-bucket hand wash with grit guards, and ultra-plush microfiber towels.",
    icon: Droplets,
  },
  {
    num: 4,
    title: "Loyalty Points & Discounts",
    description: "Earn service points on every booking and unlock recurring discounts on executive packages and ceramic treatments.",
    icon: Award,
  },
];

export default function AmenitiesSection({ onOpenWizard }) {
  return (
    <section id="amenities" className="py-20 sm:py-28 bg-white dark:bg-[#080c14] transition-colors" aria-labelledby="amenities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Interior Detailing Steam Shot */}
          <div className="space-y-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-neutral-800 relative group">
              <img
                src="/images/service-interior.jpg"
                alt="Heated steam interior extraction and leather rejuvenation by Sparkle Auto Spa"
                loading="lazy"
                decoding="async"
                width="640"
                height="480"
                className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.src = '/images/hero-poster.jpg'; }}
              />
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-white text-xs font-bold flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Interior Steam Extraction</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-3">
                <Wind className="w-6 h-6 text-blue-600 shrink-0" aria-hidden="true" />
                <span>Deep Leather & Fabric Rejuvenation</span>
              </h3>
              <p className="text-gray-600 dark:text-neutral-300 text-sm sm:text-base mt-2 leading-relaxed">
                We remove tough spills, embedded pet hair, and road grime using commercial hot-water extraction and nourishing non-greasy leather balms with UV protection.
              </p>
            </div>
          </div>

          {/* Right: Numbered Features Grid */}
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
              <span>Why Choose Sparkle Auto Spa</span>
            </div>
            <h2 id="amenities-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-gray-900 dark:text-white tracking-tight mb-3">
              The Sparkle Auto Spa Difference
            </h2>
            <p className="text-gray-600 dark:text-neutral-400 text-base sm:text-lg mb-8">
              Reliable doorstep convenience, premium car-care chemistry, and personal craftsmanship by Carlos Cortez.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={feature.num} 
                    className="p-5 sm:p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all bg-stone-50/60 dark:bg-[#101726]"
                  >
                    <div className="flex items-center space-x-3.5 mb-3">
                      <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-black shrink-0">
                        {feature.num}
                      </span>
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg mb-1.5">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <button
                onClick={() => onOpenWizard()}
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base sm:text-lg transition-all shadow-md active:scale-95"
                aria-label={`Book your mobile detail with ${BUSINESS_INFO.name}`}
              >
                Schedule Doorstep Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
