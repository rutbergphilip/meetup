import React from 'react';
import './App.css';
import { ActiveUser } from './components/ActiveUser/ActiveUser';
import { List } from './components/List/List';
import { seeder } from './database/seeder.database';

seeder();

function App() {
  return (
    <div className='App'>
      <List />
      <ActiveUser />
    </div>
  );
}

export default App;
