import React from 'react'
import "./MyOrdersContainer.css"
import { Container } from 'react-bootstrap'
import SingleOrder from "../singleOrder/singleOrder"
function MyOrdersContainer() {
    return (
        <div style={{ background: "#f6f9fc" }}className='py-5'>
            <Container>
                <div cursor="unset" className="sc-499601bf-0 gvRkMX">
                    <div cursor="unset" className="sc-499601bf-0 sc-a93f122a-0 dcxvbj ikZGlS">
                        <div cursor="unset" className="sc-499601bf-0 sc-a93f122a-0 coqQAV eKXmuc">
                            <div color="primary" variant="medium" defaultcolor="currentColor" className="sc-284c1b4c-0 kXXWpU"><div>

                            </div>
                            </div>
                            <h2 font-size="25px" className="sc-96a18268-0 bTtdOv">My Orders</h2></div></div></div>
                <div className="sc-25e0596f-0 dRLpwz">
                    <div className="sc-49ccdcd9-0 hMIZur">
                        <h5 font-weight="600" font-size="16px" color="text.muted" className="sc-96a18268-0 ejSdFR">Order #
                        </h5>
                        <h5 font-weight="600" font-size="16px" color="text.muted" className="sc-96a18268-0 ejSdFR">Status</h5>
                        <h5 font-weight="600" font-size="16px" color="text.muted" className="sc-96a18268-0 ejSdFR">Date purchased</h5>
                        <h5 font-weight="600" font-size="16px" color="text.muted" className="sc-96a18268-0 ejSdFR">Total</h5>
                        {/* <h5 font-weight="600" font-size="16px" color="text.muted" className="sc-96a18268-0 cKXMNv"></h5> */}
                    </div>
                </div>

                <SingleOrder />
                <SingleOrder />
                <SingleOrder />
                <SingleOrder />


            </Container>
        </div>


    )
}

export default MyOrdersContainer