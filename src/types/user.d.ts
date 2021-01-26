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