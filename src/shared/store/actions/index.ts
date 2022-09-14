import {UserTypes} from "../constants";
import {Action} from 'redux';
import {IUser, IUserDetails, IUserList, IUserRepository, userListInitialize} from "../../models/User";


export interface IUserSearchGetAction extends Action {
    type: UserTypes.USER_SEARCH,
    payload: { searchKey: string, page: number, perPage: number }
}


export interface IUserSearchSuccessAction extends Action {
    type: UserTypes.USER_SEARCH_SUCCESS,
    payload: IUserList
}

export interface IUserSearchErrorAction extends Action {
    type: UserTypes.USER_SEARCH_ERROR,
    payload: {
        error: any,
        userListInitialize: IUserList
    }
}


export interface IUserDetailsGetAction extends Action {
    type: UserTypes.USER_DETAILS,
    payload: string
}

export interface IUserDetailsSuccessAction extends Action {
    type: UserTypes.USER_DETAILS_SUCCESS,
    payload: any
}

export interface IUserDetailsErrorAction extends Action {
    type: UserTypes.USER_DETAILS_ERROR,
    payload: any
}

export interface IUserRepositoriesGetAction extends Action {
    type: UserTypes.USER_REPOSITORIES,
    payload: { username: string, page: number, perPage: number }
}

export interface IUserRepositoriesSuccessAction extends Action {
    type: UserTypes.USER_REPOSITORIES_SUCCESS,
    payload: any
}

export interface IUserRepositoriesErrorAction extends Action {
    type: UserTypes.USER_REPOSITORIES_ERROR,
    payload: any
}

export interface ISearchKeyAction extends Action {
    type: UserTypes.SEARCH_KEY,
    payload: string
}

export interface IPageNumberAction extends Action {
    type: UserTypes.PAGE_NUMBER,
    payload: number
}


export const userSearchGet = (searchKey: string, page: number, perPage: number): IUserSearchGetAction => {
    return {
        type: UserTypes.USER_SEARCH,
        payload: {
            searchKey,
            page,
            perPage
        }
    }
}

export const userSearchSuccess = (userList: IUserList): IUserSearchSuccessAction => {
    return {
        type: UserTypes.USER_SEARCH_SUCCESS,
        payload: userList
    }
}

export const userSearchError = (error: any, userListInitialize: IUserList): IUserSearchErrorAction => {
    return {
        type: UserTypes.USER_SEARCH_ERROR,
        payload: {error, userListInitialize}
    }
}

export const userDetailsGet = (userId: string): IUserDetailsGetAction => {
    return {
        type: UserTypes.USER_DETAILS,
        payload: userId
    }
}

export const userDetailsSuccess = (user: IUserDetails): IUserDetailsSuccessAction => {
    return {
        type: UserTypes.USER_DETAILS_SUCCESS,
        payload: user
    }
}

export const userDetailsError = (error: any): IUserDetailsErrorAction => {
    return {
        type: UserTypes.USER_DETAILS_ERROR,
        payload: error
    }
}

export const userRepositoriesGet = (username: string, page: number, perPage: number): IUserRepositoriesGetAction => {
    return {
        type: UserTypes.USER_REPOSITORIES,
        payload: {
            username,
            page,
            perPage
        }
    }
}

export const userRepositoriesSuccess = (repositories: IUserRepository[]): IUserRepositoriesSuccessAction => {
    return {
        type: UserTypes.USER_REPOSITORIES_SUCCESS,
        payload: repositories
    }
}

export const userRepositoriesError = (error: any): IUserRepositoriesErrorAction => {
    return {
        type: UserTypes.USER_REPOSITORIES_ERROR,
        payload: error
    }
}

export const setSearchKey = (searchKey: string): ISearchKeyAction => {
    return {
        type: UserTypes.SEARCH_KEY,
        payload: searchKey
    }
}


export const setPageNumber = (page: number): IPageNumberAction => {
    return {
        type: UserTypes.PAGE_NUMBER,
        payload: page
    }
}


export type UserAction =
    IUserSearchGetAction |
    IUserSearchSuccessAction |
    IUserSearchErrorAction |
    IUserDetailsGetAction |
    IUserDetailsSuccessAction |
    IUserDetailsErrorAction |
    ISearchKeyAction |
    IPageNumberAction |
    IUserRepositoriesGetAction |
    IUserRepositoriesSuccessAction |
    IUserRepositoriesErrorAction;
