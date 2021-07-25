import React from 'react';
import './style.css';

interface I_PROPS {
    title: string;
    content?: string;
}

const NotiCard: React.FC<I_PROPS> = ({ title, content }) => {
    return (
        <div className="c-noti-card">
            <div className="c-noti-card__title">{title}</div>
            <div className="c-noti-card__content">{content}</div>
        </div>
    );
};

export default React.memo(NotiCard);
