export interface EventData {
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

export const eventData: EventData[] = [
  {
    id: '1',
    title: "AI Meetup with Microsoft Software Engineer",
    date: "2024-09-12",
    location: "Online",
    category: 'AI',
    attendees: 500,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    isOnline: true,
    url: "https://lu.ma/k8bp2p3a"
  },
  {
    id: '2',
    title: "BoaFolks #5 - Hasan Söylemez ile Tenere'den Nereye; Yapay Zeka Ne Yapar?",
    date: "2024-09-05",
    location: "Online",
    category: 'PM',
    attendees: 300,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    isOnline: true,
    url: "https://lu.ma/tpgtml47"
  },
  {
    id: '3',
    title: "DIY AI – Own Your Intelligence",
    date: "2024-08-28",
    location: "Online",
    category: 'Create Image',
    attendees: 250,
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    isOnline: true,
    url: "https://lu.ma/xexdptms"
  },
  {
    id: '4',
    title: "Novus Meetups: Product & Design Talks",
    date: "2024-09-19",
    location: "Online",
    category: 'Design',
    attendees: 400,
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    isOnline: true,
    url: "https://lu.ma/tla76mad"
  }
]; 