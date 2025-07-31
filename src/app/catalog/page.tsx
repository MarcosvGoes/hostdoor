// src/app/catalog/page.tsx
"use client";
import { useEffect, useState } from "react";
import PropertiesClientWrapper from "@/features/properties/components/PropertiesClientWrapper";

export default function PropertiesCatalogPage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/api/get-properties")
      .then((r) => r.json())
      .then((data) => setProperties(data))
      .catch(console.error);
  }, []);

  return <PropertiesClientWrapper initialProperties={properties} />;
}
