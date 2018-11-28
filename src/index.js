import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import 'typeface-roboto';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {
    deepPurple,
    deepOrange,
    green,
    red
} from '@material-ui/core/colors';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: deepPurple,
        secondary: deepOrange,
        error: red,
        success: green
    }
});

function Root() {
    return (
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    );
  }

ReactDOM.render(<Root />
, document.getElementById('root'));
