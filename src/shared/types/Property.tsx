export interface Property {
  id: string;
  title: string;
  squareMeters: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpaces: number;
  rentPrice: number;
  type: string;
  condominium: number;
  iptu: number;
  city: string;
  state: string;
  createdAt: string;
  street: string;
  houseNumber: string;
  neighborhood: string;
  cep: string;
  allowsPets: boolean;
  images: string[];
}