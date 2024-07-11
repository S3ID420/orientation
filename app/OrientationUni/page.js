'use client'
import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import './ori.css';

const UNI = () => {
  return (
    <Container className="mt-5">
      <h1 className="page-title">Orientation Universitaire</h1>
      <Row className="mt-5">
        <Col xs="12" sm="4" className="mb-4">
          <Link href="Calcul">
            <Card className='c'>
              <img className="card-img-top" src="calcul.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Calcul de Score</CardTitle>
              </CardBody>
            </Card>
          </Link>
        </Col>
        <Col xs="12" sm="4" className="mb-4">
          <Link href="#liste-facultes">
            <Card className='c'>
              <img className="card-img-top" src="unis.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Liste de facultés</CardTitle>
              </CardBody>
            </Card>
          </Link>
        </Col>
        <Col xs="12" sm="4" className="mb-4">
          <Link href="#reorientation">
            <Card className='c'>
              <img className="card-img-top" src="reo.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Reorientation</CardTitle>
              </CardBody>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default UNI;
