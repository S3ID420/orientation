import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, FormGroup, Label } from 'reactstrap';

const PasswordModal = ({ isOpen, onAuthenticate, onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_KEY) {
      onAuthenticate(true); // Notify success
    } else {
      setAttempts(prevAttempts => {
        const newAttempts = prevAttempts + 1;
        if (newAttempts >= 2) {
          onAuthenticate(false); // Notify failure and redirect
        } else {
          setError('Incorrect password');
        }
        return newAttempts;
      });
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={onClose}>
      <ModalHeader toggle={onClose}>Password Required</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        {error && <div className="text-danger">{error}</div>}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>Submit</Button>
        <Button color="secondary" onClick={() => onAuthenticate(false)}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default PasswordModal;
