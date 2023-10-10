import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import palette from "../Utils/theme/palette";
import { JobCard } from "../../components";
import Breakpoint from "../Utils/theme/breakpoint";
import { Box, Grid } from "@mui/material";
import SubHeading from "../../components/SubHeading";
import TestimonialCard from "../../components/TestimonialCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ------------------------- cover ------------------------- */}
      <video id="background-video" loop autoPlay muted width="100%">
        <source src={require("../../Assets/handshake.mp4")} />
      </video>
      <Box sx={{ width: "100vh" }}>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: 145,
            fontWeight: 900,
            color: palette.palette.common.white,
            width: "40%",
            [Breakpoint.breakpoints.down("xl")]: {
              width: "45%",
              fontSize: 100,
            },
          }}
        >
          FIND THE PERFECT
          <span style={{ color: palette.palette.secondary.main }}> JOB</span>
        </Typography>
      </Box>
      {/* ------------------------- cover ------------------------- */}
      <Box
        sx={{
          mx: "300px",
          [Breakpoint.breakpoints.down("xl")]: { mx: "100px" },
        }}
      >
        {/* ------------------------- sign up  ------------------------- */}
        <SubHeading text="SIGN UP" subText="JOB" style={{ mt: "140px" }} />

        <Typography sx={{ textAlign: "center", mb: 7 }}>
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud dolore magna magna
          aliqua. Ut enim ad minim
        </Typography>
        <Grid container sx={{ justifyContent: "space-evenly" }}>
          <Grid item>
            <Button
              onClick={() => navigate("/signup-employer/personal-details")}
              variant="contained"
              sx={{
                alignItems: "center",
                backgroundColor: palette.palette.secondary.main,
                ":hover": {
                  backgroundColor: palette.palette.primary.main,
                },
              }}
            >
              SIGN UP AS EMPLOYER
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => navigate("/signup-employee/personal-details")}
              variant="contained"
              sx={{
                alignItems: "center",
                backgroundColor: palette.palette.secondary.main,
                ":hover": {
                  backgroundColor: palette.palette.primary.main,
                },
              }}
            >
              SIGN UP AS EMPLOYEE
            </Button>
          </Grid>
        </Grid>
        {/* ------------------------- sign up  ------------------------- */}
        {/* ------------------------- featured job ------------------------- */}
        <SubHeading text="featured" subText="JOB" style={{ mt: "140px" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: "50px",
          }}
        >
          <JobCard
            imgPath="driver.jfif"
            description="Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu m dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            jobTitle="driver"
          />
          <JobCard
            imgPath="electrician.jfif"
            description="Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu m dolore eu fugiat 
          nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu m dolore eu fugiat 
          nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu m dolore eu fugiat 
          nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu m dolore eu fugiat 
          nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu m dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            jobTitle="electrician"
          />
          <JobCard
            imgPath="teacher.jfif"
            description="Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu m dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            jobTitle="teacher"
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              alignItems: "center",
              backgroundColor: palette.palette.secondary.main,
              ":hover": {
                backgroundColor: palette.palette.primary.main,
              },
            }}
          >
            VIEW JOBS
          </Button>
        </Box>
        {/* ------------------------- featured job ------------------------- */}
        {/* ------------------------- read about us ------------------------- */}
        <SubHeading text="read about" subText="us" style={{ mt: "140px" }} />
        <Typography sx={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillu m dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillu m dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillu m dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillu m
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Typography>
        {/* ------------------------- read about us ------------------------- */}
        {/* ------------------------- send message ------------------------- */}
        <SubHeading
          text="SEND US A"
          subText="message"
          style={{ mt: "140px" }}
        />
        <Box sx={{ my: "50px" }}>
          <Typography sx={{ textAlign: "center" }}>
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud dolore magna saliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              alignItems: "center",
              backgroundColor: palette.palette.secondary.main,
              ":hover": {
                backgroundColor: palette.palette.primary.main,
              },
            }}
          >
            contact us
          </Button>
        </Box>
        {/* ------------------------- send message ------------------------- */}
        {/* ------------------------- testimonials ------------------------- */}
        <SubHeading
          text="read our"
          subText="testimonials"
          style={{ mt: "140px" }}
        />
        <Box sx={{ my: "50px" }}>
          <Typography sx={{ textAlign: "center", mb: 7 }}>
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud dolore magna
            magna aliqua. Ut enim ad minim veniam, quis nostrud dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud dolore magna aliqua. Ut enim
            ad msinim veniam, quis nostrud
          </Typography>
          <Grid
            container
            sx={{ justifyContent: "space-between" }}
            rowSpacing={5}
          >
            <Grid item>
              <TestimonialCard />
            </Grid>
            <Grid item>
              <TestimonialCard />
            </Grid>
            <Grid item>
              <TestimonialCard />
            </Grid>
            <Grid item>
              <TestimonialCard />
            </Grid>
          </Grid>
        </Box>
        {/* ------------------------- testimonials ------------------------- */}
      </Box>
    </>
  );
};

export default Home;
