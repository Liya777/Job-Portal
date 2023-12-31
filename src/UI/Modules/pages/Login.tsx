import { Box, Button, Grid, Input, Link, Typography } from "@mui/material";
import palette from "../Utils/theme/palette";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item lg={6}>
        <img
          src={require(`../../Assets/login.webp`)}
          alt="login"
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
            height: 400,
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
            LOG IN
          </Typography>
          <Input
            placeholder="Username"
            sx={{
              width: "100%",
              my: 5,
            }}
          />
          <Input placeholder="Password" sx={{ width: "100%" }} />
          <Button
            variant="contained"
            size="large"
            sx={{
              alignItems: "center",
              backgroundColor: palette.palette.primary.main,
              width: "100%",
              my: 7,
              ":hover": {
                backgroundColor: palette.palette.secondary.main,
              },
            }}
          >
            Log In
          </Button>
          <Typography
            sx={{
              color: palette.palette.primary.main,
              fontSize: 20,
            }}
          >
            Forgot Password
          </Typography>
          <Typography
            sx={{
              color: palette.palette.primary.main,
              fontSize: 20,
            }}
          >
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              style={{
                color: palette.palette.primary.main,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Sign Up
            </span>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
