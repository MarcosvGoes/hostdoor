import Image from "next/image";

async function getProperties() {
  const res = await fetch("https://dommi-app.vercel.app/api/public/properties", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const errorText = await res.text(); // captura texto de erro
    throw new Error(`Erro na API: ${res.status} - ${errorText}`);
  }

  return res.json();
}


export default async function PropertiesCatalog() {
    const { properties } = await getProperties();

    return (
        <div>
            {properties.map((property: any) => (
                <div key={property.id}>
                    <h2>{property.title}</h2>
                    <Image height={50} width={50} src={property.images[0]} alt="Imagem" />
                </div>
            ))}
        </div>
    )
}