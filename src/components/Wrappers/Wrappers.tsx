import React from "react";
import {
  withStyles,
  withTheme,
  Badge as BadgeBase,
  Typography as TypographyBase,
  Button as ButtonBase
} from "@material-ui/core";
import classnames from "classnames";

const createStyled = (styles, options) => {
  const Styled = props => {
    const { children, ...other } = props;
    return children(other);
  };

  return withStyles(styles, options)(Styled);
};

const BadgeExtended = ({
  classes,
  theme,
  children,
  colorBrightness,
  ...props
}) => {
  const Styled = createStyled({
    badge: {
      backgroundColor: getColor(props.color, theme, colorBrightness)
    }
  });

  return (
    <Styled>
      {styledProps => (
        <BadgeBase
          classes={{
            badge: classnames(classes.badge, styledProps.classes.badge)
          }}
          {...props}
        >
          {children}
        </BadgeBase>
      )}
    </Styled>
  );
};

export const Badge = withStyles(
  theme => ({
    badge: {
      fontWeight: 600,
      height: 16,
      minWidth: 16
    }
  }),
  { withTheme: true }
)(BadgeExtended);

const TypographyExtended = ({
  theme,
  children,
  weight,
  size,
  colorBrightness,
  ...props
}) => (
  <TypographyBase
    style={{
      color: getColor(props.color, theme, colorBrightness),
      fontWeight: getFontWeight(weight),
      fontSize: getFontSize(size, props.variant, theme)
    }}
    {...props}
  >
    {children}
  </TypographyBase>
);

export const Typography = withTheme()(TypographyExtended);

const ButtonExtended = ({ theme, children, ...props }) => {
  const Styled = createStyled({
    button: {
      backgroundColor: getColor(props.color, theme),
      boxShadow: theme.customShadows.widget,
      color: "white",
      "&:hover": {
        backgroundColor: getColor(props.color, theme, "light"),
        boxShadow: theme.customShadows.widgetWide
      }
    }
  });

  return (
    <Styled>
      {({ classes }) => (
        <ButtonBase classes={{ root: classes.button }} {...props}>
          {children}
        </ButtonBase>
      )}
    </Styled>
  );
};

export const Button = withTheme()(ButtonExtended);
