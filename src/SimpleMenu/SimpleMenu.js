import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { UserContext } from "../App";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { avatar } = { ...props };
  const user = useContext(UserContext);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div style={{ marginLeft: "auto" }}>
      <Button aria-describedby={id} onClick={handleClick} style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        {avatar}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              <Typography variant="subtitle1">Signed in as:</Typography>
              <Typography variant="subtitle2">
                {user.firstName} {user.lastName}
              </Typography>
            </ListSubheader>
          }
        >
          <Divider />
          <ListItem button onClick={handleClose}>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>

            <ListItemText>My account</ListItemText>
          </ListItem>
          <ListItem button onClick={handleClose}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>

            <ListItemText>Logout</ListItemText>
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}
