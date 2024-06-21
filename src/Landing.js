import { Box, Typography, duration } from "@mui/material";
import { motion } from "framer-motion";
import Icons from "./components/Icons";
import tailwindIcon from "./ASSETS/icon/tailwind.png";
import htmlIcon from "./ASSETS/icon/html.png";
import cssIcon from "./ASSETS/icon/css.png";
import jsIcon from "./ASSETS/icon/js.png";
import reactIcon from "./ASSETS/icon/react.png";
import sassIcon from "./ASSETS/icon/sass.png";
import { useState } from "react";

export default function Landing() {
  // const anim_text = {
  //   initial: { backgroundPosition: "200% 0", color: "black" },
  //   animate: { backgroundPosition: "0 0", color: "transparent" },
  //   transition: {
  //     duration: 3, // مدة الأنيميشن
  //     ease: "easeInOut",
  //     repeat: Infinity,
  //     repeatType: "reverse",
  //   },
  // };
  const [hover, sethover] = useState(false);
  window.addEventListener("scroll", (event) => {
    let scrollY = window.scrollY;
    console.log(scrollY);
    if (scrollY >= 60) sethover(true);
  });

  function handleHover() {
    sethover(true);
  }
  console.log(hover);
  return (
    <Box className="landing-box">
      <Box className="landing">
        {/* <Typography
          component="h2"
          variant="h2"
          mt={4}
          sx={{ letterSpacing: "7px" }}
          // initial={{
          //   back: "rgb(212,29,29)",
          //   background:
          //     "linear-gradient(45deg, rgba(212,29,29,1) 20%, rgba(29,70,212,1) 83%)",
          //
        >
          Front-End React Developer
        </Typography> */}
        <motion.div
          initial={{
            backgroundPosition: "-200% 0",
            color: "transparent",
          }}
          animate={{ backgroundPosition: "0 0", color: "black" }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            display: "inline-block",
            background:
              "linear-gradient(45deg, rgba(212,29,29,1) 20%, rgba(29,70,212,1) 83%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          <Typography
            component="h2"
            variant="h2"
            mt={4}
            sx={{ letterSpacing: "7px", color: "inherit" }}
          >
            Front-End React Developer
          </Typography>
        </motion.div>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            alt="logo"
            className="logo-img"
            src={require("./ASSETS/imgs/503536832.png")}
          />
        </motion.div>
      </Box>
      <Typography component="p" variant="p" className="my-info">
        Hi, I am Osama Rawas, a passionate Front-End Developer from Syria
      </Typography>
      <Box sx={{ display: "flex", gap: "15px", mt: 6 }}>
        <img alt="github" src={require("./ASSETS/icon/github.png")} />
        <img alt="linkedin" src={require("./ASSETS/icon/linkedin.png")} />
      </Box>

      <Box
        sx={{
          mt: 8,
        }}
        className="tech"
      >
        <motion.div whileHover={handleHover}>
          <Typography component="h6" variant="h6">
            Tech stack
            <span
              style={{
                marginLeft: "10px",
                letterSpacing: "-1px",
                lineHeight: "70px",
              }}
            >
              |
            </span>
          </Typography>
        </motion.div>
        <Box className="tech-icons">
          <Icons
            width={"123px"}
            height={hover ? "75px" : "70px"}
            x={0}
            y={hover ? 0 : -600}
            imgSource={tailwindIcon}
          />
          <Icons
            width={hover ? "90px" : "85px"}
            height={hover ? "75px" : "79px"}
            x={hover ? 0 : -420}
            y={hover ? 0 : -470}
            imgSource={htmlIcon}
            rotate={hover ? 0 : -39}
          />
          <Icons
            width={hover ? "90px" : "109px"}
            height={hover ? "75px" : "102px"}
            x={hover ? 0 : -530}
            y={hover ? 0 : -370}
            imgSource={cssIcon}
            rotate={hover ? 0 : -164}
          />
          <Icons
            width={hover ? "90px" : "93px"}
            height={hover ? "75px" : "50px"}
            x={hover ? 0 : -60}
            y={hover ? 0 : -620}
            imgSource={jsIcon}
          />
          <Icons
            width={hover ? "90px" : "91px"}
            height={hover ? "75px" : "76px"}
            x={hover ? 0 : 430}
            y={hover ? 0 : -600}
            imgSource={reactIcon}
            rotate={hover ? 0 : 60}
          />
          <Icons
            width={hover ? "90px" : "82px"}
            height={hover ? "75px" : "63px"}
            x={hover ? 0 : 470}
            y={hover ? 0 : -450}
            imgSource={sassIcon}
            rotate={hover ? 0 : -49}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <img alt="img" src={require("./ASSETS/imgs/0_UnaZKWRx_J94eTVw1.png")} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography component="h6" variant="h6" ml={4} className="about-me">
            About me
          </Typography>
          <Typography
            component="p"
            variant="p"
            ml={4}
            className="content-about-me"
          >
            Hello, I'm Osama, a Frontend Developer who is dedicated to crafting
            sleek UI/UX experiences for users. Currently, I primarily work with
            React/Next.js, Tailwind CSS, and TypeScript in my projects.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
