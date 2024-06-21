import { Box, Button, Container, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import Landing from "./Landing";
import "./style.css";
import "./components/project.css";
import "./components/footer.css";
import Project from "./components/Project";
import project1 from "./ASSETS/imgs/project1.png";
import project2 from "./ASSETS/imgs/project2.png";
import project3 from "./ASSETS/imgs/project3.png";
import Contact from "./Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box sx={{ width: "70% !important", margin: "0 auto" }}>
        <Box sx={{ mt: 10, mb: 2 }}>
          <Landing />
          <Box className="portfolio">
            <Typography component="h6" variant="h6">
              Portfolio
            </Typography>
            <Typography component="p" variant="p">
              I would like to present my portfolio for your consideration.
            </Typography>
          </Box>
        </Box>
        <Project
          image={project1}
          project_title={"Erick Coffee"}
          project_info="The website features a modern and sleek design, showcasing Erick
          Coffee's products and brand story."
        />
        <Project
          image={project2}
          project_title={"Chicken"}
          project_info="I designed a website for the restaurant Chicken, featuring an elegant and user-friendly interface to showcase their menu offerings and services."
          direction="right"
        />
        <Project
          image={project3}
          project_title={"Elevate"}
          project_info="I crafted a website for Elevate Airlines that prioritizes both sophistication and ease of use. This user-friendly interface will seamlessly showcase our flight destinations, services, and booking options."
        />
        <Box sx={{ width: "100%", position: "relative" }}>
          <Button variant="outlined" className="more-btn">
            See More
          </Button>
        </Box>
        <Contact />
      </Box>
      <Footer />
    </div>
  );
}

export default App;
