import React, { useContext } from "react";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./UseStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AppBarComponent } from "./AppBar";
import { DrawerComponent } from "./Drawer";
import { UserContext } from "../App";
export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { content } = { ...props };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const user = useContext(UserContext);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarComponent classes={classes} handleDrawerOpen={handleDrawerOpen} open={open} />
      <DrawerComponent classes={classes} open={open} theme={theme} handleDrawerClose={handleDrawerClose} />
      {content(useStyles(), open, user)}
    </div>
  );
}
