interface IUser {
    bio: string;
    blog: string;
    company: string;
    created: string;
    followers: number;
    following: number;
    id: number;
    organizations: IOrganization[];
    profile_image: string;
    public_repos: number;
    rank: number;
    repositories: IRepository[];
    status: number;
    total_contribution: number;
    updated: string;
    username: string;
}

interface IRepository {
    contribution: number;
    created: string;
    full_name: string;
    github_user: number;
    id: number;
    language: string;
    name: string;
    organization: string;
    owner: string;
    updated: string;
}

interface IOrganization {
    created: string;
    description: "";
    id: number;
    logo: string;
    name: string;
    updated: string;
}

declare class User {
    _bio: string;
    _blog: string;
    _company: string;
    _created: string;
    _followers: number;
    _following: number;
    _id: number;
    _organizations: IOrganization[];
    _profile_image: string;
    _public_repos: number;
    _rank: number;
    _repositories: IRepository[];
    _status: number;
    _total_contribution: number;
    _updated: string;
    _username: string;

    get desc (): string;
    get company (): string;
    get created (): string;
    get followersCnt (): number;
    get followingCnt (): number;
    get id (): number;
    get organizations (): IOrganization[];
    get repositories (): IRepository[];
    get repositoriesCnt (): number;
    get profileImgUrl (): string;
    get publicReposCnt (): number;
    get contirbutionCnt (): number;
    get updated (): string;
    get username (): string;
}