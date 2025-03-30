import { Stack, Typography } from "@mui/material";
import DesktopProjectListItem from "../Components/Helper/DesktopProjectListItem";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileProjectListItem from "../Components/Helper/MobileProjectListItem";
import { projects } from "../constants/metadata";
import { portfolioSectionStyles } from "../styles/styles.portfolioSection";

const PortfolioSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = portfolioSectionStyles;

  return (
    <Stack sx={classes.container}>
      <Stack
        sx={{
          ...classes.innerContainer,
          p: isSmallScreen ? 4 : 0,
        }}
      >
        <Typography sx={classes.sectionTitle}>Portfolio</Typography>
        <Stack sx={classes.projectsContainer}>
          {projects?.map((project, index) =>
            isSmallScreen ? (
              <MobileProjectListItem project={project} index={index} />
            ) : (
              <DesktopProjectListItem project={project} index={index} />
            )
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PortfolioSection;
