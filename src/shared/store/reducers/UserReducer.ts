import {UserAction} from "../actions";
import {UserTypes} from "../constants";
import {IUserDetails, IUserList, IUserRepository, userDetailsInitialize, userListInitialize} from "../../models/User";

export interface IUserState {
    userList: IUserList;
    userDetails: IUserDetails;
    userRepositories:IUserRepository[];
    searchKey: string;
    page: number;

}

export const initialUserState: IUserState = {
    userList: userListInitialize,
    userDetails: userDetailsInitialize,
    userRepositories:[],
    searchKey: '',
    page: 1
};


export const userReducer = (state: IUserState = initialUserState, action: UserAction): IUserState => {
    switch (action.type) {
        case UserTypes.USER_SEARCH_SUCCESS:
            return {
                ...state,
                userList: {...action.payload}
            };
        case UserTypes.USER_DETAILS_SUCCESS:
            return {
                ...state,
                userDetails: {...action.payload}
            };
        case UserTypes.USER_SEARCH_ERROR:
            return {
                ...state,
                userList: {...action.payload.userListInitialize}
            };
        case UserTypes.USER_REPOSITORIES_SUCCESS:
            return {
                ...state,
                userRepositories: [...action.payload]
            };
        case UserTypes.SEARCH_KEY:
            return {
                ...state,
                searchKey: action.payload
            };
        case UserTypes.PAGE_NUMBER:
            return {
                ...state,
                page: action.payload
            };
        default:
            return state;
    }
};