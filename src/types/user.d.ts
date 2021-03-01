export interface I_USER {
    id: string;
    created: string;
    updated: string;
    username: string;
    profileImageUrl: string; // url
    totalContributionCnt: number;
    totalStarCnt: number;
    company: string;
    desc: string; // 자기소개
    blogUrl: string; // url
    publicReposCnt: number;
    followersCnt: number;
    followingCnt: number;
    status: E_USER_STATUS;
    organizations: I_ORGANIZTION[];
    repositories: I_REPOSITORY[];
    languages: string[];
}

export interface I_ORGANIZTION {
    id: number;
    name: string;
    description: string;
    logoUrl: string; // url
}

export interface I_REPOSITORY {
    id: number;
    contributionCnt: number;
    name: string;
    fullName: string;
    owner: string;
    organizationName: string;
    repLanguage: string; // 대표언어
    languages: string[];
}

export enum E_USER_STATUS {
    NONE = 'none',
    COMPLETED = 'completed',
    WAITING = 'wating',
    UPDATING = 'updating',
    FAIL = 'fail'
}

export enum E_LANGUAGE {
    JS = 'JavaScript',
    CPP = 'C++',
    HTML = 'HTML',
    CSS = 'CSS',
    VUE = 'Vue',
    PYTHON = 'Python',
    C = 'C',
    JAVA = 'Java',
    SWIFT = 'Swift',
    SCSS = 'SCSS'
}