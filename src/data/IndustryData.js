// src/data/industryData.js

// Import all necessary images
import chemicalImg from '../assets/images/gallery/Chemical Manufacturing.jpg';
import electronicImg from '../assets/images/gallery/Electronic and Semiconductor Manufacturing.jpg';
import foodProcessingImg from '../assets/images/gallery/Food Processing.jpg';
import miningImg from '../assets/images/gallery/Mining and Ore Processing.jpg';
import metalProcessingImg from '../assets/images/gallery/Metal Processing.jpg';
import pharmaImg from '../assets/images/gallery/Pharmaceutical Manufacturing.jpg';
import paintImg from '../assets/images/gallery/Paint and Coatings Manufacturing.jpg';
import oilGasImg from '../assets/images/gallery/Oil and Gas Industry.jpg';
import textileImg from '../assets/images/gallery/Textile Industry.jpg';
import woodworkingImg from '../assets/images/gallery/Woodworking and Furniture Manufacturing.jpg';
import wetScrubberImg from '../assets/images/Wet-scrubber-chennai.jpg';
import dryScrubberImg from '../assets/images/Dry-scrubber-pondicherry.jpg';
import dustCollectorImg from '../assets/images/baghouse-filter-chennai.jpg';
import downdraftTableImg from '../assets/images/Downdraft-table-india.jpg';
import fumeExtractorImg from '../assets/images/Acid-fume-scrubber-india.jpg';

