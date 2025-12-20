import { industriesData } from "../../data/navData";
import { notFound } from "next/navigation";
import Image from "next/image";

// --- ADD THIS FUNCTION START ---
export async function generateStaticParams() {
  return industriesData.map((industry) => ({
    slug: industry.slug,
  }));
}
// --- ADD THIS FUNCTION END ---

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industriesData.find((item) => item.slug === slug);

  if (!industry) return notFound();

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* ... keep your existing design code here ... */}
      <section className="pt-32 pb-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
           <h1 className="text-5xl font-bold">{industry.title}</h1>
           <p className="mt-4 text-xl text-slate-300">{industry.description}</p>
        </div>
      </section>
    </div>
  );
}