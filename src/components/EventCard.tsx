import React from 'react';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  attendees: number;
  image: string;
  isOnline?: boolean;
  url?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  location,
  category,
  attendees,
  image,
  isOnline = false,
  url
}) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#AA4069] text-white text-sm font-medium rounded-full shadow-md">
            {category}
          </span>
        </div>
        {/* Online Badge */}
        {isOnline && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full shadow-md">
              Online
            </span>
          </div>
        )}
      </div>

      {/* Event Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#AA4069] transition-colors duration-300">
          {title}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-[#AA4069]" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-[#AA4069]" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2 text-[#AA4069]" />
            <span className="text-sm">{attendees} katılımcı</span>
          </div>
        </div>

        {/* Action Button */}
        <button className="group/btn w-full flex items-center justify-center px-4 py-3 bg-[#AA4069] text-white font-medium rounded-xl hover:bg-[#C75085] transition-all duration-300 transform hover:scale-105">
          Detayları Gör
          <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default EventCard;