
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BookingCalendarProps {
  onSelectSlot: (date: string, time: string) => void;
}

export function BookingCalendar({ onSelectSlot }: BookingCalendarProps) {
  const timeSlots = ['08:00 AM', '10:00 AM', '02:00 PM', '04:00 PM', '06:00 PM'];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div className="bg-white p-6 rounded-lg border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Select Date & Time</h3>
        <div className="flex space-x-2">
          <button className="p-1 rounded hover:bg-gray-100">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="p-1 rounded hover:bg-gray-100">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-600">
            {day}
          </div>
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <button
            key={i}
            className="aspect-square rounded-lg border p-2 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500"
          >
            <span className="block text-sm">{i + 10}</span>
          </button>
        ))}
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-medium mb-3">Available Time Slots</h4>
        <div className="grid grid-cols-3 gap-2">
          {timeSlots.map(time => (
            <button
              key={time}
              className="px-3 py-2 text-sm border rounded-lg hover:bg-blue-50 focus:ring-2 focus:ring-blue-500"
              onClick={() => onSelectSlot('2024-04-15', time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
