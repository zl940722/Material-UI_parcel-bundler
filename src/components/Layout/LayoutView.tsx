import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "~/components/Routes";
import HeaderView from "~/components/Header/HeaderView";
import SidebarView from "~/components/Sidebar/SidebarView";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

const LayoutView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <HeaderView/>
      <SidebarView/>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Routes/>
      </main>
    </div>
  );
};


export default LayoutView;