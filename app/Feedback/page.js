'use client'
import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'; // Import Image component from Next.js
import './style.css'; // Import CSS file for styling

const FeedbackForm = () => {
    const [rating, setRating] = useState(0); // State for star rating
    const [feedback, setFeedback] = useState('');

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submission logic (e.g., send feedback to backend)
        console.log(`Rating: ${rating}, Feedback: ${feedback}`);
        // Reset form fields
        setRating(0);
        setFeedback('');
    };

    return (
        <div className="feedback-container">
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
                <Button  className='submit-button'type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default FeedbackForm;
