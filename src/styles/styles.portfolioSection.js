import { styleTemplate } from "../styleTemplate";

export const portfolioSectionStyles = {
  container: {
    width: "100%",
    backgroundColor: styleTemplate.color.black,
    py: 5,
    alignItems: "center",
  },
  innerContainer: { width: { sm: "90%", md: "70%" }, gap: 5 },
  sectionTitle: {
    color: styleTemplate.color.white,
    fontSize: { xs: "36px", sm: "40px", md: "56px" },
    fontWeight: 800,
    fontFamily: "Montserrat",
  },
  projectsContainer: { gap: { sm: 3, md: 8 } },
};
