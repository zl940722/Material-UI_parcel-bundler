import React from "react";
import { makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
} from "@material-ui/icons";
import SidebarLink from '~/components/Sidebar/SidebarLink';

const drawerWidth = 240;

const structure: any = [
  { id: 0, type: 'title', label: '创作' },
  { id: 1, label: '自动机器学习', link: '/home/autoMl', icon: <TypographyIcon /> },
  { id: 2, label: 'Notebook VM', link: '/home/notebook', icon: <HomeIcon /> },
  { id: 3, type: 'divider' },
  { id: 4, type: 'title', label: '模型管理' },
  { id: 5, label: '试验', link: '/modelManage/test', icon: <TypographyIcon /> },
  { id: 6, label: '管道', link: '/modelManage/pipeline', icon: <TableIcon /> },
  { id: 7, label: '计算', link: '/modelManage/calculation', icon: <NotificationsIcon />},
  { id: 8, label: '模型', link: '/modelManage/model', icon: <UIElementsIcon /> },
  { id: 9, label: '图像', link: '/modelManage/image', icon: <SupportIcon />, },
  { id: 10, label: '部署', link: '/modelManage/deploy', icon: <LibraryIcon />, },
  { id: 11, label: '活动', link: '/modelManage/activity', icon: <FAQIcon />, },
];

const useStyles = makeStyles((theme: any) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  sidebarList: {
    marginTop: theme.spacing.unit * 6,
  },
}));

const SidebarView = () => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List className={classes.sidebarList}>
        {structure.map((link: any) => <SidebarLink key={link.id} location={location} isSidebarOpened={true} {...link} />)}
      </List>
    </Drawer>
  );
};


export default SidebarView;
