import { styleTemplate } from "../styleTemplate";

export const introPageStyles = {
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  canvasAndTextContainer: { alignItems: "center", gap: 10 },
  textContainer: { alignItems: "center", gap: 0.5, width: "600px" },
  nameText: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: styleTemplate.color.white,
    fontSize: "48px",
  },
  titleText: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: styleTemplate.color.white,
    fontSize: "32px",
  },
};
