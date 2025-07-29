import PropertiesList from "@/features/properties/PropertiesList";

export const metadata = {
  title: "Catálogo",
  description: "Visualize seus contratos.",
};

export default async function PropertiesCatalog() {
  return (
    <div className="max-w-[90%] lg:max-w-[80%] mx-auto">
      <div className="bg-background/5 w-full pt-4">Filters here</div>
      <div className="my-10">
        <PropertiesList />
      </div>
    </div>

  )
}