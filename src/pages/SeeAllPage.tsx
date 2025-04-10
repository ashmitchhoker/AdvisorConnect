import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SearchBar } from '../components/SearchBar';
import { FilterSection } from '../components/FilterSection';
import { AdvisorCard } from '../components/AdvisorCard';
import type { Advisor } from '../types';

interface SeeAllPageProps {
  type: 'analyst' | 'distributor';
  advisors: Advisor[];
}

export function SeeAllPage({ type, advisors }: SeeAllPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);

  const filteredAdvisors = useMemo(() => {
    return advisors.filter((advisor) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === '' ||
        advisor.name.toLowerCase().includes(searchLower) ||
        (advisor.type === 'analyst' && advisor.sebiNumber?.toLowerCase().includes(searchLower)) ||
        (advisor.type === 'distributor' && advisor.arnNumber?.toLowerCase().includes(searchLower));

      // Language filter
      const matchesLanguage =
        selectedLanguages.length === 0 ||
        selectedLanguages.some((lang) => advisor.languages.includes(lang));

      // Experience filter
      const matchesExperience =
        selectedExperience.length === 0 ||
        selectedExperience.some((exp) => {
          if (exp === '0-5') return advisor.yearsOfExperience <= 5;
          if (exp === '5-10') return advisor.yearsOfExperience > 5 && advisor.yearsOfExperience <= 10;
          return advisor.yearsOfExperience > 10;
        });

      return matchesSearch && matchesLanguage && matchesExperience;
    });
  }, [advisors, searchQuery, selectedLanguages, selectedExperience]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold">
            {type === 'analyst' ? 'SEBI Registered Analysts' : 'Mutual Fund Distributors'}
          </h1>
          <p className="text-gray-600">
            Find and connect with verified financial experts for personalized guidance
          </p>
        </div>

        <div className="mb-8">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={`Search by name or ${
              type === 'analyst' ? 'SEBI registration number' : 'ARN number'
            }`}
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <FilterSection
              selectedLanguages={selectedLanguages}
              selectedExperience={selectedExperience}
              onLanguageChange={setSelectedLanguages}
              onExperienceChange={setSelectedExperience}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="mb-4 text-gray-600">
              {filteredAdvisors.length} {filteredAdvisors.length === 1 ? 'result' : 'results'} found
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredAdvisors.map((advisor) => (
                <AdvisorCard key={advisor.id} advisor={advisor} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}