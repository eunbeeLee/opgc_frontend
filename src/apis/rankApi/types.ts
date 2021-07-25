export type I_API_GET_RANK_RES = {
    next: null | string;
    previous: null | string;
    results: I_API_RANK[];
};

export type I_API_GET_RANKS_OVERALL = {
    next: null | string;
    previous: null | string;
    results: I_API_RANK_USER[];
};

export interface I_API_RANK {
    id: number;
    ranking: number;
    score: number;
    github_user: I_API_GITHUB_USER;
}

export interface I_API_RANK_USER {
    id: number;
    username: string;
    name: string;
    avatar_url: string;
    tier: string;
    user_rank: number;
    company: string;
    bio: string | null;
    continuous_commit_day: number;
    total_score: number;
    following: number;
    followers: number;
    total_contribution: number;
}

export interface I_API_GITHUB_USER {
    id: number;
    username: string;
    avatar_url: string; // url
}
