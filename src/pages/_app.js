// pages/_app.js
import { ThemeProvider, createTheme } from '@mui/material';
import '../app/globals.css'; // Adjust the path to your global CSS file as needed
import { AuthProvider } from '@/components/AuthContext';

const theme = createTheme({
  typography: {
    fontFamily: [
      'western3',
      'westernHeading',
      'sans-serif',
    ].join(','),
  },
});

function MyApp({ Component, pageProps }) {
 
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp;
