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
    image: 'https://images.ctfassets.net/07rswh4u2vnb/4amva3p0ZBWlhZw3AfRldm/8a0c8373a97e2f8dc2d7b31ac17005da/AI_Meetup_Thumbnail.png',
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
    image: 'https://images.ctfassets.net/07rswh4u2vnb/2V3yie8TLVEUcuVShn9oLw/72ed92ff294fd251218ae9b1d92cc898/BoaFolks5_Thumbnail.png',
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
    image: 'https://images.ctfassets.net/07rswh4u2vnb/4HLa1BE3vW6MqqhdY5Z3oL/734c9e46950e1d4a58d04ef8a5d84fc5/DIY_AI_Thumbnail.png',
    isOnline: true,
    url: "https://lu.ma/xexdptms"
  },
  {
    id: '4',
    title: "Novus Meetups: Product & Design Talks",
    date: "2024-09-19",
    location: "Online",
    category: 'AI',
    attendees: 400,
    image: 'https://images.ctfassets.net/07rswh4u2vnb/5gfylg2M7zRA7Fl8cZ30YF/5e7e8a31fcf08637b09c9605f0fc59ce/Novus_Meetups_Thumbnail.png',
    isOnline: true,
    url: "https://lu.ma/tla76mad"
  }
]; 