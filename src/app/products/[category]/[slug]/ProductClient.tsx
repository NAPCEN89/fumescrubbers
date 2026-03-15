'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck, Download, PhoneCall, Settings, Target,
  CheckCircle2, ChevronRight, MapPin, Phone, Mail,
  Clock, Award, Wrench, Zap, Globe2,
  FlaskConical, Layers, PackageCheck, HardHat,
  CircleDollarSign, Gauge, Leaf, Star, ChevronDown,
  ArrowUpRight, Sparkles, Factory,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────
interface Product {
  label: string;
  slug: string;
  image?: { src: string; alt?: string };
  description?: string;
  seoDescription?: string;
  specs?: Record<string, string>;
  applications?: string[];
  features?: string[];
  seoKeywords?: string[];
  howItWorks?: string[];
  variants?: { name: string; desc: string }[];
  materials?: { name: string; use: string }[];
  maintenanceTips?: string[];
  productFaqs?: { q: string; a: string }[];
}

interface ProductClientProps {
  product: Product;
  categoryTitle: string;
  categorySlug: string;
  nextProduct?: Product;
  prevProduct?: Product;
}

// ─────────────────────────────────────────────────────────────
// ENRICHMENT DATABASE
// ─────────────────────────────────────────────────────────────
const PRODUCT_ENRICHMENT: Record<string, Partial<Product>> = {
  'packed-bed': {
    howItWorks: [
      'Contaminated industrial exhaust gas enters the scrubber from the bottom inlet duct.',
      'Gas rises upward through a packed media bed (PP Pall Rings, Raschig Rings, or Structured Packing).',
      'Scrubbing liquid (water, NaOH, H2SO4, or custom reagent) is sprayed downward from the top nozzles.',
      'Counter-current contact between gas and liquid causes chemical absorption of soluble gases.',
      'Cleaned gas exits from the top through a mist eliminator that removes all liquid droplets.',
      'Spent scrubbing liquid drains to a sump and is recirculated via pump or discharged as per CPCB norms.',
    ],
    variants: [
      { name: 'Single Stage Packed Bed', desc: 'Standard configuration for single gas streams like HCl or NH3.' },
      { name: 'Multi-Stage Packed Bed', desc: 'Two or more beds in series for mixed or hard-to-absorb gases.' },
      { name: 'Cross-Flow Packed Bed', desc: 'Horizontal gas flow design for very low pressure drop applications.' },
      { name: 'PP-FRP Packed Bed Scrubber', desc: 'Fully corrosion-resistant for highly acidic or strongly alkaline environments.' },
      { name: 'SS316 Packed Bed Scrubber', desc: 'Stainless steel for high-temperature, food-grade, or pharma applications.' },
      { name: 'PVDF Packed Bed Scrubber', desc: 'Maximum resistance for aggressive solvents, halogens, and concentrated acids.' },
    ],
    materials: [
      { name: 'PP-FRP', use: 'Standard corrosion-resistant option for most acid/alkali scrubbing up to 60°C.' },
      { name: 'PVDF', use: 'High resistance for aggressive solvents, concentrated acids, halogen gases.' },
      { name: 'SS 316L', use: 'High temperature (>80°C), food-grade or pharmaceutical applications.' },
      { name: 'MS with FRP Lining', use: 'Large capacity systems — steel strength with chemical FRP protection.' },
      { name: 'HDPE', use: 'Lightweight, low-cost for smaller scrubbers with moderate chemical exposure.' },
    ],
    maintenanceTips: [
      'Check pH of circulating liquid weekly and adjust reagent dosing pump if pH drifts.',
      'Inspect spray nozzles monthly for clogging or erosion — clean or replace as needed.',
      'Clean packed bed media annually to remove scale, bio-fouling, or particulate bridging.',
      'Check pump mechanical seals and impeller quarterly — replace worn parts proactively.',
      'Inspect mist eliminator pads every 6 months and flush thoroughly with clean water.',
      'Verify pH sensor calibration every 3 months for accurate automatic reagent dosing.',
      'Check and tighten all flange bolts, pipe joints, and gaskets every 6 months.',
    ],
    productFaqs: [
      { q: 'What removal efficiency does a packed bed scrubber achieve?', a: 'NAPCEN packed bed scrubbers achieve up to 99.9% removal for highly soluble gases like HCl, NH3, SO2, and HF. Efficiency depends on gas solubility, liquid-to-gas ratio, packing height, and reagent selection.' },
      { q: 'What is the difference between PP-FRP and SS packed bed scrubbers?', a: 'PP-FRP scrubbers are preferred for corrosive acid/alkali gases — lightweight, fully corrosion-resistant, and cost-effective. SS316 scrubbers are used where operating temperature exceeds 80°C or food/pharma-grade materials are required.' },
      { q: 'How often should packed bed media be replaced?', a: 'Packing media (PP Pall Rings or Raschig Rings) typically lasts 5–8 years with proper maintenance. NAPCEN supplies replacement packing media as part of our AMC service.' },
      { q: 'Can a packed bed scrubber handle multiple gases simultaneously?', a: 'Yes — a multi-stage packed bed with different reagents in each stage can treat multiple gases. Stage 1 (caustic) handles HCl; Stage 2 (acid) handles NH3 — achieving >99% removal for both in one unit.' },
    ],
  },
  'venturi': {
    howItWorks: [
      'Exhaust gas enters the venturi throat at high velocity (60–120 m/s), creating a low-pressure zone.',
      'Scrubbing liquid is injected at the throat — high velocity shear atomizes it into fine droplets.',
      'Particulates and soluble gases are captured as gas-droplet mixture collides intensely.',
      'The mixture decelerates in the expanding diffuser section where droplet coalescence occurs.',
      'Mixture enters a cyclonic separator where liquid droplets are removed by centrifugal force.',
      'Clean gas exits from the separator top through a final mist eliminator.',
      'Collected slurry settles in the sump and is pumped out for disposal or treatment.',
    ],
    variants: [
      { name: 'Fixed Throat Venturi', desc: 'Standard configuration for constant gas flow — most cost-effective.' },
      { name: 'Adjustable Throat Venturi', desc: 'Variable opening for fluctuating gas volumes — maintains efficiency across wide flow range.' },
      { name: 'Venturi + Packed Bed Combo', desc: 'Two-stage: venturi removes particulate, packed bed absorbs residual gases.' },
      { name: 'MS-FRP Lined Venturi', desc: 'Cost-effective for large gas volumes from foundries and incinerators.' },
      { name: 'High-Energy Venturi', desc: 'For sub-micron particles (<1 micron) at higher pressure drop (>500 mm WG).' },
    ],
    materials: [
      { name: 'MS with Rubber Lining', use: 'Foundry exhaust and boiler flue gas with coarse particulate.' },
      { name: 'MS with FRP Lining', use: 'Chemical resistance + structural strength for large industrial systems.' },
      { name: 'SS 304 / SS 316', use: 'Food, pharma, and high-temperature process applications.' },
      { name: 'PP-FRP', use: 'Smaller venturi scrubbers for acid and chemical fume applications.' },
    ],
    maintenanceTips: [
      'Inspect venturi throat monthly for erosion, scaling, or particulate buildup and clean as needed.',
      'Check liquid injection nozzle alignment and flow rate quarterly to ensure proper atomization.',
      'Clean cyclonic separator sump regularly to prevent sediment accumulation.',
      'Inspect pump impeller, seals, and bearings every 6 months — replace worn components.',
      'Verify mist eliminator condition every 6 months; clean with pressurized water jet if fouled.',
    ],
    productFaqs: [
      { q: 'What particle size can a venturi scrubber capture?', a: 'High-energy venturis capture particles down to 0.5 microns at >99% efficiency at high pressure drop (>750 mm WG). Standard units handle particles >1 micron at >98% efficiency.' },
      { q: 'Can a venturi scrubber handle both particulate and gas simultaneously?', a: 'Yes — the venturi simultaneously removes particulate and absorbs soluble gases in one compact stage. Ideal for foundries, incinerators, and boilers where both pollutant types are present.' },
    ],
  },
  'pulse-jet-baghouse': {
    howItWorks: [
      'Dusty process air enters the baghouse hopper at the bottom and flows upward through filter bags.',
      'Dust particles are captured on the outer bag surface — clean air passes through to the outlet.',
      'As dust accumulates, rising pressure drop triggers the automatic cleaning cycle.',
      'High-pressure compressed air (5–7 bar) is pulsed in short bursts through each row of bags.',
      'The reverse air pulse flexes the bag, dislodging the dust cake which falls into the hopper.',
      'Collected dust is discharged via a rotary airlock valve — system runs continuously without shutdown.',
    ],
    variants: [
      { name: 'Standard Pulse Jet Baghouse', desc: 'Side-entry design for heavy industrial dust: steel, cement, mineral.' },
      { name: 'Top-Entry Pulse Jet Baghouse', desc: 'Easy bag replacement from the top — ideal for limited floor space.' },
      { name: 'Reverse-Air Baghouse', desc: 'Gentle cleaning for delicate woven bags in fine powder applications.' },
      { name: 'High-Temperature Baghouse', desc: 'Glass fiber or PTFE bags for flue gas above 200°C.' },
      { name: 'Explosion-Proof Baghouse', desc: 'ATEX-rated for combustible dust from wood, grain, or chemical plants.' },
      { name: 'Modular Baghouse', desc: 'Expandable — add filter modules as production capacity grows.' },
    ],
    materials: [
      { name: 'Polyester Felt Bags', use: 'General dust: metal, cement, mineral. Up to 135°C.' },
      { name: 'Nanofiber Coated Bags', use: 'Sub-micron pharma dust, hygroscopic powders, fine chemical applications.' },
      { name: 'PTFE Membrane Bags', use: 'Chemical dust, sticky particles, high-humidity environments.' },
      { name: 'Fiberglass Bags', use: 'High-temperature: cement kilns, steel furnaces, incinerators (up to 260°C).' },
      { name: 'Antistatic/ESD Bags', use: 'Combustible and explosive dust: wood, grain, coal, polymer powder.' },
    ],
    maintenanceTips: [
      'Check compressed air pressure weekly — maintain 5–7 bar for effective pulse cleaning.',
      'Inspect pulse jet solenoid valves monthly — replace any that fail to open or close fully.',
      'Measure differential pressure weekly — high DP indicates bags need cleaning or replacement.',
      'Inspect bag condition every 6 months for holes, tears, or collapsed bags.',
      'Clean hopper walls and rotary airlock monthly to prevent dust bridging.',
      'Lubricate rotary airlock and screw conveyor bearings quarterly.',
    ],
    productFaqs: [
      { q: 'What is the filtration efficiency of a pulse jet baghouse?', a: 'NAPCEN pulse jet baghouses achieve 99.99% filtration at 1 micron with polyester felt bags. With nanofiber or PTFE membrane bags, efficiency extends to sub-micron particles for pharma and fine chemical applications.' },
      { q: 'How long do filter bags last?', a: 'Polyester felt bags last 2–3 years. Nanofiber and PTFE bags last 4–5 years. Life depends on dust load, particle abrasiveness, temperature, and cleaning frequency.' },
      { q: 'Can a pulse jet baghouse run continuously without shutdown for cleaning?', a: 'Yes — pulse jet cleaning is online, row-by-row, without interrupting the air flow. This is the key advantage over shaker or reverse-air baghouses which require offline cleaning.' },
    ],
  },
  'welding-fume': {
    howItWorks: [
      'Welding generates metallic fumes (iron oxide, manganese, hexavalent chromium) at the arc.',
      'The flexible extraction arm is positioned 150–300mm from the welding arc for maximum capture.',
      'A motorized blower creates negative pressure drawing fumes into the extraction hood at the arm tip.',
      'Captured fumes pass through a pre-filter (G4 class) removing large metallic spatter particles.',
      'Fumes then pass through a HEPA filter (H13/H14) capturing fine particles down to 0.3 microns.',
      'Activated carbon removes residual toxic gases, ozone, and VOCs from the treated air.',
      'Clean filtered air is recirculated to the workshop or ducted outside.',
    ],
    variants: [
      { name: 'Portable Single-Arm Extractor', desc: 'Mobile unit on castors for one welding station.' },
      { name: 'Dual-Arm Welding Extractor', desc: 'Two arms for simultaneous capture at two welding points.' },
      { name: 'Centralized Fume Extraction', desc: 'Central unit with duct network serving 5–50+ welding stations.' },
      { name: 'On-Torch Fume Extractor', desc: 'Extraction nozzle integrated directly into the MIG welding torch.' },
      { name: 'Backdraft Canopy Hood', desc: 'Fixed overhead hood for production welding lines.' },
      { name: 'Robotic Welding Cell Extractor', desc: 'High-flow extraction for robotic welding enclosures.' },
    ],
    materials: [
      { name: 'Pre-Filter G4', use: 'Captures large metallic particles and weld spatter — protects downstream filters.' },
      { name: 'HEPA H13/H14', use: 'Removes fine metal oxide fumes down to 0.3 microns at 99.97% efficiency.' },
      { name: 'Activated Carbon', use: 'Absorbs toxic gases (ozone, CO, NO2), VOCs, and welding odors.' },
      { name: 'PTFE Membrane', use: 'For stainless or galvanized welding where hexavalent Cr is generated.' },
    ],
    maintenanceTips: [
      'Replace pre-filter every 3–4 weeks depending on welding hours.',
      'Monitor differential pressure — replace HEPA when DP exceeds recommended limit.',
      'Replace activated carbon every 6 months or when odor breakthrough is detected.',
      'Clean extraction arm joints and flex hose monthly to maintain suction.',
      'Check and lubricate blower motor bearings annually.',
    ],
    productFaqs: [
      { q: 'How close must the extractor arm be to the welding arc?', a: 'For maximum efficiency, the extraction hood should be 150–300mm from the welding arc. At 500mm, capture efficiency drops to ~50%. NAPCEN\'s flexible arm allows easy positioning at any angle.' },
      { q: 'Which welding processes generate the most hazardous fumes?', a: 'MIG/TIG welding of stainless steel generates hexavalent chromium (Cr VI). Galvanized steel welding generates zinc oxide fumes — both human carcinogens. NAPCEN\'s HEPA + carbon extractors are rated for these hazardous applications.' },
      { q: 'Can filtered welding fume extractor air be recirculated?', a: 'Yes — NAPCEN extractors with H14 HEPA + carbon are rated for indoor recirculation meeting OSHA/ACGIH TLV requirements. For stainless or galvanized welding, we recommend ducting outside as additional precaution.' },
    ],
  },
};

