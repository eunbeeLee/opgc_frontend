import React from 'react';
import './style.css';

interface I_PROPS {
    date: string;
    title: string;
    content?: string;
}

const NotiCard: React.FC<I_PROPS> = ({ date, title, content }) => {
    return (
        <div className="c-noti-card">
            <div className="c-noti-card__date">{date}</div>
            <div className="c-noti-card__container">
                <div className="c-noti-card__title">{title}</div>
                <div className="c-noti-card__content">{content}</div>
            </div>
        </div>
    );
};

export default React.memo(NotiCard);
