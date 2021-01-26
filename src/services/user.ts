export class User {
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

    constructor (user?: IUser) {
        this._bio = user?.bio ?? '';
        this._blog = user?.blog ?? '';
        this._company = user?.company ?? '';
        this._created = user?.created ?? '';
        this._followers = user?.followers ?? 0;
        this._following = user?.following ?? 0;
        this._id = user?.id ?? 0;
        this._organizations = user?.organizations ?? [];
        this._profile_image = user?.profile_image ?? '';
        this._public_repos = user?.public_repos ?? 0;
        this._rank = user?.rank ?? -1;
        this._repositories = user?.repositories ?? [];
        this._status = user?.status ?? -1;
        this._total_contribution = user?.total_contribution ?? 0;
        this._updated = user?.updated ?? '';
        this._username = user?.username ?? '';
    }

    get desc (): string { return this._bio ?? `Hello! I\'m ${this.username}` }
    get company (): string { return this._company }
    get created (): string { return this._created }
    get followersCnt (): number { return this._followers }
    get followingCnt (): number { return this._following }
    get id (): number { return this._id }
    get organizations (): IOrganization[] { return this._organizations }
    get repositories (): IRepository[] { return this._repositories }
    get repositoriesCnt (): number { return this._repositories.length }
    get profileImgUrl (): string { return this._profile_image }
    get publicReposCnt (): number { return this._public_repos }
    get contirbutionCnt (): number { return this._total_contribution }
    get updated (): string { return this._updated }
    get username (): string { return this._username }
}

export class Repository {
    _contribution: number;
    _created: string;
    _full_name: string;
    _github_user: number;
    _id: number;
    _language: string;
    _name: string;
    _organization: string;
    _owner: string;
    _updated: string;

    constructor(repo: IRepository) {
        this._contribution = repo.contribution;
        this._created = repo.created;
        this._full_name = repo.full_name;
        this._github_user = repo.github_user;
        this._id = repo.id;
        this._language = repo.language;
        this._name = repo.name;
        this._organization = repo.organization;
        this._owner = repo.owner;
        this._updated = repo.updated;
    };

    get contribution (): number { return this._contribution; }
    get created () : string { return this._created; }
    get fullName () : string { return this._full_name; }
    get githubUser (): number { return this.githubUser; }
    get id (): number { return this._id;};
    get name (): string { return this._name };
    get organization (): string { return this._organization; }
    get owner(): string { return this._owner; }
    get updated(): string { return this._updated; }

    /**
     * 조율이 필요한 항목들
     */
    get languages (): string[] { return [ this._language ]; } // 빈도순으로 최대 3개까지 내려주기 
    get commitCnt (): number { return 10; }
    get desc (): string { return `This is ${this.name} Repository`; } //어떤 값을 줄지 조율
}