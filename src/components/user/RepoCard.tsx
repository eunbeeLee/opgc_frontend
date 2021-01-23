import React from 'react';

interface IProps {
    repo: IRepository
}

const RepoCard: React.FC<IProps> = ({ repo }) => {
    return (
        <div className="user-info-repo">
            <div className="user-info-repo__title">
                <h2>{repo.name}</h2>
                <span>this is 5boon Rest API</span>
            </div>
            <div className="user-info-repo__detail">
                <p className="user-info-repo__commits">
                    <label>Commits</label>
                    <span>344</span>
                </p>
                <ul className="user-info-repo__langauges">
                    <label>Langauge</label>
                    <li className="user-info-repo-langauge">
                        <h3>CSS</h3>
                        <div className="user-info-repo-langauge__color--css"></div>
                    </li>
                    <li className="user-info-repo-langauge">
                        <h3>JS</h3>
                        <div className="user-info-repo-langauge__color--js"></div>
                    </li>
                    <li className="user-info-repo-langauge">
                        <h3>Python</h3>
                        <div className="user-info-repo-langauge__color--python"></div>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default React.memo(RepoCard);