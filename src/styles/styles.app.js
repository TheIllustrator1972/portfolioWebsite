import { styleTemplate } from "../styleTemplate";

export const introPageStyles = {
  container: {
    width: "100vw",
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
    fontSize: "56px",
  },
  titleText: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: styleTemplate.color.lightGrey,
    fontSize: "32px",
  },
};
