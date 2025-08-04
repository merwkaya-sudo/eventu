import React from 'react';
import { EventData } from '../data/eventData';

const EventCard = ({
  title,
  date,
  location,
  category,
  attendees,
  image,
  url
}: EventData) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block transform transition duration-300 hover:scale-105"
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <span className="inline-block text-xs font-semibold text-white bg-[#AA4069] px-2 py-1 rounded-full mb-2">
            {category}
          </span>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{date} • {location}</p>
          <p className="text-sm text-gray-600 mt-1">{attendees} kişi katılıyor</p>
        </div>
      </div>
    </a>
  );
};

export default EventCard;