import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';
import { getIcon } from './service';
interface I_PROPS {
    title: string;
    content: string;
    onClose?: () => void;
    type?: 'warning' | 'error' | 'normal';
}

const MessageCard: React.FC<I_PROPS> = ({
    title,
    content,
    onClose = () => {},
    type = 'normal',
}) => {
    const [isShow, setIsShow] = useState(true);
    const handleClickCloseBtn = useCallback(() => {
        setIsShow((value) => !value);
        onClose();
    }, []);

    return (
        <div
            className="c-msg-card__box"
            style={{ display: isShow ? '' : 'none' }}
        >
            <h1 className="c-msg-card__title">
                <span className="c-msg-card__icon" data-message-type={type}>
                    <FontAwesomeIcon icon={getIcon(type)} />
                </span>
                {title}
            </h1>
            <p className="c-msg-card__message">{content}</p>
            <div className="c-msg-card__btn-group">
                <button onClick={handleClickCloseBtn}>닫기</button>
            </div>
        </div>
    );
};

export default React.memo(MessageCard);
