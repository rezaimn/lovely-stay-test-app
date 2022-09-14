import { combineReducers } from "redux";

import { userReducer, IUserState } from "./UserReducer";

export type RootState = {
  user: IUserState;
};

const reducers = combineReducers({
  user: userReducer,
});

export default reducers;
