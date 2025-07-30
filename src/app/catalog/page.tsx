'use client'
import PropertiesFilters, { Filters } from "@/features/properties/components/PropertiesFilters";
import PropertiesList from "@/features/properties/components/PropertiesList";
import { Property } from "@/shared/types/Property";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";

export const revalidate = 300;

export default function PropertiesCatalog() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filters, setFilters] = useState<Filters>({});

  const cacheRef = useRef<Property[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (cacheRef.current) {
        setProperties(cacheRef.current);
        return;
      }

      try {
        const response = await fetch("/api/get-properties", {
          headers: { Authorization: `Bearer ${process.env.API_KEY_LIST_PROPERTIES}` },
          next: { revalidate: 300 }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (Array.isArray(data)) {
          setProperties(data);
          cacheRef.current = data;
          localStorage.setItem('propertiesCache', JSON.stringify(data));
          localStorage.setItem('propertiesCacheTimestamp', Date.now().toString());
        }
      } catch (err) {
        console.error("Erro ao buscar propriedades:", err);
        const cached = localStorage.getItem('propertiesCache');
        if (cached) {
          setProperties(JSON.parse(cached));
        }
      }
    };

    const cachedData = localStorage.getItem('propertiesCache');
    const cachedTimestamp = localStorage.getItem('propertiesCacheTimestamp');
    const isCacheValid = cachedTimestamp && (Date.now() - parseInt(cachedTimestamp) < 3600000); // 1 hora

    if (isCacheValid && cachedData) {
      setProperties(JSON.parse(cachedData));
      cacheRef.current = JSON.parse(cachedData);
    } else {
      fetchData();
    }
  }, []);

  const handleFilterChange = useCallback((newFilters: Filters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }, []);

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      if (filters.text) {
        const textLower = filters.text.toLowerCase();
        const matchText =
          p.city.toLowerCase().includes(textLower) ||
          p.neighborhood.toLowerCase().includes(textLower) ||
          p.state.toLowerCase().includes(textLower);
        if (!matchText) return false;
      }

      if (filters.type && filters.type !== "all" && p.type !== filters.type) return false;

      if (filters.bedroomsMin !== undefined && p.bedrooms < filters.bedroomsMin) return false;
      if (filters.bedroomsMax !== undefined && p.bedrooms > filters.bedroomsMax) return false;

      if (filters.bathroomsMin !== undefined && p.bathrooms < filters.bathroomsMin) return false;
      if (filters.bathroomsMax !== undefined && p.bathrooms > filters.bathroomsMax) return false;

      if (filters.squareMetersMin !== undefined && p.squareMeters < filters.squareMetersMin) return false;
      if (filters.squareMetersMax !== undefined && p.squareMeters > filters.squareMetersMax) return false;

      if (filters.parkingSpaces !== undefined && p.parkingSpaces !== filters.parkingSpaces) return false;

      if (filters.allowsPets !== undefined && p.allowsPets !== filters.allowsPets) return false;

      if (filters.rentPriceMin !== undefined && p.rentPrice < filters.rentPriceMin) return false;
      if (filters.rentPriceMax !== undefined && p.rentPrice > filters.rentPriceMax) return false;

      return true;
    });
  }, [properties, filters]);


  return (
    <div>
      <div className="w-full">
        <PropertiesFilters onFilterChange={handleFilterChange} />
      </div>
      <div className="mb-10 mt-20 max-w-[90%] lg:max-w-[80%] mx-auto">
        <PropertiesList properties={filteredProperties} />
      </div>
    </div>
  );
}
