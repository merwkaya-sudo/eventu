import React from 'react';
import { events } from '../data/events';
import EventCard from './EventCard';

const EventsExample = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Events Example</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            location={event.location}
            url={event.url}
            id={event.id}
            category={event.category}
            attendees={event.attendees}
            image={event.image}
            isOnline={event.isOnline}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsExample; 