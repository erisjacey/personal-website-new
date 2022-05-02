import React from 'react';
import {
  ThemeProvider, createTheme, responsiveFontSizes,
} from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import 'src/App.css';

let theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

theme = responsiveFontSizes(theme);

const App = () => (
  <ThemeProvider theme={theme}>
    <h1>
      Hello World from Eris Jacey :)
    </h1>
  </ThemeProvider>
);

export default App;
