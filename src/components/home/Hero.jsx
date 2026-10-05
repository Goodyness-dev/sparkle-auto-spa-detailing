import React from 'react';
import { ChevronRight, Phone, Sparkles, MapPin, Droplets, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';
import { DESIGN_THEME } from '../../data/designTheme';

export default function Hero({ onOpenWizard }) {
  const badgeText = DESIGN_THEME?.copyHooks?.heroBadge || "Doorstep Luxury Mobile Detailing • San Jose";
  const headline = DESIGN_THEME?.copyHooks?.heroHeadline || "Showroom Shine & Ceramic Protection at Your Door";
  const subtitle = DESIGN_THEME?.copyHooks?.heroSubtitle || BUSINESS_INFO.tagline;
  const quickAction = DESIGN_THEME?.copyHooks?.quickActionLabel || "Explore Classic, Executive, Interior Steam & Clay Bar Packages...";

  return (
    <section className="relative overflow-hidden" aria-label="Introduction & Quick Quote">
      {/* Full-width Hero with Preloaded Video / Image Background */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center">
        {/* Background with auto preload and bulletproof image fallback */}
        <div className="absolute inset-0 overflow-hidden bg-[#080c14] bg-[url('/images/hero-poster.jpg')] bg-cover bg-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            poster="/images/hero-poster.jpg"
            aria-hidden="true"
          >
            <source src="/images/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Overlay gradient optimized for crisp text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 w-full">
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            {/* Small badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-blue-600/30 backdrop-blur-md text-white text-xs sm:text-sm font-semibold border border-blue-400/30">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{badgeText}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-white tracking-tight leading-[1.1]">
              {headline}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-2xl text-white/90 max-w-2xl leading-relaxed font-medium">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenWizard()}
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-lg transition-all flex items-center justify-center space-x-2.5 shadow-xl hover:shadow-blue-500/25 active:scale-95"
                aria-label="Book Doorstep Detailing Online"
              >
                <span>Book Mobile Detail</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="px-7 py-4 rounded-xl bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-bold text-lg border border-white/25 transition flex items-center justify-center space-x-2.5 active:scale-95"
                aria-label={`Call Carlos Cortez: ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Key trust badges & water requirement pill */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/90 font-medium">
              <div className="flex items-center space-x-2">
                <div className="flex text-amber-400 text-base" aria-label="5 stars rating">
                  {'★★★★★'.split('').map((_, i) => (
                    <span key={i} className="leading-none">★</span>
                  ))}
                </div>
                <span>5.0 Rating in San Jose</span>
              </div>
              <span className="hidden sm:inline text-white/40">•</span>
              <div className="flex items-center space-x-1.5 text-blue-300">
                <Droplets className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Requires Outdoor Water Spigot</span>
              </div>
              <span className="hidden sm:inline text-white/40">•</span>
              <div className="flex items-center space-x-1.5 text-amber-300">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Earn Loyalty Points</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Quick Action Bar */}
      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10 pb-8 sm:pb-10">
        <div className="bg-white dark:bg-[#101726] rounded-2xl shadow-2xl border border-gray-100 dark:border-neutral-800 p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-3.5 transition-colors">
          <div 
            className="flex items-center space-x-3 flex-1 w-full cursor-pointer"
            onClick={() => onOpenWizard()}
          >
            <div className="flex items-center space-x-3 px-4 py-3 bg-gray-50 dark:bg-[#080c14] rounded-xl border border-gray-200 dark:border-neutral-800 flex-1 hover:border-blue-500 transition">
              <Sparkles className="w-5 h-5 text-blue-500 shrink-0" />
              <span className="text-sm sm:text-base text-gray-700 dark:text-neutral-200 font-medium truncate">
                {quickAction}
              </span>
            </div>
          </div>

          <button
            onClick={() => onOpenWizard()}
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base transition shrink-0 active:scale-95 shadow-md flex items-center justify-center space-x-2"
          >
            <span>Book Online</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
