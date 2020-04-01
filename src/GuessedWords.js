import React from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
    return (
        <div data-test="component-guessed-word">
        {props.guessedWords.length === 0 ? 
        (
            <span data-test="guess-instructions">Try to gues a secret word</span>
        ) : (
            <div> GuessedWords</div>
        )
        }
        </div>
    )
}

GuessedWords.propTypes = {
guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
        guessedWord: PropTypes.string.isRequired,
        letterMatchCount: PropTypes.number.isRequired
    }).isRequired,
)
};

export default GuessedWords;