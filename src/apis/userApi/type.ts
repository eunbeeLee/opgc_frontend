import { E_LANGUAGE, E_USER_STATUS } from "@/types/user";

export interface I_USER {
    id: string;
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
    organizations: I_ORGANIZTION[];
    repositories: I_REPOSITORY[];
    name: string;
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
    languages: E_LANGUAGE[];
}