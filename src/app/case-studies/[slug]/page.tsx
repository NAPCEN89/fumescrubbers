// src/app/case-studies/[slug]/page.tsx
import { caseStudies } from '@/lib/case-studies-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Quote } from 'lucide-react';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyPage({ params }: Props) {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) notFound();

  return (
    <article className="min-h-screen bg-[#0A1F22] text-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Hero */}
        <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden mb-16">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F22] via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <span className="text-cyan-400 font-black uppercase text-sm tracking-wider">{study.industry} • {study.location}</span>
            <h1 className="text-4xl md:text-6xl font-black mt-4">{study.title}</h1>
          </div>
        </div>

        {/* Client Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-black mb-6 text-cyan-400">The Challenge</h2>
            <p className="text-lg leading-relaxed text-gray-300">{study.challenge}</p>
          </div>
          <div>
            <h2 className="text-3xl font-black mb-6 text-cyan-400">NAPCEN Solution</h2>
            <p className="text-lg leading-relaxed text-gray-300">{study.solution}</p>
          </div>
        </div>

        {/* Results */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-center mb-12 text-cyan-400">Results Achieved</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {study.results.map((result, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
                <CheckCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <p className="text-xl font-bold">{result}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {study.quote && (
          <blockquote className="bg-[#1a2424] rounded-3xl p-12 text-center mb-20 border-l-8 border-cyan-400">
            <Quote className="w-16 h-16 text-cyan-400/30 mx-auto mb-8" />
            <p className="text-2xl md:text-3xl font-bold italic mb-6">"{study.quote}"</p>
            <footer className="text-cyan-400 font-black">— {study.quoteAuthor}, {study.client}</footer>
          </blockquote>
        )}

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-black mb-8">Ready for Your Own Success Story?</h3>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-4 px-10 py-6 bg-cyan-500 text-black font-black text-xl rounded-full hover:bg-cyan-400 transition-all"
          >
            Get a Custom Solution Quote
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </article>
  );
}