import { useState } from 'react';
import Letter from "./Letter";

const LetterBoard = ({guessedLetters,onLetterGuessed,disableAllCharacters}) => {
    const letters = [];
    for (let i = 65; i <= 90; i++) {
        const letter=String.fromCharCode(i);
        letters.push({
            value:letter,
            isUsed:disableAllCharacters || guessedLetters.indexOf(letter)>-1
        });
    }

    const onLetterPressed=(letter)=>{
        console.log('leter '+ letter);
        onLetterGuessed(letter);
    };

    return (
        letters.map((letter) => (
            <Letter character={letter.value} disabled={letter.isUsed} key={letter.value} onLetterPressed={onLetterPressed} />
        ))
    );
}

export default LetterBoard;