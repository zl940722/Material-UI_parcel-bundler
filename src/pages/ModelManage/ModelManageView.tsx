// tslint:disable-next-line:no-relative-imports
import Supervised from "./Supervised/SupervisedView";
// tslint:disable-next-line:no-relative-imports
import UnSupervised from "./UnSupervised/UnSupervisedView";
import React from "react";


export default class ModelManageView extends React.Component<any, any> {
  render() {
    return (
      <div><Supervised/><UnSupervised/></div>
    );
  }
}