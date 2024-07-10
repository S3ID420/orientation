'use client'
import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import './ori.css';

const Home = () => {
  return (
    <Container className="mt-5">
      <h1 className="page-title">Orientation Universitaire</h1>
      <Row className="mt-5">
        <Col xs="12" sm="4" md='12' className="mb-4">
          <Card>
            <img className="card-img-top" src="calcul.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Calcul de Score</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="4" md='12'  className="mb-4">
          <Card>
            <img className="card-img-top" src="unis.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Liste de facultés</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="4" md='12'  className="mb-4">
          <Card>
            <img className="card-img-top" src="reo.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Reorientation</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
