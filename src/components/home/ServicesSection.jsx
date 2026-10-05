import React from 'react';
import { SERVICES } from '../../data/servicesData';
import { BUSINESS_INFO } from '../../data/businessData';
import { ArrowRight, LayoutGrid, Check, Sparkles, Clock, Droplets } from 'lucide-react';

export default function ServicesSection({ onOpenWizard, onViewAllServices }) {
  const featuredServices = SERVICES.slice(0, 4);

  return (
    <section id="services" className="py-20 sm:py-28 bg-white dark:bg-[#080c14] transition-colors" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Essential Service Packages</span>
          </div>
          <h2 id="services-heading" className="text-3xl sm:text-5xl font-black font-heading text-gray-900 dark:text-white tracking-tight">
            Doorstep Mobile Detailing
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 mt-4 text-base sm:text-xl leading-relaxed">
            Delivered directly to your home or office in San Jose. Meticulous hand wash, steam sanitization, and mirror paint correction.
          </p>

          {/* Water hookup reminder pill */}
          <div className="mt-6 inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-medium">
            <Droplets className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span className="font-bold">Mobile Requirement:</span>
            <span>Customer provides accessible outdoor water hookup; we supply pressure rigs, steam, and chemistry!</span>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-14">
          {featuredServices.map((service) => (
            <article
              key={service.id}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 dark:border-neutral-800 flex flex-col justify-between bg-neutral-900"
              onClick={() => onOpenWizard(service.category, service.title)}
            >
              {/* Card Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} - ${BUSINESS_INFO.name}`}
                  loading="lazy"
                  decoding="async"
                  width="360"
                  height="300"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = '/images/hero-poster.jpg'; }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Price Pill */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs sm:text-sm font-black px-3.5 py-1.5 rounded-full shadow-lg border border-blue-400/30">
                  {service.price}
                </div>

                {/* Duration */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-neutral-200 text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center space-x-1.5 border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-white font-bold text-lg sm:text-xl leading-snug mb-2 font-heading group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-1.5 text-xs text-neutral-400 mb-2">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center space-x-2 active:scale-95"
                  aria-label={`Book ${service.title}`}
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center">
          <button
            onClick={onViewAllServices}
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-neutral-100 font-black text-base sm:text-lg transition-all shadow-lg active:scale-95"
            aria-label="View All Services"
          >
            <LayoutGrid className="w-5 h-5 text-blue-500" />
            <span>Explore All 7 Mobile Services & Packages</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
