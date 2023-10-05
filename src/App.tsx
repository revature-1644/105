import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import { Navbar } from './components/Navbar';
import { ListItem } from './components/ListItem';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <LoginPage></LoginPage>
      <ListItem itemNumber={0}></ListItem>
      <ListItem itemNumber={0}></ListItem>
      <ListItem itemNumber={0}></ListItem>
      <ListItem itemNumber={9}></ListItem>
      <ListItem itemNumber={0}></ListItem>
    </div>
  );
}

export default App;
