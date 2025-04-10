
import React from 'react';
import { Clock, FileText, Upload } from 'lucide-react';

interface Package {
  title: string;
  duration: string;
  price: number;
  description: string;
  isPopular?: boolean;
}

interface PackagesGridProps {
  onSelectPackage: (pkg: Package) => void;
}

export function PackagesGrid({ onSelectPackage }: PackagesGridProps) {
  const packages: Package[] = [
    {
      title: "Single Session",
      duration: "30 mins",
      price: 999,
      description: "One-time consultation for quick queries"
    },
    {
      title: "Extended Session",
      duration: "60 mins",
      price: 1799,
      description: "Detailed portfolio review and planning",
      isPopular: true
    },
    {
      title: "3-Session Pack",
      duration: "30 mins each",
      price: 2499,
      description: "Regular guidance and follow-ups"
    },
    {
      title: "5-Session Pack",
      duration: "30 mins each",
      price: 3999,
      description: "Comprehensive investment planning"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {packages.map((pkg) => (
        <div 
          key={pkg.title}
          className={`relative p-6 rounded-lg border ${
            pkg.isPopular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
          } hover:shadow-lg transition-shadow cursor-pointer`}
          onClick={() => onSelectPackage(pkg)}
        >
          {pkg.isPopular && (
            <span className="absolute -top-3 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              Popular
            </span>
          )}
          <h3 className="text-lg font-semibold mb-2">{pkg.title}</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <Clock className="h-4 w-4 mr-2" />
            <span>{pkg.duration}</span>
          </div>
          <div className="text-2xl font-bold mb-2">₹{pkg.price}</div>
          <p className="text-gray-600 text-sm">{pkg.description}</p>
        </div>
      ))}
      
      <div className="col-span-full mt-4">
        <h3 className="font-semibold mb-3">Add-ons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center p-4 border rounded-lg">
            <FileText className="h-5 w-5 text-blue-500 mr-3" />
            <div>
              <div className="font-medium">Written Summary</div>
              <div className="text-sm text-gray-600">₹499 extra</div>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-lg">
            <Upload className="h-5 w-5 text-blue-500 mr-3" />
            <div>
              <div className="font-medium">Portfolio Upload</div>
              <div className="text-sm text-gray-600">Pre-session review</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
