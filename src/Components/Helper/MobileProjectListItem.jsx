import { Stack, Box, Typography, Link, Divider } from "@mui/material";
import DownloadOnTheAppStoreBanner from "../../images/DownloadIsometria";

import { mobileProjectListItemStyles } from "../../styles/styles.mobileProjectListItem";

const MobileProjectListItem = ({ project, index }) => {
  const classes = mobileProjectListItemStyles;
  console.log(index);

  return (
    <Stack sx={classes.container}>
      <Box sx={classes.imageContainer}>
        <img
          src={`/images/${project?.image}.png`}
          alt="Project Preview"
          style={classes.imageStyle}
        />
      </Box>
      <Stack sx={classes.textContainer}>
        <Typography sx={classes.projectName}>
          {project?.name}
          <Link
            href={project?.link}
            target="_blank"
            rel="noopener"
            sx={classes.link}
          >
            (link)
          </Link>
        </Typography>
        <Typography sx={classes.projectDescription}>
          {project?.helperText}
        </Typography>
        {project?.appStoreBanner && (
          <a
            href="https://apple.co/4h3qHz8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadOnTheAppStoreBanner />
          </a>
        )}
        <Stack>
          <Typography sx={classes.toolsUsed}> Tools</Typography>
          <Stack sx={classes.toolsIconContainer}>
            {project?.toolsUsed?.map((tool) => (
              <Stack sx={classes.toolIcon}>
                {tool?.component({
                  size: tool?.size ? tool?.size : 70,
                })}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
      {index === 0 && <Divider sx={{ backgroundColor: "grey" }} />}
    </Stack>
  );
};

export default MobileProjectListItem;
