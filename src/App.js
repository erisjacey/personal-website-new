import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  ThemeProvider, createTheme, responsiveFontSizes,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from 'myComponents/navbar';
import HomePage from 'myPages/home';
import AboutPage from 'myPages/about';
import ExperiencePage from 'myPages/experience';
import WorkPage from 'myPages/work';
import ContactPage from 'myPages/contact';
import 'src/App.css';

let theme = createTheme({
  palette: {
    background: {
      // TODO
      // default: '#36EAEF'
    },
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[900],
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'none',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

const App = () => {
  const renderMainBody = () => (
    <Box
      display="flex"
      flexDirection="row"
      flexGrow={1}
    >
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
      >
        <HomePage />
        <AboutPage />
        <ExperiencePage />
        <WorkPage />
        <ContactPage />
      </Box>
    </Box>
  );

  const renderNavbar = () => (
    <Box flexGrow={0}>
      <Navbar />
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Router>
        <Box
          display="flex"
          flexDirection="row"
        >
          {renderMainBody()}
          {renderNavbar()}
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
