import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import DefaultLayout from './components/common/DefaultLayout/DefaultLayout';
import AddUser from './components/admin/CRUD/addUser/index';
import AdminPanelLayout from './components/common/AdminPanelLayout';
import UserList from './components/admin/CRUD/UsersList';
import UserEdit from './components/admin/CRUD/userEdit';
const App = () => {

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<AdminPanelLayout />}>
          <Route index element={<UserList />} />
          <Route path="/dashboard/addUser" element={<AddUser />} />
          <Route path="/dashboard/editUser/:id" element={<UserEdit />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
