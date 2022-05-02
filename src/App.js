import React from 'react';
import {
  ThemeProvider, createTheme, responsiveFontSizes,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
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
  },
});

theme = responsiveFontSizes(theme);

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
    <HomePage />
    <AboutPage />
    <ExperiencePage />
    <WorkPage />
    <ContactPage />
  </ThemeProvider>
);

export default App;
