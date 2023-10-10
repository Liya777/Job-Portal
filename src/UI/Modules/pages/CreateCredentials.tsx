import { Box, Button, Grid, Input, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import palette from "../Utils/theme/palette";
import LockPersonIcon from "@mui/icons-material/LockPerson";

const CreateCredentials = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      sx={{ height: "75%", alignItems: "center", justifyContent: "center" }}
    >
      <Grid item lg={6}>
        <img src={require(`../../Assets/credentials.avif`)} alt="credentials" />
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
            pb: 0,
          }}
        >
          <Typography
            sx={{
              color: palette.palette.primary.main,
              fontSize: 36,
              fontWeight: 500,
            }}
          >
            CREATE CREDENTIALS
          </Typography>
          <TextField
            label="Username"
            variant="standard"
            sx={{ width: "100%", my: 5 }}
            required
          />
          <TextField
            label="Password"
            variant="standard"
            sx={{ width: "100%" }}
            required
          />
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
            Create
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CreateCredentials;
