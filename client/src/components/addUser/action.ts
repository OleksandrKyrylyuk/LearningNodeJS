import { Dispatch } from 'react';
import { AddUserData, AddUserAction, AddUserResponse } from './types';
import http from "../../http"

export const AddUser = (data: AddUserData) => {
	return async (dispatch: Dispatch<AddUserAction>) => {
		try {
			const response = await http.post<AddUserResponse>("/api/users", data);
			console.log(response.status);
			
		} catch (error) {
			console.log(error);
			
		}
	}
};