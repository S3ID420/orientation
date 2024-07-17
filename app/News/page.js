'use client';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import './style.css'

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/news');
        if (!response.ok) {
          throw new Error(`Error fetching news: ${response.statusText}`);
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new TypeError('Fetched data is not an array');
        }
        setNews(data);
      } catch (error) {
        console.error('Error fetching news data:', error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container className="newsPage">
      <h1 className="text my-4">Latest Tunisian Education News</h1>
      <Row className="customGrid">
        <Col md="3">
          {news.filter(article => article.type === "left-large").map((article, index) => (
            <Card key={index} className="newsCard leftLargeCard">
              <CardImg top src={article.imageUrl} alt={article.title} className="newsImage" />
              <CardBody>
                <CardTitle tag="h5" className="newsTitle">{article.title}</CardTitle>
                <CardText className="newsDescription">{article.description}</CardText>
                <Button href={article.url} target="_blank" className="readMoreButton">Read more</Button>
              </CardBody>
            </Card>
          ))}
          {news.filter(article => article.type === "left-small").map((article, index) => (
            <Card key={index} className="newsCard leftSmallCard">
              <CardBody>
                <CardTitle tag="h5" className="newsTitle">{article.title}</CardTitle>
                <CardText className="newsDescription">{article.description}</CardText>
                <Button href={article.url} target="_blank" className="readMoreButton">Read more</Button>
              </CardBody>
            </Card>
          ))}
        </Col>
        <Col md="6">
          {news.filter(article => article.type === "main").map((article, index) => (
            <Card key={index} className="newsCard mainCard">
              <CardImg top src={article.imageUrl} alt={article.title} className="newsImage" />
              <CardBody>
                <CardTitle tag="h5" className="newsTitle">{article.title}</CardTitle>
                <CardText className="newsDescription">{article.description}</CardText>
                <Button href={article.url} target="_blank" className="readMoreButton">Read more</Button>
              </CardBody>
            </Card>
          ))}
        </Col>
        <Col md="3">
          {news.filter(article => article.type === "right-tall").map((article, index) => (
            <Card key={index} className="newsCard rightTallCard">
              <CardImg top src={article.imageUrl} alt={article.title} className="newsImage" />
              <CardBody>
                <CardTitle tag="h5" className="newsTitle">{article.title}</CardTitle>
                <CardText className="newsDescription">{article.description}</CardText>
                <Button href={article.url} target="_blank" className="readMoreButton">Read more</Button>
              </CardBody>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default NewsPage;
