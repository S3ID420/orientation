'use client';
import { useState } from 'react';
import { Card, CardBody, CardTitle, Row, Col, Container, Collapse, ListGroup, ListGroupItem, Button } from 'reactstrap';
import './style.css'; // Assuming you have your styles in a style.css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the arrow icon

const classData = {
  '1ere-annee': [
    { name: 'Arabic', coefficient: 2 },
    { name: 'French', coefficient: 3 },
    { name: 'Math', coefficient: 4 },
    // Add other classes here
  ],
  '2eme-science': [
    { name: 'Physics', coefficient: 5 },
    { name: 'Chemistry', coefficient: 4 },
    { name: 'Biology', coefficient: 3 },
    // Add other classes here
  ],
  // Add data for other nodes here
};

const Diagram = () => {
  const [visibleNode, setVisibleNode] = useState('');
  const [collapseOpen, setCollapseOpen] = useState({});

  const handleNodeClick = (node) => {
    if (!node.startsWith('bac')) {
      setVisibleNode(node === visibleNode ? '' : node);
    }
    setCollapseOpen({});
  };

  const handleArrowClick = (node, e) => {
    e.stopPropagation();
    setCollapseOpen(prevState => ({ ...prevState, [node]: !prevState[node] }));
  };

  const handleCloseClick = (node, e) => {
    e.stopPropagation();
    setCollapseOpen(prevState => ({ ...prevState, [node]: false }));
  };

  const renderCard = (title, node, link = '', isParent = false) => (
    <Card onClick={() => handleNodeClick(node)} className={`card-animate ${isParent ? 'parent-card' : ''}`}>
      <CardBody>
        <CardTitle tag="h5" className="text-center t">
          {title}
          <FontAwesomeIcon icon={faArrowRight} className="card-arrow" onClick={(e) => handleArrowClick(node, e)} />
        </CardTitle>
        <Collapse isOpen={collapseOpen[node]}>
          <ListGroup>
            {classData[node]?.map((cls, index) => (
              <ListGroupItem key={index}>{cls.name} (Coefficient: {cls.coefficient})</ListGroupItem>
            ))}
          </ListGroup>
          <Button color="link" onClick={(e) => handleCloseClick(node, e)}>Close</Button>
          {link && <Button color="primary" href={link} target="_blank" rel="noopener noreferrer">Learn More</Button>}
        </Collapse>
      </CardBody>
    </Card>
  );

  return (
    <Container fluid className="containeri p-3">
      <h1 className="page-title">Orientation Scolaire</h1>
      <Row className="justify-content-center">
        <Col md="6">
          {renderCard('1ere annee', '1ere-annee', '', true)}
        </Col>
      </Row>
      <Row className="justify-content-center row-link">
        <Col md="3">{renderCard('2eme annee science', '2eme-science')}</Col>
        <Col md="3">{renderCard('2eme annee lettres', '2eme-lettres')}</Col>
        <Col md="3">{renderCard('2eme annee info', '2eme-info')}</Col>
        <Col md="3">{renderCard('2eme annee eco', '2eme-eco')}</Col>
      </Row>
      {(visibleNode === '2eme-science' || visibleNode === '3eme-sc' || visibleNode === '3eme-math' || visibleNode === '3eme-tech') && (
        <>
          <Row className="justify-content-center row-link">
            <Col md="3">{renderCard('3eme sc', '3eme-sc')}</Col>
            <Col md="3">{renderCard('3eme math', '3eme-math')}</Col>
            <Col md="3">{renderCard('3eme tech', '3eme-tech')}</Col>
          </Row>
          {visibleNode === '3eme-sc' && (
            <Row className="justify-content-center row-link">
              <Col md="3">{renderCard('bac sc', 'bac-sc', 'https://example.com/bac-sc')}</Col>
            </Row>
          )}
          {visibleNode === '3eme-math' && (
            <Row className="justify-content-center row-link">
              <Col md="3">{renderCard('bac math', 'bac-math', 'https://example.com/bac-math')}</Col>
            </Row>
          )}
          {visibleNode === '3eme-tech' && (
            <Row className="justify-content-center row-link">
              <Col md="3">{renderCard('bac tech', 'bac-tech', 'https://example.com/bac-tech')}</Col>
            </Row>
          )}
        </>
      )}
      {(visibleNode === '2eme-lettres' || visibleNode === '3eme-lettre') && (
        <>
          <Row className="justify-content-center row-link">
            <Col md="3">{renderCard('3eme lettre', '3eme-lettre')}</Col>
          </Row>
          {visibleNode === '3eme-lettre' && (
            <Row className="justify-content-center row-link">
              <Col md="3">{renderCard('bac lettres', 'bac-lettres', 'https://example.com/bac-lettres')}</Col>
            </Row>
          )}
        </>
      )}
      {(visibleNode === '2eme-info' || visibleNode === '3eme-info') && (
        <>
          <Row className="justify-content-center row-link">
            <Col md="3">{renderCard('3eme info', '3eme-info')}</Col>
          </Row>
          {visibleNode === '3eme-info' && (
            <Row className="justify-content-center row-link">
              <Col md="3">{renderCard('bac info', 'bac-info', 'https://example.com/bac-info')}</Col>
            </Row>
          )}
        </>
      )}
      {(visibleNode === '2eme-eco' || visibleNode === '3eme-eco') && (
        <>
          <Row className="justify-content-center row-link">
            <Col md="3">{renderCard('3eme eco', '3eme-eco')}</Col>
          </Row>
          {visibleNode === '3eme-eco' && (
            <Row className="justify-content-center row-link">
              <Col md="3">{renderCard('bac eco', 'bac-eco', 'https://example.com/bac-eco')}</Col>
            </Row>
          )}
        </>
      )}
    </Container>
  );
};

export default Diagram;
