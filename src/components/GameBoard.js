import React, { useState,useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import LetterBoard from './LetterBoard';
import WordGuessBoard from './WordGuessBoard';
import GameStatus from './GameStatus';

const GameBoard = ({currentWord}) => {

    const maxWrongGuesses=6;
    
    const currentWordCharArray=currentWord.replace(/ /g,'').split('');
    const [guessedLetters,setGuessedLetters]=useState([]);
    const [corectGuessedLetters,setCorrectGuessedLetters]=useState([]);
    const [gameStatus,setGameStatus]=useState({isOver:false,isWon:false});
    const [currentWrongGuesses,setCurrentWrongGuesses]=useState(0);

    const onLetterGuessed=(characterGuessed)=>{
        let doesWordContaiGuessedLetter=false;
        currentWordCharArray.map((wordCharacter,index)=>{
            if(wordCharacter===characterGuessed){
                setCorrectGuessedLetters([...characterGuessed,characterGuessed]);
                doesWordContaiGuessedLetter=true;
            }
        });
        if(!doesWordContaiGuessedLetter){
            setCurrentWrongGuesses(currentWrongGuesses+1);
        }

        setGuessedLetters([...guessedLetters,characterGuessed]);
    }

    useEffect(()=>{
         const isWordGuessed= currentWordCharArray.every((character)=>(guessedLetters.includes(character)));
         setGameStatus({isOver:isWordGuessed,isWon:isWordGuessed});
    },[guessedLetters]);

    useEffect(()=>{
        if(currentWrongGuesses===maxWrongGuesses){
            setGameStatus({isOver:true,isWon:false});
        }
    },[currentWrongGuesses]);

    return(
    <Grid container justify="center">
        <Grid item md={9} lg={9} xs={12} sm={12}>
            <Grid container spacing={2}>
                <Grid item md={8} xs={12} sm={6} lg={8}>
                    <h1>Guess the Movie</h1>
                    <div className="wordguess-board-container">
                        <WordGuessBoard word={currentWord} guessedLetters={guessedLetters} isGameLost={gameStatus.isOver && !gameStatus.isWon} />
                    </div>
                    <div className="letter-board-container">
                        <LetterBoard onLetterGuessed={onLetterGuessed} guessedLetters={guessedLetters} disableAllCharacters={gameStatus.isOver} />
                    </div>
                </Grid>

                <Grid item md={4} xs={12} sm={6} lg={4}>
                    <div className="game-progress-container">
                        <h4>Game Progress</h4>
                        <div>
                            <GameStatus maxWrongGuesses={maxWrongGuesses} currentWrongGuesses={currentWrongGuesses} isGameWon={gameStatus.isWon} />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
)};

export default GameBoard;