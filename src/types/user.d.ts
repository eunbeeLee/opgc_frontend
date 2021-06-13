declare enum E_USER_STATUS {
    NONE = 'none',
    COMPLETED = 'completed',
    WAITING = 'wating',
    UPDATING = 'updating',
    FAIL = 'fail',
}

declare enum E_LANGUAGE {
    JS = 'JavaScript',
    CPP = 'C++',
    HTML = 'HTML',
    CSS = 'CSS',
    VUE = 'Vue',
    PYTHON = 'Python',
    C = 'C',
    JAVA = 'Java',
    SWIFT = 'Swift',
    SCSS = 'SCSS',
}

declare enum E_TIER {
    UNRANK = 0,
    BRONZE = 5,
    SILVER = 10,
    GOLD = 15,
    DIAMOND = 20,
    PLATINUM = 25,
    MASTER = 30,
    CHALLENGER = 35,
}

declare enum E_TIER_IMG {
    UNRANK = '/assets/imgs/tier-unrank.png',
    BRONZE = '/assets/imgs/tier-bronze.png',
    SILVER = '/assets/imgs/tier-silver.png',
    GOLD = '/assets/imgs/tier-gold.png',
    DIAMOND = '/assets/imgs/tier-diamond.png',
    PLATINUM = '/assets/imgs/tier-platinum.png',
    MASTER = '/assets/imgs/tier-master.png',
    CHALLENGER = '/assets/imgs/tier-challenger.png',
}

interface I_LANGUAGE_INFO {
    language: E_LANGUAGE;
    number: number;
}

interface I_USER {
    desc: string;
    company: string;
    created: string;
    followersCnt: number;
    followingCnt: number;
    id: number;
    organizations: I_ORGANIZATION[];
    repositories: I_REPOSITORY[];
    repositoriesCnt: number;
    profileImgUrl: string;
    publicReposCnt: number;
    totalContributionCnt: number;
    updated: string;
    username: string;
    totalStarCnt: number;
    name: string;
    githubUrl: string;
    languages: I_LANGUAGE_INFO[];
}

interface I_ORGANIZATION {
    id: number;
    name: string;
    description: string;
    logoUrl: string;
}

interface I_REPOSITORY {
    contributionCnt: number;
    fullName: string;
    owner: string;
    id: number;
    name: string;
    organizationName: string;
    languages: string[];
    repLanguage: string;
    url: string;
    starCnt: number;
}

interface I_TIER {
    id: number;
    rank: number;
    username: string;
    name: string;
    profileImgUrl: string;
    tier: string;
    company: string;
    desc: string;
    continuousCommitDay: number;
}
