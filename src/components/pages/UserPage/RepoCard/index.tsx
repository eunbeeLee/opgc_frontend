import React from 'react';
import './style.css';

interface I_PROPS {
    data: Repository;
}

const RepoCard: React.FC<I_PROPS> = ({ data: repo }) => {
    return (
        <div className="user-info-repo">
            <div className="user-info-repo__title">
                <h2>
                    <a href={repo.url} target="_blank">
                        {repo.name}
                    </a>
                </h2>
                <span>{repo.fullName}</span>
            </div>
            <div className="user-info-repo__detail">
                <p className="user-info-repo__owner">
                    <label>Owner</label>
                    <span>{repo.owner}</span>
                </p>
                <p className="user-info-repo__langauge">
                    <label>Language</label>
                    <span>{repo.repLanguage}</span>
                </p>
                <p className="user-info-repo__commits">
                    <label>Contribution</label>
                    <span>{repo.contributionCnt}</span>
                </p>
                <p className="user-info-repo__stars">
                    <label>Language</label>
                    <span>{repo.starCnt}</span>
                </p>
                {
                    repo.organizationName && 
                    <p className="user-info-repo__organization">
                        <label>Organization</label>
                        <span>{repo.organizationName}</span>
                    </p>
                }
            </div>
        </div>
    );
};

export default React.memo(RepoCard);
