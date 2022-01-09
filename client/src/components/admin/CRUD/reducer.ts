import { IUsersActions, IUsersActionTypes, IGetUsersState } from "./types";

const initState:IGetUsersState= {
	data:[],
  info:{
    id:0,
    Name: "",
    Surname: "",
    Email: ""
  }
}

export const getUsersReducer = (state = initState,action: IUsersActions): IGetUsersState => {
  switch (action.type) {
    case IUsersActionTypes.GET_ALL_USERS:
      return { ...state, data: action.payload };

    case IUsersActionTypes.GET_USER_BY_ID:
      return { ...state, info: action.payload };
    case IUsersActionTypes.DELETE_USER_BY_ID:
      return { ...state, data: state.data.filter((el) => el.id !== action.payload) };

    default:
      return state;
  }
};