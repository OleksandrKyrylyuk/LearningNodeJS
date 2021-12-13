import { combineReducers } from "redux";
import { getUsersReducer } from '../components/userList/reducer';

export const rootReducer = combineReducers({
	getUsers: getUsersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
