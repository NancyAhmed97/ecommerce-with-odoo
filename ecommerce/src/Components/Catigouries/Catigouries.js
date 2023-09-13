import React, { useEffect, useState } from 'react'
import manImg from "../../assists/img/banner-1.jpg"
import womanImg from "../../assists/img/banner-2.jpg"
import childImg from "../../assists/img/banner-3.jpg"

import "./Catigouries.css"
import axios from 'axios'
function Catigouries() {
    const [categories, setCategories] = useState([])

    useEffect(() => {

        var data = JSON.stringify({
            "jsonrpc": "2.0"
        });

        var config = {
            method: 'post',
            url: 'https://q8coders-staging-8077346.dev.odoo.com/category/',
            headers: {
                'Authorization': 'f03d2aba9902f38eb0925cbd66ee0a5cb096d0ec',
                'Content-Type': 'application/json',
            },
            data: data,
            params: {
                "jsonrpc": "2.0"
            }
        };

        axios(config)
            .then(function (response) {
           setCategories(response.data.result.categories);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    return (
        <div>
            <div className="banner-section spad">
                <div className="container-fluid">
                    <div className="row">
                        {categories && categories.map((category, i) => {
                            return (
                                <div className="col-lg-4 mt-3"key={i}>
                                    <div className="single-banner">
                                        <img src={manImg} alt="" />
                                        <div className="inner-text">
                                            <h4>{category.name}</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </div>


        </div>
    )
}

export default Catigouries