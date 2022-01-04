import { combineReducers } from "redux";
import { getUsersReducer } from '../components/admin/CRUD/reducer';
import { addUserReducer } from '../components/admin/CRUD/addUser/reducer'

export const rootReducer = combineReducers({
	getUsers: getUsersReducer,
	addUser: addUserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
