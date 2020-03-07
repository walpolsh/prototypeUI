import React from "react";
import "./App.css";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import PersistentDrawer from "./PersistentDrawer/DrawerIndex";
import RecentActivity from "./Cards/RecentActivity";
const userInfo = {
  firstName: "Paul",
  lastName: "Walsh",
  email: "twentytwentyk@live.com"
};
export const UserContext = React.createContext(null);
const content = (useStyles, open, user) => {
  const classes = useStyles;

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open
      })}
    >
      <div className={classes.drawerHeader} />
      <Typography variant="h6">Hello {user.firstName},</Typography>
      <Typography variant="caption">
        This is your dashboard. You'll find all your recent activity here, as well as any other important information.
      </Typography>
      <RecentActivity />
    </main>
  );
};
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={userInfo}>
        <PersistentDrawer content={content} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
