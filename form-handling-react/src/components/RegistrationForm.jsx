import { useState } from "react";

const RegistrationForm = () => {
  // Initialize the form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Initialize the errors state
  const [errors, setErrors] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate form data before submitting
  const validateForm = () => {
    if (!username || !email || !password) {  // Check for empty fields in the required format
      setErrors("All fields are required.");
      return false;
    }
    setErrors("");  // Clear errors if validation passes
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted:", formData);
      alert("User registered successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {errors && <p style={{ color: "red" }}>{errors}</p>}
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}  // Correct value binding
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}  // Correct value binding
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}  // Correct value binding
          onChange={handleChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
