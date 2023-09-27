import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import palette from "../Utils/theme/palette";
import { JobCard } from "../../components";
import Breakpoint from "../Utils/theme/breakpoint";
import { Box, Grid } from "@mui/material";
import SubHeading from "../../components/SubHeading";
import TestimonialCard from "../../components/TestimonialCard";

const Home = () => {
  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        sx={{
          backgroundColor: palette.palette.primary.main,
          position: "sticky",
          zIndex: 1,
        }}
      >
        <Toolbar sx={{ color: "white" }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            JOB PORTAL
          </Typography>
          <Button sx={{ color: palette.palette.common.white }}>Home</Button>
          <Button sx={{ color: palette.palette.common.white }}>Job</Button>
          <Button sx={{ color: palette.palette.common.white }}>About</Button>
          <Button sx={{ color: palette.palette.common.white }}>Contacts</Button>
        </Toolbar>
      </AppBar>
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
            fontSize: 100,
            fontWeight: 900,
            color: palette.palette.common.white,
            width: "30%",
            [Breakpoint.breakpoints.down("xl")]: { width: "45%" },
          }}
        >
          FIND THE PERFECT
          <span style={{ color: palette.palette.secondary.main }}> JOB</span>
        </Typography>
      </Box>
      <SubHeading text="featured" subText="JOB" style={{ mt: "140px" }} />
      <Box
        sx={{
          mx: "300px",
          [Breakpoint.breakpoints.down("xl")]: { mx: "100px" },
        }}
      >
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
            }}
          >
            VIEW JOBS
          </Button>
        </Box>
        <SubHeading text="read about" subText="us" style={{ mt: "140px" }} />
        <Box
          sx={{
            my: "50px",
            width: "100%",
            // backgroundImage: require(`../../../Assets/teacher.jfif`),
            background: "url(/src/UI/Assets/teacher.jfif)",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillu m dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillu m dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillu m dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillu m dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
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
            aliquip ex ea commodo ṣ
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              alignItems: "center",
              backgroundColor: palette.palette.secondary.main,
            }}
          >
            contact us
          </Button>
        </Box>
        <SubHeading
          text="read our"
          subText="testimonials"
          style={{ mt: "140px" }}
        />
        <Box sx={{ my: "50px" }}>
          <Typography sx={{ textAlign: "center" }}>
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud dolore magna
            magna aliqua. Ut enim ad minim veniam, quis nostrud dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud dolore magna aliqua. Ut enim
            ad msinim veniam, quis nostrud
          </Typography>
          <Grid container>
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
      </Box>
    </>
  );
};

export default Home;
