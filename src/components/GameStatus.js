import Alert from '@material-ui/lab/Alert';

const GameStatus=({maxWrongGuesses,currentWrongGuesses,isGameWon})=>{

    const remainingGuesses=maxWrongGuesses-currentWrongGuesses;

    const renderGameWinStatus=()=>{
        if(remainingGuesses==0){
            return(<Alert severity="error">Sorry! You've lost the Game!</Alert>);
        }else if(isGameWon){
            return(<Alert severity="success">Congratulations! You'e guessed the word correctly.</Alert>);
        }else{
            return (<></>)
        }
    }

    return(
        <div>
            <p>Remaining Guesses : <strong>{remainingGuesses}</strong></p>
            {
                renderGameWinStatus()
            }
        </div>
    )
};

export default GameStatus;