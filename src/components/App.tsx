import * as React from "react";
import { withTheme } from "@material-ui/core/styles";

import {BrowserRouter} from 'react-router-dom';
import Routes from '~/components/Routes';

const App = withTheme(() => {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
});

export default App;
