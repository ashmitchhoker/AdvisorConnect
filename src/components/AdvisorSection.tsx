import React from 'react';
import { ChevronRight } from 'lucide-react';
import { AdvisorCard } from './AdvisorCard';
import type { Advisor } from '../types';

interface AdvisorSectionProps {
  title: string;
  advisors: Advisor[];
  type: 'analyst' | 'distributor';
}

export function AdvisorSection({ title, advisors, type }: AdvisorSectionProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <a
            href={`/${type}s`}
            className="group flex items-center text-blue-600 hover:text-blue-700"
          >
            See All
            <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {advisors.map((advisor) => (
              <div key={advisor.id} className="w-[300px] flex-none">
                <AdvisorCard advisor={advisor} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}