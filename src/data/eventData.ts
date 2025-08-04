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
    image: 'https://images.ctfassets.net/b7nkce0x59hz/3c2wbiDuPudUm2kjRNTMIp/87be90c6fd51e9b6b1d8e6b308847623/AI_Meetup_-_Microsoft_Software_Engineer.png?w=1920&q=50',
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
    image: 'https://images.ctfassets.net/b7nkce0x59hz/6nM6CH8ZnqAI2zpPVLhFQY/acc0b3c05fc61efac763d2ea7b8c02a6/hasan-soylemez.png?w=1920&q=50',
    isOnline: true,
    url: "https://lu.ma/tpgtml47"
  },
  {
    id: '3',
    title: "DIY AI – Own Your Intelligence",
    date: "2024-08-28",
    location: "Online",
    category: 'AI Tools',
    attendees: 250,
    image: 'https://images.ctfassets.net/b7nkce0x59hz/7jjqbYaa0Ao9j3XKrvlbnd/f6b9d1ab6e946c03fc96d0c96973f31b/diy-ai-own-intelligence.png?w=1920&q=50',
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
    image: 'https://images.ctfassets.net/b7nkce0x59hz/38FlJ9Fdu59EuJ0tmyZ5oF/fc3b3d96dcfd3b90d8b5a3a39a0f9323/novus-product-design.png?w=1920&q=50',
    isOnline: true,
    url: "https://lu.ma/tla76mad"
  }
]; 