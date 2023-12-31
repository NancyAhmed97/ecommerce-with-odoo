import React from "react";
import "./Navbar.css";
import { Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authorizationState } from "../../Redux/auth";
function Navbar() {
    const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);
  
  console.log(reduxState.auth.authorization);
  return (
    <nav className="mb-5">
      <Container>
        <div className="top_nav">
          <div className="logo">
            <Link to="/">logo</Link>{" "}
          </div>
          <div className="search">qawqwqwqw</div>
          <div className="d-flex">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <button className="sc-edc892ab-0 etSLxN">
                  <div className="sc-284c1b4c-0 ilvZsa">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                      </svg>
                    </div>
                  </div>
                </button>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <p style={{ cursor: "pointer", padding: "5px" }}>My Account</p>

                <p style={{ cursor: "pointer", padding: "5px" }}>
                  <Link to={reduxState.auth.authorization?"/my-orders":"/login"}>Orders</Link>
                </p>
                <p
                  style={{ cursor: "pointer", padding: "5px" }}
                  onClick={() => {
                    dispatch(
                      authorizationState(
                        authorizationState('')
                      )
                    );
                    dispatch(
                        authorizationState(
                          authorizationState('')
                        )
                      );
                  }}
                >
                  logout
                </p>
              </Dropdown.Menu>
            </Dropdown>

            <div>
              <Link to="/cart">
                <div className="sc-499601bf-0 dfbenW undefined cursor-pointer">
                  <button className="sc-edc892ab-0 kyKDUs">
                    <div className="sc-284c1b4c-0 iTqAtC">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-bag"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  <div className="sc-499601bf-0 sc-a93f122a-0 enoomc MkWAR">
                    <span
                      fontSize="10px"
                      color="white"
                      fontWeight="600"
                      className="sc-96a18268-0 pTnON"
                    >
                      {reduxState.cart.quantity}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/favorits">
                <div className="sc-499601bf-0 dfbenW undefined cursor-pointer">
                  <button className="sc-edc892ab-0 kyKDUs">
                    <div className="sc-284c1b4c-0 iTqAtC">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-heart"
                          viewBox="0 0 16 16"
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  <div className="sc-499601bf-0 sc-a93f122a-0 enoomc MkWAR">
                    <span
                      fontSize="10px"
                      color="white"
                      fontWeight="600"
                      className="sc-96a18268-0 pTnON"
                    >
                      2{" "}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bottom_nav"></div>
      </Container>
    </nav>
  );
}

export default Navbar;
