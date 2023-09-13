import React from 'react'
import "./singleOrder.css"
import { Link } from 'react-router-dom'
function singleOrder() {
    return (
        <Link to="/order/:id" className='sc-49ccdcd9-0 gLWSLL'>
            <h5 font-weight="600" font-size="16px" className="sc-96a18268-0 jJcZDq">#f0ba538b</h5>
            <div cursor="unset" className="sc-499601bf-0 ddTsrM"><div className="sc-950339a4-0 eYrKap">
                <span font-size="12px" color="secondary.main" className="sc-96a18268-0 jyYOSb">Pending</span>
            </div>
            </div>
            <div className="sc-96a18268-0 giXRTi flex-grow pre">Nov 10, 2022</div>
            <div className="sc-96a18268-0 giXRTi">$350.00</div>
            <div className="sc-25e0596f-0 kcgkaG"><div color="text.muted" className="sc-96a18268-0 iLQqiu"><button className="sc-edc892ab-0 kxhA-di"><div variant="small" defaultcolor="currentColor" className="sc-284c1b4c-0 cZnFSb"><div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
            </div>
            </div>
            </button>
            </div>
            </div>

        </Link>
    )
}

export default singleOrder