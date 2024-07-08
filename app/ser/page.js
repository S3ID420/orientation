import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import "./style.css";

// Define services with photos
const services = [
  { title: 'Service 1', photo: '/service1.jpg', link: '#service1' },
  { title: 'Service 2', photo: '/service2.jpg', link: '#service2' },
  { title: 'Service 3', photo: '/service3.jpg', link: '#service3' },
  { title: 'Service 4', photo: '/service4.jpg', link: '#service4' },
  { title: 'Service 5', photo: '/service5.jpg', link: '#service5' },
];

const ServiceCard = ({ title, photo, link }) => (
  <Link href={link}>
    <Card className="mb-3 service-card">
      <img src={photo} className="card-img-top" alt={title} />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
      </CardBody>
    </Card>
  </Link>
);

const ServicesPage = () => (
  <Container className="mt-5 container">
    <Row className="mb-4">
      <Col>
        <h1 className="page-title">Our Services</h1>
      </Col>
    </Row>
    <Row>
      <Col md="6">
        <img
          src="/service.png"
          alt="Service"
          className="img-fluid"
          style={{ maxHeight: '80vh', width: '100%', objectFit: 'cover' }}
        />
      </Col>
      <Col md="6">
        <Row>
          {services.slice(0, 2).map((service, index) => (
            <Col key={index} sm="6">
              <ServiceCard title={service.title} photo={service.photo} link={service.link} />
            </Col>
          ))}
        </Row>
        <Row>
          {services.slice(2, 4).map((service, index) => (
            <Col key={index} sm="6">
              <ServiceCard title={service.title} photo={service.photo} link={service.link} />
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center">
          <Col sm="6">
            <ServiceCard
              title={services[4].title}
              photo={services[4].photo}
              link={services[4].link}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default ServicesPage;
