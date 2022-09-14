export interface IUser {
    avatar_url: string;
    id: number;
    login: string;
    repos_url: string;
    url: string;
}

export interface IUserList {
    incomplete_results: boolean;
    items: IUser[];
    total_count: number;
}

export interface IUserDetails extends IUser {
    bio: string;
    company: string;
    email: string;
    followers: number;
    following: number;
    location: string;
    name: string;
    public_repos: number;
}

export interface IUserRepository {
    name: string;
    description: string;
}


export const userListInitialize: IUserList = {
    items: [],
    incomplete_results: false,
    total_count: 0,
}

export const userDetailsInitialize: IUserDetails = {
    url: '',
    login: '',
    bio: '',
    id: 0,
    avatar_url: '',
    company: '',
    email: '',
    followers: 0,
    following: 0,
    name: '',
    location: '',
    public_repos: 0,
    repos_url: ''
}


export const userRepositoryInitialize: IUserRepository = {
    name: '',
    description: ''
}
