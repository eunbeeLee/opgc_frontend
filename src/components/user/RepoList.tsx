import React from 'react';
import RepoCard from './RepoCard';

interface IProps {
    repos: IRepository[];
}

const RepoList: React.FC<IProps> = ({ repos }) => {
    return (
        <>
            <h1>Repositories</h1>
            <div className="user-info__repos">
                {
                    repos.map(repo => (
                        <RepoCard repo={repo} key={repo.id}/>
                    ))
                }
            </div>
        </>
    )
};

export default React.memo(RepoList);