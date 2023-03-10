import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function PasswordForm() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (password === confirmPassword &&password.length >= 8 && /\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {
      alert('Passwords match!');
    } else {
      alert('Passwords do not match or Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <TextField
        id="username"
        label="Username"
        type="username"
        
        
      /><br/>
      <TextField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      /><br/>
      <TextField
        id="confirm-password"
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      /><br/>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default PasswordForm;