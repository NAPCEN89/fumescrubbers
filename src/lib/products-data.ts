/**
 * NAPCEN - HIGH PERFORMANCE PRODUCT DATA (2025 COMPLETE)
 * Optimized for WebP and SEO-friendly paths.
 */

const IMG_BASE = '/assets/images/products';

export const productData: Record<string, any> = {
  // --- CATEGORY 1: WET SCRUBBERS ---
  "wet-scrubbers": {
    title: "Industrial Wet Scrubbing Systems",
    seoDescription: "CPCB Compliant Wet Scrubbers for Acid Fumes, Chemical Gases, Particulate, and Odor Removal.",
    items: [
      {
        label: 'Packed Bed Scrubber',
        slug: 'packed-bed',
        image: { src: `${IMG_BASE}/wet-scrubber/Packed-Bed-Scrubbers.webp` },
        description: 'Counter-current packed tower for superior gas absorption of soluble gases like HCl, NH3, SO2, HF with >99% efficiency.',
        specs: { MOC: 'PP-FRP / PVDF / SS 316', Efficiency: 'Up to 99.9%', Airflow: 'Up to 1,00,000 CMH' },
        applications: ['Pharma Manufacturing', 'Chemical Processing', 'Steel Pickling Lines']
      },
      {
        label: 'Venturi Scrubber',
        slug: 'venturi',
        image: { src: `${IMG_BASE}/wet-scrubber/venturi-scrubbers.webp` },
        description: 'High-energy scrubber for sub-micron particulate and sticky dust removal down to 0.5 microns.',
        specs: { PressureDrop: '250-1000 mm WG', Material: 'MS-FRP Lined', Efficiency: '>99%' },
        applications: ['Foundries', 'Boiler Exhaust', 'Incinerators']
      },
      {
        label: 'Ammonia Scrubber',
        slug: 'ammonia-scrubber',
        image: { src: `${IMG_BASE}/wet-scrubber/Ammonia-scrubber-manufacturers.webp` },
        description: 'Packed bed system with acid reagent for neutralization of NH3.',
        specs: { Automation: 'Auto pH Dosing', Efficiency: '99.9%' },
        applications: ['Fertilizer Plants', 'Cold Storages']
      },
      {
        label: 'HCl Scrubber',
        slug: 'hcl-scrubber',
        image: { src: `${IMG_BASE}/wet-scrubber/HCL-Scrubber-manufacturer.webp` },
        description: 'Efficient packed bed system for hydrochloric acid fumes.',
        specs: { Reagent: 'Water / NaOH', MOC: 'PP-FRP / PVDF' },
        applications: ['Pickling Lines', 'Galvanizing Plants']
      },
      {
        label: 'Chlorine Scrubber',
        slug: 'chlorine-scrubber',
        image: { src: `${IMG_BASE}/wet-scrubber/Chlorine-Scrubber-india.webp` },
        description: 'Caustic-based packed tower for emergency Cl2 gas neutralization.',
        specs: { Reagent: 'NaOH Solution', Efficiency: '99.9%' },
        applications: ['Water Treatment', 'Chemical Storage Vents']
      },
      {
        label: 'Boiler Flue Gas Scrubber',
        slug: 'boiler-flue',
        image: { src: `${IMG_BASE}/wet-scrubber/Boiler-flue-gas-scrubber.webp` },
        description: 'Alkaline reagent system for sulfur dioxide and acid gas removal.',
        specs: { Efficiency: '95-99% SO2 Removal' },
        applications: ['Industrial Boilers', 'Incinerators']
      },
      {
        label: 'Chromic Acid Scrubber',
        slug: 'chromic-acid',
        image: { src: `${IMG_BASE}/wet-scrubber/Chromic-Acid-Scrubber-manufacturer.webp` },
        description: 'Specialized system for hexavalent chromium mist removal.',
        specs: { Efficiency: '>99% for Cr(VI)', MOC: 'PVDF / PP' },
        applications: ['Chrome Plating', 'Anodizing']
      },
      {
        label: 'Nitric Acid / NOx Scrubber',
        slug: 'nitric-acid',
        image: { src: `${IMG_BASE}/wet-scrubber/Nitric-Acid-Scrubber-manufacturer.webp` },
        description: 'Multi-stage system for NOx control using specialized reagents.',
        specs: { Efficiency: '90-99% for NOx' },
        applications: ['Nitration Processes', 'Metal Etching']
      },
      {
        label: 'Sulfuric Acid Scrubber',
        slug: 'sulfuric-acid',
        image: { src: `${IMG_BASE}/wet-scrubber/sulfuric-acid-scrubber-manufacturers.webp` },
        description: 'High-concentration H2SO4 mist capture system.',
        specs: { MOC: 'Special Alloys / PP-FRP' },
        applications: ['Acid Production', 'Alkylation Units']
      },
      {
        label: 'CO2 Scrubber',
        slug: 'co2',
        image: { src: `${IMG_BASE}/wet-scrubber/CO2-Scrubber-manufacturer.webp` },
        description: 'Alkaline solution-based system for carbon dioxide capture.',
        specs: { Reagent: 'MEA / Caustic', Efficiency: 'Up to 95%' },
        applications: ['Biogas Upgrading', 'Food Processing']
      },
      {
        label: 'Foundry Exhaust Scrubber',
        slug: 'foundry-exhaust',
        image: { src: `${IMG_BASE}/wet-scrubber/Foundry-Exhaust-Scrubber-manufacturer.webp` },
        description: 'Combined particulate and fume control for metal casting.',
        specs: { Efficiency: '>98%', SparkArrestor: 'Integrated' },
        applications: ['Iron Foundries', 'Aluminum Melting']
      },
      {
        label: 'Glue Vapour / VOC Scrubber',
        slug: 'glue-vapour',
        image: { src: `${IMG_BASE}/wet-scrubber/Glue-Vapor-Scrubber-manufacturer.webp` },
        description: 'Solvent vapor and VOC removal from adhesive processes.',
        specs: { Media: 'Activated Carbon / Water' },
        applications: ['Adhesive Production', 'Lamination']
      },
      {
        label: 'Caustic / Alkali Scrubber',
        slug: 'caustic',
        image: { src: `${IMG_BASE}/wet-scrubber/caustic.webp` },
        description: 'Acid reagent dosing for neutralization of alkaline vapors.',
        specs: { Efficiency: '>99%', MOC: 'PP-FRP' },
        applications: ['Caustic Soda Plants', 'Soap Manufacturing']
      },
      {
        label: 'Plastic Fume Scrubber',
        slug: 'plastic-fume',
        image: { src: `${IMG_BASE}/wet-scrubber/Plastic-Fume-Scrubber-manufacturer.webp` },
        description: 'Control of HCl and organic fumes from plastic processing.',
        specs: { Type: 'Multi-stage Quench + Bed' },
        applications: ['PVC Extrusion', 'Plastic Recycling']
      },
      {
        label: 'General Acid Fume Scrubber',
        slug: 'acid-fume',
        image: { src: `${IMG_BASE}/wet-scrubber/Acid-fume-scrubber-chennai.webp` },
        description: 'Versatile system for mixed acid fumes.',
        specs: { MOC: 'PP-FRP / PVDF' },
        applications: ['Laboratory Exhaust', 'Battery Charging']
      },
      {
        label: 'Hospital Waste Scrubber',
        slug: 'hospital-waste',
        image: { src: `${IMG_BASE}/wet-scrubber/Hospital-waste-Incinerator-wet-scrubber-manufacturers.webp` },
        description: 'Multi-stage system for medical waste incineration emissions.',
        specs: { Compliance: 'Strict CPCB Standards' },
        applications: ['Medical Waste Incinerators']
      },
      {
        label: 'Alkali Fume Scrubber',
        slug: 'alkali-fume',
        image: { src: `${IMG_BASE}/wet-scrubber/Alkali-fume-scrubber-manufacturers.webp` },
        description: 'Dedicated system for strong alkaline gas streams.',
        specs: { Reagent: 'Dilute Acid' },
        applications: ['Chemical Processing', 'Cleaning Lines']
      },
      {
        label: 'Vent Gas Scrubber',
        slug: 'vent-gas',
        image: { src: `${IMG_BASE}/wet-scrubber/vent-gas-scrubber-manufacturers.webp` },
        description: 'Treatment of storage tank or reactor vent gases.',
        specs: { Features: 'Explosion-proof fan' },
        applications: ['Storage Tanks', 'Reactor Vents']
      }
    ]
  },

  // --- CATEGORY 2: DUST COLLECTORS ---
  "dust-collectors": {
    title: "Advanced Dust Collection Systems",
    items: [
      {
        label: 'Pulse Jet Baghouse',
        slug: 'pulse-jet-baghouse',
        image: { src: `${IMG_BASE}/dust-collector/Baghouse-duct-collector-chennai.webp` },
        description: 'Continuous duty filtration for heavy dust loads.',
        specs: { Efficiency: '99.99% @ 1 Micron' },
        applications: ['Steel Industry', 'Cement Plants']
      },
      {
        label: 'Cartridge Dust Collector',
        slug: 'cartridge-collector',
        image: { src: `${IMG_BASE}/dust-collector/cartridge-duct-collector-manufacturers-pondicherry.webp` },
        description: 'Compact high-efficiency pleated filtration.',
        specs: { Media: 'Nanofiber' },
        applications: ['Powder Coating', 'Pharma']
      },
      {
        label: 'Cyclone Separator',
        slug: 'cyclone-separator',
        image: { src: `${IMG_BASE}/dust-collector/cyclone-duct-collector-chennai.webp` },
        description: 'Centrifugal pre-cleaner for coarse particles.',
        specs: { Type: 'Filter-free' },
        applications: ['Sawmills', 'Wood Chips']
      },
      {
        label: 'Portable Dust Collector',
        slug: 'portable-collector',
        image: { src: `${IMG_BASE}/dust-collector/Portable-duct-collectors-chennai.webp` },
        description: 'Mobile unit for localized dust capture.',
        specs: { Mobility: 'Locked Castors' },
        applications: ['Workshops', 'Spot Cleaning']
      },
      {
        label: 'Single Stage Dust Collector',
        slug: 'single-stage',
        image: { src: `${IMG_BASE}/dust-collector/Single-stage-duct-collector-coimbathur.webp` },
        description: 'Direct blower-mounted collector for light loads.',
        specs: { Efficiency: '95-98%' },
        applications: ['Woodworking Shops']
      },
      {
        label: 'Two Stage Dust Collector',
        slug: 'two-stage',
        image: { src: `${IMG_BASE}/dust-collector/Two-stage-duct-collector-chennai.webp` },
        description: 'Cyclone pre-separator + secondary filter.',
        specs: { Extends: 'Filter Life' },
        applications: ['Heavy Woodworking', 'Metal Grinding']
      }
    ]
  },

  // --- CATEGORY 3: FUME EXTRACTORS ---
  "fume-extractors": {
    title: "Fume Extraction Units",
    items: [
      {
        label: 'Welding Fume Extractor',
        slug: 'welding-fume',
        image: { src: `${IMG_BASE}/fume-extractor/Welding-fume-extractor.webp` },
        description: 'Portable source capture with flexible arm.',
        specs: { Filter: '3-Stage' },
        applications: ['Manual Welding']
      },
      {
        label: 'Laser Fume Extractor',
        slug: 'laser-fume',
        image: { src: `${IMG_BASE}/fume-extractor/Laser-fume-extractor.webp` },
        description: 'High-vacuum system for CNC machines.',
        specs: { Media: 'PTFE HEPA' },
        applications: ['Fiber Laser Cutting']
      },
      {
        label: 'Soldering Fume Extractor',
        slug: 'soldering-fume',
        image: { src: `${IMG_BASE}/fume-extractor/Soldering-fume-Extractor.webp` },
        description: 'Benchtop extractor for PCB soldering.',
        specs: { ESD: 'Safe' },
        applications: ['Electronics Assembly']
      },
      {
        label: 'Gold Fume Extractor',
        slug: 'gold-fume',
        image: { src: `${IMG_BASE}/fume-extractor/Gold-fume-extractor.webp` },
        description: 'Acid-resistant system for refining fumes.',
        specs: { MOC: 'PP' },
        applications: ['Jewelry Mfg']
      },
      {
        label: 'Laboratory Fume Extractor',
        slug: 'lab-fume',
        image: { src: `${IMG_BASE}/fume-extractor/Laboratory-fume-extractor.webp` },
        description: 'Ductless extractor for lab chemical vapors.',
        specs: { Filtration: 'Carbon + HEPA' },
        applications: ['Chemical Labs']
      },
      {
        label: 'Printing Fume Extractor',
        slug: 'printing-fume',
        image: { src: `${IMG_BASE}/fume-extractor/Printing-fume-extractor.webp` },
        description: 'Solvent vapor extraction for printing.',
        specs: { Safety: 'Explosion Proof' },
        applications: ['Digital Printing']
      }
    ]
  },

  // --- CATEGORY 4: DOWNDRAFT TABLES ---
  "downdraft-tables": {
    title: "Downdraft Workstations",
    items: [
      {
        label: 'Dry Downdraft Table',
        slug: 'dry-downdraft',
        image: { src: `${IMG_BASE}/downdraft-table/Downdraft-table-dust-collector.webp` },
        description: 'Ergonomic workbench with built-in filtration.',
        specs: { Load: '1000 kg' },
        applications: ['Metal Finishing', 'Deburring']
      },
      {
        label: 'Grinding Downdraft Table',
        slug: 'grinding-downdraft',
        image: { src: `${IMG_BASE}/downdraft-table/Grinding-downdraft-table.webp` },
        description: 'Heavy-duty table for grinding sparks.',
        specs: { Safety: 'Spark Arrestor' },
        applications: ['Heavy Grinding']
      },
      {
        label: 'Polishing Downdraft Table',
        slug: 'polishing-downdraft',
        image: { src: `${IMG_BASE}/downdraft-table/Polishing-downdraft-table.webp` },
        description: 'Fine dust capture for buffing.',
        specs: { Surface: 'Non-scratch' },
        applications: ['Jewelry Finishing']
      },
      {
        label: 'Portable Downdraft Table',
        slug: 'portable-downdraft',
        image: { src: `${IMG_BASE}/downdraft-table/Portable-downdraft-table.webp` },
        description: 'Mobile workstation for flexible use.',
        specs: { Mobility: 'Locked Castors' },
        applications: ['Field Maintenance']
      },
      {
        label: 'Welding Downdraft Table',
        slug: 'welding-downdraft',
        image: { src: `${IMG_BASE}/downdraft-table/welding-downdraft-table.webp` },
        description: 'Source capture for welding fumes.',
        specs: { Features: 'Vented Back Stop' },
        applications: ['Small Part Welding']
      },
      {
        label: 'Woodworking Downdraft Table',
        slug: 'woodworking-downdraft',
        image: { src: `${IMG_BASE}/downdraft-table/woodworking-downdraft-table.webp` },
        description: 'Large surface for sanding dust.',
        specs: { Noise: 'Low' },
        applications: ['Furniture Sanding']
      }
    ]
  }
};

export const extendedProductData: Record<string, any> = {
  ...productData,
  "all": {
    title: "Complete Industrial Air Solutions",
    seoDescription: "NAPCEN's complete 2025 catalog of Wet Scrubbers, Dust Collectors, Fume Extractors, and Downdraft Tables. CPCB & SPCB compliant industrial air pollution control systems.",
    items: Object.entries(productData).flatMap(([categorySlug, categoryData]) => 
      categoryData.items.map((item: any) => ({
        ...item,
        parentCategory: categorySlug 
      }))
    )
  }
};