import * as GetUsersActionsCreators from "../components/admin/CRUD/action"
import * as AddUserActionsCreators from "../components/admin/CRUD/addUser/action"
import * as EditUserActionCreator from "../components/admin/CRUD/userEdit/action"
const actions = {
  ...GetUsersActionsCreators,
  ...AddUserActionsCreators,
  ...EditUserActionCreator,
};

export default actions;
