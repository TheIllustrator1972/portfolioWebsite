import { styleTemplate } from "../styleTemplate";

export const desktopProjectListItemStyles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageContainer: { width: "40%", display: "flex", justifyContent: "center" },
  imageStyle: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  textContainer: { width: "40%", gap: 2 },
  projectName: {
    color: "white",
    fontSize: "30px",
    fontWeight: 500,
    fontFamily: "Montserrat",
  },
  link: {
    fontSize: "18px",
    ml: 1,
    fontStyle: "italic",
    fontFamily: "Montserrat",
  },
  projectDescription: {
    color: "white",
    fontSize: "16px",
    fontWeight: 300,
    fontFamily: "Montserrat",
  },
  toolsUsed: {
    color: "white",
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "Montserrat",
  },
  toolsIconContainer: { flexDirection: "row", gap: 1, alignItems: "center" },
  toolIcon: {
    width: "70px",
    hright: "70px",
    alignItems: "center",
    justifyContent: "center",
  },
};
