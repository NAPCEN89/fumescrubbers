import React, { useState, memo } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Helmet } from 'react-helmet-async';

// ONLY 5 MOST IMPORTANT BUYER QUESTIONS
const faqs = [
  {
    question: "What is the price of a wet scrubber and dust collector in India?",
    answer: "Wet scrubber starts from ₹4.5 Lakh (5000 CFM PP-FRP). Dust collector starts from ₹2.8 Lakh (pulse jet). Final price depends on airflow, material, and automation. Get exact quote in 2 hours.",
  },
  {
    question: "What warranty and after-sales service do you provide?",
    answer: "2-year full warranty on equipment + 10-year corrosion warranty on FRP body. Free installation, training, and 24-hour emergency service. AMC packages available quarterly/half-yearly.",
  },
  {
    question: "How long does delivery and installation take?",
    answer: "Standard delivery: 3–4 weeks. Urgent orders: 10 days. Installation by our engineers within 3 days after delivery. Fastest service across India.",
  },
  {
    question: "Are your systems TNPCB/CPCB compliant?",
    answer: "100% compliant. We provide CFD simulation report, emission test certificate, and full documentation support for TNPCB/CPCB consent. Zero rejection record.",
  },
  {
    question: "How to maintain the scrubber and dust collector for long life?",
    answer: "Weekly pH check, monthly nozzle cleaning, quarterly pump service. We give free digital maintenance app + video training. 10+ years trouble-free life guaranteed.",
  },
];

// HIDDEN SEO – 120+ FRESH HIGH-INTENT KEYWORDS (never used before)
const HiddenSEO = () => (
  <Box sx={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden', zIndex: '-1' }} aria-hidden="true">
    wet scrubber price india 2025, dust collector cost with installation, best warranty wet scrubber india,
    fastest delivery dust collector manufacturer, tnpcb approved wet scrubber supplier, cpcb compliant dust collector price,
    wet scrubber maintenance cost per year, dust collector spare parts price list, pp frp scrubber warranty india,
    pulse jet dust collector service schedule, wet scrubber installation time, dust collector amc charges,
    emergency service wet scrubber india, free training dust collector operation, digital maintenance app scrubber,
    wet scrubber delivery time tamil nadu, dust collector installation charges, scrubber maintenance checklist pdf,
    best after sales service air pollution control india, longest warranty frp scrubber, zero downtime dust collector,
    wet scrubber spare parts availability, dust collector filter replacement cost, fastest response time breakdown service,
    wet scrubber plc automation price, dust collector hepa filter cost, pp pall ring price india,
    venturi scrubber spare nozzle price, wet scrubber ph dosing pump cost, dust collector solenoid valve price,
    wet scrubber demister pad replacement, dust collector bag filter price, scrubber packing media cost,
    wet scrubber water recirculation pump price, dust collector pulse jet timer cost, scrubber mist eliminator price,
    wet scrubber blower motor replacement cost, dust collector cartridge filter price india,
    wet scrubber chemical dosing tank price, dust collector rotary airlock valve cost,
    wet scrubber level switch price, dust collector pressure gauge cost india,
    wet scrubber maintenance schedule pdf, dust collector filter cleaning system price,
    wet scrubber water flow meter cost, dust collector vibration motor price,
    wet scrubber ph controller price india, dust collector differential pressure switch cost,
    wet scrubber recirculation pump service, dust collector filter cage price,
    wet scrubber spray nozzle replacement cost, dust collector venturi price india,
    wet scrubber drain valve price, dust collector filter bag material cost,
    wet scrubber float switch price, dust collector controller panel price,
    wet scrubber chemical transfer pump cost, dust collector explosion vent price india,
    wet scrubber water treatment chemical price, dust collector grounding kit cost,
    wet scrubber inspection door seal price, dust collector filter support cage price,
    wet scrubber ladder and platform cost, dust collector rotary valve motor price,
    wet scrubber instrumentation package price, dust collector filter media selection guide,
    wet scrubber startup checklist pdf, dust collector commissioning checklist india,
    wet scrubber shutdown procedure, dust collector preventive maintenance schedule,
    wet scrubber troubleshooting guide pdf, dust collector performance guarantee india,
    wet scrubber efficiency test report, dust collector emission test certificate cost,
    wet scrubber water consumption calculation, dust collector power consumption kwh,
    wet scrubber chemical consumption per day, dust collector compressed air consumption cfm,
    wet scrubber operating cost per hour, dust collector running cost per month india,
    wet scrubber roi calculation excel, dust collector payback period calculator,
    wet scrubber life cycle cost analysis, dust collector total cost of ownership india
  </Box>
);

const FAQSection = memo(() => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Helmet>
        <title>FAQ: Wet Scrubber Price, Warranty, Maintenance, Delivery | Best Air Pollution Control India</title>
        <meta
          name="description"
          content="Top 5 questions: Wet scrubber & dust collector price, warranty, delivery time, TNPCB compliance, and maintenance cost. Factory-direct answers."
        />
        <meta name="keywords" content="wet scrubber price india, dust collector warranty, fastest delivery scrubber, tnpcb compliant dust collector, scrubber maintenance cost" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
      </Helmet>

      <Box component="section" sx={{ py: 8, bgcolor: '#0f1117', position: 'relative' }}>
        <HiddenSEO />

        <Container maxWidth="lg">
          <Grid container spacing={5} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Box textAlign="start" mb={4}>
                <Typography variant="h2" component="h2" sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' } }}>
                  Frequently Asked Questions
                </Typography>
                <Box sx={{ width: '60px', height: '4px', backgroundColor: '#5267a0', mt: 1 }} />
              </Box>

              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  sx={{
                    mb: 2,
                    boxShadow: 3,
                    borderRadius: 2,
                    bgcolor: '#21232e',
                    color: 'white',
                    '&:before': { display: 'none' },
                    '&:hover': { bgcolor: '#2a2c38', boxShadow: '0 8px 16px rgba(0,0,0,0.5)' },
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#5267a0' }} />}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 500 }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ bgcolor: '#191A23', borderTop: '1px solid rgba(255, 255, 255, 0.1)', pt: 2 }}>
                    <Typography sx={{ color: '#ccc', lineHeight: 1.6 }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
});

FAQSection.displayName = 'FAQSection';

export default FAQSection;