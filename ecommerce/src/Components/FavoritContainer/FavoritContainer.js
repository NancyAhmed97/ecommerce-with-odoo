import React from 'react'
import "./FavoritContainer.css"
import { Col, Container, Row } from 'react-bootstrap'
import ItemContainer from '../ItemContainer/ItemContainer'
function FavoritContainer() {
  return (
    <div>
        <Container>
            <Row>
                <Col md={4}>
                    <ItemContainer/>
                          </Col>
                          <Col md={4}>
                    <ItemContainer/>
                          </Col>
                          <Col md={4}>
                    <ItemContainer/>
                          </Col>
                          <Col md={4}>
                    <ItemContainer/>
                          </Col>
                          <Col md={4}>
                    <ItemContainer/>
                          </Col>
            </Row>
        </Container>
    </div>
  )
}

export default FavoritContainer