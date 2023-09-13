import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Container, Row } from "react-bootstrap";
import axios from "axios";import "./ForgetForm.css"
import "./ForgetForm.css"
function ForgetForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [alert, setAlert] = useState("");
  
    const saveData = (e) => {
      e.preventDefault();
      if (!email || !password) {
        setError(true);
      } else {
        // var config = {
        //   method: "post",
        //   url: "https://q8coders-staging-8077346.dev.odoo.com/login/",
        //   headers: {
        //     Authorization: "f03d2aba9902f38eb0925cbd66ee0a5cb096d0ec",
        //     "Content-Type": "application/json",
        //   },
        //   data: {
        //     params: {
        //       jsonrpc: "2.0",
        //       login: email,
        //       password: password,
        //     },
        //   },
        // };
        // axios(config)
        //   .then(function (response) {
        //     console.log(response.data.result);
        //     if (response.data.result.success) {
        //         setAlert(response.data.result.success);

        //     } else {
        //       setError(response.data.result.error);
        //     }
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
  
      }
    };
  return (
    <section className="forget_form_container">
      <Container>
        <Row>
          {error && <Alert>{error}</Alert>}
          {alert && <Alert>{alert}</Alert>}
          <div className="col-lg-6 offset-lg-3">
            <h2>Forget Password</h2>
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
              {/* <br />
              <label>Password *</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
              /> */}
              <br />

        

              <button type="submit">Send</button>
            </form>
         
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default ForgetForm
