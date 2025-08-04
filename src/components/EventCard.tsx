import React from 'react';
import { EventData } from '../data/eventData';

const EventCard = (props: EventData) => {
  const {
    title,
    date,
    location,
    category,
    attendees,
    image,
    url,
  } = props;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform transform hover:scale-105"
    >
      <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-1">{date}</p>
          <p className="text-sm text-gray-600 mb-1">{location}</p>
          <p className="text-sm text-gray-600 mb-1">{category}</p>
          <p className="text-sm text-gray-600">{attendees} kişi katılıyor</p>
        </div>
      </div>
    </a>
  );
};

export default EventCard;