export const industriesData = [
  {
    path: '/industries/chemical',
    name: 'Chemical Industries',
    image: chemicalImg,
    description: 'Chemical manufacturing processes release corrosive fumes, volatile organic compounds (VOCs), and hazardous air pollutants (HAPs). Effective air pollution control is critical for safety and compliance.',
    challenges: [
      { name: 'Corrosive Fumes', description: 'Gases like sulfur dioxide and chlorine can cause severe equipment damage and health issues.' },
      { name: 'VOCs & HAPs', description: 'Volatile Organic Compounds and Hazardous Air Pollutants must be controlled to meet environmental regulations.' },
      { name: 'Odor Control', description: 'Unpleasant odors from chemical processes can affect surrounding communities.' },
    ],
    products: [
      {
        name: 'Wet Scrubbers',
        image: wetScrubberImg,
        description: 'Our wet scrubbers are perfect for neutralizing and removing corrosive gases, odors, and VOCs by washing the air with a neutralizing liquid.',
        benefits: ['High removal efficiency for gases', 'Handles corrosive air streams', 'Effective for odor control'],
      },
      {
        name: 'Dry Scrubbers',
        image: dryScrubberImg,
        description: 'Ideal for handling low to moderate concentrations of acid gases and other pollutants. They are easy to operate and require minimal water.',
        benefits: ['No wastewater generation', 'Low maintenance', 'Compact footprint'],
      },
    ],
  },
  {
    path: '/industries/metal-processing',
    name: 'Metal Processing',
    image: metalProcessingImg,
    description: 'Operations like welding, grinding, and smelting produce metal dust, fumes, and particulate matter. These pollutants pose significant health risks and require robust filtration.',
    challenges: [
      { name: 'Metal Fumes', description: 'Sub-micron particles from welding and cutting are highly toxic and difficult to capture.' },
      { name: 'Combustible Dust', description: 'Dust from aluminum or magnesium grinding is highly explosive and requires special safety measures.' },
    ],
    products: [
      {
        name: 'Dust Collectors',
        image: dustCollectorImg,
        description: 'Our dust collectors efficiently capture fine metallic dust and other particles, preventing respiratory issues and reducing fire risks.',
        benefits: ['High-efficiency filtration', 'Designed for combustible dust', 'Energy-efficient operation'],
      },
      {
        name: 'Fume Extractors',
        image: fumeExtractorImg,
        description: 'Portable and stationary fume extractors are essential for source capture of welding fumes and other toxic gases at the point of generation.',
        benefits: ['Direct source capture', 'Improves welder visibility', 'Compliant with safety standards'],
      },
    ],
  },
  {
    path: '/industries/mining',
    name: 'Mining and Ore Processing',
    image: miningImg,
    description: 'Mining operations generate large amounts of particulate matter, silica dust, and other toxic fumes. Our solutions ensure a safe working environment and compliance with health regulations.',
    challenges: [
      { name: 'Particulate Matter', description: 'Dust from drilling, blasting, and crushing can cause silicosis and other lung diseases.' },
      { name: 'Toxic Fumes', description: 'Gases like sulfur dioxide and mercury vapor are often released during ore processing.' },
    ],
    products: [
      {
        name: 'Dust Collectors',
        image: dustCollectorImg,
        description: 'Heavy-duty dust collectors are used to manage the large volume of airborne particles generated in mining and ore processing.',
        benefits: ['High-capacity filtration', 'Durable design for harsh environments', 'Reduces health risks and improves visibility'],
      },
      {
        name: 'Wet Scrubbers',
        image: wetScrubberImg,
        description: 'Venturi or packed bed scrubbers are effective for capturing fine dust and neutralizing acidic gases from mining operations.',
        benefits: ['Effective for fine dust and fumes', 'Handles high temperatures and moisture', 'Can neutralize acidic pollutants'],
      },
    ],
  },
  {
    path: '/industries/pharma',
    name: 'Pharmaceutical Industries',
    image: pharmaImg,
    description: 'Pharmaceutical manufacturing requires sterile, controlled environments. Air pollution control is essential for preventing cross-contamination and managing potent dusts and chemical fumes.',
    challenges: [
      { name: 'Potent Compound Dust', description: 'Active pharmaceutical ingredients (APIs) can be highly potent, requiring containment to protect workers.' },
      { name: 'Solvents and VOCs', description: 'Manufacturing processes often use solvents that release VOCs into the air.' },
    ],
    products: [
      {
        name: 'Dust Collectors',
        image: dustCollectorImg,
        description: 'Our collectors feature HEPA filtration and containments to safely handle potent pharmaceutical dusts and prevent contamination.',
        benefits: ['Meets cGMP standards', 'Prevents cross-contamination', 'High-efficiency HEPA filters'],
      },
      {
        name: 'Fume Extractors',
        image: fumeExtractorImg,
        description: 'Lab fume extractors and solvent fume scrubbers are used to protect lab personnel from chemical exposure and maintain air quality.',
        benefits: ['Protects lab personnel', 'Maintains a sterile environment', 'Customizable for specific lab layouts'],
      },
    ],
  },
  {
    path: '/industries/wood-working',
    name: 'Wood Working Industries',
    image: woodworkingImg,
    description: 'Woodworking operations generate large amounts of combustible wood dust, which poses a serious fire and explosion risk. Effective dust collection is a necessity.',
    challenges: [
      { name: 'Combustible Dust', description: 'Wood dust can form an explosive mixture in the air, requiring specialized safety features.' },
      { name: 'Airborne Particles', description: 'Fine wood particles can cause respiratory issues and allergies in workers.' },
    ],
    products: [
      {
        name: 'Dust Collectors',
        image: dustCollectorImg,
        description: 'Our collectors are designed with safety in mind, featuring explosion vents and spark arrestors to mitigate fire risks.',
        benefits: ['Explosion-proof design', 'Captures fine wood dust', 'Improves air quality and visibility'],
      },
      {
        name: 'Downdraft Tables',
        image: downdraftTableImg,
        description: 'Ideal for sanding, grinding, and routing, downdraft tables capture dust directly from the work surface.',
        benefits: ['Source capture for localized work', 'Provides a stable work surface', 'Reduces airborne dust exposure'],
      },
    ],
  },
  {
    path: '/industries/food-processing',
    name: 'Food Processing',
    image: foodProcessingImg,
    description: 'Food processing facilities face challenges with dust, odors, and VOCs from cooking, drying, and mixing processes. Hygiene and safety are paramount.',
    challenges: [
      { name: 'Odor Control', description: 'Strong odors from cooking or fermentation can be a nuisance to nearby communities.' },
      { name: 'Food Dust', description: 'Dust from flour, sugar, or spices can be combustible and pose health risks.' },
    ],
    products: [
      {
        name: 'Wet Scrubbers',
        image: wetScrubberImg,
        description: 'Used for odor control and to capture greasy or sticky particles from cooking fumes, preventing buildup and blockages.',
        benefits: ['Neutralizes odors effectively', 'Captures greasy fumes', 'Meets food safety regulations'],
      },
      {
        name: 'Dust Collectors',
        image: dustCollectorImg,
        description: 'Designed for food-grade applications, our collectors handle combustible dusts and ensure a clean, safe production environment.',
        benefits: ['Sanitary design', 'Handles explosive dusts', 'Prevents cross-contamination'],
      },
    ],
  },
  {
    path: '/industries/electronics-manufacturing',
    name: 'Electronics Manufacturing',
    image: electronicImg,
    description: 'This industry requires extreme cleanliness and precision. Fumes and dust from soldering, laser etching, and chemical processes must be controlled to protect sensitive components and workers.',
    challenges: [
      { name: 'Soldering Fumes', description: 'Fumes containing lead, flux, and other toxic chemicals require high-efficiency capture.' },
      { name: 'Particulate Contamination', description: 'Even microscopic dust can damage delicate electronic components.' },
    ],
    products: [
      {
        name: 'Fume Extractors',
        image: fumeExtractorImg,
        description: 'Our fume extractors offer a compact and powerful solution for source capture of soldering fumes and other chemical vapors.',
        benefits: ['High-efficiency filtration for fine particles', 'Protects workers from toxic fumes', 'Compact and easy to integrate'],
      },
      {
        name: 'Wet Scrubbers',
        image: wetScrubberImg,
        description: 'Used to neutralize corrosive acid gases and VOCs from etching and cleaning processes.',
        benefits: ['Handles corrosive air streams', 'Effective for acid gas removal', 'Ensures a clean room environment'],
      },
    ],
  },
  {
    path: '/industries/paint',
    name: 'Paint & Coatings Manufacturing',
    image: paintImg,
    description: 'Paint manufacturing involves pigments, solvents, and resins that release significant VOCs and particulate matter. Our systems are designed to manage these complex emissions.',
    challenges: [
      { name: 'Volatile Organic Compounds (VOCs)', description: 'Solvents used in paint production are a major source of VOCs, requiring advanced control methods.' },
      { name: 'Particulate Matter', description: 'Fine pigment and resin dust can create health hazards and require specialized filtration.' },
    ],
    products: [
      {
        name: 'Wet Scrubbers',
        image: wetScrubberImg,
        description: 'Scrubbers are used to capture both solvent vapors and sticky particulate matter, preventing them from being released into the atmosphere.',
        benefits: ['Dual-action capture of gases and particles', 'Handles sticky, hard-to-filter material', 'Reduces odor emissions'],
      },
      {
        name: 'Dry Scrubbers',
        image: dryScrubberImg,
        description: 'Can be used with activated carbon media to adsorb and remove VOCs and other hazardous gases from the airstream.',
        benefits: ['High removal efficiency for VOCs', 'Modular and customizable', 'No water consumption'],
      },
    ],
  },
  {
    path: '/industries/oil-gas',
    name: 'Oil and Gas Industries',
    image: oilGasImg,
    description: 'The oil and gas industry emits a range of pollutants, including sulfur dioxide (SO2), hydrogen sulfide (H2S), and VOCs. These require robust and reliable pollution control systems.',
    challenges: [
      { name: 'Acidic Gases', description: 'SO2 and H2S are highly corrosive and toxic, demanding specialized scrubbing systems.' },
      { name: 'VOCs and Methane', description: 'These greenhouse gases and air pollutants are released during extraction and processing and need to be captured.' },
    ],
    products: [
      {
        name: 'Wet Scrubbers',
        image: wetScrubberImg,
        description: 'Our scrubbers are engineered to withstand the harsh conditions of the oil and gas industry and effectively remove H2S, SO2, and other acidic gases.',
        benefits: ['High durability and resistance to corrosion', 'High removal efficiency', 'Can be customized for offshore platforms'],
      },
      {
        name: 'Dry Scrubbers',
        image: dryScrubberImg,
        description: 'Used for smaller-scale applications or in remote locations where a water supply is not readily available, particularly for H2S and VOC removal.',
        benefits: ['No water required', 'Compact and easy to transport', 'Ideal for low-volume gas streams'],
      },
    ],
  },
  {
    path: '/industries/textile',
    name: 'Textile Industries',
    image: textileImg,
    description: 'Textile factories generate fumes from dyeing, printing, and finishing processes, as well as dust from fiber handling. These emissions often contain dyes, chemicals, and VOCs.',
    challenges: [
      { name: 'Chemical Fumes', description: 'VOCs from solvents and formaldehyde from finishing processes are common pollutants.' },
      { name: 'Fiber Dust', description: 'Fine cotton and synthetic fiber dust can cause respiratory illnesses and pose a fire hazard.' },
    ],
    products: [
      {
        name: 'Wet Scrubbers',
        image: wetScrubberImg,
        description: 'Effective in capturing both fumes and sticky fiber particles, our wet scrubbers ensure compliance and prevent equipment fouling.',
        benefits: ['Handles a wide range of pollutants', 'Prevents blockages from fibrous materials', 'Reduces odor and fume concentrations'],
      },
      {
        name: 'Dust Collectors',
        image: dustCollectorImg,
        description: 'Specialized collectors with fine-mesh filters and powerful fans are used to manage textile dust and lint.',
        benefits: ['Captures fine fiber dust', 'Reduces fire risk', 'Improves air quality in the workspace'],
      },
    ],
  },
];