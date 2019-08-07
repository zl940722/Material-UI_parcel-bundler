import React from "react";
// tslint:disable-next-line:no-relative-imports
import Supervised from "./Supervised/SupervisedView";
// tslint:disable-next-line:no-relative-imports
import UnSupervised from "./UnSupervised/UnSupervisedView";
import { ContainedButtons } from "~/components/ContainedButtons";
import { Switchs } from "~/components/Switchs";
import { Checkboxes } from "~/components/Checkboxes";
import { SimpleTabs } from "~/components/SimpleTabs";

export default class ModelManageView extends React.Component<any, any> {
  render() {
    return (
      <div>
        <ContainedButtons/>
        <Switchs/>
        <Checkboxes/>
        <SimpleTabs/>
        <Supervised/>
        <UnSupervised/>
      </div>
    );
  }
}