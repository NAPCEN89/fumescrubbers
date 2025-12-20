/**
 * NAPCEN - CRITICAL IMAGE MAPPING (FIXED)
 * Matches physical directory: /public/assets/images/products/
 */

const BASE = '/assets/images/products';

export const productImages = {
  // Folder: /assets/images/products/Wet scrubber/
  wetScrubbers: {
    packedBed: `${BASE}/Wet scrubber/Packed-Bed-Scrubbers.jpg`,
    venturi: `${BASE}/Wet scrubber/venturi-scrubbers.jpg`,
    ammoniaScrubber: `${BASE}/Wet scrubber/Ammonia-scrubber-manufacturers.jpg`,
    hclScrubber: `${BASE}/Wet scrubber/HCL-Scrubber-manufacturer.jpg`,
    nitricAcid: `${BASE}/Wet scrubber/Nitric-Acid-Scrubber-manufacturer.jpg`,
    chromicAcid: `${BASE}/Wet scrubber/Chromic-Acid-Scrubber-manufacturer.jpg`,
    acidFume: `${BASE}/Wet scrubber/Acid-fume-scrubber-chennai.jpg`,
    alkaliFume: `${BASE}/Wet scrubber/Alkali-fume-scrubber-manufacturers.jpg`,
    hospitalWaste: `${BASE}/Wet scrubber/Hospital-waste-Incinerator-wet scrubber-manufacturers.jpg`,
    chlorineScrubber: `${BASE}/Wet scrubber/Chlorine-Scrubber-india.jpg`,
    ventGas: `${BASE}/Wet scrubber/vent-gas-scrubber-manufacturers.jpg`,
    // FIXED: Your disk shows a space between "Boiler" and "-flue"
    boilerFlue: `${BASE}/Wet scrubber/Boiler -flue-gas-scrubber.jpg`, 
    sulfuricAcid: `${BASE}/Wet scrubber/sulfuric-acid-scrubber-manufacturers.jpg`,
    co2Scrubber: `${BASE}/Wet scrubber/CO2-Scrubber-manufacturer.jpg`,
    foundryExhaust: `${BASE}/Wet scrubber/Foundry-Exhaust-Scrubber-manufacturer.jpg`,
    glueVapour: `${BASE}/Wet scrubber/Glue-Vapor-Scrubber-manufacturer.jpg`,
    caustic: `${BASE}/Wet scrubber/caustic.jpg`,
    plasticFume: `${BASE}/Wet scrubber/Plastic-Fume-Scrubber-manufacturer.jpg`,
  },

  // Folder: /assets/images/products/dust collector/
  dustCollectors: {
    bagHouse: `${BASE}/dust collector/Baghouse-duct-collector-chennai.jpg`,
    cartridge: `${BASE}/dust collector/cartridge-duct-collector-manufacturers-pondicherry.jpg`,
    cyclone: `${BASE}/dust collector/cyclone-duct-collector-chennai.jpg`,
    portableDust: `${BASE}/dust collector/Portable-duct-collectors-chennai.jpg`,
    singleStage: `${BASE}/dust collector/Single-stage-duct-collector-coimbathur.jpg`,
    // FIXED: Corrected from twoStage to exact name on your disk
    twoStage: `${BASE}/dust collector/Two-stage-duct-collector-chennai.jpg`, 
  },

  // Folder: /assets/images/products/Fume extractor/
  fumeExtractors: {
    weldingFume: `${BASE}/Fume extractor/Welding-fume-extractor.jpg`,
    laserFume: `${BASE}/Fume extractor/Laser-fume-extractor.jpg`,
    soldering: `${BASE}/Fume extractor/Soldering-fume-Extractor.jpg`,
    goldFume: `${BASE}/Fume extractor/Gold-fume-extractor.jpg`,
    laboratoryFume: `${BASE}/Fume extractor/Laboratory-fume-extractor.jpg`,
    printingFume: `${BASE}/Fume extractor/Printing-fume-extractor.jpg`,
  },

  // Folder: /assets/images/products/Downdraft tbale/
  downdraftTables: {
    // FIXED: Your disk name is "Downdraft-table-dust-collector.jpg"
    dryDowndraft: `${BASE}/Downdraft tbale/Downdraft-table-dust-collector.jpg`,
    grindingDowndraft: `${BASE}/Downdraft tbale/Grinding-downdraft-table.jpg`,
    polishingDowndraft: `${BASE}/Downdraft tbale/Polishing-downdraft-table.jpg`,
    // FIXED: Note the exact space in "downdraft -table" from your disk
    portableDowndraft: `${BASE}/Downdraft tbale/Portable-downdraft -table.jpg`, 
    weldingDowndraft: `${BASE}/Downdraft tbale/welding-downdraft-table.jpg`,
    woodworkingDowndraft: `${BASE}/Downdraft tbale/woodworking-downdraft-table.jpg`,
  }
};