export interface I_RANK {
    "id": number;
    "ranking": number;
    "score": number;
    "github_user": I_GITHUB_USER;
}

export enum E_RANK_TYPE {
    CONTRIBUTION ='total_contribution',
    FOLLOWERS = 'followers',
    FOLLOWINGS = 'following',
    CONTINUOUS_COMMIT_DAY= 'continuous_commit_day',
    LANGUAGE = 'lang'
}

export enum E_LANGUAGE {
    JS = 'javascript',
    PYTHON = 'Python'
}

export interface I_GITHUB_USER {
    id: number;
    username: string;
    avatar_url: string; // url
}