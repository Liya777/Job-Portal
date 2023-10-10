import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import palette from "../Utils/theme/palette";

const AppLayout = () => {
  const navigate = useNavigate();

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
          <IconButton onClick={() => navigate("/home")}>
            <PersonSearchIcon
              sx={{ fontSize: 50, color: palette.palette.secondary.main }}
            />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            JOB PORTAL
          </Typography>
          <Button
            sx={{ color: palette.palette.common.white }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
          <Button
            sx={{ color: palette.palette.common.white }}
            onClick={() => navigate("/login")}
          >
            Log in
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};
export default AppLayout;
