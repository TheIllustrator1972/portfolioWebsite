import { styleTemplate } from "../styleTemplate";

export const introPageStyles = {
  container: {
    display: "flex",
    minWidth: "100vw",
    width: "100%",
    height: "100vh",
    backgroundColor: styleTemplate.color.black,
    alignItems: "center",
    overflowX: "hidden",
  },
  canvasAndTextContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    py: 5,
    height: "100%",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  nameText: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    color: styleTemplate.color.white,
    fontSize: { xs: "36px", sm: "40px", md: "56px" },
  },
  titleText: {
    fontFamily: "Montserrat",
    fontWeight: "500",
    color: styleTemplate.color.lightGrey,
    fontSize: "18px",
    textAlign: "center",
    width: "90%",
  },
  nameTitleAndIconContainer: {
    gap: 1,
  },
  iconsContainer: { flexDirection: "row", justifyContent: "center" },
  icons: {
    github: { margin: "10px", color: styleTemplate.color.white },
    linkedin: { margin: "10px", color: "#0077b5" },
    mail: { margin: "10px", color: styleTemplate.color.white },
  },
  lottieContainer: { width: "100%", alignItems: "center" },
};
