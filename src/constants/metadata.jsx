import Javascript from "../Components/SkillsAndTools/Javascript";
import Swift from "../Components/SkillsAndTools/Swift";
import SwiftUI from "../Components/SkillsAndTools/SwiftUI";
import VScode from "../Components/SkillsAndTools/VSCode";
import Xcode from "../Components/SkillsAndTools/XCode";
import DownloadOnTheAppStoreBanner from "../images/DownloadIsometria";
// DUMMY COMMIT

export const experiences = [
  {
    title: "Member Technical Staff 3",
    company_name: "Tessell",
    date: "March 2025 - Present",
    mobileText: "Recently Promoted",
    details: [
      {
        heading: "Recently Promoted",
        supportText:
          "Elevated to a higher role at Tessell, driving innovation in frontend development, performance optimization, and seamless user experiences.",
      },
    ],
  },
  {
    title: "Member Technical Staff",
    company_name: "Tessell",
    date: "June 2023 - March 2025",
    mobileText:
      "Building scalable frontend solutions at Tessell, enhancing UX, optimizing performance, and developing internal tools for data visualization and operations.",
    details: [
      {
        heading: "Frontend Development",
        supportText:
          "Built and optimized customer-facing and internal web applications using React, TypeScript, and MUI.",
      },
      {
        heading: "Data Visualization & Operations Tools",
        supportText:
          "Developed dashboards, cost analysis tools, and IAM features for internal SRE teams.",
      },
      {
        heading: "Reusable Components & Performance Enhancements",
        supportText:
          "Created reusable hooks, revamped forms with validations, enhanced user experience, and improved system reliability.",
      },
    ],
  },
  {
    title: "Website Developer Intern",
    company_name: "Tessell",
    date: "Jan 2023 - May 2023",
    mobileText:
      "Developed web applications, dashboards, and reusable components at Tessell, improving UX and internal tooling efficiency.",
    details: [
      {
        heading: "Website Development",
        supportText:
          "Built a cost calculator that dynamically computed service costs based on multiple parameters, improving accuracy and efficiency",
      },
      {
        heading: "Reusable Components & Code Optimization",
        supportText:
          "Developed common hooks and reusable components to streamline development and reduce redundancy across the application.",
      },
      {
        heading: "Website & Internal Tools Enhancement",
        supportText:
          "Assisted in improving the company's website and internal tools by implementing new features, fixing bugs, and enhancing user experience.",
      },
    ],
  },
];

export const projects = [
  {
    name: "Isometria",
    platform: ["iPhone", "iPad", "Mac"],
    link: "https://theillustrator1972.github.io/isometria/",
    image: "isometria",
    appStoreBanner: DownloadOnTheAppStoreBanner,
    helperText:
      "Isometria is a SwiftUI-based isometric grid art app for iPad and macOS. It offers customizable grids, color tools, and intuitive drawing features, including zoom, undo/redo, and export options.",
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
