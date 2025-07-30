import { NextResponse } from "next/server";

export const revalidate = 300; // 5 minutos

export async function GET() {
  const baseUrl = process.env.NODE_ENV === "development" 
    ? "http://localhost:3001" 
    : "https://dommi-rent.vercel.app"; // Use o URL completo diretamente

  try {
    const res = await fetch(`${baseUrl}/api/properties`, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY_LIST_PROPERTIES}`,
      },
      next: { revalidate: 300 } // Adiciona revalidação no fetch também
    });

    if (!res.ok) {
      // Se for erro 429, retorna cache se existir
      if (res.status === 429) {
        console.warn("Rate limit atingido, retornando cache se disponível");
        // Você poderia implementar lógica para retornar cache local aqui
      }
      const errorData = await res.text();
      console.error(`Erro ${res.status} na API:`, errorData);
      return NextResponse.json(
        { error: "Erro ao buscar propriedades", details: errorData },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Erro de fetch:", err);
    return NextResponse.json(
      { error: "Erro interno na chamada de API"},
      { status: 500 }
    );
  }
}