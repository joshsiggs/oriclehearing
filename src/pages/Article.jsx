import React from 'react';
import articleData from '../data/article.json';
import reviewsData from '../data/reviews.json';
import Hero from '../components/Hero';
import ArticleBody from '../components/ArticleBody';
import ReviewsSection from '../components/ReviewsSection';
import './Article.css';

const ArticlePage = () => (
    <div className="article-page-wrapper">
        <div className="article-content">
            <Hero hero={articleData.hero} />
            <ArticleBody content={articleData.body.content} />
        </div>
        <div className="reviews-sidebar">
            <ReviewsSection reviews={reviewsData.reviews} />
        </div>
    </div>
);

export default ArticlePage;