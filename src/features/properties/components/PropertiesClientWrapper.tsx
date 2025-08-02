'use client';

import { useState, useMemo } from 'react';
import PropertiesFilters, { Filters } from './PropertiesFilters';
import PropertiesListComponent from './PropertiesList';
import { Property } from '@/shared/types/Property';
import { applyClientSideFilters } from '../utils/applyClientSideFilters';

export default function PropertiesClientWrapper({ initialProperties }: { initialProperties: Property[] }) {
  const [filters, setFilters] = useState<Filters>({});

  const filteredProperties = useMemo(() => {
    return applyClientSideFilters(initialProperties, filters);
  }, [filters, initialProperties]);

  return (
    <>
      <div className="w-full">
        <PropertiesFilters onFilterChange={setFilters} />
      </div>
      <div className="mb-10 mt-44 lg:mt-28 max-w-[90%] lg:max-w-[80%] mx-auto">
        <PropertiesListComponent properties={filteredProperties} />
      </div>
    </>
  );
}
