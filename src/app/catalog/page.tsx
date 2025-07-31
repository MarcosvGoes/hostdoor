// src/app/catalog/page.tsx

import { getPropertiesFromExternalAPI } from "@/features/properties/actions/getPropertiesFromExternalAPI";
import PropertiesClientWrapper from "@/features/properties/components/PropertiesClientWrapper";

export const revalidate = 60;

export default async function PropertiesCatalogPage() {
  const properties = await getPropertiesFromExternalAPI();

  return <PropertiesClientWrapper initialProperties={properties} />;
}
