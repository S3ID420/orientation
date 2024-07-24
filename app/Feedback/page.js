'use client'
import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const FeedbackForm = ({ initialRating = 0, initialFeedback = '' }) => {
  const [rating, setRating] = useState(initialRating);
  const [feedback, setFeedback] = useState(initialFeedback);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating, feedback }),
      });

      if (res.ok) {
        toast.success('Feedback submitted!', {
            className: 'toast-success',
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        setRating(0);
        setFeedback('');
      } else {
        const errorData = await res.json();
        toast.error(`Failed to submit feedback: ${errorData.error}`);
      }
    } catch (error) {
      toast.error(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="feedback-container">
      <ToastContainer />
      <div className="feedback-photo">
        <img src="/feedback.jpg" alt="Feedback Photo" width={400} height={400} />
      </div>
      <Form className="feedback-form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="rating">Rating:</Label><br />
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                onClick={() => handleRatingChange(ratingValue)}
                className={ratingValue <= rating ? 'star active' : 'star'}
              />
            );
          })}
        </FormGroup>
        <FormGroup>
          <Label for="feedback">Feedback:</Label>
          <Input
            type="textarea"
            name="feedback"
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </FormGroup>
        <Button className='submit-button' type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default FeedbackForm;
