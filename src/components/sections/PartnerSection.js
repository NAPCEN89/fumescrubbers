import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import CountUp from 'react-countup';

// Import local logos from assets
import PartnerLogo1 from '../../assets/images/clients/C1.png';
import PartnerLogo2 from '../../assets/images/clients/C2.png';
import PartnerLogo3 from '../../assets/images/clients/C10.png';
import PartnerLogo4 from '../../assets/images/clients/C4.png';
import PartnerLogo5 from '../../assets/images/clients/C5.png';

const partnerLogos = [
  PartnerLogo1,
  PartnerLogo2,
  PartnerLogo3,
  PartnerLogo4,
  PartnerLogo5,
];

const PartnerImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  maxWidth: { xs: '120px', sm: '150px', md: '180px' }, // Responsive logo size
}));

function PartnerSection() {
  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 1, sm: 2 },
        backgroundColor: 'transparent',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="center" justifyContent="center">
        {/* Main Content Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 1 }}>
              <Typography variant="h6" component="h6" sx={{ color: '#00BFFF', fontWeight: 600, fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                Partner
              </Typography>
            </Box>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
              }}
            >
              Partnering for Cleaner Air Worldwide
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              }}
            >
              At NAPCEN, we collaborate with trusted partners to deliver advanced air pollution control solutions, including wet scrubbers, dry scrubbers, dust collectors, downdraft tables, and industrial blowers, ensuring cleaner and safer industrial environments globally.
            </Typography>
          </Box>
        </Grid>

        {/* Counter Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                color: '#00BFFF',
              }}
            >
              <CountUp end={50} duration={2.5} suffix="+" enableScrollSpy={true} />
            </Typography>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 500,
                mt: 1,
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
              }}
            >
              Trusted Industries
            </Typography>
          </Box>
        </Grid>

        {/* Logo Gallery Section */}
        <Grid item xs={12} sx={{ mt: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="center">
            {partnerLogos.map((logo, index) => (
              <Grid item xs={6} sm={4} md={2.4} key={index}>
                <PartnerImage src={logo} alt={`Partner logo ${index + 1}`} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PartnerSection;