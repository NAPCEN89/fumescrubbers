import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

// Import local SVG icons
import yearsIcon from '../../assets/icons/counter1.svg';
import satisfactionIcon from '../../assets/icons/counter2.svg';
import systemsIcon from '../../assets/icons/counter3.svg';
import projectsIcon from '../../assets/icons/counter4.svg';

const NumberCounter = ({ start, end, duration, title, symbol, imageSrc }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5,    // Trigger when 50% of the component is visible
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <Box
      ref={ref}
      sx={{
        textAlign: 'center',
        padding: 2,
        borderRadius: 2,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-10px)',
        },
      }}
    >
      <Box sx={{ mb: 1 }}>
        <img src={imageSrc} alt={`${title} icon`} style={{ width: '81px', height: '80px' }} />
      </Box>
      <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold', color: 'green' }}>
        {hasAnimated && (
          <CountUp start={start} end={end} duration={duration} separator="," />
        )}
        {symbol}
      </Typography>
      <Typography variant="h6" sx={{ color: 'white' }}>
        {title}
      </Typography>
    </Box>
  );
};

NumberCounter.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  duration: PropTypes.number,
  title: PropTypes.string.isRequired,
  symbol: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
};

NumberCounter.defaultProps = {
  duration: 2.5,
  symbol: '',
};

const AnimatedCounters = () => {
  const counters = [
    {
      id: 1,
      end: 13,
      title: 'Years in Air Pollution Solutions',
      symbol: '+',
      imageSrc: yearsIcon,
    },
    {
      id: 2,
      end: 98,
      title: 'Client Satisfaction Rate',
      symbol: '%',
      imageSrc: satisfactionIcon,
    },
    {
      id: 3,
      end: 150,
      title: 'Air Filtration Systems Installed',
      symbol: '+',
      imageSrc: systemsIcon,
    },
    {
      id: 4,
      end: 500,
      title: 'Pollution Control Projects',
      symbol: '+',
      imageSrc: projectsIcon,
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4} justifyContent="center">
        {counters.map((counter) => (
          <Grid item xs={12} sm={6} md={3} key={counter.id}>
            <NumberCounter
              start={0}
              end={counter.end}
              title={counter.title}
              symbol={counter.symbol}
              imageSrc={counter.imageSrc}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AnimatedCounters;