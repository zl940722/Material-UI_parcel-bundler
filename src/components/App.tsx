import * as React from "react";
import { withTheme } from "@material-ui/core/styles";
import { ContainedButtons } from "~/components/ContainedButtons";
import { Switchs } from "~/components/Switchs";
import { Checkboxes } from "~/components/Checkboxes";
import { SimpleTabs } from "~/components/SimpleTabs";

const App = withTheme(() => {
  return (
    <>
      <Switchs />
      <ContainedButtons />
      <Checkboxes />
      <SimpleTabs />
    </>
  );
});

export default App;
