import { combineReducers } from "redux";
import { getUsersReducer } from '../components/userList/reducer';
import { addUserReducer } from '../components/addUser/reducer'

export const rootReducer = combineReducers({
	getUsers: getUsersReducer,
	addUser: addUserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
