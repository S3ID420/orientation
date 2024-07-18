// pages/TestPage.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './style.css';

const descriptions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
];

const TestPage = () => {
  return (
    <div className="page-container">
      <Head>
        <title>Test Selection</title>
      </Head>
      <Container className="card-container">
        <h1 className="page-title8">Choose Your Test</h1>
        <Row className="justify-content-center">
          {[...Array(10).keys()].map((index) => (
            <Col lg="3" md="4" sm="6" key={index} className="mb-4">
              <Link className='link' href={`/Test${index + 1}`}>
                <Card className="test-card">
                  <CardBody>
                    <CardTitle className="test-title">Test {index + 1}</CardTitle>
                    <CardText className="test-description">{descriptions[index % descriptions.length]}</CardText>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TestPage;
