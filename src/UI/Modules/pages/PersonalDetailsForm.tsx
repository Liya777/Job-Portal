import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SubHeading from "../../components/SubHeading";
import palette from "../Utils/theme/palette";
import { useLocation, useNavigate } from "react-router-dom";

const PersonalDetailsForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const urlPath = location.pathname;
  const menu = urlPath?.split("/")[1];

  const navigation = () => {
    if (menu === "signup-employer") {
      navigate("/signup-employer/company-details");
    } else navigate("/signup-employee/company-details");
  };

  return (
    <>
      <Grid container>
        <Grid item lg={5}>
          <img src={require(`../../Assets/bg3.avif`)} alt="login" />
        </Grid>
        <Grid item container lg={7}>
          <Grid item lg={12}>
            <SubHeading text="PERSONAL" subText="DETAILS" style={{ mt: 5 }} />
          </Grid>
          <Grid item lg={4}>
            <TextField label="Name" variant="standard" required />
          </Grid>
          <Grid item lg={4}>
            <TextField label="Age" variant="standard" required />
          </Grid>
          <Grid item lg={4}>
            <TextField label="Date of Birth" variant="standard" required />
          </Grid>
          <Grid item lg={4}>
            <FormControl variant="standard" sx={{ width: "70%" }} required>
              <InputLabel>Gender</InputLabel>
              <Select label="Age">
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Others</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={4}>
            <TextField label="Nationality" variant="standard" required />
          </Grid>
          <Grid item lg={4}>
            <TextField label="Email Address" variant="standard" required />
          </Grid>
          <Grid item lg={4}>
            <TextField label="Contact Number" variant="standard" required />
          </Grid>
          <Grid item lg={4}>
            <TextField
              label="Total year of experience"
              variant="standard"
              required
            />
          </Grid>
          <Grid item lg={4}>
            <TextField label="LinkedIn Profile" variant="standard" required />
          </Grid>
          <Grid item lg={4}>
            <FormControl variant="standard" sx={{ width: "70%" }} required>
              <InputLabel>Educational Qualification</InputLabel>
              <Select>
                <MenuItem value={10}>Lower primary</MenuItem>
                <MenuItem value={20}>Upper primary</MenuItem>
                <MenuItem value={20}>High school</MenuItem>
                <MenuItem value={20}>Higher secondary</MenuItem>
                <MenuItem value={20}>Undergraduate level</MenuItem>
                <MenuItem value={20}>Postgraduate level</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={4}>
            <FormControl variant="standard" sx={{ width: "70%" }} required>
              <InputLabel>Currently working</InputLabel>
              <Select>
                <MenuItem value={10}>Yes</MenuItem>
                <MenuItem value={20}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={4}>
            <TextField
              label="Certifications if any"
              variant="standard"
              required
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "end", p: 5 }}>
        <Button
          onClick={() => navigation()}
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

export default PersonalDetailsForm;
