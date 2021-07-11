import { GITHUB_BASE_URL } from '@/constants/application';
import { I_API_ORGANIZTION, I_API_REPOSITORY, I_API_USER } from './types';

const getUserUpdateDate = (updateDateStr: string): string => {
    const date = new Date(updateDateStr);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
};

const parseRepository = (
    data: I_API_REPOSITORY,
    userGithubId: string
): I_REPOSITORY => ({
    contributionCnt: data.contribution,
    fullName: data.full_name,
    owner: data.owner,
    id: data.id,
    name: data.name,
    organizationName: data.organization,
    languages: data.languages,
    repLanguage: data.rep_language,
    url: `${GITHUB_BASE_URL}/${userGithubId}/${data.name}`,
    starCnt: data.stargazers_count,
});

const parseOrganization = (data: I_API_ORGANIZTION): I_ORGANIZATION => ({
    id: data.id,
    name: data.name,
    description: data.description,
    logoUrl: data.logo,
});

const parseUser = (data: I_API_USER): I_USER => ({
    desc: data.bio ?? `Hello! I'm ${data.username}`,
    company: data.company,
    created: data.created,
    followersCnt: data.followers,
    followingCnt: data.following,
    id: data.id,
    organizations: data.organizations.map((o) => parseOrganization(o)),
    repositories: data.repositories.map((r) =>
        parseRepository(r, data.username)
    ),
    repositoriesCnt: data.repositories.length,
    profileImgUrl: data.avatar_url,
    publicReposCnt: data.public_repos,
    totalContributionCnt: data.total_contribution,
    updated: getUserUpdateDate(data.updated),
    username: data.username,
    totalStarCnt: data.total_stargazers_count,
    name: data.name,
    githubUrl: `${GITHUB_BASE_URL}/${data.username}`,
    languages: data.languages,
    rank: data.user_rank,
    tier: data.tier,
});

export { parseUser };
