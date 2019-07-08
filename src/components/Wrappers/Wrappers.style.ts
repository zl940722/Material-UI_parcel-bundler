import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const getColor = (color, theme, brigtness = "main") => {
  if (color && theme.palette[color] && theme.palette[color][brigtness]) {
    return theme.palette[color][brigtness];
  }
};

const getFontWeight = style => {
  switch (style) {
    case "light":
      return 300;
    case "medium":
      return 500;
    case "bold":
      return 600;
    default:
      return 400;
  }
};

const getFontSize = (size, variant = "", theme) => {
  let multiplier;

  switch (size) {
    case "sm":
      multiplier = 0.8;
      break;
    case "md":
      multiplier = 1.5;
      break;
    case "xl":
      multiplier = 2;
      break;
    case "xxl":
      multiplier = 3;
      break;
    default:
      multiplier = 1;
      break;
  }

  const defaultSize =
    variant && theme.typography[variant]
      ? theme.typography[variant].fontSize
      : theme.typography.fontSize + "px";

  return `calc(${defaultSize} * ${multiplier})`;
};

interface Props {
  color: "red" | "blue";
}

const Styled = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: (props: Props) => {
        return getColor(props.color, theme);
      },
      boxShadow: theme.customShadows.widget,
      color: "white",
      "&:hover": {
        backgroundColor: (props: Props) => {
          return getColor(props.color, theme, "light");
        },
        boxShadow: theme.customShadows.widgetWide
      }
    }
  })
);
