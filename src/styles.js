import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 10),
  },

  navigationBar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default useStyles;
