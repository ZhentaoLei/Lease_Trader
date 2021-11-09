import { makeStyles } from "@material-ui/core/styles";
import header from "./images/header.png";
export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px ",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${header})`,
    opacity: "0.7",
  },
  header: {
    fontSize: "50px",
    color: "rgba(50, 228, 23, 0.8)",
    WebkitAnimation: "glow 1s ease-in-out infinite alternate",
    MozAnimation: "glow 1s ease-in-out infinite alternate",
    animation: "glow 1s ease-in-out infinite alternate",
  },
  "@keyframes glow": {
    "0%": {
      textShadow:
        "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073",
    },
    "100%": {
      textShadow:
        "0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6",
    },
  },
  image: {
    marginLeft: "20px",
    display: "flex",
  },
  footer: {
    display: "flex",
    minheight: "100vh",
    flexDirection: "colume",
  },
}));
