import React, { useState } from "react";
import "./SignupForm.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import { Alert } from "bootstrap";
import { useDispatch } from "react-redux";
import { authorizationState } from "../../Redux/auth";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function SignupForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [phoneState, setPhoneState] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successAlert, setSuccessAlert] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCheckPassword, setShowCheckPassword] = useState(false);
  const [value, setValue] = useState();

  const saveData = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("please enter email or password");
    } else {
      var config = {
        method: "post",
        url: "https://q8coders-staging-8077346.dev.odoo.com/register",
        headers: {
          Authorization: "f03d2aba9902f38eb0925cbd66ee0a5cb096d0ec",
          "Content-Type": "application/json",
        },
        data: {
          params: {
            jsonrpc: "2.0",
            email: email,
            password: password,
          },
        },
      };
      axios(config)
        .then(function (response) {
          if (response.data.result.success) {
            setSuccessAlert(response.data.result.success);
            dispatch(
              authorizationState(
                authorizationState(response.data.result.accessToken)
              )
            );
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          } else {
            setError(response.data.result.error);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const SendCode=()=>{
    var config = {
      method: "post",
      url: `https://q8coders-staging-8077346.dev.odoo.com/send/otp/${value}`,
      headers: {
        Authorization: "f03d2aba9902f38eb0925cbd66ee0a5cb096d0ec",
        "Content-Type": "application/json",
      },
      data: {
        params: {
          jsonrpc: "2.0",
         
        },
      },
    };
    axios(config)
    .then(function (response) {
if(response.data.result.success==="OTP is sent successfully."){
  navigate("/verifyoTP");

}
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <section className="signup_form_container">
      <Container>
        <Row>
          {/* {error && <Alert>error</Alert>} */}
          {/* {successAlert && <Alert>{successAlert}</Alert>} */}
          <div className="col-lg-6 offset-lg-3">
            <h2>Register</h2>
            <form onSubmit={saveData}>
              {/* {phoneState ? (
                <>
                  <label>Phone*</label>
                  <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>  
      
      </>
              ) : (
                <>
                  <label>Email address*</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                  />
                </>
              )} */}
              {phoneState ? (
                <>
                  <label>Phone*</label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    defaultCountry="KW"
                    onChange={setValue}
                  />
                </>
              ) : (
                <>
                  <label>Email address*</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                  />
                  <br />
                  <label>Password *</label>
                  <div className="input_filed position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                      }}
                    />
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-eye-slash"
                        viewBox="0 0 16 16"
                        onClick={() => {
                          setShowPassword(false);
                        }}
                      >
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                        onClick={() => {
                          setShowPassword(true);
                        }}
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    )}
                  </div>
                  <br />
                  <label>Confirm Password *</label>
                  <div className="input_filed position-relative">
                    <input
                      type={showCheckPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setError("");
                      }}
                    />
                    {showCheckPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-eye-slash"
                        viewBox="0 0 16 16"
                        onClick={() => {
                          setShowCheckPassword(false);
                        }}
                      >
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                        onClick={() => {
                          setShowCheckPassword(true);
                        }}
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    )}
                  </div>
                  <br />
                </>
              )}

              {phoneState ? (
                <>
                  <p
                    onClick={() => setPhoneState(false)}
                    className="login_state"
                  >
                    Register by email address
                  </p>
                 

                  <button onClick={SendCode}>Send Code</button>
                </>
              ) : (
                <>
                  <p
                    onClick={() => setPhoneState(true)}
                    className="login_state"
                  >
                    Register by phone
                  </p>
                  <br />

                  <button type="submit">REGISTER</button>
                </>
              )}
            </form>
            <div className="login">
              <Link to="/login">or Login</Link>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default SignupForm;
