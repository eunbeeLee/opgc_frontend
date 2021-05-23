export interface I_RANK {
    id: number;
    rank: number;
    score: number;
    username: string;
    profileImageUrl: string;
}

export interface I_TIER_RANK {
    id: number;
    username: string;
    name: string;
    profileImageUrl: string;
    tier: string;
    company: string;
    desc: string;
    continuousCommit: number;
}
