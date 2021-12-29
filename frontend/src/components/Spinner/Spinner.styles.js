import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  spinner: {
    width: "100%",
    height: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  spinnerContained: {
    width: "100%",
    height: "20vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
