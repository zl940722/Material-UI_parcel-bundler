import * as React from "react";
import { withTheme } from "@material-ui/core/styles";

import { BrowserRouter } from "react-router-dom";
import Layout from "~/components/Layout/LayoutView";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { themes, overrides } from "~/themes";

const theme = createMuiTheme({ ...themes.default, ...overrides });


const App = withTheme(() => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    </MuiThemeProvider>
  );
});

export default App;
