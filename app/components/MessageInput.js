'use client';
import React, { useState } from 'react';
import { Input, Button, InputGroup, InputGroupText } from 'reactstrap';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <InputGroup>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <InputGroupText>
        <button className='Button'  onClick={handleSend}>Send</button>
      </InputGroupText>
    </InputGroup>
  );
};

export default MessageInput;
