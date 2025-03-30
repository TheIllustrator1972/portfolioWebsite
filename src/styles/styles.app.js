import { styleTemplate } from "../styleTemplate";

export const introPageStyles = {
  container: {
    display: "flex",
    minWidth: "100vw",
    width: "100%",
    height: "100vh",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  canvasAndTextContainer: {
    alignItems: "center",
    py: 5,
    height: "100%",
    gap: 10,
  },
  textContainer: { alignItems: "center", width: "600px" },
  nameText: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: styleTemplate.color.white,
    fontSize: { xs: "36px", sm: "40px", md: "56px" },
  },
  titleText: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: styleTemplate.color.lightGrey,
    fontSize: "32px",
  },
};
