declare enum E_USER_STATUS {
    NONE = 'none',
    COMPLETED = 'completed',
    WAITING = 'wating',
    UPDATING = 'updating',
    FAIL = 'fail'
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
    SCSS = 'SCSS'
}

declare interface I_API_USER {
    id: number;
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
    organizations: I_API_ORGANIZTION[];
    repositories: I_API_REPOSITORY[];
    name: string;
    languages: string[];
}

declare interface I_API_ORGANIZTION {
    id: number;
    name: string;
    description: string;
    logo: string; // url
}

declare interface I_API_REPOSITORY {
    id: number;
    contribution: number;
    name: string;
    full_name: string;
    owner: string;
    organization: string;
    rep_language: string; // 대표언어
    languages: E_LANGUAGE[];
    stargazers_count: number;
}

declare class User {
    _id: number;
    _created: string;
    _updated: string;
    _username: string;
    _avatar_url: string; // url
    _total_contribution: number;
    _total_stargazers_count: number;
    _company: string;
    _bio: string; // 자기소개
    _blog: string; // url
    _public_repos: number;
    _followers: number;
    _following: number;
    _status: E_USER_STATUS;
    _organizations: I_API_ORGANIZTION[];
    _repositories: I_API_REPOSITORY[];
    _name: string;
    _languages: string[];

    constructor(user?: I_API_USER)
    get desc(): string
    get company(): string
    get created(): string
    get followersCnt(): number
    get followingCnt(): number
    get id(): number
    get organizations(): Organization[]
    get repositories(): Repository[]
    get repositoriesCnt(): number
    get profileImgUrl(): string
    get publicReposCnt(): number
    get totalContributionCnt(): number
    get updated(): string
    get username(): string
    get totalStarCnt(): number
    get name(): string
    get githubUrl(): string
}

declare class Organization {
    _id: number;
    _name: string;
    _description: string;
    _logo: string; // url

    constructor(organization: I_API_ORGANIZTION)

    get id(): number
    get name(): string
    get description(): string
    get logoUrl(): string
}

declare class Repository {
    _id: number;
    _contribution: number;
    _name: string;
    _full_name: string;
    _owner: string;
    _organization: string;
    _rep_language: string; // 대표언어
    _languages: E_LANGUAGE[];
    _stargazers_count: number;
    _user_github_id: string;

    constructor(repo?: I_API_REPOSITORY, userGithubId?: string)

    get contributionCnt(): number
    get fullName(): string
    get owner(): string
    get id(): number
    get name(): string
    get organizationName(): string
    get languages(): string[]
    get repLanguage(): string
    get url(): string
    get starCnt(): number
}

