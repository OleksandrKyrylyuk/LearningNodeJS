import * as GetUsersActionsCreators from "../../src/components/userList/action"
import * as AddUserActionsCreators from "../components/addUser/action"

const actions = {
  ...GetUsersActionsCreators,
  ...AddUserActionsCreators,
};

export default actions;
