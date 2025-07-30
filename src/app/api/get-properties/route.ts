import { AppDomain } from "@/utils/routes";
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:3001" : AppDomain;

  try {
    const res = await fetch(`${baseUrl}/api/properties`, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY_LIST_PROPERTIES}`,
      },
    });

    let data = null;
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      data = await res.json();
    } else {
      data = { error: "Resposta não é JSON" };
    }

    if (!res.ok) {
      const raw = await res.text();
      console.log("Status:", res.status);
      console.log("Raw response:", raw);
      return NextResponse.json(
        { error: "Erro ao buscar propriedades", raw },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("Erro de fetch:", err);
    return NextResponse.json({ error: "Erro interno na chamada de API" }, { status: 500 });
  }
}