// ─────────────────────────────────────────────────────────────
// GLOBAL CONTENT
// ─────────────────────────────────────────────────────────────
const DEFAULT_FEATURES = [
  'CPCB & TNPCB compliance guaranteed — emission certificate provided',
  'Up to 99.9% pollutant removal efficiency',
  'PP-FRP, PVDF, MS, SS304 / SS316 construction options',
  'Auto pH dosing & PLC controls for unmanned operation',
  'Custom airflow: 500 CFM to 2,00,000 CFM',
  'Modular design for easy maintenance and servicing',
  'Continuous 24/7 industrial operation capability',
  'Integrated mist eliminator & demister pads',
  'Corrosion-resistant internals: PP rings, FRP headers',
  'Factory-tested with performance certificate',
];

const DEFAULT_HOW_IT_WORKS = [
  'Contaminated process exhaust air enters the system inlet at the designed volumetric flow rate.',
  'The primary treatment stage captures, absorbs, or neutralizes the main target pollutants.',
  'A secondary polishing stage removes any remaining trace contaminants for compliance-level air.',
  'A mist eliminator removes all entrained liquid droplets from the treated air stream.',
  'Clean, treated air exits through the outlet stack — meeting CPCB/TNPCB emission limits.',
  'Collected pollutants are drained or discharged for proper treatment or disposal.',
];

