import React, { useState, useEffect } from 'react';
import { 
  SERVICES, 
  SERVICE_CATEGORIES 
} from '../../data/servicesData';
import { 
  Sparkles,
  Crown,
  Shield,
  Wind,
  Zap,
  Sun,
  Wrench,
  Check,
  Clock,
  ArrowRight, 
  ArrowLeft,
  Search,
  Phone,
  Droplets
} from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

const ICON_MAP = {
  Sparkles,
  Crown,
  Shield,
  Wind,
  Zap,
  Sun,
  Wrench
};

export default function AllServicesPage({ onOpenWizard, onBackToHome }) {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-[#080c14] py-10 sm:py-16 px-4 sm:px-6 lg:px-8 pb-28 sm:pb-20 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Back Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-gray-200 dark:border-neutral-800 mb-12">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center space-x-2 text-gray-700 dark:text-neutral-300 hover:text-gray-900 dark:hover:text-white bg-white dark:bg-[#101726] border border-gray-200 dark:border-neutral-800 hover:border-gray-300 px-5 py-2.5 rounded-xl text-sm sm:text-base font-bold transition shadow-sm"
            aria-label="Back to Homepage"
          >
            <ArrowLeft className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center space-x-3 text-sm sm:text-base">
            <span className="text-gray-500 dark:text-neutral-400 hidden sm:inline">Questions for Carlos?</span>
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="text-gray-900 dark:text-white font-bold hover:text-blue-600 dark:hover:text-blue-400 flex items-center space-x-1.5 transition"
              aria-label={`Call Carlos Cortez: ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-6xl font-black font-heading text-gray-900 dark:text-white tracking-tight">
            Complete Detailing Menu
          </h1>
          <p className="text-gray-600 dark:text-neutral-400 mt-4 text-base sm:text-xl leading-relaxed">
            All services performed right in your driveway. Transparent pricing with Sedan, SUV, and Truck options.
          </p>

          <div className="mt-5 inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold">
            <Droplets className="w-4 h-4" />
            <span>Client Location Requirement: Outdoor water hookup required at service address.</span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-12 bg-white dark:bg-[#101726] p-5 rounded-3xl border border-gray-200 dark:border-neutral-800 shadow-sm transition-colors">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2.5 w-full md:w-auto justify-center md:justify-start">
            {SERVICE_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-100 dark:bg-[#1a2336] text-gray-700 dark:text-neutral-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#25324d]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search packages, wash, clay bar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 dark:bg-[#080c14] border border-gray-200 dark:border-neutral-800 rounded-xl pl-11 pr-4 py-3 text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
              aria-label="Search mobile detailing services"
            />
          </div>
        </div>

        {/* Count */}
        <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 dark:text-neutral-400 mb-6 px-1 font-medium">
          <span>Showing {filteredServices.length} of {SERVICES.length} services</span>
          {searchQuery && (
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All Services'); }}
              className="text-blue-600 dark:text-blue-400 underline font-bold"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Sparkles;

            return (
              <article
                key={service.id}
                className="group bg-white dark:bg-[#101726] border border-gray-200 dark:border-neutral-800 hover:border-blue-500 dark:hover:border-blue-500 rounded-3xl p-6 sm:p-7 transition-all hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Price */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-base sm:text-lg font-black text-blue-600 dark:text-blue-400">{service.price}</div>
                      <div className="text-xs text-neutral-400 flex items-center justify-end space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-500 dark:text-blue-400 mb-3">
                    {service.subType}
                  </div>

                  <p className="text-gray-600 dark:text-neutral-300 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Vehicle Pricing Tiers */}
                  <div className="p-3 bg-gray-50 dark:bg-[#080c14] rounded-xl border border-gray-100 dark:border-neutral-800 mb-5 text-xs flex justify-between">
                    <div>
                      <span className="text-gray-500 dark:text-neutral-400">Sedan / Coupe:</span>
                      <span className="font-bold text-gray-900 dark:text-white ml-1.5">{service.sedanPrice}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-neutral-400">SUV / Truck:</span>
                      <span className="font-bold text-gray-900 dark:text-white ml-1.5">{service.suvPrice}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Included In Detail:</div>
                    <ul className="space-y-1.5 text-xs text-gray-600 dark:text-neutral-300">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => onOpenWizard(service.category, service.title)}
                  className="w-full py-3.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base transition-all flex items-center justify-between shadow-md active:scale-95"
                >
                  <span>Book {service.title}</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
