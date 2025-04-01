import React from 'react';
import './style.css';

const ReviewCard = ({ review }) => (
    <div className="review-card-wrapper">
        <img src={review.image} alt={review.name} className="review-image" />
        <div className="review-details">
            <h3 className="review-name">{review.name}</h3>
            <p className="review-location">{review.location}</p>
            <p className="review-text">{review.review}</p>
        </div>
    </div>
);

export default ReviewCard;
