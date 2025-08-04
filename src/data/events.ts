export interface Event {
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

export const events: Event[] = [
  {
    id: '1',
    title: "Women in AI: European Edition",
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
    title: "AI Product Manager Summit",
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
    title: "AI & Design Thinking",
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
    title: "The Future of Ethical AI",
    date: "2024-09-19",
    location: "Online",
    category: 'AI',
    attendees: 400,
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    isOnline: true,
    url: "https://lu.ma/tla76mad"
  }
]; 