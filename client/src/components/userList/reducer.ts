import {  IGetAllUsersAction , IGetAllUsersActionTypes, IGetUsersState } from './types';

const initState:IGetUsersState= {
	data:[]
}

export const getUsersReducer = ( state = initState, action:IGetAllUsersAction):IGetUsersState => {
	switch (action.type) {
    case IGetAllUsersActionTypes.GET_ALL_USERS: 
		return {...state, data: action.payload}
    default:
     return state
  }
}