import React, { useEffect, useState } from 'react'
import "./ProduuctsList.css"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getProducts } from './Network'
import ItemContainer from '../ItemContainer/ItemContainer'
import axios from 'axios'
function ProduuctsList() {
  const [products, setProducts] = useState([])

  useEffect(() => {

    var data = JSON.stringify({
        "jsonrpc": "2.0"
    });

    var config = {
        method: 'post',
        url: 'https://q8coders-staging-8077346.dev.odoo.com/product-details/',
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
          setProducts(response.data.result && response.data.result);
        })
        .catch(function (error) {
            console.log(error);
        })
}, [])
  return (
    <section className='properties_list_container'>
      <div className='section_title d-flex flex-column align-items-center'>
        <h2>Produucts</h2>
      </div>
      <Container >
        <Row>
          {products&&products.map((item,index)=>{
            return(
              <Col md={4} className="mb-3"key={index}>
              <ItemContainer item={{item}} />
            </Col>
            )
          })}
     
      

          {/* {properties && properties.slice(0, 6).map((item, i) => {
            return (
              <Col md={6} key={i} className="mb-3">
                <ItemContainer data={item} state={"properties"} activeState={"vertical"} />

              </Col>
            )
          })}
*/}

        </Row>
        <div className='text-center mt-3'>
          <div className='button_see_more'>
            <Link to="/properties">
              View More

            </Link>
          </div>
        </div>
      </Container>
    </section >)
}

export default ProduuctsList