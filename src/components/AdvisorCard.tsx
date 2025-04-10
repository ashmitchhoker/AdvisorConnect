import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Languages, CheckCircle } from 'lucide-react';
import type { Advisor } from '../types';

interface AdvisorCardProps {
  advisor: Advisor;
}

export function AdvisorCard({ advisor }: AdvisorCardProps) {
  return (
    <div className="group relative rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <div className="absolute right-4 top-4">
        <button className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-blue-600">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>

      <div className="mb-4 flex items-center space-x-4">
        <img
          src={advisor.imageUrl}
          alt={advisor.name}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{advisor.name}</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Star className="h-4 w-4 text-yellow-400" />
            <span>{advisor.rating.toFixed(1)} ({advisor.reviewCount} reviews)</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span>{advisor.type === 'analyst' ? 'SEBI Registered' : 'ARN Registered'}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm">
          <Languages className="h-4 w-4 text-gray-500" />
          <span>{advisor.languages.join(', ')}</span>
        </div>

        <div className="text-sm text-gray-600">
          {advisor.yearsOfExperience} years of experience
        </div>
      </div>

      <Link 
        to={`/advisor/${advisor.id}`}
        className="mt-4 block w-full rounded-full bg-blue-600 py-2 text-center text-white transition-colors hover:bg-blue-700"
      >
        View Profile
      </Link>
    </div>
  );
}