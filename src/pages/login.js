import React, { useState } from 'react';
import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import '../app/globals.css'; // Adjust the path to your global CSS file as needed
import Layout from '@/components/Layout';
import { Box, Container } from '@mui/material';
import Head from 'next/head';
import HeaderContentWrapper from '@/components/HeaderContentWrapper';
import authenticateUser from './api/userAuth';
import { useAuth } from '@/components/AuthContext';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const {login} = useAuth();
  const router = useRouter();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials({ ...credentials, [id]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const { username, password } = credentials;
    console.log('Logging in with', username);
    // Placeholder for your authentication logic
    try {
      const user = await authenticateUser(username, password);
      if (user.authentication > 0) {
        console.log('Logged in');
        login(user.authentication);
        router.replace('/'); // Navigate to the homepage or dashboard after successful login
      } else {
        setError({ message: 'Invalid credentials' });
      }
    } catch (err) {
      setError({ message: 'Login failed: ' + err.message });
    }
  };

  // Placeholder function for authentication logic
  // Replace with your actual authentication logic
  
  

  return (
    <Layout>
      <Head>
        <title>Login</title>
        <meta name="login" content="Login to your account" />
      </Head>
      <Container style={{paddingInline: '50px', marginBottom: '50px'}}>
        <Box marginBlock={3}>  
          <HeaderContentWrapper title={"Login"} subheader={""} headerType={"dualTone"} />
        </Box>
      <div className="login row justify-content-center">
        <div className="content col-md-4 col-sm-6">
          <p>You need special permission to access this page. Please login with given credentials.</p>
          {/* {error && <ErrorMessage errorMessage={error.message}/>} */}
          <form onSubmit={handleLogin}>
            <div className="entry">
              <TextField
                id="username"
                label="Username"
                type='text'
                value={credentials.username}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: Boolean(credentials.username)
                }}
                onAnimationStart={(event) => {
                  if (event.animationName === 'mui-auto-fill') {
                    handleChange({ target: { id: 'username', value: event.target.value } });
                  }
                }}
                required
                fullWidth
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                value={credentials.password}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: Boolean(credentials.username)
                }}
                onAnimationStart={(event) => {
                  if (event.animationName === 'mui-auto-fill') {
                    handleChange({ target: { id: 'password', value: event.target.value } });
                  }
                }}
                required
                fullWidth
              />
            </div>
            <Button 
              type="submit" 
              className="button" 
              fullWidth
            >
              Login
            </Button>
          </form>
        </div>
      </div>
      </Container>
    </Layout>
  );
};

export default Login;
