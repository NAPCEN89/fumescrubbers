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

/** * Path matches your WebP conversion: /public/assets/images/
 */
const ASSET_PATH = '/assets/images';

export const AccesoriesData: AccessoryCategory[] = [
  {
    category: "Wet Scrubber Accessories",
    products: [
      { id: 1, title: "PP Pall Ring", image: `${ASSET_PATH}/Pall_ring_PP.webp`, category: "Wet Scrubber Accessories" },
      { id: 2, title: "SS Pall Ring", image: `${ASSET_PATH}/Pall_ring_SS.webp`, category: "Wet Scrubber Accessories" },
      { id: 3, title: "PP Nozzle", image: `${ASSET_PATH}/PP-nozzle-manufacturers-in-coimbatore.webp`, category: "Wet Scrubber Accessories" },
      { id: 4, title: "SS Nozzle", image: `${ASSET_PATH}/SS-Nozzle-manufacturer-from-pune.webp`, category: "Wet Scrubber Accessories" },
      { id: 5, title: "PP Mist Eliminator", image: `${ASSET_PATH}/PP-mist-eliminators-manufacturer-in-chennai.webp`, category: "Wet Scrubber Accessories" },
      { id: 6, title: "SS Mist Eliminator", image: `${ASSET_PATH}/SS_mist_eliminator.webp`, category: "Wet Scrubber Accessories" },
      { id: 7, title: "Differential Pressure Gauge", image: `${ASSET_PATH}/Differential_pressure_gauge.webp`, category: "Wet Scrubber Accessories" },
      { id: 8, title: "Pressure Gauge", image: `${ASSET_PATH}/pressure-gauge-manufacturers-in-hosur.webp`, category: "Wet Scrubber Accessories" },
      { id: 9, title: "PP Level Indicator", image: `${ASSET_PATH}/PP-Level-indicator-manufacturer-supplier-in-trichy.webp`, category: "Wet Scrubber Accessories" },
      { id: 10, title: "SS/MS Level Indicator", image: `${ASSET_PATH}/SS_level_indicator.webp`, category: "Wet Scrubber Accessories" },
      { id: 11, title: "PP Centrifugal Pump", image: `${ASSET_PATH}/PP-centrifugal-Pump-manufactureri-in-chennai.webp`, category: "Wet Scrubber Accessories" },
      { id: 12, title: "SS316 Centrifugal Pump", image: `${ASSET_PATH}/ss_pump.webp`, category: "Wet Scrubber Accessories" },
      { id: 13, title: "Vertical Centrifugal Pump", image: `${ASSET_PATH}/vertical-centrifugal-pump-manufacturers-in-coimbatore.webp`, category: "Wet Scrubber Accessories" },
      { id: 14, title: "PP Impeller", image: `${ASSET_PATH}/pp-impeller-manufacturers-in-india.webp`, category: "Wet Scrubber Accessories" },
      { id: 15, title: "MS/SS Impeller", image: `${ASSET_PATH}/MS-SS-Impeller.webp`, category: "Wet Scrubber Accessories" },
      { id: 16, title: "PP FRP Blower", image: `${ASSET_PATH}/PP_FRP_Blower.webp`, category: "Wet Scrubber Accessories" }
    ]
  },
  {
    category: "Dust Collector Accessories",
    products: [
      { id: 17, title: "Fabric Bag", image: `${ASSET_PATH}/Fabric-bag-manufacturers-in-chennai.webp`, category: "Dust Collector Accessories" },
      { id: 18, title: "Fabric Bag / Cages", image: `${ASSET_PATH}/Fabric-bag-cages-supplier-in-mumbai.webp`, category: "Dust Collector Accessories" },
      { id: 19, title: "Cartridge Filter", image: `${ASSET_PATH}/Cartridge-filter-manufacturer-supplier-in-india.webp`, category: "Dust Collector Accessories" },
      { id: 20, title: "Control Panel", image: `${ASSET_PATH}/Control_Panal.webp`, category: "Dust Collector Accessories" },
      { id: 21, title: "Centrifugal Blower", image: `${ASSET_PATH}/Centrifugal-blower-manufactureri-in-chennai.webp`, category: "Dust Collector Accessories" },
      { id: 22, title: "Pre Filter", image: `${ASSET_PATH}/Pre_filter.webp`, category: "Dust Collector Accessories" },
      { id: 23, title: "Hepa Filter", image: `${ASSET_PATH}/HEPA_Filter.webp`, category: "Dust Collector Accessories" },
      { id: 24, title: "Activated Carbon Filter", image: `${ASSET_PATH}/activated_carbon_filter.webp`, category: "Dust Collector Accessories" },
      { id: 25, title: "Electric Motor", image: `${ASSET_PATH}/Motor.webp`, category: "Dust Collector Accessories" },
      { id: 26, title: "Hoses", image: `${ASSET_PATH}/Hoses.webp`, category: "Dust Collector Accessories" },
      { id: 27, title: "MS Duct / SS / GI", image: `${ASSET_PATH}/GI_MS_Ducting.webp`, category: "Dust Collector Accessories" },
      { id: 28, title: "Hooda MS / SS / GI", image: `${ASSET_PATH}/Hood.webp`, category: "Dust Collector Accessories" },
      { id: 29, title: "Pleated Bag Dust Filter", image: `${ASSET_PATH}/Pleated-bag-dust-fliter-manufacturers-in-pondicherry.webp`, category: "Dust Collector Accessories" },
      { id: 30, title: "Solenoid Pulse Valve", image: `${ASSET_PATH}/pulse-jet-solenoid-valves.webp`, category: "Dust Collector Accessories" },
      { id: 31, title: "Sequential Timer", image: `${ASSET_PATH}/sequential-timers.webp`, category: "Dust Collector Accessories" },
      { id: 32, title: "Venturies", image: `${ASSET_PATH}/Venturi.webp`, category: "Dust Collector Accessories" },
      { id: 33, title: "Rotary Valve", image: `${ASSET_PATH}/Rotary_irlock_valve.webp`, category: "Dust Collector Accessories" },
      { id: 34, title: "Screw Conveyors", image: `${ASSET_PATH}/Screw_Conveyors.webp`, category: "Dust Collector Accessories" },
      { id: 35, title: "Differential Pressure Gauge", image: `${ASSET_PATH}/Differential_pressure_gauge2.webp`, category: "Dust Collector Accessories" }
    ]
  },
  {
    category: "Downdraft Table Accessories",
    products: [
      { id: 36, title: "Cartridge Filter", image: `${ASSET_PATH}/Cartridge-filter-manufacturer-supplier-in-india.webp`, category: "Downdraft Table Accessories" },
      { id: 37, title: "Control Panel", image: `${ASSET_PATH}/Control_Panal.webp`, category: "Downdraft Table Accessories" },
      { id: 38, title: "Centrifugal Blower", image: `${ASSET_PATH}/Centrifugal-blower-manufactureri-in-chennai.webp`, category: "Downdraft Table Accessories" },
      { id: 39, title: "Pre Filter", image: `${ASSET_PATH}/Pre_filter.webp`, category: "Downdraft Table Accessories" },
      { id: 40, title: "Hepa Filter", image: `${ASSET_PATH}/HEPA_Filter.webp`, category: "Downdraft Table Accessories" },
      { id: 41, title: "Activated Carbon Filter", image: `${ASSET_PATH}/activated_carbon_filter.webp`, category: "Downdraft Table Accessories" },
      { id: 42, title: "Electric Motor", image: `${ASSET_PATH}/Motor.webp`, category: "Downdraft Table Accessories" },
      { id: 43, title: "Hoses", image: `${ASSET_PATH}/Hoses.webp`, category: "Downdraft Table Accessories" },
      { id: 44, title: "Solenoid Pulse Valve", image: `${ASSET_PATH}/pulse-jet-solenoid-valves.webp`, category: "Downdraft Table Accessories" },
      { id: 45, title: "Sequential Timer", image: `${ASSET_PATH}/sequential-timers.webp`, category: "Downdraft Table Accessories" },
      { id: 46, title: "Differential Pressure Gauge", image: `${ASSET_PATH}/Differential_pressure_gauge.webp`, category: "Downdraft Table Accessories" },
      { id: 47, title: "Impeller Ms/SS/Aluminium", image: `${ASSET_PATH}/MS-SS-Impeller.webp`, category: "Downdraft Table Accessories" }
    ]
  },
  {
    category: "Fume Extractor Accessories",
    products: [
      { id: 48, title: "Cartridge Filter", image: `${ASSET_PATH}/Cartridge-filter-manufacturer-supplier-in-india.webp`, category: "Fume Extractor Accessories" },
      { id: 49, title: "Control Panel", image: `${ASSET_PATH}/Control_Panal.webp`, category: "Fume Extractor Accessories" },
      { id: 50, title: "Centrifugal Blower", image: `${ASSET_PATH}/Centrifugal-blower-manufactureri-in-chennai.webp`, category: "Fume Extractor Accessories" },
      { id: 51, title: "Pre Filter", image: `${ASSET_PATH}/Pre_filter.webp`, category: "Fume Extractor Accessories" },
      { id: 52, title: "Hepa Filter", image: `${ASSET_PATH}/HEPA_Filter.webp`, category: "Fume Extractor Accessories" },
      { id: 53, title: "Activated Carbon Filter", image: `${ASSET_PATH}/activated_carbon_filter.webp`, category: "Fume Extractor Accessories" },
      { id: 54, title: "Electric Motor", image: `${ASSET_PATH}/Motor.webp`, category: "Fume Extractor Accessories" },
      { id: 55, title: "Hoses", image: `${ASSET_PATH}/Hoses.webp`, category: "Fume Extractor Accessories" },
      { id: 56, title: "Solenoid Pulse Valve", image: `${ASSET_PATH}/pulse-jet-solenoid-valves.webp`, category: "Fume Extractor Accessories" },
      { id: 57, title: "Sequential Timer", image: `${ASSET_PATH}/sequential-timers.webp`, category: "Fume Extractor Accessories" },
      { id: 58, title: "Differential Pressure Gauge", image: `${ASSET_PATH}/Differential_pressure_gauge.webp`, category: "Fume Extractor Accessories" },
      { id: 59, title: "Impeller Ms/SS/Aluminium", image: `${ASSET_PATH}/MS-SS-Impeller.webp`, category: "Fume Extractor Accessories" }
    ]
  }
];