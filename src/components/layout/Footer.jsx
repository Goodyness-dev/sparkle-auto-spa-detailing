import React from 'react';
import { Phone, MapPin, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';
import { DESIGN_THEME } from '../../data/designTheme';

export default function Footer({ onOpenWizard, onNavigate }) {
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    if (target === 'services') {
      if (onNavigate) onNavigate('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (onNavigate) onNavigate('home');
    setTimeout(() => {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-black text-neutral-400 text-sm sm:text-base pb-16 sm:pb-0 border-t border-neutral-900" role="contentinfo">
      {/* Pre-footer CTA Bar */}
      <div className="bg-brand-primary py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-4xl font-black font-heading text-white tracking-tight">
              Ready to experience exceptional service with {BUSINESS_INFO.name}?
            </h3>
            <p className="text-white/90 mt-2 text-sm sm:text-lg">
              Get an honest, transparent estimate or consultation in under 2 minutes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full md:w-auto shrink-0">
            <button
              onClick={() => onOpenWizard()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-brand-primary font-bold text-base hover:bg-gray-50 transition shadow-md active:scale-95 text-center"
              aria-label="Get a Free Quote Now"
            >
              Get a Free Quote
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-black/25 hover:bg-black/40 text-white font-bold text-base transition border border-white/20 flex items-center justify-center space-x-2.5 active:scale-95 text-center"
              aria-label={`Call ${BUSINESS_INFO.name} at ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt={`${BUSINESS_INFO.name} Logo`} 
              width="160"
              height="40"
              loading="lazy"
              decoding="async"
              className="h-10 w-auto object-contain brightness-200" 
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span className="font-heading font-black text-white text-base sm:text-lg">
              {BUSINESS_INFO.name.toUpperCase()}
            </span>
          </div>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {BUSINESS_INFO.tagline || 'Dedicated to delivering reliable, high-caliber service with honesty and seasoned precision.'}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm sm:text-base uppercase tracking-wider mb-4 font-heading">Quick Links</h4>
          <ul className="space-y-2.5 text-sm sm:text-base">
            {[
              { label: 'All Services Catalog', target: 'services' },
              { label: 'About Our Team', target: '#about' },
              { label: 'Facility Amenities', target: '#amenities' },
              { label: 'Hours & Location Map', target: '#location' },
              { label: 'Verified Reviews', target: '#reviews' },
            ].map(link => (
              <li key={link.label}>
                <button 
                  onClick={(e) => handleLinkClick(e, link.target)} 
                  className="hover:text-white transition text-gray-300 hover:underline text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-white font-bold text-sm sm:text-base uppercase tracking-wider mb-4 font-heading">Operating Hours</h4>
          <div className="space-y-2 text-sm sm:text-base">
            {BUSINESS_INFO.hours.slice(0, 3).map(h => (
              <div key={h.day} className="flex justify-between">
                <span>{h.day}</span>
                <span className="text-white font-semibold">{h.open === 'Closed' ? 'Closed' : `${h.open} – ${h.close}`}</span>
              </div>
            ))}
            <div className="pt-1">
              <button 
                onClick={(e) => handleLinkClick(e, '#location')} 
                className="text-xs text-brand-primary hover:underline font-semibold"
              >
                View Complete Schedule →
              </button>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-sm sm:text-base uppercase tracking-wider mb-4 font-heading">Contact Us</h4>
          <address className="not-italic space-y-3 text-sm sm:text-base">
            <div className="flex items-start space-x-2.5">
              <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-gray-300">
                {BUSINESS_INFO.address.street}<br />
                {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
              </span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Phone className="w-5 h-5 text-brand-primary shrink-0" aria-hidden="true" />
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`} 
                className="text-white hover:text-brand-primary font-bold transition"
                aria-label={`Call phone: ${BUSINESS_INFO.phone}`}
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>
            <a
              href={BUSINESS_INFO.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-brand-primary hover:underline font-bold pt-1"
              aria-label="Open directions in Google Maps"
            >
              <span>Get Driving Directions</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 px-4 text-center text-xs sm:text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} {BUSINESS_INFO.legalName}. All rights reserved.</span>
          <div className="flex items-center space-x-4">
            <span>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} • Verified Local Service</span>
            <span>•</span>
            <button
              onClick={() => onNavigate('admin')}
              className="text-neutral-500 hover:text-brand-primary transition underline underline-offset-2"
            >
              Admin Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
