import { Dispatch } from 'react';
import { AddUserData, AddUserAction, AddUserResponse } from './types';
import http from "../../http"
import axios, { AxiosError } from 'axios';

export const AddUser = (data: AddUserData) => {
	return async (dispatch: Dispatch<AddUserAction>) => {
		try {
			const response = await http.post<AddUserResponse>("/api/users", data);
			
		} catch (error) {

			if (axios.isAxiosError(error)) {
				const serverError = error as AxiosError<AddUserResponse>;
				if (serverError && serverError.response) {
				const { message } = serverError.response.data;
				return Promise.reject(message);
				}
			}
		}
	}
};