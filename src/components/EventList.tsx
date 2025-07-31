import React from 'react';
import EventCard from './EventCard';

const EventList = () => {
  const events = [
    {
      id: '1',
      title: 'AI & Machine Learning Summit 2024',
      date: '15 Mart 2024',
      location: 'İstanbul Kongre Merkezi',
      category: 'AI',
      attendees: 1250,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      isOnline: false
    },
    {
      id: '2',
      title: 'React Developer Conference',
      date: '22 Mart 2024',
      location: 'Online',
      category: 'Developer',
      attendees: 850,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      isOnline: true
    },
    {
      id: '3',
      title: 'Product Management Workshop',
      date: '28 Mart 2024',
      location: 'Ankara Teknokent',
      category: 'PM',
      attendees: 320,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      isOnline: false
    },
    {
      id: '4',
      title: 'Creative Design Masterclass',
      date: '5 Nisan 2024',
      location: 'İzmir Tasarım Merkezi',
      category: 'Create Image',
      attendees: 180,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      isOnline: false
    },
    {
      id: '5',
      title: 'Blockchain & Web3 Summit',
      date: '12 Nisan 2024',
      location: 'Online',
      category: 'Developer',
      attendees: 950,
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      isOnline: true
    },
    {
      id: '6',
      title: 'UX/UI Design Trends 2024',
      date: '18 Nisan 2024',
      location: 'Bursa Teknoloji Merkezi',
      category: 'Create Image',
      attendees: 420,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      isOnline: false
    }
  ];

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
          {events.map((event) => (
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