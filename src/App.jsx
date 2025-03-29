import { Stack, Typography } from "@mui/material";
import ShaderCanvas1 from "./Components/ShaderAnimations/ShaderCanvas1";
import { introPageStyles } from "./styles/styles.app";

function App() {
  const classes = introPageStyles;
  return (
    <Stack sx={classes.container}>
      <Stack sx={classes.canvasAndTextContainer}>
        <ShaderCanvas1 />
        <Stack sx={classes.textContainer}>
          <Typography sx={classes.nameText}>Nilesh Kamble</Typography>
          <Typography sx={classes.titleText}>Software Engineer</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
