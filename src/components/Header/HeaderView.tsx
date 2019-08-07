import React from "react";
import Typography from "@material-ui/core/Typography";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  appBar: {
    width: "100vw",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
}));

const HeaderView = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap={true}>
          R2.ai
        </Typography>
      </Toolbar>
    </AppBar>
  );
};


export default HeaderView;
