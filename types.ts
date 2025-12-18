export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  hsn: string;
  tsn: string;
  tuv: string;
  imageUrl: string;
}

export interface MarketplaceListing {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
}

export interface Community {
  id: string;
  name: string;
  description: string;
}
