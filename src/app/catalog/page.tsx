/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

async function getProperties() {
  const res = await fetch("http://192.168.0.37:3000/api/public/properties", {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Erro na API: ${res.status} - ${text}`);
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
            teste
        </div>
    )
}