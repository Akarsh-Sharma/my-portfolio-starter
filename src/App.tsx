import React from 'react';
import logo from './logo.svg';
import './App.css';
// components
import About from './components/About';


function App() {
  return (
    <div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <About />
    </div>
  );
}

export default App;
