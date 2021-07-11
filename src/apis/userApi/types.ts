export type I_API_GET_USER_RES = I_API_USER;

export interface I_API_GET_USERS_TIER_RES {
    next?: string | null;
    previous?: string | null;
    results: I_API_TIER[];
}

export interface I_API_USER {
    id: number;
    created: string;
    updated: string;
    username: string;
    avatar_url: string; // url
    total_contribution: number;
    total_stargazers_count: number;
    company: string;
    bio: string; // 자기소개
    blog: string; // url
    public_repos: number;
    followers: number;
    following: number;
    status: E_USER_STATUS;
    organizations: I_API_ORGANIZTION[];
    repositories: I_API_REPOSITORY[];
    name: string;
    languages: I_LANGUAGE_INFO[];
    user_rank: number;
    tier: string;
}

export interface I_API_ORGANIZTION {
    id: number;
    name: string;
    description: string;
    logo: string; // url
}

export interface I_API_REPOSITORY {
    id: number;
    contribution: number;
    name: string;
    full_name: string;
    owner: string;
    organization: string;
    rep_language: string; // 대표언어
    languages: E_LANGUAGE[];
    stargazers_count: number;
}

export interface I_API_TIER {
    id: number;
    username: string;
    name: string;
    avatar_url: string;
    tier: string;
    company: string;
    bio: string;
    continuous_commit_day: number;
}
