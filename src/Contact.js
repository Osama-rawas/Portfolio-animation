import { Box, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box className="contact">
      <Typography component="h6" variant="h6">
        Contact
      </Typography>
      <Typography component="p" variant="p">
        Don’t hesitate to call me
      </Typography>
      <Box className="info-contact">
        <Box className="contact-me">
          <img src={require("./ASSETS/icon/call.png")} alt="call" />
          <Box>
            <Typography component="p" variant="p">
              Phone Number
            </Typography>
            <Typography component="p" variant="p" className="social">
              +963 931 807 056
            </Typography>
          </Box>
        </Box>
        <Box className="contact-me">
          <img src={require("./ASSETS/icon/email.png")} alt="call" />
          <Box>
            <Typography component="p" variant="p">
              Email
            </Typography>
            <Typography component="p" variant="p" className="social">
              osama.rawas16@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
