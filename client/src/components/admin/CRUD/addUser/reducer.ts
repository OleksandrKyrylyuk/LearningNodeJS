import { AddUserActions, AddUserActionsTypes, AddUserState } from './types'


const initState:AddUserState = {
	loading:false
}

export const addUserReducer = (state = initState, action: AddUserActions) => {
	switch (action.type) {

    case AddUserActionsTypes.ADD_USER:
      return { ...state, loading: true };
    default:
      return state;
  }
}