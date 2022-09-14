import { combineEpics } from "redux-observable";

import userEpic from "./UserEpic";

const epics = combineEpics(...userEpic);

export default epics;
