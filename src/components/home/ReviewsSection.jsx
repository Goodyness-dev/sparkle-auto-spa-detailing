import React from 'react';
import { Star } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ReviewsSection({ onOpenWizard }) {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-stone-50 dark:bg-[#0a0e18] transition-colors" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 id="reviews-heading" className="text-3xl sm:text-5xl font-black font-heading text-gray-900 dark:text-white tracking-tight">
            What Silicon Valley Drivers Say
          </h2>
          <div className="flex items-center justify-center space-x-2.5 mt-3 sm:mt-4">
            <div className="flex text-amber-500" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-500" aria-hidden="true" />
              ))}
            </div>
            <span className="text-gray-700 dark:text-neutral-200 text-base sm:text-lg font-bold">
              5.0 Star Verified Local Reviews in San Jose
            </span>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BUSINESS_INFO.reviews.map((rev, idx) => (
            <article
              key={idx}
              className="bg-white dark:bg-[#101726] border border-gray-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Stars + Source */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex text-amber-500" aria-label={`${rev.rating} out of 5 stars`}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-500" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-neutral-300 bg-gray-100 dark:bg-[#080c14] border border-gray-200 dark:border-neutral-800 px-2.5 py-1 rounded-lg">
                    {rev.source}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 dark:text-neutral-300 text-base sm:text-lg leading-relaxed mb-6 italic font-normal">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-gray-100 dark:border-neutral-800 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg">{rev.author}</h3>
                  <span className="text-gray-500 dark:text-neutral-400 text-xs sm:text-sm">{rev.location}</span>
                </div>
                <span className="text-gray-400 dark:text-neutral-500 text-xs sm:text-sm">{rev.date}</span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={() => onOpenWizard()}
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base sm:text-lg transition-all shadow-md active:scale-95"
            aria-label="Book your mobile detail today"
          >
            Ready? Book Your Doorstep Detail Now
          </button>
        </div>
      </div>
    </section>
  );
}
