import { Stack, Typography } from "@mui/material";
import { experienceDetailsStyles } from "../../styles/styles.experienceDetails";

const ExperienceDetails = ({ experience }) => {
  const classes = experienceDetailsStyles;
  return (
    <Stack sx={classes.container}>
      {experience?.details?.map((experienceItem) => (
        <Stack sx={classes.headingAndSupportTextContainer}>
          <Typography sx={classes.heading}>
            {experienceItem?.heading}
          </Typography>
          <Typography sx={classes.supportText}>
            {experienceItem?.supportText}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default ExperienceDetails;
