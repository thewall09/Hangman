import {useState} from 'react';
import './App.css';
import Words from './data';
import GameBoard from './components/GameBoard';

const getNewWord=()=>{
  let randomWordIndex=Math.floor(Math.random()*10);
  if(randomWordIndex>=Words.length){
      randomWordIndex=Words.length-1;
  }
  let word=Words[randomWordIndex];
  word=word.toUpperCase();
  return word;
}

function App() {
    const word=getNewWord();
    const[chosenWord,setChosenWord]=useState(word);

  return (
    <div className="app">
      <GameBoard currentWord={chosenWord} />
    </div>
  );
}

export default App;
