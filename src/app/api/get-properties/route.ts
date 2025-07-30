import { AppDomain } from "@/utils/routes";
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:3001" : AppDomain;
  console.log("Fetching from:", `${baseUrl}/api/properties`);

  const res = await fetch(`${baseUrl}/api/properties`, {
    // headers: {
    //   Authorization: `Bearer ${process.env.API_KEY_LIST_PROPERTIES || ""}`,
    // },
  });

  let data;
  try {
    data = await res.json();
  } catch (err) {
    console.error("Erro ao fazer parse do JSON:", err);
    return NextResponse.json({ error: "Resposta inválida da API" }, { status: 500 });
  }

  if (!res.ok) {
    return NextResponse.json(data, { status: res.status });
  }

  return NextResponse.json(data);
}
