export type I_API_GET_RANK_RES = {
    next: null | string;
    previous: null | string;
    results: I_API_RANK[];
};

export interface I_API_RANK {
    id: number;
    ranking: number;
    score: number;
    github_user: I_API_GITHUB_USER;
}

export interface I_API_GITHUB_USER {
    id: number;
    username: string;
    avatar_url: string; // url
}
