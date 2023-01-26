import { makeStyles } from "@material-ui/core/styles";
import { cyan } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 10),
  },

  navigationBar: {
    backgroundColor: cyan[600],

    display: "flex",
    justifyContent: "space-between",
  },
}));

export default useStyles;
