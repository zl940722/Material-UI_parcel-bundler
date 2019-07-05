import * as React from "react";
import { render } from "react-dom";
import "~/index.css";

import App from "~/components/App";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1d2b3c"
    },
    secondary: {
      main: "#d3323e"
    }
  }
});

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
