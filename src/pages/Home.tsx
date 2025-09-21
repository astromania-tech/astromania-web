import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '@components/HeroSection';
import ServicesSection from '@components/ServicesSection';

const Home: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <ServicesSection />
    </Box>
  );
};

export default Home;
