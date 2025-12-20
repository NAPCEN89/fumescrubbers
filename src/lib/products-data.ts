// src/lib/products-data.ts (or your file path)
import { productImages } from '@/assets/productImages'; // Adjust alias/path if needed (@/ usually works in Next.js)

export const productData: Record<string, any> = {
  // --- CATEGORY 1: WET SCRUBBERS ---
  "wet-scrubbers": {
    title: "Industrial Wet Scrubbing Systems",
    seoDescription: "CPCB Compliant Wet Scrubbers for Acid Fumes, Chemical Gases, Particulate, and Odor Removal.",
    items: [
      {
        label: 'Packed Bed Scrubber',
        slug: 'packed-bed',
        image: productImages.packedBed,
        description: 'Counter-current packed tower for superior gas absorption of soluble gases like HCl, NH3, SO2, HF with >99% efficiency.',
        specs: { MOC: 'PP-FRP / PVDF / SS 316 / MS-FRP', Efficiency: 'Up to 99.9% for soluble gases', Airflow: 'Up to 1,00,000 CMH', PressureDrop: 'Low (50-150 mm WG)' },
        features: ['Counter-current flow design', 'Multi-stage mist eliminators', 'Random (Raschig/Pall Rings) or Structured packing', 'Integral recycle tank & pump', 'pH/ORP controlled dosing'],
        applications: ['Pharma Manufacturing', 'Chemical Processing', 'Steel Pickling Lines', 'Fertilizer Plants', 'Electroplating', 'Odor Control']
      },
      {
        label: 'Venturi Scrubber',
        slug: 'venturi',
        image: productImages.venturi,
        description: 'High-energy scrubber for sub-micron particulate and sticky dust removal down to 0.5 microns with simultaneous gas absorption.',
        specs: { PressureDrop: '250-1000 mm WG', Material: 'MS-FRP Lined / SS 316', Capture: 'Down to 0.5 Microns', Efficiency: '>99% for particulates' },
        features: ['High-velocity throat atomization', 'Adjustable throat for variable loads', 'Self-cleaning design', 'Flooded elbow separator', 'Quench section for hot gases'],
        applications: ['Foundries', 'Boiler Exhaust', 'Incinerators', 'Cement Plants', 'Metal Processing', 'Mining', 'Combustible Dust Handling']
      },
      {
        label: 'Ammonia Scrubber',
        slug: 'ammonia-scrubber',
        image: productImages.ammoniaScrubber,
        description: 'Packed bed system with acid reagent (H2SO4/HCl) for neutralization of NH3 and recovery as ammonium salts.',
        specs: { Automation: 'Auto pH Dosing & Control', Sensor: 'Gas Leak Detectors / pH Sensors', Efficiency: 'Up to 99.9%', Recovery: 'Optional Ammonium Salt Recovery' },
        features: ['Chemical-specific reagent tanks', 'PLC-controlled dosing pumps', 'Multi-stage for mixed gases', 'Corrosion-resistant construction'],
        applications: ['Fertilizer Plants', 'Cold Storages', 'Waste Water Treatment', 'Refrigeration Systems', 'Chemical Industry']
      },
      {
        label: 'HCl Scrubber',
        slug: 'hcl-scrubber',
        image: productImages.hclScrubber,
        description: 'Highly efficient packed bed system for hydrochloric acid fumes using water or caustic neutralization.',
        specs: { Reagent: 'Water / NaOH', Efficiency: '>99.9%', MOC: 'PP-FRP / PVDF / Graphite' },
        features: ['High solubility capture', 'Low pressure drop option', 'Blowdown control for salt management', 'Mist elimination stages'],
        applications: ['Pickling Lines', 'Chemical Manufacturing', 'Galvanizing Plants', 'Pharmaceuticals', 'Battery Manufacturing']
      },
      {
        label: 'Chlorine Scrubber',
        slug: 'chlorine-scrubber',
        image: productImages.chlorineScrubber,
        description: 'Caustic-based packed tower for emergency or process scrubbing of Cl2 gas with rapid neutralization.',
        specs: { Reagent: 'NaOH Solution', Efficiency: '99.9%', Automation: 'Redox / pH Control' },
        features: ['Rapid neutralization reaction', 'Emergency shutdown integration', 'Multi-stage mist elimination', 'Leak detection sensors'],
        applications: ['Water Treatment Plants', 'Pulp & Paper', 'Textile Bleaching', 'Chemical Storage Vents', 'PVC Manufacturing']
      },
      {
        label: 'Boiler Flue Gas / SO2 Scrubber',
        slug: 'boiler-flue',
        image: productImages.boilerFlue,
        description: 'Alkaline reagent system for sulfur dioxide and acid gas removal from boiler or process flue gases.',
        specs: { Reagent: 'Lime / Caustic Soda', Efficiency: '95-99% SO2 Removal', Airflow: 'High Volume Capacity' },
        features: ['Quench section for hot gases', 'pH controlled dosing', 'Gypsum byproduct option', 'Demister pads'],
        applications: ['Industrial Boilers', 'Incinerators', 'Sulfuric Acid Plants', 'Power Plants', 'Glass Manufacturing']
      },
      {
        label: 'Chromic Acid Scrubber',
        slug: 'chromic-acid',
        image: productImages.chromicAcid,
        description: 'Specialized mesh pad or packed bed for hexavalent chromium mist removal in plating operations.',
        specs: { Efficiency: '>99% for Cr(VI) Mist', MOC: 'Special Alloys / PVDF / PP' },
        features: ['Multi-layer mesh pads', 'Periodic flushing system', 'Compliance with strict Cr emission limits', 'Low pressure drop'],
        applications: ['Chrome Plating', 'Anodizing', 'Metal Finishing', 'Aerospace Components']
      },
      {
        label: 'Nitric Acid / NOx Scrubber',
        slug: 'nitric-acid',
        image: productImages.nitricAcid,
        description: 'Multi-stage system for NOx and nitric acid vapors control using specialized oxidizing/reducing reagents.',
        specs: { Efficiency: '90-99% for NOx', Stages: 'Multi-stage with Selective Reagent' },
        features: ['Reducing/oxidizing agent dosing', 'High temperature handling', 'Corrosion-resistant internals'],
        applications: ['Nitration Processes', 'Metal Etching', 'Fertilizer Production', 'Semiconductor Manufacturing']
      },
      {
        label: 'Sulfuric Acid Scrubber',
        slug: 'sulfuric-acid',
        image: productImages.sulfuricAcid,
        description: 'High-concentration H2SO4 mist capture in acid plants or drying processes using chilled water or caustic.',
        specs: { Efficiency: '>99% Mist Removal', MOC: 'Special Alloys / Glass Lined' },
        features: ['Fiber bed mist eliminators', 'Cooling coils for condensation', 'Acid-resistant construction'],
        applications: ['Sulfuric Acid Production', 'Alkylation Units', 'Drying Towers']
      },
      {
        label: 'CO2 Scrubber',
        slug: 'co2',
        image: productImages.co2Scrubber,
        description: 'Amine or alkaline solution-based system for carbon dioxide capture from process streams.',
        specs: { Reagent: 'MEA / Caustic', Efficiency: 'Up to 95% CO2 Capture' },
        features: ['Regenerable amine system option', 'Heat recovery integration', 'Low energy consumption design'],
        applications: ['Biogas Upgrading', 'Food Processing', 'Chemical Synthesis', 'Carbon Capture']
      },
      {
        label: 'Foundry Exhaust Scrubber',
        slug: 'foundry-exhaust',
        image: productImages.foundryExhaust,
        description: 'Combined particulate and fume control for metal casting and melting operations.',
        specs: { Efficiency: '>98% Particulates & Gases', Type: 'Venturi + Packed Bed Hybrid' },
        features: ['High temperature resistance', 'Sludge handling system', 'Spark arrestor'],
        applications: ['Iron Foundries', 'Aluminum Melting', 'Non-Ferrous Casting']
      },
      {
        label: 'Glue Vapour / VOC Scrubber',
        slug: 'glue-vapour',
        image: productImages.glueVapour,
        description: 'Solvent vapor and VOC removal from adhesive manufacturing and application processes.',
        specs: { Media: 'Activated Carbon + Water', Efficiency: '90-99% VOC Removal' },
        features: ['Hybrid wet + carbon stage', 'Explosion-proof design', 'Regenerable carbon option'],
        applications: ['Adhesive Production', 'Lamination', 'Coating Lines']
      },
      {
        label: 'Caustic / Alkali Fume Scrubber',
        slug: 'caustic',
        image: productImages.caustic,
        description: 'Acid reagent dosing for neutralization of strong alkaline vapors like NaOH or KOH mists.',
        specs: { Reagent: 'Acid Solution', Efficiency: '>99%' },
        features: ['pH controlled neutralization', 'Corrosion-resistant MOC', 'Demister for mist control'],
        applications: ['Caustic Soda Plants', 'Alumina Processing', 'Soap Manufacturing']
      },
      {
        label: 'Plastic Fume Scrubber',
        slug: 'plastic-fume',
        image: productImages.plasticFume,
        description: 'Control of HCl, organic fumes, and dioxins from plastic processing, extrusion, and recycling.',
        specs: { Efficiency: '>98% HCl & Organics', Type: 'Multi-stage' },
        features: ['Quench + Packed Bed + Carbon', 'High temperature handling', 'Dioxin control option'],
        applications: ['PVC Extrusion', 'Plastic Recycling', 'Thermoforming']
      },
      {
        label: 'General Acid Fume Scrubber',
        slug: 'acid-fume',
        image: productImages.acidFume,
        description: 'Versatile system for mixed acid fumes (H2SO4, HF, HNO3, etc.) with high solubility capture.',
        specs: { Efficiency: '>99% Mixed Acids', MOC: 'PP-FRP / PVDF' },
        features: ['Custom reagent blending', 'Multi-stage absorption', 'Blowdown management'],
        applications: ['Mixed Chemical Processes', 'Laboratory Exhaust', 'Battery Charging Stations']
      },
      {
        label: 'Hospital Waste Incinerator Scrubber',
        slug: 'hospital-waste',
        image: productImages.hospitalWaste,
        description: 'Multi-stage system for dioxins, HCl, particulates, and heavy metals from medical waste incineration.',
        specs: { Efficiency: '>99% Dioxins & HCl', Stages: 'Quench + Venturi + Packed Bed' },
        features: ['Activated carbon injection', 'Baghouse integration', 'Compliance with stringent norms'],
        applications: ['Medical Waste Incinerators', 'Hazardous Waste Treatment']
      },
      {
        label: 'Vent Gas Scrubber',
        slug: 'vent-gas',
        image: productImages.ventGas,
        description: 'Treatment of storage tank or reactor vent gases containing VOCs, acids, and solvents.',
        specs: { Efficiency: '95-99% VOCs', Type: 'Packed Bed + Carbon Polishing' },
        features: ['Explosion-proof design', 'Flame arrestor', 'Low maintenance'],
        applications: ['Storage Tanks', 'Reactor Vents', 'Loading Stations']
      }
    ]
  },

  // --- CATEGORY 2: DRY SCRUBBERS ---
  "dry-scrubbers": {
    title: "Dry & Semi-Dry Scrubbing Systems",
    seoDescription: "Water-free and low-water air pollution control for acid gas neutralization, H2S, VOCs, and odor removal.",
    items: [
      {
        label: 'Dry Sorbent Injection (DSI)',
        slug: 'dsi-scrubber',
        image: '/images/products/dry-scrubber/dsi.jpg', // Keeping original string path as it was public
        description: 'Direct injection of alkaline powders into flue gas for acid gas (SO2, HCl, HF) neutralization.',
        specs: { Sorbent: 'Hydrated Lime / Trona / Soda Ash', Efficiency: '70-90% SO2 / >95% HCl Removal' },
        features: ['No wastewater generation', 'Low capital cost', 'Space-saving design', 'Rapid installation', 'Flexible for varying loads'],
        applications: ['Thermal Power Plants', 'Glass Manufacturing', 'Brick Kilns', 'Waste-to-Energy', 'Industrial Boilers']
      },
      {
        label: 'Spray Dryer Absorber (SDA)',
        slug: 'sda-scrubber',
        image: '/images/products/dry-scrubber/sda.jpg',
        description: 'Semi-dry system using atomized lime slurry for acid gas removal with dry powder byproduct.',
        specs: { Stage: 'Atomizer + Baghouse/ESP', EndProduct: 'Dry Powder', Efficiency: '90-98% SO2 Removal' },
        features: ['Zero Liquid Discharge (ZLD)', 'High thermal efficiency', 'Lower water consumption', 'Byproduct utilization possible'],
        applications: ['Waste-to-Energy Plants', 'Hazardous Waste Incineration', 'Large Boilers', 'Cement Kilns']
      },
      {
        label: 'H2S / Odor Control Dry Scrubber',
        slug: 'h2s-dry-scrubber',
        image: productImages.h2sDry,
        description: 'Activated carbon or impregnated media for hydrogen sulfide and odor compound removal in wastewater or industrial vents.',
        specs: { Media: 'Activated Carbon / Iron Oxide', Efficiency: '>99% H2S Removal', Airflow: '50-4000 CMH' },
        features: ['No chemicals or water required', 'Low pressure drop', 'Long media life', 'Easy media replacement'],
        applications: ['Wastewater Treatment', 'Sewage Pump Stations', 'Manure Processing', 'Food Industry Odors']
      },
      {
        label: 'VOC Dry Scrubber',
        slug: 'voc-dry-scrubber',
        image: productImages.vocDry,
        description: 'Deep-bed activated carbon adsorber for volatile organic compounds and solvent vapors.',
        specs: { Media: 'High Surface Area Carbon', Efficiency: '95-99% VOC Removal' },
        features: ['Radial or vertical flow options', 'Regenerable media option', 'Explosion-proof fans', 'Low maintenance'],
        applications: ['Painting Booths', 'Printing Industry', 'Chemical Storage Vents', 'Solvent Recovery']
      }
    ]
  },

  // --- CATEGORY 3: DUST COLLECTORS ---
  "dust-collectors": {
    title: "Advanced Dust Collection Systems",
    seoDescription: "Industrial Grade Pulse Jet Baghouses, Cartridge, Cyclone, and Portable Collectors.",
    items: [
      {
        label: 'Pulse Jet Baghouse',
        slug: 'pulse-jet-baghouse',
        image: productImages.bagHouse,
        description: 'Continuous duty filtration for heavy dust loads with online pulse cleaning.',
        specs: { FilterMedia: 'Polyester / Nomex / PPS / PTFE', Efficiency: '99.99% @ 1 Micron', Airflow: 'Up to 5,00,000 CMH' },
        features: ['Online pulse cleaning', 'Modular construction', 'Explosion vents (ATEX/NFPA)', 'Differential pressure control', 'Cage & venturi design'],
        applications: ['Steel Industry', 'Cement Plants', 'Woodworking', 'Grain Handling', 'Mining', 'Pharma Powder Handling']
      },
      {
        label: 'Cartridge Dust Collector',
        slug: 'cartridge-collector',
        image: productImages.cartridge,
        description: 'Compact, high-efficiency pleated cartridge filtration for fine powders.',
        specs: { Media: 'Nanofiber / PTFE Laminated', Efficiency: '99.99% @ 0.5 Micron', Footprint: '50-70% smaller than Baghouse' },
        features: ['Easy cartridge replacement', 'Quiet operation', 'Integrated fan', 'Vertical cartridge for better cleaning', 'Pulse jet cleaning'],
        applications: ['Powder Coating', 'Plasma/Laser Cutting', 'Food Processing', 'Pharmaceuticals', 'Metal Grinding']
      },
      {
        label: 'Cyclone Separator',
        slug: 'cyclone-separator',
        image: productImages.cyclone,
        description: 'Centrifugal pre-cleaner for heavy/coarse particles with no filters.',
        specs: { Type: 'High Efficiency / High Throughput', Efficiency: '90-95% >10 Micron', Maintenance: 'Filter-Free' },
        features: ['No moving parts', 'High temperature capability (up to 800°C)', 'Abrasion-resistant lining', 'Multiple cyclone options'],
        applications: ['Sawmills', 'Paper Industry', 'Pre-filter for Baghouses', 'Wood Chips', 'Product Separation']
      },
      {
        label: 'Portable Dust Collector',
        slug: 'portable-collector',
        image: productImages.portableDust,
        description: 'Mobile unit for localized dust capture in changing work areas.',
        specs: { Airflow: '1000-5000 CMH', Filtration: 'Cartridge or Bag' },
        features: ['Castor wheels', 'Flexible arm option', 'Plug-and-play', 'Compact design'],
        applications: ['Maintenance Workshops', 'Construction Sites', 'Spot Cleaning', 'Small Scale Operations']
      },
      {
        label: 'Single Stage Dust Collector',
        slug: 'single-stage',
        image: productImages.singleStage,
        description: 'Direct blower-mounted collector for light to medium dust loads.',
        specs: { Efficiency: '95-98% Coarse Dust', Type: 'Cyclonic + Bag' },
        features: ['Simple & economical', 'Direct drive', 'Easy bag cleaning'],
        applications: ['Woodworking Shops', 'Small Fabrication', 'Grain Dust']
      },
      {
        label: 'Two Stage Dust Collector',
        slug: 'two-stage',
        image: productImages.twoStage,
        description: 'Cyclone pre-separator + secondary filter for longer filter life and better efficiency.',
        specs: { Efficiency: '>99% with Fine Dust', Stages: 'Cyclone + Cartridge/Bag' },
        features: ['Extended filter life', 'Higher efficiency on mixed dust', 'Lower maintenance'],
        applications: ['Heavy Woodworking', 'Metal Grinding', 'Foundries', 'Mixed Dust Applications']
      }
    ]
  },

  // --- CATEGORY 4: FUME EXTRACTORS ---
  "fume-extractors": {
    title: "Fume Extraction & Filtration Units",
    seoDescription: "Mobile and Centralized extraction for Welding, Laser, Soldering, Laboratory, Printing, and Gold Refining fumes.",
    items: [
      {
        label: 'Mobile Welding Fume Extractor',
        slug: 'mobile-welding-extractor',
        image: productImages.weldingFume,
        description: 'Portable source capture with 360° flexible suction arm for welding fumes.',
        specs: { Airflow: '1500-3000 CMH', Filtration: '3-Stage (Spark Arrestor + HEPA + Carbon)' },
        features: ['Plug-and-play', 'Castor wheels for mobility', 'Spark arrestor mesh', 'Self-cleaning option', 'Low noise'],
        applications: ['Manual Welding', 'Maintenance Workshops', 'Grinding', 'Fabrication Shops']
      },
      {
        label: 'Laser/Plasma Fume Extractor',
        slug: 'laser-fume-extractor',
        image: productImages.laserFume,
        description: 'High-vacuum system for CNC laser/plasma cutting machines with fine particulate capture.',
        specs: { Motor: 'High Static Pressure', Filter: 'PTFE Coated Cartridges + HEPA' },
        features: ['Automatic pulse cleaning', 'Interface with CNC controller', 'Explosion-proof option', 'Ultra-fine filtration'],
        applications: ['Fiber Laser Cutting', 'Plasma Tables', 'Robotic Welding', 'Metal Engraving']
      },
      {
        label: 'Soldering Fume Extractor',
        slug: 'soldering-extractor',
        image: productImages.soldering,
        description: 'Benchtop or arm-mounted extractor for rosin-based soldering fumes and vapors.',
        specs: { Airflow: '200-500 CMH', Filtration: 'Multi-layer (Pre + HEPA + Activated Carbon)' },
        features: ['ESD safe', 'Quiet operation', 'Flexible nozzle/arm', 'Filter status indicator'],
        applications: ['Electronics Assembly', 'PCB Soldering', 'Rework Stations']
      },
      {
        label: 'Gold Refining Fume Extractor',
        slug: 'gold-extractor',
        image: productImages.goldFume,
        description: 'Acid-resistant system for aqua regia and nitric acid fumes in gold refining.',
        specs: { MOC: 'PP / PVDF', Filtration: 'Chemical-resistant + Carbon' },
        features: ['Corrosion-proof construction', 'High chemical resistance', 'Scrubber integration option'],
        applications: ['Jewelry Manufacturing', 'Gold Refining', 'Precious Metal Recovery']
      },
      {
        label: 'Laboratory Fume Extractor',
        slug: 'laboratory-extractor',
        image: productImages.laboratoryFume,
        description: 'Ductless or arm extractor for chemical vapors in labs and research facilities.',
        specs: { Filtration: 'HEPA + Specialized Chemical Carbon' },
        features: ['Filter saturation alarm', 'Low airflow alarm', 'Portable or fixed'],
        applications: ['Chemical Labs', 'Research Facilities', 'Educational Institutions', 'Fume Hoods']
      },
      {
        label: 'Printing Fume Extractor',
        slug: 'printing-extractor',
        image: productImages.printingFume,
        description: 'Solvent vapor and ink fume extraction for printing and coating processes.',
        specs: { Efficiency: '>99% VOCs', Filter: 'Activated Carbon + Pre-filter' },
        features: ['Explosion-proof fan', 'High carbon volume', 'Easy carbon replacement'],
        applications: ['Flexographic Printing', 'Screen Printing', 'Digital Printing', 'Solvent-Based Inks']
      }
    ]
  },

  // --- CATEGORY 5: DOWNDRAFT TABLES ---
  "downdraft-tables": {
    title: "Integrated Downdraft Workstations",
    seoDescription: "Industrial workbenches with built-in dust and fume extraction for grinding, welding, woodworking, and more.",
    items: [
      {
        label: 'Dry Downdraft Table',
        slug: 'dry-downdraft',
        image: productImages.dryDowndraft,
        description: 'Ergonomic workbench with cartridge filtration for dry dust from sanding, grinding, and welding.',
        specs: { LoadCapacity: '200-1000 kg', Surface: 'Perforated Steel / Anti-Spark' },
        features: ['Backdraft + Downdraft suction', 'Built-in pulse jet filters', 'Side/back panels option', 'LED lighting'],
        applications: ['Metal Finishing', 'Buffing', 'Deburring', 'Small Part Welding', 'Composite Sanding']
      },
      {
        label: 'Wet Downdraft Table',
        slug: 'wet-downdraft',
        image: productImages.grindingDowndraft, // Using closest available; change if you have a specific wet image
        description: 'Water curtain system for safe capture of explosive/combustible metal dusts.',
        specs: { Safety: 'NFPA Compliant Explosion Proof', Media: 'Water Curtain + Sludge Trap' },
        features: ['Eliminates fire/explosion risk', 'Sludge collection drawer', 'Auto water level control', 'Pump recirculation'],
        applications: ['Aluminum/Titanium/Magnesium Grinding', 'Aerospace Components', 'Defense Manufacturing']
      },
      {
        label: 'Grinding Downdraft Table',
        slug: 'grinding-downdraft',
        image: productImages.grindingDowndraft,
        description: 'Heavy-duty table optimized for metal grinding sparks and dust.',
        specs: { Filtration: 'Spark Arrestor + Cartridge', Load: 'Up to 800 kg' },
        features: ['Spark baffles', 'High face velocity', 'Abrasion-resistant surface'],
        applications: ['Heavy Grinding', 'Tool Sharpening', 'Foundry Deburring']
      },
      {
        label: 'Polishing Downdraft Table',
        slug: 'polishing-downdraft',
        image: productImages.polishingDowndraft,
        description: 'Fine dust capture for polishing and buffing operations.',
        specs: { Efficiency: '99.9% Fine Dust', Surface: 'Non-scratch' },
        features: ['HEPA filtration option', 'Quiet fan', 'Adjustable height'],
        applications: ['Metal Polishing', 'Jewelry Finishing', 'Plastic Buffing']
      },
      {
        label: 'Welding Downdraft Table',
        slug: 'welding-downdraft',
        image: productImages.weldingDowndraft,
        description: 'Source capture table for welding fumes and light grinding.',
        specs: { Airflow: 'High Volume Downdraft', Filtration: 'Fume-Specific Cartridges' },
        features: ['Vented back stop', 'Clamping fixtures', 'Grounding points'],
        applications: ['Small Part Welding', 'Fabrication', 'Training Workshops']
      },
      {
        label: 'Woodworking Downdraft Table',
        slug: 'woodworking-downdraft',
        image: productImages.woodworkingDowndraft,
        description: 'Large surface table for sanding and finishing wood dust capture.',
        specs: { Surface: 'Large Perforated Area', Filtration: 'High Volume Bag/Cartridge' },
        features: ['Non-marking top', 'Easy dust bin access', 'Low noise'],
        applications: ['Cabinet Making', 'Furniture Sanding', 'Wood Carving']
      },
      {
        label: 'Portable Downdraft Table',
        slug: 'portable-downdraft',
        image: productImages.portableDowndraft,
        description: 'Mobile downdraft workstation for flexible use in varying locations.',
        specs: { Mobility: 'Castor Wheels with Locks', Power: 'Plug-in' },
        features: ['Foldable sides option', 'Integrated blower', 'Compact storage'],
        applications: ['Field Maintenance', 'Small Shops', 'Temporary Workstations']
      }
    ]
  }
};