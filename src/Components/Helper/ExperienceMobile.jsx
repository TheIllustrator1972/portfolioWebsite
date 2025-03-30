import { Stack, Typography } from "@mui/material";
import { mobileExperienceItemStyles } from "../../styles/styles.mobileExperienceItem";

const ExperienceMobile = ({ experience }) => {
  const classes = mobileExperienceItemStyles;
  return (
    <Stack>
      <Typography sx={classes.title}>{experience?.title}</Typography>
      <Stack direction="row">
        <Typography sx={classes.companyAndDate}>
          {experience?.company_name}
        </Typography>
        {" | "}
        <Typography sx={classes.companyAndDate}>{experience?.date}</Typography>
      </Stack>
      <Typography sx={classes.mobileText}>{experience?.mobileText}</Typography>
    </Stack>
  );
};

export default ExperienceMobile;
