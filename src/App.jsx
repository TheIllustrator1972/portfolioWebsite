import { Stack, Typography } from "@mui/material";
import ShaderCanvas1 from "./Components/ShaderAnimations/ShaderCanvas1";

function App() {
  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ShaderCanvas1 />
    </Stack>
  );
}

export default App;
