import { Stack, Box, Typography, Link } from "@mui/material";
import DownloadOnTheAppStoreBanner from "../../images/DownloadIsometria";
import { desktopProjectListItemStyles } from "../../styles/styles.desktopProjectListItem";

export const appProjectTitleToStoreLinksMap = {
  ["Isometria"]: "https://apple.co/4h3qHz8",
  ["Word Mean +"]: "https://apple.co/3YPtYea",
};

const DesktopProjectListItem = ({ project, index }) => {
  const classes = desktopProjectListItemStyles(index);

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
            href={appProjectTitleToStoreLinksMap?.[project?.name]}
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
    </Stack>
  );
};

export default DesktopProjectListItem;
