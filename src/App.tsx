import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Button,
  Container,
  createMuiTheme,
  CssBaseline,
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

theme = responsiveFontSizes(theme);

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <div className="App">
          <Typography className={classes.heading} variant="h1" component="h1">
            Clicked button
          </Typography>
          <Button color="primary">orange</Button>
          <Button color="primary">green</Button>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;
