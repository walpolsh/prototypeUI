import React, { useContext } from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { UserContext } from "../App";
import LetterAvatars from "../LetterAvatar/LetterAvatar";

import MenuIcon from "@material-ui/icons/Menu";
import SimpleMenu from "../SimpleMenu/SimpleMenu";
export const AppBarComponent = props => {
  const { classes, handleDrawerOpen, open } = { ...props };
  const user = useContext(UserContext);
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}
      style={{ background: `rgb(245, 132, 55)` }}
    >
      <Toolbar style={{ minHeight: "0px" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
          style={{ padding: "0px 12px 0px 12px" }}
        >
          <MenuIcon />
        </IconButton>
        <img
          alt="applogo"
          style={{ height: "3em" }}
          src="https://seeklogo.com/images/A/amf-logo-E2F8D5D032-seeklogo.com.png"
        ></img>
        <SimpleMenu avatar={<LetterAvatars first={user.firstName} last={user.lastName} />} />
      </Toolbar>
    </AppBar>
  );
};
