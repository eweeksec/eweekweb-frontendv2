import { useAuth } from '@/components/AuthContext'
import HeaderContentWrapper from '@/components/HeaderContentWrapper';
import Layout from '@/components/Layout';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import { Router, useRouter } from 'next/router';
import React from 'react'
import useRequireAuth from 'src/hooks/useRequireAuth';


const logoutPage = () => {
  useRequireAuth(3);
  const {logout} = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push('/');
  }
  return (
    <Layout>
      <Head>
        <title>Logout</title>
        <meta name="description" content="Logout of Admin" />
      </Head>
      <Container style={{paddingInline: '50px', marginBottom: '50px'}}>
        <Box marginBlock={3}>  
          <HeaderContentWrapper title={"Logout"} subheader={""} headerType={"dualTone"} />
        </Box>

        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'red !important',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'darkred', // Darken the button on hover
                },
              }}
              onClick={handleLogout}
            >
              <h1>Logout</h1>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default logoutPage
