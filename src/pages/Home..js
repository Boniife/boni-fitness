import React, { useState } from 'react';
import { Box } from '@mui/material';
import Exercise from '../components/Exercise';
import SearchExercise from '../components/SearchExercise';
import HeroBanner from '../components/HeroBanner';
const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercise />
      <Exercise />
    </Box>
  );
};

export default Home;
