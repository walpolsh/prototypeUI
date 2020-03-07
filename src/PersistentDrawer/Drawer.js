import React, { useContext } from "react";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import { StartChecklist, Staff, Submissions } from "./Lists";
import LetterAvatars from "../LetterAvatar/LetterAvatar";
import { UserContext } from "../App";
import Typography from "@material-ui/core/Typography";

export const DrawerComponent = props => {
  const { classes, open, theme, handleDrawerClose } = { ...props };
  const user = useContext(UserContext);
  const headerStyle = {
    backgroundImage: `url('https://c.wallhere.com/photos/81/b9/1680x1050_px_abstract_geometry_lines_minimalism_pattern-778248.jpg!d')`,
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    color: "white",
    height: "150px"
  };
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div style={headerStyle} className={classes.drawerHeader}>
        <div>
          <LetterAvatars first={user.firstName} last={user.lastName} />
          <Typography style={{ float: "left" }} variant="subtitle2">
            {user.firstName} {user.lastName}
          </Typography>
          <Typography style={{ float: "left" }} variant="subtitle2">
            {user.email}
          </Typography>
        </div>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      {StartChecklist}
      {Staff}
      {Submissions}
      <Divider />
    </Drawer>
  );
};
