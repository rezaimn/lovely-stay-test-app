import {combineEpics, Epic} from "redux-observable";
import {from, of} from "rxjs";
import {exhaustMap, filter, map, catchError, debounceTime, distinctUntilChanged} from "rxjs/operators";
import {isOfType} from "typesafe-actions";
import {RootState} from "../reducers";
import {actions, ActionsType} from "..";
import {
    getUserDetailsAPI,
    getUserListBySearchKeyAPI, getUserRepositoriesAPI
} from "../../services/userApi";
import {UserTypes} from "../constants";
import {IUserList, IUserRepository, userListInitialize} from "../../models/User";
import {IUserSearchGetAction, userSearchSuccess} from "../actions";

const getUserListEpic: Epic<ActionsType,
    ActionsType,
    RootState> = (
    action$,
) => action$.pipe(
    filter(isOfType(UserTypes.USER_SEARCH)),
    debounceTime(500),
    distinctUntilChanged((previous: IUserSearchGetAction, current: IUserSearchGetAction) => {
        return previous.payload.searchKey === current.payload.searchKey && previous.payload.page === current.payload.page;
    }),
    exhaustMap((action) => {
            return from(getUserListBySearchKeyAPI(`search/users`,
                {
                    q: action.payload.searchKey,
                    page: action.payload.page,
                    per_page: action.payload.perPage
                })).pipe(
                map((res: IUserList) => actions.userSearchSuccess(res)),
                catchError((error) => {
                    return of(actions.userSearchError(error,userListInitialize))
                })
            )
        }
    )
);


const getUserDetailsEpic: Epic<ActionsType, ActionsType, RootState> = (
    action$,
) => action$.pipe(
    filter(isOfType(UserTypes.USER_DETAILS)),
    exhaustMap((action) =>
        from(getUserDetailsAPI(`users/${action.payload}`)).pipe(
            map((res) => actions.userDetailsSuccess(res)),
            catchError((error) => of(actions.userDetailsError(error)))
        )
    )
);

const getUserRepositoriesEpic: Epic<ActionsType,
    ActionsType,
    RootState> = (
    action$,
) => action$.pipe(
    filter(isOfType(UserTypes.USER_REPOSITORIES)),
    exhaustMap((action) => {
            return from(getUserRepositoriesAPI(`users/${action.payload.username}/repos`,
                {
                    page: action.payload.page,
                    per_page: action.payload.perPage
                })).pipe(
                map((res: IUserRepository[]) => actions.userRepositoriesSuccess(res.map((repo: any) => {
                    const newRepo: IUserRepository = {
                        name: repo.name,
                        description: repo.description
                    }
                    return newRepo;
                }))),
                catchError((error) => of(actions.userRepositoriesError(error)))
            )
        }
    )
);

export default [getUserListEpic, getUserDetailsEpic, getUserRepositoriesEpic];
