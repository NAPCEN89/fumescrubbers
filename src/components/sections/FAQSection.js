import React, { useState, memo } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Helmet } from 'react-helmet-async';

// Your original 5 FAQs — unchanged
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

// Hidden SEO — unchanged
const HiddenSEO = () => (
  <Box sx={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden', zIndex: '-1' }} aria-hidden="true">
    wet scrubber price india 2025, dust collector cost with installation, best warranty wet scrubber india...
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

      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0f1117', position: 'relative' }}>
        <HiddenSEO />

        <Container maxWidth="lg">
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={11} md={9} lg={8}>
              
              {/* Title */}
              <Box textAlign={{ xs: 'center', md: 'start' }} mb={{ xs: 4, md: 5 }}>
                <Typography 
                  variant="h2" 
                  component="h2" 
                  sx={{ 
                    color: 'white', 
                    fontWeight: 'bold', 
                    fontSize: { xs: '1.9rem', sm: '2.3rem', md: '2.6rem' },
                    lineHeight: 1.3
                  }}
                >
                  Frequently Asked Questions
                </Typography>
                <Box sx={{ width: { xs: '50px', md: '70px' }, height: '4px', backgroundColor: '#00BFFF', mt: 1.5, mx: { xs: 'auto', md: 0 } }} />
              </Box>

              {/* Accordions */}
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  sx={{
                    mb: 2.5,
                    borderRadius: '16px !important',
                    bgcolor: '#1a1c28',
                    color: 'white',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
                    '&:before': { display: 'none' },
                    '&:hover': { 
                      bgcolor: '#222436',
                      boxShadow: '0 12px 35px rgba(0,191,255,0.15)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#00BFFF', fontSize: '2rem' }} />}
                    sx={{ 
                      py: { xs: 2, md: 2.5 },
                      px: { xs: 2.5, md: 3 },
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.15rem' },
                        lineHeight: 1.5,
                        color: expanded === `panel${index}` ? '#00BFFF' : '#e0e0e0'
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{ 
                    bgcolor: '#14161f', 
                    borderTop: '1px solid rgba(0, 191, 255, 0.2)', 
                    py: 3,
                    px: { xs: 2.5, md: 3 }
                  }}>
                    <Typography 
                      sx={{ 
                        color: '#ccc', 
                        lineHeight: 1.7, 
                        fontSize: { xs: '0.95rem', md: '1.05rem' }
                      }}
                    >
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