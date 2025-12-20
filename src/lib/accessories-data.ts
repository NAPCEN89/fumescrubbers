// src/lib/accessories-data.ts

export interface AccessoryProduct {
  id: number;
  title: string;
  image: string;
  category: string;
}

export interface AccessoryCategory {
  category: string;
  products: AccessoryProduct[];
}

/** * IMPORTANT: In Next.js, files in /public are served from the root.
 * If your folder structure is: public/assets/images/accessories/Pall_ring_PP.jpg
 * The path should be: /assets/images/accessories/Pall_ring_PP.jpg (No 'public' in string)
 */
const ASSET_PATH = '/assets/images';

export const AccesoriesData: AccessoryCategory[] = [
  {
    category: "Wet Scrubber Accessories",
    products: [
      { id: 1, title: "PP Pall Ring", image: `${ASSET_PATH}/Pall_ring_PP.jpg`, category: "Wet Scrubber Accessories" },
      { id: 2, title: "SS Pall Ring", image: `${ASSET_PATH}/Pall_ring_SS.jpg`, category: "Wet Scrubber Accessories" },
      { id: 3, title: "PP Nozzle", image: `${ASSET_PATH}/PP-nozzle-manufacturers-in-coimbatore.jpg`, category: "Wet Scrubber Accessories" },
      { id: 4, title: "SS Nozzle", image: `${ASSET_PATH}/SS-Nozzle-manufacturer-from-pune.jpg`, category: "Wet Scrubber Accessories" },
      { id: 5, title: "PP Mist Eliminator", image: `${ASSET_PATH}/PP-mist-eliminators-manufacturer-in-chennai.jpg`, category: "Wet Scrubber Accessories" },
      { id: 6, title: "SS Mist Eliminator", image: `${ASSET_PATH}/SS_mist_eliminator.jpg`, category: "Wet Scrubber Accessories" },
      { id: 7, title: "Differential Pressure Gauge", image: `${ASSET_PATH}/Differential_pressure_gauge.jpg`, category: "Wet Scrubber Accessories" },
      { id: 8, title: "Pressure Gauge", image: `${ASSET_PATH}/pressure-gauge-manufacturers-in-hosur.jpg`, category: "Wet Scrubber Accessories" },
      { id: 9, title: "PP Level Indicator", image: `${ASSET_PATH}/PP-Level-indicator-manufacturer-supplier-in-trichy.jpg`, category: "Wet Scrubber Accessories" },
      { id: 10, title: "SS/MS Level Indicator", image: `${ASSET_PATH}/SS_level_indicator.jpg`, category: "Wet Scrubber Accessories" },
      { id: 11, title: "PP Centrifugal Pump", image: `${ASSET_PATH}/PP-centrifugal-Pump-manufactureri-in-chennai.jpg`, category: "Wet Scrubber Accessories" },
      { id: 12, title: "SS316 Centrifugal Pump", image: `${ASSET_PATH}/ss_pump.jpg`, category: "Wet Scrubber Accessories" },
      { id: 13, title: "Vertical Centrifugal Pump", image: `${ASSET_PATH}/vertical-centrifugal-pump-manufacturers-in-coimbatore.jpg`, category: "Wet Scrubber Accessories" },
      { id: 14, title: "PP Impeller", image: `${ASSET_PATH}/pp-impeller-manufacturers-in-india.jpg`, category: "Wet Scrubber Accessories" },
      { id: 15, title: "MS/SS Impeller", image: `${ASSET_PATH}/MS-SS-Impeller.jpg`, category: "Wet Scrubber Accessories" },
      { id: 16, title: "PP FRP Blower", image: `${ASSET_PATH}/PP_FRP_Blower.jpg`, category: "Wet Scrubber Accessories" }
    ]
  },
  {
    category: "Dust Collector Accessories",
    products: [
      { id: 17, title: "Fabric Bag", image: `${ASSET_PATH}/Fabric-bag-manufacturers-in-chennai.jpg`, category: "Dust Collector Accessories" },
      { id: 18, title: "Fabric Bag / Cages", image: `${ASSET_PATH}/Fabric-bag-cages-supplier-in-mumbai.jpg`, category: "Dust Collector Accessories" },
      { id: 19, title: "Cartridge Filter", image: `${ASSET_PATH}/Cartridge-filter-manufacturer-supplier-in-india.jpg`, category: "Dust Collector Accessories" },
      { id: 20, title: "Control Panel", image: `${ASSET_PATH}/Control_Panal.jpg`, category: "Dust Collector Accessories" },
      { id: 21, title: "Centrifugal Blower", image: `${ASSET_PATH}/Centrifugal-blower-manufactureri-in-chennai.jpg`, category: "Dust Collector Accessories" },
      { id: 22, title: "Pre Filter", image: `${ASSET_PATH}/Pre_filter.jpg`, category: "Dust Collector Accessories" },
      { id: 23, title: "Hepa Filter", image: `${ASSET_PATH}/HEPA_Filter.jpg`, category: "Dust Collector Accessories" },
      { id: 24, title: "Activated Carbon Filter", image: `${ASSET_PATH}/activated_carbon_filter.jpeg`, category: "Dust Collector Accessories" },
      { id: 25, title: "Electric Motor", image: `${ASSET_PATH}/Motor.jpg`, category: "Dust Collector Accessories" },
      { id: 26, title: "Hoses", image: `${ASSET_PATH}/Hoses.png`, category: "Dust Collector Accessories" },
      { id: 27, title: "MS Duct / SS / GI", image: `${ASSET_PATH}/GI_MS_Ducting.jpg`, category: "Dust Collector Accessories" },
      { id: 28, title: "Hooda MS / SS / GI", image: `${ASSET_PATH}/Hood.jpg`, category: "Dust Collector Accessories" },
      { id: 29, title: "Pleated Bag Dust Filter", image: `${ASSET_PATH}/Pleated-bag-dust-fliter-manufacturers-in-pondicherry.jpg`, category: "Dust Collector Accessories" },
      { id: 30, title: "Solenoid Pulse Valve", image: `${ASSET_PATH}/pulse-jet-solenoid-valves.png`, category: "Dust Collector Accessories" },
      { id: 31, title: "Sequential Timer", image: `${ASSET_PATH}/sequential-timers.png`, category: "Dust Collector Accessories" },
      { id: 32, title: "Venturies", image: `${ASSET_PATH}/Venturi.png`, category: "Dust Collector Accessories" },
      { id: 33, title: "Rotary Valve", image: `${ASSET_PATH}/Rotary_irlock_valve.jpg`, category: "Dust Collector Accessories" },
      { id: 34, title: "Screw Conveyors", image: `${ASSET_PATH}/Screw_Conveyors.jpg`, category: "Dust Collector Accessories" },
      { id: 35, title: "Differential Pressure Gauge", image: `${ASSET_PATH}/Differential_pressure_gauge2.jpg`, category: "Dust Collector Accessories" }
    ]
  },
  {
    category: "Downdraft Table Accessories",
    products: [
      { id: 36, title: "Cartridge Filter", image: `${ASSET_PATH}/Cartridge-filter-manufacturer-supplier-in-india.jpg`, category: "Downdraft Table Accessories" },
      { id: 37, title: "Control Panel", image: `${ASSET_PATH}/Control_Panal.jpg`, category: "Downdraft Table Accessories" },
      { id: 38, title: "Centrifugal Blower", image: `${ASSET_PATH}/Centrifugal-blower-manufactureri-in-chennai.jpg`, category: "Downdraft Table Accessories" },
      { id: 39, title: "Pre Filter", image: `${ASSET_PATH}/Pre_filter.jpg`, category: "Downdraft Table Accessories" },
      { id: 40, title: "Hepa Filter", image: `${ASSET_PATH}/HEPA_Filter.jpg`, category: "Downdraft Table Accessories" },
      { id: 41, title: "Activated Carbon Filter", image: `${ASSET_PATH}/activated_carbon_filter.jpeg`, category: "Downdraft Table Accessories" },
      { id: 42, title: "Electric Motor", image: `${ASSET_PATH}/Motor.jpg`, category: "Downdraft Table Accessories" },
      { id: 43, title: "Hoses", image: `${ASSET_PATH}/Hoses.png`, category: "Downdraft Table Accessories" },
      { id: 44, title: "Solenoid Pulse Valve", image: `${ASSET_PATH}/pulse-jet-solenoid-valves.png`, category: "Downdraft Table Accessories" },
      { id: 45, title: "Sequential Timer", image: `${ASSET_PATH}/sequential-timers.png`, category: "Downdraft Table Accessories" },
      { id: 46, title: "Differential Pressure Gauge", image: `${ASSET_PATH}/Differential_pressure_gauge.jpg`, category: "Downdraft Table Accessories" },
      { id: 47, title: "Impeller Ms/SS/Aluminium", image: `${ASSET_PATH}/MS-SS-Impeller.jpg`, category: "Downdraft Table Accessories" }
    ]
  },
  {
    category: "Fume Extractor Accessories",
    products: [
      { id: 48, title: "Cartridge Filter", image: `${ASSET_PATH}/Cartridge-filter-manufacturer-supplier-in-india.jpg`, category: "Fume Extractor Accessories" },
      { id: 49, title: "Control Panel", image: `${ASSET_PATH}/Control_Panal.jpg`, category: "Fume Extractor Accessories" },
      { id: 50, title: "Centrifugal Blower", image: `${ASSET_PATH}/Centrifugal-blower-manufactureri-in-chennai.jpg`, category: "Fume Extractor Accessories" },
      { id: 51, title: "Pre Filter", image: `${ASSET_PATH}/Pre_filter.jpg`, category: "Fume Extractor Accessories" },
      { id: 52, title: "Hepa Filter", image: `${ASSET_PATH}/HEPA_Filter.jpg`, category: "Fume Extractor Accessories" },
      { id: 53, title: "Activated Carbon Filter", image: `${ASSET_PATH}/activated_carbon_filter.jpeg`, category: "Fume Extractor Accessories" },
      { id: 54, title: "Electric Motor", image: `${ASSET_PATH}/Motor.jpg`, category: "Fume Extractor Accessories" },
      { id: 55, title: "Hoses", image: `${ASSET_PATH}/Hoses.png`, category: "Fume Extractor Accessories" },
      { id: 56, title: "Solenoid Pulse Valve", image: `${ASSET_PATH}/pulse-jet-solenoid-valves.png`, category: "Fume Extractor Accessories" },
      { id: 57, title: "Sequential Timer", image: `${ASSET_PATH}/sequential-timers.png`, category: "Fume Extractor Accessories" },
      { id: 58, title: "Differential Pressure Gauge", image: `${ASSET_PATH}/Differential_pressure_gauge.jpg`, category: "Fume Extractor Accessories" },
      { id: 59, title: "Impeller Ms/SS/Aluminium", image: `${ASSET_PATH}/MS-SS-Impeller.jpg`, category: "Fume Extractor Accessories" }
    ]
  }
];