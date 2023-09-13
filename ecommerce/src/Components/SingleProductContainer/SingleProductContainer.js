import React, { useEffect, useState } from "react";
import "./SingleProductContainer.css";
import { Col, Container, Row } from "react-bootstrap";
import Toaster from '../../Components/Toast/Toaster'
import axios from "axios";
import Loading from "../Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Redux/Cart";
import { useNavigate, useParams } from "react-router-dom";

function SingleProductContainer() {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showToaster, setShowToaster] = useState(false);
  const [addToCartState, setAddToCartState] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quantityCart = useSelector((state) => state.cart.quantity);
  const reduxState = useSelector((state) => state);
console.log(reduxState.auth.authorization);


  useEffect(() => {
    var data = JSON.stringify({
      jsonrpc: "2.0",
    });
    const id = window.location.pathname.slice(
      window.location.pathname.lastIndexOf("/") + 1
    );

    var config = {
      method: "post",
      url: `https://q8coders-staging-8077346.dev.odoo.com/product-details/${id}`,
      headers: {
        Authorization: "f03d2aba9902f38eb0925cbd66ee0a5cb096d0ec",
        "Content-Type": "application/json",
      },
      data: data,
      params: {
        jsonrpc: "2.0",
      },
    };

    axios(config)
      .then(function (response) {
        setProduct(response.data.result);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const addToCart=()=>{
    if(!reduxState.auth.authorization){
      navigate('/login')
    }else{
      
    const id = window.location.pathname.slice(
      window.location.pathname.lastIndexOf("/") + 1
    );

      var data = JSON.stringify({
        jsonrpc: "2.0",
      });
      var config = {
        method: "post",
        url: `https://q8coders-staging-8077346.dev.odoo.com/update/my/cart/${id}/${count}`,
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
          console.log(response.data.result);
          setAddToCartState(true);
          dispatch(addProduct(quantityCart + 1));
        })
        .catch(function (error) {
          console.log(error);
        });
      }
  }
  return (
    <div className="bg-secondary-subtle py-5" style={{ minHeight: "87.5vh" }}>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <div className="content-area primary">
            <div className="ast-woocommerce-container">
              <Row>
                <Col md={7}></Col>
                <Col md={5}>
                  <h2>{product && product[0].name}</h2>
                  <p>{product && product[0].list_price} KW</p>
                  {product && product[0].qty_available === 0 && (
                    <span className="text-danger fw-bold">aut of stock</span>
                  )}
                  <div>
                    <div className="d-flex count mt-4">
                      <span
                        onClick={() => {
                          setCount(count + 1);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-plus"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                      </span>
                      <span>{count}</span>
                      <span
                        onClick={() => {
                          if (count > 0) {
                            setCount(count - 1);
                          }
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-dash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                      </span>
                    </div>
                    <div className="cart mt-4">
                      <button
                        className="w-50"
                        onClick={addToCart}
                        id="liveToastBtn"
                      >
                        Add to Cart
                      </button>
 
    {/* <Toaster/> */}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}

export default SingleProductContainer;
