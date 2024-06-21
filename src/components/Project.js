import { Box, Typography } from "@mui/material";

export default function Project(props) {
  return (
    <Box
      className="project"
      sx={{
        flexDirection: props.direction === "right" ? "row-reverse" : "row",
      }}
    >
      <img alt="project1" src={props.image} style={{ marginLeft: "-20px" }} />
      <Box className="about-project">
        <Typography component="h6" variant="h6">
          {props.project_title}
        </Typography>
        <Typography component="p" variant="p">
          {props.project_info}
        </Typography>
        <Box className="teq-project">
          <Typography component="p" variant="p">
            React
          </Typography>
          <Typography component="p" variant="p">
            SCSS
          </Typography>
        </Box>
        <Box className="coding">
          <Box className="review">
            <Typography component="p" variant="p">
              Code
            </Typography>
            <img alt="review" src={require("../ASSETS/icon/github.png")} />
          </Box>
          <Box className="review">
            <Typography component="p" variant="p">
              Live Demo
            </Typography>
            <img alt="review" src={require("../ASSETS/icon/live.png")} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
