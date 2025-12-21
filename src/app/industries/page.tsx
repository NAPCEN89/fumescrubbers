// src/app/industries/[category]/page.tsx
import { industriesData } from "../data/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  // Get a unique list of all categories from your 12 industries
  const categories = Array.from(new Set(industriesData.map(i => i.category || "industrial")));
  
  return categories.map((cat) => ({
    category: cat,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  return <div className="pt-32 text-white">Category: {category}</div>;
}