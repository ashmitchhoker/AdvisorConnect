
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Calendar, Clock, Languages, Star, CheckCircle, Briefcase, ChevronDown } from 'lucide-react';
import { PackagesGrid } from '../components/PackagesGrid';
import { BookingCalendar } from '../components/BookingCalendar';
import type { Advisor } from '../types';

interface AdvisorProfilePageProps {
  advisors: Advisor[];
}

export function AdvisorProfilePage({ advisors }: AdvisorProfilePageProps) {
  const { id } = useParams();
  const advisor = advisors.find(a => a.id === id);
  const [showBooking, setShowBooking] = useState(false);
  const [expandedAbout, setExpandedAbout] = useState(false);

  if (!advisor) {
    return <div>Advisor not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="bg-blue-600 text-white p-8">
                <div className="flex items-center space-x-6">
                  <img
                    src={advisor.imageUrl}
                    alt={advisor.name}
                    className="w-32 h-32 rounded-full border-4 border-white"
                  />
                  <div>
                    <h1 className="text-3xl font-bold">{advisor.name}</h1>
                    <div className="flex items-center mt-2 space-x-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-1" />
                        <span>{advisor.rating.toFixed(1)} ({advisor.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-5 w-5 mr-1" />
                        <span>{advisor.yearsOfExperience} years experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {advisor.type === 'analyst' ? 'SEBI Registered' : 'ARN Registered'}
                  </span>
                  <div className="flex items-center text-gray-600">
                    <Languages className="h-4 w-4 mr-1" />
                    <span>{advisor.languages.join(', ')}</span>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <h2 className="text-xl font-semibold mb-3">About Me</h2>
                  <p className={`text-gray-600 ${!expandedAbout && 'line-clamp-3'}`}>
                    Experienced financial advisor with a proven track record in helping clients achieve their investment goals.
                    Specializing in comprehensive financial planning, retirement planning, and investment management.
                    My approach combines technical analysis with a deep understanding of market fundamentals.
                  </p>
                  <button
                    onClick={() => setExpandedAbout(!expandedAbout)}
                    className="text-blue-600 flex items-center mt-2"
                  >
                    {expandedAbout ? 'Show Less' : 'Read More'}
                    <ChevronDown className={`h-4 w-4 ml-1 transform ${expandedAbout && 'rotate-180'}`} />
                  </button>
                </div>

                {!showBooking && (
                  <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-6">Available Packages</h2>
                    <PackagesGrid onSelectPackage={() => setShowBooking(true)} />
                  </div>
                )}

                {showBooking && (
                  <div className="mt-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold">Book Your Session</h2>
                      <button
                        onClick={() => setShowBooking(false)}
                        className="text-blue-600 text-sm"
                      >
                        ← Back to packages
                      </button>
                    </div>
                    <BookingCalendar onSelectSlot={() => {}} />
                  </div>
                )}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Client Reviews</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="border-b pb-4 last:border-0">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className="h-4 w-4" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">1 month ago</span>
                    </div>
                    <p className="text-gray-600">
                      Excellent advisor! Provided clear, actionable insights that helped me make informed investment decisions.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sticky CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Booking</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>30/60 min sessions available</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Next available: Today, 4:00 PM</span>
                </div>
              </div>
              <button
                onClick={() => setShowBooking(true)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
