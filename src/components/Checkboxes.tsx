import * as React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export const Checkboxes = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true
  });

  const handleChange = (name: any) => (event: any) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <Checkbox
        checked={state.checkedA}
        onChange={handleChange("checkedA")}
        value="checkedA"
        inputProps={{
          "aria-label": "primary checkbox"
        }}
      />
      <Checkbox
        checked={state.checkedB}
        onChange={handleChange("checkedB")}
        value="checkedB"
        color="primary"
        inputProps={{
          "aria-label": "secondary checkbox"
        }}
      />
      <Checkbox
        value="checkedC"
        inputProps={{
          "aria-label": "uncontrolled-checkbox"
        }}
      />
      <Checkbox
        disabled={true}
        value="checkedD"
        inputProps={{
          "aria-label": "disabled checkbox"
        }}
      />
      <Checkbox
        disabled={true}
        checked={true}
        value="checkedE"
        inputProps={{
          "aria-label": "disabled checked checkbox"
        }}
      />
      <Checkbox
        checked={state.checkedF}
        onChange={handleChange("checkedF")}
        value="checkedF"
        indeterminate={true}
        inputProps={{
          "aria-label": "indeterminate checkbox"
        }}
      />
      <Checkbox
        defaultChecked={true}
        color="default"
        value="checkedG"
        inputProps={{
          "aria-label": "checkbox with default color"
        }}
      />
    </div>
  );
};