const INSTALLATION_STEPS = [
  { step: '01', title: 'Site Survey & Engineering', desc: 'Our engineers assess your site, measure exhaust volumes, analyse pollutant types, and prepare detailed P&ID drawings.' },
  { step: '02', title: 'Custom Fabrication', desc: 'Equipment is fabricated at our Puducherry facility using certified PP-FRP, MS, or SS materials — quality-checked throughout.' },
  { step: '03', title: 'Factory Testing & QC', desc: 'All systems undergo hydrostatic leak testing, blower performance testing, and control panel simulation before dispatch.' },
  { step: '04', title: 'Delivery & Civil Foundation', desc: 'We coordinate safe delivery and supervise all civil foundation and equipment placement per approved drawing.' },
  { step: '05', title: 'Installation & Ducting', desc: 'Our certified technicians complete full mechanical installation, duct fabrication, electrical connections, and panel wiring.' },
  { step: '06', title: 'Commissioning & Training', desc: 'System is commissioned, stack emission testing completed, CPCB certificate issued, and your team is fully trained.' },
];

const WHY_NAPCEN = [
  { icon: <Award className="w-5 h-5" />, title: '15+ Years Experience', desc: 'Trusted manufacturer since 2010 — 500+ installations across India.' },
  { icon: <ShieldCheck className="w-5 h-5" />, title: 'CPCB / TNPCB Compliant', desc: 'Zero-rejection record. CFD analysis, emission certificates, performance guarantees.' },
  { icon: <Wrench className="w-5 h-5" />, title: 'Complete Turnkey Service', desc: 'Design → Fabrication → Installation → Commissioning → AMC.' },
  { icon: <CircleDollarSign className="w-5 h-5" />, title: 'Factory-Direct Pricing', desc: 'No distributors. Best factory-direct price from Puducherry guaranteed.' },
  { icon: <Zap className="w-5 h-5" />, title: 'Fast Lead Times', desc: 'Standard: 3–4 weeks. Fast-track: 10 business days. Pan-India delivery.' },
  { icon: <Gauge className="w-5 h-5" />, title: 'Performance Guaranteed', desc: 'Written certificate issued. If norms aren\'t met, we rectify at zero cost.' },
  { icon: <Globe2 className="w-5 h-5" />, title: 'Export Experience', desc: 'Supplying UAE, Saudi Arabia, Malaysia & Sri Lanka.' },
  { icon: <Leaf className="w-5 h-5" />, title: 'Eco-Compliant Design', desc: 'Minimised secondary waste, energy, and water usage.' },
  { icon: <Star className="w-5 h-5" />, title: 'ISO Certified', desc: 'ISO-compliant manufacturing with documented quality at every stage.' },
];

