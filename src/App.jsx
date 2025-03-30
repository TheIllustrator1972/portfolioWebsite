import { Stack, Typography } from "@mui/material";
import ShaderCanvas1 from "./Components/ShaderAnimations/ShaderCanvas1";
import { introPageStyles } from "./styles/styles.app";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const classes = introPageStyles;
  return (
    <Stack sx={classes.container}>
      <Stack sx={classes.canvasAndTextContainer}>
        <ShaderCanvas1 />
        <Stack
          sx={{
            gap: 2,
          }}
        >
          <Stack sx={classes.textContainer}>
            <Typography sx={classes.nameText}>Nilesh Kamble</Typography>
            <Typography sx={classes.titleText}>Software Engineer</Typography>
          </Stack>
          <Stack sx={{ flexDirection: "row", justifyContent: "center" }}>
            <a
              href="https://github.com/TheIllustrator1972"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                style={{ margin: "10px", color: "white" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/nileshsk1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                style={{ margin: "10px", color: "#0077b5" }}
              />
            </a>
            <a
              href="mailto:nileshkamble54321@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                style={{ margin: "10px", color: "white" }}
              />
            </a>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
