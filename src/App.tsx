import './App.css';
import React from 'react';
import { GuessedWords } from './components/guessedWords/GuessedWords';
import { Congrats } from './components/congrats/congrats';

const App: React.FC = () => (
  <div className="container" data-test="component-app">
    <h1>Word Guesser</h1>
  </div>
);

export default App;