const CERTIFICATIONS = [
  { name: 'CPCB Compliance', desc: 'Central Pollution Control Board' },
  { name: 'TNPCB Compliance', desc: 'Tamil Nadu Pollution Control Board' },
  { name: 'ISO 9001:2015', desc: 'Quality Management Systems' },
  { name: 'Performance Certificate', desc: 'Issued for every installation' },
  { name: 'Stack Emission Test', desc: 'Third-party accredited testing' },
  { name: 'CFD Analysis Report', desc: 'Design validation report' },
];

const ALL_INDUSTRIES = [
  'Pharmaceutical Manufacturing', 'Chemical Processing', 'Metal Foundries',
  'Automotive Industry', 'Food & Beverage', 'Textile Mills',
  'Electronics Manufacturing', 'Semiconductor Fabrication', 'Electroplating',
  'Plastic Processing', 'Hospital & Pathology Labs', 'Cement Plants',
  'Steel & Metal Fabrication', 'Fertilizer Plants', 'Paper & Pulp Mills',
  'Rubber Manufacturing', 'Printing & Packaging', 'Jewelry Manufacturing',
  'Water Treatment', 'Paint & Coating Industry',
];

const LOCATION_CITIES = [
  'Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Trichy', 'Tirunelveli',
  'Puducherry', 'Vellore', 'Bengaluru', 'Hyderabad', 'Mumbai', 'Pune',
  'Delhi', 'Ahmedabad', 'Kolkata', 'Kochi', 'Visakhapatnam', 'Nagpur',
  'Surat', 'Jaipur', 'Chandigarh', 'Bhubaneswar',
];

// ─────────────────────────────────────────────────────────────
// SECTION WRAPPER — consistent padding + divider
// ─────────────────────────────────────────────────────────────
const Section = ({
  children, id, className = '', divider = true,
}: { children: React.ReactNode; id?: string; className?: string; divider?: boolean }) => (
  <section
    id={id}
    className={`container mx-auto px-6 py-20 max-w-6xl ${divider ? 'border-t border-white/5' : ''} ${className}`}
  >
    {children}
  </section>
);

