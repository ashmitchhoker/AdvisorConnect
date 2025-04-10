
import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Calendar, Clock, Languages, Star, CheckCircle, Briefcase } from 'lucide-react';
import type { Advisor } from '../types';

interface AdvisorProfilePageProps {
  advisors: Advisor[];
}

export function AdvisorProfilePage({ advisors }: AdvisorProfilePageProps) {
  const { id } = useParams();
  const advisor = advisors.find(a => a.id === id);

  if (!advisor) {
    return <div>Advisor not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Section */}
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

          {/* Main Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="md:col-span-2 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">About</h2>
                  <p className="text-gray-600">
                    Experienced {advisor.type === 'analyst' ? 'SEBI Registered Research Analyst' : 'Mutual Fund Distributor'} with {advisor.yearsOfExperience} years of experience in financial markets.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Expertise</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold">Equity Research</h3>
                      <p className="text-sm text-gray-600">Deep analysis of stocks</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold">Portfolio Review</h3>
                      <p className="text-sm text-gray-600">Comprehensive evaluation</p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Book a Consultation</h3>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                    Schedule Call
                  </button>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>30/60 min session</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Languages className="h-4 w-4 mr-2" />
                      <span>{advisor.languages.join(', ')}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span>
                        {advisor.type === 'analyst' 
                          ? `SEBI Registered (${advisor.sebiNumber})`
                          : `ARN Registered (${advisor.arnNumber})`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
