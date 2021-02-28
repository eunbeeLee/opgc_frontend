export interface I_USER {
    id: string;
    created: string;
    updated: string;
    username: string;
    profile_image: string; // url
    total_contribution: number;
    total_stargazers_count: number;
    company: string;
    bio: string; // 자기소개
    blog: string; // url
    public_repos: number;
    followers: number;
    following: number;
    status: E_STATUS;
    organizations: I_ORGANIZTION[];
    repositories: I_REPOSITORY[];
    languages: string[];
}

export interface I_ORGANIZTION {
    id: number;
    name: string;
    description: string;
    logo: string; // url
}

export interface I_REPOSITORY {
    id: number;
    contribution: number;
    name: string;
    full_name: string;
    owner: string;
    organization: string;
    rep_language: string; // 대표언어
    languages: string;
}

export enum E_STATUS {
    NONE = 'none',
    COMPLETED = 'completed',
    WAITING = 'wating',
    UPDATING = 'updating',
    FAIL = 'fail'
}