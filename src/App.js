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
import ExternalLinks from 'myComponents/externalLinks';
import Navbar from 'myComponents/navbar';
import HomePage from 'myPages/home';
import AboutPage from 'myPages/about';
import ExperiencePage from 'myPages/experience';
import WorkPage from 'myPages/work';
import ContactPage from 'myPages/contact';
import Background from 'myAssets/background.png';
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
    h1: {
      fontSize: 70,
      fontWeight: 500,
    },
    h5: {
      fontSize: 20,
      fontWeight: 500,
    },
    body2: {
      fontSize: 20,
      fontWeight: 300,
    },
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
  transitions: {
    duration: {
      shortest: 1500,
      shorter: 2000,
      short: 2500,
      // most basic recommended timing
      standard: 3000,
      // this is to be used in complex animations
      complex: 3750,
      // recommended when something is entering screen
      enteringScreen: 2250,
      // recommended when something is leaving screen
      leavingScreen: 1950,
    },
    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          minHeight: '100vh',
          minWidth: '20vh',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'none',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          fontSize: '10rem',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

const App = () => {
  const renderExternalLinks = () => (
    <Box flexGrow={0}>
      <ExternalLinks />
    </Box>
  );

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
          sx={{
            backgroundImage: `url(${Background})`,
          }}
        >
          {renderExternalLinks()}
          {renderMainBody()}
          {renderNavbar()}
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
