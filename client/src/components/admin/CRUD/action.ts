import { Dispatch } from 'react';
import http from '../../../http'
import { IUsersActionTypes, IUserData, IUsersActions, DelResponse } from "./types";

export const GetAllUsers = () => async (dispatch: Dispatch<IUsersActions>) => {
	try {
		const response = await http.get<Array<IUserData>>("/api/users");
		dispatch({
      type: IUsersActionTypes.GET_ALL_USERS,
      payload: response.data,
    });
		
	} catch (error) {
		
	}
}

export const GetUserById =
  (id:number) => async (dispatch: Dispatch<IUsersActions>) => {
    try {
      const response = await http.get<IUserData>(`/api/users/${id}`);
	  dispatch({
      type: IUsersActionTypes.GET_USER_BY_ID,
      payload: response.data,
    });
		
    } catch (error) {
		
	}
  };
  
export const DeleteUserById =
  (id: number) => async (dispatch: Dispatch<IUsersActions>) => {
    try {
      const response = await http.delete<DelResponse>(`/api/users/delete/${id}`);
      dispatch({
        type: IUsersActionTypes.DELETE_USER_BY_ID,
        payload: id
      });
    } catch (error) {}
  };
  