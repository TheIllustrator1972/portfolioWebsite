import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import ExperienceSelector from "../Components/Helper/ExperienceSelector";
import ExperienceDetails from "../Components/Helper/ExperienceDetails";
import { useTheme } from "@mui/material/styles";
import ExperienceMobile from "../Components/Helper/ExperienceMobile";
import { experiences } from "../constants/metadata";
import { experienceSectionStyles } from "../styles/styles.experienceSection";

const ExperienceSection = () => {
  const [active, setActive] = useState(experiences[0]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const classes = experienceSectionStyles;

  return (
    <Stack sx={classes.container}>
      <Typography sx={classes.sectionTitle}>Experience</Typography>
      {isSmallScreen ? (
        <Stack sx={classes.mobileContainer}>
          {experiences?.map((_experience) => (
            <ExperienceMobile experience={_experience} />
          ))}
        </Stack>
      ) : (
        <Stack sx={classes.desktopContainer}>
          <Stack sx={classes.desktopExperienceSelectorContainer}>
            {experiences?.map((_experience) => (
              <ExperienceSelector
                experience={_experience}
                isActive={_experience?.title === active?.title}
                setActive={setActive}
              />
            ))}
          </Stack>
          <ExperienceDetails experience={active} />
        </Stack>
      )}
    </Stack>
  );
};
export default ExperienceSection;
