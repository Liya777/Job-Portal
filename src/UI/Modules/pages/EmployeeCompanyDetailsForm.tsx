import { Button, Grid, TextField } from "@mui/material";
import SubHeading from "../../components/SubHeading";
import palette from "../Utils/theme/palette";
import { useNavigate } from "react-router-dom";

const EmployeeCompanyDetailsForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid container>
        <Grid item lg={5}>
          <img src={require(`../../Assets/bg3.avif`)} alt="login" />
        </Grid>
        <Grid item container lg={7}>
          <Grid item lg={12}>
            <SubHeading text="COMPANY" subText="DETAILS" style={{ mt: 5 }} />
          </Grid>
          <Grid item lg={4}>
            <TextField label="Name" variant="standard" required />
          </Grid>
          <Grid item lg={4}>
            <TextField label="Position" variant="standard" required />
          </Grid>
          <Grid item lg={4}>
            <TextField label="From" variant="standard" required />
          </Grid>
          <Grid item lg={4}>
            <TextField label="To" variant="standard" required />
          </Grid>
          <Grid item lg={4}>
            <TextField label="Description" variant="standard" required />
          </Grid>
          <Grid item lg={4}>
            <TextField label="Current CTC" variant="standard" required />
          </Grid>
          <Grid item lg={4}>
            <TextField label="Expected CTC" variant="standard" required />
          </Grid>
          <Grid item lg={4}>
            <TextField label="LinkedIn Profile" variant="standard" required />
          </Grid>
          <Grid item lg={4}>
            <TextField label="Location" variant="standard" required />
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "end", p: 5 }}>
        <Button
          onClick={() => navigate("/signup-employer/create-credential")}
          variant="contained"
          sx={{
            alignItems: "center",
            backgroundColor: palette.palette.secondary.main,
            ":hover": {
              backgroundColor: palette.palette.primary.main,
            },
          }}
        >
          NEXT {">>"}
        </Button>
      </Grid>
    </>
  );
};

export default EmployeeCompanyDetailsForm;
