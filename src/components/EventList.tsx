import React from 'react';
import EventCard from './EventCard';
import { eventData } from '../data/eventData';

const EventList = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Popüler Etkinlikler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En çok ilgi gören AI ve teknoloji etkinliklerini keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventData.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#AA4069] text-white font-semibold rounded-xl hover:bg-[#C75085] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Daha Fazla Etkinlik Gör
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventList;