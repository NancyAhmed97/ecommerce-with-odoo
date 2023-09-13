import React, { useState } from 'react'
import "./CartContainer.css"
function CartContainer({product}) {
    const [count, setCount] = useState(product.quantity)
    return (
        <div className="sc-fc629025-0 kkRjOM">

            <img size="140" alt="Silver High Neck Sweater" display="block" src='https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=1920&q=75' className="sc-7555ad2a-0 dHOHOI" />
            <div width="100%" className="sc-499601bf-0 sc-a93f122a-0 hbKnmW bENpif product-details" cursor="unset">
                <a href="/product/silver-high-neck-sweater">
                    <div className="sc-96a18268-0 dqICjW title" font-weight="600" font-size="18px">{product.product}</div>
                </a>
                <div cursor="unset" className="sc-499601bf-0 fIhMfB">
                    <button className="sc-edc892ab-0 cpXcwY">
                        <div variant="medium" defaultcolor="currentColor" className="sc-284c1b4c-0 fvqYDu">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </div>
                    </button>
                </div>




                <div cursor="unset" className="sc-499601bf-0 sc-a93f122a-0 fEoQNv dMIFwC">
                    <div cursor="unset" className="sc-499601bf-0 sc-a93f122a-0 cRaeym jEdwND">
                        <div color="gray.600" className="sc-96a18268-0 ejwFdu">$210 x {count} =</div>
                        <div font-weight="600" color="primary.main" className="sc-96a18268-0 cVvifk">${count*210.00}</div>
                    </div>
                    <div cursor="unset" className="sc-499601bf-0 sc-a93f122a-0 coqQAV eKXmuc">
                        <button color="primary" disabled="" className="sc-76470375-0 gezZtH"
                            onClick={(e) => {
                                if (count > 1) {
                                    setCount(count-1)
                                }
                            }}


                        >
                            <div variant="small" defaultcolor="currentColor" className="sc-284c1b4c-0 cZnFSb">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                        <div font-weight="600" font-size="15px" className="sc-96a18268-0 knjEXk">{count}</div>
                        <button color="primary" className="sc-76470375-0 gezZtH"
                            onClick={(e) => {
                                setCount(count + 1)
                            }}


                        >
                            <div variant="small" defaultcolor="currentColor" className="sc-284c1b4c-0 cZnFSb">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartContainer