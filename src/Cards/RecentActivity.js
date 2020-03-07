import React from "react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AssignmentIcon from "@material-ui/icons/Assignment";
import CardActionArea from "@material-ui/core/CardActionArea";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

export default function RecentActivity() {
  return (
    <Card elevation={3} style={{ display: "flex", flexDirection: "column" }}>
      <CardContent>
        <Typography variant="h6"> Recent Activity</Typography>
      </CardContent>
      {AlignItemsList}
      <CardActionArea style={{ display: "flex" }}>
        <CardContent style={{ display: "flex", marginLeft: "auto" }}>
          <FormatListBulletedIcon style={{ marginRight: "12px" }} />
          <Typography variant="subtitle2">VIEW ALL OF MY SUBMISSIONS</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const AlignItemsList = (
  <CardActionArea>
    <CardContent style={{ alignItems: "center", display: "flex", fontSize: "1rem" }}>
      <div>
        <ListItemAvatar>
          <AssignmentIcon />
        </ListItemAvatar>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="button">Monthly Checklist</Typography>
        <Typography variant="body2">MX2600 - 2</Typography>
        <Typography variant="caption">Started at Thu Mar 05 2020 19:14:50 GMT-0500 (Eastern Standard Time)</Typography>
      </div>
    </CardContent>
  </CardActionArea>
);
