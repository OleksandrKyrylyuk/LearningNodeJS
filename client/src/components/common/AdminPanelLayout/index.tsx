import { Outlet } from "react-router";
import SideBar from '../../admin/CRUD/sidebar';
import UserList from '../../admin/CRUD/UsersList';

const AdminPanelLayout = () => {
  return (
    <>
      <div className="p-grid">
        <div className="p-col-3 mt-5">
          <SideBar />
        </div>
        <div className="p-col-9 mt-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default AdminPanelLayout;
