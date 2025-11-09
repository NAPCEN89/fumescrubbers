import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, useTheme, useMediaQuery } from '@mui/material';
import { Box } from '@mui/material';
import theme from './Theme';
import './App.css';
import "../src/components/Styles/ChatButton.css";
import Home from './pages/Home';
import ScrollTop from './hooks/ScrollUp';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './components/sections/ProductDetail';
import ServiceDetail from './pages/ServiceDetail';
import Blogs from './components/Blogs/Blogs';
import BlogDetail from './components/Blogs/BlogDeatils';

// Reusable Products Pages
import WetScrubbersPage from './components/ReusableProducts/WetScrubber';
import DustCollectorsPage from './components/ReusableProducts/DustCollector';
import FumeExtractorPage from './components/ReusableProducts/FumeExtractor';
import DownDraftPage from './components/ReusableProducts/DowndraftTable';
import DryScrubberPage from './components/ReusableProducts/DryScrubber';

// Wet Scrubber Sub-Pages
import VenturiScrubberPage from './pages/venturi-scrubber';
import PackedBedScrubberPage from './pages/PackedBedScrubber';
import AmmoniaScrubberPage from './pages/AmmoniaScrubber';
import VentGasScrubberPage from './pages/VentGasScrubber';
import BoilerFlueGasScrubberPage from './pages/BoilerFlueScrubber';
import SulfuricAcidScrubberPage from './pages/SulfuricAcid';
import AcidFumeScrubberPage from './pages/AcidFumeScrubber';
import AlkaliFumeScrubberPage from './pages/AlkaliFumeScrubber';
import NitricAcidScrubberPage from './pages/NitricAcidScrubber';
import PlasticFumeScrubberPage from './pages/PlasticFumeScrubber';
import HospitalWasteIncineratorWetScrubberPage from './pages/HospitalScrubber';
import CO2ScrubberPage from './pages/Co2Scrubber';
import HclScrubberPage from './pages/HclScrubber';
import ChromicAcidPage from './pages/ChromicAcidScrubber';
import GlueVaporScrubberPage from './pages/GlueVapour';
import FoundryExhaustPage from './pages/FoundryExhaustScrubber';
import CausticScrubberPage from './pages/CausticScrubber';
import ChlorineScrubberPage from './pages/ChlorineScrubber';

// Other Imports
import IndustryPageTemplate from './pages/IndustriesTemplate';
import { industriesData } from './data/IndustryData'; 

// Dust Collector Sub-Pages
import BagHousePage from './pages/BagHouseCollector';
import CartridgePage from './pages/CartridgeCollector';
import CycloneDustPage from './pages/CycloneCollector';
import PortablePage from './pages/PortableDustCollector';
import SingleStageDustCollector from './pages/SingleStageCollector';
import TwoStagePage from './pages/TwoStageCollector';

// Downdraft Table Sub-Pages
import GrindingPage from './pages/GrindingDowndraft';
import PolishingDownPage from './pages/PolishingDowndraft';
import PortableDownPage from './pages/PortableDrowndraft';
import WeldingDownTable from './pages/WeldingDowndraft';
import WoodWorkingTable from './pages/WoodWorkingDowndraft';

// Fume Extractor Sub-Pages
import SolideringFumePage from './pages/SolideringFume';
import LaserFumePage from './pages/LaserFume';
import WeldingFumePage from './pages/WeldingFume';
import LabFumePage from './pages/LabFume';
import GoldFumePage from './pages/GoldFume';
import PrintingFumePage from './pages/PrintingFume';

// Dry Scrubber Sub-Pages
import VocScrubberPage from './pages/VOCScrubber';
import H2sScrubberPage from './pages/H2SScrubber';
import StpOdorPage from './pages/STPodor';
import PortableScrubberPage from './pages/PortableDryScrubber';

// Other Pages
import Accessories from './components/Accesories/Accessories';
import CompanyPage from './pages/CompanyPage';
import ContactUs from './components/ContactUs/ContactUs';
import Blog from './components/Blogs/Blogs';
import ChatDialog from './components/ChatDialog';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// External CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Background Image
import fullBackground from './assets/images/bgnap.jpeg';

