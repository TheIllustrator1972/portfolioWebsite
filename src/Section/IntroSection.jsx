import { Stack, Typography } from "@mui/material";
import ShaderCanvas1 from "../Components/ShaderAnimations/ShaderCanvas1";
import { introPageStyles } from "../styles/styles.introSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const IntroSection = () => {
  const classes = introPageStyles;

  return (
    <Stack sx={classes.container}>
      <Stack sx={classes.canvasAndTextContainer}>
        <ShaderCanvas1 />
        <Stack sx={classes.nameTitleAndIconContainer}>
          <Stack sx={classes.textContainer}>
            <Typography sx={classes.nameText}>Nilesh Kamble</Typography>
            <Typography sx={classes.titleText}>
              Frontend developer crafting seamless user experiences with clean
              code, sharp design, and a passion for performance.
            </Typography>
          </Stack>

          <Stack sx={classes.iconsContainer}>
            <a
              href="https://github.com/TheIllustrator1972"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                style={classes.icons.github}
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
                style={classes.icons.linkedin}
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
                style={classes.icons.mail}
              />
            </a>
          </Stack>
          <Stack sx={{ width: "100%", alignItems: "center" }}>
            <Stack sx={{ width: "70px" }}>
              <DotLottieReact
                src="https://lottie.host/a86103e6-4233-4fe4-83ed-140ce5f42863/JfKIQA7TLF.lottie"
                loop
                autoplay
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default IntroSection;
