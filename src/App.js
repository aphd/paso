import React from 'react';
import './App.css';
import Home from "./components/home";
import parse from 'solidity-parser-antlr/dist';

function App() {
  
window.parse = parse;
  return (
    <Home />
  );
}

export default App;
