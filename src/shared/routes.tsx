import SearchUser from "../Pages/SearchUser/SearchUser";
import React from "react";
import UserDetails from "../Pages/UserDetails/UserDetails";
import {Navigate} from "react-router-dom";

export const ROUTES = {
    root: '/',
    usersSearch: '/users',
    userDetails: '/users/:username',
}

export type Route = {
    path: string;
    component?: React.ReactNode;
    exact: boolean;
}

export const routes: Route[] = [
    {
        path: ROUTES.root,
        component: <Navigate replace to={ROUTES.usersSearch}/>,
        exact: true
    },
    {
        path: ROUTES.usersSearch,
        component: <SearchUser/>,
        exact: true
    },
    {
        path: ROUTES.userDetails,
        component: <UserDetails/>,
        exact: true
    }
]