import React from 'react';
import { Container, Grid } from '@mui/material';
import Navigation from './Navigation';

const Layout = ({ children }) => (
  <div style={{backgroundColor: 'white', width:'100vw', height:'100vh'}}>
    <div style={{top:0, position: 'fixed', width: '100%', zIndex: 1 }}>
      <Navigation />
    </div>
    <Container style={{marginTop:'70px', width:'100vw'}}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={10} >
          <main>{children}</main>
        </Grid>
      </Grid>
    </Container>
    {/* Footer or other elements */}
  </div>
);

export default Layout;