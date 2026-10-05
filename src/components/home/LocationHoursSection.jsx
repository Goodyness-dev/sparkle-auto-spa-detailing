import React from 'react';
import { MapPin, Clock, Phone, ExternalLink, Droplets, Award, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, isOpenNow } from '../../data/businessData';

export default function LocationHoursSection({ onOpenWizard }) {
  const shopOpen = isOpenNow();
  const currentDayIndex = new Date().getDay();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayName = dayNames[currentDayIndex];

  return (
    <section id="location" className="py-20 sm:py-28 bg-white dark:bg-[#080c14] transition-colors" aria-labelledby="location-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 id="location-heading" className="text-3xl sm:text-5xl font-black font-heading text-gray-900 dark:text-white tracking-tight">
            Mobile Coverage & Hours
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 mt-4 text-base sm:text-xl leading-relaxed">
            We operate throughout San Jose and neighboring South Bay cities. Direct doorstep convenience at your home or office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Hours & Contact Card */}
          <div className="lg:col-span-6 bg-white dark:bg-[#101726] border border-gray-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm flex flex-col justify-between transition-colors">
            <div>
              {/* Open/Closed Status */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-[#080c14] border border-gray-100 dark:border-neutral-800 mb-6">
                <div className="flex items-center space-x-3.5">
                  <span className={`w-3.5 h-3.5 rounded-full ${shopOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} aria-hidden="true" />
                  <div>
                    <span className={`font-bold text-base sm:text-lg block ${shopOpen ? 'text-emerald-700 dark:text-emerald-400' : 'text-amber-700 dark:text-amber-400'}`}>
                      {shopOpen ? 'Mobile Detailing In Service Now' : 'Currently Off-Duty / In Transit'}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-neutral-400">Today is {currentDayName} (Online Booking Open 24/7)</span>
                  </div>
                </div>
                <Clock className="w-6 h-6 text-gray-400" aria-hidden="true" />
              </div>

              {/* Weekly Hours Table */}
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                  Service Schedule
                </h3>
                <div className="divide-y divide-gray-100 dark:divide-gray-800 text-sm sm:text-base">
                  {BUSINESS_INFO.hours.map((h) => {
                    const isToday = h.day.toLowerCase() === currentDayName.toLowerCase();
                    return (
                      <div
                        key={h.day}
                        className={`py-2.5 px-3 flex justify-between items-center rounded-xl ${
                          isToday 
                            ? 'bg-blue-500/10 font-semibold text-blue-600 dark:text-blue-400' 
                            : 'text-gray-700 dark:text-neutral-300'
                        }`}
                      >
                        <span className={isToday ? 'font-bold' : ''}>
                          {h.day}
                          {isToday && (
                            <span className="ml-2 text-[10px] uppercase px-2 py-0.5 rounded-md bg-blue-600 text-white font-bold">
                              Today
                            </span>
                          )}
                        </span>
                        <div className="text-right">
                          <span className={h.open === 'Closed' ? 'text-neutral-400 font-medium' : 'font-bold text-gray-900 dark:text-white'}>
                            {h.open === 'Closed' ? 'Closed' : `${h.open} – ${h.close}`}
                          </span>
                          {h.note && (
                            <span className="text-xs text-amber-600 dark:text-amber-400 block font-normal">({h.note})</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-5 border-t border-gray-100 dark:border-gray-800 space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <div className="flex items-center space-x-3">
                  <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="font-black text-gray-900 dark:text-white hover:text-blue-600 text-base">
                    {BUSINESS_INFO.phone}
                  </a>
                  <span className="text-xs text-gray-400">• Secondary: {BUSINESS_INFO.secondaryPhone}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-blue-600 shrink-0" />
                <a 
                  href={BUSINESS_INFO.facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center space-x-1"
                >
                  <span>Facebook: {BUSINESS_INFO.facebookHandle}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Service Radius & Water Hookup Details */}
          <div className="lg:col-span-6 bg-white dark:bg-[#101726] border border-gray-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm flex flex-col justify-between transition-colors">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl text-gray-900 dark:text-white">
                    Silicon Valley Service Radius
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-neutral-400">Doorstep mobile detailing dispatched throughout:</p>
                </div>
              </div>

              {/* Service Areas Pills */}
              <div className="flex flex-wrap gap-2">
                {BUSINESS_INFO.serviceAreas.map(city => (
                  <span 
                    key={city}
                    className="px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-[#080c14] border border-gray-200 dark:border-neutral-800 text-gray-800 dark:text-neutral-200 text-xs sm:text-sm font-semibold"
                  >
                    📍 {city}
                  </span>
                ))}
              </div>

              {/* Water hookup callout */}
              <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-2">
                <div className="flex items-center space-x-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
                  <Droplets className="w-4 h-4 text-amber-600" />
                  <span>Client Location Requirements</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-neutral-300 leading-relaxed">
                  Only homes or workplaces with an accessible outdoor water hookup (standard garden spigot). We carry commercial power, pressure lines, hot steam extractors, dual-action orbital polishers, and scratch-safe chemistry.
                </p>
              </div>

              {/* Loyalty Reward Program Box */}
              <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 space-y-2">
                <div className="flex items-center space-x-2 text-blue-800 dark:text-blue-300 font-bold text-sm">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>Exclusive Loyalty Rewards</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-neutral-300 leading-relaxed">
                  Earn points with every completed detail! Repeat customers unlock direct discounts on executive details and ceramic sealants.
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenWizard()}
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-base transition-all shadow-lg active:scale-95 text-center"
            >
              Book Your Mobile Detail in San Jose
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
