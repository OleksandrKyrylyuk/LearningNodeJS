import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserList from './components/userList';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />}/>

    </Routes>
  )
}

export default App;
