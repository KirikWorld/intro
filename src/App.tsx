import { Box, Grid } from "@mui/material";
import projects from "./projects.ts";
import { Project } from "./Project.tsx";

function App() {
  return (
    <Box sx={{ width: "100%", height: "100%", p: 2 }}>
      <Grid
        container
        sx={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2
        }}
      >
        {projects.map((project) => (
          <Grid item key={project.title}>
            <Project project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default App;
