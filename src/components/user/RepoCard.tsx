import { Repository } from '@/services/user'
import React, { useMemo } from 'react'

interface I_PROPS {
    data: I_REPOSITORY
}

const RepoCard: React.FC<I_PROPS> = ({ data }) => {
    const repo = useMemo<Repository>(() => new Repository(data), [data])
    return (
        <div className="user-info-repo">
            <div className="user-info-repo__title">
                <h2>{repo.name}</h2>
                <span>{repo.desc}</span>
            </div>
            <div className="user-info-repo__detail">
                <p className="user-info-repo__commits">
                    <label>Commits</label>
                    <span>{repo.commitCnt}</span>
                </p>
                <ul className="user-info-repo__langauges">
                    <label>Langauge</label>
                    {repo.languages.map((language, idx) => (
                        <li className="user-info-repo-langauge" key={idx}>
                            <h3>{language}</h3>
                            <div
                                className={`user-info-repo-langauge__color--${language.toLowerCase()}`}
                            ></div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default React.memo(RepoCard)
