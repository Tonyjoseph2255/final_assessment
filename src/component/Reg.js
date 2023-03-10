import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";

function Reg() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = (values) => {
    let errors = {};

    // Check if all fields are filled
    if (!values.fname) {
      errors.fname = "First name is required";
    }

    if (!values.lname) {
      errors.lname = "Last name is required";
    }

    if (!values.age) {
      errors.age = "Age is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    }

    if (!values.phone) {
      errors.phone = "Phone number is required";
    }
    if (!values.gender) {
      errors.gender = "Please select your gender";
    }
   

    // Custom validation for phone number
    const phoneRegex = /^\d{10}$/;
    if (values.phone && !phoneRegex.test(values.phone)) {
      errors.phone = "Invalid phone number";
    }

    // Custom validation for email
    const emailRegex = /\S+@\S+\.\S+/;
    if (values.email && !emailRegex.test(values.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    // Create an object to hold form values
    const values = {
      fname: form.elements.fname.value,
      lname: form.elements.lname.value,
      age: form.elements.age.value,
      email: form.elements.email.value,
      phone: form.elements.phone.value,
      gender: form.elements.gender.value,
      language: [
        form.elements["language[]"][0].checked,
        form.elements["language[]"][1].checked,
        form.elements["language[]"][2].checked,
      ],
    };

    // Call the validation function
    const errors = validate(values);

    // If the form is valid, navigate to login page
    if (Object.keys(errors).length === 0) {
      navigate("/password");
    } else {
      // Set the errors state variable to display error messages
      setErrors(errors);
    }
  };

  return (
    <body>
      <div class="main">
        <div class="register">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "400px", mt: "50px" }}>
              <form onSubmit={handleSubmit}>
                <h1>Register here</h1>
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  label="First Name"
                  name="fname"
                  autoFocus
                  error={!!errors.fname}
                  helperText={errors.fname}
                />
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  label="Last Name"
                  name="lname"
                  error={!!errors.lname}
                  helperText={errors.lname}
                />
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  label="Age"
                  name="age"
                  type="number"
                  error={!!errors.age}
                  helperText={errors.age}
                />
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  label="Email Address"
                  name="email"
                  type="email"
                  error={!!errors.email}
                  helperText={errors.email}
                />
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  error={!!errors.phone}
                  helperText={errors.phone}
                />
                <Box mt={2}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender"
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </Box>
                <Box mt={2}>
                  <FormLabel component="legend">Language</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="English"
                      name="language[]"
                      value="english"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Spanish"
                      name="language[]"
                      value="spanish"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="French"
                      name="language[]"
                      value="french"
                    />
                  </FormGroup>
                </Box>
                <Box mt={2}>
                  <Stack direction="row" spacing={2}>
                    <Button variant="contained" type="submit">
                      Register
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => navigate("/password")}
                    >
                      Login
                    </Button>
                  </Stack>
                </Box>
              </form>
            </Box>
          </Box>
        </div>
      </div>
    </body>
  );
}
export default Reg;
