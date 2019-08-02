import * as React from "react";
import { withTheme } from "@material-ui/core/styles";
import { ContainedButtons } from "~/components/ContainedButtons";
import { Switchs } from "~/components/Switchs";
import { Checkboxes } from "~/components/Checkboxes";
import { SimpleTabs } from "~/components/SimpleTabs";
import ModelManageView from "~/pages/ModelManage/ModelManageView";

const App = withTheme(() => {
  return (
    <div>
      <Switchs/>
      <ContainedButtons/>
      <Checkboxes/>
      <SimpleTabs/>
      <ModelManageView/>
    </div>
  );
});

export default App;
