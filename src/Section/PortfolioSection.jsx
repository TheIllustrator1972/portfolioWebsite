import { Box, Link, Stack, Typography } from "@mui/material";
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
import DownloadOnTheAppStoreBanner from "../images/DownloadIsometria";
import DesktopProjectListItem from "../Components/Helper/DesktopProjectListItem";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileProjectListItem from "../Components/Helper/MobileProjectListItem";

const projects = [
  {
    name: "Isometria",
    platform: ["iPhone", "iPad", "Mac"],
    link: "https://theillustrator1972.github.io/isometria/",
    image: "isometria",
    appStoreBanner: DownloadOnTheAppStoreBanner,
    helperText:
      "Isometria is a SwiftUI-based isometric grid art app for iPad and macOS. It offers customizable grids, color tools, and intuitive drawing features, including zoom, pan, undo/redo, and export options.",
    toolsUsed: [
      { component: Swift, size: 54 },
      { component: SwiftUI },
      { component: Xcode },
    ],
  },
  {
    name: "SVG Preview on Hover",
    platform: ["VS Code Extension"],
    image: "svgPreviewOnHover",
    link: "https://marketplace.visualstudio.com/items?itemName=theIllustrator.svgPreviewOnHover",
    helperText:
      "SVG Preview on Hover is a VSCode extension that renders live previews of inline SVG code on hover. It supports JSX syntax, ensures safe rendering, and enhances developer productivity with instant visual feedback.",
    toolsUsed: [{ component: Javascript }, { component: VScode }],
  },
];

const PortfolioSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: styleTemplate.color.black,
        py: 5,
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          width: { sm: "90%", md: "70%" },
          gap: 5,
          p: isSmallScreen ? 4 : 0,
        }}
      >
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
        <Stack sx={{ gap: { sm: 3, md: 8 } }}>
          {projects?.map((project, index) =>
            isSmallScreen ? (
              <MobileProjectListItem project={project} index={index} />
            ) : (
              <DesktopProjectListItem project={project} index={index} />
            )
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PortfolioSection;
