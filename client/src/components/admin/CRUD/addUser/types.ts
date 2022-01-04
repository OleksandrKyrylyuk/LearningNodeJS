

export interface AddUserData {
  Name: string;
  Surname: string;
  Email: string;
  Password:string;
}

export interface AddUserState  {
	loading: boolean
}

export interface AddUserResponse {
	status: number,
	message: string
}

export enum AddUserActionsTypes {
  ADD_USER = "ADD_USER",
  ADD_USER_SUCCSSES = "ADD_USER_SUCCSSES",
  ADD_USER_ERROR = "ADD_USER_ERROR",
};

export interface AddUserAction {
  type: AddUserActionsTypes.ADD_USER
}

export interface AddUserSuccessAction {
  type: AddUserActionsTypes.ADD_USER_SUCCSSES;
}

export interface AddUserErrorAction {
  type: AddUserActionsTypes.ADD_USER_ERROR;
}

export type AddUserActions = AddUserAction | AddUserSuccessAction | AddUserErrorAction;