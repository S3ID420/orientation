// pages/TestPage.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import './style.css';

const TestPage = () => {
  return (
    <div className="page-container">
      <Head>
        <title>Test Selection</title>
      </Head>
      <Container className="card-container">
        {[...Array(10).keys()].map((_, index) => (
          <Row key={index} className="mb-4 justify-content-center">
            <Col md="6">
              <Link href={`/Test${index + 1}`}>
                <Card className="test-card">
                  <CardBody>
                    <CardTitle className="test-title">Test {index + 1}</CardTitle>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default TestPage;
