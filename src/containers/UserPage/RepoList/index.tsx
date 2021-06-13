import React from 'react';
import RepoCard from '../RepoCard';
import './style.css';

interface I_PROPS {
    repos: I_REPOSITORY[];
}

const RepoList: React.FC<I_PROPS> = ({ repos }) => {
    return (
        <div className="user-info__repos">
            {repos.map((repo) => (
                <RepoCard data={repo} key={repo.id} />
            ))}
        </div>
    );
};

export default React.memo(RepoList);
