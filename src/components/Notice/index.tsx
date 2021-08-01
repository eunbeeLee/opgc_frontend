import { I_NOTI } from '@/types/noti';
import React from 'react';
import Utterances from '../Utterances';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

interface I_PROPS {
    data: I_NOTI;
    onClose?: () => void;
}

const Notice: React.FC<I_PROPS> = ({
    data: { date, title, content, id },
    onClose = () => {},
}) => {
    return (
        <div className="c-noti__container">
            <header>
                <span className="c-noti__close-btn" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                <div className="c-noti__date">{date}</div>
                <div className="c-noti__title">{title}</div>
            </header>
            <main dangerouslySetInnerHTML={{ __html: content }}></main>
            <footer>
                <Utterances id={`notice/${id}`} />
            </footer>
        </div>
    );
};

export default React.memo(Notice);
