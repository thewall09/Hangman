const { Button } = require("@material-ui/core");

const Letter = ({ character, disabled,onLetterPressed }) => {
    return(
        <Button variant="contained" disabled={disabled} className="letter" onClick={()=>onLetterPressed(character)}>{character}</Button>
    )
};

export default Letter;