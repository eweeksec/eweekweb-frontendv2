import { Container, Grid, CircularProgress, Typography, Box } from '@mui/material';

import Layout from '../components/Layout';
import '../app/globals.css'
import HeaderContentWrapper from '@/components/HeaderContentWrapper';
import EweekCountdown from '@/components/eweekCountdown';
import Image from 'next/image';
import Head from 'next/head';
import Calendar from '@/components/calendar/Calendar';
import { useEffect } from 'react';
import getEvents from './api/events_api';


const Schedule = () => {
  
  return (
    <Layout>
      <Head>
        <title>E-Week 2024</title>
        <meta name="schedule" content="Schedule page for E-Week 2024" />
      </Head>
      <Container style={{paddingInline: '50px', marginBottom: '50px'}}>
        <Box marginBlock={3}>  
          <HeaderContentWrapper title={"E-Week 2024"} subheader={"Welcome to"} headerType={"dualTone"} />
        </Box>
        <Grid container spacing={6} justifyContent="center">
            
          <Grid item xs={12}>
            <Calendar />
          </Grid>

        </Grid>
      </Container>
    </Layout>
  )
};

export default Schedule;
