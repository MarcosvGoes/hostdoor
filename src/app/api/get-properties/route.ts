import { AppDomain } from "@/utils/routes";
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : AppDomain

  const res = await fetch(`${baseUrl}/api/properties`, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY_LIST_PROPERTIES}`,
    },
  });

 if (!res.ok) {
  const text = await res.text();
  return NextResponse.json({ error: text || "Erro desconhecido" }, { status: res.status });
}

console.error("Erro na requisição /api/properties:", res.status, await res.text());

  const data = await res.json();
  return NextResponse.json(data);
}
