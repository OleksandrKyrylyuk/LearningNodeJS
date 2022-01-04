export enum IUsersActionTypes {
  GET_ALL_USERS = "GET_ALL_USERS",
  GET_USER_BY_ID = "GET_USER_BY_ID",
  DELETE_USER_BY_ID = "DELETE_USER_BY_ID",
} 

export interface Response {
  data: IUserData[],
  status: number
}

export interface IGetAllUsersAction {
  type: IUsersActionTypes.GET_ALL_USERS;
  payload: Array<IUserData>;
}

export interface IGetUserByIdAction {
  type: IUsersActionTypes.GET_USER_BY_ID;
  payload: IUserData;
}
export interface IDeleteUserByIdAction {
  type: IUsersActionTypes.DELETE_USER_BY_ID;
  payload: number;
}

export interface IGetUsersState {	
	data: IUserData[],
  info: IUserData
}

export interface IUserData {
  id: number | undefined,
  Name: string;
  Surname: string;
  Email: string
}

export interface DelResponse {
  message: string
}

export type IUsersActions =
  | IGetAllUsersAction
  | IGetUserByIdAction
  | IDeleteUserByIdAction;