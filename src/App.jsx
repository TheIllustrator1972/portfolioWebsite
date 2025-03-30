import { Stack } from "@mui/material";
import GlassPlanet from "./images/GlassPlanet";
import IntroSection from "./Section/IntroSection";
import PortfolioSection from "./Section/PortfolioSection";
import ExperienceSection from "./Section/ExperienceSection";

function App() {
  return (
    <Stack>
      <IntroSection />
      <PortfolioSection />
      <ExperienceSection />
      {/* <Stack
        sx={{
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <GlassPlanet />
      </Stack> */}
    </Stack>
  );
}

export default App;
