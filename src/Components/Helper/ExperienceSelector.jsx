import { Stack, Typography } from "@mui/material";

const classes = {
  container: { gap: 1, cursor: "pointer", pl: 4 },
  title: {
    fontSize: { sm: "16px", md: "20px", lg: "24px" },
    fontWeight: 600,
    fontFamily: "Montserrat",
  },
  companyAndDate: {
    fontSize: "16px",
    fontWeight: 400,
    fontFamily: "Montserrat",
  },
};

const ExperienceSelector = ({ experience, isActive, setActive }) => (
  <Stack
    sx={{
      ...classes.container,
      borderLeft: isActive ? "10px solid #475569" : "none",
    }}
    onClick={() => setActive(experience)}
  >
    <Typography
      sx={{
        ...classes.title,
        color: isActive ? "#1689C8" : "#475569",
      }}
    >
      {experience?.title}
    </Typography>
    <Stack direction="row" gap={1}>
      <Typography
        sx={{
          ...classes.companyAndDate,
          color: isActive ? "white" : "#475569",
        }}
      >
        {experience?.company_name}
      </Typography>
      <Stack
        sx={{
          height: "100%",
          width: "4px",
          backgroundColor: isActive ? "white" : "#222",
        }}
      />
      <Typography
        sx={{
          ...classes.companyAndDate,
          color: isActive ? "white" : "#475569",
        }}
      >
        {experience?.date}
      </Typography>
    </Stack>
  </Stack>
);

export default ExperienceSelector;