// Custom ScrollToTop component to handle scroll restoration
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  // Define header heights based on screen size
  const headerHeight = {
    xs: '60px', // Header height on mobile and tiny screens
    md: '80px', // Header height on tablets and desktops
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url(${fullBackground})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Router>
          <ScrollToTop /> {/* Updated to use custom ScrollToTop */}
          <Header />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              pt: headerHeight, // Add top padding to prevent content from going under the header
              mt: { xs: 0, sm: 0, md: 0 }, // Adjust margin top if needed
            }}
          >
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/about" element={<CompanyPage />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/blogs/:slug" element={<BlogDetail />} />
              <Route path="/service" element={<ServiceDetail />} />

              {/* Dynamic Routes for Industries */}
              {industriesData.map((industry) => (
                <Route
                  key={industry.path}
                  path={industry.path}
                  element={<IndustryPageTemplate industry={industry} />}
                />
              ))}

              {/* Nested Routes for Product Categories */}
              <Route path="/wet-scrubbers" element={<WetScrubbersPage />} />
              <Route path="/venturi" element={<VenturiScrubberPage />} />
              <Route path="/packed-bed" element={<PackedBedScrubberPage />} />
              <Route path="/ammonia-scrubber" element={<AmmoniaScrubberPage />} />
              <Route path="/chlorine" element={<ChlorineScrubberPage />} />
              <Route path="/vent-gas-scrubber" element={<VentGasScrubberPage />} />
              <Route path="/boiler" element={<BoilerFlueGasScrubberPage />} />
              <Route path="/sulfuric-acid" element={<SulfuricAcidScrubberPage />} />
              <Route path="/acid-fume" element={<AcidFumeScrubberPage />} />
              <Route path="/alkali-fume" element={<AlkaliFumeScrubberPage />} />
              <Route path="/hcl-scrubber" element={<HclScrubberPage />} />
              <Route path="/nitric" element={<NitricAcidScrubberPage />} />
              <Route path="/chromic" element={<ChromicAcidPage />} />
              <Route path="/plastic" element={<PlasticFumeScrubberPage />} />
              <Route path="/hospital" element={<HospitalWasteIncineratorWetScrubberPage />} />
              <Route path="/glue" element={<GlueVaporScrubberPage />} />
              <Route path="/foundry" element={<FoundryExhaustPage />} />
              <Route path="/caustic" element={<CausticScrubberPage />} />
              <Route path="/co2" element={<CO2ScrubberPage />} />
              <Route path="/plate" element={<div>Plate Scrubber Page</div>} />
              <Route path="/spray-towers" element={<div>Spray Towers Page</div>} />
              <Route path="/cyclonic" element={<div>Cyclonic Scrubber Page</div>} />

              {/* Dust Collector and its sub-pages */}
              <Route path="/dust-collector" element={<DustCollectorsPage />} />
              <Route path="/baghouse" element={<BagHousePage />} />
              <Route path="/cartridge" element={<CartridgePage />} />
              <Route path="/cyclone" element={<CycloneDustPage />} />
              <Route path="/single-collector" element={<SingleStageDustCollector />} />
              <Route path="/two-stage" element={<TwoStagePage />} />
              <Route path="/portable" element={<PortablePage />} />

              {/* Downdraft Table and its sub-pages */}
              <Route path="/down-draft" element={<DownDraftPage />} />
              <Route path="/welding" element={<WeldingDownTable />} />
              <Route path="/grinding" element={<GrindingPage />} />
              <Route path="/wood-work" element={<WoodWorkingTable />} />
              <Route path="/polishing" element={<PolishingDownPage />} />
              <Route path="/portable-down" element={<PortableDownPage />} />

              {/* Fume Extractor and its sub-pages */}
              <Route path="/fume-extractor" element={<FumeExtractorPage />} />
              <Route path="/soldering-fume" element={<SolideringFumePage />} />
              <Route path="/laser-fume" element={<LaserFumePage />} />
              <Route path="/lab-fume" element={<LabFumePage />} />
              <Route path="/gold-fume" element={<GoldFumePage />} />
              <Route path="/printing-fume" element={<PrintingFumePage />} />
              <Route path="/welding-fume" element={<WeldingFumePage />} />

              {/* Dry Scrubber and its sub-pages */}
              <Route path="/dry-scrubber" element={<DryScrubberPage />} />
              <Route path="/voc" element={<VocScrubberPage />} />
              <Route path="/h2s" element={<H2sScrubberPage />} />
              <Route path="/stp-odor" element={<StpOdorPage />} />
              <Route path="/portable-dry" element={<PortableScrubberPage />} />
            </Routes>
          </Box>
          <Footer />
          <ChatDialog open={chatOpen} onClose={() => setChatOpen(false)} />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;