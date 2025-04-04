import React from 'react';
import './style.css';

const createMarkup = (html) => ({ __html: html });

const ContentItem = ({ item }) => {
    switch (item.type) {
        case 'paragraph-strong':
            return <p className="paragraph-strong" dangerouslySetInnerHTML={createMarkup(item.text)} />;
        case 'paragraph':
            return <p className="paragraph" dangerouslySetInnerHTML={createMarkup(item.text)} />;
        case 'image':
            return (
                <div className="content-image">
                <img src={item.text} alt="Article content" />
                </div>
            );
        case 'dashed-box':
            return <div className="dashed-box" dangerouslySetInnerHTML={createMarkup(item.text)} />;
        case 'testimonial':
            return <blockquote className="testimonial" dangerouslySetInnerHTML={createMarkup(item.text)} />;
        case 'button':
            return <button className="action-button"><a href="https://go.oriclehearing.com/action/1?vid=fKeLGBkmPif4Vy4ARsxR6poy1x&n=31SjOgXMPujN&rn=31SjOgXMPujN&_gl=1*1ez55lc*_gcl_au*MjAyNzk4NTI5MC4xNzQzMDMxMTgx">{item.text}</a></button>;
        default:
            return null;
    }
};

export default ContentItem;
