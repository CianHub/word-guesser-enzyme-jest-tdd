import './App.css';
import React, { Component } from 'react';
import { GuessedWords } from './components/guessedWords/GuessedWords';
import { Congrats } from './components/congrats/congrats';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Word Guesser</h1>
        <Congrats success={false} />
        <GuessedWords
          guessedWords={[{ guessedWord: 'train', letterMatchCount: 2 }]}
        />
      </div>
    );
  }
}

export default App;
