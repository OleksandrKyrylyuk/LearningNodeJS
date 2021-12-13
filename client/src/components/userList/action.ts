import { Dispatch } from 'react';
import http from '../../http'
import { IGetAllUsersActionTypes, IUserData, IGetUsersActions } from "./types";

export const GetAllUsers = () => async (dispatch: Dispatch<IGetUsersActions>) => {
	try {
		const response = await http.get<Array<IUserData>>("/api/users");
		dispatch({
			type: IGetAllUsersActionTypes.GET_ALL_USERS,
			payload: response.data,
		});
		
	} catch (error) {
		
	}
}