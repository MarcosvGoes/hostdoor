import { getPropertiesFromExternalAPI } from "@/features/properties/actions/getPropertiesFromExternalAPI";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  try {
    const properties = await getPropertiesFromExternalAPI();
    return NextResponse.json(properties);
  } catch (err: unknown) {
    console.error("Erro ao buscar propriedades:", err);

    const errorMessage = err instanceof Error ? err.message : "Erro desconhecido";

    return NextResponse.json(
      { error: "Erro interno na chamada de API", details: errorMessage },
      { status: 500 }
    );
  }
}
