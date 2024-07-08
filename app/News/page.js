'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import './style.css';

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const newsData = [
      {
        title: "Main News: New Education Reforms in Tunisia",
        description: "The Tunisian government has announced new reforms aimed at improving the education system.",
        url: "http://www.edunet.tn/link_to_news_main",
        imageUrl: "edu.jpg",
        type: "main"
      },
      {
        title: "Education Technology in Tunisian Schools",
        description: "Schools across Tunisia are integrating new technologies into their classrooms.",
        url: "http://www.edunet.tn/link_to_news_1",
        imageUrl: "edu.jpg",
        type: "left-large"
      },
      {
        title: "Short Update: Teacher Training Programs",
        description: "New teacher training programs are being introduced.",
        url: "http://www.edunet.tn/link_to_news_2",
        type: "left-small"
      },
      {
        title: "Tall News: Education Budget Increase",
        description: "The budget for education has been significantly increased to support new initiatives.",
        url: "http://www.edunet.tn/link_to_news_tall",
        imageUrl: "edu.jpg",
        type: "right-tall"
      }
    ];
    setNews(newsData);
  }, []);

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
