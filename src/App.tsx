import React from 'react';
import './App.css';
import { ListComponent } from './components/ListComponent/ListComponent';
import { seeder } from './models/storage/seeder.storage';
seeder();

function App() {
  return (
    <div className='App'>
      <ListComponent />
    </div>
  );
}

export default App;
