interface I_USER {
    bio: string
    blog: string
    company: string
    created: string
    followers: number
    following: number
    id: number
    organizations: I_ORGANIZATION[]
    profile_image: string
    public_repos: number
    rank: number
    repositories: I_REPOSITORY[]
    status: number
    total_contribution: number
    updated: string
    username: string
}

interface I_REPOSITORY {
    contribution: number
    created: string
    full_name: string
    github_user: number
    id: number
    language: string
    name: string
    organization: string
    owner: string
    updated: string
}

interface I_ORGANIZATION {
    created: string
    description: ''
    id: number
    logo: string
    name: string
    updated: string
}
