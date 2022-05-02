import React from 'react';
import {
  ThemeProvider, createTheme, responsiveFontSizes,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import { Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
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
});

theme = responsiveFontSizes(theme);

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
    <Typography
      variant="h3"
    >
      Hello World from Eris Jacey :)
    </Typography>
  </ThemeProvider>
);

export default App;
