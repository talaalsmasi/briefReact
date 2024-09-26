import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ContactV2 from "./ContactV2"; // Import ContactV2 component
import FoodMenuV4 from '@/components/food/FoodMenuV4';


const ContactV1 = () => {
  // State for signup data
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State for success message
  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false); // State to track success

  // Handle form input changes for signup
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  // Submit signup form
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData),
      });
      const data = await response.json();
      if (response.ok) {
        // Set success message and toggle success state
        setSuccessMessage("Account created successfully! Welcome!");
        setIsSuccess(true);
      } else {
        console.log("Signup error:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="contact-style-one-area default-padding overflow-hidden">
        <div className="container">
          <div className="row align-center">
            {/* Column for the image */}
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1582735685072-1009a15ac321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fHNhbGFkfGVufDB8fHx8MTY1NzUyODk2NA&ixlib=rb-1.2.1&q=80&w=1080"
                alt="Salad with Guacamole"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>

            {/* Column for the signup form */}
            <div className="col-lg-6">
              <div className="contact-form-style-one">
                <h2 className="form-heading">Create an Account</h2>
                {/* Display success message if registration is successful */}
                {isSuccess ? (
                  <div
                    style={{
                      color: "green",
                      fontSize: "1.5rem",
                      marginBottom: "15px",
                    }}
                  >
                    {successMessage}
                  </div>
                ) : (
                  <form className="form" onSubmit={handleSignup}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-input"
                      required
                      value={signupData.name}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "15px",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                      }}
                    />
                    <br />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-input"
                      required
                      value={signupData.email}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "15px",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                      }}
                    />
                    <br />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-input"
                      required
                      value={signupData.password}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "15px",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                      }}
                    />
                    <br />
                    <button
                      type="submit"
                      className="form-button"
                      style={{
                        width: "100%",
                        padding: "12px",
                        backgroundColor: "#b28b53",
                        color: "white",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      Sign Up
                    </button>
                    {/* Use Link component to navigate to ContactV2 */}
                    <Link to="/food-menu">Already have an account? Login</Link>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default ContactV1;
