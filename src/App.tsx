import React from 'react';
import './App.css';
import { ActiveUser } from './components/ActiveUserComponent/ActiveUserComponent';
import { ListComponent } from './components/ListComponent/ListComponent';
import { seeder } from './database/seeder.database';

seeder();

function App() {
  return (
    <div className='App'>
      <ListComponent />
      <ActiveUser />
    </div>
  );
}

export default App;
