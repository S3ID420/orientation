'use client'
import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';
import './chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: 'Admin', text: 'Welcome! How can I help you today?' },
  ]);

  const handleSend = (message) => {
    setMessages([...messages, { sender: 'Client', text: message }]);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md="8">
          <Card>
            <CardHeader>Chat with Admin</CardHeader>
            <CardBody>
              <MessageList messages={messages} />
              <MessageInput onSend={handleSend} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
