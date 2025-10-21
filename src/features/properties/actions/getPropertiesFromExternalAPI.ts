import { Property } from "@/shared/types/Property";
import { revalidate } from "@/utils/constants";

export async function getPropertiesFromExternalAPI(): Promise<Property[]> {
    const res = await fetch(`${process.env.APP_NEXT_PUBLIC_URL}/api/properties?x-vercel-protection-bypass=${process.env.APP_VERCEL_AUTOMATION_BYPASS_SECRET}`,    
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY_LIST_PROPERTIES}`,
      },
      next: { revalidate: revalidate },
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Erro ao buscar propriedades:  ${res.status} - ${errorText}`);
  }

  return res.json();
}
