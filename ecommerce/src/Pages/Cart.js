import React, { useEffect, useState } from "react";
import CartContainer from "../Components/CartContainer/CartContainer";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";
import { useSelector } from "react-redux";

function Cart() {
  const reduxState = useSelector((state) => state);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    var data = JSON.stringify({
      jsonrpc: "2.0",
    });
    var config = {
      method: "post",
      url: `https://q8coders-staging-8077346.dev.odoo.com/my/cart`,
      headers: {
        Authorization: reduxState.auth.authorization,
        "Content-Type": "application/json",
      },
      data: data,
      params: {
        jsonrpc: "2.0",
      },
    };

    axios(config)
      .then(function (response) {
        setCartProducts(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div style={{ background: "#f6f9fc",minHeight:'100vh' }}>
      <Navbar />
      <Container>
        <Row>
          {cartProducts &&
            cartProducts.map((product, i) => {
              return (
                <Col md={8} key={i}>
                  <CartContainer product={product} />
                </Col>
              );
            })}

          <Col md={4}></Col>
        </Row>
      </Container>
      {/* <Footer/> */}
    </div>
  );
}

export default Cart;
