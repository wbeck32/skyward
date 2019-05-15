import React from 'react';
import Menu from './components/Menu'
import Items from './components/Items'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
      </header>
      <Items />
    </div>
  );
}

export default App;
