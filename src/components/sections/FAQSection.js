import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Define the FAQ data
const faqs = [
  {
    question: "What is a wet scrubber, and how does it work?",
    answer: "A wet scrubber is an air pollution control device that removes pollutants from industrial exhaust gases by passing them through a liquid solution, often water or a chemical reagent, which absorbs or neutralizes the contaminants.",
  },
  {
    question: "What types of pollutants can a wet scrubber remove?",
    answer: "Wet scrubbers are effective in removing particulate matter, acid gases, volatile organic compounds (VOCs), and certain odors from industrial emissions.",
  },
  {
    question: "In which industries are wet scrubbers commonly used?",
    answer: "Wet scrubbers are widely used in industries like chemical processing, metal finishing, power plants, food manufacturing, and petrochemical facilities.",
  },
  {
    question: "What are the advantages of using a wet scrubber?",
    answer: "Wet scrubbers offer high efficiency in pollutant removal, can handle hot and humid gases, and help in achieving regulatory compliance for air quality standards.",
  },
];

function FAQSection() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      component="section"
      sx={{
        py: 8,
         // Updated to dark background color
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Box textAlign="start" mb={4}>
              <Typography variant="h2" component="h2" sx={{ color: 'white', fontWeight: 'bold' }}>
                FAQ’s
              </Typography>
              <Box sx={{ width: '60px', height: '4px', backgroundColor: '#5267a0', mt: 1 }} />
            </Box>
            <Box>
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  sx={{
                    mb: 2,
                    boxShadow: 3,
                    borderRadius: 2,
                    backgroundColor: '#21232e', // Darkened Accordion background
                    color: 'white',
                    transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
                      backgroundColor: '#2a2c38', // Slightly lighter on hover
                    }
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#5267a0' }} />} // Icon color updated
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                    sx={{
                      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(180deg)',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ color: 'white' }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#191A23', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <Typography sx={{ color: '#ccc' }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FAQSection;