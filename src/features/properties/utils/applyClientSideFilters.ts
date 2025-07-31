import { Property } from "@/shared/types/Property";
import { Filters } from "../components/PropertiesFilters";

export function applyClientSideFilters(properties: Property[], filters: Filters): Property[] {
  return properties.filter((property) => {
    if (filters.text) {
      const text = filters.text.toLowerCase();
      const searchable = `${property.street} ${property.neighborhood} ${property.city} ${property.state}`.toLowerCase();
      if (!searchable.includes(text)) return false;
    }

    if (filters.type && property.type !== filters.type) return false;

    if (filters.bedroomsMin !== undefined && property.bedrooms < filters.bedroomsMin) return false;
    if (filters.bedroomsMax !== undefined && property.bedrooms > filters.bedroomsMax) return false;

    if (filters.bathroomsMin !== undefined && property.bathrooms < filters.bathroomsMin) return false;
    if (filters.bathroomsMax !== undefined && property.bathrooms > filters.bathroomsMax) return false;

    if (filters.squareMetersMin !== undefined && property.squareMeters < filters.squareMetersMin) return false;
    if (filters.squareMetersMax !== undefined && property.squareMeters > filters.squareMetersMax) return false;

    if (filters.parkingSpaces !== undefined && property.parkingSpaces !== filters.parkingSpaces) return false;

    if (filters.allowsPets !== undefined && property.allowsPets !== filters.allowsPets) return false;

    if (filters.rentPriceMin !== undefined && property.rentPrice < filters.rentPriceMin) return false;
    if (filters.rentPriceMax !== undefined && property.rentPrice > filters.rentPriceMax) return false;

    return true;
  });
}
