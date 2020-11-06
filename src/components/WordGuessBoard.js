import { Box } from '@material-ui/core';
import LetterPlaceHolder from './LetterPlaceHolder';

const WordGuessBoard = ({ word, guessedLetters,isGameLost }) => {
    const wordCharacters = [...word];
    return (
        <div className="letter-placeholder-container">
            {
                wordCharacters.map((character,index) => {
                    let characterToDisplay='-';
                    if(isGameLost){
                        characterToDisplay=character;
                    }else{
                        characterToDisplay= character!=' '? '-':'';
                    }
                    if(guessedLetters.indexOf(character)>-1){
                        characterToDisplay=character;
                    }
                    return(
                        <LetterPlaceHolder character={characterToDisplay} key={"guess_"+index} />
                    )
                })
            }
        </div>
    )
}

export default WordGuessBoard