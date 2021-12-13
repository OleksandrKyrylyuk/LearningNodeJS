export enum IGetAllUsersActionTypes {
  GET_ALL_USERS = "GET_ALL_USERS",
} 

export interface Response {
  data: IUserData[],
  status: number
}

export interface IGetAllUsersAction {
  type: IGetAllUsersActionTypes.GET_ALL_USERS;
  payload: Array<IUserData>;
}

export interface IGetUsersState {	
	data: IUserData[]
}

export interface IUserData {
  Id: number;
  Name: string;
  Surname: string;
  Role: string;
}



export type IGetUsersActions = IGetAllUsersAction;