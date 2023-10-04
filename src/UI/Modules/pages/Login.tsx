import { Box, Button, Input, Typography } from "@mui/material";
import palette from "../Utils/theme/palette";
import LockPersonIcon from "@mui/icons-material/LockPerson";

const Login = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        alignItems: "center",
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
          height: 450,
          width: 500,
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
          Sign in
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
          Sign in
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
          Don't have an account? Sign Up
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
