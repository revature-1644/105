import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import { Navbar } from './components/Navbar';
import { ListItem } from './components/ListItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Landing } from './pages/Landing';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/Login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path = "**" element = {<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
