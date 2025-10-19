import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const propertyNumber = req.nextUrl.pathname.split("/").pop();
  if (!propertyNumber) {
    return NextResponse.json({ error: "Missing propertyNumber param" }, { status: 400 });
  }


  const res = await fetch(`${process.env.APP_NEXT_PUBLIC_URL}/api/properties/${propertyNumber}?x-vercel-protection-bypass=${process.env.VERCEL_AUTOMATION_BYPASS_SECRET}`, {
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
