interface I_RANK {
    id: number;
    rank: number;
    score: number;
    username: string;
    profileImageUrl: string;
}

interface I_RANK_USER {
    id: number;
    rank: number;
    score: number;
    githubId: string;
    username: string;
    profileImageUrl: string;
    tier: string;
}
