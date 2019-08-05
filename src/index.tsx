import * as React from "react";
import { render } from "react-dom";
import "~/index.css";

import App from "~/components/App";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    common: { "black": "rgba(51, 51, 51, 1)", "white": "rgba(255, 255, 255, 1)" },
    background: { "paper": "rgba(238, 239, 241, 1)", "default": "#fafafa" },
    primary: {
      light: "rgba(29, 43, 60, 1)",
      "main": "rgba(29, 43, 60, 1)",
      "dark": "#303f9f",
      "contrastText": "#fff"
    },
    secondary: {
      "light": "rgba(170, 71, 104, 1)",
      "main": "rgba(211, 50, 62, 1)",
      "dark": "#c51162",
      "contrastText": "#fff"
    },
    error: { "light": "#e57373", "main": "#f44336", "dark": "#d32f2f", "contrastText": "#fff" },
    text: {
      primary: "rgba(145, 74, 74, 0.87)",
      "secondary": "rgba(0, 0, 0, 0.54)",
      "disabled": "rgba(0, 0, 0, 0.38)",
      "hint": "rgba(0, 0, 0, 0.38)"
    }
  },
  typography: {
    fontFamily: [
      "Source Han Sans SC",
      "-apple-system",
      "BlinkMacSystemFont",
      "\"Segoe UI\"",
      "Roboto",
      "\"Helvetica Neue\"",
      "Arial",
      "sans-serif",
      "\"Apple Color Emoji\"",
      "\"Segoe UI Emoji\"",
      "\"Segoe UI Symbol\""
    ].join(",")
  }
});

render(
  <MuiThemeProvider theme={theme}>
    <App/>
  </MuiThemeProvider>,
  document.getElementById("root")
);
