import useStyles from "./styles";
import PublicIcon from "@mui/icons-material/Public";
import { Typography, AppBar, Toolbar } from "@mui/material";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />

      <AppBar position="relative">
        <Toolbar className={classes.navigationBar}>
          {" "}
          <PublicIcon
            sx={{ display: { xs: "block", sm: "none" } }}
            className={classes.icontop}
          />
          <Typography
            variant="h2"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            World Nations{" "}
          </Typography>{" "}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
