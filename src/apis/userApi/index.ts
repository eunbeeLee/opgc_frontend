import axios from '@/libs/axios';
import { I_USER } from '@/types/user';
import { I_USER as I_API_USER } from './type';

export async function getUser(username: string): Promise<I_USER> {
    const { data: user } = await axios.get<I_API_USER>(`/githubs/users/${username}/`);

    return {
        id: user.id,
        created: user.created,
        updated: user.updated,
        username: user.username,
        profileImageUrl: user.avatar_url, // url
        totalContributionCnt: user.total_contribution,
        totalStarCnt: user.total_stargazers_count,
        company: user.company,
        desc: user.bio, // 자기소개
        blogUrl: user.blog, // url
        publicReposCnt: user.public_repos,
        followersCnt: user.followers,
        followingCnt: user.following,
        status: user.status,
        organizations: user.organizations.map(o => ({
            id: o.id,
            name: o.name,
            description: o.description,
            logoUrl: o.logo
        })),
        repositories: user.repositories.map(r => ({
            id: r.id,
            contributionCnt: r.contribution,
            name: r.name,
            fullName: r.full_name,
            owner: r.owner,
            organizationName: r.organization,
            repLanguage: r.rep_language,// 대표언어
            languages: r.languages || []
        })),
        languages: user.languages,
        githubUrl: `https://github.com/${user.username}`,
        name: user.name,
    }
}
