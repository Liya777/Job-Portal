import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import palette from "../Utils/theme/palette";
import LockPersonIcon from "@mui/icons-material/LockPerson";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item lg={6}>
        <img
          src={require(`../../Assets/login.webp`)}
          alt="signup"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid
        item
        lg={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: palette.palette.primary.main,
            borderRadius: "50%",
            height: 50,
            width: 50,
          }}
        >
          <LockPersonIcon sx={{ color: palette.palette.secondary.main }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            border: "2px solid",
            borderColor: palette.palette.primary.main,
            borderRadius: 4,
            width: 450,
            m: 2,
            p: 4,
          }}
        >
          <Typography
            sx={{
              color: palette.palette.primary.main,
              fontSize: 36,
              fontWeight: 500,
            }}
          >
            SIGN UP
          </Typography>
          <Grid container sx={{ justifyContent: "space-evenly", my: 10 }}>
            <Grid item>
              <Button
                onClick={() => navigate("/signup-employer/personal-details")}
                variant="contained"
                sx={{
                  alignItems: "center",
                  backgroundColor: palette.palette.primary.main,
                  ":hover": {
                    backgroundColor: palette.palette.secondary.main,
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
                  backgroundColor: palette.palette.primary.main,
                  ":hover": {
                    backgroundColor: palette.palette.secondary.main,
                  },
                }}
              >
                SIGN UP AS EMPLOYEE
              </Button>
            </Grid>
          </Grid>{" "}
          <Typography
            sx={{
              color: palette.palette.primary.main,
              fontSize: 20,
            }}
          >
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              style={{
                color: palette.palette.primary.main,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Log In
            </span>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
