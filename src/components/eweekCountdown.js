import React from 'react';
import Countdown from 'react-countdown';
import { Container, Box, Grid, Typography, Paper } from '@mui/material';
import BasicContentWrapper from './BasicContentWrapper'; // Ensure this component is adapted to Material UI as well

import '../app/globals.css'; // Ensure your CSS is compatible with Next.js and Material UI

// Completion state component
const Completionist = () => (
  <Box display="flex" justifyContent="center" alignItems="center">
    <Typography variant="h4" className='countDownNums'>E-Week has started!</Typography>
  </Box>
);

// Countdown renderer
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Paper elevation={3} className='countDownSingleBox'>
              <Typography variant="h5" className='countDownNums countDownGradient'>{days}</Typography>
              <Typography>Days</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={3} className='countDownSingleBox'>
              <Typography variant="h5" className='countDownNums countDownGradient'>{hours}</Typography>
              <Typography>Hours</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={3} className='countDownSingleBox'>
              <Typography variant="h5" className='countDownNums countDownGradient'>{minutes}</Typography>
              <Typography>Mins</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={3} className='countDownSingleBox'>
              <Typography variant="h5" className='countDownNums countDownGradient'>{seconds}</Typography>
              <Typography>Secs</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
};

const EweekCountdown = () => (
  <BasicContentWrapper title="Countdown to E-Week" type="blueWrapper">
    <Countdown
      date={'2024-02-16T17:00:00.000-06:00'}
      renderer={renderer}
    />
  </BasicContentWrapper>
);

export default EweekCountdown;
