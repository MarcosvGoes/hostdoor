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
    const errorData = await res.json();
    return NextResponse.json(errorData, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
