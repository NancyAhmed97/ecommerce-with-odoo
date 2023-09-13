import axios from "axios";
import React, { useState } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function VerifyOTP() {
  const [OTP, setOTP] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const sentOTP = (e) => {
    e.preventDefault();

    if (OTP) {
      var config = {
        method: "post",
        url: `https://q8coders-staging-8077346.dev.odoo.com/validate/otp/${OTP}`,
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
          if (response.data.result.error) {
            setError(response.data.result.error);
          } else {
            navigate("/");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <section className="signup_form_container">
      <Container>
        <Row>
          {
            error&&
            <Alert variant="danger">
              {error}
            </Alert>
          }
          <div className="col-lg-6 offset-lg-3">
            <h2>Verify OTP</h2>
            <form onSubmit={sentOTP}>
              <label>Code *</label>
              <input
                type="number"
                value={OTP}
                onChange={(e) => {
                  setOTP(e.target.value);
                }}
              />
              <button type="submit">Verify Code</button>
            </form>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default VerifyOTP;
