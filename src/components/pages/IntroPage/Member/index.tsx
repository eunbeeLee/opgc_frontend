import React from 'react';
import './style.css';

interface I_PROPS {
    data: I_MEMBER;
}

const Member: React.FC<I_PROPS> = ({
    data: { imgUrl, name, desc, link = '#', position },
}) => {
    return (
        <div className="member">
            <a className="member__avatar" href={link}>
                <img src={imgUrl} />
            </a>
            <p className="member__title">
                <a className="member__name">{name}</a>
                <span className="member__position">({position})</span>
            </p>
            <p className="member__desc">
                {desc.split('\n').map((line) => (
                    <>
                        {line}
                        <br />
                    </>
                ))}
            </p>
        </div>
    );
};

export default React.memo(Member);
