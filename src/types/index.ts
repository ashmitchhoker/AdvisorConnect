export interface Advisor {
  id: string;
  name: string;
  type: 'analyst' | 'distributor';
  yearsOfExperience: number;
  sebiNumber?: string;
  arnNumber?: string;
  languages: string[];
  imageUrl: string;
  rating: number;
  reviewCount: number;
}

export interface BookingSlot {
  id: string;
  advisorId: string;
  startTime: string;
  duration: 30 | 60;
  price: number;
  available: boolean;
}