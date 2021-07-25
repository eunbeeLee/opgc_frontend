import { GITHUB_BASE_URL } from '@/constants/application';
import { I_API_ORGANIZTION, I_API_REPOSITORY, I_API_USER } from './types';
import { format } from 'date-fns';

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
    url: `${GITHUB_BASE_URL}/${data.full_name}`,
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
    updated: format(new Date(data.updated), 'yyyy-MM-dd hh:mm:ss'),
    username: data.username,
    totalStarCnt: data.total_stargazers_count,
    name: data.name,
    githubUrl: `${GITHUB_BASE_URL}/${data.username}`,
    languages: data.languages,
    rank: data.user_rank,
    tier: data.tier,
});

export { parseUser };
