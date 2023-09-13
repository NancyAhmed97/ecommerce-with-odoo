import React, { useState } from "react";
import "./LoginForm.css";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Container, Row } from "react-bootstrap";
import axios from "axios";
function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");

  const saveData = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError(true);
    } else {
      var config = {
        method: "post",
        url: "https://q8coders-staging-8077346.dev.odoo.com/login/",
        headers: {
          Authorization: "f03d2aba9902f38eb0925cbd66ee0a5cb096d0ec",
          "Content-Type": "application/json",
        },
        data: {
          params: {
            jsonrpc: "2.0",
            login: email,
            password: password,
          },
        },
      };
      axios(config)
        .then(function (response) {
          setAlert(response.data.result.success);
          if (response.data.result.success) {
            setTimeout(() => {
              navigate("/");
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

  return (
    <section className="login_form_container">
      <Container>
        <Row>
          {error && <Alert>{error}</Alert>}
          {alert && <Alert>{alert}</Alert>}
          <div className="col-lg-6 offset-lg-3">
            <h2>Login</h2>
            <form onSubmit={saveData}>
              <label>Email address *</label>
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
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
              />
              <br />

              <Link to="/forget-password" className="forget_password">
                Forget your Password
              </Link>
              <br />

              <button type="submit">Sign In</button>
            </form>
            <div className="sign_up">
              <Link to="/sign-up">Or Create An Account</Link>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default LoginForm;
