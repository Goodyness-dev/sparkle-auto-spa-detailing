import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  MapPin, 
  Mail, 
  User, 
  Phone, 
  AlertCircle, 
  Loader2,
  CheckCircle2,
  Droplets,
  Sparkles
} from 'lucide-react';
import { submitQuoteRequest } from '../../services/quoteService';
import { BUSINESS_INFO } from '../../data/businessData';

const VEHICLE_TYPES = [
  { id: 'sedan', label: 'Coupe / Sedan', desc: 'Standard 2-door or 4-door passenger car' },
  { id: 'suv-compact', label: 'Compact / Mid-Size SUV', desc: 'RAV4, CR-V, Model Y, Macan, etc.' },
  { id: 'suv-large', label: 'Full-Size SUV / Truck / Van', desc: 'Suburban, Tahoe, F-150, Escalade, etc.' }
];

const PACKAGES = [
  { id: 'classic', name: 'Classic Package', price: 'From $85', desc: 'Foam hand wash, wheel deep clean, tire dressing, interior blowout & thorough vacuum' },
  { id: 'executive', name: 'Executive Package', price: 'From $175', desc: 'Everything in Classic + heated carpet extraction, leather conditioning, clay bar & ceramic spray' },
  { id: 'exterior-clay-wax', name: 'Full Exterior Detail (Clay Bar & Wax)', price: 'From $125', desc: 'Chemical de-iron, fine clay bar treatment, machine buff & protective high-gloss wax' },
  { id: 'interior-clean', name: 'Full Interior Cleaning & Sanitization', price: 'From $115', desc: 'Hot-water shampoo, leather deep scrub, pet hair eradication, 220°F steam sanitize' },
  { id: 'paint-correction', name: 'Paint Correction & Swirl Removal', price: 'From $275', desc: 'Dual-action machine polish removing 75-90%+ swirl marks and restoring liquid mirror finish' }
];

const ADDONS = [
  { id: 'headlight', name: 'Headlight Restoration ($65 / Pair)' },
  { id: 'engine-bay', name: 'Engine Bay Steam Clean & Satin Dressing ($50)' },
  { id: 'excessive-pet-hair', name: 'Heavy Pet Hair / Sand Extraction ($40)' }
];

