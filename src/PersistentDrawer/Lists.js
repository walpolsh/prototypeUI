import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SpeakerPhoneIcon from "@material-ui/icons/SpeakerPhone";
import SettingsIcon from "@material-ui/icons/Settings";

export const StartChecklist = (
  <List
    dense
    subheader={
      <ListSubheader style={{ float: "left" }} component="div" id="nested-list-subheader">
        Start a Checklist
      </ListSubheader>
    }
  >
    {["Search for a Checklist", "Scan a Barcode"].map((text, index) => (
      <ListItem button key={text}>
        <ListItemIcon>{index % 2 === 0 ? <AssignmentIcon /> : <SpeakerPhoneIcon />}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
);
export const Staff = (
  <List
    dense
    subheader={
      <ListSubheader style={{ float: "left" }} component="div" id="nested-list-subheader">
        Admin
      </ListSubheader>
    }
  >
    {["Admin"].map((text, index) => (
      <ListItem button key={text}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
);
export const Submissions = (
  <List
    dense
    subheader={
      <ListSubheader style={{ float: "left" }} component="div" id="nested-list-subheader">
        Submissions
      </ListSubheader>
    }
  >
    {[].map((text, index) => (
      <ListItem button key={text}>
        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
);
