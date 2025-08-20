import { appDomain, localhostDomain } from "@/utils/routes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json({ error: "Missing ID param" }, { status: 400 });
  }

  const baseUrl = process.env.NODE_ENV === "development"
    ? localhostDomain
    : appDomain;

  const res = await fetch(`${baseUrl}/api/properties/${id}`, {
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