export default function QuoteWizardModal({ isOpen, onClose, initialCategory = null, initialService = null }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    vehicleType: 'sedan',
    selectedPackage: 'executive',
    addons: [],
    makeModelYear: '',
    serviceAddress: '',
    city: 'San Jose',
    hasWaterHookup: true,
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    details: '',
    name: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (initialService) {
        const found = PACKAGES.find(p => p.name.toLowerCase().includes(initialService.toLowerCase()));
        if (found) {
          setFormData(prev => ({ ...prev, selectedPackage: found.id }));
        }
      }
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(() => {
        setCurrentStep(1);
        setSubmissionResult(null);
        setErrorMsg('');
      }, 300);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, initialService]);

  if (!isOpen) return null;

  const toggleAddon = (id) => {
    setFormData(prev => {
      const exists = prev.addons.includes(id);
      return {
        ...prev,
        addons: exists ? prev.addons.filter(a => a !== id) : [...prev.addons, id]
      };
    });
  };

  const handleNext = () => {
    setErrorMsg('');
    if (currentStep === 1) {
      if (!formData.selectedPackage) {
        setErrorMsg('Please select a detailing package.');
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.serviceAddress.trim()) {
        setErrorMsg('Please enter your service address in San Jose / Silicon Valley.');
        return;
      }
      if (!formData.hasWaterHookup) {
        setErrorMsg('An accessible outdoor water hookup is required for mobile detailing.');
        return;
      }
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and phone number so Carlos can confirm your appointment.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      serviceCategory: 'Mobile Auto Detailing',
      detailedService: PACKAGES.find(p => p.id === formData.selectedPackage)?.name || formData.selectedPackage,
      make: formData.makeModelYear || 'Vehicle',
      modelAndYear: formData.vehicleType,
      details: `Address: ${formData.serviceAddress}, ${formData.city} | Water Hookup: ${formData.hasWaterHookup ? 'YES' : 'NO'} | Preferred: ${formData.preferredDate} (${formData.preferredTime}) | Add-ons: ${formData.addons.join(', ') || 'None'} | Notes: ${formData.details}`,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      location: `${formData.serviceAddress}, ${formData.city}, CA`
    };

    try {
      const result = await submitQuoteRequest(payload);
      setSubmissionResult(result);
    } catch (err) {
      setErrorMsg(err.message || 'Error submitting booking request. Please call directly at (408) 630-5775.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0c101c] rounded-3xl shadow-2xl border border-gray-200 dark:border-neutral-800 overflow-hidden text-gray-900 dark:text-neutral-100">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-gray-100 dark:border-neutral-800 flex items-center justify-between bg-gray-50/50 dark:bg-[#101726]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black font-heading leading-tight">
                {submissionResult ? 'Booking Request Sent!' : 'Book Doorstep Detailing'}
              </h2>
              <p className="text-xs text-gray-500 dark:text-neutral-400">
                {submissionResult ? 'Carlos Cortez will confirm shortly' : `Step ${currentStep} of 3 • Sparkle Auto Spa`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {errorMsg && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-sm flex items-center space-x-2.5">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {submissionResult ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-black font-heading text-gray-900 dark:text-white">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-gray-600 dark:text-neutral-300 mt-2 text-base max-w-md mx-auto">
                  Carlos Cortez received your booking request for <strong>{PACKAGES.find(p => p.id === formData.selectedPackage)?.name}</strong> in {formData.city}. You will receive a confirmation call or SMS shortly.
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-[#101726] rounded-2xl border border-gray-100 dark:border-neutral-800 text-xs sm:text-sm text-gray-500 dark:text-neutral-400 max-w-md mx-auto">
                Need instant assistance? Call Carlos directly at <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="font-bold text-blue-600 dark:text-blue-400 underline">{BUSINESS_INFO.phone}</a>.
              </div>

              <button
                onClick={onClose}
                className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition shadow-md"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div>
              {/* STEP 1: Vehicle & Package */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-neutral-400 mb-2">
                      1. Select Vehicle Size
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {VEHICLE_TYPES.map(vt => (
                        <div
                          key={vt.id}
                          onClick={() => setFormData({ ...formData, vehicleType: vt.id })}
                          className={`p-4 rounded-2xl border cursor-pointer transition text-left ${
                            formData.vehicleType === vt.id
                              ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 text-blue-900 dark:text-white ring-2 ring-blue-500/20'
                              : 'border-gray-200 dark:border-neutral-800 hover:border-gray-300'
                          }`}
                        >
                          <div className="font-bold text-sm sm:text-base">{vt.label}</div>
                          <div className="text-xs text-gray-500 dark:text-neutral-400 mt-1">{vt.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-neutral-400 mb-2">
                      2. Choose Detailing Package
                    </label>
                    <div className="space-y-3">
                      {PACKAGES.map(pkg => (
                        <div
                          key={pkg.id}
                          onClick={() => setFormData({ ...formData, selectedPackage: pkg.id })}
                          className={`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
                            formData.selectedPackage === pkg.id
                              ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 text-blue-900 dark:text-white ring-2 ring-blue-500/20'
                              : 'border-gray-200 dark:border-neutral-800 hover:border-gray-300'
                          }`}
                        >
                          <div>
                            <div className="font-bold text-sm sm:text-base flex items-center space-x-2">
                              <span>{pkg.name}</span>
                              <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-blue-600 text-white">{pkg.price}</span>
                            </div>
                            <div className="text-xs text-gray-500 dark:text-neutral-400 mt-1">{pkg.desc}</div>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ml-3 ${
                            formData.selectedPackage === pkg.id ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 dark:border-neutral-700'
                          }`}>
                            {formData.selectedPackage === pkg.id && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-neutral-400 mb-2">
                      Optional Add-On Enhancements
                    </label>
                    <div className="space-y-2">
                      {ADDONS.map(addon => (
                        <label
                          key={addon.id}
                          className="flex items-center space-x-3 p-3 rounded-xl border border-gray-100 dark:border-neutral-800/80 bg-gray-50/50 dark:bg-[#101726] cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.addons.includes(addon.id)}
                            onChange={() => toggleAddon(addon.id)}
                            className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-xs sm:text-sm font-medium">{addon.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Location & Water Hookup */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-neutral-400 mb-1.5">
                      Service Street Address *
                    </label>
                    <div className="relative">
                      <MapPin className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="e.g. 1420 Almaden Expressway"
                        value={formData.serviceAddress}
                        onChange={(e) => setFormData({ ...formData, serviceAddress: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-[#101726] border border-gray-200 dark:border-neutral-800 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-neutral-400 mb-1.5">
                        City / Area
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#101726] border border-gray-200 dark:border-neutral-800 text-sm focus:outline-none focus:border-blue-500"
                      >
                        {BUSINESS_INFO.serviceAreas.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-neutral-400 mb-1.5">
                        Vehicle Year / Make / Model
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2022 Porsche 911"
                        value={formData.makeModelYear}
                        onChange={(e) => setFormData({ ...formData, makeModelYear: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#101726] border border-gray-200 dark:border-neutral-800 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Water Hookup Requirement Confirmation */}
                  <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border-2 border-blue-200 dark:border-blue-900/60 space-y-2">
                    <div className="flex items-start space-x-3">
                      <Droplets className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-sm text-gray-900 dark:text-white">Water Hookup Required</div>
                        <div className="text-xs text-gray-600 dark:text-neutral-300">
                          Because we wash and steam detail on-site, a standard outdoor water spigot / hose hookup must be available at the service location.
                        </div>
                      </div>
                    </div>
                    <label className="flex items-center space-x-2.5 pt-2 cursor-pointer font-bold text-xs sm:text-sm text-blue-950 dark:text-blue-200">
                      <input
                        type="checkbox"
                        checked={formData.hasWaterHookup}
                        onChange={(e) => setFormData({ ...formData, hasWaterHookup: e.target.checked })}
                        className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span>Yes, an outdoor water hookup is accessible at this address</span>
                    </label>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-neutral-400 mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#101726] border border-gray-200 dark:border-neutral-800 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-neutral-400 mb-1.5">
                        Preferred Window
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#101726] border border-gray-200 dark:border-neutral-800 text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option>Morning (8:00 AM - 12:00 PM)</option>
                        <option>Afternoon (12:00 PM - 4:00 PM)</option>
                        <option>Late Afternoon (4:00 PM - 6:00 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Customer Details */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-neutral-400 mb-1.5">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Carlos Mendoza"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-[#101726] border border-gray-200 dark:border-neutral-800 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-neutral-400 mb-1.5">
                        Phone Number (For SMS Confirmation) *
                      </label>
                      <div className="relative">
                        <Phone className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          placeholder="(408) 555-0192"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-[#101726] border border-gray-200 dark:border-neutral-800 text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-neutral-400 mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          placeholder="name@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-[#101726] border border-gray-200 dark:border-neutral-800 text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-neutral-400 mb-1.5">
                      Specific Notes or Focus Areas (Optional)
                    </label>
                    <textarea
                      rows="3"
                      placeholder="e.g. Stubborn coffee stain on driver seat, heavy brake dust on front wheels, dog hair in trunk..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-[#101726] border border-gray-200 dark:border-neutral-800 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Booking Summary Box */}
                  <div className="p-4 bg-gray-50 dark:bg-[#101726] rounded-2xl border border-gray-100 dark:border-neutral-800 text-xs space-y-1.5">
                    <div className="font-bold text-gray-900 dark:text-white">Summary:</div>
                    <div className="text-gray-600 dark:text-neutral-300">
                      • Package: <strong>{PACKAGES.find(p => p.id === formData.selectedPackage)?.name}</strong> ({PACKAGES.find(p => p.id === formData.selectedPackage)?.price})
                    </div>
                    <div className="text-gray-600 dark:text-neutral-300">
                      • Address: {formData.serviceAddress || 'Address not entered yet'}, {formData.city} (Water Hookup: Yes)
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-neutral-800 mt-6">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-800 text-sm font-bold flex items-center space-x-1.5 transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : <div />}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center space-x-2 transition shadow-md active:scale-95"
                  >
                    <span>Continue to Step {currentStep + 1}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-black text-sm sm:text-base flex items-center space-x-2 transition shadow-lg active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Confirming Booking...</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Confirm & Dispatch Booking</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