// ─────────────────────────────────────────────────────────────
// SECTION HEADING
// ─────────────────────────────────────────────────────────────
const SectionHeading = ({
  id, eyebrow, title, subtitle, center = false,
}: { id?: string; eyebrow?: string; title: string; subtitle?: string; center?: boolean }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    {eyebrow && (
      <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.4em] uppercase text-cyan-400 mb-3">
        <span className="w-6 h-[1px] bg-cyan-500/40 inline-block" />
        {eyebrow}
        <span className="w-6 h-[1px] bg-cyan-500/40 inline-block" />
      </span>
    )}
    <h2 id={id} className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
      {title}
    </h2>
    {subtitle && <p className="mt-3 text-white/40 text-sm max-w-2xl">{subtitle}</p>}
  </div>
);

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────
export default function ProductClient({
  product, categoryTitle, categorySlug, nextProduct, prevProduct,
}: ProductClientProps) {
  const [openModal, setOpenModal] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | false>(0);
  const [formData, setFormData] = useState({ name: '', phone: '', company: '', email: '', message: '' });

  const imageSrc = typeof product.image === 'string' ? product.image : product.image?.src || '/images/placeholder-product.jpg';
  const imageAlt = product.image?.alt || `${product.label} manufacturer Puducherry India — NAPCEN`;

  const enriched = PRODUCT_ENRICHMENT[product.slug] || {};
  const howItWorks = enriched.howItWorks || product.howItWorks || DEFAULT_HOW_IT_WORKS;
  const variants = enriched.variants || product.variants || [];
  const materials = enriched.materials || product.materials || [];
  const maintenanceTips = enriched.maintenanceTips || product.maintenanceTips || [];
  const productFaqs = enriched.productFaqs || product.productFaqs || [];
  const displayFeatures = product.features?.length ? product.features : DEFAULT_FEATURES;

  return (
    <div className="min-h-screen text-white font-sans bg-[#0A1F22]">

      {/* ── 1. BREADCRUMB ── */}
      <nav className="container mx-auto px-6 pt-24 pb-0 max-w-6xl" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/30"
          itemScope itemType="https://schema.org/BreadcrumbList">
          {[
            { name: 'Home', href: '/' },
            { name: 'Products', href: '/products' },
            { name: categoryTitle, href: `/products/${categorySlug}` },
            { name: product.label, href: null },
          ].map((crumb, i) => (
            <li key={i} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"
              className="flex items-center gap-1.5">
              {crumb.href
                ? <Link href={crumb.href} className="hover:text-cyan-400 transition-colors" itemProp="item"><span itemProp="name">{crumb.name}</span></Link>
                : <span className="text-white/60 font-semibold" itemProp="name">{crumb.name}</span>}
              <meta itemProp="position" content={String(i + 1)} />
              {i < 3 && <ChevronRight className="w-3 h-3 text-white/20" />}
            </li>
          ))}
        </ol>
      </nav>

      {/* ── 2. HERO + IMAGE + SIDEBAR CTA (main layout) ── */}
      <div className="container mx-auto px-6 pt-10 pb-0 max-w-6xl">

        {/* Top: category tag + product name */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.4em] uppercase text-cyan-400 mb-4">
            <Factory className="w-3.5 h-3.5" />
            {categoryTitle}
          </span>
          <h1 className="text-5xl md:text-[5.5rem] lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.9] text-white"
            itemScope itemType="https://schema.org/Product" itemProp="name">
            {product.label}
          </h1>
          <p className="mt-4 text-xs font-bold tracking-[0.3em] uppercase text-white/30">
            NAPCEN &nbsp;·&nbsp; Puducherry, India &nbsp;·&nbsp; CPCB / TNPCB Compliant &nbsp;·&nbsp; Serving Chennai, Tamil Nadu &amp; All India
          </p>
        </div>

        {/* ── SPLIT LAYOUT: LEFT = Image, RIGHT = Description + CTA + Quick Specs ── */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">

          {/* LEFT: Product Image */}
          <div className="relative">
            {/* Image container */}
            <div className="relative aspect-[4/3] bg-white rounded-[32px] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.7)] border border-white/10 overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-contain"
                    itemProp="image"
                  />
                </div>
              </div>
              {/* Engineering corner accents */}
              <div className="absolute top-5 left-5 w-5 h-5 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-lg" />
              <div className="absolute bottom-5 right-5 w-5 h-5 border-b-2 border-r-2 border-cyan-500/30 rounded-br-lg" />
              {/* Live badge */}
              <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider">In Stock</span>
              </div>
            </div>

            {/* Spec pills below image */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {Object.entries(product.specs).slice(0, 4).map(([key, val], i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
                    itemProp="additionalProperty" itemScope itemType="https://schema.org/PropertyValue">
                    <span className="text-[10px] text-white/40 uppercase tracking-wider font-bold" itemProp="name">{key}:</span>
                    <span className="text-xs text-cyan-400 font-black" itemProp="value">{val}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Sticky sidebar — description + CTAs + quick features */}
          <div className="lg:sticky lg:top-28 space-y-5">

            {/* Description card */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-cyan-400">Product Overview</span>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed" itemProp="description">
                {product.seoDescription || product.description}
              </p>
            </div>

            {/* CTA buttons — prominent right side */}
            <div className="space-y-3">
              <button
                onClick={() => setOpenModal(true)}
                className="w-full flex items-center justify-between px-6 py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-sm uppercase tracking-[0.2em] rounded-2xl transition-all shadow-[0_15px_40px_-8px_rgba(0,229,255,0.4)] group"
              >
                <span className="flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  Get Datasheet + Free Quote
                </span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <a
                href="tel:+917904469219"
                className="w-full flex items-center justify-between px-6 py-4 bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-500/40 text-white font-bold text-sm uppercase tracking-widest rounded-2xl transition-all group"
              >
                <span className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  +91-7904469219
                </span>
                <span className="text-[10px] text-white/40 font-medium normal-case tracking-normal">Call Now</span>
              </a>
              <a
                href="mailto:sales@napcen.com"
                className="w-full flex items-center justify-between px-6 py-4 bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-500/40 text-white font-bold text-sm uppercase tracking-widest rounded-2xl transition-all group"
              >
                <span className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  sales@napcen.com
                </span>
                <span className="text-[10px] text-white/40 font-medium normal-case tracking-normal">Email Us</span>
              </a>
            </div>

            {/* Quick trust badges */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'CPCB Compliant', icon: '✅' },
                { label: 'TNPCB Certified', icon: '✅' },
                { label: 'Quote in 2 Hrs', icon: '⚡' },
                { label: 'Pan-India AMC', icon: '🔧' },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2.5">
                  <span className="text-sm">{b.icon}</span>
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-wide">{b.label}</span>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-start gap-3 bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Factory Location</p>
                <p className="text-white/70 text-xs mt-0.5">Villianur, Puducherry – 605110, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. FULL SPECS TABLE ── */}
      {product.specs && Object.keys(product.specs).length > 0 && (
        <Section id="specifications">
          <SectionHeading
            eyebrow="Data Sheet"
            title="Technical Specifications"
            subtitle={`${product.label} — NAPCEN, Puducherry, India`}
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {Object.entries(product.specs).map(([key, val], i) => (
              <div key={i}
                className="group relative overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 hover:bg-white/[0.05] rounded-2xl p-5 transition-all"
                itemProp="additionalProperty" itemScope itemType="https://schema.org/PropertyValue">
                <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.25em] mb-2" itemProp="name">{key}</p>
                <p className="text-lg font-black text-white leading-tight" itemProp="value">{val}</p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-500/50 group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ── 4. HOW IT WORKS ── */}
      <Section id="how-it-works">
        <SectionHeading
          eyebrow="Working Principle"
          title={`How the ${product.label} Works`}
          subtitle={`Step-by-step working principle of the ${product.label} — NAPCEN design`}
        />
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[19px] top-8 bottom-8 w-[1px] bg-gradient-to-b from-cyan-500/30 via-cyan-500/10 to-transparent hidden md:block" />
          <div className="space-y-3">
            {howItWorks.map((step, i) => (
              <div key={i}
                className="flex items-start gap-5 p-6 bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/20 hover:bg-white/[0.04] rounded-2xl transition-all group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0A1F22] border border-cyan-500/30 text-cyan-400 text-xs font-black flex items-center justify-center group-hover:border-cyan-500/60 group-hover:bg-cyan-500/10 transition-all z-10">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed pt-1.5">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 5. FEATURES + APPLICATIONS ── */}
      <Section id="features">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Features */}
          <div>
            <SectionHeading eyebrow="Capabilities" title="Key Features" />
            <ul className="space-y-3">
              {displayFeatures.map((f, i) => (
                <li key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-cyan-500/20 hover:bg-white/[0.04] transition-all group cursor-default">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mt-0.5 group-hover:bg-cyan-500/20 transition-all">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  </div>
                  <span className="text-gray-400 text-sm leading-snug group-hover:text-gray-200 transition-colors">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <SectionHeading eyebrow="Use Cases" title="Industrial Applications" />
            <div className="flex flex-wrap gap-2 mb-8">
              {product.applications?.map((app, i) => (
                <span key={i}
                  className="px-4 py-2.5 text-[11px] font-black border border-white/10 rounded-xl text-gray-300 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-cyan-500/5 transition-all uppercase tracking-wider cursor-default">
                  {app}
                </span>
              ))}
            </div>
            {/* Location availability box */}
            <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/15 rounded-2xl p-6">
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-cyan-500/5" />
              <p className="text-cyan-400 font-black text-sm mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Available Across India
              </p>
              <p className="text-white/50 text-xs leading-relaxed">
                {product.label} supply, installation &amp; AMC in Chennai, Coimbatore, Madurai, Trichy, Puducherry, Bengaluru, Hyderabad, Mumbai, Delhi &amp; all India.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 6. VARIANTS / TYPES ── */}
      {variants.length > 0 && (
        <Section id="variants">
          <SectionHeading
            eyebrow="Product Range"
            title={`${product.label} — Types & Variants`}
            subtitle={`All configurations of ${product.label.toLowerCase()} manufactured by NAPCEN, Puducherry`}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {variants.map((v, i) => (
              <div key={i}
                className="group relative p-6 bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 hover:bg-white/[0.05] rounded-2xl transition-all overflow-hidden">
                <span className="absolute top-4 right-5 text-5xl font-black text-white/[0.03] group-hover:text-white/[0.06] transition-all leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                  <Layers className="w-4 h-4 text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-sm mb-2 leading-tight">{v.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ── 7. MATERIALS OF CONSTRUCTION ── */}
      {materials.length > 0 && (
        <Section id="materials">
          <SectionHeading
            eyebrow="Build Options"
            title="Materials of Construction"
            subtitle={`Select the right MOC for your ${product.label.toLowerCase()} — process temperature, chemical compatibility, and budget`}
          />
          <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left text-[10px] font-black text-white/30 uppercase tracking-widest p-5 pr-8">Material</th>
                  <th className="text-left text-[10px] font-black text-white/30 uppercase tracking-widest p-5">Best Use Case</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((m, i) => (
                  <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.03] transition-all group">
                    <td className="p-5 pr-8 w-[40%]">
                      <span className="inline-flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400 transition-all" />
                        <span className="text-cyan-400 font-bold text-xs">{m.name}</span>
                      </span>
                    </td>
                    <td className="p-5">
                      <span className="text-gray-400 text-xs leading-relaxed">{m.use}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      {/* ── 8. INSTALLATION PROCESS ── */}
      <Section id="installation">
        <SectionHeading
          eyebrow="Our Process"
          title="Turnkey Installation Process"
          subtitle={`Complete ${product.label} installation — Puducherry to pan-India`}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INSTALLATION_STEPS.map((s, i) => (
            <div key={i}
              className="relative p-6 bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/25 hover:bg-white/[0.04] rounded-2xl transition-all group overflow-hidden">
              <span className="absolute -bottom-3 -right-2 text-7xl font-black text-white/[0.025] group-hover:text-white/[0.05] transition-all leading-none">
                {s.step}
              </span>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <HardHat className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em]">Step {s.step}</span>
              </div>
              <h3 className="text-white font-bold text-sm mb-2">{s.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 9. MAINTENANCE GUIDE ── */}
      {maintenanceTips.length > 0 && (
        <Section id="maintenance">
          <SectionHeading
            eyebrow="Service Guide"
            title="Maintenance Guide"
            subtitle={`Recommended maintenance schedule for NAPCEN ${product.label.toLowerCase()} — ensures CPCB compliance and maximum lifespan`}
          />
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {maintenanceTips.map((tip, i) => (
              <div key={i}
                className="flex items-start gap-4 p-5 bg-white/[0.02] border border-white/[0.06] hover:border-yellow-500/20 hover:bg-white/[0.04] rounded-xl transition-all group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/20 transition-all">
                  <PackageCheck className="w-4 h-4 text-yellow-400" />
                </div>
                <p className="text-gray-400 text-xs leading-relaxed pt-1">{tip}</p>
              </div>
            ))}
          </div>
          {/* AMC CTA */}
          <div className="relative overflow-hidden bg-gradient-to-r from-cyan-500/8 to-transparent border border-cyan-500/20 rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="flex-1">
              <p className="text-cyan-300 font-black text-base mb-1">💡 NAPCEN Annual Maintenance Contract (AMC)</p>
              <p className="text-white/55 text-xs leading-relaxed">
                Prevent breakdowns and compliance failures. Scheduled maintenance, spare parts supply, emergency callouts, and CPCB documentation support — pan India.
              </p>
            </div>
            <a href="tel:+917904469219"
              className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all">
              <Phone className="w-4 h-4" /> Call for AMC
            </a>
          </div>
        </Section>
      )}

      {/* ── 10. SEO CONTENT BLOCK ── */}
      <Section id="about-product">
        <SectionHeading
          eyebrow="Manufacturer Info"
          title={`${product.label} Manufacturer in Puducherry, India`}
        />
        <div className="grid md:grid-cols-2 gap-10 text-gray-400 text-sm leading-relaxed">
          <div className="space-y-4">
            <p>
              <strong className="text-white">NAPCEN</strong> is a leading{' '}
              <strong className="text-cyan-400">{product.label} manufacturer</strong> headquartered in{' '}
              <strong className="text-white">Puducherry (Pondicherry), India</strong>. We design, fabricate, and supply{' '}
              {product.label.toLowerCase()} systems to industries across{' '}
              <strong className="text-white">Chennai, Coimbatore, Madurai, Salem, Trichy, Tamil Nadu, Bengaluru, Hyderabad, Mumbai, Delhi</strong>, and all of India since 2010.
            </p>
            <p>
              All NAPCEN {product.label.toLowerCase()} systems are fully{' '}
              <strong className="text-white">CPCB and TNPCB compliant</strong> with issued emission test certificates and performance guarantee documents. We maintain a zero-rejection record across 500+ installations.
            </p>
            <p>
              Available in <strong className="text-white">PP-FRP, PVDF, MS, SS304, and SS316</strong> — standard and fully custom configurations with lead times from 10 business days.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              Complete end-to-end service: initial{' '}
              <strong className="text-white">site assessment and engineering design</strong>, custom fabrication,{' '}
              <strong className="text-white">installation and commissioning</strong>, stack emission testing, and{' '}
              <strong className="text-white">Annual Maintenance Contracts (AMC)</strong>.
            </p>
            <p>
              Serving pharma, chemicals, metal foundries, automotive, food processing, textiles, electronics, semiconductor, electroplating, plastic recycling, hospital labs, cement, and fertilizer industries. Exported to{' '}
              <strong className="text-white">UAE, Saudi Arabia, Malaysia, and Sri Lanka</strong>.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <a href="mailto:sales@napcen.com"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                <Mail className="w-4 h-4" /> sales@napcen.com
              </a>
              <a href="tel:+917904469219"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                <Phone className="w-4 h-4" /> +91-7904469219
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 11. CERTIFICATIONS ── */}
      <Section id="certifications">
        <SectionHeading center eyebrow="Compliance" title="Certifications & Compliance"
          subtitle={`Every NAPCEN ${product.label.toLowerCase()} comes with full compliance documentation`} />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {CERTIFICATIONS.map((cert, i) => (
            <div key={i}
              className="flex items-center gap-4 p-5 bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/25 hover:bg-white/[0.04] rounded-2xl transition-all group">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-bold text-xs leading-tight">{cert.name}</p>
                <p className="text-white/35 text-[10px] mt-0.5">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 12. WHY CHOOSE NAPCEN ── */}
      <Section id="why-napcen">
        <SectionHeading center eyebrow="Trust Signals" title="Why Choose NAPCEN"
          subtitle={`India's trusted ${product.label} manufacturer & supplier since 2010`} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY_NAPCEN.map((item, i) => (
            <div key={i}
              className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/25 hover:bg-white/[0.04] rounded-2xl transition-all group">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
                {item.icon}
              </div>
              <div>
                <p className="font-bold text-white text-sm mb-1">{item.title}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 13. INDUSTRIES + CITIES (side by side) ── */}
      <Section id="industries">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading eyebrow="Sectors" title="Industries We Serve"
              subtitle={`${product.label} for pharma, chemical, automotive, foundry & more`} />
            <div className="flex flex-wrap gap-2">
              {ALL_INDUSTRIES.map((ind) => (
                <span key={ind}
                  className="text-xs text-white/50 border border-white/[0.08] rounded-full px-3 py-1.5 bg-white/[0.02] hover:text-white/80 hover:border-white/20 transition-all cursor-default">
                  {ind}
                </span>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Delivery" title={`${product.label} Across India`}
              subtitle="Factory-direct delivery from Puducherry to all major cities" />
            <div className="flex flex-wrap gap-2">
              {LOCATION_CITIES.map((city) => (
                <span key={city}
                  className="flex items-center gap-1.5 text-xs text-white/50 border border-white/[0.08] rounded-full px-3 py-1.5 bg-white/[0.02] hover:text-white/80 hover:border-cyan-500/20 transition-all cursor-default">
                  <MapPin className="w-2.5 h-2.5 text-cyan-400/50" />
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── 14. PRODUCT FAQs ── */}
      {productFaqs.length > 0 && (
        <Section id="faq">
          <SectionHeading
            eyebrow="FAQ"
            title={`${product.label} — Frequently Asked Questions`}
            subtitle={`Common questions about NAPCEN ${product.label.toLowerCase()} systems, pricing, and services`}
          />
          <div className="space-y-3">
            {productFaqs.map((faq, i) => (
              <div key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openFaq === i ? 'border-cyan-500/30 bg-white/[0.04]' : 'border-white/[0.06] bg-white/[0.02] hover:border-white/10'}`}
                itemScope itemType="https://schema.org/Question">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? false : i)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left gap-4"
                  aria-expanded={openFaq === i}>
                  <span className={`font-bold text-sm transition-colors ${openFaq === i ? 'text-cyan-400' : 'text-gray-200'}`}
                    itemProp="name">{faq.q}</span>
                  <div className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all ${openFaq === i ? 'bg-cyan-500 border-cyan-500' : 'border-white/10 bg-white/5'}`}>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-black' : 'text-cyan-400'}`} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/[0.05] pt-5" itemProp="text">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ── 15. CONTACT STRIP ── */}
      <Section id="contact" itemScope itemType="https://schema.org/LocalBusiness">
        <div className="grid sm:grid-cols-3 gap-4 mb-5">
          {[
            { icon: <MapPin className="w-5 h-5" />, label: 'Factory', value: 'No.1, North Street, SMV Puram, Villianur, Puducherry – 605110', href: 'https://maps.google.com/?q=NAPCEN+Villianur+Puducherry', itemProp: 'address' },
            { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+91-7904469219', href: 'tel:+917904469219', itemProp: 'telephone' },
            { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'sales@napcen.com', href: 'mailto:sales@napcen.com', itemProp: 'email' },
          ].map((item) => (
            <a key={item.label} href={item.href}
              target={item.label === 'Factory' ? '_blank' : undefined}
              rel={item.label === 'Factory' ? 'noopener noreferrer' : undefined}
              className="flex items-start gap-4 p-5 bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/25 hover:bg-white/[0.04] rounded-2xl transition-all group"
              itemProp={item.itemProp}>
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
                {item.icon}
              </div>
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-0.5">{item.label}</p>
                <p className="text-white/70 text-xs font-medium leading-relaxed">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
        <p className="text-center text-white/25 text-xs flex items-center justify-center gap-2">
          <Clock className="w-3.5 h-3.5" />
          Mon–Sat, 9:00 AM – 6:00 PM IST &nbsp;·&nbsp; Quote turnaround within 2 hours
        </p>
      </Section>

      {/* ── 16. PREV / NEXT ── */}
      {(prevProduct || nextProduct) && (
        <Section divider>
          <p className="text-center text-white/25 text-[10px] font-black uppercase tracking-[0.4em] mb-6">More {categoryTitle}</p>
          <div className="grid grid-cols-2 gap-4">
            {prevProduct && (
              <Link href={`/products/${categorySlug}/${prevProduct.slug}`}
                className="flex items-center gap-4 p-5 bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/25 hover:bg-white/[0.04] rounded-2xl transition-all group">
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all">
                  <ChevronRight className="w-4 h-4 text-cyan-400 rotate-180" />
                </div>
                <div>
                  <p className="text-white/25 text-[10px] uppercase tracking-widest mb-0.5">Previous</p>
                  <p className="text-white/70 text-sm font-bold">{prevProduct.label}</p>
                </div>
              </Link>
            )}
            {nextProduct && (
              <Link href={`/products/${categorySlug}/${nextProduct.slug}`}
                className="flex items-center justify-end gap-4 p-5 bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/25 hover:bg-white/[0.04] rounded-2xl transition-all group text-right">
                <div>
                  <p className="text-white/25 text-[10px] uppercase tracking-widest mb-0.5">Next</p>
                  <p className="text-white/70 text-sm font-bold">{nextProduct.label}</p>
                </div>
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all">
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </div>
              </Link>
            )}
          </div>
        </Section>
      )}

      {/* ── 17. FINAL CTA BANNER ── */}
      <div className="container mx-auto px-6 pb-20 max-w-6xl">
        <div className="relative overflow-hidden bg-gradient-to-r from-cyan-500/10 via-cyan-500/5 to-transparent border border-cyan-500/20 rounded-3xl p-10 text-center">
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-cyan-500/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-cyan-500/5 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-3">
              Get {product.label} Price &amp; Datasheet
            </h2>
            <p className="text-white/50 text-sm mb-8 max-w-lg mx-auto">
              Share your airflow requirement and process details — we'll respond with a detailed quote, technical drawings, and CPCB compliance certificate within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <button onClick={() => setOpenModal(true)}
                className="w-full flex items-center justify-center gap-3 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xs uppercase tracking-[0.25em] rounded-2xl transition-all shadow-[0_15px_40px_-8px_rgba(0,229,255,0.35)]">
                <Download className="w-4 h-4" /> Get Datasheet + Quote
              </button>
              <button onClick={() => setOpenModal(true)}
                className="w-full flex items-center justify-center gap-3 py-4 border border-white/20 hover:bg-white/10 hover:border-white/30 font-black text-xs uppercase tracking-[0.25em] rounded-2xl transition-all">
                <PhoneCall className="w-4 h-4" /> Request Callback
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── 18. sr-only SEO ── */}
      <div className="sr-only">
        <h3>{product.label} manufacturer in Puducherry Pondicherry India — NAPCEN</h3>
        <p>
          NAPCEN is a leading {product.label} manufacturer, supplier, installer, and service provider in Puducherry (Pondicherry), India.
          {product.label} supply to Chennai, Coimbatore, Madurai, Salem, Trichy, Tirunelveli, Tamil Nadu, Bengaluru, Hyderabad, Mumbai, Pune, Delhi, Ahmedabad, Kolkata, Kochi, Visakhapatnam, Nagpur, Surat, Jaipur, all India.
          {product.label} price India. {product.label} cost India. Buy {product.label} India.
          CPCB compliant {product.label}. TNPCB compliant {product.label}.
          {product.label} installation India. {product.label} AMC India.
          {product.seoKeywords?.join('. ')}.
          NAPCEN manufactures: wet scrubbers, packed bed scrubbers, venturi scrubbers, ammonia scrubbers, HCL scrubbers, chlorine scrubbers, dry scrubbers, PP FRP scrubbers, pulse jet dust collectors, cyclone dust collectors, cartridge dust collectors, welding fume extractors, laser fume extractors, downdraft tables, welding downdraft tables, grinding downdraft tables, fume hoods, industrial blowers, heat exchangers, oil mist collectors, grossing stations, FRP lining, industrial ventilation systems — Puducherry, India.
        </p>
      </div>

      {/* ── 19. QUOTE MODAL ── */}
      {openModal && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          role="dialog" aria-modal="true">
          <div className="w-full max-w-lg bg-[#0D1F22] border border-white/10 rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)]">
            {/* Modal header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-white/[0.06] bg-white/[0.02]">
              <div>
                <h2 className="text-base font-black uppercase tracking-tight text-white">Request a Quote</h2>
                <p className="text-white/35 text-xs mt-0.5">{product.label} — NAPCEN, Puducherry, India</p>
              </div>
              <button onClick={() => setOpenModal(false)}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white/50 hover:text-white flex items-center justify-center transition-all text-sm"
                aria-label="Close">✕</button>
            </div>
            {/* Modal body */}
            <div className="p-7 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Your Name *', type: 'text', placeholder: 'e.g. Rahul Sharma', key: 'name' },
                  { label: 'Phone Number *', type: 'tel', placeholder: '+91 99999 99999', key: 'phone' },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-[9px] font-black text-cyan-500 uppercase tracking-[0.2em] mb-1.5">{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-cyan-500/50 p-3.5 rounded-xl text-sm text-white outline-none transition-all placeholder:text-white/15" />
                  </div>
                ))}
              </div>
              {[
                { label: 'Company Name', type: 'text', placeholder: 'Your company or plant name', key: 'company' },
                { label: 'Email Address', type: 'email', placeholder: 'you@company.com', key: 'email' },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-[9px] font-black text-cyan-500 uppercase tracking-[0.2em] mb-1.5">{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder}
                    value={formData[field.key as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-cyan-500/50 p-3.5 rounded-xl text-sm text-white outline-none transition-all placeholder:text-white/15" />
                </div>
              ))}
              <div>
                <label className="block text-[9px] font-black text-cyan-500 uppercase tracking-[0.2em] mb-1.5">Requirement (Optional)</label>
                <textarea placeholder="Airflow volume, pollutant type, industry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-cyan-500/50 p-3.5 rounded-xl text-sm text-white outline-none transition-all placeholder:text-white/15 resize-none" />
              </div>
              <div className="flex items-center gap-3 bg-cyan-500/5 border border-cyan-500/15 rounded-xl px-4 py-3">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <p className="text-white/50 text-xs">Enquiry for <strong className="text-white">{product.label}</strong> — response within 2 hours</p>
              </div>
              <button
                onClick={() => { alert('Thank you! Our team will call you within 2 hours.'); setOpenModal(false); }}
                className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xs uppercase tracking-[0.25em] rounded-xl transition-all shadow-lg shadow-cyan-500/20">
                Submit — Get Quote in 2 Hours
              </button>
              <p className="text-center text-white/25 text-[10px]">
                Or call: <a href="tel:+917904469219" className="text-cyan-400">+91-7904469219</a>
                &nbsp;·&nbsp; <a href="mailto:sales@napcen.com" className="text-cyan-400">sales@napcen.com</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}