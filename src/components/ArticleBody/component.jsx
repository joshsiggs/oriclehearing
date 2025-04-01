import React from 'react';
import ContentItem from '../ContentItem';
import './style.css';

const ArticleBody = ({ content }) => (
    <div className="article-body-wrapper">
        {content.map((item, index) => (
            <ContentItem key={index} item={item} />
        ))}
    </div>
);

export default ArticleBody;
