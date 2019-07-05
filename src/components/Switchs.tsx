import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Switch from "@material-ui/core/Switch";
import Icon from "@material-ui/core/Icon";

export const Switchs = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = (name: string) => (event: any) => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <>
      <CssBaseline />
      <Switch
        checked={state.checkedA}
        onChange={handleChange("checkedA")}
        value="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Switch
        checked={state.checkedB}
        onChange={handleChange("checkedB")}
        value="checkedB"
        color="primary"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Switch
        value="checkedC"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Switch
        disabled={true}
        value="checkedD"
        inputProps={{ "aria-label": "disabled checkbox" }}
      />
      <Switch
        disabled={true}
        checked={true}
        value="checkedE"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Switch
        defaultChecked={true}
        value="checkedF"
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
      />
      <Icon>star</Icon>
    </>
  );
};
