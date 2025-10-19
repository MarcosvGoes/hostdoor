import { revalidate } from "@/app/api/get-properties/route";
import { Property } from "@/shared/types/Property";
import { appDomain, devDomain, localhostAppDomain } from "@/utils/routes";

function getBaseDomain() {
  if (process.env.NODE_ENV === "development") {
    return localhostAppDomain;
  }

  if (process.env.VERCEL_ENV === "preview") {
    return devDomain;
  }

  return appDomain;
}


export async function getPropertiesFromExternalAPI(): Promise<Property[]> {
    const baseUrl = getBaseDomain();
    const res = await fetch(`${baseUrl}/api/properties?x-vercel-protection-bypass=${process.env.BYPASS_VERCEL}`,    
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
