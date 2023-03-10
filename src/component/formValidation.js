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
  
  export default validate;
  