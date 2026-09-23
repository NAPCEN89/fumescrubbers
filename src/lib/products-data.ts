/**
 * NAPCEN — COMPLETE PRODUCT DATA (SEO OPTIMIZED)
 * Every category, item description, and application
 * is written with Google-crawlable keywords for:
 * — product names + types
 * — location: Puducherry, Chennai, Tamil Nadu, India
 * — compliance: CPCB, TNPCB
 * — services: manufacturer, supplier, installation, AMC
 */

const IMG_BASE = '/assets/images/products';
const SITE = 'https://fumescrubbers.com'; // canonical domain — must match layout.tsx

// ─── Shared location + compliance suffix appended to descriptions ───
const LOC = 'Manufactured by NAPCEN in Puducherry, India. Serving Chennai, Tamil Nadu & all India. CPCB/TNPCB compliant.';

export const productData: Record<string, any> = {

  // ═══════════════════════════════════════════════════════════════
  // CATEGORY 1: WET SCRUBBERS
  // ═══════════════════════════════════════════════════════════════
  'wet-scrubbers': {
    title: 'Industrial Wet Scrubbers',
    seoTitle: 'Industrial Wet Scrubber Manufacturer in Puducherry India | NAPCEN',
    seoDescription:
      'NAPCEN manufactures CPCB/TNPCB compliant industrial wet scrubbers in Puducherry, India — Packed Bed, Venturi, Ammonia, HCL, Chlorine, NOx, SO2, PP FRP, and custom wet scrubbing systems for pharma, chemical, foundry, and automotive industries across Chennai, Tamil Nadu & India.',
    keywords: [
      'wet scrubber manufacturer India',
      'wet scrubber manufacturer Puducherry',
      'wet scrubber manufacturer Chennai',
      'industrial wet scrubber Tamil Nadu',
      'PP FRP wet scrubber India',
      'CPCB compliant wet scrubber',
    ],
    items: [
      {
        label: 'Packed Bed Scrubber',
        slug: 'packed-bed',
        image: {
          src: `${IMG_BASE}/wet-scrubber/Packed-Bed-Scrubbers.webp`,
          alt: 'Packed Bed Scrubber manufacturer Puducherry India — NAPCEN industrial wet scrubber',
        },
        description:
          'Counter-current packed tower for superior absorption of soluble gases including HCl, NH3, SO2, and HF with up to 99.9% removal efficiency. Constructed in PP-FRP, PVDF, or SS316. ' + LOC,
        specs: {
          MOC: 'PP-FRP / PVDF / SS 316',
          Efficiency: 'Up to 99.9%',
          Airflow: 'Up to 1,00,000 CMH',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Pharma Manufacturing', 'Chemical Processing', 'Steel Pickling Lines', 'Fertilizer Plants', 'Semiconductor Fabs'],
        seoKeywords: ['packed bed scrubber manufacturer India', 'packed bed wet scrubber Puducherry', 'PP FRP packed bed scrubber'],
      },
      {
        label: 'Venturi Scrubber',
        slug: 'venturi',
        image: {
          src: `${IMG_BASE}/wet-scrubber/venturi-scrubbers.webp`,
          alt: 'Venturi Scrubber manufacturer India — NAPCEN industrial high energy wet scrubber',
        },
        description:
          'High-energy venturi wet scrubber for sub-micron particulate removal down to 0.5 microns and simultaneous gas absorption. Ideal for sticky dust, foundry emissions, and boiler exhaust. ' + LOC,
        specs: {
          PressureDrop: '250–1000 mm WG',
          Material: 'MS-FRP Lined / PP-FRP',
          Efficiency: '>99%',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Iron & Aluminium Foundries', 'Boiler Exhaust', 'Incinerators', 'Cement Plants'],
        seoKeywords: ['venturi scrubber manufacturer India', 'venturi wet scrubber Chennai', 'high energy scrubber India'],
      },
      {
        label: 'Ammonia Scrubber',
        slug: 'ammonia-scrubber',
        image: {
          src: `${IMG_BASE}/wet-scrubber/Ammonia-scrubber-manufacturers.webp`,
          alt: 'Ammonia Scrubber manufacturer India — NAPCEN NH3 packed bed wet scrubber',
        },
        description:
          'Packed bed wet scrubber with automatic acid reagent pH dosing for neutralization of ammonia (NH3) gas from fertilizer plants, cold storages, and chemical processes. 99.9% NH3 removal efficiency. ' + LOC,
        specs: {
          Automation: 'Auto pH Dosing',
          Efficiency: '99.9%',
          MOC: 'PP-FRP',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Fertilizer Plants', 'Cold Storages', 'Chemical Plants', 'Pharmaceutical Manufacturing'],
        seoKeywords: ['ammonia scrubber manufacturer India', 'NH3 scrubber Puducherry', 'ammonia gas scrubber Tamil Nadu'],
      },
      {
        label: 'HCl Scrubber',
        slug: 'hcl-scrubber',
        image: {
          src: `${IMG_BASE}/wet-scrubber/HCL-Scrubber-manufacturer.webp`,
          alt: 'HCL Scrubber manufacturer India — NAPCEN hydrochloric acid fume scrubber',
        },
        description:
          'Efficient PP-FRP packed bed scrubber for hydrochloric acid (HCl) fume control from pickling lines, galvanizing plants, and chemical processes. NaOH/water reagent dosing with >99% HCl removal. ' + LOC,
        specs: {
          Reagent: 'Water / NaOH',
          MOC: 'PP-FRP / PVDF',
          Efficiency: '>99%',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Steel Pickling Lines', 'Galvanizing Plants', 'Chemical Manufacturing', 'Metal Treatment'],
        seoKeywords: ['HCL scrubber manufacturer India', 'hydrochloric acid scrubber Puducherry', 'pickling line fume scrubber India'],
      },
      {
        label: 'Chlorine Scrubber',
        slug: 'chlorine-scrubber',
        image: {
          src: `${IMG_BASE}/wet-scrubber/Chlorine-Scrubber-india.webp`,
          alt: 'Chlorine Scrubber manufacturer India — NAPCEN Cl2 gas caustic packed tower',
        },
        description:
          'Caustic soda (NaOH) based packed tower for emergency and continuous chlorine (Cl2) gas neutralization in water treatment plants and chemical storage facilities. 99.9% Cl2 removal efficiency. ' + LOC,
        specs: {
          Reagent: 'NaOH Solution',
          Efficiency: '99.9%',
          MOC: 'PP-FRP',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Water Treatment Plants', 'Chemical Storage Vents', 'Pulp & Paper Mills', 'Swimming Pool Plants'],
        seoKeywords: ['chlorine scrubber manufacturer India', 'Cl2 gas scrubber Chennai', 'caustic scrubber water treatment India'],
      },
      {
        label: 'Boiler Flue Gas Scrubber',
        slug: 'boiler-flue',
        image: {
          src: `${IMG_BASE}/wet-scrubber/Boiler-flue-gas-scrubber.webp`,
          alt: 'Boiler Flue Gas Scrubber manufacturer India — NAPCEN SO2 acid gas wet scrubber',
        },
        description:
          'Alkaline reagent wet scrubber for sulphur dioxide (SO2) and acid gas removal from industrial boiler and incinerator flue gases. Achieves 95–99% SO2 removal, fully CPCB compliant. ' + LOC,
        specs: {
          Efficiency: '95–99% SO2 Removal',
          Reagent: 'Lime / Caustic',
          MOC: 'PP-FRP / MS-FRP',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Industrial Boilers', 'Incinerators', 'Power Plants', 'Thermal Processing Units'],
        seoKeywords: ['boiler flue gas scrubber India', 'SO2 scrubber manufacturer India', 'acid gas scrubber boiler Tamil Nadu'],
      },
      {
        label: 'Chromic Acid Scrubber',
        slug: 'chromic-acid',
        image: {
          src: `${IMG_BASE}/wet-scrubber/Chromic-Acid-Scrubber-manufacturer.webp`,
          alt: 'Chromic Acid Scrubber manufacturer India — NAPCEN hexavalent chromium mist control',
        },
        description:
          'Specialized PP/PVDF wet scrubber for hexavalent chromium (Cr VI) mist removal from chrome plating and anodizing operations. >99% Cr(VI) removal, compliant with CPCB hazardous emission standards. ' + LOC,
        specs: {
          Efficiency: '>99% for Cr(VI)',
          MOC: 'PVDF / PP',
          Compliance: 'CPCB Hazardous Standards',
        },
        applications: ['Chrome Electroplating', 'Hard Chrome Plating', 'Anodizing Plants', 'Surface Treatment'],
        seoKeywords: ['chromic acid scrubber manufacturer India', 'chrome plating fume scrubber', 'hexavalent chromium scrubber India'],
      },
      {
        label: 'Nitric Acid / NOx Scrubber',
        slug: 'nitric-acid',
        image: {
          src: `${IMG_BASE}/wet-scrubber/Nitric-Acid-Scrubber-manufacturer.webp`,
          alt: 'NOx Scrubber manufacturer India — NAPCEN nitric acid fume wet scrubber',
        },
        description:
          'Multi-stage wet scrubber system for NOx (nitrogen oxides) and nitric acid fume control using specialized alkaline and oxidizing reagents. 90–99% NOx removal for nitration and metal etching processes. ' + LOC,
        specs: {
          Efficiency: '90–99% NOx Removal',
          Type: 'Multi-Stage',
          MOC: 'PP-FRP',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Nitration Processes', 'Metal Etching', 'Fertilizer Manufacturing', 'Chemical Synthesis'],
        seoKeywords: ['NOx scrubber manufacturer India', 'nitric acid scrubber Chennai', 'nitrogen oxide scrubber India'],
      },
      {
        label: 'Sulfuric Acid Scrubber',
        slug: 'sulfuric-acid',
        image: {
          src: `${IMG_BASE}/wet-scrubber/sulfuric-acid-scrubber-manufacturers.webp`,
          alt: 'Sulfuric Acid Scrubber manufacturer India — NAPCEN H2SO4 mist wet scrubber',
        },
        description:
          'High-concentration sulfuric acid (H2SO4) mist capture system using special alloy or PP-FRP construction for acid production, alkylation, and battery manufacturing applications. ' + LOC,
        specs: {
          MOC: 'Special Alloys / PP-FRP',
          Efficiency: '>99%',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Sulfuric Acid Production', 'Alkylation Units', 'Battery Manufacturing', 'Metal Refining'],
        seoKeywords: ['sulfuric acid scrubber manufacturer India', 'H2SO4 mist scrubber Puducherry', 'acid mist control system India'],
      },
      {
        label: 'CO2 Scrubber',
        slug: 'co2',
        image: {
          src: `${IMG_BASE}/wet-scrubber/CO2-Scrubber-manufacturer.webp`,
          alt: 'CO2 Scrubber manufacturer India — NAPCEN carbon dioxide capture wet scrubber',
        },
        description:
          'Alkaline solution-based wet scrubber (MEA or caustic reagent) for carbon dioxide (CO2) capture and removal in biogas upgrading, food processing, and industrial vent applications. Up to 95% CO2 removal. ' + LOC,
        specs: {
          Reagent: 'MEA / Caustic Soda',
          Efficiency: 'Up to 95%',
          MOC: 'PP-FRP / SS316',
          Compliance: 'CPCB',
        },
        applications: ['Biogas Upgrading', 'Food & Beverage Processing', 'Fermentation Plants', 'Breweries'],
        seoKeywords: ['CO2 scrubber manufacturer India', 'carbon dioxide scrubber Puducherry', 'biogas CO2 removal scrubber India'],
      },
      {
        label: 'Foundry Exhaust Scrubber',
        slug: 'foundry-exhaust',
        image: {
          src: `${IMG_BASE}/wet-scrubber/Foundry-Exhaust-Scrubber-manufacturer.webp`,
          alt: 'Foundry Exhaust Scrubber manufacturer India — NAPCEN iron aluminum foundry wet scrubber',
        },
        description:
          'Combined particulate and toxic fume control wet scrubber for metal casting and foundry exhaust. Integrated spark arrestor. >98% efficiency for iron foundry and aluminium melting emissions. ' + LOC,
        specs: {
          Efficiency: '>98%',
          SparkArrestor: 'Integrated',
          MOC: 'MS-FRP / PP-FRP',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Iron Foundries', 'Aluminium Melting Units', 'Die Casting Plants', 'Metal Smelting'],
        seoKeywords: ['foundry scrubber manufacturer India', 'foundry exhaust wet scrubber Chennai', 'iron foundry fume control India'],
      },
      {
        label: 'Glue Vapour / VOC Scrubber',
        slug: 'glue-vapour',
        image: {
          src: `${IMG_BASE}/wet-scrubber/Glue-Vapor-Scrubber-manufacturer.webp`,
          alt: 'VOC Scrubber manufacturer India — NAPCEN glue vapour solvent wet scrubber',
        },
        description:
          'Solvent vapour and VOC (volatile organic compound) removal wet scrubber for adhesive production and lamination processes. Uses activated carbon and water media for multi-contaminant control. ' + LOC,
        specs: {
          Media: 'Activated Carbon / Water',
          Type: 'Multi-Stage',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Adhesive Production', 'Lamination Plants', 'Printing Industry', 'Rubber Manufacturing'],
        seoKeywords: ['VOC scrubber manufacturer India', 'glue vapour scrubber Chennai', 'solvent fume control system India'],
      },
      {
        label: 'Caustic / Alkali Scrubber',
        slug: 'caustic',
        image: {
          src: `${IMG_BASE}/wet-scrubber/caustic.webp`,
          alt: 'Caustic Alkali Scrubber manufacturer India — NAPCEN alkaline vapor wet scrubber',
        },
        description:
          'Acid reagent dosing wet scrubber for neutralization of alkaline vapours from caustic soda plants and soap manufacturing. PP-FRP construction. >99% removal efficiency. ' + LOC,
        specs: {
          Efficiency: '>99%',
          MOC: 'PP-FRP',
          Reagent: 'Dilute Acid',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Caustic Soda Plants', 'Soap & Detergent Manufacturing', 'Bleaching Plants', 'Textile Processing'],
        seoKeywords: ['caustic scrubber manufacturer India', 'alkali fume scrubber Puducherry', 'caustic soda plant scrubber India'],
      },
      {
        label: 'Plastic Fume Scrubber',
        slug: 'plastic-fume',
        image: {
          src: `${IMG_BASE}/wet-scrubber/Plastic-Fume-Scrubber-manufacturer.webp`,
          alt: 'Plastic Fume Scrubber manufacturer India — NAPCEN PVC extrusion fume wet scrubber',
        },
        description:
          'Multi-stage quench and packed bed wet scrubber for HCl and organic fumes generated during PVC extrusion, plastic recycling, and cable manufacturing. Prevents toxic plastic fume exposure. ' + LOC,
        specs: {
          Type: 'Multi-Stage Quench + Packed Bed',
          MOC: 'PP-FRP',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['PVC Pipe Extrusion', 'Plastic Recycling', 'Cable & Wire Manufacturing', 'Rubber Processing'],
        seoKeywords: ['plastic fume scrubber manufacturer India', 'PVC extrusion fume control', 'plastic recycling scrubber India'],
      },
      {
        label: 'General Acid Fume Scrubber',
        slug: 'acid-fume',
        image: {
          src: `${IMG_BASE}/wet-scrubber/Acid-fume-scrubber-chennai.webp`,
          alt: 'Acid Fume Scrubber manufacturer Chennai India — NAPCEN mixed acid wet scrubber',
        },
        description:
          'Versatile PP-FRP packed bed wet scrubber for mixed acid fume exhaust control from laboratories, battery charging rooms, and electroplating shops. Handles HCl, H2SO4, HNO3, and mixed acid vapours. ' + LOC,
        specs: {
          MOC: 'PP-FRP / PVDF',
          Efficiency: '>99%',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Laboratory Exhaust', 'Battery Charging Rooms', 'Electroplating Shops', 'Chemical Storage'],
        seoKeywords: ['acid fume scrubber Chennai', 'acid scrubber manufacturer India', 'mixed acid fume control system'],
      },
      {
        label: 'Hospital Waste Scrubber',
        slug: 'hospital-waste',
        image: {
          src: `${IMG_BASE}/wet-scrubber/Hospital-waste-Incinerator-wet-scrubber-manufacturers.webp`,
          alt: 'Hospital Waste Incinerator Scrubber manufacturer India — NAPCEN medical waste wet scrubber',
        },
        description:
          'Multi-stage wet scrubber for medical and hospital waste incinerator emissions. Controls HCl, SO2, dioxins, furans, and heavy metal vapours to meet strict CPCB bio-medical waste incineration standards. ' + LOC,
        specs: {
          Compliance: 'CPCB Bio-Medical Waste Standards',
          Type: 'Multi-Stage Quench + Packed Bed',
          MOC: 'PP-FRP / SS316',
        },
        applications: ['Hospital Waste Incinerators', 'Medical Waste Treatment Plants', 'Pathological Waste Disposal'],
        seoKeywords: ['hospital waste scrubber manufacturer India', 'medical waste incinerator scrubber', 'bio-medical waste scrubber CPCB India'],
      },
      {
        label: 'Alkali Fume Scrubber',
        slug: 'alkali-fume',
        image: {
          src: `${IMG_BASE}/wet-scrubber/Alkali-fume-scrubber-manufacturers.webp`,
          alt: 'Alkali Fume Scrubber manufacturer India — NAPCEN strong alkaline gas wet scrubber',
        },
        description:
          'Dedicated dilute acid reagent wet scrubber for strong alkaline gas streams including ammonia, amines, and sodium hydroxide mist from chemical processing and cleaning lines. ' + LOC,
        specs: {
          Reagent: 'Dilute Acid',
          MOC: 'PP-FRP',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Chemical Processing Plants', 'Industrial Cleaning Lines', 'Textile Scouring', 'Food Processing'],
        seoKeywords: ['alkali fume scrubber manufacturer India', 'alkaline gas scrubber Puducherry', 'amine scrubber India'],
      },
      {
        label: 'Vent Gas Scrubber',
        slug: 'vent-gas',
        image: {
          src: `${IMG_BASE}/wet-scrubber/vent-gas-scrubber-manufacturers.webp`,
          alt: 'Vent Gas Scrubber manufacturer India — NAPCEN storage tank reactor vent scrubber',
        },
        description:
          'Explosion-proof wet scrubber for treatment of storage tank and chemical reactor vent gases. Prevents toxic and flammable gas release to atmosphere, meeting CPCB emission norms. ' + LOC,
        specs: {
          Features: 'Explosion-proof fan & motor',
          MOC: 'PP-FRP / SS316',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Chemical Storage Tanks', 'Reactor Vents', 'Solvent Storage', 'Petroleum Handling'],
        seoKeywords: ['vent gas scrubber manufacturer India', 'storage tank vent scrubber', 'reactor vent gas control India'],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CATEGORY 2: DUST COLLECTORS
  // ═══════════════════════════════════════════════════════════════
  'dust-collectors': {
    title: 'Industrial Dust Collectors',
    seoTitle: 'Industrial Dust Collector Manufacturer in Puducherry India | NAPCEN',
    seoDescription:
      'NAPCEN manufactures CPCB/TNPCB compliant industrial dust collectors in Puducherry, India — Pulse Jet Bag Filter, Cartridge, Cyclone, Portable, Single Stage & Two Stage dust collection systems for steel, cement, wood, pharma & chemical industries across Chennai, Tamil Nadu & India.',
    keywords: [
      'dust collector manufacturer India',
      'industrial dust collector Puducherry',
      'pulse jet bag filter manufacturer India',
      'cyclone dust collector manufacturer Tamil Nadu',
      'cartridge dust collector manufacturer India',
      'CPCB compliant dust collector India',
    ],
    items: [
      {
        label: 'Pulse Jet Baghouse Dust Collector',
        slug: 'pulse-jet-baghouse',
        image: {
          src: `${IMG_BASE}/dust-collector/Baghouse-duct-collector-chennai.webp`,
          alt: 'Pulse Jet Baghouse Dust Collector manufacturer Chennai India — NAPCEN bag filter',
        },
        description:
          'Continuous-duty pulse jet bag filter dust collector for heavy industrial dust loads. Handles metal dust, cement dust, fly ash, and chemical powders. 99.99% filtration efficiency at 1 micron. ' + LOC,
        specs: {
          Efficiency: '99.99% @ 1 Micron',
          CleaningMethod: 'Pulse Jet (Online)',
          MOC: 'MS / SS304 / SS316',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Steel Industry', 'Cement Plants', 'Power Plants', 'Metal Grinding', 'Chemical Powder Handling'],
        seoKeywords: ['pulse jet dust collector manufacturer India', 'baghouse dust collector Chennai', 'bag filter manufacturer Puducherry'],
      },
      {
        label: 'Cartridge Dust Collector',
        slug: 'cartridge-collector',
        image: {
          src: `${IMG_BASE}/dust-collector/cartridge-duct-collector-manufacturers-pondicherry.webp`,
          alt: 'Cartridge Dust Collector manufacturer Pondicherry India — NAPCEN nanofiber pleated filter',
        },
        description:
          'Compact high-efficiency pleated cartridge dust collector for fine dust and powder handling. Nanofiber filtration media for pharmaceutical, powder coating, and welding fume applications. ' + LOC,
        specs: {
          Media: 'Nanofiber / Cellulose / Polyester',
          Efficiency: '>99.9%',
          CleaningMethod: 'Pulse Jet',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Powder Coating Plants', 'Pharmaceutical Manufacturing', 'Food Processing', 'Welding Dust Collection'],
        seoKeywords: ['cartridge dust collector manufacturer India', 'cartridge filter dust collector Pondicherry', 'compact dust collector India'],
      },
      {
        label: 'Cyclone Separator / Dust Collector',
        slug: 'cyclone-separator',
        image: {
          src: `${IMG_BASE}/dust-collector/cyclone-duct-collector-chennai.webp`,
          alt: 'Cyclone Dust Collector manufacturer Chennai India — NAPCEN centrifugal separator',
        },
        description:
          'Centrifugal cyclone separator for pre-cleaning of coarse dust and wood chips before secondary filtration. Filter-free operation with low maintenance, widely used in sawmills and woodworking industries. ' + LOC,
        specs: {
          Type: 'Filter-free Centrifugal',
          Collection: 'Coarse Particles >10 Micron',
          MOC: 'MS / SS',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Sawmills', 'Wood Chips Processing', 'Rice Mills', 'Spice Grinding', 'Grain Handling'],
        seoKeywords: ['cyclone dust collector manufacturer India', 'cyclone separator manufacturer Chennai', 'centrifugal dust separator India'],
      },
      {
        label: 'Portable Dust Collector',
        slug: 'portable-collector',
        image: {
          src: `${IMG_BASE}/dust-collector/Portable-duct-collectors-chennai.webp`,
          alt: 'Portable Dust Collector manufacturer Chennai India — NAPCEN mobile dust collection unit',
        },
        description:
          'Mobile portable dust collector with locking castors for localized dust capture in workshops and maintenance areas. Easy to move between workstations. Ideal for welding, grinding, and cutting dust. ' + LOC,
        specs: {
          Mobility: 'Locking Castors',
          Filtration: 'Bag + HEPA',
          MOC: 'MS Powder Coated',
          Compliance: 'CPCB',
        },
        applications: ['Engineering Workshops', 'Maintenance Areas', 'Grinding & Cutting', 'Small Fabrication Shops'],
        seoKeywords: ['portable dust collector manufacturer India', 'mobile dust collector Chennai', 'portable industrial dust collector India'],
      },
      {
        label: 'Single Stage Dust Collector',
        slug: 'single-stage',
        image: {
          src: `${IMG_BASE}/dust-collector/Single-stage-duct-collector-coimbathur.webp`,
          alt: 'Single Stage Dust Collector manufacturer Coimbatore India — NAPCEN blower mounted collector',
        },
        description:
          'Direct blower-mounted single stage dust collector for light to medium industrial dust loads. Cost-effective solution for small woodworking shops, grinding, and light manufacturing. 95–98% efficiency. ' + LOC,
        specs: {
          Efficiency: '95–98%',
          Type: 'Blower Mounted',
          MOC: 'MS Powder Coated',
          Compliance: 'CPCB',
        },
        applications: ['Woodworking Shops', 'Small Fabrication Units', 'Carpentry Workshops', 'Light Manufacturing'],
        seoKeywords: ['single stage dust collector manufacturer India', 'small dust collector Coimbatore', 'woodworking dust collector India'],
      },
      {
        label: 'Two Stage Dust Collector',
        slug: 'two-stage',
        image: {
          src: `${IMG_BASE}/dust-collector/Two-stage-duct-collector-chennai.webp`,
          alt: 'Two Stage Dust Collector manufacturer Chennai India — NAPCEN cyclone pre-separator bag filter',
        },
        description:
          'Two-stage dust collector with cyclone pre-separator followed by secondary bag filtration. Extends filter life by 3–5x compared to single stage. Ideal for heavy woodworking and metal grinding. ' + LOC,
        specs: {
          Stage1: 'Cyclone Pre-Separator',
          Stage2: 'Bag Filter',
          Efficiency: '>99%',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Heavy Woodworking', 'Metal Grinding', 'CNC Machining', 'Furniture Manufacturing'],
        seoKeywords: ['two stage dust collector manufacturer India', 'cyclone bag filter dust collector Chennai', 'heavy duty dust collector India'],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CATEGORY 3: FUME EXTRACTORS
  // ═══════════════════════════════════════════════════════════════
  'fume-extractors': {
    title: 'Industrial Fume Extraction Systems',
    seoTitle: 'Industrial Fume Extractor Manufacturer in Puducherry India | NAPCEN',
    seoDescription:
      'NAPCEN manufactures industrial fume extractors in Puducherry, India — Welding, Laser, Soldering, Gold, Laboratory, and Printing fume extraction systems. Portable and centralized units for automotive, electronics, pharma & jewelry industries across Chennai, Tamil Nadu & India.',
    keywords: [
      'fume extractor manufacturer India',
      'welding fume extractor manufacturer India',
      'fume extractor manufacturer Puducherry',
      'fume extractor manufacturer Chennai',
      'industrial fume extraction system India',
      'portable fume extractor India',
    ],
    items: [
      {
        label: 'Welding Fume Extractor',
        slug: 'welding-fume',
        image: {
          src: `${IMG_BASE}/fume-extractor/Welding-fume-extractor.webp`,
          alt: 'Welding Fume Extractor manufacturer India — NAPCEN portable source capture fume extraction',
        },
        description:
          'Portable 3-stage welding fume extractor with flexible extraction arm for source capture of welding fumes, hexavalent chromium, manganese, and metal oxide particulates. ESD-safe for MIG, TIG, and MMA welding. ' + LOC,
        specs: {
          Filter: '3-Stage (Pre-filter + HEPA + Carbon)',
          Arm: 'Flexible Extraction Arm',
          Safety: 'ESD Safe',
          Compliance: 'CPCB',
        },
        applications: ['MIG / TIG / MMA Welding', 'Automotive Manufacturing', 'Metal Fabrication', 'Shipbuilding'],
        seoKeywords: ['welding fume extractor manufacturer India', 'portable welding fume extractor Chennai', 'welding fume extraction system India'],
      },
      {
        label: 'Laser Fume Extractor',
        slug: 'laser-fume',
        image: {
          src: `${IMG_BASE}/fume-extractor/Laser-fume-extractor.webp`,
          alt: 'Laser Fume Extractor manufacturer India — NAPCEN CNC laser cutting fume extraction',
        },
        description:
          'High-vacuum PTFE HEPA laser fume extractor for CNC fiber laser cutting and engraving machines. Captures sub-micron metal oxide fumes and VOCs generated during laser processing. ' + LOC,
        specs: {
          Media: 'PTFE HEPA + Carbon',
          Type: 'High Vacuum',
          Safety: 'Explosion Proof Option',
          Compliance: 'CPCB',
        },
        applications: ['Fiber Laser Cutting Machines', 'Laser Engraving', 'CNC Metal Processing', 'Sheet Metal Cutting'],
        seoKeywords: ['laser fume extractor manufacturer India', 'CNC laser fume extractor Chennai', 'fiber laser cutting fume extraction India'],
      },
      {
        label: 'Soldering Fume Extractor',
        slug: 'soldering-fume',
        image: {
          src: `${IMG_BASE}/fume-extractor/Soldering-fume-Extractor.webp`,
          alt: 'Soldering Fume Extractor manufacturer India — NAPCEN PCB electronics benchtop fume extractor',
        },
        description:
          'ESD-safe benchtop soldering fume extractor for PCB assembly and electronics manufacturing. Captures rosin flux fumes, lead oxide, and tin oxide particles at source. Carbon + HEPA filtration. ' + LOC,
        specs: {
          Safety: 'ESD Safe',
          Filter: 'Carbon + HEPA',
          Type: 'Benchtop',
          Compliance: 'CPCB',
        },
        applications: ['PCB Assembly Lines', 'Electronics Manufacturing', 'Semiconductor Assembly', 'Rework Stations'],
        seoKeywords: ['soldering fume extractor manufacturer India', 'PCB soldering fume extractor Chennai', 'electronics fume extraction system India'],
      },
      {
        label: 'Gold Fume Extractor',
        slug: 'gold-fume',
        image: {
          src: `${IMG_BASE}/fume-extractor/Gold-fume-extractor.webp`,
          alt: 'Gold Fume Extractor manufacturer India — NAPCEN jewelry acid refining fume extractor',
        },
        description:
          'Acid-resistant PP polypropylene fume extractor for gold refining, nitric acid, and aqua regia fumes in jewelry manufacturing. Fully corrosion-resistant construction for precious metal processing. ' + LOC,
        specs: {
          MOC: 'Polypropylene (PP)',
          Resistance: 'Acid Resistant',
          Filter: 'Multi-Stage',
          Compliance: 'CPCB',
        },
        applications: ['Gold Jewelry Manufacturing', 'Precious Metal Refining', 'Acid Dipping', 'Hallmarking Centers'],
        seoKeywords: ['gold fume extractor manufacturer India', 'jewelry fume extractor Chennai', 'acid resistant fume extractor India'],
      },
      {
        label: 'Laboratory Fume Extractor',
        slug: 'lab-fume',
        image: {
          src: `${IMG_BASE}/fume-extractor/Laboratory-fume-extractor.webp`,
          alt: 'Laboratory Fume Extractor manufacturer India — NAPCEN ductless lab chemical vapour extractor',
        },
        description:
          'Ductless laboratory fume extractor with activated carbon and HEPA filtration for chemical vapour and toxic gas control in research, QC, and testing laboratories. Compact design, no ductwork required. ' + LOC,
        specs: {
          Filtration: 'Activated Carbon + HEPA',
          Type: 'Ductless / Recirculating',
          Safety: 'Explosion Proof Option',
          Compliance: 'CPCB',
        },
        applications: ['Chemical Laboratories', 'QC & Testing Labs', 'Research Institutes', 'Pharmaceutical Labs', 'Educational Institutions'],
        seoKeywords: ['laboratory fume extractor manufacturer India', 'ductless fume extractor Chennai', 'lab chemical vapour extractor India'],
      },
      {
        label: 'Printing Fume Extractor',
        slug: 'printing-fume',
        image: {
          src: `${IMG_BASE}/fume-extractor/Printing-fume-extractor.webp`,
          alt: 'Printing Fume Extractor manufacturer India — NAPCEN solvent vapour extraction system',
        },
        description:
          'Explosion-proof solvent vapour fume extractor for digital and offset printing industry. Controls VOCs, isocyanates, and UV ink fumes generated during high-speed printing operations. ' + LOC,
        specs: {
          Safety: 'Explosion Proof (ATEX Option)',
          Filter: 'Carbon + HEPA',
          MOC: 'MS / SS',
          Compliance: 'CPCB / TNPCB',
        },
        applications: ['Digital Printing Units', 'Offset Printing', 'Flexographic Printing', 'UV Curing Lines'],
        seoKeywords: ['printing fume extractor manufacturer India', 'solvent vapour extractor printing industry India', 'UV ink fume extractor India'],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CATEGORY 4: DOWNDRAFT TABLES
  // ═══════════════════════════════════════════════════════════════
  'downdraft-tables': {
    title: 'Industrial Downdraft Tables',
    seoTitle: 'Downdraft Table Manufacturer in Puducherry India | NAPCEN',
    seoDescription:
      'NAPCEN manufactures industrial downdraft tables in Puducherry, India — Welding, Grinding, Polishing, Woodworking, and Portable downdraft workstations for dust and fume source capture. Serving Chennai, Tamil Nadu & all India.',
    keywords: [
      'downdraft table manufacturer India',
      'welding downdraft table manufacturer India',
      'grinding downdraft table manufacturer Puducherry',
      'downdraft workstation manufacturer Chennai',
      'dust capture workbench India',
      'source capture fume table India',
    ],
    items: [
      {
        label: 'Dry Downdraft Table',
        slug: 'dry-downdraft',
        image: {
          src: `${IMG_BASE}/downdraft-table/Downdraft-table-dust-collector.webp`,
          alt: 'Dry Downdraft Table manufacturer India — NAPCEN ergonomic dust collection workbench',
        },
        description:
          'Ergonomic industrial downdraft workbench with built-in downward suction for dust capture during metal finishing, deburring, and assembly operations. 1000 kg load capacity. ' + LOC,
        specs: {
          Load: '1000 kg',
          Filtration: 'Bag + HEPA',
          Surface: 'Perforated Steel',
          Compliance: 'CPCB',
        },
        applications: ['Metal Finishing', 'Deburring', 'Assembly Work', 'Light Grinding'],
        seoKeywords: ['dry downdraft table manufacturer India', 'dust collection workbench India', 'ergonomic downdraft workstation India'],
      },
      {
        label: 'Welding Downdraft Table',
        slug: 'welding-downdraft',
        image: {
          src: `${IMG_BASE}/downdraft-table/welding-downdraft-table.webp`,
          alt: 'Welding Downdraft Table manufacturer India — NAPCEN small part welding fume capture workbench',
        },
        description:
          'Source capture downdraft workbench for welding fumes during small part welding operations. Vented back stop design ensures downward fume flow into the filtration system. ' + LOC,
        specs: {
          Features: 'Vented Back Stop',
          Filtration: '3-Stage',
          Surface: 'Perforated + Slotted',
          Compliance: 'CPCB',
        },
        applications: ['Small Part Welding', 'MIG Welding', 'TIG Welding', 'Automotive Component Welding'],
        seoKeywords: ['welding downdraft table manufacturer India', 'welding fume capture table Chennai', 'welding workbench dust extraction India'],
      },
      {
        label: 'Grinding Downdraft Table',
        slug: 'grinding-downdraft',
        image: {
          src: `${IMG_BASE}/downdraft-table/Grinding-downdraft-table.webp`,
          alt: 'Grinding Downdraft Table manufacturer India — NAPCEN heavy duty spark arrest workbench',
        },
        description:
          'Heavy-duty grinding downdraft table with integrated spark arrestor and high-capacity filtration for angle grinding, belt grinding, and die grinding operations. ' + LOC,
        specs: {
          Safety: 'Integrated Spark Arrestor',
          Capacity: 'Heavy Duty',
          Surface: 'Perforated Steel',
          Compliance: 'CPCB',
        },
        applications: ['Heavy Angle Grinding', 'Belt Grinding', 'Die Grinding', 'Weld Dressing'],
        seoKeywords: ['grinding downdraft table manufacturer India', 'spark arrest grinding workbench India', 'heavy duty downdraft table Chennai'],
      },
      {
        label: 'Polishing Downdraft Table',
        slug: 'polishing-downdraft',
        image: {
          src: `${IMG_BASE}/downdraft-table/Polishing-downdraft-table.webp`,
          alt: 'Polishing Downdraft Table manufacturer India — NAPCEN jewelry fine dust workbench',
        },
        description:
          'Fine dust capture polishing downdraft table with non-scratch work surface for jewelry finishing, buffing, and precision polishing applications. Captures fine metallic dust at source. ' + LOC,
        specs: {
          Surface: 'Non-Scratch Cushion Top',
          Filtration: 'HEPA Fine Dust',
          Load: '500 kg',
          Compliance: 'CPCB',
        },
        applications: ['Jewelry Finishing', 'Precision Buffing', 'Watch Manufacturing', 'Optical Component Polishing'],
        seoKeywords: ['polishing downdraft table manufacturer India', 'jewelry polishing dust table India', 'fine dust capture workbench India'],
      },
      {
        label: 'Portable Downdraft Table',
        slug: 'portable-downdraft',
        image: {
          src: `${IMG_BASE}/downdraft-table/Portable-downdraft-table.webp`,
          alt: 'Portable Downdraft Table manufacturer India — NAPCEN mobile dust fume workstation',
        },
        description:
          'Mobile portable downdraft workstation on locking castors for flexible use across multiple workstations. Suitable for maintenance, field fabrication, and job-site operations. ' + LOC,
        specs: {
          Mobility: 'Locking Castors',
          Filtration: 'Bag + HEPA',
          Power: '220V / 415V',
          Compliance: 'CPCB',
        },
        applications: ['Field Maintenance', 'Job Site Fabrication', 'Multi-Workstation Use', 'Portable Welding'],
        seoKeywords: ['portable downdraft table manufacturer India', 'mobile downdraft workstation India', 'portable fume table Chennai'],
      },
      {
        label: 'Woodworking Downdraft Table',
        slug: 'woodworking-downdraft',
        image: {
          src: `${IMG_BASE}/downdraft-table/woodworking-downdraft-table.webp`,
          alt: 'Woodworking Downdraft Table manufacturer India — NAPCEN sanding dust capture workbench',
        },
        description:
          'Large surface woodworking downdraft table for sanding dust capture in furniture manufacturing and carpentry workshops. Low-noise operation with high-efficiency bag filtration. ' + LOC,
        specs: {
          Surface: 'Large Perforated MDF / Steel',
          Noise: 'Low Noise (<70 dB)',
          Filtration: 'Bag Filter',
          Compliance: 'CPCB',
        },
        applications: ['Furniture Sanding', 'Wood Panel Finishing', 'Carpentry Workshops', 'Cabinet Manufacturing'],
        seoKeywords: ['woodworking downdraft table manufacturer India', 'sanding dust table India', 'furniture sanding downdraft workbench India'],
      },
    ],
  },
};

// ─── Combined "All Products" view ───
export const extendedProductData: Record<string, any> = {
  ...productData,
  all: {
    title: 'Complete Industrial Air Pollution Control Equipment',
    seoTitle: 'All Air Pollution Control Equipment | NAPCEN — Puducherry India',
    seoDescription:
      'NAPCEN\'s complete catalog of industrial air pollution control equipment — Wet Scrubbers (Packed Bed, Venturi, Ammonia, HCL, PP FRP), Dust Collectors (Pulse Jet, Cyclone, Cartridge), Fume Extractors (Welding, Laser, Soldering), and Downdraft Tables. CPCB & TNPCB compliant. Manufacturer in Puducherry, India.',
    items: Object.entries(productData).flatMap(([categorySlug, categoryData]) =>
      categoryData.items.map((item: any) => ({
        ...item,
        parentCategory: categorySlug,
      }))
    ),
  },
};