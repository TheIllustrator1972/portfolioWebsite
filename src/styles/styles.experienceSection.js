export const experienceSectionStyles = {
  container: {
    display: "flex",
    width: "100%",
    heght: "200px",
    backgroundColor: "black",
    alignItems: "center",
    gap: 10,
    height: "80vh",
  },
  sectionTitle: {
    color: "white",
    fontWeight: 700,
    fontSize: "48px",
    fontFamily: "Montserrat",
  },
  mobileContainer: { width: "90%", gap: 4 },
  desktopContainer: {
    width: { sm: "90%", md: "88%", lg: "80%", xl: "70%" },
    justifyContent: "space-between",
    gap: { sm: 3, md: 5, lg: 8 },
    flexDirection: "row",
  },
  desktopExperienceSelectorContainer: { width: "40%", gap: 4 },
};
