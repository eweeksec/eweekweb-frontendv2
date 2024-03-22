import { Container, Grid, CircularProgress, Typography, Box } from '@mui/material';

import Layout from '../components/Layout';
import '../app/globals.css'
import HeaderContentWrapper from '@/components/HeaderContentWrapper';
import EweekCountdown from '@/components/eweekCountdown';
import Image from 'next/image';
import Head from 'next/head';


const Home = () => (
  <Layout>
    <Head>
      <title>E-Week 2024</title>
      <meta name="home" content="Home page for E-Week 2024" />
    </Head>
    <Container style={{paddingInline: '50px', marginBottom: '50px'}}>
      <Box marginBlock={3}>  
        <HeaderContentWrapper title={"E-Week 2024"} subheader={"Welcome to"} headerType={"dualTone"} />
      </Box>
      <Grid container spacing={6} justifyContent="center">
          
        <Grid item xs={12}>
          <EweekCountdown />
        </Grid>

        <Grid item xs={12}>
          <div style={{ width: '100%' }}>
            <Image 
              src="/E-Week-2024-Cover.png" 
              alt="E-Week Logo"
              width={1200}
              height={600} 
            />
          </div>
        </Grid>

      </Grid>
    </Container>
  </Layout>
);

export default Home;
