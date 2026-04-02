export type DealScore = "excellent" | "good" | "fair" | "high" | "very-high";

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  condition: string;
  location: string;
  dealScore: DealScore;
  isBoosted?: boolean;
  isLiked?: boolean;
  seller: {
    id: string;
    name: string;
    avatar: string;
    verified: boolean;
    rating: number;
    reviews: number;
  };
}

export interface Auction {
  id: string;
  title: string;
  currentBid: number;
  image: string;
  endsAt: Date;
  bidCount: number;
  location: string;
}

export interface LiveSession {
  id: string;
  seller: {
    name: string;
    avatar: string;
  };
  thumbnail: string;
  isLive: boolean;
  viewerCount?: number;
  scheduledFor?: Date;
}

export const categories = [
  { 
    id: "vetements", 
    label: "Vêtements", 
    image: "https://images.unsplash.com/photo-1719552979950-f35958f97ebe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjB3YXJkcm9iZXxlbnwxfHx8fDE3NzQ5ODMyMTB8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  { 
    id: "chaussures", 
    label: "Chaussures", 
    image: "https://images.unsplash.com/photo-1734956093501-811018732398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzJTIwZm9vdHdlYXJ8ZW58MXx8fHwxNzc0OTQ2OTAyfDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  { 
    id: "vehicules", 
    label: "Véhicules", 
    image: "https://images.unsplash.com/photo-1632979676233-fa62116edc09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB2ZWhpY2xlc3xlbnwxfHx8fDE3NzUwMTQxMzF8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  { 
    id: "electronique", 
    label: "Électronique", 
    image: "https://images.unsplash.com/photo-1758186386318-42f7fb10f465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZWxlY3Ryb25pY3MlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NDg4NzU4OXww&ixlib=rb-4.1.0&q=80&w=400"
  },
  { 
    id: "maison", 
    label: "Maison", 
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc0OTUwOTg4fDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  { 
    id: "sport", 
    label: "Sport", 
    image: "https://images.unsplash.com/photo-1658848507056-24ba67502b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBlcXVpcG1lbnQlMjBmaXRuZXNzfGVufDF8fHx8MTc3NTAxMjI4N3ww&ixlib=rb-4.1.0&q=80&w=400"
  },
  { 
    id: "luxe", 
    label: "Luxe", 
    image: "https://images.unsplash.com/photo-1741288070480-914dfbc642e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwd2F0Y2hlc3xlbnwxfHx8fDE3NzUwMTQxMzJ8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  { 
    id: "enfants", 
    label: "Enfants", 
    image: "https://images.unsplash.com/photo-1504484656217-38f8ffc617f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwdG95cyUyMGNoaWxkcmVufGVufDF8fHx8MTc3NTAxNDEzMnww&ixlib=rb-4.1.0&q=80&w=400"
  },
  { 
    id: "autre", 
    label: "Autre", 
    image: "https://images.unsplash.com/photo-1656543802898-41c8c46683a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkYm9hcmQlMjBib3glMjBwYWNrYWdlfGVufDF8fHx8MTc3NTAxNDEzM3ww&ixlib=rb-4.1.0&q=80&w=400"
  },
];

export const dealScoreConfig = {
  excellent: {
    label: "Excellente affaire",
    color: "bg-[#10B981]",
    textColor: "text-white",
  },
  good: {
    label: "Bonne affaire",
    color: "bg-[#10B981]",
    textColor: "text-white",
  },
  fair: {
    label: "Prix juste",
    color: "bg-[#F59E0B]",
    textColor: "text-white",
  },
  high: {
    label: "Légèrement au-dessus",
    color: "bg-[#F59E0B]",
    textColor: "text-white",
  },
  "very-high": {
    label: "Au-dessus du marché",
    color: "bg-[#EF4444]",
    textColor: "text-white",
  },
};

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "iPhone 13 Pro 128GB",
    price: 650,
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400",
    condition: "Très bon état",
    location: "Nice",
    dealScore: "good",
    isBoosted: true,
    seller: {
      id: "seller1",
      name: "Marie L.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      verified: true,
      rating: 4.8,
      reviews: 23,
    },
  },
  {
    id: "2",
    title: "Sac Louis Vuitton Neverfull",
    price: 890,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
    condition: "Bon état",
    location: "Cannes",
    dealScore: "excellent",
    seller: {
      id: "seller2",
      name: "Sophie M.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      verified: true,
      rating: 4.9,
      reviews: 45,
    },
  },
  {
    id: "3",
    title: "Veste en cuir Zara",
    price: 45,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    condition: "Très bon état",
    location: "Antibes",
    dealScore: "good",
    seller: {
      id: "seller3",
      name: "Lucas D.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      verified: false,
      rating: 4.5,
      reviews: 12,
    },
  },
  {
    id: "4",
    title: "PlayStation 5",
    price: 520,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
    condition: "Neuf",
    location: "Monaco",
    dealScore: "fair",
    seller: {
      id: "seller4",
      name: "Thomas B.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      verified: true,
      rating: 4.7,
      reviews: 18,
    },
  },
  {
    id: "5",
    title: "Table basse scandinave",
    price: 120,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400",
    condition: "Bon état",
    location: "Nice",
    dealScore: "good",
    seller: {
      id: "seller5",
      name: "Emma R.",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100",
      verified: true,
      rating: 4.6,
      reviews: 8,
    },
  },
  {
    id: "6",
    title: "Vélo électrique Decathlon",
    price: 890,
    image: "https://images.unsplash.com/photo-1571333250630-f0230c1454e1?w=400",
    condition: "Très bon état",
    location: "Menton",
    dealScore: "excellent",
    isBoosted: true,
    seller: {
      id: "seller6",
      name: "Pierre K.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      verified: true,
      rating: 5.0,
      reviews: 34,
    },
  },
];

export const mockAuctions: Auction[] = [
  {
    id: "a1",
    title: "Renault Clio 2018",
    currentBid: 8500,
    image: "https://images.unsplash.com/photo-1583267746897-XXXXXXXXXXX?w=400",
    endsAt: new Date(Date.now() + 2 * 60 * 60 * 1000 + 34 * 60 * 1000),
    bidCount: 12,
    location: "Nice",
  },
  {
    id: "a2",
    title: "Montre Rolex Submariner",
    currentBid: 6200,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400",
    endsAt: new Date(Date.now() + 5 * 60 * 60 * 1000 + 15 * 60 * 1000),
    bidCount: 8,
    location: "Monaco",
  },
  {
    id: "a3",
    title: "MacBook Pro M1 16\"",
    currentBid: 1850,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    endsAt: new Date(Date.now() + 1 * 60 * 60 * 1000 + 20 * 60 * 1000),
    bidCount: 15,
    location: "Cannes",
  },
];

export const mockLiveSessions: LiveSession[] = [
  {
    id: "l1",
    seller: {
      name: "Vintage Nice",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    },
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400",
    isLive: true,
    viewerCount: 234,
  },
  {
    id: "l2",
    seller: {
      name: "Lux Designer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    },
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400",
    isLive: false,
    scheduledFor: new Date(Date.now() + 30 * 60 * 1000),
  },
];