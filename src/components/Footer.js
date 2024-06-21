import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box className="footer">
      <Typography component="p">
        Copyright <span>&copy;</span> 2024.All rights are reserved.
      </Typography>
      <Box className="info">
        <img alt="github" src={require("../ASSETS/icon/github_png.png")} />
        <img alt="linkedin" src={require("../ASSETS/icon/linkedin_png.png")} />
      </Box>
    </Box>
  );
}
