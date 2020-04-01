import React from 'react';
import logo from './logo.svg';
import './App.css';


import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

function App() {
  return (
    
    <div className="App">
      <h1 className="header-title">Lotto Jotto App</h1>
     <Congrats success={true} />
     <GuessedWords guessedWords={[
       {guessedWord: 'train', letterMatchCount: 3},
       {guessedWord: 'train', letterMatchCount: 3}
     ]} />
    </div>
  );
}

export default App;
