import { Stack } from "@mui/material";
import GlassPlanet from "./images/GlassPlanet";
import IntroSection from "./Section/IntroSection";

function App() {
  return (
    <Stack>
      <IntroSection />
      <Stack
        sx={{
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <GlassPlanet />
      </Stack>
    </Stack>
  );
}

export default App;
