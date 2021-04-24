import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './style.css';

interface I_PROPS {
    data: Repository;
}

const RepoCard: React.FC<I_PROPS> = ({ data: repo }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 769px)',
    });

    const isMobileDevice = useMediaQuery({
        query: '(max-device-width: 769px)',
    });
    return (
        <>
            {/* 데스크탑 화면 */}
            {isDesktopOrLaptop && (
                <div className="user-info-repo">
                    <div className="user-info-repo__title">
                        <h2>
                            <a href={repo.url} target="_blank" rel="noreferrer">
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
                            <span>{repo.repLanguage || '-'}</span>
                        </p>
                        <p className="user-info-repo__commits">
                            <label>Contribution</label>
                            <span>{repo.contributionCnt}</span>
                        </p>
                        <p className="user-info-repo__stars">
                            <label>Stars</label>
                            <span>{repo.starCnt}</span>
                        </p>
                        {repo.organizationName && (
                            <p className="user-info-repo__organization">
                                <label>Organization</label>
                                <span>{repo.organizationName}</span>
                            </p>
                        )}
                    </div>
                </div>
            )}
            {/* 모바일 화면 */}
            {isMobileDevice && (
                <div className="user-info-repo">
                    <li className="user-info-repo__title">
                        <ul>
                            <h2>
                                <a href={repo.url} target="_blank">
                                    {repo.name}
                                </a>
                            </h2>
                            <span>{repo.fullName}</span>
                        </ul>
                        <ul>
                            <p className="user-info-repo__owner">
                                <label>Owner</label>
                                <span>{repo.owner}</span>
                            </p>
                        </ul>
                        <ul>
                            <p className="user-info-repo__langauge">
                                <label>Language</label>
                                <span>{repo.repLanguage || '-'}</span>
                            </p>
                        </ul>
                        <ul>
                            <p className="user-info-repo__commits">
                                <label>Contribution</label>
                                <span>{repo.contributionCnt}</span>
                            </p>
                        </ul>
                        <ul>
                            <p className="user-info-repo__stars">
                                <label>Stars</label>
                                <span>{repo.starCnt}</span>
                            </p>
                            {repo.organizationName && (
                                <p className="user-info-repo__organization">
                                    <label>Organization</label>
                                    <span>{repo.organizationName}</span>
                                </p>
                            )}
                        </ul>
                    </li>
                </div>
            )}
        </>
    );
};

export default React.memo(RepoCard);
