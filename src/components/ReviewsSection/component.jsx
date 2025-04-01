import React from 'react';
import ReviewCard from '../ReviewCard';
import './style.css';

const ReviewsSection = ({ reviews }) => (
    <section className="reviews-section-wrapper">
        <h3 className="reviews-title"><u><i>Customer Reviews</i></u></h3>
        <div className="reviews-list">
            {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
            ))}
        </div>
    </section>
);

export default ReviewsSection;
