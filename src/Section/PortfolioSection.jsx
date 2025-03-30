import { Stack, Typography } from "@mui/material";
import { styleTemplate } from "../styleTemplate";
import Cpp from "../Components/SkillsAndTools/Cpp";
import VScode from "../Components/SkillsAndTools/VSCode";
import Swift from "../Components/SkillsAndTools/Swift";
import Javascript from "../Components/SkillsAndTools/Javascript";
import Typescript from "../Components/SkillsAndTools/Typescript";
import Vite from "../Components/SkillsAndTools/Vite";
import ReactIcon from "../Components/SkillsAndTools/React";
import SwiftUI from "../Components/SkillsAndTools/SwiftUI";
import Xcode from "../Components/SkillsAndTools/XCode";
import HTML from "../Components/SkillsAndTools/HTML";
import CSS from "../Components/SkillsAndTools/CSS";

const SkillsMap = [
  {
    name: "C++",
    component: Cpp,
  },
  {
    name: "VS Code",
    component: VScode,
  },
  {
    name: "X Code",
    component: Xcode,
  },
  {
    name: "Swift",
    component: Swift,
  },
  {
    name: "SwiftUI",
    component: SwiftUI,
  },
  {
    name: "Javascript",
    component: Javascript,
  },
  {
    name: "Typescript",
    component: Typescript,
  },
  {
    name: "React",
    component: ReactIcon,
  },
  {
    name: "Vite",
    component: Vite,
  },
  {
    name: "HTML",
    component: HTML,
  },
  {
    name: "CSS",
    component: CSS,
  },
];

const Projects = [
  {
    name: "Isometria",
    link: "google.com",
    img: "data:image/jpeg;base64,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",
    appStoreBanner: "google.com",
  },
];

const PortfolioSection = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: styleTemplate.color.black,
        py: 5,
        alignItems: "center",
      }}
    >
      <Stack sx={{ width: "70%" }}>
        <Typography
          sx={{
            color: styleTemplate.color.white,
            fontSize: { xs: "36px", sm: "40px", md: "56px" },
            fontWeight: 800,
            fontFamily: "Montserrat",
          }}
        >
          Portfolio
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PortfolioSection;
