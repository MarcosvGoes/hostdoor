import { appDomain, localhostAppDomain } from "@/utils/routes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const propertyNumber = req.nextUrl.pathname.split("/").pop();
  if (!propertyNumber) {
    return NextResponse.json({ error: "Missing propertyNumber param" }, { status: 400 });
  }

  const baseUrl = process.env.NODE_ENV === "development" ? localhostAppDomain : appDomain;

  const res = await fetch(`${baseUrl}/api/properties/${propertyNumber}`, {
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
