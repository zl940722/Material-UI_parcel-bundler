import { Route, Switch } from "react-router";
import React from "react";

import TestView from "~/pages/ModelManage/Test/TestView";

const Routes = () => (
  <Switch>
    <Route path={"/modelManage/test"} component={TestView}/>
  </Switch>
);

export default Routes;
