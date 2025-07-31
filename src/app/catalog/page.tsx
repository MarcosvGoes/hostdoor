import { getPropertiesFromExternalAPI } from "@/features/properties/actions/getPropertiesFromExternalAPI";
import PropertiesClientWrapper from "@/features/properties/components/PropertiesClientWrapper";

export const dynamic = "force-dynamic";
export const revalidate = 300;

export default async function PropertiesCatalogPage() {
  const properties = await getPropertiesFromExternalAPI();
  return <PropertiesClientWrapper initialProperties={properties} />;
}
