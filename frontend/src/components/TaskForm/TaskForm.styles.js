import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalStyle: {
    width: 472,
    height: "80%",
    backgroundColor: "white",
    boxShadow: 24,
    padding: 32,
    overflowY: "scroll",
  },
}));

export default useStyles;
