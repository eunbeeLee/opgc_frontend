export type T_RANKS = I_RANK[];

export interface I_RANK {
    "id": number;
    "ranking": number;
    "score": number;
    "github_user": string;
}

export enum E_RANK_TYPE {
    CONTRIBUTION ='total_contribution',
    FOLLOWERS = 'followers',
    FOLLOWINGS = 'following',
    LANGUAGE = 'lang'
}

export enum E_LANGUAGE {
    JS = 'javascript',
    PYTHON = 'Python'
}