import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const MessageList = ({ messages }) => {
  return (
    <ListGroup>
      {messages.map((msg, index) => (
        <ListGroupItem key={index}>
          <strong>{msg.sender}:</strong> {msg.text}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default MessageList;
