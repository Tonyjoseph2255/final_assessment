import React, { useState } from "react";
import validation from "./Validation";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";
export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    password: "",
  })
  const [errors, setError] = useState({})
  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    //e.preventDefault();
    let validationResponse = validation(values);
    setError(validationResponse);
    if (Object.keys(validationResponse).length === 0) {
      navigate("/dashboard");
    }
  }
  return (
    <div className="full-screen-container">
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Box sx={{ width: 400 }}>
        <Typography variant="h4" align="center" mb={2}>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={Boolean(errors.name)}
            helperText={errors.name}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" color="primary" type="submit">
                {/* onClick={()=>handleSubmit()} */}
              Login
            </Button>


          </Box>
          <Link to="/registration"> Click here to Enter the Registration page </Link>
        </form>
      </Box>
    </Box>
    </div>
  );
}
