import Link from "next/link";

const industriesData = [
  {
    slug: "chemical",
    path: "/industries/chemical",
    name: "Chemical",
    description: "Solutions for chemical processing facilities, emission control and scrubbing systems.",
    subtypes: ["Process", "Storage", "Laboratory"]
  },
  {
    slug: "pharmaceutical",
    path: "/industries/pharmaceutical",
    name: "Pharmaceutical",
    description: "Air quality and fume control for pharmaceutical manufacturing and R&D.",
    subtypes: ["Manufacturing", "R&D"]
  },
  {
    slug: "food-beverage",
    path: "/industries/food-beverage",
    name: "Food & Beverage",
    description: "Odor control, ventilation and dust collection for food and beverage production.",
    subtypes: ["Baking", "Packaging"]
  }
];

export default function IndustriesListPage() {
  return (
    <main className="max-w-7xl mx-auto p-10 bg-white">
      <h1 className="text-4xl font-extrabold text-[#0A1F22] mb-8 border-b pb-4">
        Industrial Solutions by Sector
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industriesData.map((industry) => (
          <Link 
            key={industry.slug} 
            href={industry.path}
            className="group p-6 border border-gray-100 rounded-xl hover:border-cyan-500 hover:shadow-2xl transition-all bg-gray-50/50 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                {industry.name}
              </h2>
              <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                {industry.description}
              </p>
              
              {/* Added Subtypes badge for better UX */}
              <div className="mt-4 flex flex-wrap gap-2">
                {industry.subtypes.map(type => (
                  <span key={type} className="text-[10px] bg-gray-200 text-gray-700 px-2 py-1 rounded uppercase font-semibold">
                    {type}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-6 text-cyan-600 font-bold flex items-center text-sm tracking-wider">
              VIEW TECHNICAL SPECS <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}