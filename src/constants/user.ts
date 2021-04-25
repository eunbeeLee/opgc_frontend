import { GITHUB_BASE_URL } from './application';

export enum E_USER_STATUS {
    NONE = 'none',
    COMPLETED = 'completed',
    WAITING = 'wating',
    UPDATING = 'updating',
    FAIL = 'fail',
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
    SCSS = 'SCSS',
}

export class User {
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
    _languages: I_LANGUAGE_INFO[];

    constructor(user?: I_API_USER) {
        if (!user) {
            console.warn('Empty User Data !!!');
            return;
        }

        const keys = Object.keys(user);
        keys.forEach((key) => {
            this[`_${key}`] = user[key];
        });
    }

    get desc(): string {
        return this._bio ?? `Hello! I'm ${this.username}`;
    }
    get company(): string {
        return this._company;
    }
    get created(): string {
        return this._created;
    }
    get followersCnt(): number {
        return this._followers;
    }
    get followingCnt(): number {
        return this._following;
    }
    get id(): number {
        return this._id;
    }
    get organizations(): Organization[] {
        return this._organizations.map((o) => new Organization(o));
    }
    get repositories(): Repository[] {
        return this._repositories.map((r) => new Repository(r, this._username));
    }
    get repositoriesCnt(): number {
        return this._repositories.length;
    }
    get profileImgUrl(): string {
        return this._avatar_url;
    }
    get publicReposCnt(): number {
        return this._public_repos;
    }
    get totalContributionCnt(): number {
        return this._total_contribution;
    }
    get updated(): string {
        const date = new Date(this._updated);

        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();

        const hour = date.getHours();
        const min = date.getMinutes();
        const sec = date.getSeconds();

        return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
    }
    get username(): string {
        return this._username;
    }
    get totalStarCnt(): number {
        return this._total_stargazers_count;
    }
    get name(): string {
        return this._name;
    }
    get githubUrl(): string {
        return `${GITHUB_BASE_URL}/${this._username}`;
    }
    get languages(): I_LANGUAGE_INFO[] {
        return this._languages;
    }
}

export class Organization {
    _id: number;
    _name: string;
    _description: string;
    _logo: string; // url

    constructor(organization: I_API_ORGANIZTION) {
        if (!organization) {
            console.warn('Empty Repository Data !!!');
            return;
        }

        const keys = Object.keys(organization);
        keys.forEach((key) => {
            this[`_${key}`] = organization[key];
        });
    }

    get id(): number {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get description(): string {
        return this._description;
    }
    get logoUrl(): string {
        return this._logo;
    }
}

export class Repository {
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

    constructor(repo?: I_API_REPOSITORY, userGithubId?: string) {
        if (!repo) {
            console.warn('Empty Repository Data !!!');
            return;
        }

        const keys = Object.keys(repo);
        keys.forEach((key) => {
            this[`_${key}`] = repo[key];
        });

        this._user_github_id = userGithubId ?? '';
    }

    get contributionCnt(): number {
        return this._contribution;
    }
    get fullName(): string {
        return this._full_name;
    }
    get owner(): string {
        return this._owner;
    }
    get id(): number {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get organizationName(): string {
        return this._organization;
    }
    get languages(): string[] {
        return this._languages;
    }
    get repLanguage(): string {
        return this._rep_language;
    }
    get url(): string {
        return `${GITHUB_BASE_URL}/${this._user_github_id}/${this._name}`;
    }
    get starCnt(): number {
        return this._stargazers_count;
    }
}
