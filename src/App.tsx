import './App.css';
import React from 'react';
import { GuessedWords } from './components/guessedWords/GuessedWords';
import { Congrats } from './components/congrats/congrats';

const App: React.FC = () => (
  <div className="container">
    <h1>Word Guesser</h1>
    <Congrats success={false} />
    <GuessedWords
      guessedWords={[{ guessedWord: 'train', letterMatchCount: 2 }]}
    />
  </div>
);

export default App;
