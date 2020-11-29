import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Button,
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core';
import { green, orange } from '@material-ui/core/colors';

const useStyles = makeStyles({
  heading: {
    textAlign: 'center',
    marginTop: '40px',
  },
});

let theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: green[400],
    },
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography className={classes.heading} variant="h1" component="h1">
          Clicked button
        </Typography>
        <Button color="primary">orange</Button>
        <Button color="primary">green</Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
