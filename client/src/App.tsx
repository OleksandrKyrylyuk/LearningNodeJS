import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import DefaultLayout from './components/common/DefaultLayout/DefaultLayout';
import AddUser from './components/addUser';
import UserList from './components/userList';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<AddUser />} />
        <Route path="/userList" element={<UserList />}/>
      </Route>
    </Routes>
  );
}

export default App;
