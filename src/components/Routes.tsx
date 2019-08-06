import {Route, Switch} from "react-router";
import React from 'react';

import ModelManageView from "~/pages/ModelManage/ModelManageView";
const Routes = () => (
  <Switch>
    <Route path={"/"} component={ModelManageView}/>
  </Switch>
)

export default Routes;
