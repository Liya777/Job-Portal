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
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { PersonalDetailsFormType } from "../Utils/types/common";
import { useEffect, useState } from "react";

const PersonalDetailsForm = () => {
  const defaultFormValues: PersonalDetailsFormType = {
    Name: null,
    Age: null,
    DOB: null,
    Gender: null,
    Nationality: null,
    EmailAddress: null,
    ContactNumber: null,
    TotalYearOfExperience: null,
    LinkedInProfile: null,
    EducationalQualification: null,
    CurrentlyWorking: null,
    CertificationsIfAny: null,
  };

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<PersonalDetailsFormType>({
    mode: "all",
    defaultValues: defaultFormValues,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const urlPath = location.pathname;
  const menu = urlPath?.split("/")[1];

  const [, setFormResponse] = useState(defaultFormValues);

  const navigation = () => {
    if (menu === "signup-employer") {
      navigate("/signup-employer/company-details");
    } else navigate("/signup-employee/company-details");
  };

  const onSubmit: SubmitHandler<PersonalDetailsFormType> = async (response) => {
    console.log("liya-response", response);
    const formResponse = {
      Name: response.Name,
      Age: response.Age,
      DOB: response.DOB,
      Gender: response.Gender,
      Nationality: response.Nationality,
      EmailAddress: response.EmailAddress,
      ContactNumber: response.ContactNumber,
      TotalYearOfExperience: response.TotalYearOfExperience,
      LinkedInProfile: response.LinkedInProfile,
      EducationalQualification: response.EducationalQualification,
      CurrentlyWorking: response.CurrentlyWorking,
      CertificationsIfAny: response.CertificationsIfAny,
    };
    setFormResponse(formResponse);
  };

  // useEffect(() => {
  //   console.log("liya-isDirty", isDirty);
  // }, [isDirty]);

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
            <Controller
              name="Name"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Name"
                  variant="standard"
                  required
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          <Grid item lg={4}>
            <Controller
              name="Age"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Age"
                  variant="standard"
                  required
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          <Grid item lg={4}>
            <Controller
              name="DOB"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Date of Birth"
                  variant="standard"
                  required
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          <Grid item lg={4}>
            <FormControl variant="standard" sx={{ width: "70%" }} required>
              <InputLabel>Gender</InputLabel>
              <Controller
                name="Gender"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <Select label="Age" value={value} onChange={onChange}>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item lg={4}>
            <Controller
              name="Nationality"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Nationality"
                  variant="standard"
                  required
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          <Grid item lg={4}>
            <Controller
              name="EmailAddress"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Email Address"
                  variant="standard"
                  required
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          <Grid item lg={4}>
            <Controller
              name="ContactNumber"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Contact Number"
                  variant="standard"
                  required
                  value={value as number}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          <Grid item lg={4}>
            <Controller
              name="TotalYearOfExperience"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Total year of experience"
                  variant="standard"
                  required
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          <Grid item lg={4}>
            <Controller
              name="LinkedInProfile"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="LinkedIn Profile"
                  variant="standard"
                  required
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          <Grid item lg={4}>
            <FormControl variant="standard" sx={{ width: "70%" }} required>
              <InputLabel>Educational Qualification</InputLabel>
              <Controller
                name="EducationalQualification"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <Select value={value} onChange={onChange}>
                    <MenuItem value="LowerPrimary">Lower primary</MenuItem>
                    <MenuItem value="UpperPrimary">Upper primary</MenuItem>
                    <MenuItem value="HighSchool">High school</MenuItem>
                    <MenuItem value="HigherSecondary">
                      Higher secondary
                    </MenuItem>
                    <MenuItem value="UndergraduateLevel">
                      Undergraduate level
                    </MenuItem>
                    <MenuItem value="PostgraduateLevel">
                      Postgraduate level
                    </MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item lg={4}>
            <FormControl variant="standard" sx={{ width: "70%" }} required>
              <InputLabel>Currently working</InputLabel>
              <Controller
                name="CurrentlyWorking"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <Select value={value} onChange={onChange}>
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item lg={4}>
            <Controller
              name="CertificationsIfAny"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Certifications if any"
                  variant="standard"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "end", p: 5 }}>
        <Button
          disabled={!isDirty || !isValid}
          onClick={() => handleSubmit(onSubmit)}
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
