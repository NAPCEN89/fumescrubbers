import Link from "next/link";
import { industriesData } from "../../data/industries";

export default function IndustriesListPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Our Industries</h1>
      <div className="grid gap-4">
        {industriesData.map((industry) => (
          <Link 
            key={industry.slug} 
            href={`/industries/${industry.slug}`}
            className="p-4 border rounded hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold">{industry.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}