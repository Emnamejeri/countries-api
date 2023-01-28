import useStyles from "./styles";
import PublicIcon from "@mui/icons-material/Public";
import { Typography, AppBar, Toolbar, Container } from "@mui/material";
import CssBaseline from "@material-ui/core/CssBaseline";
import CountriesTable from "./CountriesTable";

function App() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />

      <AppBar position="relative">
        <Toolbar className={classes.navigationBar}>
          {" "}
          <PublicIcon className={classes.icontop} />
          <Typography variant="h3">World Nations </Typography>{" "}
        </Toolbar>
      </AppBar>
      <Container className={classes.countries}>
        <CountriesTable />{" "}
      </Container>
    </div>
  );
}

export default App;
